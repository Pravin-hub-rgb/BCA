// quiz/subjects/cloud/units.js
const cloudUnits = [
    {
        id: 1,
        name: "Introduction to Cloud Computing",
        description: "Cloud computing fundamentals, service models (IaaS/PaaS/SaaS), deployment models (public/private/hybrid), and cloud characteristics."
    },
    {
        id: 2,
        name: "Virtualization and Infrastructure",
        description: "Virtualization concepts, hypervisors, virtual machines, containers, orchestration, and Infrastructure as a Service (IaaS) platforms."
    },
    {
        id: 3,
        name: "Platform and Software as a Service",
        description: "Platform as a Service (PaaS) offerings, development frameworks, Software as a Service (SaaS) applications, and cloud-native development."
    },
    {
        id: 4,
        name: "Cloud Security and Management",
        description: "Cloud security principles, data protection, identity management, compliance, monitoring, and cloud governance."
    },
    {
        id: 5,
        name: "Advanced Cloud Technologies",
        description: "Microservices, serverless computing, edge computing, cloud migration strategies, and emerging cloud technologies."
    }
];

// Make available globally
if (typeof window !== 'undefined') {
    window.cloudUnits = cloudUnits;
}
