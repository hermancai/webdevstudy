import { cache } from "react";
import fs from "fs";
import path from "path";
import { IndexType } from "@/types/indexType";
import { CardFormat } from "@/types/card";

type ContentEntry = {
    slug: string[];
    index: IndexType;
};

// Recursively traverse directory, gathering slugs and index.json
function walk(baseDir: string, dir: string, output: ContentEntry[]) {
    // Check current folder for index.json
    const indexPath = path.join(dir, "index.json");

    if (fs.existsSync(indexPath)) {
        const file = fs.readFileSync(indexPath, "utf-8");
        const relative = path.relative(baseDir, dir);

        // relative returns "" for baseDir. "".split() -> [""] -> invalid slug
        output.push({
            slug: relative ? relative.split(path.sep) : [],
            index: JSON.parse(file),
        });
    }

    // Check nested folders
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        if (!entry.isDirectory()) continue;

        const fullPath = path.join(dir, entry.name);
        walk(baseDir, fullPath, output);
    }
}

// Build catch-all slugs and index object per slug
export const getContentList = cache((): ContentEntry[] => {
    const baseDir = path.join(process.cwd(), "content");
    const output: ContentEntry[] = [];

    walk(baseDir, baseDir, output);

    return output;
});

// Derived map from content list, for slug O(1) lookup
export const getContentMap = cache((): Map<string, IndexType> => {
    const map = new Map<string, IndexType>();
    for (const entry of getContentList()) {
        map.set(entry.slug.join("/"), entry.index);
    }

    return map;
});

export const getIndexCards = (slug: string) => {
    const contentMap = getContentMap().get(slug);
    if (contentMap?.folderType === "topic") return [];

    const files = contentMap?.cards;
    const output: CardFormat[] = [];

    if (files === undefined) return output;

    for (const file of files) {
        const markdown = fs.readFileSync(
            path.join("content", slug, file),
            "utf-8",
        );
        // Markdown is split into 3 parts
        const parts = markdown.split(/## (?:title|question|answer)/).slice(1);

        output.push({
            title: parts[0].trim(),
            question: parts[1].trim(),
            answer: parts[2].trim(),
        });
    }

    return output;
};
