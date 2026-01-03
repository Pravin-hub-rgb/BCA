// quiz/subjects/dbms/config.js
const dbmsConfig = {
    id: 'dbms',
    name: 'Database Management Systems',
    description: 'Test your knowledge of database concepts, relational model, SQL, normalization, transaction management, and database administration.',
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
    window.dbmsConfig = dbmsConfig;
}
