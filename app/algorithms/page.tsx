import getMarkdownFileNames from "@/services/getMarkdownFileNames";
import TopicsContainer from "@/components/TopicsContainer";

export async function generateMetadata() {
    return { title: "Algorithms - WebDevStudy" };
}

export default function Home() {
    const fileNames = getMarkdownFileNames("./markdown/algorithms/");

    return (
        <TopicsContainer
            title="Algorithms"
            backLink="/"
            fileNames={fileNames}
            root="/algorithms/"
        />
    );
}
