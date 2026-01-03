// quiz/subjects/cn/config.js
const cnConfig = {
    id: 'cn',
    name: 'Computer Networks',
    description: 'Test your knowledge of computer networks fundamentals, protocols, architectures, security, and network technologies.',
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
    window.cnConfig = cnConfig;
}
