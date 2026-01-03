// quiz/subjects/oop/questions.js
const oopQuestions = {
    1: [ // Unit 1: Introduction to Object Oriented Programming (20 questions)
        {
            question: "What is the primary advantage of object-oriented programming over procedural programming?",
            options: ["Faster execution", "Better code organization and reusability", "Less memory usage", "Easier debugging"],
            correct: 1
        },
        {
            question: "Which of the following is NOT a fundamental principle of OOP?",
            options: ["Encapsulation", "Inheritance", "Polymorphism", "Compilation"],
            correct: 3
        },
        {
            question: "What does encapsulation in OOP achieve?",
            options: ["Code reusability", "Data hiding and protection", "Multiple inheritance", "Runtime polymorphism"],
            correct: 1
        },
        {
            question: "Which OOP principle allows objects of different classes to be treated as objects of a common base class?",
            options: ["Encapsulation", "Inheritance", "Polymorphism", "Abstraction"],
            correct: 2
        },
        {
            question: "What is abstraction in object-oriented programming?",
            options: ["Hiding implementation details", "Creating multiple copies of objects", "Inheriting from multiple classes", "Overloading operators"],
            correct: 0
        },
        {
            question: "Which programming paradigm focuses on procedures or functions rather than data?",
            options: ["Object-oriented programming", "Procedural programming", "Functional programming", "Logic programming"],
            correct: 1
        },
        {
            question: "What is the main benefit of inheritance in OOP?",
            options: ["Data encapsulation", "Code reusability", "Operator overloading", "Exception handling"],
            correct: 1
        },
        {
            question: "Which OOP concept allows the same function name to perform different operations?",
            options: ["Encapsulation", "Inheritance", "Polymorphism", "Abstraction"],
            correct: 2
        },
        {
            question: "What is a class in object-oriented programming?",
            options: ["An object instance", "A blueprint for creating objects", "A function", "A data type"],
            correct: 1
        },
        {
            question: "Which of the following best describes an object?",
            options: ["A class definition", "An instance of a class", "A function", "A variable"],
            correct: 1
        },
        {
            question: "What is the relationship between a class and an object?",
            options: ["Class is an instance of object", "Object is an instance of class", "They are the same", "Class contains objects"],
            correct: 1
        },
        {
            question: "Which OOP principle helps in managing complexity by breaking down problems into smaller parts?",
            options: ["Encapsulation", "Modularization", "Inheritance", "Polymorphism"],
            correct: 1
        },
        {
            question: "What does the term 'modularity' refer to in OOP?",
            options: ["Multiple inheritance", "Breaking code into independent modules", "Operator overloading", "Exception handling"],
            correct: 1
        },
        {
            question: "Which programming approach emphasizes data and its associated operations?",
            options: ["Procedural programming", "Functional programming", "Object-oriented programming", "Scripting"],
            correct: 2
        },
        {
            question: "What is the primary goal of object-oriented design?",
            options: ["Faster execution", "Easier maintenance and extension", "Less memory usage", "Simpler syntax"],
            correct: 1
        },
        {
            question: "Which OOP concept allows data and methods to be bundled together?",
            options: ["Inheritance", "Polymorphism", "Encapsulation", "Abstraction"],
            correct: 2
        },
        {
            question: "What is the main difference between a class and a structure in OOP?",
            options: ["Classes can have functions, structures cannot", "Structures can have functions, classes cannot", "No difference", "Classes are for data, structures for functions"],
            correct: 0
        },
        {
            question: "Which OOP principle supports the concept of 'is-a' relationship?",
            options: ["Encapsulation", "Inheritance", "Polymorphism", "Abstraction"],
            correct: 1
        },
        {
            question: "What does the term 'coupling' refer to in software design?",
            options: ["Connection between modules", "Inheritance hierarchy", "Polymorphism types", "Exception handling"],
            correct: 0
        },
        {
            question: "Which OOP concept helps in achieving loose coupling between modules?",
            options: ["Multiple inheritance", "Tight encapsulation", "Global variables", "Direct access to data"],
            correct: 1
        }
    ],
    2: [ // Unit 2: Classes and Objects (20 questions)
        {
            question: "What is the syntax to declare a class in C++?",
            options: ["class ClassName {}", "struct ClassName {}", "object ClassName {}", "define ClassName {}"],
            correct: 0
        },
        {
            question: "Which keyword is used to create an object of a class?",
            options: ["new", "create", "instance", "object"],
            correct: 0
        },
        {
            question: "What is a constructor in OOP?",
            options: ["A function to destroy objects", "A special function called when object is created", "A function to copy objects", "A function to compare objects"],
            correct: 1
        },
        {
            question: "Which of the following is true about constructors?",
            options: ["They have return type", "They cannot be overloaded", "They have the same name as class", "They must be called explicitly"],
            correct: 2
        },
        {
            question: "What is a destructor in C++?",
            options: ["A function called when object is created", "A function called when object is destroyed", "A function to initialize data members", "A function to copy objects"],
            correct: 1
        },
        {
            question: "Which access specifier makes members accessible only within the class?",
            options: ["public", "private", "protected", "internal"],
            correct: 1
        },
        {
            question: "What is the default access specifier for class members in C++?",
            options: ["public", "private", "protected", "internal"],
            correct: 1
        },
        {
            question: "Which keyword is used to access class members within class methods?",
            options: ["self", "this", "me", "object"],
            correct: 1
        },
        {
            question: "What is a member function in a class?",
            options: ["A data member", "A function defined inside the class", "A constructor", "A destructor"],
            correct: 1
        },
        {
            question: "Which of the following can be private in a class?",
            options: ["Only data members", "Only member functions", "Both data members and functions", "Neither"],
            correct: 2
        },
        {
            question: "What happens when an object goes out of scope in C++?",
            options: ["Constructor is called", "Destructor is called", "Copy constructor is called", "Assignment operator is called"],
            correct: 1
        },
        {
            question: "Which type of constructor takes no arguments?",
            options: ["Parameterized constructor", "Copy constructor", "Default constructor", "Explicit constructor"],
            correct: 2
        },
        {
            question: "What is the purpose of 'this' pointer in C++?",
            options: ["To point to derived class", "To point to current object", "To point to base class", "To point to next object"],
            correct: 1
        },
        {
            question: "Which access specifier allows access from derived classes?",
            options: ["public", "private", "protected", "internal"],
            correct: 2
        },
        {
            question: "What is the difference between struct and class in C++?",
            options: ["No difference", "Struct has private by default, class has public", "Class has private by default, struct has public", "Structs cannot have functions"],
            correct: 2
        },
        {
            question: "Which operator is used to access members of an object?",
            options: [".", "->", "::", "&"],
            correct: 0
        },
        {
            question: "What is the size of an empty class in C++?",
            options: ["0 bytes", "1 byte", "4 bytes", "8 bytes"],
            correct: 1
        },
        {
            question: "Which keyword is used to define constant member functions?",
            options: ["static", "const", "virtual", "inline"],
            correct: 1
        },
        {
            question: "What is a static member in a class?",
            options: ["A member shared by all objects", "A member unique to each object", "A constant member", "A virtual member"],
            correct: 0
        },
        {
            question: "Which constructor is called when an object is created from another object?",
            options: ["Default constructor", "Parameterized constructor", "Copy constructor", "Move constructor"],
            correct: 2
        }
    ],
    3: [ // Unit 3: Inheritance and Polymorphism (25 questions)
        {
            question: "What is inheritance in OOP?",
            options: ["Creating multiple copies of objects", "Deriving new classes from existing classes", "Hiding data from outside world", "Overloading operators"],
            correct: 1
        },
        {
            question: "Which type of inheritance involves one base class and one derived class?",
            options: ["Single inheritance", "Multiple inheritance", "Multilevel inheritance", "Hierarchical inheritance"],
            correct: 0
        },
        {
            question: "What is the syntax for inheritance in C++?",
            options: ["class Derived : Base", "class Derived extends Base", "class Derived inherits Base", "class Derived implements Base"],
            correct: 0
        },
        {
            question: "Which access specifier in base class becomes private in derived class when inherited privately?",
            options: ["public", "private", "protected", "All of them"],
            correct: 0
        },
        {
            question: "What is polymorphism in OOP?",
            options: ["Multiple inheritance", "Same function name, different implementations", "Data hiding", "Operator overloading"],
            correct: 1
        },
        {
            question: "Which type of polymorphism is resolved at compile time?",
            options: ["Static polymorphism", "Dynamic polymorphism", "Runtime polymorphism", "Both A and C"],
            correct: 3
        },
        {
            question: "What is a virtual function in C++?",
            options: ["A function that can be overridden", "A function that cannot be overridden", "A static function", "An inline function"],
            correct: 0
        },
        {
            question: "Which keyword is used to declare a virtual function?",
            options: ["virtual", "override", "abstract", "pure"],
            correct: 0
        },
        {
            question: "What is a pure virtual function?",
            options: ["A function with no body", "A function that must be overridden", "Both A and B", "A static function"],
            correct: 2
        },
        {
            question: "Which class cannot be instantiated directly?",
            options: ["Concrete class", "Abstract class", "Derived class", "Base class"],
            correct: 1
        },
        {
            question: "What is the diamond problem in multiple inheritance?",
            options: ["Memory issue", "Ambiguity in function calls", "Performance issue", "Syntax error"],
            correct: 1
        },
        {
            question: "Which inheritance allows a derived class to inherit from multiple base classes?",
            options: ["Single inheritance", "Multiple inheritance", "Multilevel inheritance", "Hierarchical inheritance"],
            correct: 1
        },
        {
            question: "What is function overriding?",
            options: ["Same function name, different parameters", "Same function name, same parameters, different implementation", "Different function names", "Static functions"],
            correct: 1
        },
        {
            question: "Which keyword is used in C++11 for explicit override?",
            options: ["virtual", "override", "final", "abstract"],
            correct: 1
        },
        {
            question: "What is the difference between virtual and pure virtual functions?",
            options: ["Virtual functions have body, pure virtual don't", "Pure virtual functions have body, virtual don't", "No difference", "Virtual functions are static"],
            correct: 0
        },
        {
            question: "Which type of inheritance creates a hierarchical structure?",
            options: ["Single inheritance", "Multiple inheritance", "Multilevel inheritance", "Hierarchical inheritance"],
            correct: 3
        },
        {
            question: "What is the purpose of virtual destructor?",
            options: ["To prevent inheritance", "To ensure proper cleanup in inheritance", "To make destructor static", "To override destructor"],
            correct: 1
        },
        {
            question: "Which inheritance visibility makes all members private in derived class?",
            options: ["public", "private", "protected", "default"],
            correct: 1
        },
        {
            question: "What is runtime polymorphism achieved through?",
            options: ["Function overloading", "Function overriding", "Operator overloading", "Templates"],
            correct: 1
        },
        {
            question: "Which class contains at least one pure virtual function?",
            options: ["Concrete class", "Abstract class", "Final class", "Static class"],
            correct: 1
        },
        {
            question: "What is the syntax for pure virtual function in C++?",
            options: ["virtual void func() = 0;", "virtual void func() {}", "void func() = 0;", "pure virtual void func();"],
            correct: 0
        },
        {
            question: "Which keyword prevents further inheritance?",
            options: ["virtual", "override", "final", "abstract"],
            correct: 2
        },
        {
            question: "What is the base class access in public inheritance?",
            options: ["All members become public", "Access specifiers remain same", "All members become private", "Only public members accessible"],
            correct: 1
        },
        {
            question: "Which type of polymorphism is achieved through templates?",
            options: ["Static polymorphism", "Dynamic polymorphism", "Runtime polymorphism", "Compile-time polymorphism"],
            correct: 3
        },
        {
            question: "What is the purpose of virtual base class?",
            options: ["To prevent multiple inheritance", "To resolve diamond problem", "To make inheritance private", "To create abstract classes"],
            correct: 1
        }
    ],
    4: [ // Unit 4: Operator Overloading and Templates (25 questions)
        {
            question: "What is operator overloading in C++?",
            options: ["Creating new operators", "Giving special meaning to existing operators", "Deleting operators", "Renaming operators"],
            correct: 1
        },
        {
            question: "Which operators cannot be overloaded in C++?",
            options: ["+", "-", "*", "::"],
            correct: 3
        },
        {
            question: "What is the syntax for overloading binary operator + ?",
            options: ["operator+()", "operator +", "Both A and B", "plus()"],
            correct: 2
        },
        {
            question: "Which type of operators can be overloaded?",
            options: ["Only arithmetic", "Only logical", "Most operators except few", "All operators"],
            correct: 2
        },
        {
            question: "What is a friend function in C++?",
            options: ["A static function", "A function that can access private members", "A virtual function", "An inline function"],
            correct: 1
        },
        {
            question: "Which keyword is used to declare a friend function?",
            options: ["friend", "public", "private", "protected"],
            correct: 0
        },
        {
            question: "What is a function template in C++?",
            options: ["A template for creating functions", "A template for creating classes", "Both A and B", "A virtual function"],
            correct: 2
        },
        {
            question: "What is the syntax for function template?",
            options: ["template <class T>", "template <typename T>", "Both A and B", "function <T>"],
            correct: 2
        },
        {
            question: "What is a class template?",
            options: ["A template for functions", "A template for creating classes", "A virtual class", "An abstract class"],
            correct: 1
        },
        {
            question: "What is template specialization?",
            options: ["Creating specific implementation for a type", "Creating general implementation", "Deleting templates", "Overriding templates"],
            correct: 0
        },
        {
            question: "Which type of exception handling uses try-catch blocks?",
            options: ["C++", "Java", "Both A and B", "Neither"],
            correct: 2
        },
        {
            question: "What is the purpose of catch block?",
            options: ["To throw exceptions", "To handle exceptions", "To create exceptions", "To ignore exceptions"],
            correct: 1
        },
        {
            question: "Which keyword is used to throw an exception?",
            options: ["catch", "try", "throw", "exception"],
            correct: 2
        },
        {
            question: "What is the base class for all exceptions in C++?",
            options: ["exception", "std::exception", "runtime_error", "logic_error"],
            correct: 1
        },
        {
            question: "What is operator overloading for stream insertion?",
            options: ["operator>>", "operator<<", "operator+", "operator-"],
            correct: 1
        },
        {
            question: "Which operators can be overloaded as member functions only?",
            options: ["+", "-", "=", "()"],
            correct: 3
        },
        {
            question: "What is the return type of overloaded assignment operator?",
            options: ["void", "int", "Reference to object", "Pointer to object"],
            correct: 2
        },
        {
            question: "What is template metaprogramming?",
            options: ["Programming with templates", "Compile-time programming using templates", "Runtime programming", "Function programming"],
            correct: 1
        },
        {
            question: "Which template allows multiple parameters?",
            options: ["Single parameter template", "Multiple parameter template", "Both A and B", "No templates allow multiple parameters"],
            correct: 1
        },
        {
            question: "What is a namespace in C++?",
            options: ["A class", "A scope for identifiers", "A function", "A variable"],
            correct: 1
        },
        {
            question: "Which keyword is used to define a namespace?",
            options: ["namespace", "class", "struct", "define"],
            correct: 0
        },
        {
            question: "What is the standard namespace in C++?",
            options: ["standard", "std", "standard_library", "stdlib"],
            correct: 1
        },
        {
            question: "What is the purpose of using namespace std?",
            options: ["To avoid typing std::", "To create namespace", "To delete namespace", "To rename namespace"],
            correct: 0
        },
        {
            question: "Which exception is thrown for out of range access?",
            options: ["out_of_range", "invalid_argument", "runtime_error", "logic_error"],
            correct: 0
        },
        {
            question: "What is RAII in C++?",
            options: ["Resource Acquisition Is Initialization", "Runtime Array Initialization", "Random Access Iterator Interface", "Recursive Algorithm Implementation"],
            correct: 0
        }
    ],
    5: [ // Unit 5: Advanced OOP Concepts (25 questions)
        {
            question: "What is the Standard Template Library (STL) in C++?",
            options: ["A graphics library", "A collection of template classes", "A database library", "A networking library"],
            correct: 1
        },
        {
            question: "Which STL container provides fast insertion and deletion at both ends?",
            options: ["vector", "deque", "list", "set"],
            correct: 1
        },
        {
            question: "What is a vector in STL?",
            options: ["A dynamic array", "A linked list", "A stack", "A queue"],
            correct: 0
        },
        {
            question: "Which STL container automatically sorts its elements?",
            options: ["vector", "list", "set", "deque"],
            correct: 2
        },
        {
            question: "What is an iterator in STL?",
            options: ["A pointer to container elements", "A function", "A class", "A variable"],
            correct: 0
        },
        {
            question: "Which algorithm is used to sort elements in STL?",
            options: ["sort()", "find()", "search()", "merge()"],
            correct: 0
        },
        {
            question: "What is file handling in C++?",
            options: ["Reading from/writing to files", "Creating graphics", "Network programming", "Database operations"],
            correct: 0
        },
        {
            question: "Which class is used for file input operations?",
            options: ["ofstream", "ifstream", "fstream", "file"],
            correct: 1
        },
        {
            question: "What is the purpose of fstream class?",
            options: ["Input only", "Output only", "Both input and output", "Neither"],
            correct: 2
        },
        {
            question: "What is a design pattern in software engineering?",
            options: ["A programming language", "A reusable solution to common problems", "A data structure", "An algorithm"],
            correct: 1
        },
        {
            question: "Which design pattern ensures only one instance of a class exists?",
            options: ["Factory pattern", "Singleton pattern", "Observer pattern", "Strategy pattern"],
            correct: 1
        },
        {
            question: "What is the Factory design pattern used for?",
            options: ["Creating objects without specifying exact class", "Managing object lifecycle", "Observing object changes", "Storing objects"],
            correct: 0
        },
        {
            question: "Which pattern defines a one-to-many dependency between objects?",
            options: ["Singleton", "Factory", "Observer", "Strategy"],
            correct: 2
        },
        {
            question: "What is the Strategy design pattern?",
            options: ["Object creation pattern", "Behavioral pattern for algorithms", "Structural pattern", "Creational pattern"],
            correct: 1
        },
        {
            question: "Which STL algorithm is used to find elements?",
            options: ["find()", "sort()", "merge()", "reverse()"],
            correct: 0
        },
        {
            question: "What is the complexity of vector insertion at end?",
            options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
            correct: 0
        },
        {
            question: "Which file mode opens file for both reading and writing?",
            options: ["ios::in", "ios::out", "ios::app", "ios::trunc"],
            correct: 1
        },
        {
            question: "What is the Adapter design pattern?",
            options: ["Converts interface of a class to another interface", "Creates objects", "Manages object communication", "Handles exceptions"],
            correct: 0
        },
        {
            question: "Which pattern separates algorithm from its implementation?",
            options: ["Bridge pattern", "Adapter pattern", "Facade pattern", "Decorator pattern"],
            correct: 0
        },
        {
            question: "What is the Command design pattern?",
            options: ["Structural pattern", "Creational pattern", "Behavioral pattern", "Concurrency pattern"],
            correct: 2
        },
        {
            question: "Which STL container is a double-ended queue?",
            options: ["queue", "stack", "deque", "priority_queue"],
            correct: 2
        },
        {
            question: "What is the purpose of auto_ptr in C++?",
            options: ["Smart pointer for automatic memory management", "File pointer", "Function pointer", "Data pointer"],
            correct: 0
        },
        {
            question: "Which pattern allows adding responsibilities to objects dynamically?",
            options: ["Adapter", "Decorator", "Proxy", "Composite"],
            correct: 1
        },
        {
            question: "What is the Composite design pattern?",
            options: ["Treats individual and composite objects uniformly", "Creates object families", "Manages object states", "Handles requests"],
            correct: 0
        },
        {
            question: "Which algorithm removes consecutive duplicate elements?",
            options: ["unique()", "remove()", "sort()", "merge()"],
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
        if (oopQuestions[unitId]) {
            oopQuestions[unitId].forEach(question => {
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
