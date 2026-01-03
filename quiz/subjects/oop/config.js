// quiz/subjects/oop/config.js
const oopConfig = {
    id: 'oop',
    name: 'Object Oriented Programming',
    description: 'Test your knowledge of object-oriented programming principles, concepts, and implementation including classes, inheritance, polymorphism, and design patterns.',
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
    window.oopConfig = oopConfig;
}
