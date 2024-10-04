import fs from "fs";
import type { CardFormat } from "@/types/card";

/**
 * Convert markdown file to list of objects
 * Checks files in markdown folder in root directory
 * Markdown files should be formatted as follows:
 *  **question**
 *  question text
 *  **answer**
 *  answer text
 *
 * @param folder path to markdown folder
 * @param fileName name of markdown file without extension
 * @returns list of objects with question and answer properties
 */
export default function parseMarkdown(
    folder: string,
    fileName: string
): CardFormat[] {
    const markdown = fs.readFileSync(`${folder}${fileName}.md`, "utf-8");

    const objectList: CardFormat[] = [];
    markdown.split("**question**").map((text) => {
        const cardData = text.split("**answer**");
        objectList.push({
            question: cardData[0],
            answer: cardData[1],
        });
    });

    return objectList.slice(1);
}
