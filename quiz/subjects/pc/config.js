// quiz/subjects/pc/config.js
const pcConfig = {
    id: 'pc',
    name: 'Programming in C',
    description: 'Test your knowledge of C programming fundamentals including syntax, data types, control structures, functions, arrays, pointers, and file handling.',
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
    window.pcConfig = pcConfig;
}
