// quiz/subjects/dbms/questions.js
const dbmsQuestions = {
    1: [ // Unit 1: Introduction to Databases and Data Models (20 questions)
        {
            question: "What is a database management system?",
            options: ["A hardware device", "Software that manages databases", "A type of computer network", "A programming language"],
            correct: 1
        },
        {
            question: "Which data model represents data as a collection of tables?",
            options: ["Hierarchical model", "Network model", "Relational model", "Object-oriented model"],
            correct: 2
        },
        {
            question: "What is data independence in database systems?",
            options: ["Data stored independently", "Application programs do not depend on physical data storage", "Data can be accessed without authorization", "Data stored in multiple locations"],
            correct: 1
        },
        {
            question: "Which level of database architecture describes how data is physically stored?",
            options: ["External level", "Conceptual level", "Internal level", "Physical level"],
            correct: 2
        },
        {
            question: "What is a data model?",
            options: ["A programming language", "A collection of conceptual tools for describing data", "A type of database", "A hardware component"],
            correct: 1
        },
        {
            question: "Which data model uses parent-child relationships?",
            options: ["Relational model", "Hierarchical model", "Network model", "Object-oriented model"],
            correct: 1
        },
        {
            question: "What is the main advantage of the relational model?",
            options: ["Complex structure", "Simple tabular representation", "Limited relationships", "Poor performance"],
            correct: 1
        },
        {
            question: "Which database architecture level is closest to the user?",
            options: ["Internal level", "Conceptual level", "External level", "Physical level"],
            correct: 2
        },
        {
            question: "What is a database schema?",
            options: ["Database content", "Database structure description", "Database queries", "Database applications"],
            correct: 1
        },
        {
            question: "Which data model supports complex relationships and inheritance?",
            options: ["Hierarchical model", "Network model", "Relational model", "Object-oriented model"],
            correct: 3
        },
        {
            question: "What is the purpose of a database management system?",
            options: ["Create websites", "Store and manage data efficiently", "Design graphics", "Write programs"],
            correct: 1
        },
        {
            question: "Which data model allows many-to-many relationships easily?",
            options: ["Hierarchical model", "Network model", "Relational model", "Flat file model"],
            correct: 2
        },
        {
            question: "What is logical data independence?",
            options: ["Physical storage changes don't affect logical structure", "Application changes don't affect data", "Data can be accessed from anywhere", "Multiple users can access data"],
            correct: 0
        },
        {
            question: "Which data model was developed to overcome limitations of hierarchical model?",
            options: ["Relational model", "Network model", "Object-oriented model", "Entity-relationship model"],
            correct: 1
        },
        {
            question: "What is a database instance?",
            options: ["Database schema", "Database content at a particular time", "Database applications", "Database queries"],
            correct: 1
        },
        {
            question: "Which level of abstraction hides physical storage details?",
            options: ["External level", "Conceptual level", "Internal level", "Application level"],
            correct: 1
        },
        {
            question: "What is the main disadvantage of the hierarchical model?",
            options: ["Simple structure", "Limited relationships", "Good performance", "Easy to understand"],
            correct: 1
        },
        {
            question: "Which data model is based on graph theory?",
            options: ["Hierarchical model", "Network model", "Relational model", "Object-oriented model"],
            correct: 1
        },
        {
            question: "What is physical data independence?",
            options: ["Logical structure changes don't affect applications", "Physical storage changes don't affect applications", "Data can be replicated", "Data can be compressed"],
            correct: 1
        },
        {
            question: "Which data model supports encapsulation and inheritance?",
            options: ["Hierarchical model", "Network model", "Relational model", "Object-oriented model"],
            correct: 3
        }
    ],
    2: [ // Unit 2: Relational Model and SQL (20 questions)
        {
            question: "What is a relation in the relational model?",
            options: ["A connection between tables", "A table with rows and columns", "A query result", "A database constraint"],
            correct: 1
        },
        {
            question: "Which relational algebra operation combines tuples from two relations?",
            options: ["Union", "Intersection", "Cartesian product", "Join"],
            correct: 3
        },
        {
            question: "What does SQL stand for?",
            options: ["Simple Query Language", "Structured Query Language", "Standard Query Language", "System Query Language"],
            correct: 1
        },
        {
            question: "Which SQL command is used to create a table?",
            options: ["INSERT", "UPDATE", "CREATE TABLE", "SELECT"],
            correct: 2
        },
        {
            question: "What is a primary key in a relational table?",
            options: ["Any column", "Column that uniquely identifies each row", "Column with numeric values", "Column that can be null"],
            correct: 1
        },
        {
            question: "Which SQL clause is used to filter rows in a query?",
            options: ["SELECT", "FROM", "WHERE", "ORDER BY"],
            correct: 2
        },
        {
            question: "What is a foreign key?",
            options: ["Primary key of another table", "Column that references primary key of another table", "Unique identifier", "Auto-increment column"],
            correct: 1
        },
        {
            question: "Which relational algebra operation removes duplicates?",
            options: ["Union", "Intersection", "Difference", "Projection"],
            correct: 0
        },
        {
            question: "What does the SQL SELECT statement do?",
            options: ["Insert data", "Update data", "Retrieve data", "Delete data"],
            correct: 2
        },
        {
            question: "Which join operation includes all rows from both tables?",
            options: ["Inner join", "Left join", "Right join", "Full outer join"],
            correct: 3
        },
        {
            question: "What is a view in SQL?",
            options: ["Physical table", "Virtual table based on a query", "Index on a table", "Stored procedure"],
            correct: 1
        },
        {
            question: "Which SQL command is used to modify existing data?",
            options: ["INSERT", "UPDATE", "CREATE", "SELECT"],
            correct: 1
        },
        {
            question: "What is the degree of a relation?",
            options: ["Number of rows", "Number of columns", "Number of constraints", "Number of indexes"],
            correct: 1
        },
        {
            question: "Which relational algebra operation selects specific columns?",
            options: ["Selection", "Projection", "Join", "Union"],
            correct: 1
        },
        {
            question: "What does the SQL GROUP BY clause do?",
            options: ["Sort data", "Filter data", "Group rows with same values", "Join tables"],
            correct: 2
        },
        {
            question: "Which constraint ensures uniqueness of values in a column?",
            options: ["NOT NULL", "UNIQUE", "PRIMARY KEY", "FOREIGN KEY"],
            correct: 1
        },
        {
            question: "What is a subquery in SQL?",
            options: ["Query within another query", "Query with multiple tables", "Query with aggregate functions", "Query with joins"],
            correct: 0
        },
        {
            question: "Which SQL command is used to remove data from a table?",
            options: ["DELETE", "DROP", "REMOVE", "CLEAR"],
            correct: 0
        },
        {
            question: "What is the cardinality of a relation?",
            options: ["Number of columns", "Number of rows", "Number of constraints", "Number of relationships"],
            correct: 1
        },
        {
            question: "Which SQL command is used to grant permissions?",
            options: ["GRANT", "ALLOW", "PERMIT", "ACCESS"],
            correct: 0
        }
    ],
    3: [ // Unit 3: Normalization and Database Design (25 questions)
        {
            question: "What is the primary goal of normalization?",
            options: ["Add redundancy", "Remove data redundancy and improve integrity", "Make queries slower", "Increase storage requirements"],
            correct: 1
        },
        {
            question: "Which normal form eliminates repeating groups?",
            options: ["First normal form", "Second normal form", "Third normal form", "Boyce-Codd normal form"],
            correct: 0
        },
        {
            question: "What is a functional dependency?",
            options: ["Relationship between tables", "Constraint between attributes", "Index on a column", "View definition"],
            correct: 1
        },
        {
            question: "Which normal form removes partial dependencies?",
            options: ["1NF", "2NF", "3NF", "BCNF"],
            correct: 1
        },
        {
            question: "What does BCNF stand for?",
            options: ["Basic Codd Normal Form", "Boyce-Codd Normal Form", "Better Codd Normal Form", "Balanced Codd Normal Form"],
            correct: 1
        },
        {
            question: "Which normal form eliminates transitive dependencies?",
            options: ["1NF", "2NF", "3NF", "4NF"],
            correct: 2
        },
        {
            question: "What is an entity in ER modeling?",
            options: ["Relationship between objects", "Real-world object or concept", "Attribute of an entity", "Constraint on data"],
            correct: 1
        },
        {
            question: "Which type of relationship shows many-to-many connections?",
            options: ["One-to-one", "One-to-many", "Many-to-one", "Many-to-many"],
            correct: 3
        },
        {
            question: "What is the purpose of decomposition in normalization?",
            options: ["Combine tables", "Split tables to remove anomalies", "Add more columns", "Remove constraints"],
            correct: 1
        },
        {
            question: "Which problem occurs due to insertion anomaly?",
            options: ["Cannot insert data without having other data", "Data becomes inconsistent", "Data is duplicated", "Cannot delete data"],
            correct: 0
        },
        {
            question: "What is a candidate key?",
            options: ["Primary key only", "Any attribute that can uniquely identify a row", "Foreign key", "Composite key only"],
            correct: 1
        },
        {
            question: "Which normal form is based on functional dependencies?",
            options: ["1NF", "2NF", "3NF", "All of them"],
            correct: 3
        },
        {
            question: "What is a weak entity in ER modeling?",
            options: ["Entity with primary key", "Entity without its own primary key", "Entity with foreign key", "Entity with multiple attributes"],
            correct: 1
        },
        {
            question: "Which dependency exists when a non-prime attribute determines another non-prime attribute?",
            options: ["Partial dependency", "Transitive dependency", "Full dependency", "Functional dependency"],
            correct: 1
        },
        {
            question: "What is the purpose of ER modeling?",
            options: ["Write queries", "Design database schema", "Optimize queries", "Manage transactions"],
            correct: 1
        },
        {
            question: "Which normal form deals with multi-valued dependencies?",
            options: ["3NF", "BCNF", "4NF", "5NF"],
            correct: 2
        },
        {
            question: "What is a partial dependency?",
            options: ["Dependency on part of primary key", "Dependency between non-prime attributes", "Dependency on whole primary key", "Dependency on foreign key"],
            correct: 0
        },
        {
            question: "Which ER diagram symbol represents a relationship?",
            options: ["Rectangle", "Diamond", "Ellipse", "Line"],
            correct: 1
        },
        {
            question: "What is the purpose of lossless decomposition?",
            options: ["Lose some data", "Preserve all information", "Add redundant data", "Remove constraints"],
            correct: 1
        },
        {
            question: "Which key is chosen as the primary key from candidate keys?",
            options: ["Any candidate key", "Most appropriate candidate key", "Largest candidate key", "Smallest candidate key"],
            correct: 1
        },
        {
            question: "What is an insertion anomaly?",
            options: ["Cannot insert data", "Must insert unwanted data to insert desired data", "Data becomes duplicate", "Cannot update data"],
            correct: 1
        },
        {
            question: "Which normal form is always in BCNF?",
            options: ["1NF", "2NF", "3NF", "Depends on the relation"],
            correct: 3
        },
        {
            question: "What is a composite key?",
            options: ["Single attribute key", "Key made of multiple attributes", "Foreign key", "Candidate key"],
            correct: 1
        },
        {
            question: "Which dependency type does 3NF eliminate?",
            options: ["Partial dependencies", "Transitive dependencies", "Multi-valued dependencies", "Join dependencies"],
            correct: 1
        },
        {
            question: "What is the main benefit of normalization?",
            options: ["Faster queries", "Reduced data redundancy", "Complex queries", "More storage"],
            correct: 1
        }
    ],
    4: [ // Unit 4: Transaction Management and Concurrency (25 questions)
        {
            question: "What is a transaction in database systems?",
            options: ["Single SQL statement", "Logical unit of work", "Database table", "User session"],
            correct: 1
        },
        {
            question: "Which property ensures that a transaction is atomic?",
            options: ["Consistency", "Isolation", "Durability", "Atomicity"],
            correct: 3
        },
        {
            question: "What does ACID stand for in transaction management?",
            options: ["Atomicity, Consistency, Isolation, Durability", "Accuracy, Completeness, Integrity, Durability", "Atomicity, Correctness, Isolation, Durability", "Automation, Consistency, Integrity, Durability"],
            correct: 0
        },
        {
            question: "Which concurrency control method uses timestamps?",
            options: ["Locking", "Timestamp ordering", "Validation", "Multiversion"],
            correct: 1
        },
        {
            question: "What is a deadlock in database systems?",
            options: ["System crash", "Two or more transactions waiting for each other", "Data corruption", "Slow query execution"],
            correct: 1
        },
        {
            question: "Which isolation level allows dirty reads?",
            options: ["Serializable", "Repeatable read", "Read committed", "Read uncommitted"],
            correct: 3
        },
        {
            question: "What is the purpose of logging in database recovery?",
            options: ["Monitor performance", "Record transaction changes for recovery", "Track user activity", "Optimize queries"],
            correct: 1
        },
        {
            question: "Which recovery technique uses before and after images?",
            options: ["Checkpoint", "Shadow paging", "Log-based recovery", "Deferred update"],
            correct: 1
        },
        {
            question: "What is serializability in transaction scheduling?",
            options: ["Transactions execute one after another", "Transactions can interleave but produce serial results", "Transactions execute simultaneously", "Transactions are independent"],
            correct: 1
        },
        {
            question: "Which lock allows multiple transactions to read but not modify?",
            options: ["Exclusive lock", "Shared lock", "Update lock", "Intent lock"],
            correct: 1
        },
        {
            question: "What is a schedule in transaction management?",
            options: ["Transaction timeline", "Sequence of operations from multiple transactions", "Transaction priority", "Lock assignment"],
            correct: 1
        },
        {
            question: "Which isolation level prevents non-repeatable reads?",
            options: ["Read uncommitted", "Read committed", "Repeatable read", "Serializable"],
            correct: 2
        },
        {
            question: "What is the two-phase locking protocol?",
            options: ["Growing phase then shrinking phase", "Shrinking phase then growing phase", "Only growing phase", "Only shrinking phase"],
            correct: 0
        },
        {
            question: "Which recovery technique writes changes immediately to disk?",
            options: ["Deferred update", "Immediate update", "Shadow paging", "Checkpoint"],
            correct: 1
        },
        {
            question: "What is a cascading rollback?",
            options: ["Multiple transactions rollback", "One transaction failure causes others to rollback", "System-wide rollback", "Automatic rollback"],
            correct: 1
        },
        {
            question: "Which concurrency control method uses validation phase?",
            options: ["Locking", "Timestamp ordering", "Optimistic concurrency control", "Multiversion concurrency control"],
            correct: 2
        },
        {
            question: "What is the consistency property in ACID?",
            options: ["Transaction is all or nothing", "Database remains in consistent state", "Transaction effects persist", "Transaction is isolated"],
            correct: 1
        },
        {
            question: "Which isolation level is the strictest?",
            options: ["Read uncommitted", "Read committed", "Repeatable read", "Serializable"],
            correct: 3
        },
        {
            question: "What is a phantom read?",
            options: ["Reading uncommitted data", "Reading different data on second read", "Reading data that doesn't exist", "Reading data inserted by another transaction"],
            correct: 3
        },
        {
            question: "Which recovery technique uses checkpoints?",
            options: ["Reduce recovery time", "Avoid unnecessary redo operations", "Speed up transactions", "Prevent deadlocks"],
            correct: 1
        },
        {
            question: "What is the durability property?",
            options: ["Transaction effects are permanent", "Transaction is atomic", "Database is consistent", "Transaction is isolated"],
            correct: 0
        },
        {
            question: "Which lock prevents any access to a resource?",
            options: ["Shared lock", "Exclusive lock", "Update lock", "Intent lock"],
            correct: 1
        },
        {
            question: "What is a non-repeatable read?",
            options: ["Reading uncommitted data", "Reading different values on second read", "Reading inserted data", "Reading deleted data"],
            correct: 1
        },
        {
            question: "Which recovery method uses undo and redo operations?",
            options: ["Shadow paging", "Log-based recovery", "Checkpoint", "Deferred update"],
            correct: 1
        },
        {
            question: "What is the isolation property in ACID?",
            options: ["Transaction effects persist", "Transaction is atomic", "Transaction executes in isolation", "Database is consistent"],
            correct: 2
        }
    ],
    5: [ // Unit 5: Database Administration and Advanced Topics (25 questions)
        {
            question: "What is the primary role of a database administrator?",
            options: ["Write application code", "Manage and maintain database systems", "Design user interfaces", "Create reports"],
            correct: 1
        },
        {
            question: "Which security mechanism controls access to database objects?",
            options: ["Encryption", "Access control", "Auditing", "Backup"],
            correct: 1
        },
        {
            question: "What is the purpose of database indexing?",
            options: ["Store data", "Speed up query performance", "Enforce constraints", "Manage transactions"],
            correct: 1
        },
        {
            question: "Which type of database stores data across multiple physical locations?",
            options: ["Centralized database", "Distributed database", "Hierarchical database", "Network database"],
            correct: 1
        },
        {
            question: "What is NoSQL database?",
            options: ["Database without SQL", "Non-relational database", "Database without tables", "All of the above"],
            correct: 1
        },
        {
            question: "Which backup type copies all data?",
            options: ["Incremental backup", "Differential backup", "Full backup", "Transaction log backup"],
            correct: 2
        },
        {
            question: "What is query optimization?",
            options: ["Writing better queries", "Finding efficient execution plans", "Creating indexes", "Normalizing tables"],
            correct: 1
        },
        {
            question: "Which security threat involves unauthorized data modification?",
            options: ["Confidentiality breach", "Integrity violation", "Availability attack", "Authentication failure"],
            correct: 1
        },
        {
            question: "What is database replication?",
            options: ["Data backup", "Creating multiple copies of database", "Data migration", "Database upgrade"],
            correct: 1
        },
        {
            question: "Which NoSQL database type is suitable for hierarchical data?",
            options: ["Document store", "Key-value store", "Graph database", "Column-family store"],
            correct: 2
        },
        {
            question: "What is the purpose of database auditing?",
            options: ["Monitor performance", "Track database activities for security", "Optimize queries", "Manage backups"],
            correct: 1
        },
        {
            question: "Which technique distributes data across multiple servers?",
            options: ["Replication", "Partitioning", "Clustering", "Indexing"],
            correct: 1
        },
        {
            question: "What is a database trigger?",
            options: ["Query execution plan", "Automatic procedure that executes on events", "Index definition", "Constraint definition"],
            correct: 1
        },
        {
            question: "Which security mechanism protects data at rest?",
            options: ["SSL/TLS", "Database encryption", "Access control lists", "Multi-factor authentication"],
            correct: 1
        },
        {
            question: "What is database clustering?",
            options: ["Grouping similar data", "Connecting multiple database servers", "Creating data clusters", "Clustering analysis"],
            correct: 1
        },
        {
            question: "Which technique improves query performance by storing computed results?",
            options: ["Indexing", "Caching", "Materialized views", "Partitioning"],
            correct: 2
        },
        {
            question: "What is the CAP theorem related to?",
            options: ["Database normalization", "Distributed systems", "Query optimization", "Security"],
            correct: 1
        },
        {
            question: "Which NoSQL database type uses JSON-like documents?",
            options: ["Key-value store", "Document store", "Graph database", "Column-family store"],
            correct: 1
        },
        {
            question: "What is database sharding?",
            options: ["Data encryption", "Horizontal partitioning", "Vertical partitioning", "Data replication"],
            correct: 1
        },
        {
            question: "Which security control prevents SQL injection?",
            options: ["Input validation", "Parameterized queries", "Both A and B", "Database encryption"],
            correct: 2
        },
        {
            question: "What is the purpose of database monitoring?",
            options: ["Create reports", "Track performance and health", "Manage users", "Backup data"],
            correct: 1
        },
        {
            question: "Which technique ensures high availability in distributed databases?",
            options: ["Replication", "Partitioning", "Indexing", "Caching"],
            correct: 0
        },
        {
            question: "What is a stored procedure?",
            options: ["Query result", "Precompiled SQL code stored in database", "Index definition", "Trigger definition"],
            correct: 1
        },
        {
            question: "Which security principle involves giving minimum required permissions?",
            options: ["Role-based access control", "Least privilege principle", "Multi-factor authentication", "Data encryption"],
            correct: 1
        },
        {
            question: "What is the main advantage of NoSQL databases?",
            options: ["ACID compliance", "Schema flexibility and scalability", "Complex queries", "Data consistency"],
            correct: 1
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
        if (dbmsQuestions[unitId]) {
            dbmsQuestions[unitId].forEach(question => {
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
