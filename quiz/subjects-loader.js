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
            },
            {
                id: 'fml',
                name: 'Fundamentals of Machine Learning',
                description: 'Test your knowledge of statistical concepts, Python programming, and machine learning algorithms including supervised and unsupervised learning techniques.',
                unitCount: 5,
                totalQuestions: 100,
                questionDistribution: { 1: 15, 2: 20, 3: 25, 4: 30, 5: 40 },
                unitsPath: 'quiz/subjects/fml/units.js',
                questionsPath: 'quiz/subjects/fml/questions.js'
            },
            {
                id: 'dm',
                name: 'Data Mining',
                description: 'Test your knowledge of data mining concepts, techniques, algorithms, and applications in extracting valuable insights from large datasets.',
                unitCount: 5,
                totalQuestions: 100,
                questionDistribution: { 1: 15, 2: 20, 3: 25, 4: 30, 5: 40 },
                unitsPath: 'quiz/subjects/dm/units.js',
                questionsPath: 'quiz/subjects/dm/questions.js'
            },
            {
                id: 'cloud',
                name: 'Cloud Computing',
                description: 'Test your knowledge of cloud computing fundamentals, virtualization, cloud platforms, security, and advanced cloud technologies.',
                unitCount: 5,
                totalQuestions: 100,
                questionDistribution: { 1: 15, 2: 20, 3: 25, 4: 30, 5: 40 },
                unitsPath: 'quiz/subjects/cloud/units.js',
                questionsPath: 'quiz/subjects/cloud/questions.js'
            },
            {
                id: 'se',
                name: 'Software Engineering',
                description: 'Test your knowledge of software engineering principles, development methodologies, project management, and quality assurance techniques.',
                unitCount: 5,
                totalQuestions: 100,
                questionDistribution: { 1: 15, 2: 20, 3: 25, 4: 30, 5: 40 },
                unitsPath: 'quiz/subjects/se/units.js',
                questionsPath: 'quiz/subjects/se/questions.js'
            },
            {
                id: 'dbms',
                name: 'Database Management Systems',
                description: 'Test your knowledge of database concepts, relational model, SQL, normalization, transaction management, and database administration.',
                unitCount: 5,
                totalQuestions: 100,
                questionDistribution: { 1: 15, 2: 20, 3: 25, 4: 30, 5: 40 },
                unitsPath: 'quiz/subjects/dbms/units.js',
                questionsPath: 'quiz/subjects/dbms/questions.js'
            },
            {
                id: 'cn',
                name: 'Computer Networks',
                description: 'Test your knowledge of computer networks fundamentals, protocols, architectures, security, and network technologies.',
                unitCount: 5,
                totalQuestions: 100,
                questionDistribution: { 1: 15, 2: 20, 3: 25, 4: 30, 5: 40 },
                unitsPath: 'quiz/subjects/cn/units.js',
                questionsPath: 'quiz/subjects/cn/questions.js'
            },
            {
                id: 'os',
                name: 'Operating Systems',
                description: 'Test your knowledge of operating system concepts, process management, memory management, file systems, and system architecture.',
                unitCount: 5,
                totalQuestions: 100,
                questionDistribution: { 1: 15, 2: 20, 3: 25, 4: 30, 5: 40 },
                unitsPath: 'quiz/subjects/os/units.js',
                questionsPath: 'quiz/subjects/os/questions.js'
            },
            {
                id: 'co',
                name: 'Computer Organization',
                description: 'Test your knowledge of computer system organization, CPU architecture, memory systems, I/O organization, and computer arithmetic.',
                unitCount: 5,
                totalQuestions: 100,
                questionDistribution: { 1: 15, 2: 20, 3: 25, 4: 30, 5: 40 },
                unitsPath: 'quiz/subjects/co/units.js',
                questionsPath: 'quiz/subjects/co/questions.js'
            },
            {
                id: 'ds',
                name: 'Data Structures',
                description: 'Test your knowledge of fundamental data structures, algorithms, and their implementations including arrays, trees, graphs, sorting, and searching techniques.',
                unitCount: 5,
                totalQuestions: 100,
                questionDistribution: { 1: 15, 2: 20, 3: 25, 4: 30, 5: 40 },
                unitsPath: 'quiz/subjects/ds/units.js',
                questionsPath: 'quiz/subjects/ds/questions.js'
            },
            {
                id: 'dm_math',
                name: 'Discrete Mathematics',
                description: 'Test your knowledge of mathematical foundations for computer science including logic, sets, relations, graphs, and combinatorial mathematics.',
                unitCount: 5,
                totalQuestions: 100,
                questionDistribution: { 1: 15, 2: 20, 3: 25, 4: 30, 5: 40 },
                unitsPath: 'quiz/subjects/dm_math/units.js',
                questionsPath: 'quiz/subjects/dm_math/questions.js'
            },
            {
                id: 'oop',
                name: 'Object Oriented Programming',
                description: 'Test your knowledge of object-oriented programming principles, concepts, and implementation including classes, inheritance, polymorphism, and design patterns.',
                unitCount: 5,
                totalQuestions: 100,
                questionDistribution: { 1: 15, 2: 20, 3: 25, 4: 30, 5: 40 },
                unitsPath: 'quiz/subjects/oop/units.js',
                questionsPath: 'quiz/subjects/oop/questions.js'
            },
            {
                id: 'ca',
                name: 'Computer Architecture',
                description: 'Test your knowledge of computer system architecture, instruction sets, pipelining, memory hierarchy, I/O systems, and parallel processing.',
                unitCount: 5,
                totalQuestions: 100,
                questionDistribution: { 1: 15, 2: 20, 3: 25, 4: 30, 5: 40 },
                unitsPath: 'quiz/subjects/ca/units.js',
                questionsPath: 'quiz/subjects/ca/questions.js'
            },
            {
                id: 'dc',
                name: 'Data Communication',
                description: 'Test your knowledge of data communication fundamentals, transmission media, multiplexing techniques, switching methods, and network protocols.',
                unitCount: 5,
                totalQuestions: 100,
                questionDistribution: { 1: 15, 2: 20, 3: 25, 4: 30, 5: 40 },
                unitsPath: 'quiz/subjects/dc/units.js',
                questionsPath: 'quiz/subjects/dc/questions.js'
            },
            {
                id: 'sp',
                name: 'System Programming',
                description: 'Test your knowledge of system programming concepts including assemblers, loaders, linkers, macros, compilers, and system software development.',
                unitCount: 5,
                totalQuestions: 100,
                questionDistribution: { 1: 15, 2: 20, 3: 25, 4: 30, 5: 40 },
                unitsPath: 'quiz/subjects/sp/units.js',
                questionsPath: 'quiz/subjects/sp/questions.js'
            },
            {
                id: 'ac',
                name: 'Advanced C Programming',
                description: 'Test your knowledge of advanced C programming concepts including pointers, memory management, data structures, file handling, and system programming in C.',
                unitCount: 5,
                totalQuestions: 100,
                questionDistribution: { 1: 15, 2: 20, 3: 25, 4: 30, 5: 40 },
                unitsPath: 'quiz/subjects/ac/units.js',
                questionsPath: 'quiz/subjects/ac/questions.js'
            },
            {
                id: 'mc',
                name: 'Mathematics for Computing',
                description: 'Test your knowledge of mathematical concepts essential for computing including linear algebra, probability, statistics, and computational mathematics.',
                unitCount: 5,
                totalQuestions: 100,
                questionDistribution: { 1: 15, 2: 20, 3: 25, 4: 30, 5: 40 },
                unitsPath: 'quiz/subjects/mc/units.js',
                questionsPath: 'quiz/subjects/mc/questions.js'
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
