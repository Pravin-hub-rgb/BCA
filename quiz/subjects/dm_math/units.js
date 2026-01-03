// quiz/subjects/dm_math/units.js
const dmMathUnits = [
    {
        id: 1,
        name: "Logic and Proof Techniques",
        description: "Propositional logic, predicate logic, logical equivalences, quantifiers, methods of proof, and mathematical reasoning."
    },
    {
        id: 2,
        name: "Sets, Relations and Functions",
        description: "Set theory, operations on sets, relations, properties of relations, functions, and cardinality of sets."
    },
    {
        id: 3,
        name: "Graph Theory",
        description: "Graphs and graph models, graph terminology, graph isomorphism, Euler and Hamilton paths, planar graphs, and graph coloring."
    },
    {
        id: 4,
        name: "Combinatorics",
        description: "Counting principles, permutations and combinations, binomial coefficients, recurrence relations, and generating functions."
    },
    {
        id: 5,
        name: "Number Theory and Discrete Probability",
        description: "Divisibility, modular arithmetic, Euclidean algorithm, prime numbers, discrete probability, and basic cryptography."
    }
];

// Make available globally
if (typeof window !== 'undefined') {
    window.dmMathUnits = dmMathUnits;
}
