// Web Technologies Units Configuration
const webUnits = [
    {
        id: 1,
        name: "Web Technology Foundations",
        description: "History of Internet and World Wide Web, Protocols (HTTP, SMTP, POP3, MIME, IMAP, FTP, Telnet), Web servers, DNS, Static vs Dynamic websites, URL addressing."
    },
    {
        id: 2,
        name: "HTML & CSS",
        description: "HTML basic tags, links, tables, frames, forms. Introduction to Cascading Style Sheets (CSS), CSS syntax, STYLE tag, three ways to apply stylesheets."
    },
    {
        id: 3,
        name: "Extensible Markup Language (XML)",
        description: "Introduction to XML, features, advantages and disadvantages, HTML vs XML comparison, XML tree structure, XML Document Type Definition (DTD), XML Document Object Model (DOM)."
    },
    {
        id: 4,
        name: "Client Side Scripting with JavaScript",
        description: "JavaScript introduction, data types, variables, arrays, operators, expressions, looping, constructors, functions, DOM manipulation, event handling, form validation, cookies."
    },
    {
        id: 5,
        name: "Server Side Scripting with PHP",
        description: "PHP introduction and installation, variables, data types, expressions, control statements, functions, arrays, string handling, PHP forms, cookies and sessions, PHP MySQL integration."
    }
];

// Make available globally for browser environment
if (typeof window !== 'undefined') {
    window.webUnits = webUnits;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = webUnits;
}
