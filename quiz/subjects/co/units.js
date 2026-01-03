// quiz/subjects/co/units.js
const coUnits = [
    {
        id: 1,
        name: "Basic Computer Organization",
        description: "Computer system components, bus structures, instruction formats, addressing modes, and basic computer architecture."
    },
    {
        id: 2,
        name: "CPU Architecture and Instruction Sets",
        description: "Central processing unit design, instruction cycle, registers, ALU operations, control unit, and instruction sets."
    },
    {
        id: 3,
        name: "Memory Systems",
        description: "Memory hierarchy, cache memory, virtual memory concepts, memory mapping, and secondary storage systems."
    },
    {
        id: 4,
        name: "I/O Organization",
        description: "Input/output systems, I/O interfaces, programmed I/O, interrupt-driven I/O, DMA, and I/O processors."
    },
    {
        id: 5,
        name: "Advanced Computer Organization",
        description: "Instruction pipelining, parallel processing, multiprocessors, RISC and CISC architectures, and performance evaluation."
    }
];

// Make available globally
if (typeof window !== 'undefined') {
    window.coUnits = coUnits;
}
