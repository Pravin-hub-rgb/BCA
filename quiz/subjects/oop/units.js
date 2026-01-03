// quiz/subjects/oop/units.js
const oopUnits = [
    {
        id: 1,
        name: "Introduction to Object Oriented Programming",
        description: "Basic concepts of OOP, principles of OOP (encapsulation, inheritance, polymorphism, abstraction), comparison with procedural programming, and benefits of OOP."
    },
    {
        id: 2,
        name: "Classes and Objects",
        description: "Defining classes, creating objects, constructors and destructors, member functions, data members, access specifiers, and object initialization."
    },
    {
        id: 3,
        name: "Inheritance and Polymorphism",
        description: "Types of inheritance, virtual functions, pure virtual functions, abstract classes, runtime polymorphism, and function overriding."
    },
    {
        id: 4,
        name: "Operator Overloading and Templates",
        description: "Operator overloading concepts, overloading unary and binary operators, function templates, class templates, and exception handling."
    },
    {
        id: 5,
        name: "Advanced OOP Concepts",
        description: "File handling in OOP, Standard Template Library (STL), design patterns, case studies, and advanced OOP applications."
    }
];

// Make available globally
if (typeof window !== 'undefined') {
    window.oopUnits = oopUnits;
}
