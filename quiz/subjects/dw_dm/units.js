// Data Warehousing and Data Mining Units Configuration
const dwDmUnits = [
    {
        id: 1,
        name: "Introduction to Data Warehousing",
        description: "Data warehouse concepts, DBMS versus Data Warehouse, Data Marts, Metadata, Multidimensional Data Model, Data Warehouse Measures, and Multidimensional Database Hierarchies."
    },
    {
        id: 2,
        name: "Data Warehouse System",
        description: "Data Warehouse Architecture, Three-Tier Architecture, OLAP operations, OLAP vs OLTP advantages, OLAP Guidelines, Multidimensional vs Multirelational OLAP, and OLAP Tools."
    },
    {
        id: 3,
        name: "Introduction to Data Mining",
        description: "Basic concepts, Data Mining primitives, KDD process, Data Mining tools and applications, Data Mining Query Languages, and Architectures of Data Mining Systems."
    },
    {
        id: 4,
        name: "Data Mining Techniques",
        description: "Association rules, correlation analysis, classification using decision tree induction, and clustering techniques (partitioning and hierarchical methods)."
    },
    {
        id: 5,
        name: "Advanced Data Mining Features",
        description: "Mining complex data objects, spatial databases, multimedia databases, time-series and sequence data, mining text databases, and mining the World Wide Web."
    }
];

// Make available globally for browser environment
if (typeof window !== 'undefined') {
    window.dwDmUnits = dwDmUnits;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = dwDmUnits;
}
