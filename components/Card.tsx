"use client";

import { useState } from "react";
import MarkdownRenderer from "./MarkdownRenderer";
import type { CardFormat } from "@/custom-types";

type CardProps = {
    content: CardFormat;
    number: number;
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

export default function Card({ content, number }: CardProps) {
    const [showAnswer, setShowAnswer] = useState(false);

    const toggleShowAnswer = () => {
        setShowAnswer(!showAnswer);
    };

    return (
        <div>
            <div className="flex flex-row flex-nowrap gap-2 items-start">
                <h3>{number}.</h3>
                <div>
                    <MarkdownRenderer markdown={content.question} />
                </div>
                <button onClick={toggleShowAnswer}>
                    {showAnswer ? <MinusSVG /> : <PlusSVG />}
                </button>
            </div>
            {showAnswer ? (
                <div>
                    <MarkdownRenderer markdown={content.answer} />
                </div>
            ) : null}
        </div>
    );
}
