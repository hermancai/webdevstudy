const dictionary: { [key: string]: string } = {
    algorithms: "Algorithms",
    general: "General",
    javascript: "JavaScript",
    react: "React",
    typescript: "TypeScript",
    git: "Git",
    arraystring: "Array / String",
    binarytree: "Binary Tree",
    hashmap: "Hashmap",
    linkedlist: "Linked List",
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
