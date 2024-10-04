import Link from "next/link";
import getProperName from "@/services/getProperName";

type OptionsGridType = {
    fileNames: string[];
    root: string;
};

export default function OptionsGrid({ fileNames, root }: OptionsGridType) {
    return (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
            {fileNames.map((name, i) => {
                const title = getProperName(name);
                return (
                    <Link
                        key={i}
                        href={`${root}${name}`}
                        className="bg-neutral-800 rounded-md p-2 text-center font-mono transition-colors hover:bg-neutral-700"
                        scroll={false}
                    >
                        {title}
                    </Link>
                );
            })}
        </div>
    );
}
