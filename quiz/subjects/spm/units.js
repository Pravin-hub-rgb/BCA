// Software Project Management and Information Systems Units Configuration
const spmUnits = [
    {
        id: 1,
        name: "Overview of Software Project Planning",
        description: "Software Project, Categorization of software Project, Introduction to Stepwise Project Planning, Project Scope, Infrastructure, Resource Allocation, Project Plan Execution. Estimation: Software Project Estimation, Decomposition Techniques- Software Sizing, Problem Based estimation, LOC based estimation, Function Point based estimation, Process Based estimation, Cost Benefit analysis, Cost Estimation Models, Selection of Technologies."
    },
    {
        id: 2,
        name: "Project Scheduling & Software Configuration Management",
        description: "Basic Concepts, Project Scheduling- Basic Principles, Relationship between People and Effort, Task Network, Scheduling, Gantt and PERT charts, Staffing, Project monitoring and control. Concepts and definitions, Need and importance of SCM, Benefits of SCM, The SCM Process, Plan preparation with case study, Infrastructure setup, Team Training, System Operation, System Maintenance, System Retirement. Configuration Baselines, Interface Control, Metrics change control –Submitting Change Request, Request Analysis, Request Disapproval and Request Approval Configuration Control Tool."
    },
    {
        id: 3,
        name: "Information and Information Systems",
        description: "Concept of Information system, Components of information system,Transaction Processing System (TPS) - Office Automation System (OAS), Management Information System (MIS) - Decision Support System (DSS) and Group Decision Support System (GDSS)-Expert System(ES) Executive Support System (EIS or ESS)."
    },
    {
        id: 4,
        name: "Concepts of Planning & Control",
        description: "Concept of organizational planning, The Planning Process, Computational support for planning, Characteristics of control process, The nature of control in an organization.Information System Planning: Information System Development, Analysis, Design, Testing, Evaluation & Implementation. Manufacturing and Service Systems, Information systems for Accounting, Finance, Production and Manufacturing, Marketing and HRM functions - IS in hospital, hotel, bank."
    },
    {
        id: 5,
        name: "Enterprise Resources Planning (ERP)",
        description: "Features, selection criteria, merits, issues and challenges in Implementation, ERP related Technologies:Supply Chain Management (SCM): Features, Modules in SCM, Customer Relation Management(CRM), E-Commerce applications."
    }
];

// Make available globally for browser environment
if (typeof window !== 'undefined') {
    window.spmUnits = spmUnits;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = spmUnits;
}
