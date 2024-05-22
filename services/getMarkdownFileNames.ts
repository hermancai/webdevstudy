import fs from "fs";

/**
 * Gets list of markdown file names without the .md extension
 * Files are located in the markdown directory at the root of the project
 *
 * @returns list of markdown file names
 */
export default function getMarkdownFileNames() {
    const files = fs.readdirSync("./markdown");

    return files.map((file) => {
        return file.replace(".md", "");
    });
}
