import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

const MenuBar = ({ editor }) => {
    if (!editor) {
        return null;
    }

    const buttonClass = (isActive) =>
        `p-2 rounded-lg transition-all text-sm font-medium ${isActive
            ? 'bg-blue-600/30 text-blue-300 border border-blue-500/50'
            : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-transparent'
        }`;

    return (
        <div className="flex flex-wrap gap-2 p-3 bg-black/30 border-b border-white/10 rounded-t-xl">
            {/* Text Formatting */}
            <div className="flex gap-1 items-center pr-3 border-r border-white/10">
                <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className={buttonClass(editor.isActive('bold'))}
                    title="Bold"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path d="M8 11h4.5a2.5 2.5 0 0 0 0-5H8v5Zm0 2v5h5a2.5 2.5 0 0 0 0-5H8Z" />
                        <path fillRule="evenodd" d="M4 4a1 1 0 0 1 1-1h7.5a4.5 4.5 0 0 1 3.256 7.606A4.5 4.5 0 0 1 13 19H5a1 1 0 0 1-1-1V4Zm2 2v4.5h6.5a2.5 2.5 0 0 0 0-5H6Zm0 6.5V16h7a2.5 2.5 0 0 0 0-5H6Z" clipRule="evenodd" />
                    </svg>
                </button>
                <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className={buttonClass(editor.isActive('italic'))}
                    title="Italic"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M10 5a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-2.22l-3.12 12H14a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h2.22l3.12-12H11a1 1 0 0 1-1-1Z" clipRule="evenodd" />
                    </svg>
                </button>
                <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    className={buttonClass(editor.isActive('strike'))}
                    title="Strikethrough"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M3 12a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm5.969-6.971a5.001 5.001 0 0 1 6.062 0A1 1 0 1 1 13.8 6.743a3 3 0 0 0-3.6 0 1 1 0 0 1-1.231-1.576Zm-.2 11.914a3 3 0 0 0 4.464 0A1 1 0 0 1 14.8 18.43a5.001 5.001 0 0 1-7.462 0 1 1 0 1 1 1.431-1.487Z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>

            {/* Headings */}
            <div className="flex gap-1 items-center pr-3 border-r border-white/10">
                <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                    className={buttonClass(editor.isActive('heading', { level: 1 }))}
                    title="Heading 1"
                >
                    H1
                </button>
                <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                    className={buttonClass(editor.isActive('heading', { level: 2 }))}
                    title="Heading 2"
                >
                    H2
                </button>
                <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                    className={buttonClass(editor.isActive('heading', { level: 3 }))}
                    title="Heading 3"
                >
                    H3
                </button>
            </div>

            {/* Lists & Blocks */}
            <div className="flex gap-1 items-center">
                <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={buttonClass(editor.isActive('bulletList'))}
                    title="Bullet List"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M2.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM8 5.5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm0 6.5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm1 5.5a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2H9Zm-5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM2.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" clipRule="evenodd" />
                    </svg>
                </button>
                <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    className={buttonClass(editor.isActive('orderedList'))}
                    title="Ordered List"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M2.25 5.25a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 .75.75v2.5h.25a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1 0-1.5h.25v-1.75H3a.75.75 0 0 1-.75-.75ZM3 12.25a.75.75 0 0 0-.673 1.085l1.036 2.072a.75.75 0 0 0 1.118.195l.269-.215v.113a.75.75 0 0 1-1.5 0v-.113l-.269.215a.75.75 0 0 1-1.118-.195l-1.036-2.072A2.25 2.25 0 0 1 3 10.75a.75.75 0 0 0 0 1.5Zm6-6a1 1 0 0 1 1-1h11a1 1 0 1 1 0 2H10a1 1 0 0 1-1-1Zm0 6a1 1 0 0 1 1-1h11a1 1 0 1 1 0 2H10a1 1 0 0 1-1-1Zm1 5a1 1 0 1 0 0 2h11a1 1 0 1 0 0-2H10Z" clipRule="evenodd" />
                    </svg>
                </button>
                <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                    className={buttonClass(editor.isActive('blockquote'))}
                    title="Blockquote"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179Zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179Z" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

const TiptapEditor = ({ content, onUpdate }) => {
    const editor = useEditor({
        extensions: [StarterKit],
        content: content || '',
        onUpdate: ({ editor }) => {
            onUpdate(editor.getHTML());
        },
        editorProps: {
            attributes: {
                class: 'prose prose-invert prose-sm sm:prose-base max-w-none focus:outline-none min-h-[250px] p-4 text-gray-200',
            },
        },
    });

    // Update editor content when prop changes (for edit mode)
    React.useEffect(() => {
        if (editor && content !== editor.getHTML()) {
            editor.commands.setContent(content || '');
        }
    }, [content, editor]);

    return (
        <div className="border border-white/10 rounded-xl overflow-hidden bg-black/20">
            <MenuBar editor={editor} />
            <EditorContent editor={editor} />
        </div>
    );
};

export default TiptapEditor;
