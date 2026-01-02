// Data Warehousing and Data Mining Quiz Questions
const dwDmQuestions = {
    1: [ // Unit 1: Introduction to Data Warehousing (20 questions)
        {
            question: "What is a data warehouse?",
            options: ["A database for real-time transactions", "A subject-oriented, integrated, time-variant, non-volatile collection of data", "A temporary data storage system", "A data entry application"],
            correct: 1
        },
        {
            question: "What is the main difference between a Database Management System and a Data Warehouse?",
            options: ["Data warehouses are smaller than databases", "DBMS focuses on operational processing, data warehouses on informational processing", "Data warehouses cannot store data", "DBMS is used only for reading data"],
            correct: 1
        },
        {
            question: "What is a data mart?",
            options: ["A small data warehouse focused on a single subject area", "A type of database table", "A data mining algorithm", "A data entry form"],
            correct: 0
        },
        {
            question: "What is metadata in a data warehouse context?",
            options: ["User data stored in the warehouse", "Data about the data structure, mapping, and transformation", "Temporary data storage", "Error data logs"],
            correct: 1
        },
        {
            question: "What is a multidimensional data model?",
            options: ["A model with only two dimensions", "A model that represents data in multiple dimensions using facts and dimensions", "A flat data structure", "A model for storing images"],
            correct: 1
        },
        {
            question: "What are facts in a multidimensional data model?",
            options: ["Dimension tables", "Numeric measures that can be aggregated", "Lookup tables", "Primary keys"],
            correct: 1
        },
        {
            question: "What are dimensions in a multidimensional data model?",
            options: ["Numeric values", "Descriptive attributes for analyzing facts", "Database tables", "Index values"],
            correct: 1
        },
        {
            question: "What are additive measures in data warehousing?",
            options: ["Measures that cannot be summed", "Measures that can be summed across all dimensions", "Measures used only for counting", "Measures for text data"],
            correct: 1
        },
        {
            question: "What are semi-additive measures?",
            options: ["Measures that can be summed across all dimensions", "Measures that can be summed across some dimensions but not others", "Measures that cannot be summed", "Measures for calculations only"],
            correct: 1
        },
        {
            question: "What are non-additive measures?",
            options: ["Measures that can be summed across all dimensions", "Measures that cannot be meaningfully summed", "Measures for counting only", "Measures for text data"],
            correct: 1
        },
        {
            question: "What is a hierarchy in multidimensional databases?",
            options: ["A type of index", "A structure showing relationships between dimension members", "A data storage method", "A query optimization technique"],
            correct: 1
        },
        {
            question: "What is a balanced hierarchy?",
            options: ["All paths from root to leaf have the same length", "Some paths are longer than others", "A hierarchy with no levels", "A hierarchy for numerical data"],
            correct: 0
        },
        {
            question: "What is an unbalanced hierarchy?",
            options: ["All paths have the same length", "Different paths from root to leaf have different lengths", "A hierarchy with one level", "A hierarchy for text data"],
            correct: 1
        },
        {
            question: "What is a snowflake schema?",
            options: ["A normalized dimension structure", "A star schema variation", "A flat dimension structure", "A schema for images"],
            correct: 0
        },
        {
            question: "What is a star schema?",
            options: ["A highly normalized structure", "A denormalized structure with a central fact table", "A structure for small datasets", "A schema for calculations"],
            correct: 1
        },
        {
            question: "What is the purpose of slowly changing dimensions?",
            options: ["To change data quickly", "To handle changes in dimension data over time", "To prevent data changes", "To speed up queries"],
            correct: 1
        },
        {
            question: "What is Type 1 slowly changing dimension?",
            options: ["Tracks historical changes", "Overwrites old data with new data", "Creates new records for changes", "Ignores changes"],
            correct: 1
        },
        {
            question: "What is Type 2 slowly changing dimension?",
            options: ["Overwrites old data", "Creates new records to maintain history", "Ignores changes", "Deletes old records"],
            correct: 1
        },
        {
            question: "What is Type 3 slowly changing dimension?",
            options: ["Creates new records", "Maintains limited history with current and previous values", "Overwrites all data", "Tracks all changes"],
            correct: 1
        },
        {
            question: "What is the primary purpose of a data warehouse?",
            options: ["Real-time transaction processing", "Analytical processing and decision support", "Data entry operations", "System administration"],
            correct: 1
        }
    ],
    2: [ // Unit 2: Data Warehouse System (20 questions)
        {
            question: "What is the three-tier data warehouse architecture?",
            options: ["Presentation, Application, Database layers", "Bottom tier, Middle tier, Top tier", "Client, Server, Database layers", "Input, Processing, Output layers"],
            correct: 1
        },
        {
            question: "What is the bottom tier in data warehouse architecture?",
            options: ["User interface layer", "Application logic layer", "Data storage and management layer", "Client interface layer"],
            correct: 2
        },
        {
            question: "What is the middle tier in data warehouse architecture?",
            options: ["Data storage layer", "Online Analytical Processing server", "User interface layer", "Network layer"],
            correct: 1
        },
        {
            question: "What is the top tier in data warehouse architecture?",
            options: ["Database layer", "Application server layer", "Client analysis tools and user interface", "Storage layer"],
            correct: 2
        },
        {
            question: "What does OLAP stand for?",
            options: ["Online Analytical Processing", "Online Application Processing", "Operational Analytical Processing", "Open Analytical Processing"],
            correct: 0
        },
        {
            question: "What does OLTP stand for?",
            options: ["Online Transaction Processing", "Online Analytical Processing", "Operational Transaction Processing", "Open Transaction Processing"],
            correct: 0
        },
        {
            question: "What is the main difference between OLAP and OLTP?",
            options: ["OLAP is for analysis, OLTP is for transactions", "OLAP is faster than OLTP", "OLTP handles more data than OLAP", "OLAP is for small datasets"],
            correct: 0
        },
        {
            question: "Which operation allows viewing data from different perspectives?",
            options: ["Roll-up", "Drill-down", "Slice", "Dice"],
            correct: 3
        },
        {
            question: "Which operation shows data at higher levels of aggregation?",
            options: ["Drill-down", "Roll-up", "Slice", "Pivot"],
            correct: 1
        },
        {
            question: "Which operation shows data at lower levels of detail?",
            options: ["Roll-up", "Drill-down", "Dice", "Pivot"],
            correct: 1
        },
        {
            question: "Which operation selects a single dimension?",
            options: ["Dice", "Slice", "Roll-up", "Drill-down"],
            correct: 1
        },
        {
            question: "Which operation selects multiple dimensions?",
            options: ["Slice", "Dice", "Roll-up", "Drill-down"],
            correct: 1
        },
        {
            question: "What is pivoting in OLAP?",
            options: ["Changing data values", "Rotating the multidimensional view", "Deleting data", "Adding new dimensions"],
            correct: 1
        },
        {
            question: "What are the advantages of OLAP over OLTP?",
            options: ["Better for real-time transactions", "Faster query performance, better for analysis", "Requires less storage", "Simpler to implement"],
            correct: 1
        },
        {
            question: "What is multidimensional OLAP?",
            options: ["Uses relational database structure", "Uses multidimensional array structure", "Uses flat file structure", "Uses network structure"],
            correct: 1
        },
        {
            question: "What is relational OLAP?",
            options: ["Uses multidimensional arrays", "Uses relational database structure with star schema", "Uses hierarchical structure", "Uses network structure"],
            correct: 1
        },
        {
            question: "What is hybrid OLAP?",
            options: ["Combines multidimensional and relational approaches", "Uses only multidimensional approach", "Uses only relational approach", "Uses flat files"],
            correct: 0
        },
        {
            question: "What are OLAP tools categories?",
            options: ["Only query tools", "Reporting tools, analysis tools, data mining tools", "Only storage tools", "Only visualization tools"],
            correct: 1
        },
        {
            question: "How does the internet enhance OLAP capabilities?",
            options: ["Slows down access", "Enables remote access and web-based OLAP", "Limits functionality", "Requires special software"],
            correct: 1
        },
        {
            question: "What is web OLAP?",
            options: ["OLAP that doesn't work on web", "OLAP accessed through web browsers", "OLAP for web development", "OLAP for internet infrastructure"],
            correct: 1
        },
        {
            question: "What is the role of metadata in data warehouse systems?",
            options: ["Stores user data", "Describes data structure and transformation rules", "Handles transactions", "Manages user access"],
            correct: 1
        }
    ],
    3: [ // Unit 3: Introduction to Data Mining (25 questions)
        {
            question: "What is data mining?",
            options: ["Deleting unwanted data", "Extracting knowledge from large datasets", "Storing data efficiently", "Creating data backups"],
            correct: 1
        },
        {
            question: "What does KDD stand for?",
            options: ["Knowledge Discovery in Databases", "Knowledge Data Discovery", "Knowledge Database Design", "Knowledge Discovery Design"],
            correct: 0
        },
        {
            question: "What is the relationship between KDD and data mining?",
            options: ["They are the same thing", "Data mining is a step in the KDD process", "KDD is a type of data mining", "They are unrelated"],
            correct: 1
        },
        {
            question: "What are the steps in the KDD process?",
            options: ["Only data mining", "Data selection, preprocessing, transformation, data mining, interpretation", "Only data storage", "Only data visualization"],
            correct: 1
        },
        {
            question: "What are data mining primitives?",
            options: ["Basic data types", "User-specified parameters for mining tasks", "Data storage methods", "Query languages"],
            correct: 1
        },
        {
            question: "What are the main components of data mining primitives?",
            options: ["Data types only", "Task-relevant data, mining objectives, and evaluation measures", "Storage methods only", "Query languages only"],
            correct: 1
        },
        {
            question: "What is task-relevant data in data mining?",
            options: ["All available data", "The portion of database relevant to the mining task", "Data not needed for mining", "Temporary data"],
            correct: 1
        },
        {
            question: "What are mining objectives?",
            options: ["Data storage goals", "What the user wants to discover from the data", "System performance goals", "Hardware requirements"],
            correct: 1
        },
        {
            question: "What are the types of knowledge discovered in data mining?",
            options: ["Only associations", "Association rules, classification, clustering, trend analysis", "Only predictions", "Only descriptions"],
            correct: 1
        },
        {
            question: "What is pattern evaluation in data mining?",
            options: ["Creating patterns", "Assessing discovered patterns for interest", "Storing patterns", "Visualizing patterns"],
            correct: 1
        },
        {
            question: "What are interestingness measures in data mining?",
            options: ["Pattern size", "Criteria for determining pattern value", "Pattern colors", "Pattern speed"],
            correct: 1
        },
        {
            question: "What is data mining query language?",
            options: ["Language for database queries only", "Language for specifying data mining tasks", "Language for data storage", "Language for system administration"],
            correct: 1
        },
        {
            question: "What is data specification in data mining queries?",
            options: ["Specifying data types", "Identifying relevant data for mining", "Specifying query results", "Specifying storage locations"],
            correct: 1
        },
        {
            question: "What is knowledge specification in data mining?",
            options: ["Specifying database knowledge", "Specifying form of discovered knowledge", "Specifying user knowledge", "Specifying system knowledge"],
            correct: 1
        },
        {
            question: "What is hierarchy specification in data mining?",
            options: ["Specifying organizational structure", "Specifying concept hierarchies for generalization", "Specifying system hierarchy", "Specifying data hierarchy"],
            correct: 1
        },
        {
            question: "What is pattern presentation in data mining?",
            options: ["Creating patterns", "Specifying how to present discovered patterns", "Storing patterns", "Modifying patterns"],
            correct: 1
        },
        {
            question: "What are data mining system architectures?",
            options: ["Only centralized", "Centralized, distributed, and parallel architectures", "Only distributed", "Only parallel"],
            correct: 1
        },
        {
            question: "What is the role of a data mining engine?",
            options: ["Data storage", "Core data mining algorithms implementation", "User interface", "Data preprocessing"],
            correct: 1
        },
        {
            question: "What is a knowledge base in data mining systems?",
            options: ["Database storage", "Repository of domain knowledge and discovered patterns", "User interface", "Query processor"],
            correct: 1
        },
        {
            question: "What are the major data mining applications?",
            options: ["Only marketing", "Business intelligence, fraud detection, scientific discovery", "Only data storage", "Only system administration"],
            correct: 1
        },
        {
            question: "What is market basket analysis?",
            options: ["Analyzing shopping baskets", "Finding associations between purchased items", "Analyzing market prices", "Analyzing shopping trends"],
            correct: 1
        },
        {
            question: "What is customer segmentation in data mining?",
            options: ["Dividing customers physically", "Grouping customers based on behavior and characteristics", "Counting customers", "Analyzing customer locations"],
            correct: 1
        },
        {
            question: "What is fraud detection using data mining?",
            options: ["Creating fraud", "Identifying unusual patterns indicating fraud", "Storing fraud data", "Analyzing fraud trends"],
            correct: 1
        },
        {
            question: "What is bioinformatics data mining?",
            options: ["Mining biological data for patterns", "Mining financial data", "Mining text data", "Mining spatial data"],
            correct: 0
        },
        {
            question: "What is the difference between data mining and traditional query tools?",
            options: ["No difference", "Data mining discovers hidden patterns, queries retrieve known data", "Data mining is slower", "Queries are more complex"],
            correct: 1
        }
    ],
    4: [ // Unit 4: Data Mining Techniques (30 questions)
        {
            question: "What are association rules in data mining?",
            options: ["Classification rules", "Rules showing relationships between items", "Clustering rules", "Prediction rules"],
            correct: 1
        },
        {
            question: "What is the format of association rules?",
            options: ["X → Y", "X = Y", "X < Y", "X > Y"],
            correct: 0
        },
        {
            question: "What is support in association rules?",
            options: ["Rule accuracy", "Percentage of transactions containing the itemset", "Rule length", "Rule complexity"],
            correct: 1
        },
        {
            question: "What is confidence in association rules?",
            options: ["Rule support", "Percentage of transactions with antecedent that also have consequent", "Rule length", "Rule strength"],
            correct: 1
        },
        {
            question: "What is the Apriori algorithm used for?",
            options: ["Classification", "Finding frequent itemsets for association rules", "Clustering", "Prediction"],
            correct: 1
        },
        {
            question: "What is correlation analysis?",
            options: ["Finding associations", "Measuring relationships between variables", "Grouping data", "Predicting values"],
            correct: 1
        },
        {
            question: "What is lift in correlation analysis?",
            options: ["Correlation strength measure", "Support measure", "Confidence measure", "Frequency measure"],
            correct: 0
        },
        {
            question: "What is classification in data mining?",
            options: ["Grouping similar items", "Predicting class labels for new data", "Finding associations", "Reducing dimensions"],
            correct: 1
        },
        {
            question: "What is a decision tree?",
            options: ["A type of database", "A tree structure for classification", "A clustering method", "An association rule"],
            correct: 1
        },
        {
            question: "What is the root node in a decision tree?",
            options: ["Leaf node", "Topmost node representing the entire dataset", "Middle node", "Bottom node"],
            correct: 1
        },
        {
            question: "What are leaf nodes in a decision tree?",
            options: ["Root nodes", "Nodes representing final class predictions", "Internal nodes", "Branch nodes"],
            correct: 1
        },
        {
            question: "What is entropy in decision tree induction?",
            options: ["Tree height", "Measure of disorder in data", "Tree width", "Node count"],
            correct: 1
        },
        {
            question: "What is information gain in decision trees?",
            options: ["Tree size", "Reduction in entropy after split", "Node depth", "Branch count"],
            correct: 1
        },
        {
            question: "What is the ID3 algorithm?",
            options: ["Clustering algorithm", "Decision tree induction algorithm using information gain", "Association rule algorithm", "Neural network algorithm"],
            correct: 1
        },
        {
            question: "What is overfitting in decision trees?",
            options: ["Tree too small", "Tree too complex, memorizing training data instead of learning patterns", "Tree too simple", "Tree unbalanced"],
            correct: 1
        },
        {
            question: "What is pruning in decision trees?",
            options: ["Growing the tree", "Removing branches to prevent overfitting", "Adding branches", "Balancing the tree"],
            correct: 1
        },
        {
            question: "What is clustering in data mining?",
            options: ["Classification task", "Grouping similar objects together", "Finding associations", "Prediction task"],
            correct: 1
        },
        {
            question: "What is partitioning clustering method?",
            options: ["Hierarchical method", "Divides data into k clusters", "Creates tree structure", "Uses density"],
            correct: 1
        },
        {
            question: "What is k-means clustering?",
            options: ["Hierarchical clustering", "Partitioning method with k clusters", "Density-based clustering", "Grid-based clustering"],
            correct: 1
        },
        {
            question: "What is hierarchical clustering?",
            options: ["Creates flat partitions", "Creates nested clusters in tree structure", "Uses k parameter", "Density-based"],
            correct: 1
        },
        {
            question: "What is agglomerative hierarchical clustering?",
            options: ["Divides clusters", "Starts with individual points and merges them", "Starts with one cluster and splits", "Uses k-means"],
            correct: 1
        },
        {
            question: "What is divisive hierarchical clustering?",
            options: ["Merges clusters", "Starts with one cluster and recursively splits it", "Uses k parameter", "Bottom-up approach"],
            correct: 1
        },
        {
            question: "What is the difference between supervised and unsupervised learning?",
            options: ["Supervised uses labeled data, unsupervised uses unlabeled data", "Supervised is faster", "Unsupervised is simpler", "No difference"],
            correct: 0
        },
        {
            question: "Which data mining technique is supervised?",
            options: ["Clustering", "Association rule mining", "Classification", "Both clustering and association"],
            correct: 2
        },
        {
            question: "Which data mining technique is unsupervised?",
            options: ["Classification", "Regression", "Clustering", "Decision trees"],
            correct: 2
        },
        {
            question: "What is the purpose of training data in classification?",
            options: ["Testing the model", "Building the classification model", "Validation only", "Production use"],
            correct: 1
        },
        {
            question: "What is the purpose of testing data in classification?",
            options: ["Building the model", "Evaluating model performance on unseen data", "Training the model", "Production deployment"],
            correct: 1
        },
        {
            question: "What is cross-validation in machine learning?",
            options: ["Validating across different datasets", "Technique to assess model performance using multiple train-test splits", "Validating code syntax", "Validating data types"],
            correct: 1
        },
        {
            question: "What is accuracy in classification evaluation?",
            options: ["Number of classes", "Ratio of correct predictions to total predictions", "Model training time", "Model complexity"],
            correct: 1
        },
        {
            question: "What is precision in classification?",
            options: ["Ratio of true positives to all positive predictions", "Ratio of true positives to all actual positives", "Model speed", "Model size"],
            correct: 0
        },
        {
            question: "What is recall in classification?",
            options: ["Ratio of true positives to all positive predictions", "Ratio of true positives to all actual positives", "Model accuracy", "Model precision"],
            correct: 1
        }
    ],
    5: [ // Unit 5: Advanced Data Mining Features (40 questions)
        {
            question: "What is spatial data mining?",
            options: ["Mining data in tables", "Mining data with spatial location information", "Mining temporal data", "Mining text data"],
            correct: 1
        },
        {
            question: "What are spatial databases?",
            options: ["Databases without location data", "Databases storing spatial objects and relationships", "Text databases", "Temporal databases"],
            correct: 1
        },
        {
            question: "What is spatial clustering?",
            options: ["Clustering based on time", "Clustering based on spatial proximity", "Clustering based on text", "Clustering based on numbers"],
            correct: 1
        },
        {
            question: "What is multimedia data mining?",
            options: ["Mining numerical data", "Mining images, audio, and video data", "Mining text data", "Mining spatial data"],
            correct: 1
        },
        {
            question: "What are the challenges in multimedia data mining?",
            options: ["Data too small", "High dimensionality, complex features, semantic gap", "Data too simple", "Data too structured"],
            correct: 1
        },
        {
            question: "What is time-series data mining?",
            options: ["Mining data without time component", "Mining sequences of data points over time", "Mining spatial data", "Mining categorical data"],
            correct: 1
        },
        {
            question: "What is sequence data mining?",
            options: ["Mining unordered data", "Mining ordered sequences of events", "Mining spatial sequences", "Mining numerical sequences"],
            correct: 1
        },
        {
            question: "What is trend analysis in time-series mining?",
            options: ["Finding patterns", "Identifying upward or downward movements over time", "Finding outliers", "Finding correlations"],
            correct: 1
        },
        {
            question: "What is text mining?",
            options: ["Mining numerical data", "Extracting knowledge from unstructured text", "Mining spatial data", "Mining multimedia data"],
            correct: 1
        },
        {
            question: "What is natural language processing in text mining?",
            options: ["Processing images", "Understanding and processing human language", "Processing audio", "Processing video"],
            correct: 1
        },
        {
            question: "What is information extraction in text mining?",
            options: ["Extracting images from text", "Extracting structured information from unstructured text", "Extracting audio from text", "Extracting video from text"],
            correct: 1
        },
        {
            question: "What is sentiment analysis?",
            options: ["Analyzing text structure", "Determining emotional tone of text", "Analyzing text length", "Analyzing text language"],
            correct: 1
        },
        {
            question: "What is web mining?",
            options: ["Mining data from web servers", "Discovering knowledge from web content and usage", "Mining website code", "Mining web images"],
            correct: 1
        },
        {
            question: "What are the types of web mining?",
            options: ["Only content mining", "Web content mining, web structure mining, web usage mining", "Only structure mining", "Only usage mining"],
            correct: 1
        },
        {
            question: "What is web content mining?",
            options: ["Mining web server logs", "Extracting knowledge from web page content", "Mining web link structure", "Mining user behavior"],
            correct: 1
        },
        {
            question: "What is web structure mining?",
            options: ["Mining web content", "Discovering knowledge from web link structure", "Mining user behavior", "Mining web servers"],
            correct: 1
        },
        {
            question: "What is web usage mining?",
            options: ["Mining web content", "Analyzing user browsing patterns from web logs", "Mining web structure", "Mining web servers"],
            correct: 1
        },
        {
            question: "What is clickstream analysis?",
            options: ["Analyzing web page content", "Analyzing sequence of user clicks on website", "Analyzing web structure", "Analyzing web servers"],
            correct: 1
        },
        {
            question: "What is complex data object mining?",
            options: ["Mining simple data", "Mining complex structured objects like graphs and trees", "Mining numerical data", "Mining text data"],
            correct: 1
        },
        {
            question: "What is graph mining?",
            options: ["Mining numerical graphs", "Discovering patterns in graph structures", "Mining chart data", "Mining visual graphs"],
            correct: 1
        },
        {
            question: "What is XML data mining?",
            options: ["Mining HTML data", "Mining structured data in XML format", "Mining plain text", "Mining images"],
            correct: 1
        },
        {
            question: "What are the challenges in mining complex data objects?",
            options: ["Data too simple", "Complex structure, high dimensionality, computational complexity", "Data too small", "Data too structured"],
            correct: 1
        },
        {
            question: "What is spatiotemporal data mining?",
            options: ["Mining spatial data only", "Mining data with both spatial and temporal components", "Mining temporal data only", "Mining static data"],
            correct: 1
        },
        {
            question: "What is bioinformatics data mining?",
            options: ["Mining financial data", "Mining biological and medical data", "Mining business data", "Mining educational data"],
            correct: 1
        },
        {
            question: "What is the semantic gap in multimedia mining?",
            options: ["Gap between data and storage", "Gap between low-level features and high-level semantics", "Gap between images and text", "Gap between audio and video"],
            correct: 1
        },
        {
            question: "What is dimensionality reduction in multimedia mining?",
            options: ["Increasing data size", "Reducing number of features while preserving information", "Increasing data complexity", "Reducing data quality"],
            correct: 1
        },
        {
            question: "What is motif discovery in time-series mining?",
            options: ["Finding single patterns", "Finding frequently occurring subsequences", "Finding random patterns", "Finding unique patterns"],
            correct: 1
        },
        {
            question: "What is anomaly detection in sequence mining?",
            options: ["Finding normal patterns", "Finding unusual or abnormal sequences", "Finding common patterns", "Finding similar sequences"],
            correct: 1
        },
        {
            question: "What is named entity recognition in text mining?",
            options: ["Recognizing text colors", "Identifying names of persons, organizations, locations", "Recognizing text fonts", "Recognizing text sizes"],
            correct: 1
        },
        {
            question: "What is topic modeling in text mining?",
            options: ["Modeling text layout", "Discovering abstract topics in document collections", "Modeling text colors", "Modeling text sizes"],
            correct: 1
        },
        {
            question: "What is PageRank in web mining?",
            options: ["Web page ranking algorithm", "Web page content analysis", "Web page speed measurement", "Web page size calculation"],
            correct: 0
        },
        {
            question: "What is web crawling in web mining?",
            options: ["Manual web browsing", "Automated discovery and downloading of web pages", "Web page design", "Web page hosting"],
            correct: 1
        },
        {
            question: "What is collaborative filtering in web usage mining?",
            options: ["Filtering spam", "Recommending items based on user preferences", "Filtering web content", "Filtering user access"],
            correct: 1
        },
        {
            question: "What is stream mining?",
            options: ["Mining static data", "Mining continuous data streams", "Mining stored data", "Mining batch data"],
            correct: 1
        },
        {
            question: "What is distributed data mining?",
            options: ["Mining data on single machine", "Mining data across multiple distributed sites", "Mining local data", "Mining centralized data"],
            correct: 1
        },
        {
            question: "What is privacy-preserving data mining?",
            options: ["Ignoring privacy", "Mining data while preserving individual privacy", "Sharing all data", "Deleting private data"],
            correct: 1
        },
        {
            question: "What is the difference between data mining and machine learning?",
            options: ["No difference", "Data mining focuses on knowledge discovery from databases, machine learning on prediction algorithms", "Data mining is subset of machine learning", "Machine learning is subset of data mining"],
            correct: 1
        },
        {
            question: "What is the role of domain knowledge in advanced data mining?",
            options: ["Irrelevant", "Critical for interpreting results and guiding the mining process", "Only for beginners", "Only for experts"],
            correct: 1
        },
        {
            question: "What is the future of data mining?",
            options: ["Declining importance", "Integration with AI, big data, real-time processing", "Limited to traditional databases", "Focus only on structured data"],
            correct: 1
        },
        {
            question: "What is visual data mining?",
            options: ["Mining visual data only", "Using visualization techniques to understand mining results", "Creating visual interfaces", "Mining images only"],
            correct: 1
        },
        {
            question: "What is interactive data mining?",
            options: ["Automated mining", "User-guided mining with human-in-the-loop", "Batch processing", "Offline mining"],
            correct: 1
        },
        {
            question: "What is the importance of metadata in advanced data mining?",
            options: ["Not important", "Essential for understanding data context and quality", "Only for storage", "Only for backup"],
            correct: 1
        }
    ]
};

// Quiz configuration based on selected units
function getQuestionDistribution(selectedUnits) {
    const distribution = { 1: 15, 2: 20, 3: 25, 4: 30, 5: 40 };
    return distribution[selectedUnits.length] || 15;
}

function generateQuizQuestions(selectedUnits) {
    let allQuestions = [];
    let totalQuestions = getQuestionDistribution(selectedUnits);
    let questionsPerUnit = Math.floor(totalQuestions / selectedUnits.length);
    let extraQuestions = totalQuestions % selectedUnits.length;

    // Collect questions from selected units
    selectedUnits.forEach(unit => {
        const unitQuestions = dwDmQuestions[unit];
        if (unitQuestions) {
            allQuestions.push(...unitQuestions);
        }
    });

    // Shuffle all questions
    for (let i = allQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
    }

    // Return required number of questions
    return allQuestions.slice(0, totalQuestions);
}

// Make available globally
if (typeof window !== 'undefined') {
    window.generateQuizQuestions = generateQuizQuestions;
}
