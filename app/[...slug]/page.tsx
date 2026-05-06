import TopicsContainer from "@/components/TopicsContainer";
import SlugContainer from "@/components/SlugContainer";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { getContentList, getContentMap, getIndexCards } from "@/lib/getContent";
import { notFound } from "next/navigation";
import path from "path";
import { ReactNode } from "react";

interface ParamSlug {
    params: Promise<{ slug: string[] }>;
}

// Routes are generated at build time based on files in /content
export async function generateStaticParams() {
    return getContentList().map((entry) => {
        return { slug: entry.slug };
    });
}

export async function generateMetadata({ params }: ParamSlug) {
    const { slug } = await params;
    return {
        title: getContentMap().get(slug.join("/"))?.title + " | WebDevStudy",
    };
}

export default async function Page({ params }: ParamSlug) {
    const { slug } = await params;
    const slugString = slug.join("/");

    const contentMap = getContentMap().get(slugString);
    if (contentMap === undefined) return notFound();

    if (contentMap.folderType === "topic") {
        const folders: string[] = [];
        const titles: string[] = [];

        contentMap.topics.forEach((topic) => {
            folders.push(topic.folder);
            titles.push(topic.title);
        });

        return (
            <TopicsContainer
                backLink={"/" + slug.slice(0, -1).join("/")}
                title={contentMap.title}
                folders={folders}
                titles={titles}
                root={slugString}
            />
        );
    }

    const cards = getIndexCards(slugString);
    const titles: string[] = [];
    const questions: ReactNode[] = [];
    const answers: ReactNode[] = [];
    cards.forEach((card, i) => {
        titles.push(card.title);
        questions.push(<MarkdownRenderer key={i} markdown={card.question} />);
        answers.push(<MarkdownRenderer key={i} markdown={card.answer} />);
    });

    const anchors = contentMap.cards.map((filename) => {
        // Assuming string is filename with extension e.g. "topic.md"
        return path.parse(filename).name;
    });

    return (
        <SlugContainer
            backLink={"/" + slug.slice(0, -1).join("/")}
            topic={contentMap.title}
            titles={titles}
            questions={questions}
            answers={answers}
            anchors={anchors}
        />
    );
}
