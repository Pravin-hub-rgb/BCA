// quiz/subjects/fml/questions.js
const fmlQuestions = {
    1: [ // Unit 1: Statistical Concepts and Linear Algebra (20 questions)
        {
            question: "What is the middle value in a dataset when arranged in ascending order?",
            options: ["Mean", "Median", "Mode", "Range"],
            correct: 1
        },
        {
            question: "Which statistical measure is most affected by extreme values or outliers?",
            options: ["Median", "Mode", "Mean", "Standard Deviation"],
            correct: 2
        },
        {
            question: "What does the term 'probability' measure in statistical analysis?",
            options: ["Central tendency", "Likelihood of an event", "Data dispersion", "Data correlation"],
            correct: 1
        },
        {
            question: "In linear algebra, what is a matrix with equal number of rows and columns called?",
            options: ["Vector", "Scalar", "Square matrix", "Rectangular matrix"],
            correct: 2
        },
        {
            question: "What is the result of multiplying a matrix by its inverse?",
            options: ["Zero matrix", "Identity matrix", "Transpose matrix", "Diagonal matrix"],
            correct: 1
        },
        {
            question: "Which machine learning approach learns from labeled training data?",
            options: ["Unsupervised Learning", "Supervised Learning", "Reinforcement Learning", "Semi-supervised Learning"],
            correct: 1
        },
        {
            question: "What type of machine learning involves learning patterns without explicit labels?",
            options: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "Deep Learning"],
            correct: 1
        },
        {
            question: "In reinforcement learning, what guides the learning process?",
            options: ["Labeled data", "Rewards and penalties", "Unlabeled data", "Statistical measures"],
            correct: 1
        },
        {
            question: "What is the range of a dataset?",
            options: ["Average value", "Middle value", "Difference between maximum and minimum", "Most frequent value"],
            correct: 2
        },
        {
            question: "Which statistical measure represents the most frequently occurring value?",
            options: ["Mean", "Median", "Mode", "Variance"],
            correct: 2
        },
        {
            question: "What is a vector in linear algebra?",
            options: ["Single number", "One-dimensional array", "Two-dimensional array", "Three-dimensional array"],
            correct: 1
        },
        {
            question: "What operation exchanges rows with columns in a matrix?",
            options: ["Inverse", "Determinant", "Transpose", "Multiplication"],
            correct: 2
        },
        {
            question: "What does supervised learning typically predict?",
            options: ["Data clusters", "Future values", "Hidden patterns", "Data dimensions"],
            correct: 1
        },
        {
            question: "Which learning approach is used for game playing algorithms?",
            options: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "Transfer Learning"],
            correct: 2
        },
        {
            question: "What statistical measure shows data dispersion around the mean?",
            options: ["Range", "Median", "Standard Deviation", "Mode"],
            correct: 2
        },
        {
            question: "In probability theory, what represents certain events?",
            options: ["0", "0.5", "1", "Undefined"],
            correct: 2
        },
        {
            question: "What is the identity matrix used for in matrix operations?",
            options: ["Data storage", "No change in multiplication", "Data reduction", "Data sorting"],
            correct: 1
        },
        {
            question: "Which machine learning approach discovers hidden patterns in data?",
            options: ["Supervised Learning", "Reinforcement Learning", "Unsupervised Learning", "Supervised Learning"],
            correct: 2
        },
        {
            question: "What is an outlier in statistical analysis?",
            options: ["Average value", "Extreme value", "Middle value", "Frequent value"],
            correct: 1
        },
        {
            question: "What does the determinant of a matrix represent?",
            options: ["Matrix size", "Matrix scaling factor", "Matrix transpose", "Matrix inverse"],
            correct: 1
        }
    ],
    2: [ // Unit 2: Python Programming Fundamentals (20 questions)
        {
            question: "Which of the following is not a valid data type in Python?",
            options: ["Integer", "Float", "Character", "String"],
            correct: 2
        },
        {
            question: "What operator is used for integer division in Python?",
            options: ["/", "//", "%", "**"],
            correct: 1
        },
        {
            question: "Which keyword is used to define a function in Python?",
            options: ["function", "def", "define", "func"],
            correct: 1
        },
        {
            question: "What is the correct way to open a file for reading in Python?",
            options: ["open('file.txt', 'r')", "open('file.txt', 'w')", "read('file.txt')", "file.open('r')"],
            correct: 0
        },
        {
            question: "Which control structure is used to execute code repeatedly in Python?",
            options: ["if-else", "switch-case", "for loop", "function call"],
            correct: 2
        },
        {
            question: "What does the 'import' statement do in Python?",
            options: ["Creates variables", "Loads modules", "Defines functions", "Opens files"],
            correct: 1
        },
        {
            question: "Which operator is used for string concatenation in Python?",
            options: ["+", "-", "*", "/"],
            correct: 0
        },
        {
            question: "What is the purpose of the 'return' statement in a function?",
            options: ["End function execution", "Return a value", "Both A and B", "Print output"],
            correct: 2
        },
        {
            question: "Which data structure uses key-value pairs in Python?",
            options: ["List", "Tuple", "Dictionary", "Set"],
            correct: 2
        },
        {
            question: "What does the 'len()' function return?",
            options: ["Length of string", "Length of list/tuple", "Both A and B", "File size"],
            correct: 2
        },
        {
            question: "Which operator checks for equality in Python?",
            options: ["=", "==", "!=", "<>"],
            correct: 1
        },
        {
            question: "What is a module in Python?",
            options: ["Data type", "File containing code", "Function definition", "Variable name"],
            correct: 1
        },
        {
            question: "Which method is used to add an item to a list in Python?",
            options: ["add()", "insert()", "append()", "Both B and C"],
            correct: 3
        },
        {
            question: "What does the 'break' statement do in a loop?",
            options: ["Continues loop", "Exits loop", "Restarts loop", "Skips iteration"],
            correct: 1
        },
        {
            question: "Which file mode is used for both reading and writing?",
            options: ["r", "w", "a", "r+"],
            correct: 3
        },
        {
            question: "What is the purpose of the 'else' clause in exception handling?",
            options: ["Handle exceptions", "Execute if no exception", "Always execute", "Skip exceptions"],
            correct: 1
        },
        {
            question: "Which built-in function converts string to integer?",
            options: ["str()", "int()", "float()", "bool()"],
            correct: 1
        },
        {
            question: "What does the 'pass' statement do in Python?",
            options: ["Ends program", "Does nothing", "Prints message", "Creates variable"],
            correct: 1
        },
        {
            question: "Which data type is immutable in Python?",
            options: ["List", "Dictionary", "Tuple", "Set"],
            correct: 2
        },
        {
            question: "What is the purpose of the 'with' statement for file handling?",
            options: ["Manual closing", "Automatic resource management", "File creation", "Directory navigation"],
            correct: 1
        }
    ],
    3: [ // Unit 3: Unsupervised Learning Algorithms (25 questions)
        {
            question: "What is the main goal of clustering in unsupervised learning?",
            options: ["Predict values", "Group similar data points", "Classify data", "Reduce dimensions"],
            correct: 1
        },
        {
            question: "Which clustering algorithm uses centroids to group data points?",
            options: ["Hierarchical Clustering", "DBScan", "K-means", "Fuzzy C-means"],
            correct: 2
        },
        {
            question: "What does the 'K' in K-means algorithm represent?",
            options: ["Data points", "Clusters", "Dimensions", "Iterations"],
            correct: 1
        },
        {
            question: "Which clustering method builds a hierarchy of clusters?",
            options: ["K-means", "Hierarchical Clustering", "DBScan", "Mean Shift"],
            correct: 1
        },
        {
            question: "What is the main advantage of hierarchical clustering?",
            options: ["Fast processing", "No need to specify K", "Handles noise well", "Works with any data type"],
            correct: 1
        },
        {
            question: "Which algorithm is density-based and can find arbitrarily shaped clusters?",
            options: ["K-means", "Hierarchical", "DBScan", "Fuzzy C-means"],
            correct: 2
        },
        {
            question: "What does DBScan stand for?",
            options: ["Density-Based Spatial Clustering of Applications with Noise", "Data-Based Scanning Clustering", "Density-Based Scanning Algorithm", "Dynamic Binary Scan"],
            correct: 0
        },
        {
            question: "Which technique reduces the number of features while preserving important information?",
            options: ["Clustering", "Classification", "Dimensionality Reduction", "Regression"],
            correct: 2
        },
        {
            question: "What is Principal Component Analysis (PCA) used for?",
            options: ["Clustering", "Dimensionality Reduction", "Classification", "Regression"],
            correct: 1
        },
        {
            question: "Which feature selection method removes features with low variance?",
            options: ["High Correlation Filter", "Forward Feature Selection", "Low Variance Filter", "Backward Feature Elimination"],
            correct: 2
        },
        {
            question: "What is the Silhouette Score used to evaluate?",
            options: ["Clustering quality", "Dimensionality reduction", "Feature selection", "Data preprocessing"],
            correct: 0
        },
        {
            question: "Which clustering algorithm allows points to belong to multiple clusters?",
            options: ["K-means", "Hierarchical", "Fuzzy C-means", "DBScan"],
            correct: 2
        },
        {
            question: "What is the main disadvantage of K-means clustering?",
            options: ["Slow processing", "Need to specify K", "Cannot handle noise", "Only works with numerical data"],
            correct: 1
        },
        {
            question: "Which dimensionality reduction technique finds principal components?",
            options: ["Low Variance Filter", "High Correlation Filter", "Principal Component Analysis", "Feature Selection"],
            correct: 2
        },
        {
            question: "What does the elbow method help determine in K-means?",
            options: ["Number of iterations", "Optimal number of clusters", "Centroid positions", "Cluster quality"],
            correct: 1
        },
        {
            question: "Which clustering algorithm is sensitive to the initialization of centroids?",
            options: ["Hierarchical", "DBScan", "K-means", "Mean Shift"],
            correct: 2
        },
        {
            question: "What is the purpose of feature scaling before applying clustering algorithms?",
            options: ["Reduce computation time", "Prevent features with larger ranges from dominating", "Both A and B", "Increase accuracy only"],
            correct: 2
        },
        {
            question: "Which technique removes highly correlated features?",
            options: ["Low Variance Filter", "High Correlation Filter", "Principal Component Analysis", "Forward Selection"],
            correct: 1
        },
        {
            question: "What is the main goal of dimensionality reduction?",
            options: ["Increase data complexity", "Reduce computational cost", "Preserve important information", "Both B and C"],
            correct: 3
        },
        {
            question: "Which clustering evaluation metric measures intra-cluster distance?",
            options: ["Silhouette Score", "Calinski-Harabasz Index", "Davies-Bouldin Index", "All of the above"],
            correct: 3
        },
        {
            question: "What type of clustering is hierarchical clustering?",
            options: ["Partitioning", "Density-based", "Hierarchical", "Fuzzy"],
            correct: 2
        },
        {
            question: "Which algorithm can discover clusters of arbitrary shapes?",
            options: ["K-means", "Hierarchical (single-link)", "DBScan", "Fuzzy C-means"],
            correct: 2
        },
        {
            question: "What is the curse of dimensionality in the context of clustering?",
            options: ["Too few features", "Too many features causing issues", "Wrong data types", "Missing values"],
            correct: 1
        },
        {
            question: "Which feature selection method starts with no features and adds them?",
            options: ["Backward Elimination", "Forward Selection", "Recursive Feature Elimination", "Filter Methods"],
            correct: 1
        },
        {
            question: "What does the within-cluster sum of squares measure in K-means?",
            options: ["Cluster quality", "Distance between clusters", "Compactness of clusters", "Cluster separation"],
            correct: 2
        }
    ],
    4: [ // Unit 4: Data Analysis and Machine Learning with Python (30 questions)
        {
            question: "Which library is primarily used for numerical computations in Python?",
            options: ["Pandas", "NumPy", "Matplotlib", "Scikit-Learn"],
            correct: 1
        },
        {
            question: "What does the 'ndarray' stand for in NumPy?",
            options: ["Named Data Array", "N-Dimensional Array", "Numerical Data Array", "Node Data Array"],
            correct: 1
        },
        {
            question: "Which Pandas data structure is two-dimensional and labeled?",
            options: ["Series", "DataFrame", "Panel", "Index"],
            correct: 1
        },
        {
            question: "What is the primary purpose of Matplotlib in data analysis?",
            options: ["Data manipulation", "Data visualization", "Machine learning", "Statistical analysis"],
            correct: 1
        },
        {
            question: "Which Scikit-Learn module contains machine learning algorithms?",
            options: ["sklearn.preprocessing", "sklearn.model_selection", "sklearn.linear_model", "sklearn.metrics"],
            correct: 2
        },
        {
            question: "What does the 'iloc' method do in Pandas?",
            options: ["Label-based indexing", "Integer-based indexing", "Conditional selection", "Data aggregation"],
            correct: 1
        },
        {
            question: "Which NumPy function creates arrays with evenly spaced values?",
            options: ["zeros()", "ones()", "arange()", "linspace()"],
            correct: 3
        },
        {
            question: "What is the purpose of data normalization in machine learning?",
            options: ["Remove duplicates", "Scale features to similar ranges", "Convert data types", "Handle missing values"],
            correct: 1
        },
        {
            question: "Which Pandas method is used for data aggregation?",
            options: ["merge()", "groupby()", "pivot()", "melt()"],
            correct: 1
        },
        {
            question: "What does the 'fit()' method do in Scikit-Learn?",
            options: ["Make predictions", "Train the model", "Evaluate performance", "Preprocess data"],
            correct: 1
        },
        {
            question: "Which visualization shows the relationship between two continuous variables?",
            options: ["Bar plot", "Histogram", "Scatter plot", "Pie chart"],
            correct: 2
        },
        {
            question: "What is the purpose of the train-test split in machine learning?",
            options: ["Increase training time", "Evaluate model performance", "Reduce data size", "Handle overfitting"],
            correct: 1
        },
        {
            question: "Which Pandas function combines DataFrames based on common columns?",
            options: ["concat()", "merge()", "join()", "append()"],
            correct: 1
        },
        {
            question: "What does the 'reshape()' method do in NumPy?",
            options: ["Change data type", "Change array shape", "Sort array", "Filter array"],
            correct: 1
        },
        {
            question: "Which Scikit-Learn class is used for data preprocessing?",
            options: ["LinearRegression", "StandardScaler", "train_test_split", "accuracy_score"],
            correct: 1
        },
        {
            question: "What is the purpose of feature engineering in machine learning?",
            options: ["Create new features", "Remove features", "Both A and B", "Scale features"],
            correct: 2
        },
        {
            question: "Which Matplotlib function creates a line plot?",
            options: ["bar()", "plot()", "scatter()", "hist()"],
            correct: 1
        },
        {
            question: "What does the 'describe()' method show in Pandas?",
            options: ["Data types", "Statistical summary", "Column names", "Row count"],
            correct: 1
        },
        {
            question: "Which evaluation metric is used for regression problems?",
            options: ["Accuracy", "Precision", "Mean Squared Error", "F1-Score"],
            correct: 2
        },
        {
            question: "What is the purpose of cross-validation in machine learning?",
            options: ["Speed up training", "Reduce overfitting", "Increase model complexity", "Handle missing data"],
            correct: 1
        },
        {
            question: "Which NumPy function calculates the mean of an array?",
            options: ["median()", "std()", "mean()", "var()"],
            correct: 2
        },
        {
            question: "What does the 'dropna()' method do in Pandas?",
            options: ["Add missing values", "Remove missing values", "Fill missing values", "Count missing values"],
            correct: 1
        },
        {
            question: "Which Scikit-Learn function splits data into train and test sets?",
            options: ["fit()", "predict()", "train_test_split()", "cross_val_score()"],
            correct: 2
        },
        {
            question: "What is the purpose of data visualization in machine learning?",
            options: ["Train models", "Understand data patterns", "Make predictions", "Preprocess data"],
            correct: 1
        },
        {
            question: "Which Pandas method changes the index of a DataFrame?",
            options: ["reset_index()", "set_index()", "reindex()", "Both B and C"],
            correct: 3
        },
        {
            question: "What does the 'corr()' method calculate in Pandas?",
            options: ["Covariance", "Correlation", "Standard deviation", "Mean"],
            correct: 1
        },
        {
            question: "Which machine learning library provides the most algorithms in Python?",
            options: ["NumPy", "Pandas", "Matplotlib", "Scikit-Learn"],
            correct: 3
        },
        {
            question: "What is the purpose of the 'random_state' parameter in Scikit-Learn?",
            options: ["Speed up computation", "Ensure reproducible results", "Handle missing data", "Scale features"],
            correct: 1
        },
        {
            question: "Which visualization is best for showing data distribution?",
            options: ["Line plot", "Bar plot", "Histogram", "Pie chart"],
            correct: 2
        },
        {
            question: "What does the 'value_counts()' method show in Pandas?",
            options: ["Unique values and their frequencies", "Data types", "Statistical summary", "Column correlations"],
            correct: 0
        }
    ],
    5: [ // Unit 5: Validation Techniques and Supervised Learning Algorithms (40 questions)
        {
            question: "What is the main purpose of validation techniques in machine learning?",
            options: ["Train models faster", "Evaluate model performance", "Preprocess data", "Visualize results"],
            correct: 1
        },
        {
            question: "Which validation technique splits data into training and testing sets once?",
            options: ["K-Fold Cross Validation", "Hold Out Validation", "Leave One Out", "Bootstrapping"],
            correct: 1
        },
        {
            question: "What is the disadvantage of using only hold-out validation?",
            options: ["Too slow", "Depends on data split", "Requires too much data", "Cannot be automated"],
            correct: 1
        },
        {
            question: "How many times is the model trained and tested in K-fold cross-validation?",
            options: ["1 time", "K times", "K-1 times", "K+1 times"],
            correct: 1
        },
        {
            question: "Which validation technique uses each data point as a test set once?",
            options: ["Hold Out", "K-Fold", "Leave One Out", "Stratified K-Fold"],
            correct: 2
        },
        {
            question: "What is bootstrapping used for in machine learning validation?",
            options: ["Data preprocessing", "Creating multiple datasets", "Feature selection", "Model interpretation"],
            correct: 1
        },
        {
            question: "Which supervised learning algorithm finds the best linear relationship between variables?",
            options: ["Decision Tree", "Support Vector Machine", "Linear Regression", "K-Nearest Neighbors"],
            correct: 2
        },
        {
            question: "What type of problem does logistic regression solve?",
            options: ["Regression", "Classification", "Clustering", "Dimensionality Reduction"],
            correct: 1
        },
        {
            question: "Which algorithm builds a tree-like model of decisions?",
            options: ["Linear Regression", "Logistic Regression", "Decision Tree", "Neural Network"],
            correct: 2
        },
        {
            question: "What is the main advantage of decision trees?",
            options: ["High accuracy", "Interpretability", "Fast training", "Handles large datasets"],
            correct: 1
        },
        {
            question: "Which algorithm finds the optimal hyperplane for classification?",
            options: ["K-Nearest Neighbors", "Decision Tree", "Support Vector Machine", "Naive Bayes"],
            correct: 2
        },
        {
            question: "What does KNN stand for in machine learning?",
            options: ["Kernel Nearest Neighbor", "K-Nearest Neighbors", "Kernel Neural Network", "K-Dimensional Neighbor"],
            correct: 1
        },
        {
            question: "Which algorithm makes predictions based on Bayes' theorem?",
            options: ["Decision Tree", "Support Vector Machine", "Naive Bayes", "K-Nearest Neighbors"],
            correct: 2
        },
        {
            question: "What is the assumption made by Naive Bayes algorithm?",
            options: ["Features are dependent", "Features are independent", "Features are correlated", "Features are identical"],
            correct: 1
        },
        {
            question: "Which algorithm is inspired by biological neural networks?",
            options: ["Decision Tree", "Support Vector Machine", "Artificial Neural Network", "Logistic Regression"],
            correct: 2
        },
        {
            question: "What is overfitting in machine learning?",
            options: ["Model too simple", "Model performs well on training but poorly on new data", "Model training is slow", "Model has too few parameters"],
            correct: 1
        },
        {
            question: "Which technique helps prevent overfitting?",
            options: ["Increase model complexity", "Regularization", "Use more training data", "Both B and C"],
            correct: 3
        },
        {
            question: "What is the bias-variance tradeoff in machine learning?",
            options: ["Speed vs accuracy", "Simplicity vs complexity", "Training time vs prediction time", "Data size vs model size"],
            correct: 1
        },
        {
            question: "Which evaluation metric is used for binary classification?",
            options: ["Mean Squared Error", "R-squared", "Accuracy", "Silhouette Score"],
            correct: 2
        },
        {
            question: "What does precision measure in classification?",
            options: ["True positives / (True positives + False positives)", "True positives / (True positives + False negatives)", "Both A and B", "None of the above"],
            correct: 0
        },
        {
            question: "Which validation technique is best for small datasets?",
            options: ["Hold Out", "K-Fold Cross Validation", "Leave One Out", "Bootstrapping"],
            correct: 2
        },
        {
            question: "What is the main disadvantage of leave-one-out cross-validation?",
            options: ["Not suitable for small datasets", "Computationally expensive", "Depends on random split", "Cannot handle imbalanced data"],
            correct: 1
        },
        {
            question: "Which algorithm is sensitive to feature scaling?",
            options: ["Decision Tree", "Naive Bayes", "Support Vector Machine", "Both B and C"],
            correct: 2
        },
        {
            question: "What is the kernel trick used for in SVM?",
            options: ["Speed up training", "Handle non-linear data", "Reduce dimensions", "Handle missing values"],
            correct: 1
        },
        {
            question: "Which distance metric is commonly used in KNN?",
            options: ["Manhattan", "Euclidean", "Both A and B", "Cosine"],
            correct: 2
        },
        {
            question: "What is the vanishing gradient problem in neural networks?",
            options: ["Gradients become too large", "Gradients become too small", "No gradients", "Infinite gradients"],
            correct: 1
        },
        {
            question: "Which activation function is used in the output layer for binary classification?",
            options: ["ReLU", "Sigmoid", "Tanh", "Linear"],
            correct: 1
        },
        {
            question: "What is ensemble learning?",
            options: ["Single model training", "Combining multiple models", "Data preprocessing", "Feature selection"],
            correct: 1
        },
        {
            question: "Which technique reduces variance by averaging predictions?",
            options: ["Bagging", "Boosting", "Stacking", "All of the above"],
            correct: 0
        },
        {
            question: "What does the F1-score balance between?",
            options: ["Precision and Recall", "Accuracy and Precision", "Sensitivity and Specificity", "True Positive and True Negative"],
            correct: 0
        },
        {
            question: "Which cross-validation technique maintains class distribution?",
            options: ["K-Fold", "Stratified K-Fold", "Leave One Out", "Time Series Split"],
            correct: 1
        },
        {
            question: "What is the purpose of early stopping in neural network training?",
            options: ["Speed up training", "Prevent overfitting", "Reduce model size", "Improve convergence"],
            correct: 1
        },
        {
            question: "Which algorithm is prone to overfitting with deep trees?",
            options: ["Linear Regression", "Logistic Regression", "Decision Tree", "Naive Bayes"],
            correct: 2
        },
        {
            question: "What is the sigmoid function range?",
            options: ["-1 to 1", "0 to 1", "-∞ to ∞", "1 to ∞"],
            correct: 1
        },
        {
            question: "Which validation technique is used for time series data?",
            options: ["K-Fold", "Stratified K-Fold", "Time Series Split", "Leave One Out"],
            correct: 2
        },
        {
            question: "What does ROC curve plot?",
            options: ["Precision vs Recall", "True Positive Rate vs False Positive Rate", "Accuracy vs Error", "Sensitivity vs Specificity"],
            correct: 1
        },
        {
            question: "Which algorithm assumes normal distribution of features?",
            options: ["Decision Tree", "Support Vector Machine", "Naive Bayes", "K-Nearest Neighbors"],
            correct: 2
        },
        {
            question: "What is the main advantage of SVM over other algorithms?",
            options: ["Interpretability", "Handles non-linear data", "Fast training", "Works with missing values"],
            correct: 1
        },
        {
            question: "Which technique combines weak learners sequentially?",
            options: ["Bagging", "Boosting", "Stacking", "Voting"],
            correct: 1
        },
        {
            question: "What is the ReLU activation function formula?",
            options: ["max(0, x)", "1/(1+e^(-x))", "(e^x - e^(-x))/(e^x + e^(-x))", "x"],
            correct: 0
        }
    ]
};

// Generate function with question distribution rules
function generateQuizQuestions(selectedUnits) {
    // Question distribution rules
    const distribution = { 1: 15, 2: 20, 3: 25, 4: 30, 5: 40 };
    const totalQuestionsNeeded = distribution[selectedUnits.length] || 15;

    let allQuestions = [];
    let selectedQuestions = [];

    // Collect all questions from selected units
    selectedUnits.forEach(unitId => {
        if (fmlQuestions[unitId]) {
            fmlQuestions[unitId].forEach(question => {
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
