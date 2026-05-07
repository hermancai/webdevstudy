import TopicsContainer from "@/components/TopicsContainer";
import { getContentMap } from "@/lib/getContent";

// Root folders stored in @/content
const ROOT_FOLDERS = ["webdev", "leetcode"];

function processFolder(folderPath: string) {
    const contentMap = getContentMap();

    const index = contentMap.get(folderPath);
    if (!index || index.folderType === "card") {
        throw new Error("Missing index.json");
    }

    const folders: string[] = [];
    const titles: string[] = [];

    index.topics.forEach((topic) => {
        folders.push(folderPath + "/" + topic.folder);
        titles.push(topic.title);
    });

    return (
        <TopicsContainer
            key={index.title}
            title={index.title}
            folders={folders}
            titles={titles}
        />
    );
}

export default function Page() {
    return (
        <div className="flex flex-col gap-2">
            {ROOT_FOLDERS.map((folder) => {
                return processFolder(folder);
            })}
        </div>
    );
}
