// quiz/subjects/pm/config.js
const pmConfig = {
    id: 'pm',
    name: 'Principles of Management',
    description: 'Test your knowledge of management principles, theories, functions, and practices including planning, organizing, staffing, controlling, and modern management concepts.',
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
    window.pmConfig = pmConfig;
}
