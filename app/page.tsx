import TopicsContainer from "@/components/TopicsContainer";
import { getContentMap } from "@/lib/getContent";

export default function Home() {
    const index = getContentMap().get("");
    if (!index || index.folderType === "card") {
        throw new Error("Missing index.json");
    }

    const folders: string[] = [];
    const titles: string[] = [];

    index.topics.forEach((topic) => {
        folders.push(topic.folder);
        titles.push(topic.title);
    });

    return (
        <TopicsContainer
            root=""
            title={index.title}
            folders={folders}
            titles={titles}
        />
    );
}
