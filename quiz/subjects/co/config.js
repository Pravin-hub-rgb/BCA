// quiz/subjects/co/config.js
const coConfig = {
    id: 'co',
    name: 'Computer Organization',
    description: 'Test your knowledge of computer system organization, CPU architecture, memory systems, I/O organization, and computer arithmetic.',
    unitCount: 5,
    totalQuestions: 100,
    questionDistribution: {
        1: 15,
        2: 20,
        3: 25,
        4: 30,
        5: 40
    }
};

// Make available globally
if (typeof window !== 'undefined') {
    window.coConfig = coConfig;
}
