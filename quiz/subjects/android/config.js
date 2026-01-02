// Android Programming Quiz Configuration
const androidConfig = {
    id: 'android',
    name: 'Android Programming',
    description: 'Test your knowledge of Android app development, components, UI design, and mobile programming concepts.',
    unitCount: 5,
    totalQuestions: 100,
    questionDistribution: { 1: 15, 2: 20, 3: 25, 4: 30, 5: 40 }
};

// Make available globally for browser environment
if (typeof window !== 'undefined') {
    window.androidConfig = androidConfig;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = androidConfig;
}
