const dictionary: { [key: string]: string } = {
    javascript: "JavaScript",
    typescript: "TypeScript",
};

/**
 * Get proper name
 *
 * @param name name to be converted
 * @returns proper name or original name if not found in dictionary
 */
export default function getProperName(name: string) {
    return dictionary[name] || name;
}
