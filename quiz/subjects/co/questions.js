// quiz/subjects/co/questions.js
const coQuestions = {
    1: [ // Unit 1: Basic Computer Organization (20 questions)
        {
            question: "What is the primary function of the system bus in a computer?",
            options: ["Data storage", "Connecting system components", "User interface", "Power supply"],
            correct: 1
        },
        {
            question: "Which addressing mode uses the value in a register as the effective address?",
            options: ["Immediate addressing", "Direct addressing", "Register addressing", "Register indirect addressing"],
            correct: 3
        },
        {
            question: "What is the purpose of the program counter register?",
            options: ["Store data temporarily", "Hold the address of next instruction", "Perform arithmetic operations", "Control system operations"],
            correct: 1
        },
        {
            question: "Which instruction format contains the operation code only?",
            options: ["Zero-address instruction", "One-address instruction", "Two-address instruction", "Three-address instruction"],
            correct: 0
        },
        {
            question: "What is the function of the accumulator register?",
            options: ["Store program counter", "Hold intermediate arithmetic results", "Store memory addresses", "Control program flow"],
            correct: 1
        },
        {
            question: "Which bus is used for high-speed data transfer between CPU and memory?",
            options: ["Control bus", "Address bus", "Data bus", "System bus"],
            correct: 2
        },
        {
            question: "What is the purpose of the stack pointer register?",
            options: ["Point to program instructions", "Point to top of stack", "Hold arithmetic results", "Store memory addresses"],
            correct: 1
        },
        {
            question: "Which instruction type modifies program control flow?",
            options: ["Data transfer instruction", "Arithmetic instruction", "Logical instruction", "Control transfer instruction"],
            correct: 3
        },
        {
            question: "What is the width of the data bus typically measured in?",
            options: ["Hertz", "Bytes", "Bits", "Megabytes"],
            correct: 2
        },
        {
            question: "Which addressing mode adds a constant to the program counter?",
            options: ["Direct addressing", "Indirect addressing", "Relative addressing", "Indexed addressing"],
            correct: 2
        },
        {
            question: "What is the purpose of the instruction register?",
            options: ["Store data values", "Hold current instruction being executed", "Point to memory locations", "Control arithmetic operations"],
            correct: 1
        },
        {
            question: "Which bus carries control signals between CPU and other components?",
            options: ["Data bus", "Address bus", "Control bus", "System bus"],
            correct: 2
        },
        {
            question: "What is the function of the memory address register?",
            options: ["Store data temporarily", "Hold address of memory location", "Perform calculations", "Control program execution"],
            correct: 1
        },
        {
            question: "Which instruction format is most commonly used in modern computers?",
            options: ["Zero-address", "One-address", "Two-address", "Three-address"],
            correct: 2
        },
        {
            question: "What is the purpose of the status register?",
            options: ["Store memory addresses", "Hold condition codes and flags", "Store program instructions", "Control data transfer"],
            correct: 1
        },
        {
            question: "Which addressing mode uses an offset from a base register?",
            options: ["Direct addressing", "Immediate addressing", "Indexed addressing", "Register addressing"],
            correct: 2
        },
        {
            question: "What is the function of the memory data register?",
            options: ["Store instruction addresses", "Hold data being transferred", "Control program flow", "Perform arithmetic operations"],
            correct: 1
        },
        {
            question: "Which bus determines the range of memory addresses?",
            options: ["Data bus", "Control bus", "Address bus", "System bus"],
            correct: 2
        },
        {
            question: "What is the purpose of the base register in addressing modes?",
            options: ["Store immediate values", "Provide base address for calculations", "Hold program counter", "Control data flow"],
            correct: 1
        },
        {
            question: "Which instruction type moves data between registers and memory?",
            options: ["Arithmetic instruction", "Logical instruction", "Data transfer instruction", "Control instruction"],
            correct: 2
        }
    ],
    2: [ // Unit 2: CPU Architecture and Instruction Sets (20 questions)
        {
            question: "What is the primary function of the arithmetic logic unit?",
            options: ["Memory management", "Perform arithmetic and logical operations", "Control program execution", "Manage input/output"],
            correct: 1
        },
        {
            question: "Which component coordinates all computer operations?",
            options: ["Arithmetic logic unit", "Memory unit", "Control unit", "Input/output unit"],
            correct: 2
        },
        {
            question: "What are the steps in the instruction cycle?",
            options: ["Fetch, decode, execute", "Read, write, execute", "Load, store, process", "Input, process, output"],
            correct: 0
        },
        {
            question: "Which register holds the instruction being executed?",
            options: ["Program counter", "Instruction register", "Memory address register", "Accumulator"],
            correct: 1
        },
        {
            question: "What is the purpose of the general-purpose registers?",
            options: ["Store program counter", "Hold temporary data and addresses", "Control system operations", "Manage memory allocation"],
            correct: 1
        },
        {
            question: "Which control unit generates timing signals?",
            options: ["Hardwired control unit", "Microprogrammed control unit", "Both A and B", "None of the above"],
            correct: 2
        },
        {
            question: "What is the function of the program status word register?",
            options: ["Store program instructions", "Hold processor status and control flags", "Manage memory addresses", "Control data transfer"],
            correct: 1
        },
        {
            question: "Which architecture uses a single bus for all communications?",
            options: ["Harvard architecture", "Von Neumann architecture", "Modified Harvard", "Parallel architecture"],
            correct: 1
        },
        {
            question: "What is the purpose of the instruction decoder?",
            options: ["Fetch instructions", "Interpret instruction opcodes", "Execute operations", "Store results"],
            correct: 1
        },
        {
            question: "Which register pair is used for stack operations?",
            options: ["Base and limit", "Stack pointer and base pointer", "Program counter and instruction register", "Memory address and data registers"],
            correct: 1
        },
        {
            question: "What is the difference between RISC and CISC architectures?",
            options: ["No difference", "RISC uses simple instructions, CISC uses complex instructions", "RISC is slower", "CISC uses fewer registers"],
            correct: 1
        },
        {
            question: "Which component performs binary arithmetic operations?",
            options: ["Control unit", "Memory unit", "Arithmetic logic unit", "Input/output unit"],
            correct: 2
        },
        {
            question: "What is the purpose of the index register?",
            options: ["Store array indices", "Hold memory addresses", "Control program flow", "Store temporary results"],
            correct: 0
        },
        {
            question: "Which control unit uses microinstructions stored in memory?",
            options: ["Hardwired control unit", "Microprogrammed control unit", "Random control unit", "Sequential control unit"],
            correct: 1
        },
        {
            question: "What is the function of the flag register?",
            options: ["Store memory addresses", "Hold status flags from operations", "Control instruction execution", "Manage data transfer"],
            correct: 1
        },
        {
            question: "Which architecture separates instruction and data memories?",
            options: ["Von Neumann architecture", "Harvard architecture", "Modified Harvard", "Parallel architecture"],
            correct: 1
        },
        {
            question: "What is the purpose of the segment register?",
            options: ["Store program segments", "Hold segment base addresses", "Control data flow", "Manage instruction execution"],
            correct: 1
        },
        {
            question: "Which CPU component manages data flow between registers?",
            options: ["Control unit", "Arithmetic logic unit", "Internal bus", "External interface"],
            correct: 2
        },
        {
            question: "What is the role of the clock generator in CPU?",
            options: ["Provide power", "Generate timing signals", "Store instructions", "Control memory access"],
            correct: 1
        },
        {
            question: "Which register is used for indirect addressing?",
            options: ["Index register", "Base register", "Pointer register", "All of the above"],
            correct: 3
        }
    ],
    3: [ // Unit 3: Memory Systems (25 questions)
        {
            question: "What is the memory hierarchy designed to balance?",
            options: ["Speed and cost", "Size and complexity", "Power and performance", "Reliability and capacity"],
            correct: 0
        },
        {
            question: "Which memory type is fastest but most expensive?",
            options: ["Cache memory", "Main memory", "Secondary memory", "Tertiary memory"],
            correct: 0
        },
        {
            question: "What is the purpose of cache memory?",
            options: ["Permanent storage", "Speed up CPU access to frequently used data", "Store operating system", "Hold user programs"],
            correct: 1
        },
        {
            question: "Which cache mapping technique allows blocks to be placed anywhere?",
            options: ["Direct mapping", "Associative mapping", "Set-associative mapping", "Sector mapping"],
            correct: 1
        },
        {
            question: "What is the cache hit ratio?",
            options: ["Total cache accesses", "Successful cache accesses / total accesses", "Cache size", "Block size"],
            correct: 1
        },
        {
            question: "Which memory technology uses capacitors to store data?",
            options: ["SRAM", "DRAM", "ROM", "Flash memory"],
            correct: 1
        },
        {
            question: "What is virtual memory?",
            options: ["Physical RAM only", "Memory management technique using disk space", "Cache memory", "Read-only memory"],
            correct: 1
        },
        {
            question: "Which page replacement algorithm replaces the least recently used page?",
            options: ["First In First Out", "Least Recently Used", "Optimal", "Random"],
            correct: 1
        },
        {
            question: "What is the purpose of the memory management unit?",
            options: ["Execute programs", "Translate virtual to physical addresses", "Store data", "Control I/O devices"],
            correct: 1
        },
        {
            question: "Which secondary storage device uses magnetic recording?",
            options: ["Solid state drive", "Hard disk drive", "Optical disk", "USB flash drive"],
            correct: 1
        },
        {
            question: "What is the page fault frequency?",
            options: ["Always zero", "Number of page faults per unit time", "Cache hit rate", "Memory access time"],
            correct: 1
        },
        {
            question: "Which cache organization uses multiple cache lines per set?",
            options: ["Direct mapped", "Fully associative", "Set-associative", "Hashed"],
            correct: 2
        },
        {
            question: "What is the write-through policy in cache memory?",
            options: ["Write to cache only", "Write to both cache and main memory", "Write to main memory only", "Never write"],
            correct: 1
        },
        {
            question: "Which memory type retains data without power?",
            options: ["RAM", "ROM", "Cache", "Registers"],
            correct: 1
        },
        {
            question: "What is the memory access time?",
            options: ["Time to transfer data", "Time from request to data availability", "Time to store data", "Time to erase data"],
            correct: 1
        },
        {
            question: "Which cache replacement policy is simple but may cause thrashing?",
            options: ["LRU", "FIFO", "Random", "LFU"],
            correct: 1
        },
        {
            question: "What is the purpose of memory interleaving?",
            options: ["Reduce memory size", "Increase memory access speed", "Compress data", "Encrypt data"],
            correct: 1
        },
        {
            question: "Which storage technology has no moving parts?",
            options: ["Hard disk", "Floppy disk", "Solid state drive", "Magnetic tape"],
            correct: 2
        },
        {
            question: "What is the write-back policy in cache?",
            options: ["Immediate write to memory", "Write to cache, later to memory", "No writing allowed", "Write to memory only"],
            correct: 1
        },
        {
            question: "Which memory hierarchy level has the largest capacity?",
            options: ["Registers", "Cache", "Main memory", "Secondary storage"],
            correct: 3
        },
        {
            question: "What is the cache block size?",
            options: ["Number of cache lines", "Size of data transferred", "Cache capacity", "Number of sets"],
            correct: 1
        },
        {
            question: "Which page replacement algorithm is optimal but impractical?",
            options: ["FIFO", "LRU", "Optimal", "Clock"],
            correct: 2
        },
        {
            question: "What is the memory bandwidth?",
            options: ["Memory capacity", "Rate of data transfer", "Memory access time", "Memory cost"],
            correct: 1
        },
        {
            question: "Which technique reduces cache miss penalty?",
            options: ["Larger cache", "Victim cache", "Multi-level cache", "All of the above"],
            correct: 3
        },
        {
            question: "What is the working set in virtual memory?",
            options: ["All pages in memory", "Pages currently being used", "Free pages", "Reserved pages"],
            correct: 1
        }
    ],
    4: [ // Unit 4: I/O Organization (25 questions)
        {
            question: "What is the primary function of I/O organization?",
            options: ["Data processing", "Communication between CPU and peripherals", "Memory management", "Program execution"],
            correct: 1
        },
        {
            question: "Which I/O transfer technique uses CPU for data transfer?",
            options: ["Direct memory access", "Interrupt-driven I/O", "Programmed I/O", "I/O processor"],
            correct: 2
        },
        {
            question: "What is the purpose of device controllers?",
            options: ["Execute user programs", "Control I/O device operations", "Manage memory", "Schedule processes"],
            correct: 1
        },
        {
            question: "Which I/O method allows CPU to continue processing while I/O occurs?",
            options: ["Programmed I/O", "Interrupt-driven I/O", "Direct memory access", "Both B and C"],
            correct: 3
        },
        {
            question: "What is the function of the I/O processor?",
            options: ["Execute instructions", "Handle I/O operations independently", "Manage memory", "Control interrupts"],
            correct: 1
        },
        {
            question: "Which interrupt type has highest priority?",
            options: ["Maskable interrupt", "Non-maskable interrupt", "Software interrupt", "Hardware interrupt"],
            correct: 1
        },
        {
            question: "What is the purpose of device status registers?",
            options: ["Store data", "Indicate device readiness", "Hold device addresses", "Control device operations"],
            correct: 1
        },
        {
            question: "Which I/O technique transfers large blocks of data without CPU intervention?",
            options: ["Programmed I/O", "Interrupt-driven I/O", "Direct memory access", "Channel I/O"],
            correct: 2
        },
        {
            question: "What is the role of device drivers?",
            options: ["Hardware design", "Software interface to device controllers", "Data storage", "Network management"],
            correct: 1
        },
        {
            question: "Which interrupt handling method uses a priority encoder?",
            options: ["Polling", "Vectored interrupts", "Daisy chaining", "Software interrupts"],
            correct: 2
        },
        {
            question: "What is the purpose of I/O ports?",
            options: ["Store programs", "Provide communication channels", "Hold memory addresses", "Control CPU operations"],
            correct: 1
        },
        {
            question: "Which I/O interface standard is commonly used for peripherals?",
            options: ["USB", "PCI", "Both A and B", "RAM"],
            correct: 2
        },
        {
            question: "What is the difference between synchronous and asynchronous I/O?",
            options: ["Speed", "Timing coordination", "Data size", "Device type"],
            correct: 1
        },
        {
            question: "Which I/O scheduling algorithm minimizes seek time?",
            options: ["First Come First Served", "Shortest Seek Time First", "SCAN", "LOOK"],
            correct: 1
        },
        {
            question: "What is the purpose of the I/O channel?",
            options: ["Data storage", "Dedicated I/O processor", "Memory management", "Interrupt handling"],
            correct: 1
        },
        {
            question: "Which interrupt type is generated by software?",
            options: ["Hardware interrupt", "Software interrupt", "External interrupt", "Internal interrupt"],
            correct: 1
        },
        {
            question: "What is the function of the I/O controller?",
            options: ["Execute programs", "Manage I/O device communication", "Control memory", "Schedule processes"],
            correct: 1
        },
        {
            question: "Which I/O method uses CPU cycles most efficiently for large transfers?",
            options: ["Programmed I/O", "Interrupt-driven I/O", "Direct memory access", "Programmed I/O with polling"],
            correct: 2
        },
        {
            question: "What is the purpose of device addressing?",
            options: ["Identify devices", "Store device data", "Control device speed", "Manage device power"],
            correct: 0
        },
        {
            question: "Which I/O technique requires CPU to check device status periodically?",
            options: ["Interrupts", "DMA", "Polling", "Channels"],
            correct: 2
        },
        {
            question: "What is the role of the interrupt service routine?",
            options: ["Initialize devices", "Handle interrupt processing", "Store interrupt data", "Control device timing"],
            correct: 1
        },
        {
            question: "Which I/O interface provides hot-pluggable connections?",
            options: ["Serial port", "Parallel port", "USB", "PS/2"],
            correct: 2
        },
        {
            question: "What is the purpose of I/O buffering?",
            options: ["Speed up CPU", "Decouple device and CPU speeds", "Store programs", "Control interrupts"],
            correct: 1
        },
        {
            question: "Which interrupt handling technique uses a priority queue?",
            options: ["Daisy chaining", "Priority interrupt controller", "Polling", "Vectored interrupts"],
            correct: 1
        },
        {
            question: "What is the main advantage of DMA over programmed I/O?",
            options: ["Simpler hardware", "Frees CPU for other tasks", "Lower cost", "Easier programming"],
            correct: 1
        }
    ],
    5: [ // Unit 5: Advanced Computer Organization (25 questions)
        {
            question: "What is instruction pipelining?",
            options: ["Sequential execution", "Overlapping instruction execution phases", "Parallel processing", "Memory management"],
            correct: 1
        },
        {
            question: "Which hazard occurs when an instruction depends on previous instruction results?",
            options: ["Structural hazard", "Data hazard", "Control hazard", "Branch hazard"],
            correct: 1
        },
        {
            question: "What is the purpose of pipeline registers?",
            options: ["Store instructions", "Hold intermediate results between stages", "Control pipeline flow", "Manage memory"],
            correct: 1
        },
        {
            question: "Which technique resolves data hazards using forwarding?",
            options: ["Stalling", "Branch prediction", "Data forwarding", "Out-of-order execution"],
            correct: 2
        },
        {
            question: "What is superscalar architecture?",
            options: ["Single instruction stream", "Multiple instruction execution per cycle", "Sequential processing", "Memory-only processing"],
            correct: 1
        },
        {
            question: "Which parallel processing system uses multiple processors with shared memory?",
            options: ["Distributed system", "Multiprocessor system", "Cluster computing", "Grid computing"],
            correct: 1
        },
        {
            question: "What is the difference between SISD and SIMD?",
            options: ["No difference", "SISD is single instruction single data, SIMD is single instruction multiple data", "SISD is faster", "SIMD uses multiple processors"],
            correct: 1
        },
        {
            question: "Which technique predicts branch outcomes to reduce pipeline stalls?",
            options: ["Data forwarding", "Branch prediction", "Out-of-order execution", "Speculative execution"],
            correct: 1
        },
        {
            question: "What is cache coherence in multiprocessor systems?",
            options: ["Memory consistency", "Cache synchronization across processors", "Processor communication", "Memory allocation"],
            correct: 1
        },
        {
            question: "Which architecture emphasizes simple instructions executed quickly?",
            options: ["CISC", "RISC", "VLSI", "Parallel"],
            correct: 1
        },
        {
            question: "What is the purpose of branch target buffers?",
            options: ["Store branch history", "Predict branch targets", "Control pipeline", "Manage memory"],
            correct: 1
        },
        {
            question: "Which multiprocessor interconnection uses a common bus?",
            options: ["Crossbar switch", "Shared bus", "Hypercube", "Mesh"],
            correct: 1
        },
        {
            question: "What is speculative execution in processors?",
            options: ["Guessing program behavior", "Executing instructions ahead of branch resolution", "Memory speculation", "Cache speculation"],
            correct: 1
        },
        {
            question: "Which performance metric measures instructions executed per second?",
            options: ["MIPS", "MFLOPS", "Bandwidth", "Latency"],
            correct: 0
        },
        {
            question: "What is the Flynn's classification for traditional computers?",
            options: ["SISD", "SIMD", "MIMD", "MISD"],
            correct: 0
        },
        {
            question: "Which technique allows instructions to execute out of program order?",
            options: ["In-order execution", "Out-of-order execution", "Sequential execution", "Parallel execution"],
            correct: 1
        },
        {
            question: "What is the purpose of register renaming in processors?",
            options: ["Increase register count", "Eliminate false dependencies", "Speed up execution", "Manage memory"],
            correct: 1
        },
        {
            question: "Which architecture uses complex instructions with multiple operations?",
            options: ["RISC", "CISC", "EPIC", "VLIW"],
            correct: 1
        },
        {
            question: "What is the speedup factor in pipelined processors?",
            options: ["Always 1", "Number of pipeline stages", "Clock frequency", "Number of instructions"],
            correct: 1
        },
        {
            question: "Which multiprocessor system uses distributed memory?",
            options: ["Shared memory multiprocessor", "Distributed shared memory", "Multicore processor", "Symmetric multiprocessor"],
            correct: 1
        },
        {
            question: "What is the purpose of Tomasulo's algorithm?",
            options: ["Branch prediction", "Dynamic instruction scheduling", "Memory management", "Cache coherence"],
            correct: 1
        },
        {
            question: "Which interconnection network provides high bandwidth?",
            options: ["Bus", "Ring", "Crossbar switch", "Star"],
            correct: 2
        },
        {
            question: "What is the Amdahl's law related to?",
            options: ["Memory performance", "Parallel processing speedup", "Cache performance", "I/O performance"],
            correct: 1
        },
        {
            question: "Which technique reduces pipeline branch penalties?",
            options: ["Delayed branching", "Branch prediction", "Both A and B", "Instruction prefetching"],
            correct: 2
        },
        {
            question: "What is the main challenge in parallel processing?",
            options: ["Cost", "Programming complexity", "Power consumption", "All of the above"],
            correct: 3
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
        if (coQuestions[unitId]) {
            coQuestions[unitId].forEach(question => {
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
