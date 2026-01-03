// quiz/subjects/cloud/questions.js
const cloudQuestions = {
    1: [ // Unit 1: Introduction to Cloud Computing (20 questions)
        {
            question: "What is the primary characteristic of cloud computing that allows users to access resources on-demand?",
            options: ["Broad network access", "Rapid elasticity", "Measured service", "Resource pooling"],
            correct: 1
        },
        {
            question: "Which cloud service model provides virtual machines and storage infrastructure?",
            options: ["Software as a Service", "Platform as a Service", "Infrastructure as a Service", "Function as a Service"],
            correct: 2
        },
        {
            question: "What does SaaS stand for in cloud computing service models?",
            options: ["System as a Service", "Software as a Service", "Storage as a Service", "Security as a Service"],
            correct: 1
        },
        {
            question: "Which cloud deployment model is owned and operated by a single organization?",
            options: ["Public cloud", "Private cloud", "Hybrid cloud", "Community cloud"],
            correct: 1
        },
        {
            question: "What is the main advantage of cloud computing over traditional computing?",
            options: ["Higher upfront costs", "Limited scalability", "Pay-per-use model", "Vendor lock-in"],
            correct: 2
        },
        {
            question: "Which characteristic of cloud computing allows resources to be rapidly provisioned and released?",
            options: ["Broad network access", "Rapid elasticity", "Measured service", "On-demand self-service"],
            correct: 1
        },
        {
            question: "What type of cloud combines public and private cloud deployments?",
            options: ["Public cloud", "Private cloud", "Hybrid cloud", "Community cloud"],
            correct: 2
        },
        {
            question: "Which cloud service model allows developers to build applications without managing infrastructure?",
            options: ["Infrastructure as a Service", "Platform as a Service", "Software as a Service", "Database as a Service"],
            correct: 1
        },
        {
            question: "What is the term for the ability to serve multiple customers from the same physical resources in cloud computing?",
            options: ["Multi-tenancy", "Load balancing", "Auto-scaling", "Resource pooling"],
            correct: 0
        },
        {
            question: "Which cloud deployment model is accessible to the general public over the internet?",
            options: ["Private cloud", "Public cloud", "Hybrid cloud", "Community cloud"],
            correct: 1
        },
        {
            question: "What is the main economic benefit organizations gain from cloud computing?",
            options: ["Reduced capital expenditure", "Increased hardware maintenance", "Higher operational costs", "Limited flexibility"],
            correct: 0
        },
        {
            question: "Which NIST characteristic of cloud computing refers to the ability to monitor and control resource usage?",
            options: ["On-demand self-service", "Broad network access", "Measured service", "Resource pooling"],
            correct: 2
        },
        {
            question: "What type of cloud serves a specific community with shared concerns?",
            options: ["Public cloud", "Private cloud", "Hybrid cloud", "Community cloud"],
            correct: 3
        },
        {
            question: "Which cloud service model provides ready-to-use software applications over the internet?",
            options: ["Infrastructure as a Service", "Platform as a Service", "Software as a Service", "Security as a Service"],
            correct: 2
        },
        {
            question: "What is the term for the ability to access cloud services from any location using standard internet protocols?",
            options: ["Rapid elasticity", "Broad network access", "Measured service", "Resource pooling"],
            correct: 1
        },
        {
            question: "Which cloud deployment model offers the highest level of security and control?",
            options: ["Public cloud", "Private cloud", "Hybrid cloud", "Community cloud"],
            correct: 1
        },
        {
            question: "What is the main difference between cloud computing and traditional hosting?",
            options: ["Cloud computing uses physical servers", "Traditional hosting offers pay-per-use", "Cloud computing provides virtualized resources", "Traditional hosting is always cheaper"],
            correct: 2
        },
        {
            question: "Which organization developed the widely accepted definition of cloud computing?",
            options: ["IEEE", "ISO", "NIST", "W3C"],
            correct: 2
        },
        {
            question: "What is the term for the ability of cloud systems to automatically scale resources based on demand?",
            options: ["Auto-scaling", "Load balancing", "Resource pooling", "Rapid elasticity"],
            correct: 0
        },
        {
            question: "Which cloud service model requires the most technical expertise from users?",
            options: ["Software as a Service", "Platform as a Service", "Infrastructure as a Service", "Database as a Service"],
            correct: 2
        }
    ],
    2: [ // Unit 2: Virtualization and Infrastructure (20 questions)
        {
            question: "What is virtualization in the context of cloud computing?",
            options: ["Physical server management", "Creating virtual versions of computing resources", "Network configuration", "Data storage management"],
            correct: 1
        },
        {
            question: "Which component manages virtual machines and allocates physical resources?",
            options: ["Virtual machine", "Hypervisor", "Container", "Orchestrator"],
            correct: 1
        },
        {
            question: "What type of hypervisor runs directly on hardware without a host operating system?",
            options: ["Type 1 hypervisor", "Type 2 hypervisor", "Bare metal hypervisor", "Hosted hypervisor"],
            correct: 0
        },
        {
            question: "Which technology packages applications with their dependencies for consistent deployment?",
            options: ["Virtual machines", "Containers", "Hypervisors", "Orchestrators"],
            correct: 1
        },
        {
            question: "What is the primary advantage of containers over virtual machines?",
            options: ["Better security", "Lighter weight and faster startup", "More isolation", "Hardware-level virtualization"],
            correct: 1
        },
        {
            question: "Which tool is commonly used for container orchestration in cloud environments?",
            options: ["Docker", "Kubernetes", "VirtualBox", "VMware"],
            correct: 1
        },
        {
            question: "What does IaaS stand for in cloud computing?",
            options: ["Internet as a Service", "Infrastructure as a Service", "Information as a Service", "Integration as a Service"],
            correct: 1
        },
        {
            question: "Which virtualization technique allows multiple operating systems to run on a single physical machine?",
            options: ["Server virtualization", "Network virtualization", "Storage virtualization", "Desktop virtualization"],
            correct: 0
        },
        {
            question: "What is the purpose of a virtual machine monitor?",
            options: ["Manage physical hardware", "Create virtual machines", "Monitor network traffic", "Manage storage devices"],
            correct: 0
        },
        {
            question: "Which container platform is widely used for packaging and deploying applications?",
            options: ["Kubernetes", "Docker", "OpenStack", "VMware"],
            correct: 1
        },
        {
            question: "What is the main benefit of virtualization in cloud computing?",
            options: ["Increased hardware costs", "Better resource utilization", "Reduced network speed", "Limited scalability"],
            correct: 1
        },
        {
            question: "Which type of virtualization creates virtual versions of physical storage devices?",
            options: ["Server virtualization", "Network virtualization", "Storage virtualization", "Application virtualization"],
            correct: 2
        },
        {
            question: "What is the role of an orchestrator in container management?",
            options: ["Create containers", "Manage container lifecycle and scaling", "Build container images", "Monitor container performance"],
            correct: 1
        },
        {
            question: "Which virtualization approach provides better resource utilization compared to full virtualization?",
            options: ["Paravirtualization", "Hardware-assisted virtualization", "Containerization", "Emulation"],
            correct: 0
        },
        {
            question: "What is the primary function of a load balancer in cloud infrastructure?",
            options: ["Store data", "Distribute traffic across servers", "Monitor security", "Manage virtual machines"],
            correct: 1
        },
        {
            question: "Which technology allows running multiple virtual machines on a single physical server?",
            options: ["Containerization", "Server virtualization", "Network segmentation", "Storage pooling"],
            correct: 1
        },
        {
            question: "What is the main difference between Type 1 and Type 2 hypervisors?",
            options: ["Performance", "Runs directly on hardware vs on host OS", "Security features", "Supported guest OS"],
            correct: 1
        },
        {
            question: "Which cloud service provides virtual servers, storage, and networking?",
            options: ["Platform as a Service", "Software as a Service", "Infrastructure as a Service", "Database as a Service"],
            correct: 2
        },
        {
            question: "What is the purpose of virtual networking in cloud environments?",
            options: ["Physical cable management", "Create isolated network environments", "Monitor network traffic", "Configure routers"],
            correct: 1
        },
        {
            question: "Which technology is commonly used for virtual machine migration in clouds?",
            options: ["Live migration", "Cold migration", "Storage migration", "Network migration"],
            correct: 0
        }
    ],
    3: [ // Unit 3: Platform and Software as a Service (25 questions)
        {
            question: "What does PaaS stand for in cloud computing?",
            options: ["Platform as a Service", "Performance as a Service", "Process as a Service", "Product as a Service"],
            correct: 0
        },
        {
            question: "Which cloud service model allows developers to focus on code without managing infrastructure?",
            options: ["Infrastructure as a Service", "Platform as a Service", "Software as a Service", "Function as a Service"],
            correct: 1
        },
        {
            question: "What is the primary benefit of Platform as a Service for developers?",
            options: ["Manage operating systems", "Focus on application development", "Handle hardware maintenance", "Configure networks"],
            correct: 1
        },
        {
            question: "Which PaaS component provides pre-configured development frameworks?",
            options: ["Runtime environment", "Development tools", "Database services", "All of the above"],
            correct: 3
        },
        {
            question: "What type of applications are typically delivered through Software as a Service?",
            options: ["Operating systems", "Development frameworks", "Business applications", "Database systems"],
            correct: 2
        },
        {
            question: "Which SaaS delivery model allows users to access applications through web browsers?",
            options: ["Desktop applications", "Mobile applications", "Web-based applications", "Installed software"],
            correct: 2
        },
        {
            question: "What is the main advantage of SaaS for small businesses?",
            options: ["High upfront costs", "Reduced IT infrastructure needs", "Complex deployment", "Vendor lock-in"],
            correct: 1
        },
        {
            question: "Which PaaS offering provides integrated development environments in the cloud?",
            options: ["Google App Engine", "Microsoft Azure", "Amazon Web Services", "All of the above"],
            correct: 3
        },
        {
            question: "What is serverless computing in the context of cloud platforms?",
            options: ["No servers used", "Developers don't manage servers", "No backend services", "Local development only"],
            correct: 1
        },
        {
            question: "Which SaaS application is commonly used for customer relationship management?",
            options: ["Microsoft Word", "Salesforce", "Adobe Photoshop", "AutoCAD"],
            correct: 1
        },
        {
            question: "What is the term for applications designed specifically for cloud environments?",
            options: ["Legacy applications", "Cloud-native applications", "Desktop applications", "Mobile applications"],
            correct: 1
        },
        {
            question: "Which PaaS feature allows automatic scaling of applications?",
            options: ["Load balancing", "Auto-scaling", "Containerization", "Orchestration"],
            correct: 1
        },
        {
            question: "What is the main difference between SaaS and traditional software licensing?",
            options: ["SaaS is free", "SaaS uses subscription model", "SaaS requires installation", "SaaS is slower"],
            correct: 1
        },
        {
            question: "Which cloud platform provides App Engine as a PaaS offering?",
            options: ["Microsoft Azure", "Amazon Web Services", "Google Cloud Platform", "IBM Cloud"],
            correct: 2
        },
        {
            question: "What is the benefit of multi-tenancy in SaaS applications?",
            options: ["Higher costs", "Resource sharing and cost efficiency", "Slower performance", "Security risks"],
            correct: 1
        },
        {
            question: "Which PaaS service provides managed databases for applications?",
            options: ["Compute services", "Storage services", "Database services", "Networking services"],
            correct: 2
        },
        {
            question: "What is the term for deploying applications without managing underlying infrastructure?",
            options: ["Infrastructure management", "Platform management", "Application management", "Serverless deployment"],
            correct: 3
        },
        {
            question: "Which SaaS category includes email and collaboration tools?",
            options: ["Productivity software", "Customer management", "Financial software", "Human resources"],
            correct: 0
        },
        {
            question: "What is the primary concern when adopting SaaS applications?",
            options: ["Performance", "Data security and privacy", "Cost savings", "Ease of use"],
            correct: 1
        },
        {
            question: "Which PaaS offering provides Azure App Service?",
            options: ["Google Cloud", "Amazon Web Services", "Microsoft Azure", "IBM Cloud"],
            correct: 2
        },
        {
            question: "What is the main advantage of cloud-native development?",
            options: ["Vendor lock-in", "Scalability and resilience", "Complex deployment", "High costs"],
            correct: 1
        },
        {
            question: "Which SaaS model allows customization of applications?",
            options: ["Generic SaaS", "Configurable SaaS", "Custom SaaS", "All of the above"],
            correct: 1
        },
        {
            question: "What is the role of API management in PaaS environments?",
            options: ["User interface design", "Application programming interface control", "Database management", "Network security"],
            correct: 1
        },
        {
            question: "Which cloud service model requires the least technical expertise?",
            options: ["Infrastructure as a Service", "Platform as a Service", "Software as a Service", "Function as a Service"],
            correct: 2
        },
        {
            question: "What is the term for applications that can run on multiple cloud platforms?",
            options: ["Cloud-agnostic", "Cloud-specific", "Hybrid applications", "Legacy applications"],
            correct: 0
        }
    ],
    4: [ // Unit 4: Cloud Security and Management (25 questions)
        {
            question: "What is the primary security concern in cloud computing?",
            options: ["Physical security", "Data privacy and protection", "Network speed", "Hardware costs"],
            correct: 1
        },
        {
            question: "Which cloud security model shares responsibility between provider and customer?",
            options: ["Provider-only security", "Customer-only security", "Shared responsibility model", "Third-party security"],
            correct: 2
        },
        {
            question: "What is encryption in the context of cloud security?",
            options: ["Data compression", "Converting data to unreadable format", "Data backup", "Access control"],
            correct: 1
        },
        {
            question: "Which authentication method uses multi-factor verification?",
            options: ["Single sign-on", "Multi-factor authentication", "Password-only", "Biometric only"],
            correct: 1
        },
        {
            question: "What is the purpose of identity and access management in cloud security?",
            options: ["Monitor performance", "Control who can access resources", "Manage hardware", "Configure networks"],
            correct: 1
        },
        {
            question: "Which compliance standard is commonly required for cloud data handling?",
            options: ["GDPR", "HTTP", "TCP/IP", "JSON"],
            correct: 0
        },
        {
            question: "What is the term for protecting data while it is being transmitted?",
            options: ["Data at rest encryption", "Data in transit encryption", "Data in use encryption", "Data backup encryption"],
            correct: 1
        },
        {
            question: "Which cloud security practice involves regular security assessments?",
            options: ["Monitoring", "Auditing", "Encryption", "Access control"],
            correct: 1
        },
        {
            question: "What is the purpose of cloud governance?",
            options: ["Cost management", "Policy enforcement and compliance", "Performance monitoring", "User management"],
            correct: 1
        },
        {
            question: "Which security measure protects against distributed denial of service attacks?",
            options: ["Firewall", "DDoS protection services", "Antivirus", "Encryption"],
            correct: 1
        },
        {
            question: "What is the role of a security information and event management system in cloud environments?",
            options: ["User management", "Real-time security monitoring", "Cost optimization", "Performance tuning"],
            correct: 1
        },
        {
            question: "Which cloud security principle involves granting minimum required access?",
            options: ["Role-based access control", "Least privilege principle", "Multi-factor authentication", "Single sign-on"],
            correct: 1
        },
        {
            question: "What is the purpose of data classification in cloud security?",
            options: ["Data compression", "Categorizing data by sensitivity level", "Data encryption", "Data backup"],
            correct: 1
        },
        {
            question: "Which compliance framework focuses on payment card data security?",
            options: ["HIPAA", "PCI DSS", "SOX", "FISMA"],
            correct: 1
        },
        {
            question: "What is the term for unauthorized access to cloud resources?",
            options: ["Data breach", "Denial of service", "Man-in-the-middle attack", "All of the above"],
            correct: 0
        },
        {
            question: "Which cloud management tool helps monitor resource utilization?",
            options: ["Load balancer", "Monitoring dashboard", "Security scanner", "Backup system"],
            correct: 1
        },
        {
            question: "What is the purpose of cloud access security brokers?",
            options: ["Network management", "Policy enforcement between users and cloud", "Data encryption", "Performance monitoring"],
            correct: 1
        },
        {
            question: "Which security measure protects data stored in cloud storage?",
            options: ["Data in transit encryption", "Data at rest encryption", "Network encryption", "Application encryption"],
            correct: 1
        },
        {
            question: "What is the main challenge of cloud security management?",
            options: ["Cost reduction", "Shared responsibility model complexity", "Performance improvement", "User convenience"],
            correct: 1
        },
        {
            question: "Which cloud security service provides threat detection and response?",
            options: ["Load balancer", "Web application firewall", "Security information and event management", "Identity provider"],
            correct: 2
        },
        {
            question: "What is the purpose of regular security audits in cloud environments?",
            options: ["Cost optimization", "Compliance verification and risk assessment", "Performance improvement", "User training"],
            correct: 1
        },
        {
            question: "Which security framework provides guidelines for cloud security?",
            options: ["ISO 27001", "TCP/IP", "HTTP", "JSON"],
            correct: 0
        },
        {
            question: "What is the role of a cloud security posture management tool?",
            options: ["Resource provisioning", "Continuous security assessment", "Cost monitoring", "Performance optimization"],
            correct: 1
        },
        {
            question: "Which type of cloud security focuses on protecting virtual machines?",
            options: ["Network security", "Host-based security", "Application security", "Data security"],
            correct: 1
        },
        {
            question: "What is the purpose of security groups in cloud platforms?",
            options: ["User management", "Network traffic control", "Data encryption", "Access logging"],
            correct: 1
        }
    ],
    5: [ // Unit 5: Advanced Cloud Technologies (25 questions)
        {
            question: "What is the primary characteristic of microservices architecture?",
            options: ["Monolithic structure", "Small, independent services", "Single large application", "Tight coupling"],
            correct: 1
        },
        {
            question: "Which cloud computing model executes code in response to events without managing servers?",
            options: ["Infrastructure as a Service", "Platform as a Service", "Software as a Service", "Function as a Service"],
            correct: 3
        },
        {
            question: "What is edge computing in cloud environments?",
            options: ["Centralized data processing", "Processing data near the source", "Remote data storage", "Cloud migration"],
            correct: 1
        },
        {
            question: "Which technology enables communication between microservices?",
            options: ["Tight coupling", "API gateways", "Monolithic architecture", "Single database"],
            correct: 1
        },
        {
            question: "What is the main benefit of serverless computing for developers?",
            options: ["Manage servers", "Focus on code, not infrastructure", "Handle scaling manually", "Configure networks"],
            correct: 1
        },
        {
            question: "Which cloud migration strategy involves moving applications as-is to the cloud?",
            options: ["Rehost", "Refactor", "Rebuild", "Replace"],
            correct: 0
        },
        {
            question: "What is the purpose of service mesh in microservices architecture?",
            options: ["Service discovery", "Traffic management and security", "Data storage", "User interface"],
            correct: 1
        },
        {
            question: "Which emerging technology processes data at the network edge?",
            options: ["Centralized computing", "Edge computing", "Cloud computing", "Fog computing"],
            correct: 1
        },
        {
            question: "What is the main advantage of container orchestration platforms like Kubernetes?",
            options: ["Manual scaling", "Automated deployment and scaling", "Single container management", "Limited scalability"],
            correct: 1
        },
        {
            question: "Which cloud migration approach involves modifying applications for cloud optimization?",
            options: ["Lift and shift", "Replatform", "Refactor", "Retire"],
            correct: 2
        },
        {
            question: "What is the term for deploying applications across multiple cloud providers?",
            options: ["Single cloud", "Multi-cloud", "Hybrid cloud", "Private cloud"],
            correct: 1
        },
        {
            question: "Which technology enables zero-downtime deployments in cloud environments?",
            options: ["Blue-green deployment", "Rolling deployment", "Canary deployment", "All of the above"],
            correct: 3
        },
        {
            question: "What is the purpose of cloud-native application design?",
            options: ["Traditional architecture", "Designed for cloud scalability and resilience", "Single server deployment", "Manual scaling"],
            correct: 1
        },
        {
            question: "Which serverless component executes functions in response to events?",
            options: ["Virtual machines", "Containers", "Functions", "Microservices"],
            correct: 2
        },
        {
            question: "What is the main benefit of edge computing for IoT applications?",
            options: ["Increased latency", "Reduced network bandwidth usage", "Centralized processing", "Higher costs"],
            correct: 1
        },
        {
            question: "Which cloud technology enables automatic scaling based on demand?",
            options: ["Manual scaling", "Auto-scaling", "Fixed scaling", "Limited scaling"],
            correct: 1
        },
        {
            question: "What is the role of API gateways in microservices architecture?",
            options: ["Data storage", "Traffic routing and management", "User interface", "Database management"],
            correct: 1
        },
        {
            question: "Which deployment strategy reduces risk by gradually rolling out changes?",
            options: ["Big bang deployment", "Canary deployment", "Rollback deployment", "Emergency deployment"],
            correct: 1
        },
        {
            question: "What is the term for applications that can automatically recover from failures?",
            options: ["Fragile applications", "Resilient applications", "Static applications", "Simple applications"],
            correct: 1
        },
        {
            question: "Which cloud technology enables running applications without infrastructure management?",
            options: ["Bare metal", "Virtual machines", "Serverless computing", "Physical servers"],
            correct: 2
        },
        {
            question: "What is the purpose of cloud bursting in hybrid cloud environments?",
            options: ["Data backup", "Dynamic resource scaling between clouds", "Security enhancement", "Cost reduction only"],
            correct: 1
        },
        {
            question: "Which technology enables communication between loosely coupled services?",
            options: ["Tight coupling", "Event-driven architecture", "Monolithic design", "Synchronous communication"],
            correct: 1
        },
        {
            question: "What is the main advantage of microservices over monolithic architecture?",
            options: ["Single deployment", "Independent scaling and development", "Complex communication", "Tight coupling"],
            correct: 1
        },
        {
            question: "Which cloud technology processes data closer to IoT devices?",
            options: ["Central cloud", "Edge computing", "Regional cloud", "Global cloud"],
            correct: 1
        },
        {
            question: "What is the term for automatically managing application lifecycles in the cloud?",
            options: ["Manual management", "Application lifecycle management", "Static deployment", "Fixed management"],
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
        if (cloudQuestions[unitId]) {
            cloudQuestions[unitId].forEach(question => {
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
