// quiz/subjects/ac/units.js
const acUnits = [
    {
        id: 1,
        name: "Pointers and Memory Management",
        description: "Advanced pointer concepts, dynamic memory allocation using malloc/calloc/realloc/free, pointer arithmetic, function pointers, and memory management techniques."
    },
    {
        id: 2,
        name: "Advanced Data Structures in C",
        description: "Implementation of linked lists, stacks, queues, trees, and graphs using C programming, along with their operations and applications."
    },
    {
        id: 3,
        name: "File Handling and I/O Operations",
        description: "File operations using fopen/fclose/fread/fwrite, text and binary file handling, random access files, and error handling in file operations."
    },
    {
        id: 4,
        name: "Preprocessor and Advanced Features",
        description: "Preprocessor directives, macro definitions, conditional compilation, header files, command line arguments, and bit manipulation operations."
    },
    {
        id: 5,
        name: "System Programming Concepts",
        description: "System calls, process management, inter-process communication, signal handling, and advanced C programming techniques for system-level programming."
    }
];

// Make available globally
if (typeof window !== 'undefined') {
    window.acUnits = acUnits;
}
