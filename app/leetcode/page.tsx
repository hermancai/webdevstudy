import getMarkdownFileNames from "@/services/getMarkdownFileNames";
import TopicsContainer from "@/components/TopicsContainer";
import Navbar from "@/components/Navbar";

export async function generateMetadata() {
    return { title: "LeetCode - WebDevStudy" };
}

export default function Home() {
    const fileNames = getMarkdownFileNames("./markdown/leetcode/");

    return (
        <>
            <Navbar />
            <main className="w-full">
                <TopicsContainer
                    title="LeetCode"
                    backLink="/"
                    fileNames={fileNames}
                    root="/leetcode/"
                />
            </main>
        </>
    );
}
