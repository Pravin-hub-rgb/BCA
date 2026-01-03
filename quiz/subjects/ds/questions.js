// quiz/subjects/ds/questions.js
const dsQuestions = {
    1: [ // Unit 1: Introduction to Data Structures (20 questions)
        {
            question: "What is the time complexity of accessing an element in an array by index?",
            options: ["O(n)", "O(1)", "O(log n)", "O(n²)"],
            correct: 1
        },
        {
            question: "Which data structure follows Last In First Out (LIFO) principle?",
            options: ["Queue", "Stack", "Linked List", "Array"],
            correct: 1
        },
        {
            question: "What is the worst-case time complexity of inserting an element at the end of a dynamic array?",
            options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
            correct: 0
        },
        {
            question: "Which operation is not typically supported by a standard queue?",
            options: ["Enqueue", "Dequeue", "Peek", "Random access"],
            correct: 3
        },
        {
            question: "What does Big O notation represent?",
            options: ["Exact running time", "Upper bound of algorithm complexity", "Average case performance", "Best case scenario"],
            correct: 1
        },
        {
            question: "Which data structure is used to implement function call stack?",
            options: ["Queue", "Stack", "Array", "Linked List"],
            correct: 1
        },
        {
            question: "What is the space complexity of a singly linked list with n elements?",
            options: ["O(1)", "O(n)", "O(n²)", "O(log n)"],
            correct: 1
        },
        {
            question: "Which data structure follows First In First Out (FIFO) principle?",
            options: ["Stack", "Queue", "Tree", "Graph"],
            correct: 1
        },
        {
            question: "What is the purpose of recursion in data structures?",
            options: ["Memory management", "Solving problems by breaking into smaller subproblems", "Data storage", "Sorting elements"],
            correct: 1
        },
        {
            question: "Which operation has O(1) time complexity in a stack?",
            options: ["Search", "Push", "Sort", "Reverse"],
            correct: 1
        },
        {
            question: "What is the main advantage of linked lists over arrays?",
            options: ["Random access", "Dynamic size", "Less memory usage", "Faster search"],
            correct: 1
        },
        {
            question: "Which data structure is used for breadth-first search?",
            options: ["Stack", "Queue", "Array", "Tree"],
            correct: 1
        },
        {
            question: "What is the worst-case time complexity of linear search?",
            options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
            correct: 1
        },
        {
            question: "Which abstract data type supports insertion and deletion at both ends?",
            options: ["Stack", "Queue", "Deque", "List"],
            correct: 2
        },
        {
            question: "What is the space complexity of storing a recursive call stack?",
            options: ["O(1)", "O(n)", "Depends on recursion depth", "O(log n)"],
            correct: 2
        },
        {
            question: "Which data structure uses LIFO principle for undo operations?",
            options: ["Queue", "Stack", "Heap", "Tree"],
            correct: 1
        },
        {
            question: "What is the time complexity of inserting an element in a sorted array?",
            options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
            correct: 1
        },
        {
            question: "Which data structure is best for implementing priority queues?",
            options: ["Array", "Linked List", "Heap", "Stack"],
            correct: 2
        },
        {
            question: "What is the main disadvantage of recursive algorithms?",
            options: ["Slow execution", "Stack overflow risk", "Complex code", "Memory leaks"],
            correct: 1
        },
        {
            question: "Which data structure allows insertion and deletion at any position efficiently?",
            options: ["Array", "Linked List", "Stack", "Queue"],
            correct: 1
        }
    ],
    2: [ // Unit 2: Trees and Graphs (20 questions)
        {
            question: "What is the maximum number of children a binary tree node can have?",
            options: ["1", "2", "3", "Unlimited"],
            correct: 1
        },
        {
            question: "Which traversal visits the root node first in a binary tree?",
            options: ["Inorder", "Preorder", "Postorder", "Level order"],
            correct: 1
        },
        {
            question: "What is the height of a binary tree with only one node?",
            options: ["0", "1", "2", "-1"],
            correct: 0
        },
        {
            question: "Which tree structure guarantees O(log n) search time?",
            options: ["Binary tree", "Binary search tree", "AVL tree", "Complete binary tree"],
            correct: 1
        },
        {
            question: "What is the time complexity of inorder traversal in a binary tree?",
            options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
            correct: 1
        },
        {
            question: "Which graph representation uses adjacency matrix?",
            options: ["Array of lists", "2D matrix", "Hash table", "Linked list"],
            correct: 1
        },
        {
            question: "What is the degree of a vertex in a graph?",
            options: ["Number of edges", "Number of vertices", "Graph size", "Path length"],
            correct: 0
        },
        {
            question: "Which algorithm finds the shortest path in an unweighted graph?",
            options: ["Dijkstra's", "Bellman-Ford", "Breadth-First Search", "Floyd-Warshall"],
            correct: 2
        },
        {
            question: "What is a spanning tree in graph theory?",
            options: ["Tree with all vertices", "Tree with minimum edges", "Tree with maximum edges", "Tree with cycles"],
            correct: 0
        },
        {
            question: "Which tree balancing technique uses rotation operations?",
            options: ["B-tree", "AVL tree", "Red-black tree", "B+ tree"],
            correct: 1
        },
        {
            question: "What is the time complexity of binary search in a binary search tree?",
            options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
            correct: 2
        },
        {
            question: "Which graph algorithm detects cycles in a directed graph?",
            options: ["DFS", "BFS", "Topological sort", "Both A and B"],
            correct: 0
        },
        {
            question: "What is the minimum number of nodes in a binary tree of height h?",
            options: ["h", "h+1", "2^h", "2^(h+1)-1"],
            correct: 1
        },
        {
            question: "Which data structure is used to implement priority queues efficiently?",
            options: ["Array", "Linked List", "Binary Heap", "Stack"],
            correct: 2
        },
        {
            question: "What is the purpose of topological sorting?",
            options: ["Find shortest path", "Order vertices in DAG", "Detect cycles", "Find connected components"],
            correct: 1
        },
        {
            question: "Which tree structure is used for database indexing?",
            options: ["Binary tree", "AVL tree", "B-tree", "Red-black tree"],
            correct: 2
        },
        {
            question: "What is the maximum number of nodes at level k in a binary tree?",
            options: ["k", "2^k", "2^(k-1)", "k^2"],
            correct: 1
        },
        {
            question: "Which algorithm uses Union-Find data structure?",
            options: ["Kruskal's MST", "Prim's MST", "Dijkstra's", "Floyd-Warshall"],
            correct: 0
        },
        {
            question: "What is the time complexity of DFS traversal in a graph?",
            options: ["O(1)", "O(n)", "O(V + E)", "O(n²)"],
            correct: 2
        },
        {
            question: "Which tree property ensures balance in AVL trees?",
            options: ["Height difference ≤ 1", "Perfect balance", "Complete tree", "Full tree"],
            correct: 0
        }
    ],
    3: [ // Unit 3: Sorting and Searching (25 questions)
        {
            question: "Which sorting algorithm has the worst-case time complexity of O(n²)?",
            options: ["Quick sort", "Merge sort", "Bubble sort", "Heap sort"],
            correct: 2
        },
        {
            question: "What is the best-case time complexity of bubble sort?",
            options: ["O(1)", "O(n)", "O(n²)", "O(n log n)"],
            correct: 1
        },
        {
            question: "Which sorting algorithm is stable?",
            options: ["Quick sort", "Heap sort", "Merge sort", "Selection sort"],
            correct: 2
        },
        {
            question: "What is the time complexity of binary search?",
            options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
            correct: 2
        },
        {
            question: "Which sorting algorithm uses divide and conquer strategy?",
            options: ["Bubble sort", "Insertion sort", "Quick sort", "Selection sort"],
            correct: 2
        },
        {
            question: "What is the space complexity of merge sort?",
            options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
            correct: 1
        },
        {
            question: "Which searching algorithm requires a sorted array?",
            options: ["Linear search", "Binary search", "Hash search", "Sequential search"],
            correct: 1
        },
        {
            question: "What is the worst-case time complexity of quick sort?",
            options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
            correct: 2
        },
        {
            question: "Which sorting algorithm works by repeatedly swapping adjacent elements?",
            options: ["Selection sort", "Insertion sort", "Bubble sort", "Merge sort"],
            correct: 2
        },
        {
            question: "What is the average time complexity of insertion sort?",
            options: ["O(1)", "O(n)", "O(n²)", "O(n log n)"],
            correct: 2
        },
        {
            question: "Which sorting algorithm is in-place?",
            options: ["Merge sort", "Quick sort", "Both A and B", "None"],
            correct: 1
        },
        {
            question: "What is the time complexity of selection sort?",
            options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
            correct: 2
        },
        {
            question: "Which sorting algorithm uses a heap data structure?",
            options: ["Quick sort", "Merge sort", "Heap sort", "Bubble sort"],
            correct: 2
        },
        {
            question: "What is the purpose of linear search?",
            options: ["Sort elements", "Find element in unsorted array", "Find element in sorted array", "Sort and search"],
            correct: 1
        },
        {
            question: "Which sorting algorithm has the best average case performance?",
            options: ["Bubble sort", "Insertion sort", "Quick sort", "Selection sort"],
            correct: 2
        },
        {
            question: "What is the space complexity of heap sort?",
            options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
            correct: 0
        },
        {
            question: "Which searching technique uses hashing?",
            options: ["Linear search", "Binary search", "Hash search", "Interpolation search"],
            correct: 2
        },
        {
            question: "What is the worst-case time complexity of linear search?",
            options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
            correct: 1
        },
        {
            question: "Which sorting algorithm is adaptive?",
            options: ["Bubble sort", "Insertion sort", "Both A and B", "Quick sort"],
            correct: 2
        },
        {
            question: "What is the time complexity of counting sort?",
            options: ["O(n)", "O(n log n)", "O(n + k)", "O(n²)"],
            correct: 2
        },
        {
            question: "Which sorting algorithm is not comparison-based?",
            options: ["Quick sort", "Merge sort", "Counting sort", "Heap sort"],
            correct: 2
        },
        {
            question: "What is the best-case time complexity of insertion sort?",
            options: ["O(1)", "O(n)", "O(n²)", "O(n log n)"],
            correct: 1
        },
        {
            question: "Which searching algorithm can be used on any data structure?",
            options: ["Binary search", "Linear search", "Interpolation search", "Exponential search"],
            correct: 1
        },
        {
            question: "What is the average time complexity of quick sort?",
            options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
            correct: 1
        },
        {
            question: "Which sorting algorithm uses the principle of divide and conquer?",
            options: ["Bubble sort", "Merge sort", "Insertion sort", "Selection sort"],
            correct: 1
        }
    ],
    4: [ // Unit 4: Hashing and Files (25 questions)
        {
            question: "What is the purpose of a hash function?",
            options: ["Sort data", "Map keys to array indices", "Search elements", "Store data"],
            correct: 1
        },
        {
            question: "Which collision resolution technique uses linked lists?",
            options: ["Linear probing", "Quadratic probing", "Separate chaining", "Double hashing"],
            correct: 2
        },
        {
            question: "What is the load factor in hash tables?",
            options: ["Hash function efficiency", "Ratio of elements to table size", "Collision rate", "Search time"],
            correct: 1
        },
        {
            question: "Which file organization allows direct access to records?",
            options: ["Sequential file", "Indexed sequential file", "Direct file", "Hashed file"],
            correct: 2
        },
        {
            question: "What is the time complexity of average case hash table search?",
            options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
            correct: 0
        },
        {
            question: "Which collision resolution method may cause clustering?",
            options: ["Separate chaining", "Linear probing", "Quadratic probing", "Double hashing"],
            correct: 1
        },
        {
            question: "What is the purpose of rehashing in hash tables?",
            options: ["Resolve collisions", "Increase table size", "Change hash function", "Optimize search"],
            correct: 1
        },
        {
            question: "Which file organization uses index blocks for faster access?",
            options: ["Sequential", "Indexed sequential", "Direct", "Hashed"],
            correct: 1
        },
        {
            question: "What is a perfect hash function?",
            options: ["No collisions", "Fast computation", "Uniform distribution", "All of the above"],
            correct: 0
        },
        {
            question: "Which B-tree structure is commonly used for database indexing?",
            options: ["B-tree", "B+ tree", "AVL tree", "Red-black tree"],
            correct: 1
        },
        {
            question: "What is the advantage of separate chaining over open addressing?",
            options: ["Better cache performance", "Handles deletions easily", "Less memory usage", "Simpler implementation"],
            correct: 1
        },
        {
            question: "Which file organization is best for sequential access?",
            options: ["Indexed file", "Hashed file", "Sequential file", "Direct file"],
            correct: 2
        },
        {
            question: "What is the worst-case time complexity of hash table operations with collisions?",
            options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
            correct: 1
        },
        {
            question: "Which hash function uses modular arithmetic?",
            options: ["Division method", "Multiplication method", "Universal hashing", "Perfect hashing"],
            correct: 0
        },
        {
            question: "What is the purpose of a secondary index in files?",
            options: ["Primary key indexing", "Non-key attribute indexing", "Sequential access", "Direct access"],
            correct: 1
        },
        {
            question: "Which collision resolution technique uses a second hash function?",
            options: ["Linear probing", "Quadratic probing", "Separate chaining", "Double hashing"],
            correct: 3
        },
        {
            question: "What is the order of B+ tree nodes?",
            options: ["All leaves same level", "Balanced tree", "Both A and B", "Sorted order"],
            correct: 2
        },
        {
            question: "Which file organization uses hash functions for record placement?",
            options: ["Sequential", "Indexed", "Direct", "Hashed"],
            correct: 3
        },
        {
            question: "What is the main disadvantage of linear probing?",
            options: ["Memory usage", "Primary clustering", "Complex implementation", "Slow search"],
            correct: 1
        },
        {
            question: "Which index structure allows range queries efficiently?",
            options: ["Hash index", "B-tree index", "Bitmap index", "Dense index"],
            correct: 1
        },
        {
            question: "What is the load factor threshold for hash table resizing?",
            options: ["0.5", "0.75", "1.0", "Depends on implementation"],
            correct: 3
        },
        {
            question: "Which file organization combines sequential and direct access?",
            options: ["Pure sequential", "Indexed sequential", "Pure direct", "Hashed"],
            correct: 1
        },
        {
            question: "What is universal hashing used for?",
            options: ["Worst-case guarantees", "Average-case performance", "Both A and B", "Perfect hashing"],
            correct: 0
        },
        {
            question: "Which B-tree property ensures efficient range searches?",
            options: ["Self-balancing", "Sorted order", "Multi-level index", "All of the above"],
            correct: 3
        },
        {
            question: "What is the time complexity of B-tree search operations?",
            options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
            correct: 1
        }
    ],
    5: [ // Unit 5: Advanced Data Structures (25 questions)
        {
            question: "What is the time complexity of heap operations?",
            options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
            correct: 1
        },
        {
            question: "Which data structure is used to implement priority queues efficiently?",
            options: ["Array", "Linked List", "Binary Heap", "Stack"],
            correct: 2
        },
        {
            question: "What is the maximum number of nodes in a heap of height h?",
            options: ["h", "2^h", "2^(h+1)-1", "h^2"],
            correct: 2
        },
        {
            question: "Which tree structure maintains balance through rotations?",
            options: ["Binary search tree", "AVL tree", "B-tree", "Trie"],
            correct: 1
        },
        {
            question: "What is the purpose of a trie data structure?",
            options: ["Sorting", "String storage and retrieval", "Graph representation", "Heap operations"],
            correct: 1
        },
        {
            question: "Which self-adjusting binary search tree moves accessed nodes to root?",
            options: ["AVL tree", "Red-black tree", "Splay tree", "B-tree"],
            correct: 2
        },
        {
            question: "What is the time complexity of skip list search operations?",
            options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
            correct: 1
        },
        {
            question: "Which data structure uses probabilistic balancing?",
            options: ["AVL tree", "Red-black tree", "Skip list", "B-tree"],
            correct: 2
        },
        {
            question: "What is the main advantage of red-black trees over AVL trees?",
            options: ["Tighter balance", "Fewer rotations", "Simpler implementation", "Better worst-case guarantees"],
            correct: 1
        },
        {
            question: "Which data structure is used for autocomplete features?",
            options: ["Heap", "Trie", "Skip list", "Hash table"],
            correct: 1
        },
        {
            question: "What is the space complexity of a trie?",
            options: ["O(1)", "O(n)", "O(alphabet size)", "O(n * alphabet size)"],
            correct: 3
        },
        {
            question: "Which balanced tree guarantees O(log n) operations?",
            options: ["Binary search tree", "AVL tree", "Both A and B", "Skip list"],
            correct: 2
        },
        {
            question: "What is the purpose of a Fibonacci heap?",
            options: ["Fast search", "Fast decrease key operations", "String operations", "Graph algorithms"],
            correct: 1
        },
        {
            question: "Which data structure supports order statistics in O(log n) time?",
            options: ["Binary heap", "Order statistic tree", "Trie", "Skip list"],
            correct: 1
        },
        {
            question: "What is the amortized time complexity of splay tree operations?",
            options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
            correct: 1
        },
        {
            question: "Which data structure is used in external sorting algorithms?",
            options: ["Trie", "Skip list", "Replacement selection", "Fibonacci heap"],
            correct: 2
        },
        {
            question: "What is the advantage of B-link trees over B-trees?",
            options: ["Better balance", "Sequential access support", "Memory efficiency", "Simpler implementation"],
            correct: 1
        },
        {
            question: "Which data structure provides O(1) time for median operations?",
            options: ["Heap", "Two heaps", "Trie", "Skip list"],
            correct: 1
        },
        {
            question: "What is the purpose of a scapegoat tree?",
            options: ["Self-adjusting balance", "Fast operations", "Memory efficiency", "Concurrent access"],
            correct: 0
        },
        {
            question: "Which data structure is optimal for cache-oblivious algorithms?",
            options: ["Van Emde Boas tree", "B-tree", "Skip list", "Fibonacci heap"],
            correct: 1
        },
        {
            question: "What is the time complexity of union operation in disjoint sets with path compression?",
            options: ["O(1)", "O(log n)", "O(n)", "Amortized O(α(n))"],
            correct: 3
        },
        {
            question: "Which data structure is used for range minimum queries?",
            options: ["Segment tree", "Fenwick tree", "Sparse table", "All of the above"],
            correct: 3
        },
        {
            question: "What is the space complexity of a segment tree?",
            options: ["O(1)", "O(n)", "O(n log n)", "O(n²)"],
            correct: 2
        },
        {
            question: "Which data structure supports 2D range queries efficiently?",
            options: ["Binary indexed tree", "Segment tree 2D", "KD-tree", "Both B and C"],
            correct: 3
        },
        {
            question: "What is the purpose of a persistent data structure?",
            options: ["Memory efficiency", "Maintain previous versions", "Fast operations", "Concurrent access"],
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
        if (dsQuestions[unitId]) {
            dsQuestions[unitId].forEach(question => {
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
