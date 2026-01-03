// quiz/subjects/fml/config.js
const fmlConfig = {
    id: 'fml',
    name: 'Fundamentals of Machine Learning',
    description: 'Test your knowledge of statistical concepts, Python programming, and machine learning algorithms including supervised and unsupervised learning techniques.',
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
    window.fmlConfig = fmlConfig;
}
