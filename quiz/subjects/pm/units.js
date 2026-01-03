// quiz/subjects/pm/units.js
const pmUnits = [
    {
        id: 1,
        name: "Nature of Management and Evolution of Management Thoughts",
        description: "Basic concepts of management, management functions, managerial roles, evolution of management thoughts from classical to modern approaches."
    },
    {
        id: 2,
        name: "Planning",
        description: "Planning process, types of plans, planning tools and techniques, strategic planning, and decision making in planning."
    },
    {
        id: 3,
        name: "Decision Making, Organizing and Forecasting",
        description: "Decision making process, types of decisions, organization structure, departmentalization, delegation, and forecasting techniques."
    },
    {
        id: 4,
        name: "Staffing and Controlling",
        description: "Human resource management, recruitment and selection, training and development, performance appraisal, and control systems."
    },
    {
        id: 5,
        name: "Modern Management Concepts",
        description: "Motivational theories, social responsibility, crisis management, total quality management, stress management, and business strategy."
    }
];

// Make available globally
if (typeof window !== 'undefined') {
    window.pmUnits = pmUnits;
}
