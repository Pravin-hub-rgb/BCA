// Digital Electronics Units Configuration
const digitalElectronicsUnits = [
    {
        id: 1,
        name: "Introduction to Digital Electronics & Number Systems",
        description: "Digital vs Analog systems, Number systems (Binary, Octal, Hexadecimal), Conversions, Binary arithmetic, 1's and 2's complement, Fixed and Floating point representation, Codes (ASCII, EBCDIC, Gray, BCD, Excess-3), Error detection and correction."
    },
    {
        id: 2,
        name: "Logic Gates & Boolean Algebra",
        description: "Logic gates (AND, OR, NOT, NOR, NAND, XOR, XNOR), Truth tables, Boolean algebra, De Morgan's theorem, Karnaugh maps (K-MAP), Minimization techniques, Sum of Product (SOP), Product of Sum (POS), Canonical forms."
    },
    {
        id: 3,
        name: "Combinational Circuits",
        description: "Adders and Subtractors (Half adder, Full adder, Serial adder, Parallel adder), Multiplexers (MUX), Demultiplexers (DEMUX), Encoders, Decoders, Implementation of combinational logic circuits."
    },
    {
        id: 4,
        name: "Sequential Circuits & Flip-Flops",
        description: "Flip-flops (SR, JK, T, D, Master-Slave), Characteristic tables and equations, Conversion between flip-flops, Registers (types and applications), Shift registers."
    },
    {
        id: 5,
        name: "Counters",
        description: "Counter definitions and types, Asynchronous counters, Synchronous counters, Ring counters, Up/Down counters, Counter applications."
    }
];

// Make available globally for browser environment
if (typeof window !== 'undefined') {
    window.digitalElectronicsUnits = digitalElectronicsUnits;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = digitalElectronicsUnits;
}
