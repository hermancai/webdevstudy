import Link from "next/link";

type OptionsGridType = {
    folders: string[];
    titles: string[];
};

export default function OptionsGrid({ folders, titles }: OptionsGridType) {
    return (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
            {folders.map((folder, i) => {
                return (
                    <Link
                        key={i}
                        href={folder}
                        prefetch={false}
                        className="bg-neutral-800 rounded-md p-2 text-center font-mono transition-colors hover:bg-neutral-700"
                    >
                        {titles[i]}
                    </Link>
                );
            })}
        </div>
    );
}
