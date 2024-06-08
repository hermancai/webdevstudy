import parseMarkdown from "@/services/parseMarkdown";
import getProperName from "@/services/getProperName";
import Card from "@/components/Card";
import getMarkdownFileNames from "@/services/getMarkdownFileNames";
import NotFoundPage from "@/components/NotFoundPage";
import MarkdownRenderer from "@/components/MarkdownRenderer";

// Routes are generated at build time based on files in the markdown directory
export async function generateStaticParams() {
    const fileNames = getMarkdownFileNames("./markdown/");
    return fileNames.map((file) => {
        return { slug: file };
    });
}

export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}) {
    return { title: getProperName(params.slug) + " - WebDevStudy" };
}

export default function Page({ params }: { params: { slug: string } }) {
    const { slug } = params;

    try {
        const cards = parseMarkdown("./markdown/", slug);
        return (
            <div className="max-w-6xl mx-auto flex flex-col gap-4 w-full">
                <h1 className="font-mono text-2xl">{getProperName(slug)}</h1>
                <div className="flex flex-col gap-6">
                    {cards.map((card, i) => {
                        return (
                            <Card
                                key={i}
                                question={
                                    <MarkdownRenderer
                                        markdown={card.question}
                                    />
                                }
                                answer={
                                    <MarkdownRenderer markdown={card.answer} />
                                }
                                number={i + 1}
                            />
                        );
                    })}
                </div>
            </div>
        );
    } catch (e) {
        return <NotFoundPage />;
    }
}
