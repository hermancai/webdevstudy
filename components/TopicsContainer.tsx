import OptionsGrid from "./OptionsGrid";
import PageTitle from "./PageTitle";

interface TopicsContainerProps {
    title: string;
    backLink?: string;
    fileNames: string[];
    root: string;
}

export default function TopicsContainer({
    title,
    backLink,
    fileNames,
    root,
}: TopicsContainerProps) {
    return (
        <div className="px-6 pt-2 pb-6 max-w-6xl mx-auto flex flex-col gap-4 w-full">
            <PageTitle title={title} backLink={backLink} />
            <OptionsGrid fileNames={fileNames} root={root} />
        </div>
    );
}
