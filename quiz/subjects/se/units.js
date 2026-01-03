// quiz/subjects/se/units.js
const seUnits = [
    {
        id: 1,
        name: "Introduction to Software Engineering",
        description: "Basic concepts of software engineering, software characteristics, software crisis, software engineering as a layered technology, and software engineering principles."
    },
    {
        id: 2,
        name: "Software Development Life Cycle Models",
        description: "Waterfall model, incremental model, spiral model, agile methodologies, extreme programming, and comparison of different life cycle models."
    },
    {
        id: 3,
        name: "Requirements Engineering and Analysis",
        description: "Requirements elicitation techniques, requirements specification, functional and non-functional requirements, requirements validation, and use case modeling."
    },
    {
        id: 4,
        name: "Software Design and Architecture",
        description: "Design principles, architectural design, component-level design, user interface design, design patterns, and software architecture styles."
    },
    {
        id: 5,
        name: "Software Testing and Quality Assurance",
        description: "Testing fundamentals, white-box and black-box testing, integration testing, system testing, quality assurance, software maintenance, and risk management."
    }
];

// Make available globally
if (typeof window !== 'undefined') {
    window.seUnits = seUnits;
}
