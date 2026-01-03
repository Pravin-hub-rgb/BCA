// quiz/subjects/sp/config.js
const spConfig = {
    id: 'sp',
    name: 'System Programming',
    description: 'Test your knowledge of system programming concepts including assemblers, loaders, linkers, macros, compilers, and system software development.',
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
    window.spConfig = spConfig;
}
