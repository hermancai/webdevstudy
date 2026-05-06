"use client";

import CardsContainer from "./CardsContainer";
import { ReactNode, useState } from "react";
import CardSidebar from "./CardSidebar";

interface SlugContainerProps {
    topic: string;
    backLink: string;
    titles: string[];
    questions: ReactNode[];
    answers: ReactNode[];
    anchors: string[];
}

export default function SlugContainer({
    topic,
    backLink,
    titles,
    questions,
    answers,
    anchors,
}: SlugContainerProps) {
    const [cardsOpen, setCardsOpen] = useState<boolean[]>(
        titles.map(() => false),
    );

    return (
        <div className="flex flex-row w-full relative">
            <CardSidebar
                topic={topic}
                backLink={backLink}
                anchors={anchors}
                titles={titles}
                setCardsOpen={setCardsOpen}
            />
            <div className="px-4 md:px-[clamp(2.5rem,4vw,5rem)] pb-4 md:pb-10 pt-4 md:pt-0 border-t md:border-0 min-w-0 flex-1">
                <CardsContainer
                    cardsOpen={cardsOpen}
                    setCardsOpen={setCardsOpen}
                    anchors={anchors}
                    questions={questions}
                    answers={answers}
                />
            </div>
        </div>
    );
}
