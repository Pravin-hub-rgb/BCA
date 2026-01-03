// quiz/subjects/cn/questions.js
const cnQuestions = {
    1: [ // Unit 1: Introduction to Computer Networks (20 questions)
        {
            question: "What is the primary purpose of computer networks?",
            options: ["Data storage", "Resource sharing and communication", "Hardware manufacturing", "Software development"],
            correct: 1
        },
        {
            question: "Which network topology connects all devices to a central hub?",
            options: ["Bus topology", "Ring topology", "Star topology", "Mesh topology"],
            correct: 2
        },
        {
            question: "What does LAN stand for in networking?",
            options: ["Large Area Network", "Local Area Network", "Long Area Network", "Linked Area Network"],
            correct: 1
        },
        {
            question: "Which layer of the OSI model is responsible for physical transmission of data?",
            options: ["Data Link layer", "Network layer", "Physical layer", "Transport layer"],
            correct: 2
        },
        {
            question: "What is the main difference between guided and unguided transmission media?",
            options: ["Speed", "Physical vs wireless transmission", "Cost", "Distance"],
            correct: 1
        },
        {
            question: "Which network device operates at the Data Link layer?",
            options: ["Router", "Switch", "Hub", "Modem"],
            correct: 1
        },
        {
            question: "What is the OSI model?",
            options: ["Network protocol", "Layered network architecture", "Hardware specification", "Software application"],
            correct: 1
        },
        {
            question: "Which transmission medium has the highest bandwidth?",
            options: ["Twisted pair", "Coaxial cable", "Optical fiber", "Wireless"],
            correct: 2
        },
        {
            question: "What does MAN stand for?",
            options: ["Main Area Network", "Metropolitan Area Network", "Maximum Area Network", "Managed Area Network"],
            correct: 1
        },
        {
            question: "Which OSI layer is responsible for establishing, managing, and terminating connections?",
            options: ["Physical layer", "Data Link layer", "Session layer", "Presentation layer"],
            correct: 2
        },
        {
            question: "What is the purpose of network protocols?",
            options: ["Hardware design", "Rules for communication between devices", "Data storage", "User interface"],
            correct: 1
        },
        {
            question: "Which network topology has multiple paths between devices?",
            options: ["Bus topology", "Ring topology", "Star topology", "Mesh topology"],
            correct: 3
        },
        {
            question: "What is the TCP/IP model also known as?",
            options: ["OSI model", "Department of Defense model", "IEEE model", "ISO model"],
            correct: 1
        },
        {
            question: "Which network device amplifies signals?",
            options: ["Switch", "Router", "Repeater", "Bridge"],
            correct: 2
        },
        {
            question: "What is the main advantage of fiber optic cable?",
            options: ["Low cost", "Easy installation", "High bandwidth and immunity to interference", "Short distance limitation"],
            correct: 2
        },
        {
            question: "Which OSI layer ensures reliable data transfer?",
            options: ["Physical layer", "Data Link layer", "Transport layer", "Network layer"],
            correct: 2
        },
        {
            question: "What is a network topology?",
            options: ["Network speed", "Physical or logical layout of network devices", "Network security", "Network protocols"],
            correct: 1
        },
        {
            question: "Which transmission medium uses radio waves?",
            options: ["Twisted pair", "Coaxial cable", "Optical fiber", "Wireless"],
            correct: 3
        },
        {
            question: "What is the purpose of the Presentation layer in OSI model?",
            options: ["Data routing", "Data formatting and encryption", "Physical transmission", "Error detection"],
            correct: 1
        },
        {
            question: "Which network spans across cities or countries?",
            options: ["LAN", "MAN", "WAN", "PAN"],
            correct: 2
        }
    ],
    2: [ // Unit 2: Data Link Layer and LAN Technologies (20 questions)
        {
            question: "What is the primary function of the Data Link layer?",
            options: ["Routing", "Error detection and correction", "Physical transmission", "Application support"],
            correct: 1
        },
        {
            question: "Which error detection method uses parity bits?",
            options: ["Checksum", "Cyclic redundancy check", "Parity check", "Hamming code"],
            correct: 2
        },
        {
            question: "What is CSMA/CD used for?",
            options: ["Error correction", "Flow control", "Media access control in Ethernet", "Data encryption"],
            correct: 2
        },
        {
            question: "Which Data Link protocol provides reliable data transfer?",
            options: ["Ethernet", "HDLC", "PPP", "Both B and C"],
            correct: 3
        },
        {
            question: "What is the purpose of MAC address?",
            options: ["IP addressing", "Physical device identification", "Network routing", "Data encryption"],
            correct: 1
        },
        {
            question: "Which LAN technology uses token passing?",
            options: ["Ethernet", "Wi-Fi", "Token Ring", "ATM"],
            correct: 2
        },
        {
            question: "What does VLAN stand for?",
            options: ["Virtual Local Area Network", "Very Large Area Network", "Variable Length Area Network", "Virtual Link Access Network"],
            correct: 0
        },
        {
            question: "Which flow control mechanism uses sliding windows?",
            options: ["Stop and wait", "Go back N", "Selective repeat", "Both B and C"],
            correct: 3
        },
        {
            question: "What is the frame format used in Ethernet?",
            options: ["IP packet", "Ethernet frame", "TCP segment", "UDP datagram"],
            correct: 1
        },
        {
            question: "Which wireless standard provides the highest speed?",
            options: ["802.11b", "802.11g", "802.11n", "802.11ac"],
            correct: 3
        },
        {
            question: "What is the purpose of error correction codes?",
            options: ["Speed up transmission", "Detect and correct transmission errors", "Encrypt data", "Compress data"],
            correct: 1
        },
        {
            question: "Which media access method allows collision detection?",
            options: ["Token passing", "CSMA/CD", "Polling", "Reservation"],
            correct: 1
        },
        {
            question: "What is the maximum data rate of Fast Ethernet?",
            options: ["10 Mbps", "100 Mbps", "1000 Mbps", "10 Gbps"],
            correct: 1
        },
        {
            question: "Which protocol is used for point-to-point connections?",
            options: ["Ethernet", "HDLC", "PPP", "Token Ring"],
            correct: 2
        },
        {
            question: "What is the purpose of a bridge in networks?",
            options: ["Route between networks", "Connect segments within a network", "Provide internet access", "Manage wireless connections"],
            correct: 1
        },
        {
            question: "Which error detection method uses polynomial division?",
            options: ["Parity check", "Checksum", "Cyclic redundancy check", "Hamming code"],
            correct: 2
        },
        {
            question: "What is the main advantage of switched Ethernet?",
            options: ["Higher cost", "Collision domains per port", "Slower speed", "Complex configuration"],
            correct: 1
        },
        {
            question: "Which wireless security protocol is most secure?",
            options: ["WEP", "WPA", "WPA2", "WPA3"],
            correct: 3
        },
        {
            question: "What is the purpose of ARP in networks?",
            options: ["IP to MAC address resolution", "MAC to IP address resolution", "DNS resolution", "DHCP configuration"],
            correct: 0
        },
        {
            question: "Which technology allows multiple VLANs on a single physical network?",
            options: ["Subnetting", "VLAN tagging", "Network segmentation", "Port mirroring"],
            correct: 1
        }
    ],
    3: [ // Unit 3: Network Layer and Routing (25 questions)
        {
            question: "What is the primary function of the Network layer?",
            options: ["Error detection", "Logical addressing and routing", "Physical transmission", "Data presentation"],
            correct: 1
        },
        {
            question: "Which protocol is used for IP addressing?",
            options: ["TCP", "UDP", "IP", "ICMP"],
            correct: 2
        },
        {
            question: "What is the purpose of subnetting?",
            options: ["Increase network speed", "Divide large networks into smaller subnets", "Encrypt network traffic", "Compress data"],
            correct: 1
        },
        {
            question: "Which routing algorithm uses link state information?",
            options: ["Distance vector", "Link state", "Path vector", "Hierarchical"],
            correct: 1
        },
        {
            question: "What does RIP stand for?",
            options: ["Routing Internet Protocol", "Routing Information Protocol", "Remote Internet Protocol", "Reliable Internet Protocol"],
            correct: 1
        },
        {
            question: "Which IPv6 feature provides larger address space?",
            options: ["128-bit addresses", "32-bit addresses", "64-bit addresses", "16-bit addresses"],
            correct: 0
        },
        {
            question: "What is the purpose of OSPF in routing?",
            options: ["Distance vector routing", "Link state routing", "Path vector routing", "Source routing"],
            correct: 1
        },
        {
            question: "Which network device operates at the Network layer?",
            options: ["Switch", "Bridge", "Router", "Hub"],
            correct: 2
        },
        {
            question: "What is the default subnet mask for a Class C network?",
            options: ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.255"],
            correct: 2
        },
        {
            question: "Which routing protocol is used for inter-domain routing?",
            options: ["RIP", "OSPF", "BGP", "EIGRP"],
            correct: 2
        },
        {
            question: "What is the purpose of NAT in networks?",
            options: ["Network security", "IP address translation", "Data encryption", "Traffic shaping"],
            correct: 1
        },
        {
            question: "Which algorithm finds the shortest path in routing?",
            options: ["Bellman-Ford", "Dijkstra's algorithm", "Floyd-Warshall", "Both A and B"],
            correct: 3
        },
        {
            question: "What is CIDR notation used for?",
            options: ["IP addressing", "Subnet mask representation", "MAC addressing", "Port numbering"],
            correct: 1
        },
        {
            question: "Which protocol is used for network troubleshooting?",
            options: ["TCP", "UDP", "ICMP", "ARP"],
            correct: 2
        },
        {
            question: "What is the main advantage of hierarchical routing?",
            options: ["Complex configuration", "Scalability for large networks", "Slow convergence", "High memory usage"],
            correct: 1
        },
        {
            question: "Which IPv6 feature eliminates the need for NAT?",
            options: ["Larger address space", "Built-in security", "Auto-configuration", "All of the above"],
            correct: 3
        },
        {
            question: "What is the purpose of a routing table?",
            options: ["Store MAC addresses", "Store routing information", "Store IP addresses", "Store domain names"],
            correct: 1
        },
        {
            question: "Which routing metric considers link bandwidth?",
            options: ["Hop count", "Cost", "Delay", "Load"],
            correct: 1
        },
        {
            question: "What is the maximum number of hosts in a /24 subnet?",
            options: ["254", "256", "512", "1024"],
            correct: 0
        },
        {
            question: "Which protocol provides dynamic IP address assignment?",
            options: ["DNS", "DHCP", "ARP", "RARP"],
            correct: 1
        },
        {
            question: "What is the purpose of ICMP?",
            options: ["Error reporting and diagnostics", "Data transmission", "Address resolution", "Name resolution"],
            correct: 0
        },
        {
            question: "Which routing protocol uses autonomous systems?",
            options: ["RIP", "OSPF", "BGP", "IS-IS"],
            correct: 2
        },
        {
            question: "What is supernetting in IP addressing?",
            options: ["Dividing networks", "Combining networks", "Routing networks", "Securing networks"],
            correct: 1
        },
        {
            question: "Which algorithm is used in OSPF?",
            options: ["Bellman-Ford", "Dijkstra's algorithm", "Distance vector", "Link state"],
            correct: 1
        },
        {
            question: "What is the purpose of fragmentation in IP?",
            options: ["Data compression", "Breaking large packets into smaller ones", "Data encryption", "Error correction"],
            correct: 1
        }
    ],
    4: [ // Unit 4: Transport Layer and Application Layer (25 questions)
        {
            question: "What is the primary function of the Transport layer?",
            options: ["Physical transmission", "End-to-end communication", "Routing", "Error detection"],
            correct: 1
        },
        {
            question: "Which transport protocol provides reliable data transfer?",
            options: ["UDP", "TCP", "IP", "ICMP"],
            correct: 1
        },
        {
            question: "What does TCP stand for?",
            options: ["Transmission Control Protocol", "Transport Control Protocol", "Transmission Communication Protocol", "Transport Communication Protocol"],
            correct: 0
        },
        {
            question: "Which protocol is connection-oriented?",
            options: ["UDP", "TCP", "IP", "ICMP"],
            correct: 1
        },
        {
            question: "What is the purpose of port numbers in transport layer?",
            options: ["IP addressing", "Process identification", "MAC addressing", "Routing"],
            correct: 1
        },
        {
            question: "Which application uses TCP port 80?",
            options: ["FTP", "HTTP", "SMTP", "DNS"],
            correct: 1
        },
        {
            question: "What is the purpose of the three-way handshake in TCP?",
            options: ["Error detection", "Connection establishment", "Data transfer", "Connection termination"],
            correct: 1
        },
        {
            question: "Which protocol is used for DNS?",
            options: ["TCP", "UDP", "Both TCP and UDP", "IP"],
            correct: 2
        },
        {
            question: "What is congestion control in TCP?",
            options: ["Speed control", "Network congestion management", "Error control", "Flow control"],
            correct: 1
        },
        {
            question: "Which application layer protocol is used for email?",
            options: ["HTTP", "FTP", "SMTP", "DNS"],
            correct: 2
        },
        {
            question: "What does FTP stand for?",
            options: ["File Transfer Protocol", "Fast Transfer Protocol", "File Transport Protocol", "Full Transfer Protocol"],
            correct: 0
        },
        {
            question: "Which transport protocol provides faster but unreliable service?",
            options: ["TCP", "UDP", "SCTP", "DCCP"],
            correct: 1
        },
        {
            question: "What is the purpose of DNS?",
            options: ["IP address assignment", "Domain name to IP address resolution", "Email routing", "File transfer"],
            correct: 1
        },
        {
            question: "Which TCP mechanism ensures reliable delivery?",
            options: ["Sliding window", "Three-way handshake", "Sequence numbers and acknowledgments", "All of the above"],
            correct: 3
        },
        {
            question: "What is the default port for HTTPS?",
            options: ["80", "443", "21", "25"],
            correct: 1
        },
        {
            question: "Which protocol is used for video streaming?",
            options: ["TCP", "UDP", "Both TCP and UDP", "ICMP"],
            correct: 1
        },
        {
            question: "What is the purpose of TCP sliding window?",
            options: ["Error detection", "Flow control", "Congestion control", "Both B and C"],
            correct: 3
        },
        {
            question: "Which application protocol uses port 53?",
            options: ["HTTP", "FTP", "SMTP", "DNS"],
            correct: 3
        },
        {
            question: "What is the main difference between TCP and UDP?",
            options: ["Speed", "Reliability vs speed", "Port usage", "Address format"],
            correct: 1
        },
        {
            question: "Which protocol is used for remote login?",
            options: ["Telnet", "FTP", "SMTP", "HTTP"],
            correct: 0
        },
        {
            question: "What is the purpose of HTTP cookies?",
            options: ["Security", "Session management", "Data compression", "Error correction"],
            correct: 1
        },
        {
            question: "Which transport protocol provides multiplexing?",
            options: ["TCP", "UDP", "Both TCP and UDP", "IP"],
            correct: 2
        },
        {
            question: "What is the purpose of MIME in email?",
            options: ["Security", "Multi-part messages", "Address resolution", "Routing"],
            correct: 1
        },
        {
            question: "Which application uses both TCP and UDP?",
            options: ["HTTP", "DNS", "FTP", "SMTP"],
            correct: 1
        },
        {
            question: "What is the purpose of TCP slow start?",
            options: ["Error recovery", "Congestion control", "Connection establishment", "Data transmission"],
            correct: 1
        }
    ],
    5: [ // Unit 5: Network Security and Advanced Topics (25 questions)
        {
            question: "What is the primary goal of network security?",
            options: ["Performance", "Confidentiality, integrity, and availability", "Cost reduction", "Speed optimization"],
            correct: 1
        },
        {
            question: "Which security mechanism protects against eavesdropping?",
            options: ["Encryption", "Firewall", "Intrusion detection", "Access control"],
            correct: 0
        },
        {
            question: "What is a firewall in network security?",
            options: ["Antivirus software", "Hardware/software barrier against unauthorized access", "Encryption tool", "Authentication system"],
            correct: 1
        },
        {
            question: "Which encryption method uses public and private keys?",
            options: ["Symmetric encryption", "Asymmetric encryption", "Hashing", "Steganography"],
            correct: 1
        },
        {
            question: "What is the purpose of a VPN?",
            options: ["Speed up internet", "Secure remote access over public networks", "Block websites", "Monitor traffic"],
            correct: 1
        },
        {
            question: "Which attack involves intercepting communication between two parties?",
            options: ["Denial of service", "Man-in-the-middle attack", "SQL injection", "Cross-site scripting"],
            correct: 1
        },
        {
            question: "What does SSL/TLS provide?",
            options: ["Speed", "Secure communication over networks", "Routing", "Address assignment"],
            correct: 1
        },
        {
            question: "Which security protocol is used for wireless networks?",
            options: ["WEP", "WPA2", "Both A and B", "IPSec"],
            correct: 2
        },
        {
            question: "What is the purpose of network segmentation?",
            options: ["Increase speed", "Limit security breach scope", "Reduce costs", "Simplify management"],
            correct: 1
        },
        {
            question: "Which attack floods a network with traffic?",
            options: ["Phishing", "Denial of service", "Malware", "Spyware"],
            correct: 1
        },
        {
            question: "What is the purpose of digital certificates?",
            options: ["Speed up browsing", "Verify identity in secure communications", "Block ads", "Compress data"],
            correct: 1
        },
        {
            question: "Which security mechanism monitors network traffic for suspicious activity?",
            options: ["Firewall", "Intrusion detection system", "Encryption", "Access control"],
            correct: 1
        },
        {
            question: "What is the main advantage of cloud networking?",
            options: ["Higher costs", "Scalability and flexibility", "Security risks", "Complex management"],
            correct: 1
        },
        {
            question: "Which protocol provides secure remote access?",
            options: ["HTTP", "HTTPS", "SSH", "FTP"],
            correct: 2
        },
        {
            question: "What is the purpose of network address translation in security?",
            options: ["Speed", "Hide internal network structure", "Encryption", "Authentication"],
            correct: 1
        },
        {
            question: "Which emerging technology provides low-power wide-area networks?",
            options: ["5G", "LoRaWAN", "Wi-Fi 6", "Bluetooth 5"],
            correct: 1
        },
        {
            question: "What is the purpose of two-factor authentication?",
            options: ["Speed up login", "Add security layer beyond passwords", "Compress data", "Encrypt files"],
            correct: 1
        },
        {
            question: "Which security standard provides wireless security?",
            options: ["802.11i", "802.11ac", "802.11ad", "802.11ax"],
            correct: 0
        },
        {
            question: "What is the main benefit of software-defined networking?",
            options: ["Higher costs", "Centralized network control", "Complex configuration", "Limited scalability"],
            correct: 1
        },
        {
            question: "Which attack involves tricking users into revealing sensitive information?",
            options: ["Phishing", "Denial of service", "Man-in-the-middle", "SQL injection"],
            correct: 0
        },
        {
            question: "What is the purpose of network forensics?",
            options: ["Prevent attacks", "Investigate security incidents", "Speed up networks", "Monitor performance"],
            correct: 1
        },
        {
            question: "Which technology enables zero-trust network security?",
            options: ["Never trust, always verify", "Trust all internal systems", "Trust all external systems", "Trust based on IP address"],
            correct: 0
        },
        {
            question: "What is the main advantage of IPv6 over IPv4 in security?",
            options: ["Faster speed", "Built-in IPsec support", "Simpler addressing", "Backward compatibility"],
            correct: 1
        },
        {
            question: "Which network security control prevents unauthorized access?",
            options: ["Encryption", "Authentication", "Authorization", "All of the above"],
            correct: 3
        },
        {
            question: "What is the purpose of network access control?",
            options: ["Speed control", "Device authentication before network access", "Traffic shaping", "Bandwidth management"],
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
        if (cnQuestions[unitId]) {
            cnQuestions[unitId].forEach(question => {
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
