// quiz/subjects/os/questions.js
const osQuestions = {
    1: [ // Unit 1: Introduction to Operating Systems (20 questions)
        {
            question: "What is the primary function of an operating system?",
            options: ["Run applications", "Manage computer hardware and software resources", "Store data", "Connect to internet"],
            correct: 1
        },
        {
            question: "Which type of operating system allows multiple users to use the system simultaneously?",
            options: ["Single-user", "Multi-user", "Real-time", "Embedded"],
            correct: 1
        },
        {
            question: "What is a system call in operating systems?",
            options: ["User command", "Interface between user programs and OS", "Hardware instruction", "Network protocol"],
            correct: 1
        },
        {
            question: "Which operating system component manages memory allocation?",
            options: ["File system", "Process scheduler", "Memory manager", "I/O manager"],
            correct: 2
        },
        {
            question: "What is the kernel in an operating system?",
            options: ["User interface", "Core part that manages hardware", "Application software", "Device driver"],
            correct: 1
        },
        {
            question: "Which type of operating system is designed for time-critical applications?",
            options: ["Batch processing", "Time-sharing", "Real-time", "Distributed"],
            correct: 2
        },
        {
            question: "What is the purpose of device drivers in operating systems?",
            options: ["Manage memory", "Control hardware devices", "Schedule processes", "Handle files"],
            correct: 1
        },
        {
            question: "Which operating system architecture has multiple layers?",
            options: ["Monolithic", "Microkernel", "Layered", "Virtual machine"],
            correct: 2
        },
        {
            question: "What is spooling in operating systems?",
            options: ["Memory management", "Overlapping I/O with computation using buffer", "Process scheduling", "File allocation"],
            correct: 1
        },
        {
            question: "Which operating system service provides protection and security?",
            options: ["Process management", "Memory management", "File system", "Protection and security"],
            correct: 3
        },
        {
            question: "What is the difference between multiprogramming and multitasking?",
            options: ["No difference", "Multiprogramming allows multiple programs, multitasking allows multiple tasks", "Same terms", "Multitasking is faster"],
            correct: 1
        },
        {
            question: "Which operating system component handles communication between devices?",
            options: ["File system", "I/O subsystem", "Process scheduler", "Memory manager"],
            correct: 1
        },
        {
            question: "What is a shell in operating systems?",
            options: ["Hardware component", "Command interpreter", "Memory unit", "Processor core"],
            correct: 1
        },
        {
            question: "Which operating system type is used in embedded systems?",
            options: ["Mainframe", "Desktop", "Embedded", "Supercomputer"],
            correct: 2
        },
        {
            question: "What is the purpose of system utilities in operating systems?",
            options: ["Run applications", "Perform common tasks like copying files", "Manage hardware", "Schedule processes"],
            correct: 1
        },
        {
            question: "Which operating system architecture has all services in kernel space?",
            options: ["Microkernel", "Monolithic", "Hybrid", "Exokernel"],
            correct: 1
        },
        {
            question: "What is virtual memory in operating systems?",
            options: ["Physical RAM", "Extension of physical memory using disk", "Cache memory", "ROM memory"],
            correct: 1
        },
        {
            question: "Which operating system service provides error detection and response?",
            options: ["Process management", "Memory management", "Error handling", "File system"],
            correct: 2
        },
        {
            question: "What is the role of the operating system in resource allocation?",
            options: ["Create resources", "Manage and allocate system resources", "Destroy resources", "Monitor resources"],
            correct: 1
        },
        {
            question: "Which type of operating system is designed for distributed computing?",
            options: ["Network", "Distributed", "Parallel", "Real-time"],
            correct: 1
        }
    ],
    2: [ // Unit 2: Process Management and Scheduling (20 questions)
        {
            question: "What is a process in operating systems?",
            options: ["Program code", "Program in execution with resources", "Data file", "Hardware device"],
            correct: 1
        },
        {
            question: "Which process state represents a process waiting for an event?",
            options: ["Running", "Ready", "Waiting", "Terminated"],
            correct: 2
        },
        {
            question: "What is the Process Control Block (PCB)?",
            options: ["Process code", "Data structure containing process information", "Process stack", "Process heap"],
            correct: 1
        },
        {
            question: "Which CPU scheduling algorithm is non-preemptive?",
            options: ["Round Robin", "Shortest Job First", "First Come First Served", "Priority Scheduling"],
            correct: 2
        },
        {
            question: "What is context switching in process management?",
            options: ["Process creation", "Switching between processes", "Process termination", "Process blocking"],
            correct: 1
        },
        {
            question: "Which inter-process communication method uses shared memory?",
            options: ["Message passing", "Shared memory", "Pipes", "Signals"],
            correct: 1
        },
        {
            question: "What is a thread in operating systems?",
            options: ["Complete process", "Lightweight process within a process", "Hardware component", "Memory block"],
            correct: 1
        },
        {
            question: "Which scheduling criterion minimizes average waiting time?",
            options: ["CPU utilization", "Throughput", "Turnaround time", "Response time"],
            correct: 2
        },
        {
            question: "What is the difference between processes and threads?",
            options: ["No difference", "Threads share memory, processes don't", "Processes are faster", "Threads are heavier"],
            correct: 1
        },
        {
            question: "Which process scheduling algorithm can lead to starvation?",
            options: ["First Come First Served", "Round Robin", "Shortest Job First", "Priority Scheduling"],
            correct: 2
        },
        {
            question: "What is the ready queue in process scheduling?",
            options: ["Running processes", "Processes waiting for CPU", "Blocked processes", "Terminated processes"],
            correct: 1
        },
        {
            question: "Which IPC mechanism uses mailboxes?",
            options: ["Shared memory", "Message passing", "Pipes", "Signals"],
            correct: 1
        },
        {
            question: "What is the purpose of the dispatcher in CPU scheduling?",
            options: ["Select processes", "Load process into CPU", "Terminate processes", "Block processes"],
            correct: 1
        },
        {
            question: "Which thread model has user-level and kernel-level threads?",
            options: ["One-to-one", "Many-to-one", "Many-to-many", "One-to-many"],
            correct: 2
        },
        {
            question: "What is the convoy effect in FCFS scheduling?",
            options: ["Fast execution", "Short processes waiting for long process", "Process starvation", "High CPU utilization"],
            correct: 1
        },
        {
            question: "Which process state transition occurs when I/O operation completes?",
            options: ["Ready to Running", "Running to Waiting", "Waiting to Ready", "Ready to Terminated"],
            correct: 2
        },
        {
            question: "What is the critical section problem in concurrent programming?",
            options: ["Memory allocation", "Multiple processes accessing shared data", "Process scheduling", "Thread synchronization"],
            correct: 1
        },
        {
            question: "Which scheduling algorithm gives highest priority to shortest job?",
            options: ["FCFS", "SJF", "Round Robin", "Priority"],
            correct: 1
        },
        {
            question: "What is the Peterson's solution used for?",
            options: ["Deadlock prevention", "Mutual exclusion", "Process synchronization", "All of the above"],
            correct: 3
        },
        {
            question: "Which thread type is managed entirely by user space?",
            options: ["Kernel threads", "User threads", "Hybrid threads", "System threads"],
            correct: 1
        }
    ],
    3: [ // Unit 3: Memory Management (25 questions)
        {
            question: "What is the memory hierarchy in computer systems?",
            options: ["CPU registers only", "Memory arranged by speed and cost", "Only RAM and ROM", "External storage only"],
            correct: 1
        },
        {
            question: "Which memory allocation technique divides memory into fixed-size blocks?",
            options: ["Dynamic partitioning", "Fixed partitioning", "Buddy system", "Paging"],
            correct: 1
        },
        {
            question: "What is internal fragmentation in memory management?",
            options: ["External unused memory", "Unused space within allocated blocks", "Memory leaks", "Page faults"],
            correct: 1
        },
        {
            question: "Which memory management technique uses page tables?",
            options: ["Segmentation", "Contiguous allocation", "Paging", "Swapping"],
            correct: 2
        },
        {
            question: "What is virtual memory in operating systems?",
            options: ["Physical RAM only", "Memory management technique using disk space", "Cache memory", "ROM memory"],
            correct: 1
        },
        {
            question: "Which page replacement algorithm replaces the least recently used page?",
            options: ["FIFO", "LRU", "Optimal", "Random"],
            correct: 1
        },
        {
            question: "What is thrashing in virtual memory systems?",
            options: ["High paging", "Low paging", "Memory allocation", "Page replacement"],
            correct: 0
        },
        {
            question: "Which memory allocation strategy allocates the first available block?",
            options: ["Best fit", "First fit", "Worst fit", "Next fit"],
            correct: 1
        },
        {
            question: "What is the purpose of the Translation Lookaside Buffer (TLB)?",
            options: ["Store page frames", "Cache page table entries", "Store virtual addresses", "Manage physical memory"],
            correct: 1
        },
        {
            question: "Which memory management technique allows non-contiguous allocation?",
            options: ["Contiguous allocation", "Paging", "Single contiguous", "Fixed partitioning"],
            correct: 1
        },
        {
            question: "What is external fragmentation?",
            options: ["Unused space inside blocks", "Small unusable memory blocks between allocations", "Memory leaks", "Page faults"],
            correct: 1
        },
        {
            question: "Which page replacement algorithm is optimal but not practical?",
            options: ["FIFO", "LRU", "Optimal", "Clock"],
            correct: 2
        },
        {
            question: "What is the working set model in virtual memory?",
            options: ["Fixed pages", "Pages used by process recently", "All pages", "No pages"],
            correct: 1
        },
        {
            question: "Which memory allocation algorithm minimizes wasted space?",
            options: ["First fit", "Best fit", "Worst fit", "Next fit"],
            correct: 1
        },
        {
            question: "What is demand paging in virtual memory?",
            options: ["Load all pages", "Load pages when needed", "Preload pages", "Never load pages"],
            correct: 1
        },
        {
            question: "Which segmentation allows sharing and protection?",
            options: ["Physical segmentation", "Logical segmentation", "Paged segmentation", "Demand segmentation"],
            correct: 1
        },
        {
            question: "What is the Belady's anomaly in page replacement?",
            options: ["More frames, more faults", "Less frames, more faults", "Optimal replacement", "Random replacement"],
            correct: 0
        },
        {
            question: "Which memory management technique uses base and limit registers?",
            options: ["Paging", "Segmentation", "Dynamic partitioning", "Fixed partitioning"],
            correct: 2
        },
        {
            question: "What is the purpose of memory compaction?",
            options: ["Compress memory", "Move allocated blocks together", "Delete unused memory", "Create new memory"],
            correct: 1
        },
        {
            question: "Which page replacement algorithm uses a circular list with reference bits?",
            options: ["FIFO", "LRU", "Clock", "Optimal"],
            correct: 2
        },
        {
            question: "What is the difference between paging and segmentation?",
            options: ["No difference", "Paging is fixed-size, segmentation is variable-size", "Segmentation is faster", "Paging uses disk"],
            correct: 1
        },
        {
            question: "Which memory allocation strategy can create external fragmentation?",
            options: ["Fixed partitioning", "Dynamic partitioning", "Paged allocation", "Segmented allocation"],
            correct: 1
        },
        {
            question: "What is the page fault frequency in virtual memory management?",
            options: ["Always zero", "Always high", "Balance between page faults and performance", "Never occurs"],
            correct: 2
        },
        {
            question: "Which memory protection mechanism uses fence registers?",
            options: ["Paging", "Segmentation", "Base-limit", "TLB"],
            correct: 2
        },
        {
            question: "What is the main advantage of virtual memory?",
            options: ["Faster access", "Larger address space than physical memory", "Simpler management", "No page faults"],
            correct: 1
        }
    ],
    4: [ // Unit 4: File Systems and I/O Management (25 questions)
        {
            question: "What is a file in operating systems?",
            options: ["Hardware device", "Named collection of related information", "Process", "Memory block"],
            correct: 1
        },
        {
            question: "Which file allocation method stores file blocks in contiguous locations?",
            options: ["Linked allocation", "Indexed allocation", "Contiguous allocation", "None of the above"],
            correct: 2
        },
        {
            question: "What is the purpose of directories in file systems?",
            options: ["Store file data", "Organize and provide names for files", "Manage memory", "Control processes"],
            correct: 1
        },
        {
            question: "Which disk scheduling algorithm services requests in order?",
            options: ["FCFS", "SSTF", "SCAN", "C-SCAN"],
            correct: 0
        },
        {
            question: "What is the inode in Unix file systems?",
            options: ["File data", "File metadata structure", "Directory entry", "File name"],
            correct: 1
        },
        {
            question: "Which file access method allows random access?",
            options: ["Sequential access", "Direct access", "Indexed access", "Hashed access"],
            correct: 1
        },
        {
            question: "What is the purpose of file allocation table (FAT)?",
            options: ["Store file names", "Track disk block allocation", "Store file permissions", "Manage directories"],
            correct: 1
        },
        {
            question: "Which directory structure allows efficient searching?",
            options: ["Single-level", "Two-level", "Tree structure", "Acyclic graph"],
            correct: 2
        },
        {
            question: "What is the seek time in disk scheduling?",
            options: ["Data transfer time", "Time to move disk arm to track", "Rotational delay", "Controller time"],
            correct: 1
        },
        {
            question: "Which file system provides journaling for crash recovery?",
            options: ["FAT", "NTFS", "ext2", "ext3"],
            correct: 3
        },
        {
            question: "What is the purpose of disk caching in I/O management?",
            options: ["Store permanent data", "Improve disk access performance", "Manage file permissions", "Control process scheduling"],
            correct: 1
        },
        {
            question: "Which file allocation method can lead to external fragmentation?",
            options: ["Contiguous allocation", "Linked allocation", "Indexed allocation", "None of the above"],
            correct: 0
        },
        {
            question: "What is the role of device drivers in I/O management?",
            options: ["Manage memory", "Control hardware devices", "Schedule processes", "Handle files"],
            correct: 1
        },
        {
            question: "Which disk scheduling algorithm minimizes seek time?",
            options: ["FCFS", "SSTF", "SCAN", "LOOK"],
            correct: 1
        },
        {
            question: "What is RAID in storage systems?",
            options: ["Random Access Memory", "Redundant Array of Independent Disks", "Read Access Interface Device", "Rapid Application Integration Disk"],
            correct: 1
        },
        {
            question: "Which file operation changes the current file position?",
            options: ["Read", "Write", "Seek", "Open"],
            correct: 2
        },
        {
            question: "What is the purpose of buffer cache in file systems?",
            options: ["Store file names", "Improve I/O performance", "Manage directories", "Control access permissions"],
            correct: 1
        },
        {
            question: "Which RAID level provides mirroring?",
            options: ["RAID 0", "RAID 1", "RAID 5", "RAID 10"],
            correct: 1
        },
        {
            question: "What is the difference between logical and physical I/O?",
            options: ["No difference", "Logical is user view, physical is device view", "Physical is faster", "Logical uses buffers"],
            correct: 1
        },
        {
            question: "Which file system feature allows multiple users to access files?",
            options: ["File locking", "Access control", "Both A and B", "File compression"],
            correct: 2
        },
        {
            question: "What is the purpose of disk defragmentation?",
            options: ["Compress files", "Rearrange fragmented files contiguously", "Delete files", "Create backups"],
            correct: 1
        },
        {
            question: "Which I/O technique overlaps I/O with computation?",
            options: ["Synchronous I/O", "Asynchronous I/O", "Blocking I/O", "Non-blocking I/O"],
            correct: 1
        },
        {
            question: "What is the role of the I/O scheduler in operating systems?",
            options: ["Schedule processes", "Order I/O requests for efficiency", "Manage memory", "Control devices"],
            correct: 1
        },
        {
            question: "Which file attribute indicates file type?",
            options: ["Name", "Size", "Permissions", "Type flag"],
            correct: 3
        },
        {
            question: "What is the purpose of file system journaling?",
            options: ["Speed up access", "Ensure consistency after crashes", "Compress files", "Encrypt files"],
            correct: 1
        }
    ],
    5: [ // Unit 5: Advanced Operating System Concepts (25 questions)
        {
            question: "What is a deadlock in operating systems?",
            options: ["System crash", "Circular waiting for resources", "Memory overflow", "Process termination"],
            correct: 1
        },
        {
            question: "Which deadlock prevention strategy restricts resource allocation?",
            options: ["Banker's algorithm", "Resource ordering", "Detection and recovery", "Timeout mechanism"],
            correct: 1
        },
        {
            question: "What is the Banker's algorithm used for?",
            options: ["Memory allocation", "Deadlock avoidance", "Process scheduling", "File allocation"],
            correct: 1
        },
        {
            question: "Which security mechanism controls access to resources?",
            options: ["Authentication", "Authorization", "Accounting", "All of the above"],
            correct: 3
        },
        {
            question: "What is the purpose of access control lists (ACL) in protection?",
            options: ["Speed up access", "Specify permissions for users", "Compress data", "Encrypt files"],
            correct: 1
        },
        {
            question: "Which distributed system component handles communication?",
            options: ["Middleware", "Network layer", "Application layer", "Physical layer"],
            correct: 0
        },
        {
            question: "What is load balancing in distributed operating systems?",
            options: ["Balance memory", "Distribute workload across systems", "Balance network traffic", "Balance storage"],
            correct: 1
        },
        {
            question: "Which deadlock detection algorithm uses resource allocation graph?",
            options: ["Banker's algorithm", "Wait-for graph", "Resource allocation graph", "Both B and C"],
            correct: 3
        },
        {
            question: "What is the principle of least privilege in security?",
            options: ["Give all permissions", "Give minimum required permissions", "Give maximum permissions", "No permissions"],
            correct: 1
        },
        {
            question: "Which distributed OS component provides transparency?",
            options: ["Location transparency", "Access transparency", "Failure transparency", "All of the above"],
            correct: 3
        },
        {
            question: "What is a capability-based protection system?",
            options: ["Password-based", "Token-based access control", "Role-based", "Attribute-based"],
            correct: 1
        },
        {
            question: "Which distributed algorithm achieves mutual exclusion?",
            options: ["Lamport's algorithm", "Ricart-Agrawala algorithm", "Maekawa's algorithm", "All of the above"],
            correct: 3
        },
        {
            question: "What is the purpose of virtual machines in modern operating systems?",
            options: ["Run old software", "Isolate applications", "Both A and B", "Speed up execution"],
            correct: 2
        },
        {
            question: "Which security threat involves unauthorized privilege escalation?",
            options: ["Virus", "Trojan", "Rootkit", "Worm"],
            correct: 2
        },
        {
            question: "What is the Byzantine generals problem in distributed systems?",
            options: ["Network failure", "Agreement in presence of faulty processes", "Load balancing", "Resource allocation"],
            correct: 1
        },
        {
            question: "Which protection domain contains objects and rights?",
            options: ["Process", "User", "Domain", "System"],
            correct: 2
        },
        {
            question: "What is the purpose of process migration in distributed systems?",
            options: ["Move processes between systems", "Copy processes", "Delete processes", "Create processes"],
            correct: 0
        },
        {
            question: "Which security model uses security labels?",
            options: ["Bell-LaPadula", "Biba", "Clark-Wilson", "Chinese Wall"],
            correct: 0
        },
        {
            question: "What is the main challenge in distributed operating systems?",
            options: ["Single location", "Coordination and communication", "Simple management", "No failures"],
            correct: 1
        },
        {
            question: "Which technique ensures data consistency in distributed systems?",
            options: ["Replication", "Caching", "Both A and B", "Compression"],
            correct: 2
        },
        {
            question: "What is mandatory access control (MAC)?",
            options: ["User decides access", "System enforces access rules", "No access control", "Temporary access"],
            correct: 1
        },
        {
            question: "Which distributed file system provides transparent access?",
            options: ["NFS", "AFS", "CIFS", "All of the above"],
            correct: 3
        },
        {
            question: "What is the purpose of clock synchronization in distributed systems?",
            options: ["Set time", "Coordinate events across systems", "Speed up clocks", "Stop clocks"],
            correct: 1
        },
        {
            question: "Which security mechanism prevents buffer overflow attacks?",
            options: ["Firewall", "Address space layout randomization", "Encryption", "Authentication"],
            correct: 1
        },
        {
            question: "What is the CAP theorem in distributed systems?",
            options: ["Consistency, Availability, Partition tolerance", "Centralization, Authentication, Protection", "Communication, Access, Performance", "Coordination, Agreement, Progress"],
            correct: 0
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
        if (osQuestions[unitId]) {
            osQuestions[unitId].forEach(question => {
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
