// quiz/subjects/ds/units.js
const dsUnits = [
    {
        id: 1,
        name: "Introduction to Data Structures",
        description: "Arrays, linked lists, stacks, queues, recursion, and asymptotic complexity analysis including Big O notation."
    },
    {
        id: 2,
        name: "Trees and Graphs",
        description: "Binary trees, binary search trees, AVL trees, B-trees, graph representations, graph traversals, and shortest path algorithms."
    },
    {
        id: 3,
        name: "Sorting and Searching",
        description: "Bubble sort, selection sort, insertion sort, quick sort, merge sort, heap sort, linear search, and binary search algorithms."
    },
    {
        id: 4,
        name: "Hashing and Files",
        description: "Hash tables, hash functions, collision resolution, file organizations, indexed files, and B+ trees."
    },
    {
        id: 5,
        name: "Advanced Data Structures",
        description: "Heaps, tries, red-black trees, splay trees, skip lists, and algorithm analysis techniques."
    }
];

// Make available globally
if (typeof window !== 'undefined') {
    window.dsUnits = dsUnits;
}
