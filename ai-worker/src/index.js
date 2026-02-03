import { createClient } from '@supabase/supabase-js';

export default {
    async fetch(request, env) {
        // Enable CORS
        if (request.method === "OPTIONS") {
            return new Response(null, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "POST, OPTIONS",
                    "Access-Control-Allow-Headers": "Content-Type",
                },
            });
        }

        if (request.method !== 'POST') {
            return new Response('Method not allowed', { status: 405 });
        }

        try {
            const body = await request.json();

            // ============================================
            // CHAT ENDPOINT - For contextual chatbot
            // ============================================
            if (body.message !== undefined) {
                const { articleId, articleTitle, articleContent, message, conversationHistory = [], turnstileToken } = body;

                if (!message || !articleContent) {
                    return new Response(JSON.stringify({ error: 'Missing required fields' }), {
                        status: 400,
                        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
                    });
                }

                // Verify Turnstile token for first message
                const isFirstMessage = conversationHistory.length === 0;

                if (isFirstMessage) {
                    if (!turnstileToken) {
                        return new Response(JSON.stringify({
                            error: 'Verification required. Please complete the security check.'
                        }), {
                            status: 403,
                            headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
                        });
                    }

                    console.log(`[Worker] Verifying Turnstile token for first message`);

                    try {
                        const verifyResponse = await fetch(
                            'https://challenges.cloudflare.com/turnstile/v0/siteverify',
                            {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({
                                    secret: env.TURNSTILE_SECRET_KEY,
                                    response: turnstileToken
                                })
                            }
                        );

                        const verifyData = await verifyResponse.json();

                        if (!verifyData.success) {
                            console.error(`[Worker] Turnstile verification failed:`, verifyData);
                            return new Response(JSON.stringify({
                                error: 'Verification failed. Please refresh and try again.'
                            }), {
                                status: 403,
                                headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
                            });
                        }

                        console.log(`[Worker] Turnstile verification successful`);
                    } catch (verifyError) {
                        console.error(`[Worker] Turnstile verification error:`, verifyError);
                        return new Response(JSON.stringify({
                            error: 'Verification error. Please try again.'
                        }), {
                            status: 500,
                            headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
                        });
                    }
                }

                console.log(`[Worker] Processing chat for article: ${articleTitle}`);

                // Build context-aware system prompt
                const cleanContent = articleContent.replace(/\u003c[^\u003e]*\u003e?/gm, '');
                const contentPreview = cleanContent.substring(0, 3000);

                const systemPrompt = `You are an AI assistant helping users understand an article titled "${articleTitle}".

Article Content:
${contentPreview}${cleanContent.length > 3000 ? '...' : ''}

Instructions:
- Answer questions based ONLY on the article content provided above
- If the user asks about information not in the article, politely say you can only answer questions about this specific article
- Be concise but informative (aim for 2-3 sentences unless more detail is requested)
- Use a friendly, professional tone
- Format your responses using markdown when helpful:
  - Use **bold** for key terms and important points
  - Use *italic* for emphasis
  - Use bullet points for lists
  - Use headings (##) for section organization when needed
- Always stay on topic with the article`;

                const messages = [
                    { role: 'system', content: systemPrompt },
                    ...conversationHistory.slice(-6), // Keep last 6 messages for context
                    { role: 'user', content: message }
                ];

                try {
                    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
                        method: "POST",
                        headers: {
                            "Authorization": `Bearer ${env.OPENROUTER_API_KEY}`,
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            "model": "openai/gpt-oss-120b",
                            "messages": messages,
                            "max_tokens": 500,
                            "temperature": 0.7
                        })
                    });

                    if (!response.ok) {
                        const errorText = await response.text();
                        console.error(`[Worker] OpenRouter chat error:`, errorText);
                        throw new Error(`OpenRouter API Error: ${response.status}`);
                    }

                    const aiData = await response.json();

                    if (aiData.error) {
                        throw new Error(`OpenRouter Error: ${aiData.error.message}`);
                    }

                    if (!aiData.choices || aiData.choices.length === 0) {
                        throw new Error("No response from AI");
                    }

                    const aiResponse = aiData.choices[0].message.content;

                    return new Response(JSON.stringify({ response: aiResponse }), {
                        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
                    });

                } catch (chatError) {
                    console.error(`[Worker] Chat request failed:`, chatError);
                    throw chatError;
                }
            }

            // ============================================
            // SUMMARY/TRANSLATE ENDPOINTS - Existing logic
            // ============================================
            const { postId, type } = body;

            if (!postId || !type) {
                return new Response('Missing postId or type', { status: 400 });
            }

            // Initialize Supabase
            const supabase = createClient(env.SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

            // Fetch the post
            const { data: post, error: fetchError } = await supabase
                .from('nucleus_posts')
                .select('*')
                .eq('id', postId)
                .single();

            if (fetchError || !post) {
                return new Response('Post not found', { status: 404 });
            }

            let resultText = '';
            const updateData = {};
            let systemPrompt = "";
            let userPrompt = "";

            if (type === 'summary') {
                if (post.ai_summary) {
                    return new Response(JSON.stringify({ result: post.ai_summary }), {
                        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
                    });
                }
                systemPrompt = "You are a helpful assistant that summarizes articles concisely.";
                userPrompt = `Please summarize the following article in a concise paragraph:\n\n${post.content.replace(/\u003c[^\u003e]*\u003e?/gm, '')}`;

            } else if (type === 'translate') {
                if (post.ai_translation) {
                    return new Response(JSON.stringify({ result: post.ai_translation }), {
                        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
                    });
                }
                systemPrompt = "You are a helpful assistant that translates text to Indonesian.";
                userPrompt = `Please translate the following article content to Indonesian. Maintain the original tone and meaning:\n\n${post.content.replace(/\u003c[^\u003e]*\u003e?/gm, '')}`;
            } else {
                return new Response('Invalid type', { status: 400 });
            }

            console.log(`[Worker] Processing ${type} for post ${postId}`);

            // Call OpenRouter
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 60000); // 60s timeout

            console.log(`[Worker] Sending request to OpenRouter model: openai/gpt-oss-120b`);

            try {
                const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${env.OPENROUTER_API_KEY}`,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        "model": "openai/gpt-oss-120b",
                        "messages": [
                            { "role": "system", "content": systemPrompt },
                            { "role": "user", "content": userPrompt }
                        ],
                        "reasoning": { "enabled": true }
                    }),
                    signal: controller.signal
                });

                clearTimeout(timeoutId);
                console.log(`[Worker] OpenRouter status: ${response.status}`);

                if (!response.ok) {
                    const errorText = await response.text();
                    console.error(`[Worker] OpenRouter error body:`, errorText);
                    throw new Error(`OpenRouter API Error: ${response.status} - ${errorText}`);
                }

                const aiData = await response.json();

                if (aiData.error) {
                    throw new Error(`OpenRouter Error: ${aiData.error.message}`);
                }

                if (!aiData.choices || aiData.choices.length === 0) {
                    throw new Error("No response from AI");
                }

                resultText = aiData.choices[0].message.content;

                if (type === 'summary') {
                    updateData.ai_summary = resultText;
                } else {
                    updateData.ai_translation = resultText;
                }

            } catch (openRouterError) {
                clearTimeout(timeoutId);
                console.error(`[Worker] OpenRouter request failed:`, openRouterError);
                throw openRouterError;
            }

            // Update Supabase
            const { error: updateError } = await supabase
                .from('nucleus_posts')
                .update(updateData)
                .eq('id', postId);

            if (updateError) {
                console.error('Update Error:', updateError);
            }

            return new Response(JSON.stringify({ result: resultText }), {
                headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
            });

        } catch (error) {
            console.error(error);
            return new Response(JSON.stringify({ error: error.message }), {
                status: 500,
                headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
            });
        }
    }
};
