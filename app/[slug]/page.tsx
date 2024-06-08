import parseMarkdown from "@/services/parseMarkdown";
import getProperName from "@/services/getProperName";
import getMarkdownFileNames from "@/services/getMarkdownFileNames";
import NotFoundPage from "@/components/NotFoundPage";
import PageTitle from "@/components/PageTitle";
import CardsContainer from "@/components/CardsContainer";

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
    params: { slug: string };
}) {
    return { title: getProperName(params.slug) + " - WebDevStudy" };
}

export default function Page({ params }: { params: { slug: string } }) {
    const { slug } = params;

    try {
        const cards = parseMarkdown("./markdown/", slug);
        return (
            <>
                <PageTitle title={getProperName(slug)} backLink="/" />
                <CardsContainer cards={cards} />
            </>
        );
    } catch (e) {
        return <NotFoundPage />;
    }
}
