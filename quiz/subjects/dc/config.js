// quiz/subjects/dc/config.js
const dcConfig = {
    id: 'dc',
    name: 'Data Communication',
    description: 'Test your knowledge of data communication fundamentals, transmission media, multiplexing techniques, switching methods, and network protocols.',
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
    window.dcConfig = dcConfig;
}
