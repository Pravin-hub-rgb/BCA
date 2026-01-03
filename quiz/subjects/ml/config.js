// quiz/subjects/ml/config.js
const mlConfig = {
    id: 'ml',
    name: 'Machine Learning',
    description: 'Test your knowledge of advanced machine learning algorithms, neural networks, deep learning, computer vision, NLP, and model deployment techniques.',
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
    window.mlConfig = mlConfig;
}
