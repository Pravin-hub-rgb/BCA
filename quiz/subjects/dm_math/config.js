// quiz/subjects/dm_math/config.js
const dmMathConfig = {
    id: 'dm_math',
    name: 'Discrete Mathematics',
    description: 'Test your knowledge of mathematical foundations for computer science including logic, sets, relations, graphs, and combinatorial mathematics.',
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
    window.dmMathConfig = dmMathConfig;
}
