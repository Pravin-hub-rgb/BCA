// quiz/subjects/se/questions.js
const seQuestions = {
    1: [ // Unit 1: Introduction to Software Engineering (20 questions)
        {
            question: "What is the primary goal of software engineering?",
            options: ["Write code quickly", "Develop high-quality software systematically", "Maximize profits", "Minimize development time"],
            correct: 1
        },
        {
            question: "Which characteristic describes software that can be easily modified?",
            options: ["Reliability", "Maintainability", "Efficiency", "Usability"],
            correct: 1
        },
        {
            question: "What was the software crisis of the 1960s and 1970s characterized by?",
            options: ["Too much software", "Poor quality and cost overruns", "Too many programmers", "Lack of computers"],
            correct: 1
        },
        {
            question: "Which layer of software engineering includes programming languages and tools?",
            options: ["Process layer", "Methods layer", "Tools layer", "Quality focus layer"],
            correct: 2
        },
        {
            question: "What is the main principle of software engineering that emphasizes building the right product?",
            options: ["Maintainability", "Correctness", "Productivity", "Quality assurance"],
            correct: 1
        },
        {
            question: "Which software characteristic ensures the software performs its intended functions?",
            options: ["Robustness", "Correctness", "Efficiency", "Integrity"],
            correct: 1
        },
        {
            question: "What is the layered technology approach in software engineering?",
            options: ["Hardware layers", "Software development phases", "Technology stack layers", "Quality assurance layers"],
            correct: 2
        },
        {
            question: "Which principle states that software should be developed using engineering concepts?",
            options: ["Abstraction principle", "Modularity principle", "Engineering approach", "Quality assurance principle"],
            correct: 2
        },
        {
            question: "What does the term 'software evolution' refer to?",
            options: ["Initial development", "Changes after release", "Testing phase", "Documentation"],
            correct: 1
        },
        {
            question: "Which software engineering principle emphasizes managing complexity?",
            options: ["Abstraction", "Modularity", "Hierarchy", "All of the above"],
            correct: 3
        },
        {
            question: "What is the main challenge addressed by software engineering?",
            options: ["Hardware limitations", "Software complexity and quality", "User training", "Network issues"],
            correct: 1
        },
        {
            question: "Which characteristic ensures software works correctly under adverse conditions?",
            options: ["Reliability", "Robustness", "Efficiency", "Usability"],
            correct: 1
        },
        {
            question: "What is the process layer in software engineering?",
            options: ["Programming tools", "Development methodology", "Quality management", "Documentation tools"],
            correct: 1
        },
        {
            question: "Which principle states that software should be developed incrementally?",
            options: ["Iterative development", "Waterfall approach", "Big bang approach", "Spiral approach"],
            correct: 0
        },
        {
            question: "What is the methods layer in software engineering?",
            options: ["Development tools", "Programming languages", "Technical methods and notations", "Quality standards"],
            correct: 2
        },
        {
            question: "Which software characteristic refers to how well it performs its functions?",
            options: ["Performance", "Efficiency", "Effectiveness", "Reliability"],
            correct: 2
        },
        {
            question: "What is the quality focus layer in software engineering?",
            options: ["Development methods", "Quality assurance techniques", "Programming tools", "Documentation standards"],
            correct: 1
        },
        {
            question: "Which principle emphasizes that software should be understandable and modifiable?",
            options: ["Correctness", "Maintainability", "Reliability", "Efficiency"],
            correct: 1
        },
        {
            question: "What was the main reason for the software crisis?",
            options: ["Lack of programmers", "Poor development practices", "Hardware limitations", "User requirements"],
            correct: 1
        },
        {
            question: "Which software engineering principle deals with breaking down complex problems?",
            options: ["Abstraction", "Modularity", "Hierarchy", "Information hiding"],
            correct: 1
        }
    ],
    2: [ // Unit 2: Software Development Life Cycle Models (20 questions)
        {
            question: "Which software development model follows a sequential approach with distinct phases?",
            options: ["Agile model", "Spiral model", "Waterfall model", "Incremental model"],
            correct: 2
        },
        {
            question: "What is the main disadvantage of the waterfall model?",
            options: ["Too flexible", "Difficulty in accommodating changes", "High customer involvement", "Fast development"],
            correct: 1
        },
        {
            question: "Which model delivers software in increments with customer feedback?",
            options: ["Waterfall", "Spiral", "Incremental", "Prototyping"],
            correct: 2
        },
        {
            question: "What does the spiral model emphasize in software development?",
            options: ["Speed", "Risk assessment", "Cost reduction", "Documentation"],
            correct: 1
        },
        {
            question: "Which agile methodology uses time-boxed iterations called sprints?",
            options: ["Extreme Programming", "Scrum", "Crystal", "Dynamic Systems Development Method"],
            correct: 1
        },
        {
            question: "What is the main principle of agile software development?",
            options: ["Heavy documentation", "Embracing change", "Sequential development", "Large teams"],
            correct: 1
        },
        {
            question: "Which model combines elements of waterfall and prototyping?",
            options: ["Incremental", "Spiral", "Evolutionary", "Iterative"],
            correct: 0
        },
        {
            question: "What is the primary focus of Extreme Programming (XP)?",
            options: ["Documentation", "Programming practices", "Project management", "Quality assurance"],
            correct: 1
        },
        {
            question: "Which model is best suited for projects with high uncertainty?",
            options: ["Waterfall", "Spiral", "V-shaped", "Prototyping"],
            correct: 1
        },
        {
            question: "What is the main advantage of incremental development?",
            options: ["Complete system at once", "Early delivery of working software", "Less customer involvement", "Rigid requirements"],
            correct: 1
        },
        {
            question: "Which agile practice involves writing automated tests before code?",
            options: ["Test-Driven Development", "Behavior-Driven Development", "Acceptance Test-Driven Development", "Exploratory Testing"],
            correct: 0
        },
        {
            question: "What is the V-model primarily used for?",
            options: ["Requirements gathering", "Testing integration", "Project planning", "Risk management"],
            correct: 1
        },
        {
            question: "Which model uses evolutionary development with multiple iterations?",
            options: ["Waterfall", "Spiral", "Prototyping", "RAD"],
            correct: 2
        },
        {
            question: "What is the main characteristic of agile methodologies?",
            options: ["Predictive planning", "Adaptive planning", "Fixed scope", "Long iterations"],
            correct: 1
        },
        {
            question: "Which model emphasizes risk analysis at each iteration?",
            options: ["Waterfall", "Incremental", "Spiral", "Agile"],
            correct: 2
        },
        {
            question: "What is pair programming in Extreme Programming?",
            options: ["Two programmers working together", "Code review process", "Testing approach", "Documentation method"],
            correct: 0
        },
        {
            question: "Which development model uses throwaway prototypes?",
            options: ["Evolutionary prototyping", "Incremental prototyping", "Extreme prototyping", "Agile prototyping"],
            correct: 0
        },
        {
            question: "What is the main benefit of the spiral model?",
            options: ["Fast development", "Risk management", "Simple process", "Low cost"],
            correct: 1
        },
        {
            question: "Which agile principle values working software over documentation?",
            options: ["Individuals and interactions", "Comprehensive documentation", "Contract negotiation", "Following a plan"],
            correct: 0
        },
        {
            question: "What is the RAD model designed for?",
            options: ["Large systems", "Small projects", "High-speed development", "Complex requirements"],
            correct: 2
        }
    ],
    3: [ // Unit 3: Requirements Engineering and Analysis (25 questions)
        {
            question: "What is the primary goal of requirements engineering?",
            options: ["Write code", "Understand and document requirements", "Test software", "Deploy software"],
            correct: 1
        },
        {
            question: "Which technique involves interviewing stakeholders to gather requirements?",
            options: ["Prototyping", "Interviews", "Questionnaires", "Document analysis"],
            correct: 1
        },
        {
            question: "What are functional requirements?",
            options: ["Performance criteria", "System functions and features", "User interface requirements", "Security requirements"],
            correct: 1
        },
        {
            question: "Which requirements specify system performance and constraints?",
            options: ["Functional requirements", "Non-functional requirements", "User requirements", "System requirements"],
            correct: 1
        },
        {
            question: "What is requirements validation?",
            options: ["Gathering requirements", "Checking requirements quality", "Documenting requirements", "Prioritizing requirements"],
            correct: 1
        },
        {
            question: "Which UML diagram is used for representing use cases?",
            options: ["Class diagram", "Sequence diagram", "Use case diagram", "Activity diagram"],
            correct: 2
        },
        {
            question: "What is a use case in requirements engineering?",
            options: ["System function", "User interaction scenario", "Data flow", "Process flow"],
            correct: 1
        },
        {
            question: "Which technique uses workshops to gather requirements from multiple stakeholders?",
            options: ["Interviews", "Joint Application Development", "Questionnaires", "Observation"],
            correct: 1
        },
        {
            question: "What is requirements traceability?",
            options: ["Following requirement changes", "Linking requirements to design and code", "Validating requirements", "Prioritizing requirements"],
            correct: 1
        },
        {
            question: "Which requirements specify system availability and reliability?",
            options: ["Functional", "Performance", "Reliability", "Usability"],
            correct: 2
        },
        {
            question: "What is the purpose of requirements prioritization?",
            options: ["Delete requirements", "Rank requirements by importance", "Add more requirements", "Change requirements"],
            correct: 1
        },
        {
            question: "Which technique involves studying existing systems to understand requirements?",
            options: ["Brainstorming", "Document analysis", "Prototyping", "Role playing"],
            correct: 1
        },
        {
            question: "What are system requirements?",
            options: ["User needs", "Detailed system specifications", "Business requirements", "Functional requirements"],
            correct: 1
        },
        {
            question: "Which requirement type specifies security and privacy needs?",
            options: ["Functional", "Performance", "Security", "Usability"],
            correct: 2
        },
        {
            question: "What is requirements elicitation?",
            options: ["Writing requirements", "Gathering requirements from stakeholders", "Testing requirements", "Implementing requirements"],
            correct: 1
        },
        {
            question: "Which UML diagram shows the flow of activities?",
            options: ["Use case diagram", "Class diagram", "Activity diagram", "State diagram"],
            correct: 2
        },
        {
            question: "What is the purpose of requirements reviews?",
            options: ["Gather requirements", "Validate and verify requirements", "Implement requirements", "Test requirements"],
            correct: 1
        },
        {
            question: "Which technique uses scenarios to understand user interactions?",
            options: ["Use cases", "Data flow diagrams", "Entity relationship diagrams", "Decision tables"],
            correct: 0
        },
        {
            question: "What is requirements negotiation?",
            options: ["Gathering requirements", "Resolving conflicting requirements", "Documenting requirements", "Testing requirements"],
            correct: 1
        },
        {
            question: "Which requirements specify user interface characteristics?",
            options: ["Functional", "Performance", "Usability", "Reliability"],
            correct: 2
        },
        {
            question: "What is the purpose of requirements management?",
            options: ["Initial gathering", "Handling changes throughout development", "Final validation", "Implementation"],
            correct: 1
        },
        {
            question: "Which technique involves creating mockups to understand requirements?",
            options: ["Prototyping", "Interviews", "Questionnaires", "Observation"],
            correct: 0
        },
        {
            question: "What are user requirements?",
            options: ["Technical specifications", "User needs in natural language", "System architecture", "Database design"],
            correct: 1
        },
        {
            question: "Which requirement specifies response time and throughput?",
            options: ["Functional", "Performance", "Reliability", "Portability"],
            correct: 1
        },
        {
            question: "What is requirements specification?",
            options: ["Gathering requirements", "Documenting requirements formally", "Testing requirements", "Implementing requirements"],
            correct: 1
        }
    ],
    4: [ // Unit 4: Software Design and Architecture (25 questions)
        {
            question: "What is the primary goal of software design?",
            options: ["Write code", "Create system structure and behavior", "Test software", "Deploy software"],
            correct: 1
        },
        {
            question: "Which design principle emphasizes breaking down complex systems into smaller parts?",
            options: ["Abstraction", "Modularity", "Hierarchy", "Encapsulation"],
            correct: 1
        },
        {
            question: "What is architectural design concerned with?",
            options: ["Code implementation", "High-level system structure", "User interface details", "Database design"],
            correct: 1
        },
        {
            question: "Which design pattern provides a way to access elements of a collection sequentially?",
            options: ["Factory pattern", "Observer pattern", "Iterator pattern", "Singleton pattern"],
            correct: 2
        },
        {
            question: "What is the purpose of component-level design?",
            options: ["System architecture", "Detailed design of components", "User interface design", "Database design"],
            correct: 1
        },
        {
            question: "Which architectural style organizes components hierarchically?",
            options: ["Layered architecture", "Client-server architecture", "Pipe and filter", "Event-driven architecture"],
            correct: 0
        },
        {
            question: "What is the main benefit of modular design?",
            options: ["Faster coding", "Easier maintenance and testing", "Better performance", "Lower costs"],
            correct: 1
        },
        {
            question: "Which design principle hides implementation details?",
            options: ["Abstraction", "Information hiding", "Modularity", "Hierarchy"],
            correct: 1
        },
        {
            question: "What is user interface design concerned with?",
            options: ["System architecture", "Code implementation", "User interaction design", "Database design"],
            correct: 2
        },
        {
            question: "Which design pattern ensures only one instance of a class exists?",
            options: ["Factory pattern", "Observer pattern", "Iterator pattern", "Singleton pattern"],
            correct: 3
        },
        {
            question: "What is the purpose of design patterns?",
            options: ["Speed up coding", "Provide proven solutions to common problems", "Reduce code size", "Improve performance"],
            correct: 1
        },
        {
            question: "Which architectural style is commonly used for web applications?",
            options: ["Layered", "Model-View-Controller", "Pipe and filter", "Blackboard"],
            correct: 1
        },
        {
            question: "What is coupling in software design?",
            options: ["Module size", "Interdependence between modules", "Code complexity", "Execution speed"],
            correct: 1
        },
        {
            question: "Which design principle aims to reduce coupling?",
            options: ["High cohesion", "Low coupling", "Abstraction", "Modularity"],
            correct: 1
        },
        {
            question: "What is cohesion in software design?",
            options: ["Module interdependence", "Relatedness of module elements", "Code complexity", "Execution speed"],
            correct: 1
        },
        {
            question: "Which design pattern allows objects to be notified of changes?",
            options: ["Factory pattern", "Observer pattern", "Iterator pattern", "Singleton pattern"],
            correct: 1
        },
        {
            question: "What is the purpose of interface design in software design?",
            options: ["Code implementation", "User interaction specification", "Database design", "System architecture"],
            correct: 1
        },
        {
            question: "Which architectural style processes data through a series of transformations?",
            options: ["Layered", "Client-server", "Pipe and filter", "Event-driven"],
            correct: 2
        },
        {
            question: "What is the main goal of architectural design?",
            options: ["Code writing", "System structure definition", "User interface design", "Testing strategy"],
            correct: 1
        },
        {
            question: "Which design principle emphasizes designing for change?",
            options: ["Open-closed principle", "Single responsibility", "Dependency inversion", "Interface segregation"],
            correct: 0
        },
        {
            question: "What is component-based design?",
            options: ["Designing from scratch", "Using pre-built components", "Writing all code", "Manual design"],
            correct: 1
        },
        {
            question: "Which design pattern creates objects without specifying exact classes?",
            options: ["Factory pattern", "Observer pattern", "Iterator pattern", "Singleton pattern"],
            correct: 0
        },
        {
            question: "What is the purpose of design reviews?",
            options: ["Write code", "Evaluate design quality", "Test software", "Deploy software"],
            correct: 1
        },
        {
            question: "Which architectural style separates data and processing?",
            options: ["Layered", "Client-server", "Repository", "Event-driven"],
            correct: 2
        },
        {
            question: "What is the main benefit of good software design?",
            options: ["Faster initial development", "Easier maintenance and evolution", "Lower development costs", "Better performance"],
            correct: 1
        }
    ],
    5: [ // Unit 5: Software Testing and Quality Assurance (25 questions)
        {
            question: "What is the primary goal of software testing?",
            options: ["Write code", "Find defects in software", "Deploy software", "Document software"],
            correct: 1
        },
        {
            question: "Which testing approach tests individual components in isolation?",
            options: ["Integration testing", "Unit testing", "System testing", "Acceptance testing"],
            correct: 1
        },
        {
            question: "What is white-box testing?",
            options: ["Testing without knowing code", "Testing with knowledge of code structure", "Testing user interface", "Testing performance"],
            correct: 1
        },
        {
            question: "Which testing technique uses equivalence classes and boundary values?",
            options: ["White-box testing", "Black-box testing", "Gray-box testing", "Acceptance testing"],
            correct: 1
        },
        {
            question: "What is integration testing?",
            options: ["Testing individual units", "Testing combined components", "Testing entire system", "Testing user acceptance"],
            correct: 1
        },
        {
            question: "Which testing level validates the entire system against requirements?",
            options: ["Unit testing", "Integration testing", "System testing", "Component testing"],
            correct: 2
        },
        {
            question: "What is the purpose of regression testing?",
            options: ["Test new features", "Ensure existing functionality still works", "Performance testing", "Security testing"],
            correct: 1
        },
        {
            question: "Which testing technique covers all possible paths through the code?",
            options: ["Statement coverage", "Branch coverage", "Path coverage", "Condition coverage"],
            correct: 2
        },
        {
            question: "What is acceptance testing?",
            options: ["Developer testing", "User acceptance testing", "Integration testing", "Unit testing"],
            correct: 1
        },
        {
            question: "Which quality assurance activity involves code reviews?",
            options: ["Testing", "Static analysis", "Dynamic analysis", "Performance testing"],
            correct: 1
        },
        {
            question: "What is the main purpose of software maintenance?",
            options: ["Add new features", "Fix defects and adapt to changes", "Rewrite software", "Delete software"],
            correct: 1
        },
        {
            question: "Which testing approach focuses on code structure and logic?",
            options: ["Black-box testing", "White-box testing", "Gray-box testing", "Acceptance testing"],
            correct: 1
        },
        {
            question: "What is the difference between error, defect, and failure?",
            options: ["No difference", "Human mistake, flaw in software, observable incorrect behavior", "Same terms", "Testing terms"],
            correct: 1
        },
        {
            question: "Which testing technique uses decision tables?",
            options: ["Equivalence partitioning", "Boundary value analysis", "Cause-effect graphing", "State transition testing"],
            correct: 2
        },
        {
            question: "What is the purpose of test planning?",
            options: ["Write code", "Define testing scope and approach", "Deploy software", "Document requirements"],
            correct: 1
        },
        {
            question: "Which maintenance type involves adapting software to new environments?",
            options: ["Corrective", "Adaptive", "Perfective", "Preventive"],
            correct: 1
        },
        {
            question: "What is risk-based testing?",
            options: ["Testing based on code size", "Testing based on risk assessment", "Random testing", "Complete testing"],
            correct: 1
        },
        {
            question: "Which testing metric measures the proportion of executable statements exercised?",
            options: ["Branch coverage", "Statement coverage", "Path coverage", "Condition coverage"],
            correct: 1
        },
        {
            question: "What is the purpose of configuration management in software engineering?",
            options: ["Code writing", "Managing changes to software artifacts", "Testing software", "Deploying software"],
            correct: 1
        },
        {
            question: "Which quality model defines six sigma quality levels?",
            options: ["CMMI", "ISO 9001", "Six Sigma", "ISO 9126"],
            correct: 2
        },
        {
            question: "What is the main goal of software quality assurance?",
            options: ["Speed up development", "Ensure quality standards are met", "Reduce costs", "Increase features"],
            correct: 1
        },
        {
            question: "Which testing technique is used to test software with invalid inputs?",
            options: ["Positive testing", "Negative testing", "Regression testing", "Performance testing"],
            correct: 1
        },
        {
            question: "What is the purpose of test automation?",
            options: ["Manual testing", "Repeatable test execution", "One-time testing", "Random testing"],
            correct: 1
        },
        {
            question: "Which maintenance activity improves software performance?",
            options: ["Corrective", "Adaptive", "Perfective", "Preventive"],
            correct: 2
        },
        {
            question: "What is the Capability Maturity Model Integration (CMMI)?",
            options: ["Testing model", "Process improvement model", "Quality model", "Risk model"],
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
        if (seQuestions[unitId]) {
            seQuestions[unitId].forEach(question => {
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
