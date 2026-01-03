// quiz/subjects/mc/units.js
const mcUnits = [
    {
        id: 1,
        name: "Linear Algebra",
        description: "Matrices and matrix operations, determinants, vector spaces, eigenvalues and eigenvectors, and linear transformations."
    },
    {
        id: 2,
        name: "Probability Theory",
        description: "Basic probability concepts, random variables, probability distributions, conditional probability, and Bayes' theorem."
    },
    {
        id: 3,
        name: "Statistics",
        description: "Descriptive statistics, measures of central tendency and dispersion, correlation and regression, and hypothesis testing."
    },
    {
        id: 4,
        name: "Graph Theory",
        description: "Basic graph concepts, trees and spanning trees, connectivity, Eulerian and Hamiltonian paths, and graph algorithms."
    },
    {
        id: 5,
        name: "Numerical Methods",
        description: "Root finding methods, interpolation techniques, numerical differentiation and integration, and solution of differential equations."
    }
];

// Make available globally
if (typeof window !== 'undefined') {
    window.mcUnits = mcUnits;
}
