// quiz/subjects/ca/config.js
const caConfig = {
    id: 'ca',
    name: 'Computer Architecture',
    description: 'Test your knowledge of computer system architecture, instruction sets, pipelining, memory hierarchy, I/O systems, and parallel processing.',
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
    window.caConfig = caConfig;
}
