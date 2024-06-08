import getMarkdownFileNames from "@/services/getMarkdownFileNames";
import OptionsGrid from "@/components/OptionsGrid";
import PageTitle from "@/components/PageTitle";

export async function generateMetadata() {
    return { title: "Algorithms - WebDevStudy" };
}

export default function Home() {
    const fileNames = getMarkdownFileNames("./markdown/algorithms/");

    return (
        <>
            <PageTitle title="Algorithms" backLink="/" />
            <OptionsGrid fileNames={fileNames} root="/algorithms/" />
        </>
    );
}
