// Software Project Management and Information Systems Quiz Questions
const spmQuestions = {
    1: [ // Unit 1: Overview of Software Project Planning (20 questions)
        {
            question: "What is the primary goal of stepwise project planning?",
            options: ["Reduce costs only", "Ensure systematic project development", "Increase team size", "Skip documentation"],
            correct: 1
        },
        {
            question: "Which of the following is NOT a criterion for software project categorization?",
            options: ["Scope and Significance", "Level of Technology", "Team Experience", "Project Color"],
            correct: 3
        },
        {
            question: "What is the typical completion period for a small scale software project?",
            options: ["5-10 years", "1-2 years", "2-5 years", "10+ years"],
            correct: 1
        },
        {
            question: "Which step in stepwise project planning involves defining project goals and boundaries?",
            options: ["Project Scope and Feasibility", "Analyze Risk", "Define Required Resources", "Develop Schedule"],
            correct: 0
        },
        {
            question: "What is project scope in software engineering?",
            options: ["Project budget", "Project goals and boundaries", "Team size", "Technology stack"],
            correct: 1
        },
        {
            question: "Which component is essential for software development infrastructure?",
            options: ["Social media tools", "Integrated Development Environment", "Video games", "Music players"],
            correct: 1
        },
        {
            question: "What is resource allocation in software projects?",
            options: ["Assigning tasks randomly", "Distributing people, tools, and budget effectively", "Ignoring constraints", "Working overtime only"],
            correct: 1
        },
        {
            question: "Which estimation technique uses historical project data?",
            options: ["Base estimates on similar projects", "Always double the estimate", "Guess randomly", "Ignore past projects"],
            correct: 0
        },
        {
            question: "What is Lines of Code in software estimation?",
            options: ["Lines of Code", "Level of Complexity", "Lines of Communication", "Level of Cost"],
            correct: 0
        },
        {
            question: "What does COCOMO stand for?",
            options: ["Constructive Cost Model", "Common Object Code Model", "Computer Oriented Cost Method", "Code Construction Model"],
            correct: 0
        },
        {
            question: "Which COCOMO model is most detailed?",
            options: ["Basic", "Intermediate", "Detailed", "Simple"],
            correct: 2
        },
        {
            question: "What is function point analysis used for?",
            options: ["Code formatting", "Measuring software size", "Team management", "Bug tracking"],
            correct: 1
        },
        {
            question: "Which factor affects software project cost estimation?",
            options: ["Weather conditions", "Team experience and technology", "Office location", "Coffee quality"],
            correct: 1
        },
        {
            question: "What is the purpose of cost-benefit analysis?",
            options: ["Calculate coffee expenses", "Evaluate project financial viability", "Count team members", "Measure office space"],
            correct: 1
        },
        {
            question: "Which technology category involves cutting-edge innovations?",
            options: ["Conventional", "Non-conventional", "Low-tech", "Standard"],
            correct: 1
        },
        {
            question: "What is project feasibility analysis?",
            options: ["Checking if project is possible", "Counting lines of code", "Designing user interface", "Writing documentation"],
            correct: 0
        },
        {
            question: "Which resource category includes reusable software components?",
            options: ["People", "Commercial Off-The-Shelf components", "Development Environment", "Hardware only"],
            correct: 1
        },
        {
            question: "What is the role of project infrastructure?",
            options: ["Provide tools and environment", "Define project scope", "Manage team conflicts", "Handle customer complaints"],
            correct: 0
        },
        {
            question: "Which estimation approach uses simple decomposition?",
            options: ["Complex mathematical models", "Break down into manageable parts", "Random guessing", "Always use maximum values"],
            correct: 1
        },
        {
            question: "What is the benefit of empirical estimation models?",
            options: ["Always 100% accurate", "Based on historical data and parameters", "Never need updates", "Work for all project types"],
            correct: 1
        }
    ],
    2: [ // Unit 2: Project Scheduling & Software Configuration Management (20 questions)
        {
            question: "What is the first step in project scheduling?",
            options: ["Create Gantt chart", "Identify all activities", "Assign resources", "Monitor progress"],
            correct: 1
        },
        {
            question: "What is the relationship between people and effort in software projects?",
            options: ["Adding people always speeds up projects", "More people can slow down communication", "Team size doesn't matter", "Small teams are always better"],
            correct: 1
        },
        {
            question: "What is a task network in project scheduling?",
            options: ["Team communication network", "Graphical representation of task relationships", "Network hardware setup", "Internet connection diagram"],
            correct: 1
        },
        {
            question: "What does PERT stand for?",
            options: ["Project Evaluation and Review Technique", "Program Evaluation and Resource Tracking", "Project Execution and Resource Technique", "Program Execution and Review Technique"],
            correct: 0
        },
        {
            question: "What is the critical path in project scheduling?",
            options: ["The longest path through the network", "The shortest path", "The most expensive path", "The easiest path"],
            correct: 0
        },
        {
            question: "What is the main purpose of Gantt charts?",
            options: ["Track dependencies", "Visualize project timeline", "Calculate costs", "Manage team"],
            correct: 1
        },
        {
            question: "What is staffing in project management?",
            options: ["Firing team members", "Selecting and managing project team", "Payroll processing", "Office supplies"],
            correct: 1
        },
        {
            question: "What is Software Configuration Management (SCM)?",
            options: ["Managing software licenses", "Controlling changes to software deliverables", "Hardware configuration", "Network setup"],
            correct: 1
        },
        {
            question: "Why is SCM important?",
            options: ["Increases project chaos", "Controls access to prevent conflicts", "Makes development slower", "Eliminates the need for backups"],
            correct: 1
        },
        {
            question: "What is a configuration baseline?",
            options: ["Project deadline", "Agreed state of project deliverables", "Team meeting schedule", "Code formatting rules"],
            correct: 1
        },
        {
            question: "What is version control in SCM?",
            options: ["Controlling project versions", "Tracking changes to files over time", "Managing team versions", "Hardware versioning"],
            correct: 1
        },
        {
            question: "What is the purpose of change control in SCM?",
            options: ["Prevent all changes", "Manage change requests systematically", "Allow random changes", "Delete old versions"],
            correct: 1
        },
        {
            question: "What is interface control in SCM?",
            options: ["Controlling user interfaces", "Managing communication between components", "Hardware interfaces", "Network interfaces"],
            correct: 1
        },
        {
            question: "What is the benefit of automated builds in SCM?",
            options: ["Slower development", "Consistent and repeatable builds", "More manual work", "Random build results"],
            correct: 1
        },
        {
            question: "What is the purpose of team training in SCM implementation?",
            options: ["Reduce team knowledge", "Ensure team understands SCM processes", "Increase confusion", "Skip documentation"],
            correct: 1
        },
        {
            question: "What happens during system retirement in SCM?",
            options: ["Add new features", "Shut down obsolete systems", "Create new systems", "Update existing systems"],
            correct: 1
        },
        {
            question: "What is a change request in SCM?",
            options: ["Request for new features", "Formal proposal for modification", "Request for team changes", "Hardware upgrade request"],
            correct: 1
        },
        {
            question: "What is configuration auditing?",
            options: ["Checking code style", "Verifying correctness of configuration items", "Auditing team performance", "Financial auditing"],
            correct: 1
        },
        {
            question: "What is Activity-on-Node (AoN) in project scheduling?",
            options: ["Network representation with activities on nodes", "Activities on arrows", "Team activity tracking", "Resource allocation"],
            correct: 0
        },
        {
            question: "What is the PERT formula used for?",
            options: ["Calculating costs", "Estimating task duration", "Counting team members", "Measuring productivity"],
            correct: 1
        }
    ],
    3: [ // Unit 3: Information and Information Systems (20 questions)
        {
            question: "What is an Information System?",
            options: ["Only hardware", "Combination of people, hardware, software, and data", "Just software applications", "Only network connections"],
            correct: 1
        },
        {
            question: "Which of the following is a component of information systems?",
            options: ["Only computers", "People, hardware, software, telecommunications, databases", "Just policies", "Only procedures"],
            correct: 1
        },
        {
            question: "What is a Transaction Processing System?",
            options: ["System for processing transactions", "Word processing system", "Graphic design system", "Gaming system"],
            correct: 0
        },
        {
            question: "What does Transaction Processing System primarily handle?",
            options: ["Graphic design", "Business transactions like sales and purchases", "Video editing", "Music production"],
            correct: 1
        },
        {
            question: "What is batch processing in Transaction Processing System?",
            options: ["Real-time processing", "Processing transactions in groups", "Individual processing", "Random processing"],
            correct: 1
        },
        {
            question: "What is Office Automation System?",
            options: ["Factory automation", "Automating office tasks and information management", "Home automation", "Traffic control"],
            correct: 1
        },
        {
            question: "What is a Management Information System?",
            options: ["System for managing emails", "Computer-based system for management decision-making", "Hardware management", "Network management"],
            correct: 1
        },
        {
            question: "What is the primary function of Management Information System?",
            options: ["Process transactions", "Provide information for decision-making", "Automate office tasks", "Manage hardware"],
            correct: 1
        },
        {
            question: "What is a Decision Support System?",
            options: ["System that makes decisions automatically", "Interactive system for decision-making support", "Transaction processing", "Office automation"],
            correct: 1
        },
        {
            question: "What are the three phases of Decision Support System decision-making?",
            options: ["Plan, Do, Check", "Intelligence, Design, Choice", "Input, Process, Output", "Start, Middle, End"],
            correct: 1
        },
        {
            question: "What is a Group Decision Support System?",
            options: ["Individual decision making", "Facilitates group decision-making processes", "Hardware support", "Network support"],
            correct: 1
        },
        {
            question: "What is an Expert System?",
            options: ["System for experts only", "Artificial Intelligence system that mimics human expertise", "Simple database", "Word processor"],
            correct: 1
        },
        {
            question: "What are the main components of an Expert System?",
            options: ["Knowledge Base and Inference Engine", "Only database", "Only algorithms", "Only user interface"],
            correct: 0
        },
        {
            question: "What is an Executive Support System?",
            options: ["Entry-level support", "Strategic information for top executives", "Technical support", "Customer support"],
            correct: 1
        },
        {
            question: "What type of information do executives need most?",
            options: ["Only operational data", "Strategic, forward-looking information", "Only historical data", "Only technical details"],
            correct: 1
        },
        {
            question: "What is real-time processing in Transaction Processing System?",
            options: ["Processing with delays", "Immediate transaction processing", "Batch processing", "Manual processing"],
            correct: 1
        },
        {
            question: "What is the purpose of database maintenance in Transaction Processing System?",
            options: ["Delete all data", "Keep data accurate and up-to-date", "Add random data", "Ignore data changes"],
            correct: 1
        },
        {
            question: "What does Management Information System convert data into?",
            options: ["More data", "Useful information for decisions", "Pictures", "Sounds"],
            correct: 1
        },
        {
            question: "What is the intelligence phase in Decision Support System?",
            options: ["Making the final choice", "Identifying and defining problems", "Designing solutions", "Implementation"],
            correct: 1
        },
        {
            question: "What feature makes Group Decision Support System different from Decision Support System?",
            options: ["Individual use", "Group decision-making support", "No models", "No data analysis"],
            correct: 1
        }
    ],
    4: [ // Unit 4: Concepts of Planning & Control (20 questions)
        {
            question: "What is organizational planning?",
            options: ["Random decision making", "Systematic process of setting goals and strategies", "Ignoring future", "Only short-term focus"],
            correct: 1
        },
        {
            question: "What are the main phases of the planning process?",
            options: ["Start and End", "Planning, Implementation, Control", "Only planning", "Only control"],
            correct: 1
        },
        {
            question: "What is computational support for planning?",
            options: ["Manual calculations only", "Computer systems and tools for planning", "No technology", "Only paper-based"],
            correct: 1
        },
        {
            question: "What are characteristics of control processes?",
            options: ["No standards", "Defined standards, measurement, correction", "Random actions", "Ignore deviations"],
            correct: 1
        },
        {
            question: "What is the nature of control in organizations?",
            options: ["Only financial control", "Comprehensive control of all functions", "Only operational control", "Ignore control"],
            correct: 1
        },
        {
            question: "What is Information System Planning?",
            options: ["Planning without systems", "Strategic planning for information systems", "Only technical planning", "Ignore IS"],
            correct: 1
        },
        {
            question: "What are the phases of Information Systems development?",
            options: ["Only coding", "Analysis, Design, Testing, Implementation", "Only design", "Skip testing"],
            correct: 1
        },
        {
            question: "What is manufacturing information systems used for?",
            options: ["Only marketing", "Production planning and control", "Only sales", "Ignore manufacturing"],
            correct: 1
        },
        {
            question: "What are service systems in Information Systems context?",
            options: ["Manufacturing only", "Systems for service industries", "No difference", "Only retail"],
            correct: 1
        },
        {
            question: "What is the role of Information Systems in accounting?",
            options: ["Manual bookkeeping", "Automated financial reporting and analysis", "No automation", "Only cash handling"],
            correct: 1
        },
        {
            question: "How do Information Systems support production and manufacturing?",
            options: ["Manual processes", "Inventory control, production planning", "No support", "Only design"],
            correct: 1
        },
        {
            question: "What is the purpose of Information Systems in marketing?",
            options: ["Ignore customers", "Customer analysis, sales forecasting", "Only advertising", "No analysis"],
            correct: 1
        },
        {
            question: "How do Information Systems help Human Resource Management functions?",
            options: ["Manual records", "Employee management, payroll, recruitment", "No automation", "Only training"],
            correct: 1
        },
        {
            question: "What are Information Systems used for in hospitals?",
            options: ["No technology", "Patient records, appointment scheduling", "Only billing", "Manual processes"],
            correct: 1
        },
        {
            question: "How do Information Systems support hotel operations?",
            options: ["Manual booking", "Reservation systems, guest management", "No systems", "Only cleaning"],
            correct: 1
        },
        {
            question: "What banking functions use Information Systems?",
            options: ["Only cash", "Account management, ATM operations, online banking", "No automation", "Manual ledgers"],
            correct: 1
        },
        {
            question: "What is the goal of Information Systems planning?",
            options: ["Random systems", "Align Information Systems with business objectives", "Ignore business needs", "Only technical systems"],
            correct: 1
        },
        {
            question: "What does Information Systems evaluation involve?",
            options: ["No assessment", "Measuring system effectiveness and Return on Investment", "Only cost counting", "Ignore results"],
            correct: 1
        },
        {
            question: "What is the importance of Information Systems implementation?",
            options: ["Skip it", "Successful deployment and user adoption", "Only installation", "No training"],
            correct: 1
        },
        {
            question: "How do Information Systems support organizational control?",
            options: ["No control", "Monitoring performance, decision support", "Only manual control", "Ignore metrics"],
            correct: 1
        }
    ],
    5: [ // Unit 5: Enterprise Resources Planning (ERP) (20 questions)
        {
            question: "What does ERP stand for?",
            options: ["Enterprise Resource Planning", "Electronic Resource Processing", "Economic Resource Planning", "Enterprise Record Processing"],
            correct: 0
        },
        {
            question: "What is the main purpose of ERP systems?",
            options: ["Only accounting", "Integrate all business processes", "Only inventory", "Only sales"],
            correct: 1
        },
        {
            question: "What is Supply Chain Management (SCM)?",
            options: ["Only purchasing", "Managing flow of goods and services", "Only manufacturing", "Only distribution"],
            correct: 1
        },
        {
            question: "What does CRM stand for?",
            options: ["Customer Resource Management", "Customer Relationship Management", "Customer Record Management", "Customer Revenue Management"],
            correct: 1
        },
        {
            question: "What is E-Commerce in ERP context?",
            options: ["Internal only", "Online business transactions", "No online", "Only physical stores"],
            correct: 1
        },
        {
            question: "What are key ERP features?",
            options: ["Single function", "Integrated modules, real-time data", "No integration", "Manual processes"],
            correct: 1
        },
        {
            question: "What criteria are used for ERP selection?",
            options: ["Color preference", "Business needs, cost, scalability", "Random choice", "Only price"],
            correct: 1
        },
        {
            question: "What are advantages of ERP implementation?",
            options: ["Increased complexity", "Improved efficiency, data integration", "Higher costs only", "More silos"],
            correct: 1
        },
        {
            question: "What challenges exist in ERP implementation?",
            options: ["Too simple", "High cost, resistance to change, complexity", "No challenges", "Always successful"],
            correct: 1
        },
        {
            question: "What is the role of SCM in ERP?",
            options: ["Ignore suppliers", "Manage procurement to delivery", "Only internal", "No integration"],
            correct: 1
        },
        {
            question: "What does CRM focus on?",
            options: ["Only products", "Customer interactions and relationships", "Only sales", "Ignore customers"],
            correct: 1
        },
        {
            question: "What is B2B E-Commerce?",
            options: ["Consumer only", "Business-to-business transactions", "Only B2C", "No business"],
            correct: 1
        },
        {
            question: "What is B2C E-Commerce?",
            options: ["Business only", "Business-to-consumer transactions", "Only B2B", "No commerce"],
            correct: 1
        },
        {
            question: "What is C2C E-Commerce?",
            options: ["Company only", "Consumer-to-consumer transactions", "Only B2B", "No peer trading"],
            correct: 1
        },
        {
            question: "What are ERP implementation risks?",
            options: ["Too easy", "Project failure, budget overruns", "No risks", "Always successful"],
            correct: 1
        },
        {
            question: "What is ERP customization?",
            options: ["Standard only", "Modifying ERP to fit business needs", "No changes", "Delete features"],
            correct: 1
        },
        {
            question: "What is the benefit of integrated ERP systems?",
            options: ["Data silos", "Single source of truth", "Multiple databases", "Manual updates"],
            correct: 1
        },
        {
            question: "What is the role of ERP in decision making?",
            options: ["No support", "Real-time data for better decisions", "Delayed information", "No data access"],
            correct: 1
        },
        {
            question: "What is ERP system maintenance?",
            options: ["Never update", "Regular updates and support", "Ignore system", "Delete system"],
            correct: 1
        },
        {
            question: "What is the future of ERP systems?",
            options: ["Becoming obsolete", "Cloud-based, Artificial Intelligence integration, mobile access", "No changes", "Less integration"],
            correct: 1
        }
    ]
};

// Quiz configuration based on selected units
function getQuestionDistribution(selectedUnits) {
    const distribution = { 1: 15, 2: 20, 3: 25, 4: 30, 5: 40 };
    return distribution[selectedUnits.length] || 15;
}

function generateQuizQuestions(selectedUnits) {
    let allQuestions = [];
    let totalQuestions = getQuestionDistribution(selectedUnits);
    let questionsPerUnit = Math.floor(totalQuestions / selectedUnits.length);
    let extraQuestions = totalQuestions % selectedUnits.length;

    // Collect questions from selected units
    selectedUnits.forEach(unit => {
        const unitQuestions = spmQuestions[unit];
        if (unitQuestions) {
            allQuestions.push(...unitQuestions);
        }
    });

    // Shuffle all questions
    for (let i = allQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
    }

    // Return required number of questions
    return allQuestions.slice(0, totalQuestions);
}

// Make available globally
if (typeof window !== 'undefined') {
    window.generateQuizQuestions = generateQuizQuestions;
}
