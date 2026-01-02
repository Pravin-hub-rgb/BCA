// Web Technologies Quiz Questions
const webQuestions = {
    1: [ // Unit 1: Web Technology Foundations (20 questions)
        {
            question: "What was Gopher in the context of early internet development?",
            options: ["A web browser", "An early internet protocol for distributing documents", "A search engine", "An email client"],
            correct: 1
        },
        {
            question: "Which protocol is used for transferring hypertext documents on the World Wide Web?",
            options: ["Simple Mail Transfer Protocol", "File Transfer Protocol", "Hypertext Transfer Protocol", "Post Office Protocol"],
            correct: 2
        },
        {
            question: "What does SMTP stand for in email communication?",
            options: ["Simple Message Transfer Protocol", "Simple Mail Transfer Protocol", "Secure Mail Transfer Protocol", "Standard Mail Transfer Protocol"],
            correct: 1
        },
        {
            question: "Which protocol is used for retrieving email messages from a mail server?",
            options: ["Hypertext Transfer Protocol", "Simple Mail Transfer Protocol", "Post Office Protocol version 3", "Internet Message Access Protocol"],
            correct: 2
        },
        {
            question: "What is the purpose of Multipurpose Internet Mail Extensions (MIME)?",
            options: ["Web page formatting", "Encoding non-text content in email", "Domain name resolution", "File compression"],
            correct: 1
        },
        {
            question: "Which protocol provides access to both new and stored email messages?",
            options: ["Post Office Protocol", "Simple Mail Transfer Protocol", "Internet Message Access Protocol", "Hypertext Transfer Protocol"],
            correct: 2
        },
        {
            question: "What is the primary function of File Transfer Protocol (FTP)?",
            options: ["Web browsing", "Email communication", "File transfer between computers", "Domain name resolution"],
            correct: 2
        },
        {
            question: "What does Telnet protocol allow users to do?",
            options: ["Transfer files", "Send emails", "Access remote computers interactively", "Browse web pages"],
            correct: 2
        },
        {
            question: "What is load balancing in web server architecture?",
            options: ["File compression", "Distributing network traffic across multiple servers", "Domain name resolution", "Email routing"],
            correct: 1
        },
        {
            question: "What is the difference between a web server and an application server?",
            options: ["Web servers handle static content, application servers handle dynamic content", "Web servers are hardware, application servers are software", "Web servers are for local networks, application servers are for internet", "There is no difference"],
            correct: 0
        },
        {
            question: "What is an Internet Service Provider (ISP)?",
            options: ["A web browser", "A company that provides internet access", "A web server", "An email client"],
            correct: 1
        },
        {
            question: "What does URL stand for in web addressing?",
            options: ["Universal Resource Locator", "Uniform Resource Locator", "Universal Reference Link", "Uniform Reference Locator"],
            correct: 1
        },
        {
            question: "What is the Domain Name System (DNS) used for?",
            options: ["File transfer", "Converting domain names to IP addresses", "Email routing", "Web page formatting"],
            correct: 1
        },
        {
            question: "What is a static website?",
            options: ["A website that changes content frequently", "A website with fixed content that doesn't change", "A website that requires user login", "A website with animations"],
            correct: 1
        },
        {
            question: "What is a dynamic website?",
            options: ["A website with fixed content", "A website that generates content based on user interaction", "A website that never changes", "A website without images"],
            correct: 1
        },
        {
            question: "What is the difference between a website and a web application?",
            options: ["Websites are static, web applications are dynamic", "Websites provide information, web applications allow user interaction", "Websites are free, web applications cost money", "There is no difference"],
            correct: 1
        },
        {
            question: "Which protocol was used before the World Wide Web for document sharing?",
            options: ["Hypertext Transfer Protocol", "Gopher protocol", "File Transfer Protocol", "Simple Mail Transfer Protocol"],
            correct: 1
        },
        {
            question: "What is the primary function of a web server?",
            options: ["Create web pages", "Store and serve web content to clients", "Browse websites", "Send emails"],
            correct: 1
        },
        {
            question: "What is the purpose of an application server?",
            options: ["Store static files", "Execute application logic and process dynamic content", "Handle network routing", "Manage email services"],
            correct: 1
        },
        {
            question: "Which component is responsible for translating domain names to IP addresses?",
            options: ["Web server", "Application server", "Domain Name System", "Internet Service Provider"],
            correct: 2
        }
    ],
    2: [ // Unit 2: HTML & CSS (20 questions)
        {
            question: "What does HTML stand for?",
            options: ["Hypertext Markup Language", "High Tech Modern Language", "Hyperlink and Text Markup Language", "Home Tool Markup Language"],
            correct: 0
        },
        {
            question: "Which HTML tag is used to create hyperlinks?",
            options: ["<link>", "<a>", "<href>", "<url>"],
            correct: 1
        },
        {
            question: "What is the correct HTML tag for creating a table?",
            options: ["<table>", "<tab>", "<tbl>", "<td>"],
            correct: 0
        },
        {
            question: "Which HTML tag is used to create table rows?",
            options: ["<table>", "<td>", "<tr>", "<th>"],
            correct: 2
        },
        {
            question: "What is the purpose of HTML frames?",
            options: ["Create animations", "Divide browser window into sections", "Add colors to text", "Create forms"],
            correct: 1
        },
        {
            question: "Which HTML tag is used to create input fields in forms?",
            options: ["<form>", "<input>", "<field>", "<text>"],
            correct: 1
        },
        {
            question: "What does CSS stand for?",
            options: ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"],
            correct: 2
        },
        {
            question: "How many ways can CSS be applied to HTML documents?",
            options: ["1", "2", "3", "4"],
            correct: 2
        },
        {
            question: "Which HTML tag is used to embed CSS styles directly in HTML?",
            options: ["<css>", "<style>", "<script>", "<link>"],
            correct: 1
        },
        {
            question: "What is the basic syntax of CSS?",
            options: ["property: value;", "value: property;", "property = value;", "value = property;"],
            correct: 0
        },
        {
            question: "Which method applies CSS to a single HTML element?",
            options: ["External stylesheet", "Internal stylesheet", "Inline styles", "All methods"],
            correct: 2
        },
        {
            question: "Which method applies CSS to an entire HTML document?",
            options: ["Inline styles", "Internal stylesheet", "External stylesheet", "Both internal and external"],
            correct: 1
        },
        {
            question: "Which method applies CSS to multiple HTML documents?",
            options: ["Inline styles", "Internal stylesheet", "External stylesheet", "None of the above"],
            correct: 2
        },
        {
            question: "What is the file extension for external CSS files?",
            options: [".html", ".css", ".js", ".xml"],
            correct: 1
        },
        {
            question: "Which HTML attribute is used to link external CSS files?",
            options: ["src", "href", "rel", "type"],
            correct: 1
        },
        {
            question: "What does the 'rel' attribute specify in CSS links?",
            options: ["File location", "Relationship between documents", "File type", "Style type"],
            correct: 1
        },
        {
            question: "Which HTML tag is used for the largest heading?",
            options: ["<h1>", "<h6>", "<head>", "<heading>"],
            correct: 0
        },
        {
            question: "Which HTML tag is used to create line breaks?",
            options: ["<br>", "<break>", "<lb>", "<line>"],
            correct: 0
        },
        {
            question: "What is the purpose of the alt attribute in img tags?",
            options: ["Image size", "Alternative text for accessibility", "Image alignment", "Image border"],
            correct: 1
        },
        {
            question: "Which HTML tag is used to create unordered lists?",
            options: ["<ol>", "<ul>", "<list>", "<li>"],
            correct: 1
        }
    ],
    3: [ // Unit 3: Extensible Markup Language (XML) (25 questions)
        {
            question: "What does XML stand for?",
            options: ["Extended Markup Language", "Extensible Markup Language", "Extra Markup Language", "Executable Markup Language"],
            correct: 1
        },
        {
            question: "What is the primary purpose of XML?",
            options: ["Web page display", "Data storage and transport", "Programming logic", "Database management"],
            correct: 1
        },
        {
            question: "Which of these is a key feature of XML?",
            options: ["Platform dependent", "Self-descriptive", "Binary format", "Fixed structure"],
            correct: 1
        },
        {
            question: "What is an advantage of XML over HTML?",
            options: ["Better display formatting", "User-defined tags", "Smaller file size", "Faster rendering"],
            correct: 1
        },
        {
            question: "What is a disadvantage of XML compared to HTML?",
            options: ["Complex syntax", "Verbose format", "Limited browser support", "All of the above"],
            correct: 1
        },
        {
            question: "What is the main difference between HTML and XML?",
            options: ["HTML is for web display, XML is for data", "HTML has fixed tags, XML allows custom tags", "HTML is simpler, XML is complex", "All of the above"],
            correct: 3
        },
        {
            question: "What is an XML tree structure?",
            options: ["A graphical representation of XML document hierarchy", "A type of XML parser", "An XML validation method", "A database format"],
            correct: 0
        },
        {
            question: "What does DTD stand for in XML context?",
            options: ["Document Type Definition", "Data Type Declaration", "Document Template Design", "Data Transfer Definition"],
            correct: 0
        },
        {
            question: "What is the purpose of XML DTD?",
            options: ["Style XML documents", "Define structure and legal elements of XML documents", "Execute XML code", "Compress XML files"],
            correct: 1
        },
        {
            question: "What does DOM stand for in XML?",
            options: ["Document Object Model", "Data Object Method", "Document Organization Module", "Data Organization Model"],
            correct: 0
        },
        {
            question: "What is XML DOM used for?",
            options: ["Styling XML documents", "Programmatic access to XML document structure", "Validating XML syntax", "Compressing XML data"],
            correct: 1
        },
        {
            question: "Which of these is NOT a feature of XML?",
            options: ["Self-descriptive", "Platform independent", "Predefined tags only", "Extensible"],
            correct: 2
        },
        {
            question: "What makes XML extensible?",
            options: ["Fixed set of tags", "User can define custom tags", "Limited to web use", "Requires special software"],
            correct: 1
        },
        {
            question: "Which application benefits from XML's self-descriptive nature?",
            options: ["Web page design", "Data exchange between different systems", "Image processing", "Video streaming"],
            correct: 1
        },
        {
            question: "What is XML namespace used for?",
            options: ["Styling documents", "Avoiding element name conflicts", "Compressing data", "Validating syntax"],
            correct: 1
        },
        {
            question: "Which of these is a valid XML document structure?",
            options: ["Root element with nested elements", "Elements without closing tags", "Overlapping elements", "Empty document"],
            correct: 0
        },
        {
            question: "What is an XML element?",
            options: ["Opening and closing tags with content", "Only attributes", "Only text content", "Only comments"],
            correct: 0
        },
        {
            question: "What is an XML attribute?",
            options: ["Child elements", "Name-value pairs within start tags", "Text content", "Comments"],
            correct: 1
        },
        {
            question: "Which XML component contains the actual data?",
            options: ["Tags", "Attributes", "Text content", "Comments"],
            correct: 2
        },
        {
            question: "What is XML schema?",
            options: ["A DTD alternative for defining XML document structure", "A styling language", "A programming language", "A database system"],
            correct: 0
        },
        {
            question: "Why is XML considered platform independent?",
            options: ["Works only on Windows", "Text-based format readable on any platform", "Requires special hardware", "Binary format"],
            correct: 1
        },
        {
            question: "What is XML parsing?",
            options: ["Creating XML documents", "Reading and processing XML documents", "Styling XML documents", "Compressing XML files"],
            correct: 1
        },
        {
            question: "Which parser provides tree-based access to XML?",
            options: ["SAX parser", "DOM parser", "Both SAX and DOM", "Neither"],
            correct: 1
        },
        {
            question: "Which parser provides event-based access to XML?",
            options: ["DOM parser", "SAX parser", "Both parsers", "Neither parser"],
            correct: 1
        },
        {
            question: "What is XML validation?",
            options: ["Checking XML syntax", "Checking XML against DTD or schema", "Compressing XML", "Converting XML to HTML"],
            correct: 1
        }
    ],
    4: [ // Unit 4: Client Side Scripting with JavaScript (30 questions)
        {
            question: "What is JavaScript primarily used for?",
            options: ["Server-side programming", "Client-side web development", "Database management", "Network administration"],
            correct: 1
        },
        {
            question: "What is an advantage of JavaScript?",
            options: ["Requires server processing", "Reduces server load by handling client-side logic", "Only works with HTML", "Cannot manipulate web pages"],
            correct: 1
        },
        {
            question: "What is a disadvantage of JavaScript?",
            options: ["Too fast execution", "Can be disabled in browsers", "Requires compilation", "Only works on Windows"],
            correct: 1
        },
        {
            question: "Which of these is a valid JavaScript data type?",
            options: ["integer", "string", "boolean", "All of the above"],
            correct: 3
        },
        {
            question: "How are JavaScript variables declared?",
            options: ["var variableName;", "variable variableName;", "declare variableName;", "let variableName;"],
            correct: 0
        },
        {
            question: "What is a JavaScript array?",
            options: ["A single value", "A collection of values", "A function", "A loop"],
            correct: 1
        },
        {
            question: "Which operator is used for assignment in JavaScript?",
            options: ["==", "=", "===", "!="],
            correct: 1
        },
        {
            question: "Which operator checks both value and type equality?",
            options: ["==", "!=", "===", "!=="],
            correct: 2
        },
        {
            question: "What is a JavaScript expression?",
            options: ["A comment", "A combination of values and operators", "A variable declaration", "A function definition"],
            correct: 1
        },
        {
            question: "Which loop executes at least once?",
            options: ["for loop", "while loop", "do-while loop", "for-in loop"],
            correct: 2
        },
        {
            question: "What is a JavaScript constructor?",
            options: ["A loop type", "A function for creating objects", "A variable type", "An operator"],
            correct: 1
        },
        {
            question: "What is a JavaScript function?",
            options: ["A variable", "A reusable block of code", "A data type", "An array"],
            correct: 1
        },
        {
            question: "What are JavaScript dialog boxes used for?",
            options: ["Playing sounds", "Displaying messages to users", "Creating animations", "Database access"],
            correct: 1
        },
        {
            question: "What does DOM stand for in JavaScript context?",
            options: ["Document Object Model", "Data Object Method", "Document Organization Module", "Display Object Model"],
            correct: 0
        },
        {
            question: "What is DOM used for in JavaScript?",
            options: ["Styling web pages", "Manipulating HTML document structure", "Database operations", "Network communication"],
            correct: 1
        },
        {
            question: "What is event handling in JavaScript?",
            options: ["Error checking", "Responding to user actions", "Memory management", "File operations"],
            correct: 1
        },
        {
            question: "How is external JavaScript linked to HTML?",
            options: ["<script src='file.js'>", "<link href='file.js'>", "<js src='file.js'>", "<external src='file.js'>"],
            correct: 0
        },
        {
            question: "What is form validation in JavaScript?",
            options: ["Creating forms", "Checking form data before submission", "Styling forms", "Saving form data"],
            correct: 1
        },
        {
            question: "What are JavaScript cookies used for?",
            options: ["Styling web pages", "Storing small amounts of data on client side", "Database access", "File operations"],
            correct: 1
        },
        {
            question: "Which JavaScript method displays an alert dialog?",
            options: ["confirm()", "prompt()", "alert()", "dialog()"],
            correct: 2
        },
        {
            question: "Which JavaScript method displays a confirmation dialog?",
            options: ["alert()", "confirm()", "prompt()", "message()"],
            correct: 1
        },
        {
            question: "Which JavaScript method gets user input?",
            options: ["input()", "get()", "prompt()", "ask()"],
            correct: 2
        },
        {
            question: "What is the purpose of JavaScript Date object?",
            options: ["File handling", "Working with dates and times", "Database operations", "Network requests"],
            correct: 1
        },
        {
            question: "How are JavaScript arrays created?",
            options: ["var arr = [];", "var arr = {};", "var arr = ();", "var arr = <>;"],
            correct: 0
        },
        {
            question: "What is array indexing in JavaScript?",
            options: ["Starts from 1", "Starts from 0", "Starts from -1", "Random"],
            correct: 1
        },
        {
            question: "Which keyword is used to define JavaScript functions?",
            options: ["define", "function", "def", "func"],
            correct: 1
        },
        {
            question: "What is function scope in JavaScript?",
            options: ["Global only", "Local to function", "Class level only", "File level only"],
            correct: 1
        },
        {
            question: "What is variable hoisting in JavaScript?",
            options: ["Moving variables up", "Variables declared anywhere accessible everywhere", "Variable type conversion", "Memory allocation"],
            correct: 1
        },
        {
            question: "What is the purpose of JavaScript closures?",
            options: ["File operations", "Accessing outer function scope from inner function", "Database access", "Network communication"],
            correct: 1
        },
        {
            question: "What is asynchronous programming in JavaScript?",
            options: ["Sequential execution", "Non-blocking operations", "Only synchronous", "Blocking operations"],
            correct: 1
        }
    ],
    5: [ // Unit 5: Server Side Scripting with PHP (40 questions)
        {
            question: "What does PHP stand for?",
            options: ["Personal Home Page", "PHP: Hypertext Preprocessor", "Pre-Hypertext Processor", "Personal Hypertext Processor"],
            correct: 1
        },
        {
            question: "What is PHP primarily used for?",
            options: ["Client-side scripting", "Server-side web development", "Database design", "Network administration"],
            correct: 1
        },
        {
            question: "How are PHP scripts embedded in HTML?",
            options: ["<?php ... ?>", "<php>...</php>", "<script>...</script>", "<html>...</html>"],
            correct: 0
        },
        {
            question: "How are PHP variables declared?",
            options: ["$variableName", "#variableName", "&variableName", "@variableName"],
            correct: 0
        },
        {
            question: "Which of these is a valid PHP data type?",
            options: ["string", "integer", "boolean", "All of the above"],
            correct: 3
        },
        {
            question: "What is a PHP expression?",
            options: ["A comment", "Any combination of operands and operators", "A variable declaration", "A function definition"],
            correct: 1
        },
        {
            question: "Which statement is used for conditional execution in PHP?",
            options: ["if-else", "switch-case", "Both if-else and switch-case", "Neither"],
            correct: 2
        },
        {
            question: "What is a PHP function?",
            options: ["A variable", "A reusable block of code", "A data type", "An array"],
            correct: 1
        },
        {
            question: "How are PHP functions defined?",
            options: ["function functionName() {}", "def functionName() {}", "func functionName() {}", "define functionName() {}"],
            correct: 0
        },
        {
            question: "What is a PHP array?",
            options: ["A single value", "A collection of values", "A function", "A loop"],
            correct: 1
        },
        {
            question: "How are PHP arrays created?",
            options: ["$arr = [];", "$arr = {};", "$arr = array();", "Both [] and array()"],
            correct: 3
        },
        {
            question: "What is string handling in PHP?",
            options: ["Number operations", "Text manipulation functions", "Array operations", "File operations"],
            correct: 1
        },
        {
            question: "Which PHP function concatenates strings?",
            options: ["concat()", "join()", ".", "merge()"],
            correct: 2
        },
        {
            question: "What is PHP form handling used for?",
            options: ["Creating forms", "Processing submitted form data", "Styling forms", "Validating forms"],
            correct: 1
        },
        {
            question: "How are form data accessed in PHP?",
            options: ["$_POST and $_GET", "$_FORM", "$_DATA", "$_INPUT"],
            correct: 0
        },
        {
            question: "What are PHP cookies used for?",
            options: ["Styling web pages", "Storing data on client side", "Server-side storage", "Database access"],
            correct: 1
        },
        {
            question: "What are PHP sessions used for?",
            options: ["Client-side storage", "Server-side user data storage", "Database storage", "File storage"],
            correct: 1
        },
        {
            question: "What does MySQLi stand for in PHP context?",
            options: ["My Simple Query Language interface", "My Structured Query Language interface", "My Server Query Language interface", "My System Query Language interface"],
            correct: 1
        },
        {
            question: "What is PHP MySQLi used for?",
            options: ["File operations", "Database connectivity and operations", "Network communication", "Image processing"],
            correct: 1
        },
        {
            question: "How is PHP installed on a server?",
            options: ["Downloaded as executable", "Included in web server packages", "Manually compiled", "All of the above"],
            correct: 3
        },
        {
            question: "What is the file extension for PHP files?",
            options: [".html", ".php", ".js", ".xml"],
            correct: 1
        },
        {
            question: "Which PHP function outputs text to browser?",
            options: ["print()", "echo()", "Both print() and echo()", "output()"],
            correct: 2
        },
        {
            question: "What is PHP variable scope?",
            options: ["Global only", "Local to functions", "Both global and local", "Class level only"],
            correct: 2
        },
        {
            question: "Which PHP loop executes a block of code a specified number of times?",
            options: ["while", "do-while", "for", "foreach"],
            correct: 2
        },
        {
            question: "Which PHP loop is used for arrays and objects?",
            options: ["for", "while", "foreach", "do-while"],
            correct: 2
        },
        {
            question: "What is PHP include used for?",
            options: ["Including CSS files", "Including external PHP files", "Including JavaScript", "Including HTML"],
            correct: 1
        },
        {
            question: "What is PHP require different from include?",
            options: ["No difference", "Require stops execution on failure, include continues", "Include is faster", "Require is for functions only"],
            correct: 1
        },
        {
            question: "Which PHP superglobal contains form data from POST method?",
            options: ["$_GET", "$_POST", "$_REQUEST", "$_FORM"],
            correct: 1
        },
        {
            question: "Which PHP superglobal contains URL parameters?",
            options: ["$_POST", "$_GET", "$_REQUEST", "$_FORM"],
            correct: 1
        },
        {
            question: "What is PHP sanitization?",
            options: ["Code formatting", "Cleaning user input for security", "File compression", "Database optimization"],
            correct: 1
        },
        {
            question: "Which PHP function connects to MySQL database?",
            options: ["mysql_connect()", "mysqli_connect()", "pdo_connect()", "db_connect()"],
            correct: 1
        },
        {
            question: "Which PHP function executes SQL queries?",
            options: ["mysql_query()", "mysqli_query()", "pdo_query()", "db_query()"],
            correct: 1
        },
        {
            question: "What is PHP prepared statement?",
            options: ["Pre-written code", "SQL statement template for secure execution", "Function definition", "Variable declaration"],
            correct: 1
        },
        {
            question: "What is PHP error handling?",
            options: ["Ignoring errors", "Managing and responding to runtime errors", "Creating errors", "Hiding errors"],
            correct: 1
        },
        {
            question: "Which PHP function sends email?",
            options: ["sendmail()", "mail()", "email()", "send()"],
            correct: 1
        },
        {
            question: "What is PHP file handling used for?",
            options: ["Creating images", "Reading and writing files", "Database operations", "Network communication"],
            correct: 1
        },
        {
            question: "Which PHP function opens a file?",
            options: ["open()", "fopen()", "file_open()", "start()"],
            correct: 1
        },
        {
            question: "What is PHP object-oriented programming?",
            options: ["Functional programming", "Class-based programming paradigm", "Procedural programming", "Scripting only"],
            correct: 1
        },
        {
            question: "How are PHP classes defined?",
            options: ["class ClassName {}", "define ClassName {}", "function ClassName {}", "var ClassName {}"],
            correct: 0
        },
        {
            question: "What is PHP inheritance?",
            options: ["Copying code", "Classes inheriting properties from parent classes", "Variable sharing", "Function sharing"],
            correct: 1
        },
        {
            question: "What is PHP polymorphism?",
            options: ["Multiple inheritance", "Methods with same name but different implementations", "Multiple classes", "Multiple objects"],
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
        const unitQuestions = webQuestions[unit];
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
