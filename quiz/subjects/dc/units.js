// quiz/subjects/dc/units.js
const dcUnits = [
    {
        id: 1,
        name: "Introduction to Data Communication",
        description: "Basic concepts of data communication, communication models, data transmission modes, network topologies, and communication standards."
    },
    {
        id: 2,
        name: "Transmission Media",
        description: "Guided transmission media (twisted pair, coaxial cable, fiber optics), unguided transmission media (radio waves, microwaves, infrared), and their characteristics."
    },
    {
        id: 3,
        name: "Multiplexing and Switching",
        description: "Multiplexing techniques (FDM, TDM, WDM), switching techniques (circuit switching, packet switching, message switching), and their applications."
    },
    {
        id: 4,
        name: "Data Link Layer",
        description: "Framing methods, error detection and correction techniques, flow control mechanisms, and data link protocols."
    },
    {
        id: 5,
        name: "Network Layer",
        description: "Network layer functions, routing algorithms, congestion control techniques, and network layer protocols."
    }
];

// Make available globally
if (typeof window !== 'undefined') {
    window.dcUnits = dcUnits;
}
