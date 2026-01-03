// quiz/subjects/dc/questions.js
const dcQuestions = {
    1: [ // Unit 1: Introduction to Data Communication (20 questions)
        {
            question: "What is the primary goal of data communication?",
            options: ["Data storage", "Data transmission between devices", "Data processing", "Data encryption"],
            correct: 1
        },
        {
            question: "Which model describes the communication process between two devices?",
            options: ["OSI model", "TCP/IP model", "Communication model", "Transmission model"],
            correct: 2
        },
        {
            question: "What does simplex transmission allow?",
            options: ["Bidirectional communication", "Data transmission in one direction only", "Data transmission in both directions", "No data transmission"],
            correct: 1
        },
        {
            question: "Which topology connects all devices to a central hub?",
            options: ["Bus topology", "Star topology", "Ring topology", "Mesh topology"],
            correct: 1
        },
        {
            question: "What is the main advantage of digital transmission over analog?",
            options: ["Higher bandwidth", "Less susceptible to noise", "Lower cost", "Easier implementation"],
            correct: 1
        },
        {
            question: "Which transmission mode sends data in both directions simultaneously?",
            options: ["Simplex", "Half-duplex", "Full-duplex", "Multiplex"],
            correct: 2
        },
        {
            question: "What does ASCII stand for?",
            options: ["American Standard Code for Information Interchange", "Advanced System for Communication Interface", "Automatic Serial Communication Interface", "Analog Signal Conversion Interchange"],
            correct: 0
        },
        {
            question: "Which factor determines the effectiveness of data communication?",
            options: ["Delivery", "Accuracy", "Timeliness", "All of the above"],
            correct: 3
        },
        {
            question: "What is baud rate?",
            options: ["Number of bits per second", "Number of signal changes per second", "Number of bytes per second", "Number of packets per second"],
            correct: 1
        },
        {
            question: "Which topology provides redundant paths between devices?",
            options: ["Bus topology", "Star topology", "Ring topology", "Mesh topology"],
            correct: 3
        },
        {
            question: "What is the purpose of data communication protocols?",
            options: ["Hardware design", "Software development", "Rules for data exchange", "Network security"],
            correct: 2
        },
        {
            question: "Which transmission mode allows data to flow in both directions but not simultaneously?",
            options: ["Simplex", "Half-duplex", "Full-duplex", "Multiplex"],
            correct: 1
        },
        {
            question: "What is bandwidth in data communication?",
            options: ["Data transfer rate", "Frequency range of a channel", "Number of users", "Distance between devices"],
            correct: 1
        },
        {
            question: "Which network topology is most fault tolerant?",
            options: ["Bus", "Star", "Ring", "Mesh"],
            correct: 3
        },
        {
            question: "What is attenuation in signal transmission?",
            options: ["Signal amplification", "Signal weakening over distance", "Signal reflection", "Signal modulation"],
            correct: 1
        },
        {
            question: "Which standard organization develops communication standards?",
            options: ["IEEE", "ISO", "ITU-T", "All of the above"],
            correct: 3
        },
        {
            question: "What is the basic unit of digital data transmission?",
            options: ["Byte", "Bit", "Word", "Frame"],
            correct: 1
        },
        {
            question: "Which communication method uses light signals?",
            options: ["Radio waves", "Microwaves", "Fiber optics", "Coaxial cable"],
            correct: 2
        },
        {
            question: "What is latency in data communication?",
            options: ["Data transfer rate", "Time delay in transmission", "Signal strength", "Error rate"],
            correct: 1
        },
        {
            question: "Which topology requires terminators at both ends?",
            options: ["Star", "Ring", "Bus", "Mesh"],
            correct: 2
        }
    ],
    2: [ // Unit 2: Transmission Media (20 questions)
        {
            question: "Which transmission medium uses copper wires twisted together?",
            options: ["Coaxial cable", "Fiber optic cable", "Twisted pair cable", "Microwave"],
            correct: 2
        },
        {
            question: "What is the main advantage of fiber optic cable over copper wire?",
            options: ["Lower cost", "Higher bandwidth and less attenuation", "Easier installation", "Better for short distances"],
            correct: 1
        },
        {
            question: "Which type of transmission media is affected by electromagnetic interference?",
            options: ["Fiber optic", "Twisted pair", "Both A and B", "Neither A nor B"],
            correct: 1
        },
        {
            question: "What does STP stand for in transmission media?",
            options: ["Single Twisted Pair", "Shielded Twisted Pair", "Standard Transmission Protocol", "Signal Transfer Protocol"],
            correct: 1
        },
        {
            question: "Which transmission medium uses light propagation through glass fibers?",
            options: ["Coaxial cable", "Twisted pair", "Fiber optic cable", "Wireless"],
            correct: 2
        },
        {
            question: "What is the bandwidth range of coaxial cable?",
            options: ["10 Mbps", "100 Mbps to 1 Gbps", "Up to 10 Gbps", "Unlimited"],
            correct: 2
        },
        {
            question: "Which transmission medium is best for long-distance communication?",
            options: ["Twisted pair", "Coaxial cable", "Fiber optic", "Wireless"],
            correct: 2
        },
        {
            question: "What is the main disadvantage of wireless transmission?",
            options: ["High cost", "Limited range", "Security issues", "All of the above"],
            correct: 3
        },
        {
            question: "Which frequency range is used for microwave transmission?",
            options: ["300 GHz to 300 THz", "3 GHz to 30 GHz", "300 MHz to 3 GHz", "30 MHz to 300 MHz"],
            correct: 1
        },
        {
            question: "What is the propagation speed of signals in fiber optic cable?",
            options: ["Speed of light", "2/3 speed of light", "1/2 speed of light", "1/3 speed of light"],
            correct: 1
        },
        {
            question: "Which transmission medium uses radio waves?",
            options: ["Microwave", "Infrared", "Satellite communication", "All of the above"],
            correct: 3
        },
        {
            question: "What is the maximum distance for UTP Category 5 cable?",
            options: ["100 meters", "500 meters", "1 km", "10 km"],
            correct: 0
        },
        {
            question: "Which transmission medium is immune to electromagnetic interference?",
            options: ["Twisted pair", "Coaxial cable", "Fiber optic", "Wireless"],
            correct: 2
        },
        {
            question: "What is the purpose of cladding in fiber optic cable?",
            options: ["Signal transmission", "Light reflection", "Cable protection", "Signal amplification"],
            correct: 1
        },
        {
            question: "Which wireless transmission uses line-of-sight communication?",
            options: ["Radio waves", "Microwaves", "Infrared", "Bluetooth"],
            correct: 1
        },
        {
            question: "What is the data rate of coaxial cable?",
            options: ["10 Mbps", "100 Mbps", "1 Gbps", "10 Gbps"],
            correct: 2
        },
        {
            question: "Which transmission medium has the lowest attenuation?",
            options: ["Twisted pair", "Coaxial cable", "Fiber optic", "Wireless"],
            correct: 2
        },
        {
            question: "What is the frequency range of infrared transmission?",
            options: ["300 GHz to 400 THz", "100 GHz to 300 GHz", "10 GHz to 100 GHz", "1 GHz to 10 GHz"],
            correct: 0
        },
        {
            question: "Which cable type is used for cable television?",
            options: ["Twisted pair", "Coaxial cable", "Fiber optic", "Ethernet cable"],
            correct: 1
        },
        {
            question: "What is the main advantage of guided transmission media?",
            options: ["Higher bandwidth", "Security", "Both A and B", "Lower cost"],
            correct: 2
        }
    ],
    3: [ // Unit 3: Multiplexing and Switching (25 questions)
        {
            question: "What is multiplexing in data communication?",
            options: ["Data encryption", "Combining multiple signals into one", "Data compression", "Signal amplification"],
            correct: 1
        },
        {
            question: "Which multiplexing technique divides bandwidth into frequency bands?",
            options: ["Time Division Multiplexing", "Frequency Division Multiplexing", "Wavelength Division Multiplexing", "Code Division Multiplexing"],
            correct: 1
        },
        {
            question: "What is TDM?",
            options: ["Time Division Multiplexing", "Time Delay Modulation", "Transmission Data Mode", "Terminal Data Management"],
            correct: 0
        },
        {
            question: "Which multiplexing technique is used in fiber optic communication?",
            options: ["FDM", "TDM", "WDM", "CDM"],
            correct: 2
        },
        {
            question: "What is circuit switching?",
            options: ["Packet-based switching", "Dedicated path establishment", "Message switching", "Cell switching"],
            correct: 1
        },
        {
            question: "Which switching technique divides data into packets?",
            options: ["Circuit switching", "Message switching", "Packet switching", "Virtual circuit switching"],
            correct: 2
        },
        {
            question: "What is the main disadvantage of circuit switching?",
            options: ["Low delay", "Inefficient bandwidth usage", "High reliability", "Simple implementation"],
            correct: 1
        },
        {
            question: "Which multiplexing technique assigns time slots to users?",
            options: ["FDM", "TDM", "WDM", "Statistical multiplexing"],
            correct: 1
        },
        {
            question: "What is statistical multiplexing?",
            options: ["Fixed time slots", "Dynamic bandwidth allocation", "Frequency division", "Wavelength division"],
            correct: 1
        },
        {
            question: "Which switching technique is used in telephone networks?",
            options: ["Packet switching", "Circuit switching", "Message switching", "Frame switching"],
            correct: 1
        },
        {
            question: "What is the advantage of packet switching over circuit switching?",
            options: ["Guaranteed bandwidth", "Better resource utilization", "Lower delay", "Simpler implementation"],
            correct: 1
        },
        {
            question: "Which multiplexing technique uses orthogonal codes?",
            options: ["FDM", "TDM", "CDMA", "WDM"],
            correct: 2
        },
        {
            question: "What is synchronous TDM?",
            options: ["Dynamic slot allocation", "Fixed time slots for each user", "Variable slot sizes", "Statistical allocation"],
            correct: 1
        },
        {
            question: "Which switching technique stores entire message before forwarding?",
            options: ["Circuit switching", "Packet switching", "Message switching", "Frame switching"],
            correct: 2
        },
        {
            question: "What is wavelength division multiplexing?",
            options: ["Time-based multiplexing", "Frequency-based multiplexing", "Wavelength-based multiplexing", "Code-based multiplexing"],
            correct: 2
        },
        {
            question: "Which technique combines circuit and packet switching advantages?",
            options: ["Virtual circuit switching", "Datagram switching", "Message switching", "Frame relay"],
            correct: 0
        },
        {
            question: "What is the main advantage of FDM?",
            options: ["Time synchronization", "Continuous transmission", "Simple implementation", "Error correction"],
            correct: 1
        },
        {
            question: "Which multiplexing is used in DSL technology?",
            options: ["FDM", "TDM", "WDM", "CDM"],
            correct: 0
        },
        {
            question: "What is asynchronous TDM?",
            options: ["Fixed slots", "Variable slots based on demand", "No slots", "Random slots"],
            correct: 1
        },
        {
            question: "Which switching technique is connection-oriented?",
            options: ["Datagram", "Virtual circuit", "Message switching", "Best effort"],
            correct: 1
        },
        {
            question: "What is the efficiency of TDM compared to FDM?",
            options: ["Higher", "Lower", "Same", "Depends on application"],
            correct: 3
        },
        {
            question: "Which technique is used in ATM networks?",
            options: ["Packet switching", "Cell switching", "Message switching", "Circuit switching"],
            correct: 1
        },
        {
            question: "What is the main disadvantage of message switching?",
            options: ["Low delay", "High storage requirements", "Simple routing", "Low cost"],
            correct: 1
        },
        {
            question: "Which multiplexing technique requires synchronization?",
            options: ["FDM", "TDM", "WDM", "CDM"],
            correct: 1
        },
        {
            question: "What is inverse multiplexing?",
            options: ["Combining multiple channels", "Splitting one channel into multiple", "Time reversal", "Frequency reversal"],
            correct: 1
        }
    ],
    4: [ // Unit 4: Data Link Layer (25 questions)
        {
            question: "What is the main function of the data link layer?",
            options: ["Routing", "Error detection and correction", "Session management", "Application support"],
            correct: 1
        },
        {
            question: "Which framing method uses flag bytes to mark frame boundaries?",
            options: ["Character count", "Byte stuffing", "Bit stuffing", "Flag bytes"],
            correct: 1
        },
        {
            question: "What is CRC in error detection?",
            options: ["Cyclic Redundancy Check", "Critical Recovery Code", "Character Recognition Check", "Control Redundancy Code"],
            correct: 0
        },
        {
            question: "Which error detection method uses parity bits?",
            options: ["Checksum", "CRC", "Hamming code", "Parity check"],
            correct: 3
        },
        {
            question: "What is flow control in data link layer?",
            options: ["Error correction", "Speed matching between sender and receiver", "Data encryption", "Address resolution"],
            correct: 1
        },
        {
            question: "Which protocol uses stop-and-wait ARQ?",
            options: ["HDLC", "PPP", "Ethernet", "Simple protocol"],
            correct: 3
        },
        {
            question: "What is HDLC?",
            options: ["High-level Data Link Control", "High Definition Link Control", "Hybrid Data Link Control", "Host Data Link Control"],
            correct: 0
        },
        {
            question: "Which framing method adds extra bits to prevent flag patterns?",
            options: ["Character count", "Byte stuffing", "Bit stuffing", "Length field"],
            correct: 2
        },
        {
            question: "What is Hamming distance in error correction?",
            options: ["Physical distance", "Number of bit positions differing", "Transmission distance", "Code distance"],
            correct: 1
        },
        {
            question: "Which flow control mechanism uses sliding window?",
            options: ["Stop-and-wait", "Go-back-N", "Selective repeat", "All of the above"],
            correct: 3
        },
        {
            question: "What is the purpose of PPP protocol?",
            options: ["Error detection", "Point-to-point communication", "Multicast communication", "Broadcast communication"],
            correct: 1
        },
        {
            question: "Which error correction code can detect and correct single-bit errors?",
            options: ["Parity check", "Checksum", "Hamming code", "CRC"],
            correct: 2
        },
        {
            question: "What is piggybacking in data link protocols?",
            options: ["Error correction", "Combining ACK with data", "Flow control", "Framing"],
            correct: 1
        },
        {
            question: "Which protocol provides reliable data transfer?",
            options: ["UDP", "IP", "HDLC", "Ethernet"],
            correct: 2
        },
        {
            question: "What is the maximum window size in stop-and-wait ARQ?",
            options: ["1", "Multiple", "Unlimited", "Zero"],
            correct: 0
        },
        {
            question: "Which framing method uses a length field?",
            options: ["Character count", "Byte stuffing", "Bit stuffing", "Flag bytes"],
            correct: 0
        },
        {
            question: "What is selective repeat ARQ?",
            options: ["Retransmit all frames", "Retransmit only damaged frames", "Stop transmission", "Change window size"],
            correct: 1
        },
        {
            question: "Which data link protocol is used in WAN?",
            options: ["Ethernet", "Token Ring", "HDLC", "CSMA/CD"],
            correct: 2
        },
        {
            question: "What is the efficiency of stop-and-wait ARQ?",
            options: ["High", "Low", "Medium", "Zero"],
            correct: 1
        },
        {
            question: "Which flow control uses credit-based mechanism?",
            options: ["Stop-and-wait", "Sliding window", "Credit scheme", "Rate control"],
            correct: 2
        },
        {
            question: "What is the purpose of preamble in Ethernet frames?",
            options: ["Error detection", "Synchronization", "Addressing", "Data field"],
            correct: 1
        },
        {
            question: "Which protocol is connection-oriented at data link layer?",
            options: ["Ethernet", "HDLC", "PPP", "SLIP"],
            correct: 1
        },
        {
            question: "What is CSMA/CD used for?",
            options: ["Error correction", "Multiple access control", "Flow control", "Encryption"],
            correct: 1
        },
        {
            question: "Which error detection method is used in Ethernet?",
            options: ["Parity", "Checksum", "CRC", "Hamming"],
            correct: 2
        },
        {
            question: "What is the minimum frame size in Ethernet?",
            options: ["64 bytes", "128 bytes", "256 bytes", "512 bytes"],
            correct: 0
        }
    ],
    5: [ // Unit 5: Network Layer (25 questions)
        {
            question: "What is the main function of the network layer?",
            options: ["Error detection", "Routing and forwarding", "Session management", "Application support"],
            correct: 1
        },
        {
            question: "Which protocol is used for routing in the Internet?",
            options: ["IP", "TCP", "UDP", "HTTP"],
            correct: 0
        },
        {
            question: "What is IP address?",
            options: ["Hardware address", "Logical address", "Physical address", "Port address"],
            correct: 1
        },
        {
            question: "Which routing algorithm finds the shortest path?",
            options: ["Distance vector", "Link state", "Dijkstra's algorithm", "Bellman-Ford"],
            correct: 2
        },
        {
            question: "What is congestion control?",
            options: ["Error control", "Traffic management", "Security control", "Access control"],
            correct: 1
        },
        {
            question: "Which technique prevents network congestion?",
            options: ["Flow control", "Error control", "Congestion control", "All of the above"],
            correct: 2
        },
        {
            question: "What is subnetting?",
            options: ["Dividing network into subnets", "Combining networks", "Network security", "Network monitoring"],
            correct: 0
        },
        {
            question: "Which IP version is currently used?",
            options: ["IPv4", "IPv6", "IPv8", "IPv2"],
            correct: 1
        },
        {
            question: "What is the purpose of ARP?",
            options: ["Address resolution", "Error detection", "Routing", "Congestion control"],
            correct: 0
        },
        {
            question: "Which routing protocol uses distance vector algorithm?",
            options: ["OSPF", "RIP", "BGP", "IS-IS"],
            correct: 1
        },
        {
            question: "What is NAT?",
            options: ["Network Address Translation", "Network Access Terminal", "Network Address Table", "Network Access Technology"],
            correct: 0
        },
        {
            question: "Which technique reduces routing table size?",
            options: ["Subnetting", "Supernetting", "CIDR", "All of the above"],
            correct: 3
        },
        {
            question: "What is the TTL field in IP header?",
            options: ["Time To Live", "Type of Service", "Total Length", "Transport Layer"],
            correct: 0
        },
        {
            question: "Which routing is done within an autonomous system?",
            options: ["IGP", "EGP", "BGP", "Static routing"],
            correct: 0
        },
        {
            question: "What is CIDR?",
            options: ["Classless Inter-Domain Routing", "Classful Inter-Domain Routing", "Classless Intra-Domain Routing", "Classful Intra-Domain Routing"],
            correct: 0
        },
        {
            question: "Which protocol is used for inter-domain routing?",
            options: ["RIP", "OSPF", "BGP", "IGRP"],
            correct: 2
        },
        {
            question: "What is fragmentation in IP?",
            options: ["Packet division", "Packet reassembly", "Both A and B", "Packet encryption"],
            correct: 2
        },
        {
            question: "Which congestion control algorithm uses slow start?",
            options: ["TCP Tahoe", "TCP Reno", "TCP New Reno", "All of the above"],
            correct: 3
        },
        {
            question: "What is the purpose of ICMP?",
            options: ["Error reporting", "Address resolution", "Routing", "Transport"],
            correct: 0
        },
        {
            question: "Which IP address class has 16 million addresses?",
            options: ["Class A", "Class B", "Class C", "Class D"],
            correct: 0
        },
        {
            question: "What is DHCP used for?",
            options: ["IP address assignment", "Domain name resolution", "Routing", "Security"],
            correct: 0
        },
        {
            question: "Which routing algorithm is adaptive?",
            options: ["Static routing", "Dynamic routing", "Default routing", "Direct routing"],
            correct: 1
        },
        {
            question: "What is the maximum payload size in IPv4?",
            options: ["64 KB", "64 MB", "64 GB", "Unlimited"],
            correct: 0
        },
        {
            question: "Which technique uses choke packets for congestion control?",
            options: ["RED", "ECN", "DECbit", "All of the above"],
            correct: 3
        },
        {
            question: "What is the purpose of subnet mask?",
            options: ["Network identification", "Host identification", "Both A and B", "Security"],
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
        if (dcQuestions[unitId]) {
            dcQuestions[unitId].forEach(question => {
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
