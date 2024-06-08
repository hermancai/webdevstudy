import getMarkdownFileNames from "@/services/getMarkdownFileNames";
import OptionsGrid from "@/components/OptionsGrid";
import PageTitle from "@/components/PageTitle";

export default function Home() {
    const fileNames = getMarkdownFileNames("./markdown");
    fileNames.push("algorithms");
    fileNames.sort();

    return (
        <>
            <PageTitle title="Web Development Topics" />
            <OptionsGrid fileNames={fileNames} root="/" />
        </>
    );
}
