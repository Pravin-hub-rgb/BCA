// quiz/subjects/mc/questions.js
const mcQuestions = {
    1: [ // Unit 1: Linear Algebra (20 questions)
        {
            question: "What is the determinant of a 2x2 matrix [[a, b], [c, d]]?",
            options: ["ad - bc", "ad + bc", "ac - bd", "ab - cd"],
            correct: 0
        },
        {
            question: "Which matrix operation is not commutative?",
            options: ["Addition", "Scalar multiplication", "Matrix multiplication", "Identity matrix multiplication"],
            correct: 2
        },
        {
            question: "What is the rank of a matrix?",
            options: ["Number of rows", "Number of columns", "Dimension of column space", "Number of non-zero elements"],
            correct: 2
        },
        {
            question: "Which property does the transpose operation have?",
            options: ["Commutative", "Associative", "Distributive", "Involutory"],
            correct: 3
        },
        {
            question: "What is the trace of a matrix?",
            options: ["Sum of diagonal elements", "Sum of all elements", "Product of diagonal elements", "Determinant of matrix"],
            correct: 0
        },
        {
            question: "Which matrix is its own inverse?",
            options: ["Identity matrix", "Zero matrix", "Singular matrix", "Orthogonal matrix"],
            correct: 0
        },
        {
            question: "What is the dot product of vectors [1, 2, 3] and [4, 5, 6]?",
            options: ["32", "14", "18", "28"],
            correct: 0
        },
        {
            question: "Which vector is orthogonal to [1, 1, 0]?",
            options: ["[1, 0, 1]", "[0, 1, 1]", "[1, -1, 0]", "[2, 2, 1]"],
            correct: 2
        },
        {
            question: "What is the characteristic equation of a matrix?",
            options: ["det(A - λI) = 0", "det(A + λI) = 0", "trace(A) - λ = 0", "A - λI = 0"],
            correct: 0
        },
        {
            question: "Which transformation preserves angles?",
            options: ["Rotation", "Scaling", "Shearing", "Translation"],
            correct: 0
        },
        {
            question: "What is the cross product in 3D vectors?",
            options: ["Scalar result", "Vector result", "Matrix result", "Complex number"],
            correct: 1
        },
        {
            question: "Which matrix has all eigenvalues equal?",
            options: ["Identity matrix", "Scalar matrix", "Diagonal matrix", "Symmetric matrix"],
            correct: 1
        },
        {
            question: "What is the nullity of a matrix?",
            options: ["Rank", "Number of rows", "Dimension of null space", "Number of columns"],
            correct: 2
        },
        {
            question: "Which operation is distributive over addition?",
            options: ["Matrix multiplication", "Scalar multiplication", "Matrix addition", "All of the above"],
            correct: 1
        },
        {
            question: "What is the adjoint of a matrix?",
            options: ["Transpose", "Inverse", "Transpose of cofactor matrix", "Determinant"],
            correct: 2
        },
        {
            question: "Which vector space property requires closure under addition?",
            options: ["Associativity", "Commutativity", "Identity element", "Closure"],
            correct: 3
        },
        {
            question: "What is the dimension of a vector space?",
            options: ["Number of elements", "Number of basis vectors", "Size of vectors", "Rank of matrix"],
            correct: 1
        },
        {
            question: "Which matrix is orthogonal?",
            options: ["A * A^T = I", "A * A^T = 0", "A * A^T = A", "A * A^T = A^T"],
            correct: 0
        },
        {
            question: "What is the Jordan canonical form used for?",
            options: ["Matrix multiplication", "Matrix diagonalization", "Finding eigenvalues", "Matrix inversion"],
            correct: 1
        },
        {
            question: "Which transformation is linear?",
            options: ["y = x²", "y = 2x + 1", "y = sin(x)", "y = |x|"],
            correct: 1
        }
    ],
    2: [ // Unit 2: Probability Theory (20 questions)
        {
            question: "What is the probability of rolling a 6 on a fair die?",
            options: ["1/6", "1/2", "1/3", "1/4"],
            correct: 0
        },
        {
            question: "Which rule states P(A∪B) = P(A) + P(B) - P(A∩B)?",
            options: ["Addition rule", "Multiplication rule", "Bayes' theorem", "Total probability theorem"],
            correct: 0
        },
        {
            question: "What is a continuous random variable?",
            options: ["Finite values", "Countably infinite values", "Uncountably infinite values", "Only two values"],
            correct: 2
        },
        {
            question: "Which distribution is symmetric around mean?",
            options: ["Exponential", "Normal", "Poisson", "Binomial"],
            correct: 1
        },
        {
            question: "What is the mean of binomial distribution?",
            options: ["np", "np(1-p)", "np²", "n/p"],
            correct: 0
        },
        {
            question: "Which theorem relates conditional and marginal probabilities?",
            options: ["Addition theorem", "Multiplication theorem", "Bayes' theorem", "Central limit theorem"],
            correct: 2
        },
        {
            question: "What is the variance of Poisson distribution?",
            options: ["λ", "λ²", "√λ", "λ/2"],
            correct: 0
        },
        {
            question: "Which probability is always between 0 and 1?",
            options: ["Odds ratio", "Likelihood", "Probability", "Odds"],
            correct: 2
        },
        {
            question: "What is the expected value of a random variable?",
            options: ["Variance", "Mean", "Median", "Mode"],
            correct: 1
        },
        {
            question: "Which distribution has memoryless property?",
            options: ["Normal", "Exponential", "Poisson", "Binomial"],
            correct: 1
        },
        {
            question: "What is covariance between two variables?",
            options: ["E[X] * E[Y]", "E[(X-μx)(Y-μy)]", "Var(X) + Var(Y)", "Var(X) * Var(Y)"],
            correct: 1
        },
        {
            question: "Which variables are independent?",
            options: ["Cov(X,Y) = 0", "E[X|Y] = E[X]", "Both A and B", "Neither A nor B"],
            correct: 2
        },
        {
            question: "What is the probability density function (PDF)?",
            options: ["Cumulative distribution", "Discrete probabilities", "Continuous distribution derivative", "Probability mass function"],
            correct: 2
        },
        {
            question: "Which theorem states that sample means are normally distributed?",
            options: ["Bayes' theorem", "Central limit theorem", "Law of large numbers", "Chebyshev's inequality"],
            correct: 1
        },
        {
            question: "What is the cumulative distribution function (CDF)?",
            options: ["P(X ≤ x)", "P(X > x)", "P(X = x)", "P(X ≥ x)"],
            correct: 0
        },
        {
            question: "Which distribution models rare events?",
            options: ["Normal", "Binomial", "Poisson", "Exponential"],
            correct: 2
        },
        {
            question: "What is the probability of mutually exclusive events?",
            options: ["P(A∪B) = P(A) + P(B)", "P(A∪B) = P(A) * P(B)", "P(A∩B) = 0", "Both A and C"],
            correct: 3
        },
        {
            question: "Which function generates random numbers?",
            options: ["Probability function", "Distribution function", "Generator function", "Density function"],
            correct: 2
        },
        {
            question: "What is the standard deviation?",
            options: ["Square root of variance", "Square of variance", "Mean of data", "Median of data"],
            correct: 0
        },
        {
            question: "Which theorem is used for hypothesis testing?",
            options: ["Central limit theorem", "Bayes' theorem", "Chebyshev's theorem", "All of the above"],
            correct: 3
        }
    ],
    3: [ // Unit 3: Statistics (25 questions)
        {
            question: "What is the arithmetic mean of 1, 2, 3, 4, 5?",
            options: ["2", "3", "4", "5"],
            correct: 1
        },
        {
            question: "Which measure is affected by extreme values?",
            options: ["Median", "Mode", "Mean", "Range"],
            correct: 2
        },
        {
            question: "What is the median of 1, 3, 5, 7, 9?",
            options: ["3", "5", "7", "9"],
            correct: 1
        },
        {
            question: "Which measure of dispersion is based on quartiles?",
            options: ["Range", "Variance", "Standard deviation", "Interquartile range"],
            correct: 3
        },
        {
            question: "What is the coefficient of variation?",
            options: ["Mean / Standard deviation", "Standard deviation / Mean", "Variance / Mean", "Mean / Variance"],
            correct: 1
        },
        {
            question: "Which correlation coefficient ranges from -1 to +1?",
            options: ["Pearson", "Spearman", "Kendall", "All of the above"],
            correct: 3
        },
        {
            question: "What does a correlation of -1 indicate?",
            options: ["No relationship", "Perfect positive correlation", "Perfect negative correlation", "Weak correlation"],
            correct: 2
        },
        {
            question: "Which regression line has minimum sum of squared errors?",
            options: ["Least squares", "Maximum likelihood", "Bayesian", "Ridge regression"],
            correct: 0
        },
        {
            question: "What is the null hypothesis in testing?",
            options: ["Alternative hypothesis", "Statement to be tested", "Research hypothesis", "Statistical hypothesis"],
            correct: 1
        },
        {
            question: "Which test compares means of two groups?",
            options: ["t-test", "F-test", "Chi-square test", "ANOVA"],
            correct: 0
        },
        {
            question: "What is the p-value in hypothesis testing?",
            options: ["Probability of null hypothesis", "Probability of alternative hypothesis", "Probability of data given null", "Probability of error"],
            correct: 2
        },
        {
            question: "Which distribution is used for confidence intervals?",
            options: ["Normal", "t-distribution", "F-distribution", "Chi-square"],
            correct: 1
        },
        {
            question: "What is the confidence level in interval estimation?",
            options: ["Probability of error", "Probability of correctness", "Sample size", "Population size"],
            correct: 1
        },
        {
            question: "Which sampling method gives equal probability?",
            options: ["Convenience sampling", "Simple random sampling", "Stratified sampling", "Cluster sampling"],
            correct: 1
        },
        {
            question: "What is the standard error of mean?",
            options: ["σ/√n", "σ²/n", "σ*n", "σ/√(n-1)"],
            correct: 0
        },
        {
            question: "Which test is used for categorical data?",
            options: ["t-test", "ANOVA", "Chi-square test", "Regression"],
            correct: 2
        },
        {
            question: "What is the skewness of a distribution?",
            options: ["Symmetry measure", "Spread measure", "Central tendency", "Dispersion measure"],
            correct: 0
        },
        {
            question: "Which moment measures asymmetry?",
            options: ["First moment", "Second moment", "Third moment", "Fourth moment"],
            correct: 2
        },
        {
            question: "What is the kurtosis of a distribution?",
            options: ["Flatness measure", "Skewness measure", "Central tendency", "Dispersion measure"],
            correct: 0
        },
        {
            question: "Which analysis deals with relationships between variables?",
            options: ["Univariate", "Bivariate", "Multivariate", "Time series"],
            correct: 1
        },
        {
            question: "What is the regression coefficient?",
            options: ["Correlation measure", "Slope of regression line", "Intercept", "R-squared value"],
            correct: 1
        },
        {
            question: "Which test compares variances of two populations?",
            options: ["t-test", "F-test", "Z-test", "Chi-square test"],
            correct: 1
        },
        {
            question: "What is the type I error in hypothesis testing?",
            options: ["Rejecting true null", "Accepting false null", "Both are errors", "No error"],
            correct: 0
        },
        {
            question: "Which method reduces multicollinearity?",
            options: ["Principal component analysis", "Ridge regression", "Lasso regression", "All of the above"],
            correct: 3
        },
        {
            question: "What is the coefficient of determination (R²)?",
            options: ["Correlation measure", "Proportion of variance explained", "Regression slope", "Intercept value"],
            correct: 1
        }
    ],
    4: [ // Unit 4: Graph Theory (25 questions)
        {
            question: "What is the degree of a vertex?",
            options: ["Number of edges", "Number of vertices", "Number of faces", "Number of components"],
            correct: 0
        },
        {
            question: "Which graph has all vertices of degree 2?",
            options: ["Tree", "Complete graph", "Cycle graph", "Star graph"],
            correct: 2
        },
        {
            question: "What is a spanning tree?",
            options: ["Tree with all vertices", "Tree with all edges", "Connected acyclic subgraph", "Both A and C"],
            correct: 3
        },
        {
            question: "Which algorithm finds minimum spanning tree?",
            options: ["Dijkstra's", "Prim's", "Bellman-Ford", "Floyd-Warshall"],
            correct: 1
        },
        {
            question: "What is the chromatic number of a graph?",
            options: ["Number of vertices", "Number of edges", "Minimum colors needed", "Maximum degree"],
            correct: 2
        },
        {
            question: "Which graph is bipartite?",
            options: ["Odd cycle", "Even cycle", "Complete graph K₃", "Tree"],
            correct: 1
        },
        {
            question: "What is an Eulerian path?",
            options: ["Visits each vertex once", "Visits each edge once", "Minimum path", "Maximum path"],
            correct: 1
        },
        {
            question: "Which theorem states that a connected graph has an Euler circuit if all vertices have even degree?",
            options: ["Euler's theorem", "Hamilton's theorem", "König's theorem", "Hall's theorem"],
            correct: 0
        },
        {
            question: "What is a Hamiltonian cycle?",
            options: ["Visits each edge once", "Visits each vertex once", "Minimum cycle", "Maximum cycle"],
            correct: 1
        },
        {
            question: "Which graph representation uses adjacency matrix?",
            options: ["Array of lists", "2D array", "Linked list", "Hash table"],
            correct: 1
        },
        {
            question: "What is the handshaking lemma?",
            options: ["Sum of degrees is even", "Sum of degrees equals twice edges", "Sum of degrees equals vertices", "Sum of degrees is odd"],
            correct: 1
        },
        {
            question: "Which graph has no crossing edges in plane?",
            options: ["Planar graph", "Complete graph", "Bipartite graph", "Regular graph"],
            correct: 0
        },
        {
            question: "What is the girth of a graph?",
            options: ["Number of vertices", "Length of shortest cycle", "Number of edges", "Maximum degree"],
            correct: 1
        },
        {
            question: "Which algorithm finds shortest path?",
            options: ["Prim's", "Kruskal's", "Dijkstra's", "DFS"],
            correct: 2
        },
        {
            question: "What is a cut vertex in a graph?",
            options: ["Vertex with degree 1", "Vertex whose removal increases components", "Vertex in cycle", "Vertex with maximum degree"],
            correct: 1
        },
        {
            question: "Which graph traversal visits all vertices?",
            options: ["DFS", "BFS", "Both A and B", "Neither A nor B"],
            correct: 2
        },
        {
            question: "What is the independence number of a graph?",
            options: ["Size of maximum clique", "Size of maximum independent set", "Number of connected components", "Graph diameter"],
            correct: 1
        },
        {
            question: "Which graph is a tree?",
            options: ["Has cycles", "Connected and acyclic", "Has multiple components", "Complete graph"],
            correct: 1
        },
        {
            question: "What is the diameter of a graph?",
            options: ["Number of vertices", "Length of longest shortest path", "Number of edges", "Graph radius"],
            correct: 1
        },
        {
            question: "Which algorithm uses topological sorting?",
            options: ["Shortest path", "Minimum spanning tree", "Critical path", "Network flow"],
            correct: 2
        },
        {
            question: "What is a clique in graph theory?",
            options: ["Complete subgraph", "Empty subgraph", "Single vertex", "Single edge"],
            correct: 0
        },
        {
            question: "Which graph property ensures 2-colorability?",
            options: ["Planar", "Bipartite", "Complete", "Regular"],
            correct: 1
        },
        {
            question: "What is the complement of a graph?",
            options: ["Graph with same vertices", "Graph with no edges", "Graph with complementary edges", "Subgraph"],
            correct: 2
        },
        {
            question: "Which graph has all possible edges?",
            options: ["Tree", "Complete graph", "Bipartite graph", "Cycle graph"],
            correct: 1
        },
        {
            question: "What is the adjacency list representation?",
            options: ["Array of arrays", "Linked lists for each vertex", "2D matrix", "Hash table"],
            correct: 1
        }
    ],
    5: [ // Unit 5: Numerical Methods (25 questions)
        {
            question: "Which method finds roots of f(x) = 0?",
            options: ["Interpolation", "Integration", "Root finding", "Differentiation"],
            correct: 2
        },
        {
            question: "What is the bisection method?",
            options: ["Bracketing method", "Open method", "Iterative method", "Direct method"],
            correct: 0
        },
        {
            question: "Which method converges quadratically?",
            options: ["Bisection", "False position", "Newton-Raphson", "Secant"],
            correct: 2
        },
        {
            question: "What is the rate of convergence of bisection method?",
            options: ["Linear", "Quadratic", "Cubic", "Exponential"],
            correct: 0
        },
        {
            question: "Which interpolation method uses divided differences?",
            options: ["Lagrange", "Newton", "Spline", "Hermite"],
            correct: 1
        },
        {
            question: "What is the trapezoidal rule used for?",
            options: ["Root finding", "Numerical integration", "Interpolation", "Differentiation"],
            correct: 1
        },
        {
            question: "Which method approximates derivatives?",
            options: ["Forward difference", "Central difference", "Both A and B", "Backward difference"],
            correct: 2
        },
        {
            question: "What is the order of Simpson's 1/3 rule?",
            options: ["h²", "h³", "h⁴", "h⁵"],
            correct: 2
        },
        {
            question: "Which ODE method is explicit?",
            options: ["Euler's backward", "Euler's forward", "Runge-Kutta", "Adams-Moulton"],
            correct: 2
        },
        {
            question: "What is the truncation error in numerical methods?",
            options: ["Rounding error", "Discretization error", "Both A and B", "Input error"],
            correct: 1
        },
        {
            question: "Which method solves linear systems?",
            options: ["Gauss elimination", "Newton's method", "Bisection method", "Interpolation"],
            correct: 0
        },
        {
            question: "What is the condition number of a matrix?",
            options: ["Determinant", "Sensitivity to perturbations", "Rank", "Trace"],
            correct: 1
        },
        {
            question: "Which quadrature rule uses parabolas?",
            options: ["Trapezoidal", "Simpson's", "Romberg", "Gaussian"],
            correct: 1
        },
        {
            question: "What is the secant method?",
            options: ["Bracketing method", "Open method using two points", "Iterative method", "Direct method"],
            correct: 1
        },
        {
            question: "Which interpolation is piecewise?",
            options: ["Lagrange", "Newton", "Spline", "Hermite"],
            correct: 2
        },
        {
            question: "What is the Runge-Kutta method?",
            options: ["Root finding", "ODE solving", "Integration", "Interpolation"],
            correct: 1
        },
        {
            question: "Which method is stable for stiff equations?",
            options: ["Euler forward", "Euler backward", "Adams-Bashforth", "Explicit methods"],
            correct: 1
        },
        {
            question: "What is the finite difference method used for?",
            options: ["ODE solving", "PDE solving", "Both A and B", "Root finding"],
            correct: 2
        },
        {
            question: "Which method uses LU decomposition?",
            options: ["Gauss elimination", "Jacobi method", "Gauss-Seidel", "SOR"],
            correct: 0
        },
        {
            question: "What is the Richardson extrapolation?",
            options: ["Error estimation", "Order improvement", "Stability analysis", "Convergence acceleration"],
            correct: 1
        },
        {
            question: "Which method solves nonlinear equations?",
            options: ["Gauss elimination", "Newton's method", "Jacobi method", "SOR"],
            correct: 1
        },
        {
            question: "What is the shooting method used for?",
            options: ["Initial value problems", "Boundary value problems", "Both A and B", "None"],
            correct: 1
        },
        {
            question: "Which quadrature is optimal?",
            options: ["Trapezoidal", "Simpson's", "Romberg", "Gaussian"],
            correct: 3
        },
        {
            question: "What is the Crank-Nicolson method?",
            options: ["Explicit method", "Implicit method", "Semi-implicit", "Iterative method"],
            correct: 2
        },
        {
            question: "Which method uses eigenvalues for stability?",
            options: ["von Neumann", "Courant-Friedrichs-Lewy", "Both A and B", "None"],
            correct: 2
        }
    ]
};

// Generate function
function generateQuizQuestions(selectedUnits) {
    // Question distribution rules
    const distribution = { 1: 15, 2: 20, 3: 25, 4: 30, 5: 40 };
    const totalQuestionsNeeded = distribution[selectedUnits.length] || 15;

    let allQuestions = [];
    let selectedQuestions = [];

    // Collect all questions from selected units
    selectedUnits.forEach(unitId => {
        if (mcQuestions[unitId]) {
            mcQuestions[unitId].forEach(question => {
                allQuestions.push({...question, unit: unitId});
            });
        }
    });

    // Shuffle all questions first
    for (let i = allQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
    }

    // Take only the required number of questions
    selectedQuestions = allQuestions.slice(0, totalQuestionsNeeded);

    return selectedQuestions;
}

// Make available globally
if (typeof window !== 'undefined') {
    window.generateQuizQuestions = generateQuizQuestions;
}
