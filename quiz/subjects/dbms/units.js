// quiz/subjects/dbms/units.js
const dbmsUnits = [
    {
        id: 1,
        name: "Introduction to Databases and Data Models",
        description: "Database system concepts, data models (hierarchical, network, relational, object-oriented), database architecture, and data independence."
    },
    {
        id: 2,
        name: "Relational Model and SQL",
        description: "Relational data model, relational algebra, SQL fundamentals (DDL, DML, DCL), joins, subqueries, and views."
    },
    {
        id: 3,
        name: "Normalization and Database Design",
        description: "Functional dependencies, normal forms (1NF, 2NF, 3NF, BCNF), decomposition, ER modeling, and database design process."
    },
    {
        id: 4,
        name: "Transaction Management and Concurrency",
        description: "Transaction concepts, ACID properties, concurrency control, locking, deadlock, recovery techniques, and serializability."
    },
    {
        id: 5,
        name: "Database Administration and Advanced Topics",
        description: "Database security, indexing, query optimization, distributed databases, NoSQL databases, and emerging database technologies."
    }
];

// Make available globally
if (typeof window !== 'undefined') {
    window.dbmsUnits = dbmsUnits;
}
