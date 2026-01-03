// quiz/subjects/cf/questions.js
const cfQuestions = {
    1: [ // Unit 1: Introduction to Computers (20 questions)
        {
            question: "What is the full form of CPU?",
            options: ["Central Processing Unit", "Computer Processing Unit", "Central Program Unit", "Computer Program Unit"],
            correct: 0
        },
        {
            question: "Which device is considered the father of modern computers?",
            options: ["ENIAC", "UNIVAC", "Analytical Engine", "Harvard Mark I"],
            correct: 2
        },
        {
            question: "Which generation of computers used vacuum tubes?",
            options: ["First Generation", "Second Generation", "Third Generation", "Fourth Generation"],
            correct: 0
        },
        {
            question: "What does the term 'computer' originally mean?",
            options: ["Calculator", "Computing machine", "Data processor", "Electronic brain"],
            correct: 0
        },
        {
            question: "Which type of computer is used for weather forecasting?",
            options: ["Mainframe", "Supercomputer", "Minicomputer", "Microcomputer"],
            correct: 1
        },
        {
            question: "What is the main function of computers in business?",
            options: ["Entertainment", "Data processing", "Gaming", "Communication"],
            correct: 1
        },
        {
            question: "Which computer generation used integrated circuits?",
            options: ["First", "Second", "Third", "Fourth"],
            correct: 2
        },
        {
            question: "What is the difference between analog and digital computers?",
            options: ["Speed", "Data representation", "Size", "Cost"],
            correct: 1
        },
        {
            question: "Which computer is designed for personal use?",
            options: ["Mainframe", "Supercomputer", "Personal computer", "Workstation"],
            correct: 2
        },
        {
            question: "What is the purpose of computers in education?",
            options: ["Entertainment", "Teaching and learning", "Gaming", "Social networking"],
            correct: 1
        },
        {
            question: "Which generation introduced microprocessors?",
            options: ["Second", "Third", "Fourth", "Fifth"],
            correct: 2
        },
        {
            question: "What is a hybrid computer?",
            options: ["Analog and digital combination", "Hardware and software", "Fast and slow", "Big and small"],
            correct: 0
        },
        {
            question: "Which computer type is used in banks for transaction processing?",
            options: ["Supercomputer", "Mainframe", "Minicomputer", "Microcomputer"],
            correct: 1
        },
        {
            question: "What is the first programmable computer called?",
            options: ["ENIAC", "EDVAC", "UNIVAC", "Harvard Mark I"],
            correct: 0
        },
        {
            question: "Which computer generation used transistors?",
            options: ["First", "Second", "Third", "Fourth"],
            correct: 1
        },
        {
            question: "What is the primary use of computers in hospitals?",
            options: ["Patient records", "Entertainment", "Gaming", "Communication"],
            correct: 0
        },
        {
            question: "Which computer is the fastest?",
            options: ["Mainframe", "Supercomputer", "Minicomputer", "Personal computer"],
            correct: 1
        },
        {
            question: "What is the role of computers in scientific research?",
            options: ["Data analysis", "Entertainment", "Gaming", "Social media"],
            correct: 0
        },
        {
            question: "Which generation computers are we currently using?",
            options: ["Fourth", "Fifth", "Sixth", "Seventh"],
            correct: 1
        },
        {
            question: "What is the main advantage of digital computers over analog?",
            options: ["Speed", "Accuracy and precision", "Size", "Cost"],
            correct: 1
        }
    ],
    2: [ // Unit 2: Computer Hardware (20 questions)
        {
            question: "What is the brain of the computer?",
            options: ["RAM", "Hard disk", "CPU", "Motherboard"],
            correct: 2
        },
        {
            question: "Which component stores data permanently?",
            options: ["RAM", "ROM", "Cache memory", "Registers"],
            correct: 1
        },
        {
            question: "What is the primary function of RAM?",
            options: ["Permanent storage", "Temporary data storage", "Data processing", "Input/output"],
            correct: 1
        },
        {
            question: "Which device is used for data input?",
            options: ["Monitor", "Printer", "Keyboard", "Speaker"],
            correct: 2
        },
        {
            question: "What is the function of a hard disk?",
            options: ["Processing data", "Storing data", "Displaying data", "Inputting data"],
            correct: 1
        },
        {
            question: "Which component connects all hardware devices?",
            options: ["CPU", "RAM", "Motherboard", "Power supply"],
            correct: 2
        },
        {
            question: "What is the speed of CPU measured in?",
            options: ["Hertz", "Bytes", "Pixels", "Volts"],
            correct: 0
        },
        {
            question: "Which memory is fastest?",
            options: ["Hard disk", "RAM", "Cache", "Registers"],
            correct: 3
        },
        {
            question: "What is the purpose of a graphics card?",
            options: ["Sound processing", "Video display", "Data storage", "Network connection"],
            correct: 1
        },
        {
            question: "Which device is used for data output?",
            options: ["Keyboard", "Mouse", "Monitor", "Scanner"],
            correct: 2
        },
        {
            question: "What is the function of ROM?",
            options: ["Read and write data", "Read-only storage", "Temporary storage", "Network storage"],
            correct: 1
        },
        {
            question: "Which storage device is optical?",
            options: ["Hard disk", "SSD", "CD-ROM", "USB drive"],
            correct: 2
        },
        {
            question: "What is the purpose of cache memory?",
            options: ["Long-term storage", "Speed up CPU access", "Store programs", "Network data"],
            correct: 1
        },
        {
            question: "Which component provides power to the computer?",
            options: ["Motherboard", "CPU", "Power supply unit", "RAM"],
            correct: 2
        },
        {
            question: "What is the function of a sound card?",
            options: ["Video processing", "Audio processing", "Data storage", "Network connection"],
            correct: 1
        },
        {
            question: "Which device allows wireless connectivity?",
            options: ["Ethernet card", "Wi-Fi adapter", "Sound card", "Graphics card"],
            correct: 1
        },
        {
            question: "What is the purpose of a cooling fan?",
            options: ["Power supply", "Heat dissipation", "Data processing", "Memory storage"],
            correct: 1
        },
        {
            question: "Which storage is volatile?",
            options: ["ROM", "Hard disk", "RAM", "CD-ROM"],
            correct: 2
        },
        {
            question: "What is the function of BIOS?",
            options: ["Operating system", "Hardware initialization", "Application software", "Network protocol"],
            correct: 1
        },
        {
            question: "Which device is used for printing documents?",
            options: ["Scanner", "Monitor", "Printer", "Keyboard"],
            correct: 2
        }
    ],
    3: [ // Unit 3: Computer Software (25 questions)
        {
            question: "Which type of software manages computer hardware?",
            options: ["Application software", "System software", "Utility software", "Programming software"],
            correct: 1
        },
        {
            question: "What is the main function of an operating system?",
            options: ["Run applications", "Manage hardware resources", "Create documents", "Browse internet"],
            correct: 1
        },
        {
            question: "Which software allows users to create documents?",
            options: ["Operating system", "Word processor", "Antivirus", "Compiler"],
            correct: 1
        },
        {
            question: "What is application software?",
            options: ["System management", "User-specific tasks", "Hardware control", "Network management"],
            correct: 1
        },
        {
            question: "Which language is used to write system software?",
            options: ["Java", "Python", "C/C++", "JavaScript"],
            correct: 2
        },
        {
            question: "What is the function of device drivers?",
            options: ["User interface", "Hardware control", "Data storage", "Network security"],
            correct: 1
        },
        {
            question: "Which software is used for program development?",
            options: ["Word processor", "Spreadsheet", "Compiler", "Media player"],
            correct: 2
        },
        {
            question: "What is utility software?",
            options: ["Games", "System maintenance tools", "Word processing", "Web browsing"],
            correct: 1
        },
        {
            question: "Which OS is open source?",
            options: ["Windows", "macOS", "Linux", "iOS"],
            correct: 2
        },
        {
            question: "What is the purpose of antivirus software?",
            options: ["Speed up computer", "Security protection", "File compression", "Data backup"],
            correct: 1
        },
        {
            question: "Which software category includes spreadsheets?",
            options: ["System software", "Application software", "Utility software", "Programming software"],
            correct: 1
        },
        {
            question: "What is firmware?",
            options: ["Application software", "System software", "Embedded software", "Web software"],
            correct: 2
        },
        {
            question: "Which programming language is platform independent?",
            options: ["C", "C++", "Java", "Assembly"],
            correct: 2
        },
        {
            question: "What is the function of a file manager?",
            options: ["Text editing", "File organization", "Web browsing", "Email sending"],
            correct: 1
        },
        {
            question: "Which software is used for data analysis?",
            options: ["Word processor", "Spreadsheet", "Presentation software", "Database software"],
            correct: 1
        },
        {
            question: "What is system software?",
            options: ["User applications", "Operating system and utilities", "Games", "Web browsers"],
            correct: 1
        },
        {
            question: "Which tool compresses files?",
            options: ["Antivirus", "File compressor", "Disk defragmenter", "Backup utility"],
            correct: 1
        },
        {
            question: "What is the purpose of disk cleanup utility?",
            options: ["File compression", "Remove temporary files", "Data encryption", "Network monitoring"],
            correct: 1
        },
        {
            question: "Which software creates presentations?",
            options: ["Word processor", "Spreadsheet", "Presentation software", "Database"],
            correct: 2
        },
        {
            question: "What is open source software?",
            options: ["Paid software", "Free software with source code", "Proprietary software", "Trial software"],
            correct: 1
        },
        {
            question: "Which programming paradigm is event-driven?",
            options: ["Procedural", "Object-oriented", "Functional", "Event-driven"],
            correct: 3
        },
        {
            question: "What is the function of a debugger?",
            options: ["Write code", "Find program errors", "Compile code", "Execute code"],
            correct: 1
        },
        {
            question: "Which software manages databases?",
            options: ["Word processor", "Spreadsheet", "Database management system", "Presentation software"],
            correct: 2
        },
        {
            question: "What is proprietary software?",
            options: ["Open source", "Owned by company", "Free to use", "Community developed"],
            correct: 1
        },
        {
            question: "Which tool organizes computer files?",
            options: ["Antivirus", "File manager", "Backup software", "Compression tool"],
            correct: 1
        }
    ],
    4: [ // Unit 4: Data Representation and Processing (25 questions)
        {
            question: "What is the binary equivalent of decimal 10?",
            options: ["1010", "1001", "1100", "1110"],
            correct: 0
        },
        {
            question: "Which number system uses base 16?",
            options: ["Binary", "Octal", "Decimal", "Hexadecimal"],
            correct: 3
        },
        {
            question: "What is the ASCII value of 'A'?",
            options: ["65", "97", "48", "32"],
            correct: 0
        },
        {
            question: "Which code represents characters in computers?",
            options: ["EBCDIC", "ASCII", "Unicode", "All of the above"],
            correct: 3
        },
        {
            question: "What is the binary representation of decimal 15?",
            options: ["1111", "1110", "1101", "1011"],
            correct: 0
        },
        {
            question: "Which number system uses base 8?",
            options: ["Binary", "Octal", "Decimal", "Hexadecimal"],
            correct: 1
        },
        {
            question: "What is the decimal equivalent of binary 1011?",
            options: ["9", "10", "11", "12"],
            correct: 2
        },
        {
            question: "Which encoding scheme supports international characters?",
            options: ["ASCII", "EBCDIC", "Unicode", "BCD"],
            correct: 2
        },
        {
            question: "What is BCD?",
            options: ["Binary Coded Decimal", "Binary Character Data", "Byte Code Data", "Bit Code Decimal"],
            correct: 0
        },
        {
            question: "Which multimedia format is for images?",
            options: ["MP3", "AVI", "JPEG", "WAV"],
            correct: 2
        },
        {
            question: "What is the resolution of an image measured in?",
            options: ["Pixels", "Bytes", "Hertz", "Volts"],
            correct: 0
        },
        {
            question: "Which format is used for audio files?",
            options: ["JPEG", "PNG", "MP3", "GIF"],
            correct: 2
        },
        {
            question: "What is data processing?",
            options: ["Data storage", "Data manipulation", "Data transmission", "Data encryption"],
            correct: 1
        },
        {
            question: "Which operation sorts data?",
            options: ["Processing", "Storage", "Retrieval", "Sorting"],
            correct: 3
        },
        {
            question: "What is batch processing?",
            options: ["Real-time processing", "Group processing", "Individual processing", "Sequential processing"],
            correct: 1
        },
        {
            question: "Which processing handles immediate requests?",
            options: ["Batch processing", "Real-time processing", "Offline processing", "Sequential processing"],
            correct: 1
        },
        {
            question: "What is information?",
            options: ["Raw data", "Processed data", "Binary data", "Character data"],
            correct: 1
        },
        {
            question: "Which format is used for video files?",
            options: ["JPEG", "MP3", "AVI", "PNG"],
            correct: 2
        },
        {
            question: "What is data compression?",
            options: ["Data encryption", "Data size reduction", "Data transmission", "Data storage"],
            correct: 1
        },
        {
            question: "Which compression is lossless?",
            options: ["JPEG", "MP3", "GIF", "PNG"],
            correct: 3
        },
        {
            question: "What is the hexadecimal equivalent of decimal 15?",
            options: ["A", "B", "E", "F"],
            correct: 3
        },
        {
            question: "Which code uses 7 bits per character?",
            options: ["EBCDIC", "ASCII", "Unicode", "BCD"],
            correct: 1
        },
        {
            question: "What is the octal equivalent of decimal 8?",
            options: ["8", "10", "16", "20"],
            correct: 1
        },
        {
            question: "Which multimedia element uses RGB?",
            options: ["Audio", "Video", "Image", "Text"],
            correct: 2
        },
        {
            question: "What is sampling rate in audio?",
            options: ["Bit depth", "Frequency", "Compression ratio", "File size"],
            correct: 1
        }
    ],
    5: [ // Unit 5: Internet and Web Technologies (25 questions)
        {
            question: "What does WWW stand for?",
            options: ["World Wide Web", "World Web Wide", "Wide World Web", "Web World Wide"],
            correct: 0
        },
        {
            question: "Which protocol is used for web browsing?",
            options: ["FTP", "HTTP", "SMTP", "POP3"],
            correct: 1
        },
        {
            question: "What is the function of DNS?",
            options: ["Domain Name System", "Dynamic Name Server", "Domain Network Service", "Data Name System"],
            correct: 0
        },
        {
            question: "Which service allows file transfer over internet?",
            options: ["HTTP", "FTP", "SMTP", "POP3"],
            correct: 1
        },
        {
            question: "What is the purpose of email?",
            options: ["Web browsing", "Electronic mail", "File transfer", "Video calling"],
            correct: 1
        },
        {
            question: "Which protocol is used for sending emails?",
            options: ["POP3", "IMAP", "SMTP", "HTTP"],
            correct: 2
        },
        {
            question: "What is a web browser?",
            options: ["Email client", "Web page viewer", "File manager", "Text editor"],
            correct: 1
        },
        {
            question: "Which organization manages domain names?",
            options: ["ICANN", "IEEE", "ISO", "ITU"],
            correct: 0
        },
        {
            question: "What is the purpose of cookies?",
            options: ["Security", "User tracking", "Speed optimization", "Data encryption"],
            correct: 1
        },
        {
            question: "Which service provides real-time communication?",
            options: ["Email", "Instant messaging", "FTP", "HTTP"],
            correct: 1
        },
        {
            question: "What is the function of a search engine?",
            options: ["Web browsing", "Information searching", "Email sending", "File downloading"],
            correct: 1
        },
        {
            question: "Which protocol is secure for web browsing?",
            options: ["HTTP", "HTTPS", "FTP", "SMTP"],
            correct: 1
        },
        {
            question: "What is social networking?",
            options: ["Online shopping", "Online communication", "File sharing", "Web browsing"],
            correct: 1
        },
        {
            question: "Which service allows video calling?",
            options: ["Email", "VoIP", "FTP", "HTTP"],
            correct: 1
        },
        {
            question: "What is the purpose of firewall?",
            options: ["Speed up internet", "Network security", "Web browsing", "File sharing"],
            correct: 1
        },
        {
            question: "Which protocol receives emails?",
            options: ["SMTP", "POP3", "HTTP", "FTP"],
            correct: 1
        },
        {
            question: "What is e-commerce?",
            options: ["Online shopping", "Email communication", "Web browsing", "File transfer"],
            correct: 0
        },
        {
            question: "Which technology enables wireless internet?",
            options: ["Ethernet", "Wi-Fi", "Bluetooth", "USB"],
            correct: 1
        },
        {
            question: "What is the function of antivirus software?",
            options: ["Speed optimization", "Security protection", "Web browsing", "File compression"],
            correct: 1
        },
        {
            question: "Which service provides online storage?",
            options: ["Email", "Cloud storage", "Instant messaging", "Video calling"],
            correct: 1
        },
        {
            question: "What is phishing?",
            options: ["Fishing technique", "Online fraud", "Web browsing", "File sharing"],
            correct: 1
        },
        {
            question: "Which tool blocks unwanted websites?",
            options: ["Antivirus", "Firewall", "Browser", "Search engine"],
            correct: 1
        },
        {
            question: "What is the purpose of a URL?",
            options: ["Email address", "Web page location", "File name", "Network address"],
            correct: 1
        },
        {
            question: "Which protocol is used for secure file transfer?",
            options: ["FTP", "SFTP", "HTTP", "SMTP"],
            correct: 1
        },
        {
            question: "What is the function of a router?",
            options: ["Web browsing", "Network traffic direction", "File storage", "Email sending"],
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
        if (cfQuestions[unitId]) {
            cfQuestions[unitId].forEach(question => {
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
