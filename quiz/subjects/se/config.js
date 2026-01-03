// quiz/subjects/se/config.js
const seConfig = {
    id: 'se',
    name: 'Software Engineering',
    description: 'Test your knowledge of software engineering principles, development methodologies, project management, and quality assurance techniques.',
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
    window.seConfig = seConfig;
}
