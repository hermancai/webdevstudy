"use client";

import { ReactNode, useState } from "react";

type CardProps = {
    number: number;
    question: ReactNode;
    answer: ReactNode;
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

export default function Card({ question, answer, number }: CardProps) {
    const [showAnswer, setShowAnswer] = useState(false);

    const toggleShowAnswer = () => {
        setShowAnswer(!showAnswer);
    };

    return (
        <div className="p-3 rounded-md bg-neutral-800 border border-neutral-700">
            <div className="flex flex-row flex-nowrap gap-2 items-start">
                <h3>{number}.</h3>
                <div className="grow overflow-hidden">
                    {question}
                    {showAnswer ? <div className="mt-4">{answer}</div> : null}
                </div>
                <button
                    onClick={toggleShowAnswer}
                    className="rounded-md p-4 hover:bg-neutral-700 transition-colors"
                    title={showAnswer ? "Hide Answer" : "Show Answer"}
                >
                    {showAnswer ? <MinusSVG /> : <PlusSVG />}
                </button>
            </div>
        </div>
    );
}
