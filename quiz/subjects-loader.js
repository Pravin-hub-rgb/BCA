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
