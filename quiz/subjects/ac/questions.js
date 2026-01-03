// quiz/subjects/ac/questions.js
const acQuestions = {
    1: [ // Unit 1: Pointers and Memory Management (20 questions)
        {
            question: "What is the correct way to allocate memory for an integer using malloc?",
            options: ["int *ptr = malloc(sizeof(int));", "int ptr = malloc(sizeof(int));", "int *ptr = (int*)malloc(sizeof(int));", "Both A and C are correct"],
            correct: 3
        },
        {
            question: "Which function is used to free dynamically allocated memory?",
            options: ["delete", "free", "dealloc", "release"],
            correct: 1
        },
        {
            question: "What happens if you try to access memory that has been freed?",
            options: ["Program crashes", "Undefined behavior", "Memory is automatically reallocated", "No effect"],
            correct: 1
        },
        {
            question: "Which operator is used for pointer dereferencing?",
            options: ["&", "*", "->", "."],
            correct: 1
        },
        {
            question: "What is a dangling pointer?",
            options: ["Pointer pointing to invalid memory", "Pointer with NULL value", "Pointer pointing to valid memory", "Pointer to a function"],
            correct: 0
        },
        {
            question: "Which function allocates and initializes memory to zero?",
            options: ["malloc", "calloc", "realloc", "free"],
            correct: 1
        },
        {
            question: "What is the difference between malloc and calloc?",
            options: ["malloc allocates, calloc initializes", "No difference", "malloc is faster", "calloc takes two arguments"],
            correct: 0
        },
        {
            question: "Which type of pointer can point to any data type?",
            options: ["void pointer", "int pointer", "char pointer", "float pointer"],
            correct: 0
        },
        {
            question: "What is pointer arithmetic?",
            options: ["Adding numbers to pointers", "Mathematical operations on pointers", "Pointer increment/decrement by data type size", "All of the above"],
            correct: 2
        },
        {
            question: "Which memory allocation is done at compile time?",
            options: ["Static allocation", "Dynamic allocation", "Automatic allocation", "Heap allocation"],
            correct: 0
        },
        {
            question: "What is a memory leak?",
            options: ["Allocated memory not freed", "Freed memory accessed", "Invalid pointer", "Buffer overflow"],
            correct: 0
        },
        {
            question: "Which function changes the size of previously allocated memory?",
            options: ["malloc", "calloc", "realloc", "free"],
            correct: 2
        },
        {
            question: "What is the return type of malloc function?",
            options: ["int", "void*", "char*", "size_t"],
            correct: 1
        },
        {
            question: "Which memory segment stores dynamically allocated memory?",
            options: ["Stack", "Heap", "Data segment", "Code segment"],
            correct: 1
        },
        {
            question: "What is a function pointer?",
            options: ["Pointer to a function", "Function returning pointer", "Array of pointers", "Pointer to array"],
            correct: 0
        },
        {
            question: "Which operator gives the address of a variable?",
            options: ["*", "&", "->", "."],
            correct: 1
        },
        {
            question: "What is the size of a pointer in C?",
            options: ["Always 4 bytes", "Always 8 bytes", "Depends on system architecture", "Depends on data type"],
            correct: 2
        },
        {
            question: "Which memory is automatically managed by compiler?",
            options: ["Heap memory", "Stack memory", "Global memory", "Static memory"],
            correct: 1
        },
        {
            question: "What is NULL pointer?",
            options: ["Pointer with value 0", "Uninitialized pointer", "Dangling pointer", "Void pointer"],
            correct: 0
        },
        {
            question: "Which function can be used to copy memory blocks?",
            options: ["strcpy", "memcpy", "memmove", "Both B and C"],
            correct: 3
        }
    ],
    2: [ // Unit 2: Advanced Data Structures in C (20 questions)
        {
            question: "What is a linked list?",
            options: ["Contiguous memory locations", "Nodes connected by pointers", "Fixed size array", "Circular array"],
            correct: 1
        },
        {
            question: "Which operation is more efficient in linked list than array?",
            options: ["Access by index", "Insertion at beginning", "Searching", "Sorting"],
            correct: 1
        },
        {
            question: "What is a doubly linked list?",
            options: ["Two separate lists", "Each node has two pointers", "Circular list", "Sorted list"],
            correct: 1
        },
        {
            question: "Which data structure follows LIFO principle?",
            options: ["Queue", "Stack", "Linked list", "Tree"],
            correct: 1
        },
        {
            question: "What is the time complexity of stack push operation?",
            options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
            correct: 0
        },
        {
            question: "Which data structure follows FIFO principle?",
            options: ["Stack", "Queue", "Tree", "Graph"],
            correct: 1
        },
        {
            question: "What is a circular linked list?",
            options: ["List with loops", "Last node points to first node", "Sorted list", "Doubly linked list"],
            correct: 1
        },
        {
            question: "Which tree traversal visits root first?",
            options: ["Inorder", "Preorder", "Postorder", "Level order"],
            correct: 1
        },
        {
            question: "What is a binary search tree?",
            options: ["Complete binary tree", "Left < root < right", "Balanced tree", "Full binary tree"],
            correct: 1
        },
        {
            question: "Which data structure is used for breadth-first search?",
            options: ["Stack", "Queue", "Tree", "Graph"],
            correct: 1
        },
        {
            question: "What is the height of a tree with one node?",
            options: ["0", "1", "2", "-1"],
            correct: 0
        },
        {
            question: "Which linked list allows traversal in both directions?",
            options: ["Singly linked list", "Doubly linked list", "Circular linked list", "Sorted linked list"],
            correct: 1
        },
        {
            question: "What is a priority queue?",
            options: ["FIFO queue", "Elements with priorities", "LIFO structure", "Random access"],
            correct: 1
        },
        {
            question: "Which data structure is used for implementing recursion?",
            options: ["Queue", "Stack", "Linked list", "Tree"],
            correct: 1
        },
        {
            question: "What is the time complexity of queue enqueue operation?",
            options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
            correct: 0
        },
        {
            question: "Which tree has at most two children per node?",
            options: ["General tree", "Binary tree", "N-ary tree", "Forest"],
            correct: 1
        },
        {
            question: "What is the inorder traversal of BST: 1,2,3,4,5?",
            options: ["1,2,3,4,5", "5,4,3,2,1", "3,2,1,4,5", "1,3,2,5,4"],
            correct: 0
        },
        {
            question: "Which data structure uses top and front pointers?",
            options: ["Stack", "Queue", "Tree", "Graph"],
            correct: 1
        },
        {
            question: "What is a sparse matrix?",
            options: ["Matrix with zeros", "Matrix with few non-zero elements", "Square matrix", "Identity matrix"],
            correct: 1
        },
        {
            question: "Which traversal visits leaves first?",
            options: ["Preorder", "Inorder", "Postorder", "Level order"],
            correct: 2
        }
    ],
    3: [ // Unit 3: File Handling and I/O Operations (25 questions)
        {
            question: "Which function is used to open a file in C?",
            options: ["open", "fopen", "create", "new"],
            correct: 1
        },
        {
            question: "What is the correct syntax for fopen?",
            options: ["fopen(filename, mode)", "fopen(mode, filename)", "open(filename, mode)", "create(filename, mode)"],
            correct: 0
        },
        {
            question: "Which file mode opens file for reading?",
            options: ["w", "r", "a", "x"],
            correct: 1
        },
        {
            question: "Which function closes an opened file?",
            options: ["close", "fclose", "end", "finish"],
            correct: 1
        },
        {
            question: "What does fprintf do?",
            options: ["Read from file", "Write formatted data to file", "Read formatted data", "Close file"],
            correct: 1
        },
        {
            question: "Which function reads a character from file?",
            options: ["fread", "fscanf", "fgetc", "fgets"],
            correct: 2
        },
        {
            question: "What is the difference between text and binary files?",
            options: ["Size", "Content representation", "Speed", "Security"],
            correct: 1
        },
        {
            question: "Which function writes a block of data to file?",
            options: ["fwrite", "fprintf", "fputs", "fputc"],
            correct: 0
        },
        {
            question: "What is fseek used for?",
            options: ["Find file size", "Move file pointer", "Read file", "Write file"],
            correct: 1
        },
        {
            question: "Which function returns current file position?",
            options: ["ftell", "fseek", "rewind", "feof"],
            correct: 0
        },
        {
            question: "What does feof check?",
            options: ["File size", "End of file", "File permissions", "File type"],
            correct: 1
        },
        {
            question: "Which mode opens file for both reading and writing?",
            options: ["r+", "w+", "a+", "x+"],
            correct: 1
        },
        {
            question: "What is the return type of fopen?",
            options: ["int", "FILE*", "char*", "void"],
            correct: 1
        },
        {
            question: "Which function reads a string from file?",
            options: ["fgets", "fscanf", "fread", "fgetc"],
            correct: 0
        },
        {
            question: "What is the difference between fgets and fscanf?",
            options: ["Speed", "Input format", "File type", "Memory usage"],
            correct: 1
        },
        {
            question: "Which function writes a string to file?",
            options: ["fputs", "fprintf", "fwrite", "fputc"],
            correct: 0
        },
        {
            question: "What is random access in files?",
            options: ["Sequential access", "Direct access to any position", "Only beginning access", "Only end access"],
            correct: 1
        },
        {
            question: "Which function clears file error indicators?",
            options: ["clearerr", "ferror", "feof", "rewind"],
            correct: 0
        },
        {
            question: "What does ferror check?",
            options: ["End of file", "File errors", "File position", "File size"],
            correct: 1
        },
        {
            question: "Which mode creates a new file or truncates existing?",
            options: ["r", "w", "a", "r+"],
            correct: 1
        },
        {
            question: "What is the purpose of fflush?",
            options: ["Clear buffer", "Flush output buffer", "Clear input buffer", "Close file"],
            correct: 1
        },
        {
            question: "Which function reads formatted input from file?",
            options: ["fscanf", "fgets", "fread", "fgetc"],
            correct: 0
        },
        {
            question: "What is binary file mode?",
            options: ["Text mode", "Raw data mode", "Formatted mode", "String mode"],
            correct: 1
        },
        {
            question: "Which function sets file position to beginning?",
            options: ["fseek", "rewind", "ftell", "feof"],
            correct: 1
        },
        {
            question: "What is the difference between ftell and fseek?",
            options: ["ftell moves pointer, fseek gets position", "ftell gets position, fseek moves pointer", "No difference", "ftell closes file"],
            correct: 1
        }
    ],
    4: [ // Unit 4: Preprocessor and Advanced Features (25 questions)
        {
            question: "What is the preprocessor in C?",
            options: ["Compiler", "Program that processes source before compilation", "Linker", "Debugger"],
            correct: 1
        },
        {
            question: "Which symbol starts preprocessor directives?",
            options: ["#", "@", "$", "%"],
            correct: 0
        },
        {
            question: "What does #include directive do?",
            options: ["Define macros", "Include header files", "Define constants", "Conditional compilation"],
            correct: 1
        },
        {
            question: "Which directive defines a macro?",
            options: ["#include", "#define", "#ifdef", "#pragma"],
            correct: 1
        },
        {
            question: "What is a parameterized macro?",
            options: ["Macro with arguments", "Macro without arguments", "Include directive", "Pragma directive"],
            correct: 0
        },
        {
            question: "Which directive is used for conditional compilation?",
            options: ["#include", "#define", "#ifdef", "#pragma"],
            correct: 2
        },
        {
            question: "What does #ifndef stand for?",
            options: ["If not defined", "If not equal", "If not found", "If not function"],
            correct: 0
        },
        {
            question: "Which function receives command line arguments?",
            options: ["main(int argc)", "main(int argc, char *argv[])", "main(void)", "main(char *args[])"],
            correct: 1
        },
        {
            question: "What is argv[0] in command line arguments?",
            options: ["First argument", "Program name", "Null terminator", "Argument count"],
            correct: 1
        },
        {
            question: "Which operator performs bitwise AND?",
            options: ["&", "&&", "|", "||"],
            correct: 0
        },
        {
            question: "What is bit shifting?",
            options: ["Multiplying by 2", "Moving bits left/right", "Setting bits", "Clearing bits"],
            correct: 1
        },
        {
            question: "Which operator performs bitwise XOR?",
            options: ["^", "&", "|", "~"],
            correct: 0
        },
        {
            question: "What is the result of 5 & 3?",
            options: ["8", "1", "7", "15"],
            correct: 1
        },
        {
            question: "Which directive prevents multiple inclusion?",
            options: ["#pragma once", "#ifndef HEADER_H", "#define HEADER_H", "All of the above"],
            correct: 3
        },
        {
            question: "What is a header guard?",
            options: ["Function guard", "File inclusion guard", "Variable guard", "Memory guard"],
            correct: 1
        },
        {
            question: "Which operator sets a bit?",
            options: ["|", "&", "^", "~"],
            correct: 0
        },
        {
            question: "What does left shift operator do?",
            options: ["Divide by 2", "Multiply by 2", "Add 1", "Subtract 1"],
            correct: 1
        },
        {
            question: "Which directive is used for compiler specific features?",
            options: ["#include", "#define", "#pragma", "#ifdef"],
            correct: 2
        },
        {
            question: "What is token pasting in macros?",
            options: ["## operator", "# operator", "String concatenation", "Variable concatenation"],
            correct: 0
        },
        {
            question: "Which operator converts token to string in macros?",
            options: ["##", "#", "@", "$"],
            correct: 1
        },
        {
            question: "What is the difference between #include <> and #include \"\"?",
            options: ["No difference", "Angle brackets for system headers", "Quotes for user headers", "Both B and C"],
            correct: 3
        },
        {
            question: "Which preprocessor operator checks if macro is defined?",
            options: ["defined", "ifdef", "ifndef", "if"],
            correct: 0
        },
        {
            question: "What is variadic macro?",
            options: ["Macro with variable arguments", "Macro with fixed arguments", "Recursive macro", "Conditional macro"],
            correct: 0
        },
        {
            question: "Which operator clears a bit?",
            options: ["& ~", "| ~", "^ ~", ">> ~"],
            correct: 0
        },
        {
            question: "What is the result of 5 | 3?",
            options: ["1", "7", "8", "15"],
            correct: 1
        },
        {
            question: "Which directive undefines a macro?",
            options: ["#undef", "#delete", "#remove", "#clear"],
            correct: 0
        }
    ],
    5: [ // Unit 5: System Programming Concepts (25 questions)
        {
            question: "What is a system call?",
            options: ["Function call", "Call to operating system services", "Library function", "User function"],
            correct: 1
        },
        {
            question: "Which header file contains system call declarations?",
            options: ["<stdio.h>", "<stdlib.h>", "<unistd.h>", "<string.h>"],
            correct: 2
        },
        {
            question: "What does fork() system call do?",
            options: ["Create child process", "Terminate process", "Wait for process", "Execute program"],
            correct: 0
        },
        {
            question: "Which system call creates a new process?",
            options: ["exec", "fork", "wait", "exit"],
            correct: 1
        },
        {
            question: "What is the difference between fork and exec?",
            options: ["fork creates process, exec loads program", "exec creates process, fork loads program", "No difference", "fork terminates, exec waits"],
            correct: 0
        },
        {
            question: "Which system call waits for child process?",
            options: ["wait", "waitpid", "pause", "sleep"],
            correct: 0
        },
        {
            question: "What is inter-process communication?",
            options: ["Process scheduling", "Communication between processes", "Process creation", "Process termination"],
            correct: 1
        },
        {
            question: "Which IPC method uses shared memory?",
            options: ["Pipes", "Shared memory", "Message queues", "Signals"],
            correct: 1
        },
        {
            question: "What is a pipe in Unix?",
            options: ["Storage device", "Communication channel", "Memory segment", "Process ID"],
            correct: 1
        },
        {
            question: "Which system call sends a signal to process?",
            options: ["kill", "signal", "raise", "alarm"],
            correct: 0
        },
        {
            question: "What is a signal in Unix?",
            options: ["Software interrupt", "Hardware interrupt", "System call", "Library function"],
            correct: 0
        },
        {
            question: "Which function handles signals?",
            options: ["signal", "sigaction", "kill", "raise"],
            correct: 0
        },
        {
            question: "What is the process ID returned by fork?",
            options: ["0 for parent", "0 for child, PID for parent", "PID for child", "Same for both"],
            correct: 1
        },
        {
            question: "Which exec function replaces current process image?",
            options: ["execl", "execv", "execle", "execve"],
            correct: 3
        },
        {
            question: "What is zombie process?",
            options: ["Running process", "Terminated process not reaped", "Waiting process", "Sleeping process"],
            correct: 1
        },
        {
            question: "Which IPC method is bidirectional?",
            options: ["Pipe", "Named pipe", "Both A and B", "Shared memory"],
            correct: 1
        },
        {
            question: "What is a semaphore used for?",
            options: ["Process synchronization", "Memory management", "File handling", "Network communication"],
            correct: 0
        },
        {
            question: "Which system call changes process priority?",
            options: ["nice", "priority", "setpriority", "sched_setscheduler"],
            correct: 0
        },
        {
            question: "What is daemon process?",
            options: ["User process", "Background process", "Foreground process", "System process"],
            correct: 1
        },
        {
            question: "Which function creates shared memory segment?",
            options: ["shmget", "shmat", "shmdt", "shmctl"],
            correct: 0
        },
        {
            question: "What is message queue?",
            options: ["File system", "IPC mechanism", "Memory segment", "Network protocol"],
            correct: 1
        },
        {
            question: "Which system call maps shared memory?",
            options: ["shmget", "shmat", "shmdt", "shmctl"],
            correct: 1
        },
        {
            question: "What is the purpose of sigprocmask?",
            options: ["Send signal", "Block/unblock signals", "Handle signal", "Wait for signal"],
            correct: 1
        },
        {
            question: "Which function creates a pipe?",
            options: ["pipe", "mkfifo", "open", "create"],
            correct: 0
        },
        {
            question: "What is process group?",
            options: ["Single process", "Collection of processes", "Process hierarchy", "Process tree"],
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
        if (acQuestions[unitId]) {
            acQuestions[unitId].forEach(question => {
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
