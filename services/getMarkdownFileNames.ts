import fs from "fs";

/**
 * Gets list of markdown file names in given folder without the .md extension
 *
 * @param folder - folder to search for markdown files
 * @returns list of markdown file names
 */
export default function getMarkdownFileNames(folder: string) {
    const folderContents = fs.readdirSync(folder);
    const files = folderContents.filter((file) => {
        return file.endsWith(".md");
    });

    return files.map((file) => {
        return file.replace(".md", "");
    });
}
