// Computer Graphics Quiz Configuration
const cgConfig = {
    id: 'cg',
    name: 'Computer Graphics',
    description: 'Test your knowledge of graphics programming, algorithms, and visualization techniques.',
    unitCount: 5,
    totalQuestions: 100,
    questionDistribution: { 1: 15, 2: 20, 3: 25, 4: 30, 5: 40 }
};

// Make available globally for browser environment
if (typeof window !== 'undefined') {
    window.cgConfig = cgConfig;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = cgConfig;
}
