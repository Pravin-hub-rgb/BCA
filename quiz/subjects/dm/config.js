// quiz/subjects/dm/config.js
const dmConfig = {
    id: 'dm',
    name: 'Data Mining',
    description: 'Test your knowledge of data mining concepts, techniques, algorithms, and applications in extracting valuable insights from large datasets.',
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
    window.dmConfig = dmConfig;
}
