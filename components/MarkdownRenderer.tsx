import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function MarkdownRenderer({ markdown }: { markdown: string }) {
    // <br/> tags are replaced with a span element to allow for custom styling
    const replacedMarkdown = markdown.replaceAll(
        "<br/>",
        "<span class='break'></span>"
    );

    return (
        <Markdown
            className={"markdown"}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
                code({ node, inline, className, children, ...props }: any) {
                    const match = /language-(\w+)/.exec(className || "");

                    if (!inline && match) {
                        return (
                            <SyntaxHighlighter
                                style={vscDarkPlus}
                                PreTag="div"
                                language={match[1]}
                                {...props}
                                className="rounded-md p-4 border-2 border-neutral-900"
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
            {replacedMarkdown}
        </Markdown>
    );
}
