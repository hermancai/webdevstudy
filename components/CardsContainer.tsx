import { Dispatch, ReactNode, SetStateAction } from "react";
import Card from "./Card";

interface CardsContainerProps {
    cardsOpen: boolean[];
    setCardsOpen: Dispatch<SetStateAction<boolean[]>>;
    questions: ReactNode[];
    answers: ReactNode[];
}

export default function CardsContainer({
    cardsOpen,
    setCardsOpen,
    questions,
    answers,
}: CardsContainerProps) {
    const toggleCard = (i: number) => {
        setCardsOpen((prev) => {
            const newState = [...prev];
            newState[i] = !newState[i];
            return newState;
        });
    };

    return (
        <div className="flex flex-col gap-6">
            {cardsOpen.map((bool, i) => {
                return (
                    <Card
                        key={i}
                        question={questions[i]}
                        answer={answers[i]}
                        index={i}
                        isOpen={cardsOpen[i]}
                        setIsOpen={toggleCard}
                    />
                );
            })}
        </div>
    );
}
