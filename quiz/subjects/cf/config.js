// quiz/subjects/cf/config.js
const cfConfig = {
    id: 'cf',
    name: 'Computer Fundamentals',
    description: 'Test your knowledge of basic computer concepts, hardware components, software systems, operating systems, and internet fundamentals.',
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
    window.cfConfig = cfConfig;
}
