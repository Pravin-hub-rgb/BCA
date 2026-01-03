// quiz/subjects/dm/units.js
const dmUnits = [
    {
        id: 1,
        name: "Introduction to Data Mining",
        description: "Basic concepts, applications, data mining process, and types of data mining tasks including predictive and descriptive mining."
    },
    {
        id: 2,
        name: "Data Preprocessing and Cleaning",
        description: "Data cleaning, integration, transformation, reduction techniques, and handling missing values and noisy data."
    },
    {
        id: 3,
        name: "Classification and Prediction",
        description: "Decision trees, naive Bayes, neural networks, support vector machines, and model evaluation techniques."
    },
    {
        id: 4,
        name: "Clustering Analysis",
        description: "Partitioning methods (K-means), hierarchical clustering, density-based clustering (DBScan), and cluster evaluation."
    },
    {
        id: 5,
        name: "Association Rule Mining and Applications",
        description: "Apriori algorithm, FP-growth, evaluation measures, and applications in market basket analysis and web mining."
    }
];

// Make available globally
if (typeof window !== 'undefined') {
    window.dmUnits = dmUnits;
}
