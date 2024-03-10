import Link from "next/link";
import getProperName from "@/services/getProperName";
import getMarkdownFileNames from "@/services/getMarkdownFileNames";

export default function Home() {
    const fileNames = getMarkdownFileNames();

    return (
        <main>
            <h1>Choose A Topic</h1>
            <div className="flex flex-col">
                {fileNames.map((name, i) => {
                    const title = getProperName(name);
                    return (
                        <Link key={i} href={`/${name}`}>
                            {title}
                        </Link>
                    );
                })}
            </div>
        </main>
    );
}
