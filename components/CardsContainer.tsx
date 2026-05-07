"use client";

import { ReactNode, useState } from "react";
import CardSidebar from "./CardSidebar";
import Card from "./Card";

interface CardsContainerProps {
    topic: string;
    backLink: string;
    titles: string[];
    questions: ReactNode[];
    answers: ReactNode[];
    anchors: string[];
}

export default function CardsContainer({
    topic,
    backLink,
    titles,
    questions,
    answers,
    anchors,
}: CardsContainerProps) {
    const [cardsOpen, setCardsOpen] = useState<boolean[]>(
        titles.map(() => false),
    );

    const toggleCard = (i: number) => {
        setCardsOpen((prev) => {
            const newState = [...prev];
            newState[i] = !newState[i];
            return newState;
        });
    };

    return (
        <div className="flex flex-row w-full relative">
            <CardSidebar
                topic={topic}
                backLink={backLink}
                anchors={anchors}
                titles={titles}
                setCardsOpen={setCardsOpen}
            />
            <div className="px-4 md:px-[clamp(2.5rem,4vw,5rem)] pb-4 md:pb-10 pt-4 md:pt-0 border-t md:border-0 min-w-0 flex-1 flex flex-col gap-6">
                {titles.map((_, i) => {
                    return (
                        <Card
                            key={i}
                            anchor={anchors[i]}
                            question={questions[i]}
                            answer={answers[i]}
                            index={i}
                            isOpen={cardsOpen[i]}
                            setIsOpen={toggleCard}
                        />
                    );
                })}
            </div>
        </div>
    );
}
