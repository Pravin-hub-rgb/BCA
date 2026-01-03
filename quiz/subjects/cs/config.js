// quiz/subjects/cs/config.js
const csConfig = {
    id: 'cs',
    name: 'Communication Skills',
    description: 'Test your knowledge of professional communication, technical writing, presentation skills, and interpersonal communication in professional settings.',
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
    window.csConfig = csConfig;
}
