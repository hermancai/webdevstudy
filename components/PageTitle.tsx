import Link from "next/link";

type PageTitleType = {
    title: string;
    backLink?: string;
    forSidebar?: boolean;
};

export default function PageTitle({
    title,
    backLink,
    forSidebar,
}: PageTitleType) {
    return (
        <div className="flex flex-nowrap gap-4 items-center">
            {backLink !== undefined && (
                <Link
                    href={backLink}
                    className={`rounded-md hover:bg-neutral-700 transition-colors py-1 px-2 ${forSidebar && "hidden md:block"}`}
                    aria-label="Back to previous page"
                    scroll={false}
                >
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                            />
                        </svg>
                    </div>
                </Link>
            )}
            <h1 className={`text-2xl ${forSidebar && "px-2 md:px-0"}`}>
                {title}
            </h1>
        </div>
    );
}
