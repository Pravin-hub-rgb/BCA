// quiz/subjects/fml/units.js
const fmlUnits = [
    {
        id: 1,
        name: "Statistical Concepts and Linear Algebra",
        description: "Review of statistical measures, probability theory, vectors, matrices, and introduction to machine learning approaches."
    },
    {
        id: 2,
        name: "Python Programming Fundamentals",
        description: "Data types, variables, operators, control statements, functions, modules, and file handling in Python."
    },
    {
        id: 3,
        name: "Unsupervised Learning Algorithms",
        description: "Clustering algorithms (K-means, hierarchical, DBScan) and dimensionality reduction techniques (PCA, feature selection)."
    },
    {
        id: 4,
        name: "Data Analysis and Machine Learning with Python",
        description: "NumPy, Pandas, Matplotlib, Scikit-Learn, data manipulation, statistical analysis, and visualization."
    },
    {
        id: 5,
        name: "Validation Techniques and Supervised Learning Algorithms",
        description: "Cross-validation methods, linear/logistic regression, decision trees, support vector machines, and neural networks."
    }
];

// Make available globally
if (typeof window !== 'undefined') {
    window.fmlUnits = fmlUnits;
}
