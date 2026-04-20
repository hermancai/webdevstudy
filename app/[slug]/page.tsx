import parseMarkdown from "@/services/parseMarkdown";
import getProperName from "@/services/getProperName";
import getMarkdownFileNames from "@/services/getMarkdownFileNames";
import NotFoundPage from "@/components/NotFoundPage";
import SlugContainer from "@/components/SlugContainer";
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

    try {
        const cards = parseMarkdown("./markdown/", slug);
        const questions = cards.map((card, i) => (
            <MarkdownRenderer key={i} markdown={card.question} />
        ));
        const answers = cards.map((card, i) => (
            <MarkdownRenderer key={i} markdown={card.answer} />
        ));

        return (
            <SlugContainer
                cards={cards}
                title={getProperName(slug)}
                backLink="/"
                questions={questions}
                answers={answers}
            />
        );
    } catch (e) {
        return <NotFoundPage />;
    }
}
