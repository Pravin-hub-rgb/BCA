// quiz/subjects/sp/units.js
const spUnits = [
    {
        id: 1,
        name: "Introduction to System Programming",
        description: "Basic concepts of system programming, evolution of language processors, system software components, and programming environments."
    },
    {
        id: 2,
        name: "Assemblers",
        description: "Assembly language programming, assembler functions, design of one-pass and two-pass assemblers, and symbol table management."
    },
    {
        id: 3,
        name: "Loaders and Linkers",
        description: "Loader functions, types of loaders, linker functions, relocation and linking concepts, and dynamic linking."
    },
    {
        id: 4,
        name: "Macro Processors",
        description: "Macro definition and expansion, macro processors, conditional macro expansion, and recursive macro calls."
    },
    {
        id: 5,
        name: "Compilers",
        description: "Compiler phases, lexical analysis, syntax analysis, semantic analysis, intermediate code generation, and code optimization."
    }
];

// Make available globally
if (typeof window !== 'undefined') {
    window.spUnits = spUnits;
}
