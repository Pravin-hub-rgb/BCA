// quiz/subjects/ac/config.js
const acConfig = {
    id: 'ac',
    name: 'Advanced C Programming',
    description: 'Test your knowledge of advanced C programming concepts including pointers, memory management, data structures, file handling, and system programming in C.',
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
    window.acConfig = acConfig;
}
