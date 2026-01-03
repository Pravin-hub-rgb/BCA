// quiz/subjects/dm_math/questions.js
const dmMathQuestions = {
    1: [ // Unit 1: Logic and Proof Techniques (20 questions)
        {
            question: "What is the negation of the statement 'All roses are red'?",
            options: ["No roses are red", "Some roses are not red", "Some roses are red", "All roses are not red"],
            correct: 1
        },
        {
            question: "Which logical connective represents 'and'?",
            options: ["∨ (OR)", "∧ (AND)", "¬ (NOT)", "→ (IMPLIES)"],
            correct: 1
        },
        {
            question: "What is the contrapositive of the statement 'If it rains, then I will stay home'?",
            options: ["If I stay home, then it rains", "If it does not rain, then I will not stay home", "If I do not stay home, then it does not rain", "If I do not stay home, then it rains"],
            correct: 2
        },
        {
            question: "Which type of proof assumes the statement is false and derives a contradiction?",
            options: ["Direct proof", "Indirect proof", "Proof by contradiction", "Exhaustive proof"],
            correct: 2
        },
        {
            question: "What is a tautology?",
            options: ["Always false statement", "Always true statement", "Sometimes true statement", "Compound statement"],
            correct: 1
        },
        {
            question: "Which quantifier represents 'there exists'?",
            options: ["∀ (for all)", "∃ (there exists)", "∧ (and)", "∨ (or)"],
            correct: 1
        },
        {
            question: "What is the converse of 'If P then Q'?",
            options: ["If Q then P", "If not P then not Q", "If not Q then not P", "If P then not Q"],
            correct: 0
        },
        {
            question: "Which logical equivalence is correct?",
            options: ["P ∧ (Q ∨ R) ≡ (P ∧ Q) ∨ (P ∧ R)", "P ∧ (Q ∨ R) ≡ (P ∨ Q) ∧ (P ∨ R)", "P ∧ (Q ∨ R) ≡ (P ∧ Q) ∧ (P ∧ R)", "None of the above"],
            correct: 0
        },
        {
            question: "What is a predicate in logic?",
            options: ["A statement that is always true", "A statement that is always false", "A function from objects to truth values", "A logical connective"],
            correct: 2
        },
        {
            question: "Which inference rule is: 'If P → Q and P, then Q'?",
            options: ["Modus ponens", "Modus tollens", "Disjunctive syllogism", "Hypothetical syllogism"],
            correct: 0
        },
        {
            question: "What is the truth value of the statement 'P ∨ ¬P'?",
            options: ["True", "False", "Sometimes true", "Depends on P"],
            correct: 0
        },
        {
            question: "Which type of proof uses mathematical induction?",
            options: ["Direct proof", "Indirect proof", "Inductive proof", "Deductive proof"],
            correct: 2
        },
        {
            question: "What is the inverse of 'If P then Q'?",
            options: ["If Q then P", "If not P then not Q", "If not Q then not P", "If P then not Q"],
            correct: 1
        },
        {
            question: "Which logical operator has the highest precedence?",
            options: ["∨ (OR)", "∧ (AND)", "¬ (NOT)", "→ (IMPLIES)"],
            correct: 2
        },
        {
            question: "What is a well-formed formula?",
            options: ["Any statement", "A syntactically correct logical expression", "A true statement", "A false statement"],
            correct: 1
        },
        {
            question: "Which inference rule is: 'If P → Q and ¬Q, then ¬P'?",
            options: ["Modus ponens", "Modus tollens", "Disjunctive syllogism", "Hypothetical syllogism"],
            correct: 1
        },
        {
            question: "What is the domain of a predicate?",
            options: ["The set of variables", "The set of objects over which variables range", "The set of truth values", "The set of predicates"],
            correct: 1
        },
        {
            question: "Which logical law states that 'P ∧ P ≡ P'?",
            options: ["Idempotent law", "Associative law", "Commutative law", "Distributive law"],
            correct: 0
        },
        {
            question: "What is the purpose of mathematical induction?",
            options: ["To prove statements about finite sets", "To prove statements about infinite sets", "To prove statements for all natural numbers", "To prove statements for real numbers"],
            correct: 2
        },
        {
            question: "Which type of reasoning proceeds from general to specific?",
            options: ["Inductive reasoning", "Deductive reasoning", "Abductive reasoning", "Analogical reasoning"],
            correct: 1
        }
    ],
    2: [ // Unit 2: Sets, Relations and Functions (20 questions)
        {
            question: "What is the cardinality of an empty set?",
            options: ["0", "1", "∞", "Undefined"],
            correct: 0
        },
        {
            question: "Which operation on sets is commutative?",
            options: ["A - B", "A × B", "A ∪ B", "A - B"],
            correct: 2
        },
        {
            question: "What is a relation in set theory?",
            options: ["A set of ordered pairs", "A set of unordered pairs", "A function", "A subset"],
            correct: 0
        },
        {
            question: "Which type of relation is the equality relation?",
            options: ["Reflexive", "Symmetric", "Transitive", "Equivalence relation"],
            correct: 3
        },
        {
            question: "What is the range of a function f: A → B?",
            options: ["Set A", "Set B", "Subset of A", "Subset of B"],
            correct: 3
        },
        {
            question: "Which set operation is associative?",
            options: ["Union", "Intersection", "Set difference", "Symmetric difference"],
            correct: 0
        },
        {
            question: "What is a bijective function?",
            options: ["One-to-one only", "Onto only", "Both one-to-one and onto", "Neither one-to-one nor onto"],
            correct: 2
        },
        {
            question: "Which relation property requires that if (a,b) ∈ R then (b,a) ∈ R?",
            options: ["Reflexive", "Symmetric", "Transitive", "Antisymmetric"],
            correct: 1
        },
        {
            question: "What is the power set of set {1,2}?",
            options: ["{{1}, {2}}", "{{1}, {2}, {1,2}}", "{{}, {1}, {2}, {1,2}}", "{{1,2}}"],
            correct: 2
        },
        {
            question: "Which function type has each element in domain mapped to exactly one element in codomain?",
            options: ["One-to-one", "Onto", "Constant function", "Identity function"],
            correct: 3
        },
        {
            question: "What is the Cartesian product A × B?",
            options: ["Set of all subsets", "Set of all ordered pairs", "Set of all functions", "Set of all relations"],
            correct: 1
        },
        {
            question: "Which relation is both reflexive and symmetric but not transitive?",
            options: ["Equality", "Less than", "Divides", "Indistinguishable"],
            correct: 3
        },
        {
            question: "What is the composition of functions f and g?",
            options: ["f(g(x))", "g(f(x))", "(f+g)(x)", "(f×g)(x)"],
            correct: 0
        },
        {
            question: "Which set property states that A ∪ (B ∪ C) = (A ∪ B) ∪ C?",
            options: ["Commutative", "Associative", "Distributive", "Idempotent"],
            correct: 1
        },
        {
            question: "What is an equivalence class?",
            options: ["A set of equivalent elements", "A partition of the set", "A subset of the domain", "A subset of the range"],
            correct: 1
        },
        {
            question: "Which function type maps all elements to a single element?",
            options: ["Identity", "Constant", "Linear", "Quadratic"],
            correct: 1
        },
        {
            question: "What is the complement of set A in universal set U?",
            options: ["U - A", "A - U", "A ∪ U", "A ∩ U"],
            correct: 0
        },
        {
            question: "Which relation property requires that if (a,b) ∈ R and (a,c) ∈ R then b = c?",
            options: ["Injective", "Surjective", "Bijective", "Functional"],
            correct: 3
        },
        {
            question: "What is the cardinality of the set of real numbers?",
            options: ["ℵ₀", "2^ℵ₀", "ℵ₁", "Finite"],
            correct: 1
        },
        {
            question: "Which set operation is distributive over union?",
            options: ["Union over intersection", "Intersection over union", "Both A and B", "Neither A nor B"],
            correct: 1
        }
    ],
    3: [ // Unit 3: Graph Theory (25 questions)
        {
            question: "What is the degree of a vertex in a graph?",
            options: ["Number of edges incident to it", "Number of vertices adjacent to it", "Number of edges in the graph", "Number of vertices in the graph"],
            correct: 0
        },
        {
            question: "Which graph has all vertices of degree 2?",
            options: ["Tree", "Cycle", "Complete graph", "Bipartite graph"],
            correct: 1
        },
        {
            question: "What is an Euler path in a graph?",
            options: ["Path visiting each vertex once", "Path visiting each edge once", "Path with minimum edges", "Path with maximum vertices"],
            correct: 1
        },
        {
            question: "Which theorem states that a connected graph has an Euler circuit if all vertices have even degree?",
            options: ["Euler's theorem", "Hamilton's theorem", "König's theorem", "Hall's theorem"],
            correct: 0
        },
        {
            question: "What is the chromatic number of a graph?",
            options: ["Number of vertices", "Number of edges", "Minimum number of colors needed", "Maximum degree"],
            correct: 2
        },
        {
            question: "Which graph is both Eulerian and Hamiltonian?",
            options: ["K₃", "C₄", "K₄", "Tree"],
            correct: 1
        },
        {
            question: "What is a spanning tree?",
            options: ["Tree with all vertices", "Tree with all edges", "Tree connecting all vertices", "Tree with minimum edges"],
            correct: 2
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
            question: "Which type of graph has no crossing edges?",
            options: ["Planar graph", "Complete graph", "Bipartite graph", "Regular graph"],
            correct: 0
        },
        {
            question: "What is a Hamiltonian cycle?",
            options: ["Cycle visiting each edge once", "Cycle visiting each vertex once", "Cycle with minimum edges", "Cycle with maximum vertices"],
            correct: 1
        },
        {
            question: "Which algorithm finds minimum spanning tree?",
            options: ["Dijkstra's", "Bellman-Ford", "Prim's", "Floyd-Warshall"],
            correct: 2
        },
        {
            question: "What is the complement of a graph?",
            options: ["Graph with same vertices", "Graph with no edges", "Graph with all possible edges", "Graph with complementary edges"],
            correct: 3
        },
        {
            question: "Which graph property ensures it can be colored with 2 colors?",
            options: ["Planar", "Bipartite", "Complete", "Regular"],
            correct: 1
        },
        {
            question: "What is the girth of a graph?",
            options: ["Number of vertices", "Length of shortest cycle", "Number of edges", "Maximum degree"],
            correct: 1
        },
        {
            question: "Which theorem proves that every planar graph has a vertex of degree ≤ 5?",
            options: ["Euler's formula", "Kuratowski's theorem", "Four color theorem", "Five color theorem"],
            correct: 0
        },
        {
            question: "What is a clique in graph theory?",
            options: ["Complete subgraph", "Empty subgraph", "Single vertex", "Single edge"],
            correct: 0
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
            question: "Which graph has all vertices connected in a cycle?",
            options: ["Tree", "Complete graph", "Cycle graph", "Wheel graph"],
            correct: 2
        },
        {
            question: "What is the adjacency matrix of a graph?",
            options: ["Matrix of vertex degrees", "Matrix showing edge connections", "Matrix of vertex labels", "Matrix of edge weights"],
            correct: 1
        },
        {
            question: "Which theorem states that any graph with n vertices has chromatic number ≤ n?",
            options: ["Greedy coloring", "Four color theorem", "Trivial bound", "König's theorem"],
            correct: 2
        },
        {
            question: "What is a cut vertex in a graph?",
            options: ["Vertex with degree 1", "Vertex whose removal increases components", "Vertex in a cycle", "Vertex with maximum degree"],
            correct: 1
        },
        {
            question: "Which graph algorithm uses topological sorting?",
            options: ["Shortest path", "Minimum spanning tree", "Critical path", "Network flow"],
            correct: 2
        },
        {
            question: "What is the diameter of a graph?",
            options: ["Number of vertices", "Length of longest shortest path", "Number of edges", "Graph radius"],
            correct: 1
        }
    ],
    4: [ // Unit 4: Combinatorics (25 questions)
        {
            question: "What is the number of permutations of n distinct objects?",
            options: ["n!", "n(n-1)", "2^n", "C(n,k)"],
            correct: 0
        },
        {
            question: "Which formula gives combinations of n objects taken r at a time?",
            options: ["P(n,r)", "C(n,r) = n! / (r!(n-r)!)", "n^r", "n! / r!"],
            correct: 1
        },
        {
            question: "What is the sum of first n natural numbers?",
            options: ["n(n+1)", "n(n+1)/2", "n²", "n(n-1)/2"],
            correct: 1
        },
        {
            question: "Which counting principle multiplies probabilities?",
            options: ["Addition principle", "Multiplication principle", "Inclusion-exclusion", "Pigeonhole principle"],
            correct: 1
        },
        {
            question: "What is a recurrence relation?",
            options: ["A function", "An equation defining sequence in terms of previous terms", "A matrix", "A graph"],
            correct: 1
        },
        {
            question: "Which sequence satisfies F(n) = F(n-1) + F(n-2)?",
            options: ["Arithmetic", "Geometric", "Fibonacci", "Harmonic"],
            correct: 2
        },
        {
            question: "What is the binomial coefficient C(n,k)?",
            options: ["Number of permutations", "Number of combinations", "Number of arrangements", "Number of selections"],
            correct: 1
        },
        {
            question: "Which principle states that if n items are placed in m containers and n > m, then some container has at least ⌈n/m⌉ items?",
            options: ["Inclusion-exclusion", "Multiplication principle", "Pigeonhole principle", "Addition principle"],
            correct: 2
        },
        {
            question: "What is the number of ways to arrange letters in 'MISSISSIPPI'?",
            options: ["11!", "11! / (4!2!4!2!)", "11! / (4!4!2!2!)", "11! / (2!4!4!2!)"],
            correct: 1
        },
        {
            question: "Which generating function represents the sequence {1,1,1,...}?",
            options: ["1/(1-x)", "1/(1-x)^2", "x/(1-x)", "1/(1-2x)"],
            correct: 0
        },
        {
            question: "What is the solution to the recurrence T(n) = 2T(n/2) + n?",
            options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
            correct: 1
        },
        {
            question: "Which formula gives the number of r-combinations from n items?",
            options: ["n^r", "P(n,r)/r!", "C(n,r)", "n! / (n-r)!"],
            correct: 2
        },
        {
            question: "What is the principle of inclusion-exclusion used for?",
            options: ["Counting permutations", "Counting with overlapping sets", "Solving recurrence relations", "Finding generating functions"],
            correct: 1
        },
        {
            question: "Which sequence has the generating function 1/(1-2x)?",
            options: ["{1,2,4,8,...}", "{1,1,1,...}", "{1,2,3,...}", "{2,4,6,...}"],
            correct: 0
        },
        {
            question: "What is the number of ways to choose 3 items from 5 items?",
            options: ["10", "15", "20", "25"],
            correct: 0
        },
        {
            question: "Which recurrence relation defines the Tower of Hanoi?",
            options: ["T(n) = 2T(n-1) + 1", "T(n) = T(n-1) + n", "T(n) = 2T(n-1) + n", "T(n) = T(n-1) + 1"],
            correct: 0
        },
        {
            question: "What is the generating function for Fibonacci numbers?",
            options: ["x/(1-x-x²)", "1/(1-x-x²)", "x/(1-x²)", "1/(1-2x)"],
            correct: 1
        },
        {
            question: "Which counting method is used for distinguishable objects into distinguishable boxes?",
            options: ["Permutations", "Combinations", "Multiplication principle", "All of the above"],
            correct: 2
        },
        {
            question: "What is the solution to T(n) = T(n-1) + 1?",
            options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
            correct: 1
        },
        {
            question: "Which formula gives the number of ways to arrange n objects with repetitions?",
            options: ["n!", "n^k where k is number of distinct objects", "C(n,k)", "P(n,k)"],
            correct: 1
        },
        {
            question: "What is the binomial theorem expansion of (x+y)^n?",
            options: ["Sum of C(n,k) x^k y^{n-k}", "Sum of P(n,k) x^k y^{n-k}", "Sum of n! x^k y^{n-k}", "Sum of n^k x^k y^{n-k}"],
            correct: 0
        },
        {
            question: "Which principle is used to count the number of onto functions?",
            options: ["Inclusion-exclusion", "Multiplication principle", "Pigeonhole principle", "Surjection formula"],
            correct: 0
        },
        {
            question: "What is the generating function for the sequence {a_n}?",
            options: ["Sum a_n x^n", "Sum a_n / x^n", "Product (1 - a_n x)", "Product (1 + a_n x)"],
            correct: 0
        },
        {
            question: "Which recurrence solves the number of ways to tile a 2xn board?",
            options: ["F(n) = F(n-1) + F(n-2)", "F(n) = 2F(n-1)", "F(n) = F(n-1) + 1", "F(n) = 2^n"],
            correct: 0
        },
        {
            question: "What is the number of derangements of n objects?",
            options: ["n!", "!n = n! Σ(-1)^k / k!", "C(n,2)", "P(n,2)"],
            correct: 1
        }
    ],
    5: [ // Unit 5: Number Theory and Discrete Probability (25 questions)
        {
            question: "What is the greatest common divisor of 24 and 36?",
            options: ["6", "12", "18", "24"],
            correct: 1
        },
        {
            question: "Which algorithm efficiently computes GCD?",
            options: ["Euclidean algorithm", "Division algorithm", "Factorization", "Trial division"],
            correct: 0
        },
        {
            question: "What is the modular inverse of 3 modulo 7?",
            options: ["3", "5", "6", "None"],
            correct: 1
        },
        {
            question: "Which theorem states that if a ≡ b (mod m) then a and b have the same remainder when divided by m?",
            options: ["Division theorem", "Euclidean theorem", "Fermat's theorem", "Division algorithm"],
            correct: 3
        },
        {
            question: "What is a prime number?",
            options: ["Even number", "Number with exactly two positive divisors", "Number divisible by 2", "Number greater than 100"],
            correct: 1
        },
        {
            question: "Which property does modular arithmetic satisfy?",
            options: ["Commutative", "Associative", "Distributive", "All of the above"],
            correct: 3
        },
        {
            question: "What is the probability of rolling a 6 on a fair die?",
            options: ["1/6", "1/2", "1/3", "1/4"],
            correct: 0
        },
        {
            question: "Which theorem states that a^p ≡ a (mod p) for prime p?",
            options: ["Euler's theorem", "Fermat's little theorem", "Wilson's theorem", "Chinese remainder theorem"],
            correct: 1
        },
        {
            question: "What is the Euler's totient function φ(n)?",
            options: ["Number of divisors", "Number of prime factors", "Number of integers ≤ n coprime to n", "Sum of divisors"],
            correct: 2
        },
        {
            question: "Which congruence system has a unique solution?",
            options: ["Chinese remainder theorem", "Wilson's theorem", "Fermat's theorem", "Euclidean algorithm"],
            correct: 0
        },
        {
            question: "What is the expected value of a fair coin flip?",
            options: ["0", "0.5", "1", "2"],
            correct: 1
        },
        {
            question: "Which algorithm tests primality efficiently?",
            options: ["Trial division", "Miller-Rabin", "Euclidean", "Factorization"],
            correct: 1
        },
        {
            question: "What is the modular arithmetic operation for division?",
            options: ["Multiplication by inverse", "Regular division", "Subtraction", "Addition"],
            correct: 0
        },
        {
            question: "Which probability distribution is discrete uniform?",
            options: ["Fair die", "Normal distribution", "Exponential distribution", "Poisson distribution"],
            correct: 0
        },
        {
            question: "What is Wilson's theorem?",
            options: ["(p-1)! ≡ -1 (mod p) for prime p", "a^p ≡ a (mod p)", "φ(n) counts coprimes", "Systems of congruences"],
            correct: 0
        },
        {
            question: "What is the probability of two independent events both occurring?",
            options: ["P(A) + P(B)", "P(A) × P(B)", "P(A) / P(B)", "P(A) - P(B)"],
            correct: 1
        },
        {
            question: "Which algorithm performs modular exponentiation efficiently?",
            options: ["Euclidean", "Extended Euclidean", "Fast exponentiation", "Chinese remainder"],
            correct: 2
        },
        {
            question: "What is the variance of a random variable?",
            options: ["Expected value", "Square root of expected value", "Expected value of squared deviation", "Sum of values"],
            correct: 2
        },
        {
            question: "Which theorem allows solving systems of linear congruences?",
            options: ["Fermat's theorem", "Euler's theorem", "Chinese remainder theorem", "Wilson's theorem"],
            correct: 2
        },
        {
            question: "What is the probability mass function?",
            options: ["Continuous distribution", "Discrete probability distribution", "Cumulative distribution", "Joint distribution"],
            correct: 1
        },
        {
            question: "Which algorithm finds multiplicative inverse?",
            options: ["Euclidean algorithm", "Extended Euclidean algorithm", "Chinese remainder", "Fermat's algorithm"],
            correct: 1
        },
        {
            question: "What is the birthday problem concerned with?",
            options: ["Birth dates", "Collision probability", "Age calculation", "Calendar probability"],
            correct: 1
        },
        {
            question: "Which distribution models rare events?",
            options: ["Uniform", "Normal", "Poisson", "Exponential"],
            correct: 2
        },
        {
            question: "What is the fundamental theorem of arithmetic?",
            options: ["Every integer has prime factors", "Every number can be factored uniquely", "Both A and B", "No unique factorization"],
            correct: 2
        },
        {
            question: "Which probability concept uses Bayes' theorem?",
            options: ["Conditional probability", "Independent events", "Mutually exclusive events", "Complementary events"],
            correct: 0
        },
        {
            question: "What is the RSA algorithm based on?",
            options: ["Prime factorization", "Discrete logarithm", "Both A and B", "Symmetric encryption"],
            correct: 0
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
        if (dmMathQuestions[unitId]) {
            dmMathQuestions[unitId].forEach(question => {
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
