// Web Technologies Quiz Configuration
const webConfig = {
    id: 'web',
    name: 'Web Technologies',
    description: 'Test your knowledge of web development fundamentals including HTML, CSS, JavaScript, XML, and PHP server-side programming.',
    unitCount: 5,
    totalQuestions: 100,
    questionDistribution: { 1: 15, 2: 20, 3: 25, 4: 30, 5: 40 }
};

// Make available globally for browser environment
if (typeof window !== 'undefined') {
    window.webConfig = webConfig;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = webConfig;
}
