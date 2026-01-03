// quiz/subjects/cloud/config.js
const cloudConfig = {
    id: 'cloud',
    name: 'Cloud Computing',
    description: 'Test your knowledge of cloud computing fundamentals, virtualization, cloud platforms, security, and advanced cloud technologies.',
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
    window.cloudConfig = cloudConfig;
}
