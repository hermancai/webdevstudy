"use client";

import { CardFormat } from "@/types/card";
import Navbar from "./Navbar";
import PageTitle from "./PageTitle";
import CardsContainer from "./CardsContainer";
import { ReactNode, useState } from "react";

interface SlugContainerProps {
    cards: CardFormat[];
    title: string;
    backLink: string;
    questions: ReactNode[];
    answers: ReactNode[];
}

export default function SlugContainer({
    cards,
    title,
    backLink,
    questions,
    answers,
}: SlugContainerProps) {
    const [cardsOpen, setCardsOpen] = useState<boolean[]>(
        cards.map(() => false)
    );

    return (
        <>
            <Navbar cardsOpen={cardsOpen} setCardsOpen={setCardsOpen} />
            <div className="p-4 max-w-6xl mx-auto flex flex-col gap-4 w-full">
                <PageTitle title={title} backLink={backLink} />
                <CardsContainer
                    cardsOpen={cardsOpen}
                    setCardsOpen={setCardsOpen}
                    questions={questions}
                    answers={answers}
                />
            </div>
        </>
    );
}
