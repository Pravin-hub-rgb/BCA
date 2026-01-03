// quiz/subjects/ca/units.js
const caUnits = [
    {
        id: 1,
        name: "Introduction to Computer Architecture",
        description: "Basic concepts of computer architecture, computer organization, performance evaluation, Amdahl's law, and computer system components."
    },
    {
        id: 2,
        name: "Instruction Set Architecture",
        description: "Instruction set architecture (ISA), addressing modes, instruction formats, types of instructions, and assembly language programming."
    },
    {
        id: 3,
        name: "Computer Arithmetic",
        description: "Arithmetic logic unit (ALU) design, addition and subtraction algorithms, multiplication and division algorithms, floating-point arithmetic, and carry look-ahead adders."
    },
    {
        id: 4,
        name: "Processor Design",
        description: "Datapath design, control unit implementation, pipelining concepts, pipeline hazards, and superscalar processors."
    },
    {
        id: 5,
        name: "Memory and I/O Systems",
        description: "Memory hierarchy, cache memory organization, virtual memory, I/O interfaces, interrupts, and direct memory access (DMA)."
    }
];

// Make available globally
if (typeof window !== 'undefined') {
    window.caUnits = caUnits;
}
