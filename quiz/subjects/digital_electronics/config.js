// Digital Electronics Quiz Configuration
const digitalElectronicsConfig = {
    id: 'digital_electronics',
    name: 'Digital Electronics',
    description: 'Test your knowledge of digital systems, number systems, logic gates, combinational and sequential circuits, and counters.',
    unitCount: 5,
    totalQuestions: 100,
    questionDistribution: { 1: 15, 2: 20, 3: 25, 4: 30, 5: 40 }
};

// Make available globally for browser environment
if (typeof window !== 'undefined') {
    window.digitalElectronicsConfig = digitalElectronicsConfig;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = digitalElectronicsConfig;
}
