import HoverPrefetchLink from "./HoverPrefetchLink";

type OptionsGridType = {
    folders: string[];
    titles: string[];
};

export default function OptionsGrid({ folders, titles }: OptionsGridType) {
    return (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
            {folders.map((folder, i) => {
                return (
                    <HoverPrefetchLink
                        key={i}
                        href={folder}
                        title={titles[i]}
                    />
                );
            })}
        </div>
    );
}
