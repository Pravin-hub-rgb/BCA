// quiz/subjects/mc/config.js
const mcConfig = {
    id: 'mc',
    name: 'Mathematics for Computing',
    description: 'Test your knowledge of mathematical concepts essential for computing including linear algebra, probability, statistics, and computational mathematics.',
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
    window.mcConfig = mcConfig;
}
