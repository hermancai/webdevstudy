import fs from "fs";
import parseMarkdown from "@/services/parseMarkdown";
import getProperName from "@/services/getProperName";
import Card from "@/components/Card";

// Routes are generated at build time based on files in the markdown directory
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
                    return <Card key={i} content={card} number={i + 1} />;
                })}
            </div>
        </div>
    );
}
