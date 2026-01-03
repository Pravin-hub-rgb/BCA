// quiz/subjects/pc/units.js
const pcUnits = [
    {
        id: 1,
        name: "Introduction to C Programming",
        description: "Basic concepts of C programming, program structure, compilation process, and C character set."
    },
    {
        id: 2,
        name: "Data Types and Operators",
        description: "Variables, constants, data types, operators, and expressions in C programming."
    },
    {
        id: 3,
        name: "Control Structures",
        description: "Decision making statements, loops, and control flow in C programs."
    },
    {
        id: 4,
        name: "Functions and Arrays",
        description: "User-defined functions, arrays, strings, and multidimensional arrays in C."
    },
    {
        id: 5,
        name: "Pointers and Structures",
        description: "Pointers, structures, unions, and basic file handling operations in C."
    }
];

// Make available globally
if (typeof window !== 'undefined') {
    window.pcUnits = pcUnits;
}
