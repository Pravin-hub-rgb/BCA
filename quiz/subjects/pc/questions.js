// quiz/subjects/pc/questions.js
const pcQuestions = {
    1: [ // Unit 1: Introduction to C Programming (20 questions)
        {
            question: "Who developed the C programming language?",
            options: ["Dennis Ritchie", "Bjarne Stroustrup", "James Gosling", "Guido van Rossum"],
            correct: 0
        },
        {
            question: "Which symbol is used to terminate a C statement?",
            options: [";", ":", ".", ","],
            correct: 0
        },
        {
            question: "What is the extension of C source files?",
            options: [".c", ".cpp", ".java", ".py"],
            correct: 0
        },
        {
            question: "Which function is the entry point of a C program?",
            options: ["start()", "main()", "begin()", "init()"],
            correct: 1
        },
        {
            question: "What does IDE stand for in C programming?",
            options: ["Integrated Development Environment", "Internal Development Engine", "Interactive Design Editor", "Integrated Data Environment"],
            correct: 0
        },
        {
            question: "Which phase converts source code to object code?",
            options: ["Preprocessing", "Compilation", "Linking", "Execution"],
            correct: 1
        },
        {
            question: "What is the purpose of #include directive?",
            options: ["Define functions", "Include header files", "Create variables", "End program"],
            correct: 1
        },
        {
            question: "Which header file contains printf function?",
            options: ["<conio.h>", "<stdio.h>", "<stdlib.h>", "<string.h>"],
            correct: 1
        },
        {
            question: "What is the return type of main function?",
            options: ["void", "int", "char", "float"],
            correct: 1
        },
        {
            question: "Which compiler is commonly used for C programming?",
            options: ["GCC", "JVM", "Python Interpreter", "Node.js"],
            correct: 0
        },
        {
            question: "What is the purpose of comments in C?",
            options: ["Execute code", "Document code", "Compile faster", "Debug program"],
            correct: 1
        },
        {
            question: "Which character set is used in C programming?",
            options: ["ASCII", "Unicode", "EBCDIC", "Binary"],
            correct: 0
        },
        {
            question: "What is the purpose of preprocessor directives?",
            options: ["Execute program", "Process source before compilation", "Debug program", "Link libraries"],
            correct: 1
        },
        {
            question: "Which function is used to print output in C?",
            options: ["scanf", "printf", "cin", "cout"],
            correct: 1
        },
        {
            question: "What is the structure of a C program?",
            options: ["Documentation, Link, Definition, Global Declaration, main(), Subprograms", "Header files, main(), Functions", "Variables, Constants, Functions", "Only main function"],
            correct: 0
        },
        {
            question: "Which phase combines object files into executable?",
            options: ["Preprocessing", "Compilation", "Linking", "Loading"],
            correct: 2
        },
        {
            question: "What is a token in C?",
            options: ["Variable", "Smallest individual unit", "Function", "Program"],
            correct: 1
        },
        {
            question: "Which of these is a keyword in C?",
            options: ["include", "main", "int", "printf"],
            correct: 2
        },
        {
            question: "What is the purpose of getch() function?",
            options: ["Read input", "Display output", "Wait for key press", "Clear screen"],
            correct: 2
        },
        {
            question: "Which header file is required for clrscr()?",
            options: ["<stdio.h>", "<conio.h>", "<stdlib.h>", "<string.h>"],
            correct: 1
        }
    ],
    2: [ // Unit 2: Data Types and Operators (20 questions)
        {
            question: "Which data type is used to store whole numbers?",
            options: ["float", "char", "int", "double"],
            correct: 2
        },
        {
            question: "What is the size of int data type in C?",
            options: ["1 byte", "2 bytes", "4 bytes", "8 bytes"],
            correct: 2
        },
        {
            question: "Which operator is used for assignment?",
            options: ["==", "=", "!=", "==="],
            correct: 1
        },
        {
            question: "What is the result of 5/2 in integer division?",
            options: ["2.5", "2", "3", "Error"],
            correct: 1
        },
        {
            question: "Which operator has highest precedence?",
            options: ["+", "*", "=", "()"],
            correct: 3
        },
        {
            question: "What is a variable in C?",
            options: ["Constant value", "Named memory location", "Function name", "Keyword"],
            correct: 1
        },
        {
            question: "Which data type can store decimal numbers?",
            options: ["int", "char", "float", "void"],
            correct: 2
        },
        {
            question: "What is the use of sizeof operator?",
            options: ["Calculate size", "Find address", "Compare values", "Assign values"],
            correct: 0
        },
        {
            question: "Which is a logical operator?",
            options: ["+", "&&", "*", "/"],
            correct: 1
        },
        {
            question: "What is a constant in C?",
            options: ["Changing value", "Fixed value", "Function", "Variable"],
            correct: 1
        },
        {
            question: "Which format specifier is used for integers?",
            options: ["%f", "%d", "%c", "%s"],
            correct: 1
        },
        {
            question: "What is type casting?",
            options: ["Converting data types", "Creating variables", "Defining functions", "Including headers"],
            correct: 0
        },
        {
            question: "Which operator is used for modulus?",
            options: ["/", "%", "*", "-"],
            correct: 1
        },
        {
            question: "What is the range of char data type?",
            options: ["-128 to 127", "0 to 255", "-32768 to 32767", "Depends on compiler"],
            correct: 0
        },
        {
            question: "Which is a relational operator?",
            options: ["+", "-", ">", "="],
            correct: 2
        },
        {
            question: "What is an identifier in C?",
            options: ["Keyword", "Constant", "Name given to variables", "Operator"],
            correct: 2
        },
        {
            question: "Which data type can store single character?",
            options: ["int", "float", "char", "double"],
            correct: 2
        },
        {
            question: "What is the use of increment operator?",
            options: ["Add 1", "Subtract 1", "Multiply by 2", "Divide by 2"],
            correct: 0
        },
        {
            question: "Which is a valid variable name?",
            options: ["123abc", "_abc", "abc-123", "int"],
            correct: 1
        },
        {
            question: "What is the result of 10 % 3?",
            options: ["3", "1", "3.33", "Error"],
            correct: 1
        }
    ],
    3: [ // Unit 3: Control Structures (25 questions)
        {
            question: "Which statement is used for decision making?",
            options: ["for", "while", "if", "switch"],
            correct: 2
        },
        {
            question: "What is the syntax of if statement?",
            options: ["if condition then statement", "if (condition) statement", "if condition: statement", "if [condition] statement"],
            correct: 1
        },
        {
            question: "Which loop executes at least once?",
            options: ["for", "while", "do-while", "if-else"],
            correct: 2
        },
        {
            question: "What is the use of break statement?",
            options: ["Continue loop", "Exit loop", "Skip iteration", "Start loop"],
            correct: 1
        },
        {
            question: "Which statement executes when condition is false?",
            options: ["if", "else", "switch", "case"],
            correct: 1
        },
        {
            question: "What is the syntax of for loop?",
            options: ["for(initialization; condition; increment)", "for(condition; increment; initialization)", "for(increment; condition; initialization)", "for(condition; initialization; increment)"],
            correct: 0
        },
        {
            question: "Which statement is used for multiple choices?",
            options: ["if", "if-else", "switch", "nested if"],
            correct: 2
        },
        {
            question: "What is the use of continue statement?",
            options: ["Exit loop", "Skip current iteration", "Start loop", "End program"],
            correct: 1
        },
        {
            question: "Which loop is entry controlled?",
            options: ["for", "while", "do-while", "Both A and B"],
            correct: 3
        },
        {
            question: "What is a nested if statement?",
            options: ["Multiple if statements", "if inside another if", "if with else", "if with switch"],
            correct: 1
        },
        {
            question: "Which keyword is used in switch statement?",
            options: ["case", "if", "for", "while"],
            correct: 0
        },
        {
            question: "What is the use of default in switch?",
            options: ["First case", "Last case when no match", "Error handling", "Loop control"],
            correct: 1
        },
        {
            question: "Which statement executes statements repeatedly?",
            options: ["if", "switch", "loop", "function"],
            correct: 2
        },
        {
            question: "What is an infinite loop?",
            options: ["Loop with counter", "Loop that never ends", "Loop with condition", "Loop with break"],
            correct: 1
        },
        {
            question: "Which operator is used in conditions?",
            options: ["Arithmetic", "Relational", "Assignment", "Unary"],
            correct: 1
        },
        {
            question: "What is the purpose of goto statement?",
            options: ["Function call", "Jump to label", "Variable declaration", "Loop control"],
            correct: 1
        },
        {
            question: "Which statement is used for conditional compilation?",
            options: ["#if", "#define", "#include", "#pragma"],
            correct: 0
        },
        {
            question: "What is a compound statement?",
            options: ["Single statement", "Multiple statements in braces", "Function call", "Variable declaration"],
            correct: 1
        },
        {
            question: "Which loop is best for known iterations?",
            options: ["while", "do-while", "for", "switch"],
            correct: 2
        },
        {
            question: "What is the use of ternary operator?",
            options: ["Arithmetic", "Conditional assignment", "Loop control", "Function call"],
            correct: 1
        },
        {
            question: "Which statement executes only one case in switch?",
            options: ["break", "continue", "return", "goto"],
            correct: 0
        },
        {
            question: "What is a dangling else problem?",
            options: ["Missing else", "Else associated with wrong if", "Extra else", "Nested else"],
            correct: 1
        },
        {
            question: "Which loop checks condition at the end?",
            options: ["for", "while", "do-while", "switch"],
            correct: 2
        },
        {
            question: "What is the use of exit() function?",
            options: ["Continue program", "Terminate program", "Pause program", "Restart program"],
            correct: 1
        },
        {
            question: "Which control structure is used for menu selection?",
            options: ["if-else", "switch", "for", "while"],
            correct: 1
        }
    ],
    4: [ // Unit 4: Functions and Arrays (25 questions)
        {
            question: "What is a function in C?",
            options: ["Variable", "Block of code", "Data type", "Operator"],
            correct: 1
        },
        {
            question: "Which keyword is used to define a function?",
            options: ["function", "define", "void", "return"],
            correct: 2
        },
        {
            question: "What is function prototype?",
            options: ["Function definition", "Function declaration", "Function call", "Function body"],
            correct: 1
        },
        {
            question: "Which function is called automatically?",
            options: ["user-defined", "main", "library", "recursive"],
            correct: 1
        },
        {
            question: "What is an array in C?",
            options: ["Single variable", "Collection of similar elements", "Function", "Pointer"],
            correct: 1
        },
        {
            question: "How to declare an integer array?",
            options: ["int arr[]", "array int arr", "int arr{}", "arr int[]"],
            correct: 0
        },
        {
            question: "What is array index?",
            options: ["Array size", "Position of element", "Array type", "Memory address"],
            correct: 1
        },
        {
            question: "Which function is used for string input?",
            options: ["printf", "scanf", "gets", "puts"],
            correct: 2
        },
        {
            question: "What is strlen() function?",
            options: ["Copy string", "Compare strings", "String length", "Concatenate strings"],
            correct: 2
        },
        {
            question: "What is a multidimensional array?",
            options: ["Single dimension", "Multiple dimensions", "Dynamic size", "Fixed size"],
            correct: 1
        },
        {
            question: "How to pass array to function?",
            options: ["By value", "By reference", "By address", "By name"],
            correct: 1
        },
        {
            question: "What is recursion?",
            options: ["Loop", "Function calling itself", "Multiple functions", "Array operation"],
            correct: 1
        },
        {
            question: "Which statement returns value from function?",
            options: ["break", "continue", "return", "goto"],
            correct: 2
        },
        {
            question: "What is local variable?",
            options: ["Global scope", "Function scope", "File scope", "Program scope"],
            correct: 1
        },
        {
            question: "What is global variable?",
            options: ["Function scope", "File scope", "Block scope", "Parameter scope"],
            correct: 1
        },
        {
            question: "Which function receives command line arguments?",
            options: ["main()", "main(int argc)", "main(int argc, char *argv[])", "main(void)"],
            correct: 2
        },
        {
            question: "What is argv[0] in command line?",
            options: ["First argument", "Program name", "Null character", "Argument count"],
            correct: 1
        },
        {
            question: "What is a string in C?",
            options: ["Character array", "Integer array", "Float array", "Pointer array"],
            correct: 0
        },
        {
            question: "Which header is required for string functions?",
            options: ["<stdio.h>", "<conio.h>", "<string.h>", "<stdlib.h>"],
            correct: 2
        },
        {
            question: "What is strcpy() function?",
            options: ["Compare strings", "Copy strings", "Length of string", "Concatenate strings"],
            correct: 1
        },
        {
            question: "What is the first index of array?",
            options: ["-1", "0", "1", "Depends on compiler"],
            correct: 1
        },
        {
            question: "What is function parameter?",
            options: ["Return value", "Input to function", "Function name", "Variable type"],
            correct: 1
        },
        {
            question: "Which storage class is default for local variables?",
            options: ["auto", "static", "extern", "register"],
            correct: 0
        },
        {
            question: "What is static variable?",
            options: ["Global variable", "Retains value between calls", "Local variable", "Parameter"],
            correct: 1
        },
        {
            question: "What is array bound checking?",
            options: ["Size checking", "Index validation", "Memory allocation", "Array initialization"],
            correct: 1
        }
    ],
    5: [ // Unit 5: Pointers and Structures (25 questions)
        {
            question: "What is a pointer in C?",
            options: ["Variable", "Memory address", "Data type", "Function"],
            correct: 1
        },
        {
            question: "How to declare a pointer?",
            options: ["int ptr", "int *ptr", "pointer int", "*int ptr"],
            correct: 1
        },
        {
            question: "What is the dereference operator?",
            options: ["&", "*", "#", "@"],
            correct: 1
        },
        {
            question: "What is the address operator?",
            options: ["*", "&", "^", "%"],
            correct: 1
        },
        {
            question: "What is NULL pointer?",
            options: ["Zero value", "Invalid address", "Both A and B", "Memory address"],
            correct: 2
        },
        {
            question: "What is a structure in C?",
            options: ["Function", "User-defined data type", "Array", "Pointer"],
            correct: 1
        },
        {
            question: "How to access structure member?",
            options: ["structure.member", "structure->member", "Both A and B", "structure::member"],
            correct: 0
        },
        {
            question: "What is typedef used for?",
            options: ["Define functions", "Create aliases", "Include headers", "Define macros"],
            correct: 1
        },
        {
            question: "What is union in C?",
            options: ["Multiple members, shared memory", "Multiple members, separate memory", "Single member", "Array of structures"],
            correct: 0
        },
        {
            question: "How to declare structure variable?",
            options: ["struct name var", "struct var name", "name struct var", "var struct name"],
            correct: 0
        },
        {
            question: "What is pointer to structure?",
            options: ["Structure pointer", "Pointer inside structure", "Array of structures", "Function pointer"],
            correct: 0
        },
        {
            question: "How to access pointer structure member?",
            options: ["ptr.member", "ptr->member", "(*ptr).member", "Both B and C"],
            correct: 3
        },
        {
            question: "What is dynamic memory allocation?",
            options: ["Static allocation", "Runtime allocation", "Compile time allocation", "Automatic allocation"],
            correct: 1
        },
        {
            question: "Which function allocates memory?",
            options: ["malloc", "free", "realloc", "calloc"],
            correct: 0
        },
        {
            question: "What does malloc return?",
            options: ["int", "void*", "char*", "size_t"],
            correct: 1
        },
        {
            question: "Which function frees memory?",
            options: ["alloc", "realloc", "free", "delete"],
            correct: 2
        },
        {
            question: "What is memory leak?",
            options: ["Memory full", "Allocated memory not freed", "Invalid pointer", "Null pointer"],
            correct: 1
        },
        {
            question: "What is file pointer?",
            options: ["Pointer to file", "Pointer to FILE structure", "File handle", "All of the above"],
            correct: 1
        },
        {
            question: "Which function opens a file?",
            options: ["open", "fopen", "create", "new"],
            correct: 1
        },
        {
            question: "What is the mode for reading file?",
            options: ["w", "r", "a", "x"],
            correct: 1
        },
        {
            question: "Which function reads from file?",
            options: ["fprintf", "fscanf", "printf", "scanf"],
            correct: 1
        },
        {
            question: "What is EOF?",
            options: ["End Of File", "Error On File", "Execute On File", "Exit On File"],
            correct: 0
        },
        {
            question: "Which function closes file?",
            options: ["close", "fclose", "end", "finish"],
            correct: 1
        },
        {
            question: "What is dangling pointer?",
            options: ["Null pointer", "Points to freed memory", "Invalid pointer", "Memory address"],
            correct: 1
        },
        {
            question: "What is array of pointers?",
            options: ["Pointer array", "Array of addresses", "Both A and B", "Structure array"],
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
        if (pcQuestions[unitId]) {
            pcQuestions[unitId].forEach(question => {
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
