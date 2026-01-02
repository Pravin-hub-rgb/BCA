// Software Project Management and Information Systems Quiz Configuration
const spmConfig = {
    id: 'spm',
    name: 'Software Project Management and Information Systems',
    description: 'Test your knowledge of software project planning, scheduling, configuration management, information systems, and ERP concepts.',
    unitCount: 5,
    totalQuestions: 100,
    questionDistribution: { 1: 15, 2: 20, 3: 25, 4: 30, 5: 40 }
};

// Make available globally for browser environment
if (typeof window !== 'undefined') {
    window.spmConfig = spmConfig;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = spmConfig;
}
