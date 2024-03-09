import fs from "fs";
import parseMarkdown from "@/services/parseMarkdown";
import getProperName from "@/services/getProperName";
import MarkdownRenderer from "@/components/MarkdownRenderer";

export async function generateStaticParams() {
    const files = fs.readdirSync("./markdown");
    return files.map((file) => {
        return { slug: file.replace(".md", "") };
    });
}

export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}) {
    return { title: "WebDevStudy - " + getProperName(params.slug) };
}

export default function Page({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const cards = parseMarkdown(slug);

    return (
        <div>
            <h1>{slug}</h1>
            <div>
                {cards.map((card, i) => {
                    return (
                        <div key={i}>
                            <h1>{i + 1}.</h1>
                            <div>
                                <MarkdownRenderer markdown={card.question} />
                            </div>
                            <div>
                                <MarkdownRenderer markdown={card.answer} />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
