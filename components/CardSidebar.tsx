"use client";

import { Dispatch, SetStateAction, useState } from "react";
import CardToggles from "./CardToggles";
import PageTitle from "./PageTitle";

interface CardSidebarProps {
    topic: string;
    backLink: string;
    anchors: string[];
    titles: string[];
    setCardsOpen: Dispatch<SetStateAction<boolean[]>>;
}

export default function CardSidebar({
    topic,
    backLink,
    anchors,
    titles,
    setCardsOpen,
}: CardSidebarProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                className="z-50 md:hidden fixed top-3 right-4 rounded-md border border-neutral-500 bg-neutral-900 hover:bg-neutral-700 p-2 transition-colors h-min"
                title={isOpen ? "Close Sidebar" : "Open Sidebar"}
                aria-label="Toggle Sidebar"
                onClick={() => setIsOpen((prev) => !prev)}
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
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                </svg>
            </button>

            {isOpen && (
                <div
                    className="md:hidden fixed top-0 left-0 h-screen w-screen bg-neutral-900/75 z-30"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {
                // iOS 26.0 safari bug? fixed div with h-[100dvh] does not cover top and bottom
                // viewportFit: "cover" does not help
            }
            <div
                className={`z-40 fixed top-0 md:sticky md:top-[var(--header-height)] bg-neutral-800 h-[100dvh] md:h-[calc(100vh-(var(--header-height)))] flex flex-col w-[clamp(15rem,100vw,18rem)] md:w-[clamp(12rem,25vw,18rem)] flex-shrink-0 border-neutral-300 border-r md:border-0 transform transition-transform md:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                <div className="p-4">
                    <PageTitle
                        title={topic}
                        backLink={backLink}
                        forSidebar={true}
                    />
                </div>
                <div className="h-0 w-full border-t border-neutral-500" />
                <CardToggles setCardsOpen={setCardsOpen} />
                <div className="h-0 w-full border-t border-neutral-500" />
                <div className="flex flex-col overflow-y-auto gap-2 p-4 flex-1">
                    {anchors.map((anchor, i) => (
                        <a
                            href={"#" + anchor}
                            key={anchor}
                            className="hover:bg-neutral-700 rounded-md py-1 px-2 transition-colors"
                        >
                            {titles[i]}
                        </a>
                    ))}
                </div>
                <div className="h-0 w-full border-t border-neutral-500 mb-10" />
            </div>
        </>
    );
}
