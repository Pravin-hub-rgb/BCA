// quiz/subjects/cn/units.js
const cnUnits = [
    {
        id: 1,
        name: "Introduction to Computer Networks",
        description: "Network fundamentals, network types, OSI and TCP/IP models, network topologies, transmission media, and network devices."
    },
    {
        id: 2,
        name: "Data Link Layer and LAN Technologies",
        description: "Data link layer functions, error detection and correction, flow control, media access control, Ethernet, wireless LANs, and VLANs."
    },
    {
        id: 3,
        name: "Network Layer and Routing",
        description: "Network layer functions, IP addressing, subnetting, routing algorithms, routing protocols (RIP, OSPF, BGP), and IPv6."
    },
    {
        id: 4,
        name: "Transport Layer and Application Layer",
        description: "Transport layer services, TCP and UDP protocols, congestion control, DNS, HTTP, FTP, SMTP, and network applications."
    },
    {
        id: 5,
        name: "Network Security and Advanced Topics",
        description: "Network security threats, cryptography, firewalls, VPNs, wireless security, cloud networking, and emerging network technologies."
    }
];

// Make available globally
if (typeof window !== 'undefined') {
    window.cnUnits = cnUnits;
}
