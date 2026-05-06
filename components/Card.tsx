"use client";

import { MouseEvent, ReactNode } from "react";

type CardProps = {
    index: number;
    anchor: string;
    question: ReactNode;
    answer: ReactNode;
    isOpen: boolean;
    setIsOpen: (i: number) => void;
};

function PlusSVG() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
        </svg>
    );
}

function MinusSVG() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
        </svg>
    );
}

export default function Card({
    anchor,
    question,
    answer,
    index,
    isOpen,
    setIsOpen,
}: CardProps) {
    const handleExpandCard = (e: MouseEvent<HTMLDivElement>) => {
        // Stop propagation if clicking on link
        if ((e.target as HTMLElement).closest("a")) return;
        setIsOpen(index);
    };

    return (
        <div
            className={`scroll-mt-[var(--header-height)] rounded-md bg-neutral-800 border border-neutral-600 ${isOpen ? "border-b-2 border-b-green-500" : ""}`}
            id={anchor}
        >
            <div
                className="flex items-center justify-between gap-2 w-full p-4 border border-transparent hover:border-neutral-300 rounded-md cursor-pointer transition-colors"
                onClick={handleExpandCard}
            >
                {question}
                <div className="self-start">
                    {isOpen ? <MinusSVG /> : <PlusSVG />}
                </div>
            </div>
            <div className={`${isOpen ? "flex" : "hidden"} p-4`}>{answer}</div>
        </div>
    );
}
