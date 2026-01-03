// quiz/subjects/dm/questions.js
const dmQuestions = {
    1: [ // Unit 1: Introduction to Data Mining (20 questions)
        {
            question: "What is the primary goal of data mining?",
            options: ["Data storage", "Knowledge discovery from data", "Data deletion", "File organization"],
            correct: 1
        },
        {
            question: "Which type of data mining discovers patterns that can be used to predict future behavior?",
            options: ["Descriptive mining", "Predictive mining", "Text mining", "Web mining"],
            correct: 1
        },
        {
            question: "What does the term 'knowledge discovery in databases' (KDD) refer to?",
            options: ["Database creation", "Extracting useful knowledge from data", "Data deletion", "File compression"],
            correct: 1
        },
        {
            question: "Which phase of the data mining process involves understanding the project objectives and requirements?",
            options: ["Data cleaning", "Business understanding", "Model building", "Deployment"],
            correct: 1
        },
        {
            question: "What is the main difference between data mining and traditional query tools?",
            options: ["Speed", "Automatic pattern discovery", "Data storage", "User interface"],
            correct: 1
        },
        {
            question: "Which application area uses data mining to detect fraudulent transactions?",
            options: ["Retail", "Finance", "Healthcare", "Education"],
            correct: 1
        },
        {
            question: "What type of data mining technique groups similar data points together?",
            options: ["Classification", "Clustering", "Regression", "Association"],
            correct: 1
        },
        {
            question: "Which data mining task finds relationships between variables in a dataset?",
            options: ["Clustering", "Association rule mining", "Classification", "Prediction"],
            correct: 1
        },
        {
            question: "What is the cross-industry standard process for data mining (CRISP-DM)?",
            options: ["Data storage method", "Standard methodology for data mining projects", "Programming language", "Database system"],
            correct: 1
        },
        {
            question: "Which type of data mining is used to understand past behavior and current trends?",
            options: ["Predictive mining", "Descriptive mining", "Prescriptive mining", "Diagnostic mining"],
            correct: 1
        },
        {
            question: "What is the main challenge in data mining related to having too many attributes?",
            options: ["Curse of dimensionality", "Data sparsity", "Computational complexity", "Data quality"],
            correct: 0
        },
        {
            question: "Which data mining application helps in customer segmentation for marketing?",
            options: ["Fraud detection", "Customer relationship management", "Medical diagnosis", "Weather prediction"],
            correct: 1
        },
        {
            question: "What is the primary difference between supervised and unsupervised learning?",
            options: ["Algorithm speed", "Presence of labeled training data", "Data size", "Computational resources"],
            correct: 1
        },
        {
            question: "Which phase involves converting raw data into a format suitable for mining algorithms?",
            options: ["Data understanding", "Data preparation", "Modeling", "Evaluation"],
            correct: 1
        },
        {
            question: "What type of data mining is used to identify unusual patterns or outliers?",
            options: ["Classification", "Clustering", "Anomaly detection", "Association"],
            correct: 2
        },
        {
            question: "Which industry heavily uses data mining for recommendation systems?",
            options: ["Banking", "Retail e-commerce", "Manufacturing", "Agriculture"],
            correct: 1
        },
        {
            question: "What is the main goal of the evaluation phase in CRISP-DM?",
            options: ["Data collection", "Assess model quality and validity", "Data cleaning", "Deployment planning"],
            correct: 1
        },
        {
            question: "Which data mining technique is used to predict continuous numerical values?",
            options: ["Classification", "Clustering", "Regression", "Association"],
            correct: 2
        },
        {
            question: "What is the term for finding hidden patterns in large datasets that are not immediately obvious?",
            options: ["Data storage", "Pattern recognition", "File organization", "Data compression"],
            correct: 1
        },
        {
            question: "Which application uses data mining to predict customer churn?",
            options: ["Inventory management", "Customer retention", "Product pricing", "Supply chain"],
            correct: 1
        }
    ],
    2: [ // Unit 2: Data Preprocessing and Cleaning (20 questions)
        {
            question: "What is the primary purpose of data preprocessing in data mining?",
            options: ["Data storage", "Improve data quality for mining algorithms", "Data deletion", "File compression"],
            correct: 1
        },
        {
            question: "Which data quality issue occurs when data contains errors or inconsistencies?",
            options: ["Missing values", "Noise", "Inconsistent data", "Duplicate data"],
            correct: 2
        },
        {
            question: "What is the most common method for handling missing values?",
            options: ["Data deletion", "Mean/median imputation", "Data duplication", "Value randomization"],
            correct: 1
        },
        {
            question: "Which technique reduces data dimensionality by selecting important features?",
            options: ["Data cleaning", "Data integration", "Feature selection", "Data discretization"],
            correct: 2
        },
        {
            question: "What is data normalization in the context of preprocessing?",
            options: ["Removing duplicates", "Scaling features to similar ranges", "Data encryption", "Format conversion"],
            correct: 1
        },
        {
            question: "Which preprocessing technique combines data from multiple sources?",
            options: ["Data cleaning", "Data integration", "Data transformation", "Data reduction"],
            correct: 1
        },
        {
            question: "What is the purpose of data discretization?",
            options: ["Convert continuous to categorical data", "Remove noise", "Handle missing values", "Data integration"],
            correct: 0
        },
        {
            question: "Which method detects and removes noisy data points?",
            options: ["Data smoothing", "Data integration", "Data transformation", "Data reduction"],
            correct: 0
        },
        {
            question: "What is the main challenge in data integration?",
            options: ["Data volume", "Schema heterogeneity", "Processing speed", "Storage capacity"],
            correct: 1
        },
        {
            question: "Which preprocessing technique reduces the number of data points while preserving important information?",
            options: ["Data cleaning", "Data sampling", "Data transformation", "Data integration"],
            correct: 1
        },
        {
            question: "What is the purpose of outlier detection in data preprocessing?",
            options: ["Data integration", "Identify and handle anomalous data points", "Data transformation", "Feature selection"],
            correct: 1
        },
        {
            question: "Which data reduction technique uses statistical measures to represent data?",
            options: ["Data compression", "Dimensionality reduction", "Numerosity reduction", "Data discretization"],
            correct: 2
        },
        {
            question: "What is the difference between data cleaning and data scrubbing?",
            options: ["Different terms for same process", "Data cleaning is manual, scrubbing is automated", "No difference", "Scrubbing is for databases only"],
            correct: 0
        },
        {
            question: "Which preprocessing step involves converting data into appropriate formats?",
            options: ["Data cleaning", "Data integration", "Data transformation", "Data reduction"],
            correct: 2
        },
        {
            question: "What is the purpose of feature extraction in data preprocessing?",
            options: ["Remove features", "Create new features from existing ones", "Select existing features", "Scale features"],
            correct: 1
        },
        {
            question: "Which technique handles inconsistent attribute names across datasets?",
            options: ["Data cleaning", "Schema integration", "Data transformation", "Data reduction"],
            correct: 1
        },
        {
            question: "What is the main goal of data normalization techniques like min-max scaling?",
            options: ["Remove outliers", "Prevent features with large ranges from dominating", "Handle missing values", "Data integration"],
            correct: 1
        },
        {
            question: "Which preprocessing method converts categorical data to numerical?",
            options: ["Data cleaning", "Data transformation", "Data reduction", "Data integration"],
            correct: 1
        },
        {
            question: "What is the purpose of principal component analysis (PCA) in preprocessing?",
            options: ["Feature selection", "Dimensionality reduction", "Data cleaning", "Data integration"],
            correct: 1
        },
        {
            question: "Which data quality dimension refers to data being recorded correctly?",
            options: ["Completeness", "Accuracy", "Consistency", "Timeliness"],
            correct: 1
        }
    ],
    3: [ // Unit 3: Classification and Prediction (25 questions)
        {
            question: "What is the primary goal of classification in data mining?",
            options: ["Group data points", "Predict class labels", "Find associations", "Reduce dimensions"],
            correct: 1
        },
        {
            question: "Which algorithm builds classification models using a tree structure?",
            options: ["Naive Bayes", "Decision Tree", "K-Nearest Neighbors", "Support Vector Machine"],
            correct: 1
        },
        {
            question: "What does the naive Bayes classifier assume about features?",
            options: ["Features are dependent", "Features are independent", "Features are correlated", "Features are identical"],
            correct: 1
        },
        {
            question: "Which evaluation metric measures the proportion of correct predictions?",
            options: ["Precision", "Recall", "Accuracy", "F1-Score"],
            correct: 2
        },
        {
            question: "What is overfitting in the context of classification models?",
            options: ["Model too simple", "Model performs well on training but poorly on new data", "Training is slow", "Model has too few parameters"],
            correct: 1
        },
        {
            question: "Which algorithm classifies data points based on their k nearest neighbors?",
            options: ["Decision Tree", "Naive Bayes", "K-Nearest Neighbors", "Neural Network"],
            correct: 2
        },
        {
            question: "What is the purpose of cross-validation in model evaluation?",
            options: ["Speed up training", "Assess model generalization", "Reduce data size", "Handle overfitting"],
            correct: 1
        },
        {
            question: "Which algorithm finds the optimal hyperplane for separating classes?",
            options: ["Decision Tree", "Naive Bayes", "Support Vector Machine", "K-Nearest Neighbors"],
            correct: 2
        },
        {
            question: "What does the confusion matrix show in classification evaluation?",
            options: ["Model accuracy", "Prediction errors by type", "Training time", "Model complexity"],
            correct: 1
        },
        {
            question: "Which technique helps prevent overfitting by adding a penalty term?",
            options: ["Cross-validation", "Regularization", "Feature selection", "Data preprocessing"],
            correct: 1
        },
        {
            question: "What is the main advantage of decision trees?",
            options: ["High accuracy", "Interpretability", "Fast training", "Handles large datasets"],
            correct: 1
        },
        {
            question: "Which evaluation metric is important when classes are imbalanced?",
            options: ["Accuracy", "Precision and Recall", "Training time", "Model size"],
            correct: 1
        },
        {
            question: "What is the kernel trick used for in support vector machines?",
            options: ["Speed up training", "Handle non-linear data", "Reduce dimensions", "Handle missing values"],
            correct: 1
        },
        {
            question: "Which algorithm is based on Bayes' theorem?",
            options: ["Decision Tree", "Support Vector Machine", "Naive Bayes", "K-Nearest Neighbors"],
            correct: 2
        },
        {
            question: "What is the purpose of the ROC curve in model evaluation?",
            options: ["Measure training time", "Visualize classification performance", "Show model complexity", "Display data distribution"],
            correct: 1
        },
        {
            question: "Which technique combines multiple models to improve performance?",
            options: ["Cross-validation", "Ensemble learning", "Regularization", "Feature selection"],
            correct: 1
        },
        {
            question: "What is the difference between bagging and boosting?",
            options: ["Training speed", "Sequential vs parallel model training", "Model complexity", "Data requirements"],
            correct: 1
        },
        {
            question: "Which algorithm uses information gain for feature selection?",
            options: ["Naive Bayes", "Support Vector Machine", "Decision Tree", "K-Nearest Neighbors"],
            correct: 2
        },
        {
            question: "What is the purpose of stratified sampling in cross-validation?",
            options: ["Speed up process", "Maintain class distribution", "Reduce data size", "Handle overfitting"],
            correct: 1
        },
        {
            question: "Which evaluation metric measures the model's ability to identify positive cases?",
            options: ["Precision", "Accuracy", "Recall", "F1-Score"],
            correct: 2
        },
        {
            question: "What is the main disadvantage of the naive Bayes classifier?",
            options: ["Slow training", "Independence assumption", "Cannot handle continuous data", "High computational cost"],
            correct: 1
        },
        {
            question: "Which technique is used to tune hyperparameters in machine learning models?",
            options: ["Cross-validation", "Grid search", "Feature selection", "Data preprocessing"],
            correct: 1
        },
        {
            question: "What is the purpose of the validation set in model training?",
            options: ["Initial training", "Hyperparameter tuning", "Final testing", "Data preprocessing"],
            correct: 1
        },
        {
            question: "Which algorithm is sensitive to the choice of k parameter?",
            options: ["Decision Tree", "Naive Bayes", "K-Nearest Neighbors", "Support Vector Machine"],
            correct: 2
        },
        {
            question: "What is the F1-score in classification evaluation?",
            options: ["Accuracy measure", "Harmonic mean of precision and recall", "Training time", "Model complexity"],
            correct: 1
        }
    ],
    4: [ // Unit 4: Clustering Analysis (25 questions)
        {
            question: "What is the main goal of clustering in data mining?",
            options: ["Predict values", "Group similar data points", "Find associations", "Classify data"],
            correct: 1
        },
        {
            question: "Which clustering algorithm uses centroids to form clusters?",
            options: ["Hierarchical", "Density-based", "K-means", "Grid-based"],
            correct: 2
        },
        {
            question: "What is the main disadvantage of K-means clustering?",
            options: ["Slow processing", "Requires specifying number of clusters", "Cannot handle noise", "Only works with numerical data"],
            correct: 1
        },
        {
            question: "Which clustering method creates a hierarchy of clusters?",
            options: ["K-means", "Hierarchical clustering", "DBScan", "Mean Shift"],
            correct: 1
        },
        {
            question: "What does DBScan stand for in clustering algorithms?",
            options: ["Density-Based Spatial Clustering of Applications with Noise", "Data-Based Scanning Clustering", "Density-Based Scanning Algorithm", "Dynamic Binary Scan"],
            correct: 0
        },
        {
            question: "Which clustering evaluation metric measures cluster compactness?",
            options: ["Silhouette Score", "Within-cluster sum of squares", "Between-cluster distance", "Cluster diameter"],
            correct: 1
        },
        {
            question: "What is the elbow method used for in K-means clustering?",
            options: ["Choose initial centroids", "Determine optimal number of clusters", "Evaluate cluster quality", "Handle outliers"],
            correct: 1
        },
        {
            question: "Which clustering algorithm can find clusters of arbitrary shapes?",
            options: ["K-means", "Hierarchical", "DBScan", "K-medoids"],
            correct: 2
        },
        {
            question: "What is the main difference between agglomerative and divisive hierarchical clustering?",
            options: ["Speed", "Bottom-up vs top-down approach", "Data requirements", "Cluster quality"],
            correct: 1
        },
        {
            question: "Which clustering algorithm is sensitive to initialization?",
            options: ["Hierarchical", "DBScan", "K-means", "Mean Shift"],
            correct: 2
        },
        {
            question: "What is the purpose of the Silhouette Score in cluster evaluation?",
            options: ["Measure cluster separation", "Evaluate how well data points fit their clusters", "Calculate cluster size", "Determine cluster shape"],
            correct: 1
        },
        {
            question: "Which clustering method allows points to belong to multiple clusters?",
            options: ["Hard clustering", "Soft clustering", "Hierarchical clustering", "Density-based clustering"],
            correct: 1
        },
        {
            question: "What is the main advantage of hierarchical clustering over K-means?",
            options: ["Faster processing", "No need to specify K", "Better with spherical clusters", "Handles large datasets"],
            correct: 1
        },
        {
            question: "Which parameter in DBScan defines the neighborhood radius?",
            options: ["MinPts", "Epsilon", "K", "Distance"],
            correct: 1
        },
        {
            question: "What type of clustering is K-means?",
            options: ["Hierarchical", "Density-based", "Partitioning", "Grid-based"],
            correct: 2
        },
        {
            question: "Which clustering algorithm uses a minimum number of points parameter?",
            options: ["K-means", "Hierarchical", "DBScan", "Mean Shift"],
            correct: 2
        },
        {
            question: "What is the curse of dimensionality in clustering?",
            options: ["Too many clusters", "High-dimensional data issues", "Too few data points", "Computational complexity"],
            correct: 1
        },
        {
            question: "Which clustering evaluation method compares clusters to known ground truth?",
            options: ["Internal evaluation", "External evaluation", "Relative evaluation", "Statistical evaluation"],
            correct: 1
        },
        {
            question: "What is the main challenge in clustering high-dimensional data?",
            options: ["Data sparsity", "Computational cost", "Both A and B", "Data quality"],
            correct: 2
        },
        {
            question: "Which clustering algorithm is robust to outliers?",
            options: ["K-means", "Hierarchical", "DBScan", "K-medoids"],
            correct: 3
        },
        {
            question: "What is the purpose of feature scaling before clustering?",
            options: ["Reduce dimensions", "Prevent features with large ranges from dominating", "Handle missing values", "Data integration"],
            correct: 1
        },
        {
            question: "Which clustering method is deterministic?",
            options: ["K-means", "Hierarchical (agglomerative)", "DBScan", "Fuzzy C-means"],
            correct: 1
        },
        {
            question: "What is the Calinski-Harabasz index used for?",
            options: ["Cluster validation", "Distance calculation", "Centroid initialization", "Parameter tuning"],
            correct: 0
        },
        {
            question: "Which clustering algorithm can discover noise points?",
            options: ["K-means", "Hierarchical", "DBScan", "Mean Shift"],
            correct: 2
        },
        {
            question: "What is the main limitation of single-linkage hierarchical clustering?",
            options: ["Slow processing", "Sensitive to noise", "Cannot handle large datasets", "Requires distance matrix"],
            correct: 1
        }
    ],
    5: [ // Unit 5: Association Rule Mining and Applications (25 questions)
        {
            question: "What is the primary goal of association rule mining?",
            options: ["Predict values", "Find relationships between items", "Group similar data", "Classify data"],
            correct: 1
        },
        {
            question: "What does the support metric measure in association rules?",
            options: ["Rule accuracy", "Frequency of itemset occurrence", "Rule strength", "Item importance"],
            correct: 1
        },
        {
            question: "Which algorithm is commonly used for association rule mining?",
            options: ["K-means", "Apriori", "Decision Tree", "Naive Bayes"],
            correct: 1
        },
        {
            question: "What does confidence measure in association rules?",
            options: ["Item frequency", "Conditional probability of rule", "Rule length", "Item importance"],
            correct: 1
        },
        {
            question: "Which application commonly uses association rule mining?",
            options: ["Weather prediction", "Market basket analysis", "Image recognition", "Text classification"],
            correct: 1
        },
        {
            question: "What is the main challenge of the Apriori algorithm?",
            options: ["Low accuracy", "Multiple database scans", "Complex implementation", "Memory intensive"],
            correct: 1
        },
        {
            question: "Which metric combines support and confidence in association rules?",
            options: ["Lift", "Conviction", "Leverage", "All of the above"],
            correct: 3
        },
        {
            question: "What is the FP-growth algorithm designed to overcome?",
            options: ["Low memory usage", "Apriori's multiple database scans", "Complex calculations", "Data sparsity"],
            correct: 1
        },
        {
            question: "Which association rule metric measures how much more likely items occur together?",
            options: ["Support", "Confidence", "Lift", "Conviction"],
            correct: 2
        },
        {
            question: "What is the minimum support threshold used for in association mining?",
            options: ["Filter frequent itemsets", "Measure rule strength", "Calculate confidence", "Determine lift"],
            correct: 0
        },
        {
            question: "Which data structure does FP-growth use to compress the database?",
            options: ["Hash table", "Trie structure", "FP-tree", "Binary tree"],
            correct: 2
        },
        {
            question: "What type of patterns does association rule mining discover?",
            options: ["Sequential patterns", "Frequent itemsets", "Classification rules", "Clustering patterns"],
            correct: 1
        },
        {
            question: "Which metric indicates how much the rule improves prediction over independence?",
            options: ["Support", "Confidence", "Lift", "Interest"],
            correct: 2
        },
        {
            question: "What is the conviction metric used for in association rules?",
            options: ["Measure dependence", "Calculate rule accuracy", "Determine rule length", "Assess statistical significance"],
            correct: 0
        },
        {
            question: "Which application of association mining helps in product placement?",
            options: ["Web mining", "Market basket analysis", "Medical diagnosis", "Fraud detection"],
            correct: 1
        },
        {
            question: "What is the main difference between association rules and classification rules?",
            options: ["Data requirements", "Predictive vs descriptive nature", "Algorithm complexity", "Evaluation metrics"],
            correct: 1
        },
        {
            question: "Which constraint can be used to focus association mining on specific items?",
            options: ["Support threshold", "Confidence threshold", "Item constraints", "Rule length"],
            correct: 2
        },
        {
            question: "What is the purpose of pruning in association rule mining?",
            options: ["Reduce data size", "Remove infrequent itemsets", "Improve algorithm speed", "All of the above"],
            correct: 3
        },
        {
            question: "Which association mining variant considers item sequences over time?",
            options: ["Spatial mining", "Sequential pattern mining", "Web mining", "Text mining"],
            correct: 1
        },
        {
            question: "What is the chi-square test used for in association rule evaluation?",
            options: ["Measure statistical significance", "Calculate support", "Determine confidence", "Assess lift"],
            correct: 0
        },
        {
            question: "Which algorithm generates candidate itemsets level by level?",
            options: ["FP-growth", "Apriori", "ECLAT", "PrefixSpan"],
            correct: 1
        },
        {
            question: "What is the main advantage of FP-growth over Apriori?",
            options: ["Simpler implementation", "Fewer database scans", "Better accuracy", "Faster candidate generation"],
            correct: 1
        },
        {
            question: "Which association mining application analyzes user browsing patterns?",
            options: ["Market basket analysis", "Web usage mining", "Medical data mining", "Fraud detection"],
            correct: 1
        },
        {
            question: "What is the conviction metric particularly useful for detecting?",
            options: ["Strong rules", "Interesting rules", "Both A and B", "Weak rules"],
            correct: 1
        },
        {
            question: "Which evaluation metric is not affected by item frequency?",
            options: ["Support", "Confidence", "Lift", "All are affected"],
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
        if (dmQuestions[unitId]) {
            dmQuestions[unitId].forEach(question => {
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
