// quiz/subjects/sp/questions.js
const spQuestions = {
    1: [ // Unit 1: Introduction to System Programming (20 questions)
        {
            question: "What is system programming?",
            options: ["Programming applications", "Developing system software", "Web development", "Database programming"],
            correct: 1
        },
        {
            question: "Which of the following is NOT a system software?",
            options: ["Operating system", "Compiler", "Word processor", "Assembler"],
            correct: 2
        },
        {
            question: "What is a language processor?",
            options: ["Text editor", "Program that translates languages", "Operating system", "Database system"],
            correct: 1
        },
        {
            question: "Which translator converts assembly language to machine language?",
            options: ["Compiler", "Interpreter", "Assembler", "Linker"],
            correct: 2
        },
        {
            question: "What is the main function of a compiler?",
            options: ["Execute programs", "Translate high-level to machine language", "Load programs", "Debug programs"],
            correct: 1
        },
        {
            question: "Which type of translator processes the entire program at once?",
            options: ["Interpreter", "Compiler", "Assembler", "Loader"],
            correct: 1
        },
        {
            question: "What is cross-compilation?",
            options: ["Compiling on same machine", "Compiling for different architecture", "Compiling multiple files", "Compiling with errors"],
            correct: 1
        },
        {
            question: "Which software manages computer resources?",
            options: ["Compiler", "Operating system", "Assembler", "Linker"],
            correct: 1
        },
        {
            question: "What is the purpose of system software?",
            options: ["User applications", "Support computer operations", "Entertainment", "Communication"],
            correct: 1
        },
        {
            question: "Which of the following is an application software?",
            options: ["Linux", "GCC compiler", "Microsoft Word", "BIOS"],
            correct: 2
        },
        {
            question: "What is firmware?",
            options: ["Hardware", "Software stored in ROM", "Temporary software", "Web software"],
            correct: 1
        },
        {
            question: "Which programming language is closest to machine language?",
            options: ["C++", "Java", "Assembly language", "Python"],
            correct: 2
        },
        {
            question: "What is the role of an interpreter?",
            options: ["Store programs", "Execute line by line", "Compile entire program", "Link object files"],
            correct: 1
        },
        {
            question: "Which software component manages memory?",
            options: ["Compiler", "Operating system", "Assembler", "Linker"],
            correct: 1
        },
        {
            question: "What is bootstrapping in system programming?",
            options: ["Starting a computer", "Self-compiling compiler", "Loading operating system", "All of the above"],
            correct: 1
        },
        {
            question: "Which type of software provides interface between hardware and applications?",
            options: ["Application software", "System software", "Utility software", "Driver software"],
            correct: 1
        },
        {
            question: "What is the purpose of device drivers?",
            options: ["Compile programs", "Control hardware devices", "Create databases", "Design websites"],
            correct: 1
        },
        {
            question: "Which software is responsible for program execution?",
            options: ["Compiler", "Operating system", "Assembler", "Editor"],
            correct: 1
        },
        {
            question: "What is the difference between compiler and interpreter?",
            options: ["Speed", "Execution method", "Language support", "Memory usage"],
            correct: 1
        },
        {
            question: "Which software translates source code to object code?",
            options: ["Loader", "Linker", "Compiler", "Debugger"],
            correct: 2
        }
    ],
    2: [ // Unit 2: Assemblers (20 questions)
        {
            question: "What is the primary function of an assembler?",
            options: ["Translate high-level to machine code", "Translate assembly to machine code", "Link object files", "Load programs"],
            correct: 1
        },
        {
            question: "Which type of assembler processes the program in one pass?",
            options: ["Two-pass assembler", "One-pass assembler", "Cross assembler", "Macro assembler"],
            correct: 1
        },
        {
            question: "What is a symbol table used for in assemblers?",
            options: ["Store machine code", "Store symbol addresses", "Store source code", "Store object code"],
            correct: 1
        },
        {
            question: "Which directive defines program start address?",
            options: ["START", "END", "ORG", "EQU"],
            correct: 2
        },
        {
            question: "What is forward reference in assembly language?",
            options: ["Previous instruction", "Future label reference", "Current instruction", "Memory address"],
            correct: 1
        },
        {
            question: "Which assembler pass resolves symbol addresses?",
            options: ["First pass", "Second pass", "Both passes", "Neither pass"],
            correct: 1
        },
        {
            question: "What is the purpose of the location counter (LC) in assemblers?",
            options: ["Count instructions", "Track memory addresses", "Count symbols", "Track errors"],
            correct: 1
        },
        {
            question: "Which directive reserves memory space?",
            options: ["DB", "DW", "DS", "All of the above"],
            correct: 3
        },
        {
            question: "What is the difference between one-pass and two-pass assemblers?",
            options: ["Speed", "Forward reference handling", "Memory usage", "Instruction set"],
            correct: 1
        },
        {
            question: "Which table stores information about external symbols?",
            options: ["Symbol table", "Literal table", "External symbol table", "Opcode table"],
            correct: 2
        },
        {
            question: "What is the MOT in assembler design?",
            options: ["Machine Operation Table", "Machine Opcode Table", "Memory Operation Table", "Macro Operation Table"],
            correct: 0
        },
        {
            question: "Which assembler processes programs for different architectures?",
            options: ["Native assembler", "Cross assembler", "Meta assembler", "Micro assembler"],
            correct: 1
        },
        {
            question: "What is the purpose of the END directive?",
            options: ["Start program", "End program", "Define data", "Reserve memory"],
            correct: 1
        },
        {
            question: "Which pass of assembler generates machine code?",
            options: ["First pass", "Second pass", "Both passes", "Neither pass"],
            correct: 1
        },
        {
            question: "What is a literal in assembly language?",
            options: ["Variable", "Constant value", "Label", "Instruction"],
            correct: 1
        },
        {
            question: "Which table is used for base register addressing?",
            options: ["Base table", "Register table", "Address table", "Symbol table"],
            correct: 0
        },
        {
            question: "What is the POT in assembler design?",
            options: ["Program Operation Table", "Pseudo Operation Table", "Pointer Operation Table", "Parameter Operation Table"],
            correct: 1
        },
        {
            question: "Which directive defines a constant?",
            options: ["DB", "DW", "EQU", "ORG"],
            correct: 2
        },
        {
            question: "What is the purpose of the first pass in two-pass assembler?",
            options: ["Generate code", "Build symbol table", "Resolve addresses", "Handle errors"],
            correct: 1
        },
        {
            question: "Which assembler handles macro expansion?",
            options: ["Macro assembler", "Micro assembler", "Meta assembler", "Mini assembler"],
            correct: 0
        }
    ],
    3: [ // Unit 3: Loaders and Linkers (25 questions)
        {
            question: "What is the primary function of a loader?",
            options: ["Compile programs", "Load programs into memory", "Link object files", "Assemble programs"],
            correct: 1
        },
        {
            question: "Which loader loads the entire program at once?",
            options: ["Bootstrap loader", "Compile-and-go loader", "Absolute loader", "Relocating loader"],
            correct: 2
        },
        {
            question: "What is the purpose of a linker?",
            options: ["Load programs", "Combine object files", "Compile source code", "Execute programs"],
            correct: 1
        },
        {
            question: "Which type of linking occurs at compile time?",
            options: ["Static linking", "Dynamic linking", "Runtime linking", "Load-time linking"],
            correct: 0
        },
        {
            question: "What is relocation in loaders?",
            options: ["Moving program in memory", "Adjusting addresses", "Loading program", "Linking modules"],
            correct: 1
        },
        {
            question: "Which loader can load programs at any memory location?",
            options: ["Absolute loader", "Relocating loader", "Direct linking loader", "Bootstrap loader"],
            correct: 1
        },
        {
            question: "What is the ESTAB in linker design?",
            options: ["External Symbol Table", "Entry Symbol Table", "External Source Table", "Executable Symbol Table"],
            correct: 0
        },
        {
            question: "Which linking resolves external references?",
            options: ["Internal linking", "External linking", "Static linking", "Dynamic linking"],
            correct: 1
        },
        {
            question: "What is the purpose of a bootstrap loader?",
            options: ["Load operating system", "Load user programs", "Link libraries", "Compile programs"],
            correct: 0
        },
        {
            question: "Which loader loads and executes program immediately?",
            options: ["Absolute loader", "Relocating loader", "Compile-and-go loader", "General loader"],
            correct: 2
        },
        {
            question: "What is binding in loaders?",
            options: ["Linking modules", "Assigning physical addresses", "Loading program", "Executing program"],
            correct: 1
        },
        {
            question: "Which table contains information about external symbols?",
            options: ["Symbol table", "ESTAB", "GST", "MDT"],
            correct: 1
        },
        {
            question: "What is the GST in linker design?",
            options: ["Global Symbol Table", "General Symbol Table", "Global Source Table", "General Source Table"],
            correct: 0
        },
        {
            question: "Which linking occurs at runtime?",
            options: ["Static linking", "Dynamic linking", "Load-time linking", "Compile-time linking"],
            correct: 1
        },
        {
            question: "What is the purpose of a direct linking loader?",
            options: ["Load programs directly", "Link and load simultaneously", "Load without linking", "Link after loading"],
            correct: 1
        },
        {
            question: "Which loader scheme uses relocation bits?",
            options: ["Absolute loading", "Relocatable loading", "Dynamic loading", "Static loading"],
            correct: 1
        },
        {
            question: "What is load-time dynamic linking?",
            options: ["Link at compile time", "Link when program loads", "Link during execution", "Link after execution"],
            correct: 1
        },
        {
            question: "Which table is used for address translation in loaders?",
            options: ["Symbol table", "Address table", "Translation table", "Relocation table"],
            correct: 3
        },
        {
            question: "What is the advantage of dynamic linking?",
            options: ["Faster loading", "Library updates without recompilation", "Smaller executable", "All of the above"],
            correct: 3
        },
        {
            question: "Which loader handles overlay structured programs?",
            options: ["Absolute loader", "Relocating loader", "Overlay loader", "Bootstrap loader"],
            correct: 2
        },
        {
            question: "What is the purpose of a linkage editor?",
            options: ["Edit source code", "Resolve external references", "Load programs", "Execute programs"],
            correct: 1
        },
        {
            question: "Which linking method requires less memory?",
            options: ["Static linking", "Dynamic linking", "Both same", "Depends on program"],
            correct: 1
        },
        {
            question: "What is run-time dynamic linking?",
            options: ["Link at compile time", "Link at load time", "Link during execution", "Link after execution"],
            correct: 2
        },
        {
            question: "Which loader scheme modifies object code?",
            options: ["Absolute loading", "Relocatable loading", "Direct loading", "Static loading"],
            correct: 1
        },
        {
            question: "What is the role of a binder in linking?",
            options: ["Bind symbols to addresses", "Bind modules together", "Both A and B", "Load programs"],
            correct: 2
        }
    ],
    4: [ // Unit 4: Macro Processors (25 questions)
        {
            question: "What is a macro in system programming?",
            options: ["Small program", "Sequence of instructions represented by name", "Memory location", "Register value"],
            correct: 1
        },
        {
            question: "What is macro expansion?",
            options: ["Compressing code", "Replacing macro call with definition", "Deleting macros", "Creating macros"],
            correct: 1
        },
        {
            question: "Which directive marks the start of macro definition?",
            options: ["MACRO", "START", "BEGIN", "DEFINE"],
            correct: 0
        },
        {
            question: "What is a macro parameter?",
            options: ["Macro name", "Value passed to macro", "Macro body", "Macro end"],
            correct: 1
        },
        {
            question: "Which table stores macro definitions?",
            options: ["MDT", "MNT", "ALA", "Both A and B"],
            correct: 3
        },
        {
            question: "What is the MNT in macro processors?",
            options: ["Macro Name Table", "Macro Number Table", "Memory Name Table", "Module Name Table"],
            correct: 0
        },
        {
            question: "What is the MDT in macro processors?",
            options: ["Macro Definition Table", "Macro Data Table", "Memory Definition Table", "Module Definition Table"],
            correct: 0
        },
        {
            question: "Which type of macro has parameters?",
            options: ["Simple macro", "Parameterized macro", "Nested macro", "Conditional macro"],
            correct: 1
        },
        {
            question: "What is positional parameter in macros?",
            options: ["Named parameters", "Parameters by position", "Default parameters", "Optional parameters"],
            correct: 1
        },
        {
            question: "Which directive marks the end of macro definition?",
            options: ["END", "MEND", "FINISH", "STOP"],
            correct: 1
        },
        {
            question: "What is a nested macro call?",
            options: ["Macro inside macro", "Multiple macro calls", "Recursive macro", "Conditional macro"],
            correct: 0
        },
        {
            question: "Which table is used for parameter substitution?",
            options: ["ALA", "MNT", "MDT", "EST"],
            correct: 0
        },
        {
            question: "What is the ALA in macro processors?",
            options: ["Argument List Array", "Actual Label Array", "Address Location Array", "Argument Location Array"],
            correct: 0
        },
        {
            question: "Which macro facility allows conditional expansion?",
            options: ["Simple macro", "Parameterized macro", "Conditional macro", "Nested macro"],
            correct: 2
        },
        {
            question: "What is the advantage of using macros?",
            options: ["Faster execution", "Code reusability", "Memory efficiency", "Error reduction"],
            correct: 1
        },
        {
            question: "Which type of macro can call itself?",
            options: ["Simple macro", "Recursive macro", "Conditional macro", "Nested macro"],
            correct: 1
        },
        {
            question: "What is macro time variable?",
            options: ["Runtime variable", "Compile-time counter", "Memory variable", "Register variable"],
            correct: 1
        },
        {
            question: "Which directive is used for macro expansion control?",
            options: ["IF", "WHILE", "FOR", "All of the above"],
            correct: 3
        },
        {
            question: "What is the difference between macro and subroutine?",
            options: ["Speed", "Code generation vs execution", "Memory usage", "Parameter passing"],
            correct: 1
        },
        {
            question: "Which macro processor handles advanced features?",
            options: ["Simple macro processor", "Advanced macro processor", "Basic macro processor", "Standard macro processor"],
            correct: 1
        },
        {
            question: "What is keyword parameter in macros?",
            options: ["Position-based", "Name-based parameters", "Default parameters", "Optional parameters"],
            correct: 1
        },
        {
            question: "Which table contains macro prototype information?",
            options: ["MNT", "MDT", "ALA", "EST"],
            correct: 0
        },
        {
            question: "What is the purpose of macro concatenation?",
            options: ["Join strings", "Join macro calls", "Join parameters", "Join definitions"],
            correct: 0
        },
        {
            question: "Which macro feature allows string manipulation?",
            options: ["Concatenation", "Generation", "Both A and B", "None"],
            correct: 2
        },
        {
            question: "What is a macro library?",
            options: ["Collection of macros", "Collection of programs", "Collection of data", "Collection of instructions"],
            correct: 0
        }
    ],
    5: [ // Unit 5: Compilers (25 questions)
        {
            question: "What is the first phase of a compiler?",
            options: ["Syntax analysis", "Lexical analysis", "Semantic analysis", "Code generation"],
            correct: 1
        },
        {
            question: "Which phase of compiler removes whitespace and comments?",
            options: ["Lexical analysis", "Syntax analysis", "Semantic analysis", "Preprocessing"],
            correct: 0
        },
        {
            question: "What is the purpose of syntax analysis?",
            options: ["Check spelling", "Check grammar", "Check meaning", "Generate code"],
            correct: 1
        },
        {
            question: "Which parser uses top-down approach?",
            options: ["LR parser", "LL parser", "Recursive descent", "Both B and C"],
            correct: 3
        },
        {
            question: "What is semantic analysis in compilers?",
            options: ["Syntax checking", "Meaning checking", "Code generation", "Optimization"],
            correct: 1
        },
        {
            question: "Which phase generates intermediate code?",
            options: ["Lexical analysis", "Syntax analysis", "Semantic analysis", "Intermediate code generation"],
            correct: 3
        },
        {
            question: "What is the purpose of code optimization?",
            options: ["Make code faster", "Make code smaller", "Both A and B", "Check errors"],
            correct: 2
        },
        {
            question: "Which symbol table is used in compilers?",
            options: ["Hash table", "Binary tree", "Linked list", "Array"],
            correct: 0
        },
        {
            question: "What is a token in lexical analysis?",
            options: ["Character", "Sequence of characters", "Keyword or identifier", "All of the above"],
            correct: 2
        },
        {
            question: "Which parsing technique uses predictive parsing?",
            options: ["LL parsing", "LR parsing", "Recursive descent", "All of the above"],
            correct: 3
        },
        {
            question: "What is the purpose of intermediate code?",
            options: ["Execute program", "Machine independence", "Error checking", "Memory management"],
            correct: 1
        },
        {
            question: "Which optimization technique eliminates dead code?",
            options: ["Loop optimization", "Dead code elimination", "Constant folding", "Strength reduction"],
            correct: 1
        },
        {
            question: "What is the purpose of a lexer?",
            options: ["Generate tokens", "Parse grammar", "Check semantics", "Optimize code"],
            correct: 0
        },
        {
            question: "Which grammar is used in LR parsing?",
            options: ["Context-free grammar", "Regular grammar", "Context-sensitive grammar", "Unrestricted grammar"],
            correct: 0
        },
        {
            question: "What is type checking done in?",
            options: ["Lexical analysis", "Syntax analysis", "Semantic analysis", "Code generation"],
            correct: 2
        },
        {
            question: "Which intermediate representation is tree-based?",
            options: ["Three-address code", "Syntax tree", "Postfix notation", "Quadruples"],
            correct: 1
        },
        {
            question: "What is the purpose of register allocation?",
            options: ["Memory management", "Variable assignment to registers", "Code optimization", "Error handling"],
            correct: 1
        },
        {
            question: "Which phase handles machine-dependent code generation?",
            options: ["Lexical analysis", "Syntax analysis", "Code generation", "Optimization"],
            correct: 2
        },
        {
            question: "What is lookahead in parsing?",
            options: ["Previous symbols", "Next symbols", "Current symbols", "All symbols"],
            correct: 1
        },
        {
            question: "Which error recovery technique replaces tokens?",
            options: ["Panic mode", "Phrase level", "Error productions", "Global correction"],
            correct: 1
        },
        {
            question: "What is the purpose of a parser?",
            options: ["Generate tokens", "Check syntax", "Generate code", "Optimize code"],
            correct: 1
        },
        {
            question: "Which optimization moves code out of loops?",
            options: ["Loop unrolling", "Code motion", "Induction variable", "Common subexpression"],
            correct: 1
        },
        {
            question: "What is backpatching in compilers?",
            options: ["Forward reference resolution", "Backward compatibility", "Error correction", "Code generation"],
            correct: 0
        },
        {
            question: "Which compiler phase uses finite automata?",
            options: ["Lexical analysis", "Syntax analysis", "Semantic analysis", "Code generation"],
            correct: 0
        },
        {
            question: "What is the purpose of peephole optimization?",
            options: ["Global optimization", "Local optimization", "Inter-procedural", "Intra-procedural"],
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
        if (spQuestions[unitId]) {
            spQuestions[unitId].forEach(question => {
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
