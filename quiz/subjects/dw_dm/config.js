// Data Warehousing and Data Mining Quiz Configuration
const dwDmConfig = {
    id: 'dw_dm',
    name: 'Data Warehousing and Data Mining',
    description: 'Test your knowledge of data warehouse concepts, OLAP systems, data mining techniques, and advanced data mining applications.',
    unitCount: 5,
    totalQuestions: 100,
    questionDistribution: { 1: 15, 2: 20, 3: 25, 4: 30, 5: 40 }
};

// Make available globally for browser environment
if (typeof window !== 'undefined') {
    window.dwDmConfig = dwDmConfig;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = dwDmConfig;
}
