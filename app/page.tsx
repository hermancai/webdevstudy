import Link from "next/link";
import getProperName from "@/services/getProperName";
import getMarkdownFileNames from "@/services/getMarkdownFileNames";

export default function Home() {
    const fileNames = getMarkdownFileNames("./markdown");
    fileNames.push("algorithms");
    fileNames.sort();

    return (
        <main className="max-w-6xl mx-auto flex flex-col gap-4 grow w-full">
            <h1 className="text-xl text-gray-400">
                Common Technical Interview Questions
            </h1>
            <h1 className="text-4xl mb-2">Choose A Topic</h1>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
                {fileNames.map((name, i) => {
                    const title = getProperName(name);
                    return (
                        <Link
                            key={i}
                            href={`/${name}`}
                            className="bg-neutral-800 rounded-md p-2 text-center font-mono transition-colors hover:bg-neutral-700"
                        >
                            {title}
                        </Link>
                    );
                })}
            </div>
            <p className="mt-auto self-center text-gray-400 text-sm">
                Content is updated regularly.
            </p>
        </main>
    );
}
