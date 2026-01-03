// quiz/subjects/wellness/config.js
const wellnessConfig = {
    id: 'wellness',
    name: 'Wellness and Stress Management',
    description: 'Test your knowledge of mental health, physical fitness, nutrition, mindfulness, and stress management techniques for overall wellbeing.',
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
    window.wellnessConfig = wellnessConfig;
}
