const dictionary: { [key: string]: string } = {
    algorithms: "Algorithms",
    general: "General",
    javascript: "JavaScript",
    react: "React",
    typescript: "TypeScript",
    git: "Git",
    arraystring: "Array / String",
    backtracking: "Backtracking",
    binarysearch: "Binary Search",
    binarytree: "Binary Tree",
    divideconquer: "Divide & Conquer",
    dynamicprogramming: "Dynamic Programming",
    graph: "Graph",
    hashmap: "Hashmap",
    heap: "Heap",
    intervals: "Intervals",
    linkedlist: "Linked List",
    math: "Math",
    matrix: "Matrix",
    slidingwindow: "Sliding Window",
    stack: "Stack",
    twopointers: "Two Pointers",
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
