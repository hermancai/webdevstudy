import fs from "fs";
import convertMarkdownToJSON from "@/services/convertMarkdownToJSON";
import getProperName from "@/services/getProperName";

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
    const cards = convertMarkdownToJSON(slug);

    return (
        <div>
            <h1>{slug}</h1>
            <div>
                {cards.map((card, i) => {
                    return (
                        <div key={i}>
                            <h1>{i + 1}.</h1>
                            <p>{card.question}</p>
                            <p>{card.answer}</p>
                            <br />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
