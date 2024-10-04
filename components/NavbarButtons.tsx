"use client";

import { Dispatch, SetStateAction, useState } from "react";

interface NavbarButtonsProps {
    setCardsOpen: Dispatch<SetStateAction<boolean[]>>;
}

export default function NavbarButtons({ setCardsOpen }: NavbarButtonsProps) {
    const [expand, setExpand] = useState(false);

    const expandAll = () => {
        setCardsOpen((prev) => prev.map(() => true));
        setExpand(true);
    };

    const collapseAll = () => {
        setCardsOpen((prev) => prev.map(() => false));
        setExpand(false);
    };

    return (
        <div className="flex flex-row self-center gap-4 max-[400px]:hidden absolute left-1/2 -translate-x-1/2">
            <button
                title="Scroll to bottom"
                onClick={() => document.body.scrollIntoView(false)}
                className="rounded-md p-2 hover:bg-neutral-700 transition-colors"
            >
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
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                </svg>
            </button>
            <button
                onClick={expand ? collapseAll : expandAll}
                title={expand ? "Collapse All" : "Expand All"}
                className="rounded-md p-2 hover:bg-neutral-700 transition-colors"
            >
                {expand ? (
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
                            d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25"
                        />
                    </svg>
                ) : (
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
                            d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                        />
                    </svg>
                )}
            </button>
            <button
                title="Scroll to top"
                onClick={() => document.body.scrollIntoView()}
                className="rounded-md p-2 hover:bg-neutral-700 transition-colors"
            >
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
                        d="m4.5 15.75 7.5-7.5 7.5 7.5"
                    />
                </svg>
            </button>
        </div>
    );
}
