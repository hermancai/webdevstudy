import getMarkdownFileNames from "@/services/getMarkdownFileNames";
import TopicsContainer from "@/components/TopicsContainer";

export default function Home() {
    const fileNames = getMarkdownFileNames("./markdown");
    fileNames.push("algorithms");
    fileNames.sort();

    return (
        <TopicsContainer
            title="Web Development Topics"
            fileNames={fileNames}
            root="/"
        />
    );
}
