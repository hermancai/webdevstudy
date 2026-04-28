import parseMarkdown from "@/services/parseMarkdown";
import getProperName from "@/services/getProperName";
import getMarkdownFileNames from "@/services/getMarkdownFileNames";
import SlugContainer from "@/components/SlugContainer";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import Navbar from "@/components/Navbar";

// Routes are generated at build time based on files in the markdown directory
export async function generateStaticParams() {
    const fileNames = getMarkdownFileNames("./markdown/leetcode/");
    return fileNames.map((file) => {
        return { slug: file };
    });
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    return { title: getProperName(slug) + " - WebDevStudy" };
}

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const cards = parseMarkdown("./markdown/leetcode/", slug);
    const anchors = cards.map((card) => card.anchor);
    const questions = cards.map((card, i) => (
        <MarkdownRenderer key={i} markdown={card.question} />
    ));
    const answers = cards.map((card, i) => (
        <MarkdownRenderer key={i} markdown={card.answer} />
    ));

    return (
        <>
            <Navbar />
            <main className="w-full">
                <SlugContainer
                    cards={cards}
                    title={getProperName(slug)}
                    backLink="/leetcode"
                    anchors={anchors}
                    questions={questions}
                    answers={answers}
                />
            </main>
        </>
    );
}
