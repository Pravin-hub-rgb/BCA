// quiz/subjects/os/config.js
const osConfig = {
    id: 'os',
    name: 'Operating Systems',
    description: 'Test your knowledge of operating system concepts, process management, memory management, file systems, and system architecture.',
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
    window.osConfig = osConfig;
}
