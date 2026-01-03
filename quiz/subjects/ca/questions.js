// quiz/subjects/ca/questions.js
const caQuestions = {
    1: [ // Unit 1: Introduction to Computer Architecture (20 questions)
        {
            question: "What is computer architecture?",
            options: ["Physical components of a computer", "Logical structure and organization of computer systems", "Programming languages", "Operating systems"],
            correct: 1
        },
        {
            question: "Which factor is NOT considered when evaluating computer performance?",
            options: ["Clock speed", "Number of cores", "Response time", "Programming language efficiency"],
            correct: 3
        },
        {
            question: "What does CPU stand for?",
            options: ["Central Processing Unit", "Computer Processing Unit", "Central Program Unit", "Computer Program Unit"],
            correct: 0
        },
        {
            question: "Which component is responsible for executing instructions in a computer?",
            options: ["Memory", "Input device", "Central Processing Unit", "Output device"],
            correct: 2
        },
        {
            question: "What is Amdahl's law used for?",
            options: ["Measuring memory capacity", "Predicting performance improvements", "Calculating network speed", "Determining storage requirements"],
            correct: 1
        },
        {
            question: "Which type of memory is volatile?",
            options: ["Hard disk", "Random Access Memory (RAM)", "Read Only Memory (ROM)", "Flash memory"],
            correct: 1
        },
        {
            question: "What is the main function of the control unit?",
            options: ["Perform arithmetic operations", "Manage data flow", "Control instruction execution", "Store data temporarily"],
            correct: 2
        },
        {
            question: "Which bus carries data between CPU and memory?",
            options: ["Address bus", "Data bus", "Control bus", "System bus"],
            correct: 1
        },
        {
            question: "What is the purpose of the system clock?",
            options: ["Power supply", "Synchronize operations", "Cool the system", "Store data"],
            correct: 1
        },
        {
            question: "Which component acts as a bridge between CPU and I/O devices?",
            options: ["Memory", "Cache", "Bus controller", "ALU"],
            correct: 2
        },
        {
            question: "What does MIPS stand for?",
            options: ["Million Instructions Per Second", "Memory Input Processing System", "Multiple Instruction Processing System", "Main Instruction Processing Speed"],
            correct: 0
        },
        {
            question: "Which type of architecture uses multiple processors?",
            options: ["Single processor", "Multiprocessor", "Distributed", "Parallel"],
            correct: 1
        },
        {
            question: "What is the purpose of the address bus?",
            options: ["Carry data", "Carry addresses", "Carry control signals", "Carry power"],
            correct: 1
        },
        {
            question: "Which component stores the operating system?",
            options: ["RAM", "ROM", "Cache", "Registers"],
            correct: 1
        },
        {
            question: "What is the basic unit of information in computers?",
            options: ["Nibble", "Byte", "Bit", "Word"],
            correct: 2
        },
        {
            question: "Which type of computer architecture is most common today?",
            options: ["Harvard architecture", "Von Neumann architecture", "Modified Harvard", "Distributed architecture"],
            correct: 1
        },
        {
            question: "What is the function of registers in CPU?",
            options: ["Long-term storage", "Temporary data storage", "Permanent storage", "Network communication"],
            correct: 1
        },
        {
            question: "Which bus carries control signals?",
            options: ["Address bus", "Data bus", "Control bus", "Memory bus"],
            correct: 2
        },
        {
            question: "What is the purpose of the ALU?",
            options: ["Control operations", "Perform arithmetic and logic operations", "Manage memory", "Handle input/output"],
            correct: 1
        },
        {
            question: "Which component is responsible for fetching instructions from memory?",
            options: ["ALU", "Control unit", "Registers", "Cache"],
            correct: 1
        }
    ],
    2: [ // Unit 2: Instruction Set Architecture (20 questions)
        {
            question: "What is ISA?",
            options: ["Instruction Set Architecture", "Internal System Architecture", "Integrated System Array", "Instruction Storage Area"],
            correct: 0
        },
        {
            question: "Which type of instruction performs arithmetic operations?",
            options: ["Data transfer", "Arithmetic", "Logical", "Control transfer"],
            correct: 1
        },
        {
            question: "What is an opcode?",
            options: ["Operand code", "Operation code", "Operator code", "Output code"],
            correct: 1
        },
        {
            question: "Which addressing mode uses the operand as the address?",
            options: ["Immediate", "Direct", "Indirect", "Register"],
            correct: 1
        },
        {
            question: "What is the purpose of operands in an instruction?",
            options: ["Specify operation", "Specify data or addresses", "Specify timing", "Specify priority"],
            correct: 1
        },
        {
            question: "Which instruction type changes program flow?",
            options: ["Arithmetic", "Data transfer", "Control transfer", "Logical"],
            correct: 2
        },
        {
            question: "What is the format of RISC instructions?",
            options: ["Fixed length", "Variable length", "Complex", "Multi-word"],
            correct: 0
        },
        {
            question: "Which addressing mode adds a constant to register content?",
            options: ["Immediate", "Direct", "Base plus displacement", "Indirect"],
            correct: 2
        },
        {
            question: "What is assembly language?",
            options: ["High-level language", "Machine language", "Low-level programming language", "Natural language"],
            correct: 2
        },
        {
            question: "Which instruction copies data from memory to register?",
            options: ["STORE", "LOAD", "MOVE", "COPY"],
            correct: 1
        },
        {
            question: "What is the difference between CISC and RISC?",
            options: ["Instruction complexity", "Number of instructions", "Memory size", "Clock speed"],
            correct: 0
        },
        {
            question: "Which addressing mode uses register content as address?",
            options: ["Immediate", "Direct", "Register indirect", "Indexed"],
            correct: 2
        },
        {
            question: "What is an assembler?",
            options: ["Translates assembly to machine code", "Translates high-level to assembly", "Executes programs", "Debugs programs"],
            correct: 0
        },
        {
            question: "Which instruction type performs logical operations?",
            options: ["Arithmetic", "Data transfer", "Logical", "Input/Output"],
            correct: 2
        },
        {
            question: "What is the purpose of labels in assembly language?",
            options: ["Data storage", "Mark memory locations", "Specify operations", "Define functions"],
            correct: 1
        },
        {
            question: "Which addressing mode uses immediate data?",
            options: ["Direct", "Indirect", "Immediate", "Register"],
            correct: 2
        },
        {
            question: "What is the advantage of RISC over CISC?",
            options: ["More instructions", "Complex instructions", "Faster execution", "Larger programs"],
            correct: 2
        },
        {
            question: "Which instruction sets the program counter?",
            options: ["Arithmetic", "Jump", "Load", "Store"],
            correct: 1
        },
        {
            question: "What is the purpose of mnemonics in assembly language?",
            options: ["Memory allocation", "Represent instructions", "Data storage", "Error checking"],
            correct: 1
        },
        {
            question: "Which type of instruction handles input/output operations?",
            options: ["Arithmetic", "Control", "Data transfer", "I/O"],
            correct: 3
        }
    ],
    3: [ // Unit 3: Computer Arithmetic (25 questions)
        {
            question: "What is the full form of ALU?",
            options: ["Arithmetic Logic Unit", "Advanced Logic Unit", "Arithmetic Logic Union", "Advanced Logic Union"],
            correct: 0
        },
        {
            question: "Which gate performs addition in digital circuits?",
            options: ["AND gate", "OR gate", "XOR gate", "NOT gate"],
            correct: 2
        },
        {
            question: "What is the result of binary addition 1 + 1?",
            options: ["0", "1", "10", "11"],
            correct: 2
        },
        {
            question: "Which algorithm is used for binary multiplication?",
            options: ["Booth's algorithm", "Division algorithm", "Addition algorithm", "Subtraction algorithm"],
            correct: 0
        },
        {
            question: "What is the IEEE 754 standard for?",
            options: ["Integer arithmetic", "Floating-point representation", "Binary addition", "Decimal conversion"],
            correct: 1
        },
        {
            question: "Which component handles floating-point operations?",
            options: ["Integer unit", "Floating-point unit", "Control unit", "Memory unit"],
            correct: 1
        },
        {
            question: "What is the mantissa in floating-point representation?",
            options: ["Sign bit", "Exponent", "Significand", "Base"],
            correct: 2
        },
        {
            question: "Which adder reduces propagation delay?",
            options: ["Ripple carry adder", "Carry look-ahead adder", "Half adder", "Full adder"],
            correct: 1
        },
        {
            question: "What is the range of 8-bit signed integers?",
            options: ["-128 to 127", "0 to 255", "-256 to 255", "0 to 127"],
            correct: 0
        },
        {
            question: "Which operation is performed by the ALU?",
            options: ["Memory access", "Instruction decoding", "Arithmetic and logic operations", "Program control"],
            correct: 2
        },
        {
            question: "What is Booth's algorithm used for?",
            options: ["Addition", "Subtraction", "Multiplication", "Division"],
            correct: 2
        },
        {
            question: "Which representation uses sign-magnitude format?",
            options: ["One's complement", "Two's complement", "Signed magnitude", "Unsigned"],
            correct: 2
        },
        {
            question: "What is the bias in IEEE 754 floating-point?",
            options: ["127 for single precision", "1023 for double precision", "Both A and B", "Neither"],
            correct: 2
        },
        {
            question: "Which algorithm is used for binary division?",
            options: ["Restoring division", "Non-restoring division", "Both A and B", "Floating-point division"],
            correct: 2
        },
        {
            question: "What is overflow in arithmetic operations?",
            options: ["Result too small", "Result too large", "Division by zero", "Invalid operation"],
            correct: 1
        },
        {
            question: "Which gate performs binary subtraction?",
            options: ["AND", "OR", "XOR", "XNOR"],
            correct: 2
        },
        {
            question: "What is the precision of double precision floating-point?",
            options: ["24 bits", "53 bits", "64 bits", "128 bits"],
            correct: 1
        },
        {
            question: "Which adder adds three inputs?",
            options: ["Half adder", "Full adder", "Half subtractor", "Full subtractor"],
            correct: 1
        },
        {
            question: "What is underflow in floating-point arithmetic?",
            options: ["Result too large", "Result too small to represent", "Division by zero", "Invalid operation"],
            correct: 1
        },
        {
            question: "Which representation avoids negative zero?",
            options: ["Sign-magnitude", "One's complement", "Two's complement", "Excess-3"],
            correct: 2
        },
        {
            question: "What is the purpose of guard bits in floating-point?",
            options: ["Error detection", "Rounding accuracy", "Overflow prevention", "Speed optimization"],
            correct: 1
        },
        {
            question: "Which algorithm uses repeated addition for multiplication?",
            options: ["Booth's algorithm", "Shift and add", "Carry save adder", "Wallace tree"],
            correct: 1
        },
        {
            question: "What is the range of 16-bit unsigned integers?",
            options: ["0 to 32767", "0 to 65535", "-32768 to 32767", "0 to 32768"],
            correct: 1
        },
        {
            question: "Which operation causes overflow in two's complement?",
            options: ["Addition of positive numbers", "Addition of negative numbers", "Subtraction", "All arithmetic operations"],
            correct: 0
        },
        {
            question: "What is normalization in floating-point?",
            options: ["Converting to binary", "Adjusting exponent for leading 1", "Rounding result", "Error correction"],
            correct: 1
        }
    ],
    4: [ // Unit 4: Processor Design (25 questions)
        {
            question: "What is a datapath in processor design?",
            options: ["Control signals", "Data processing elements", "Memory interface", "I/O controller"],
            correct: 1
        },
        {
            question: "Which component generates control signals?",
            options: ["Datapath", "Control unit", "ALU", "Registers"],
            correct: 1
        },
        {
            question: "What is pipelining in processors?",
            options: ["Multiple processors", "Parallel instruction execution", "Sequential processing", "Memory management"],
            correct: 1
        },
        {
            question: "Which hazard occurs when instruction depends on previous result?",
            options: ["Structural hazard", "Data hazard", "Control hazard", "Branch hazard"],
            correct: 1
        },
        {
            question: "What is the purpose of pipeline registers?",
            options: ["Store instructions", "Store intermediate results", "Control execution", "Handle interrupts"],
            correct: 1
        },
        {
            question: "Which technique resolves data hazards?",
            options: ["Forwarding", "Stalling", "Branch prediction", "Out-of-order execution"],
            correct: 0
        },
        {
            question: "What is superscalar architecture?",
            options: ["Multiple pipelines", "Single pipeline", "Distributed processing", "Parallel processing"],
            correct: 0
        },
        {
            question: "Which control unit implementation uses microprogramming?",
            options: ["Hardwired", "Microprogrammed", "Both", "Neither"],
            correct: 1
        },
        {
            question: "What is the fetch stage in pipelining?",
            options: ["Execute instruction", "Fetch from memory", "Decode instruction", "Write back result"],
            correct: 1
        },
        {
            question: "Which hazard requires stalling the pipeline?",
            options: ["RAW dependency", "WAR dependency", "WAW dependency", "No dependency"],
            correct: 0
        },
        {
            question: "What is branch prediction used for?",
            options: ["Memory access", "Reduce control hazards", "Data forwarding", "Exception handling"],
            correct: 1
        },
        {
            question: "Which register holds the instruction being executed?",
            options: ["Program counter", "Instruction register", "Accumulator", "Status register"],
            correct: 1
        },
        {
            question: "What is the decode stage in pipelining?",
            options: ["Interpret instruction", "Execute operation", "Access memory", "Write result"],
            correct: 0
        },
        {
            question: "Which technique improves pipeline performance?",
            options: ["Increasing clock speed", "Reducing pipeline stages", "Increasing pipeline stages", "Reducing parallelism"],
            correct: 2
        },
        {
            question: "What is a control hazard?",
            options: ["Resource conflict", "Data dependency", "Branch instruction", "Memory conflict"],
            correct: 2
        },
        {
            question: "Which unit controls instruction execution sequence?",
            options: ["ALU", "Control unit", "Datapath", "Registers"],
            correct: 1
        },
        {
            question: "What is the execute stage in pipelining?",
            options: ["Fetch instruction", "Perform operation", "Access memory", "Update registers"],
            correct: 1
        },
        {
            question: "Which hazard occurs due to resource sharing?",
            options: ["Data hazard", "Structural hazard", "Control hazard", "Branch hazard"],
            correct: 1
        },
        {
            question: "What is speculative execution?",
            options: ["Executing wrong instructions", "Executing predicted instructions", "Executing random instructions", "Executing sequential instructions"],
            correct: 1
        },
        {
            question: "Which register holds the address of next instruction?",
            options: ["Instruction register", "Program counter", "Accumulator", "Index register"],
            correct: 1
        },
        {
            question: "What is the write-back stage in pipelining?",
            options: ["Store result in registers", "Execute operation", "Fetch operands", "Decode instruction"],
            correct: 0
        },
        {
            question: "Which technique reduces branch penalties?",
            options: ["Loop unrolling", "Branch prediction", "Software pipelining", "Vector processing"],
            correct: 1
        },
        {
            question: "What is a multicore processor?",
            options: ["Multiple processors on chip", "Single processor", "Distributed processors", "Network processors"],
            correct: 0
        },
        {
            question: "Which stage accesses memory in pipelining?",
            options: ["Fetch", "Decode", "Execute", "Memory"],
            correct: 3
        },
        {
            question: "What is out-of-order execution?",
            options: ["Sequential execution", "Instructions executed as available", "Random execution", "Parallel execution only"],
            correct: 1
        }
    ],
    5: [ // Unit 5: Memory and I/O Systems (25 questions)
        {
            question: "What is the memory hierarchy?",
            options: ["Memory organization", "Different levels of memory", "Memory allocation", "Memory protection"],
            correct: 1
        },
        {
            question: "Which memory is fastest?",
            options: ["Hard disk", "RAM", "Cache", "Registers"],
            correct: 3
        },
        {
            question: "What is cache memory used for?",
            options: ["Permanent storage", "Fast access to frequently used data", "Network storage", "Backup storage"],
            correct: 1
        },
        {
            question: "Which cache mapping uses modulo operation?",
            options: ["Direct mapping", "Associative mapping", "Set-associative", "Fully associative"],
            correct: 0
        },
        {
            question: "What is virtual memory?",
            options: ["Physical memory", "Logical address space", "Cache memory", "ROM"],
            correct: 1
        },
        {
            question: "Which technique manages memory allocation?",
            options: ["Paging", "Caching", "Buffering", "Spooling"],
            correct: 0
        },
        {
            question: "What is TLB in virtual memory?",
            options: ["Translation Lookaside Buffer", "Temporary Load Buffer", "Table Lookup Buffer", "Transfer Load Buffer"],
            correct: 0
        },
        {
            question: "Which I/O technique uses interrupts?",
            options: ["Programmed I/O", "Interrupt-driven I/O", "DMA", "Memory-mapped I/O"],
            correct: 1
        },
        {
            question: "What is DMA?",
            options: ["Direct Memory Access", "Dynamic Memory Allocation", "Data Management Access", "Device Memory Access"],
            correct: 0
        },
        {
            question: "Which memory is non-volatile?",
            options: ["RAM", "Cache", "Registers", "ROM"],
            correct: 3
        },
        {
            question: "What is cache hit ratio?",
            options: ["Cache size", "Successful cache accesses", "Cache speed", "Memory size"],
            correct: 1
        },
        {
            question: "Which page replacement algorithm is optimal?",
            options: ["FIFO", "LRU", "OPT", "Random"],
            correct: 2
        },
        {
            question: "What is thrashing in virtual memory?",
            options: ["Memory fragmentation", "Excessive paging", "Memory leak", "Stack overflow"],
            correct: 1
        },
        {
            question: "Which I/O interface uses memory-mapped I/O?",
            options: ["Serial port", "Parallel port", "Keyboard", "Graphics card"],
            correct: 3
        },
        {
            question: "What is the purpose of interrupts?",
            options: ["Stop program execution", "Handle I/O operations", "Speed up processing", "Manage memory"],
            correct: 1
        },
        {
            question: "Which cache replacement policy uses recency?",
            options: ["FIFO", "LRU", "Random", "LFU"],
            correct: 1
        },
        {
            question: "What is segmentation in memory management?",
            options: ["Fixed size division", "Variable size division", "Page division", "Cache division"],
            correct: 1
        },
        {
            question: "Which bus connects CPU to memory?",
            options: ["I/O bus", "System bus", "Expansion bus", "Control bus"],
            correct: 1
        },
        {
            question: "What is the purpose of memory controller?",
            options: ["Execute programs", "Manage memory access", "Handle interrupts", "Control I/O devices"],
            correct: 1
        },
        {
            question: "Which technique improves cache performance?",
            options: ["Increasing cache size", "Better replacement policies", "Both A and B", "Decreasing cache size"],
            correct: 2
        },
        {
            question: "What is the difference between SRAM and DRAM?",
            options: ["Speed vs cost", "Size vs speed", "Power consumption", "All of the above"],
            correct: 3
        },
        {
            question: "Which interrupt has highest priority?",
            options: ["Hardware interrupt", "Software interrupt", "Timer interrupt", "I/O interrupt"],
            correct: 0
        },
        {
            question: "What is the purpose of I/O ports?",
            options: ["Memory access", "Device communication", "Program execution", "Data storage"],
            correct: 1
        },
        {
            question: "Which memory management unit handles address translation?",
            options: ["ALU", "MMU", "Control unit", "Cache controller"],
            correct: 1
        },
        {
            question: "What is the advantage of associative cache mapping?",
            options: ["Simple hardware", "Flexible placement", "Fast lookup", "Low cost"],
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
        if (caQuestions[unitId]) {
            caQuestions[unitId].forEach(question => {
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
