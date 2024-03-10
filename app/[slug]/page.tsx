import parseMarkdown from "@/services/parseMarkdown";
import getProperName from "@/services/getProperName";
import Card from "@/components/Card";
import getMarkdownFileNames from "@/services/getMarkdownFileNames";
import Link from "next/link";

// Routes are generated at build time based on files in the markdown directory
export async function generateStaticParams() {
    const fileNames = getMarkdownFileNames();
    return fileNames.map((file) => {
        return { slug: file };
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
    try {
        const cards = parseMarkdown(slug);
        return (
            <div className="max-w-6xl mx-auto flex flex-col gap-4">
                <h1 className="font-mono text-2xl">{getProperName(slug)}</h1>
                <div className="flex flex-col gap-6">
                    {cards.map((card, i) => {
                        return <Card key={i} content={card} number={i + 1} />;
                    })}
                </div>
            </div>
        );
    } catch (e) {
        return (
            <div className="max-w-6xl mx-auto flex flex-col gap-4">
                <h1 className="text-3xl">Page Not Found</h1>
                <Link
                    href="/"
                    className="py-2 px-4 rounded bg-neutral-800 hover:bg-neutral-700 transition-colors w-min whitespace-nowrap"
                >
                    Home Page
                </Link>
            </div>
        );
    }
}
