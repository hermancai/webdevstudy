import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function MarkdownRenderer({ markdown }: { markdown: string }) {
    return (
        <Markdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
                code({ node, inline, className, children, ...props }: any) {
                    const match = /language-(\w+)/.exec(className || "");

                    if (!inline && match) {
                        return (
                            <SyntaxHighlighter
                                style={atomDark}
                                PreTag="div"
                                language={match[1]}
                                {...props}
                            >
                                {String(children).replace(/\n$/, "")}
                            </SyntaxHighlighter>
                        );
                    } else {
                        return (
                            <code className={className} {...props}>
                                {children}
                            </code>
                        );
                    }
                },
            }}
        >
            {markdown}
        </Markdown>
    );
}
