// Dynamic Subject Loader for Quiz System
// This file automatically discovers and loads available quiz subjects

let availableSubjects = [];

// Load all available subjects
function loadAvailableSubjects() {
    try {
        // For now, we'll define available subjects directly
        // In a production system, this could auto-discover from directory structure

        availableSubjects = [
            {
                id: 'cg',
                name: 'Computer Graphics',
                description: 'Test your knowledge of graphics programming, algorithms, and visualization techniques.',
                unitCount: 5,
                totalQuestions: 100,
                questionDistribution: { 1: 15, 2: 20, 3: 25, 4: 30, 5: 40 },
                unitsPath: 'quiz/subjects/cg/units.js',
                questionsPath: 'quiz/subjects/cg/questions.js'
            },
            {
                id: 'android',
                name: 'Android Programming',
                description: 'Test your knowledge of Android app development, components, UI design, and mobile programming concepts.',
                unitCount: 5,
                totalQuestions: 100,
                questionDistribution: { 1: 15, 2: 20, 3: 25, 4: 30, 5: 40 },
                unitsPath: 'quiz/subjects/android/units.js',
                questionsPath: 'quiz/subjects/android/questions.js'
            },
            {
                id: 'spm',
                name: 'Software Project Management and Information Systems',
                description: 'Test your knowledge of software project planning, scheduling, configuration management, information systems, and ERP concepts.',
                unitCount: 5,
                totalQuestions: 100,
                questionDistribution: { 1: 15, 2: 20, 3: 25, 4: 30, 5: 40 },
                unitsPath: 'quiz/subjects/spm/units.js',
                questionsPath: 'quiz/subjects/spm/questions.js'
            },
            {
                id: 'digital_electronics',
                name: 'Digital Electronics',
                description: 'Test your knowledge of digital systems, number systems, logic gates, combinational and sequential circuits, and counters.',
                unitCount: 5,
                totalQuestions: 100,
                questionDistribution: { 1: 15, 2: 20, 3: 25, 4: 30, 5: 40 },
                unitsPath: 'quiz/subjects/digital_electronics/units.js',
                questionsPath: 'quiz/subjects/digital_electronics/questions.js'
            },
            {
                id: 'web',
                name: 'Web Technologies',
                description: 'Test your knowledge of web development fundamentals including HTML, CSS, JavaScript, XML, and PHP server-side programming.',
                unitCount: 5,
                totalQuestions: 100,
                questionDistribution: { 1: 15, 2: 20, 3: 25, 4: 30, 5: 40 },
                unitsPath: 'quiz/subjects/web/units.js',
                questionsPath: 'quiz/subjects/web/questions.js'
            },
            {
                id: 'dw_dm',
                name: 'Data Warehousing and Data Mining',
                description: 'Test your knowledge of data warehouse concepts, OLAP systems, data mining techniques, and advanced data mining applications.',
                unitCount: 5,
                totalQuestions: 100,
                questionDistribution: { 1: 15, 2: 20, 3: 25, 4: 30, 5: 40 },
                unitsPath: 'quiz/subjects/dw_dm/units.js',
                questionsPath: 'quiz/subjects/dw_dm/questions.js'
            }
            // Future subjects will be added here
        ];

        return availableSubjects;
    } catch (error) {
        console.error('Error loading subjects:', error);
        return [];
    }
}

// Get subject by ID
function getSubjectById(subjectId) {
    return availableSubjects.find(subject => subject.id === subjectId);
}

// Get all available subjects
function getAllSubjects() {
    return availableSubjects;
}

// Initialize subjects on page load
if (typeof window !== 'undefined') {
    window.quizSubjectsLoader = {
        loadAvailableSubjects,
        getSubjectById,
        getAllSubjects,
        subjects: availableSubjects
    };
}
