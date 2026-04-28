import fs from "fs";
import type { CardFormat } from "@/types/card";
import { notFound } from "next/navigation";

/**
 * Convert markdown file to list of objects
 * Checks files in markdown folder in root directory
 * Markdown files should be formatted as follows:
 *  **anchor**
 *  text
 *  **question**
 *  text
 *  **answer**
 *  text
 *
 * @param folder path to markdown folder
 * @param fileName name of markdown file without extension
 * @returns list of objects with anchor, question, and answer properties
 */
export default function parseMarkdown(
    folder: string,
    fileName: string,
): CardFormat[] {
    let markdown;
    try {
        markdown = fs.readFileSync(`${folder}${fileName}.md`, "utf-8");
    } catch (e) {
        notFound();
    }

    const cardList: CardFormat[] = [];

    // One card of info will be split into 6 parts
    const parts = markdown.split(/\*\*(anchor|question|answer)\*\*/).slice(1);

    for (let i = 0; i < parts.length; i += 6) {
        const anchor = parts[i + 1].trim();
        const question = parts[i + 3].trim();
        const answer = parts[i + 5].trim();

        cardList.push({ anchor, question, answer });
    }

    return cardList;
}
