// quiz/subjects/cf/units.js
const cfUnits = [
    {
        id: 1,
        name: "Introduction to Computers",
        description: "Basic concepts of computers, history of computing, types of computers, computer generations, and computer applications."
    },
    {
        id: 2,
        name: "Computer Hardware",
        description: "Computer system components including CPU, memory, storage devices, input/output devices, and computer peripherals."
    },
    {
        id: 3,
        name: "Computer Software",
        description: "Types of software, operating systems, programming languages, application software, and software development concepts."
    },
    {
        id: 4,
        name: "Data Representation and Processing",
        description: "Number systems, data representation in computers, character codes, multimedia basics, and data processing concepts."
    },
    {
        id: 5,
        name: "Internet and Web Technologies",
        description: "Internet fundamentals, World Wide Web, electronic mail, internet services, web browsers, and internet security basics."
    }
];

// Make available globally
if (typeof window !== 'undefined') {
    window.cfUnits = cfUnits;
}
