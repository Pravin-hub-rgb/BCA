// quiz/subjects/ds/config.js
const dsConfig = {
    id: 'ds',
    name: 'Data Structures',
    description: 'Test your knowledge of fundamental data structures, algorithms, and their implementations including arrays, trees, graphs, sorting, and searching techniques.',
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
    window.dsConfig = dsConfig;
}
