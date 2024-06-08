import Card from "./Card";
import MarkdownRenderer from "./MarkdownRenderer";
import type { CardFormat } from "@/custom-types";

export default function CardsContainer({ cards }: { cards: CardFormat[] }) {
    return (
        <div className="flex flex-col gap-6">
            {cards.map((card, i) => {
                return (
                    <Card
                        key={i}
                        question={<MarkdownRenderer markdown={card.question} />}
                        answer={<MarkdownRenderer markdown={card.answer} />}
                        number={i + 1}
                    />
                );
            })}
        </div>
    );
}
