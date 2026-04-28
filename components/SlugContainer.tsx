"use client";

import { CardFormat } from "@/types/card";
import CardsContainer from "./CardsContainer";
import { ReactNode, useState } from "react";
import CardSidebar from "./CardSidebar";

interface SlugContainerProps {
    cards: CardFormat[];
    title: string;
    backLink: string;
    anchors: string[];
    questions: ReactNode[];
    answers: ReactNode[];
}

export default function SlugContainer({
    cards,
    title,
    backLink,
    anchors,
    questions,
    answers,
}: SlugContainerProps) {
    const [cardsOpen, setCardsOpen] = useState<boolean[]>(
        cards.map(() => false),
    );

    return (
        <div className="flex flex-row w-full relative">
            <CardSidebar
                cardsOpen={cardsOpen}
                setCardsOpen={setCardsOpen}
                anchors={anchors}
                title={title}
                backLink={backLink}
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
