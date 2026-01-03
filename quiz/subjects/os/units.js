// quiz/subjects/os/units.js
const osUnits = [
    {
        id: 1,
        name: "Introduction to Operating Systems",
        description: "Operating system concepts, functions, types, system calls, and system structure including kernel and shells."
    },
    {
        id: 2,
        name: "Process Management and Scheduling",
        description: "Process concepts, process states, process control block, process scheduling algorithms, inter-process communication, and threads."
    },
    {
        id: 3,
        name: "Memory Management",
        description: "Memory hierarchy, contiguous memory allocation, paging, segmentation, virtual memory, page replacement algorithms, and thrashing."
    },
    {
        id: 4,
        name: "File Systems and I/O Management",
        description: "File concepts, file organization, directory structures, file allocation methods, disk scheduling algorithms, and I/O hardware and software."
    },
    {
        id: 5,
        name: "Advanced Operating System Concepts",
        description: "Deadlock prevention, avoidance and detection, protection and security, distributed operating systems, and case studies of modern operating systems."
    }
];

// Make available globally
if (typeof window !== 'undefined') {
    window.osUnits = osUnits;
}
