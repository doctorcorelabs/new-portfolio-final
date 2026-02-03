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
            const { postId, type } = await request.json();

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
                userPrompt = `Please summarize the following article in a concise paragraph:\n\n${post.content.replace(/<[^>]*>?/gm, '')}`;

            } else if (type === 'translate') {
                if (post.ai_translation) {
                    return new Response(JSON.stringify({ result: post.ai_translation }), {
                        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
                    });
                }
                systemPrompt = "You are a helpful assistant that translates text to Indonesian.";
                userPrompt = `Please translate the following article content to Indonesian. Maintain the original tone and meaning:\n\n${post.content.replace(/<[^>]*>?/gm, '')}`;
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
