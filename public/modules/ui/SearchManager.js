// modules/ui/SearchManager.js
export class SearchManager {
  constructor() {
    this.subjects = [
      // Programming Languages (7)
      { name: "Advance Concepts of 'C' Programming", path: "./resources/sem2/advance_C/index.html" },
      { name: "Android Programming", path: "./resources/sem5/ap/index.html" },
      { name: "Data Analytics Using Python", path: "./resources/sem4/python_tbc401/index.html" },
      { name: "Java Programming", path: "./resources/sem3/javatbc303/index.html" },
      { name: "Object Oriented Programming Using C++", path: "./resources/sem2/OOPS_using_C++/index.html" },
      { name: "Programming Concepts Using C Language", path: "./resources/sem1/programming concepts using C language/index.html" },
      { name: "Programming with .Net", path: "./resources/sem5/net/index.html" },

      // Labs (12)
      { name: "Android Programming Lab", path: "./resources/sem5/aplab/index.html" },
      { name: "C# .Net Lab", path: "./resources/sem5/netlab/index.html" },
      { name: "CBNST lab", path: "./resources/sem4/cbnstlab/index.html" },
      { name: "Computer Graphics Lab", path: "./resources/sem6/cglab/index.html" },
      { name: "Data Structures Lab", path: "./resources/sem2/datastructure_lab/index.html" },
      { name: "DBMS Lab", path: "./resources/sem3/dbmslab/index.html" },
      { name: "Java Lab", path: "./resources/sem3/javalab/index.html" },
      { name: "Machine Learning Lab", path: "./resources/sem6/mllab/index.html" },
      { name: "PC Packages Lab", path: "./resources/sem1/PC packages lab/index.html" },
      { name: "Programming Concept Using 'C' lab", path: "./resources/sem1/Programming in 'C' lab/index.html" },
      { name: "Python lab", path: "./resources/sem4/pythonlab/index.html" },
      { name: "Web Technologies lab", path: "./resources/sem4/weblab/index.html" },

      // Core Computer Science (6)
      { name: "Computer Fundamentals and Information Technology", path: "./resources/sem1/Computer Fundamentals and Information Technology/index.html" },
      { name: "Computer Graphics", path: "./resources/sem6/cg/index.html" },
      { name: "Computer Organization and Architecture", path: "./resources/sem3/coatbc304/index.html" },
      { name: "Data Structures and File Organization", path: "./resources/sem2/datastructure_and_FO/index.html" },
      { name: "Digital Electronics", path: "./resources/sem2/digital_electronics/index.html" },
      { name: "Operating System", path: "./resources/sem2/operating_sys/index.html" },

      // Data & Databases (2)
      { name: "Data Warehouse and Data Mining", path: "./resources/sem6/dw_dm/index.html" },
      { name: "Database Management System", path: "./resources/sem3/dbmstbc302/index.html" },

      // Web & Networking (3)
      { name: "Data Communication and Computer Networks", path: "./resources/sem3/datatbc301/index.html" },
      { name: "Network Security and Cyber Law", path: "./resources/sem6/ns_cl/index.html" },
      { name: "Web Technologies", path: "./resources/sem4/web_tbc404/index.html" },

      // Mathematics (4)
      { name: "Computer Based Numerical & Statistical Techniques", path: "./resources/sem4/comp_num_tbc405/index.html" },
      { name: "Discrete mathematical Structures and Graph Theory", path: "./resources/sem2/maths/index.html" },
      { name: "Mathematical Foundation of Computer Science", path: "./resources/sem1/Mathematical Foundation of Compuer Science/index.html" },
      { name: "Optimization Techniques", path: "./resources/sem5/ot/index.html" },

      // Software Engineering & AI (5)
      { name: "Cryptography", path: "./resources/sem5/crypto/index.html" },
      { name: "Fundamentals of Machine Learning", path: "./resources/sem6/fml/index.html" },
      { name: "Soft Computing", path: "./resources/sem5/sc/index.html" },
      { name: "Software Engineering", path: "./resources/sem3/softetbc305/index.html" },
      { name: "Software Project Management and Information Systems", path: "./resources/sem4/soft_pro_tbc403/index.html" },

      // Career & Soft Skills (7)
      { name: "Career Skills", path: "./resources/sem4/cs/index.html" },
      { name: "Career Skills - III", path: "./resources/sem5/cs/index.html" },
      { name: "Career Skills-I", path: "./resources/sem3/careerxbc301/index.html" },
      { name: "Health Education", path: "./resources/sem1/health_edu/health.html" },
      { name: "Principle of Management", path: "./resources/sem1/principle_of_management/index.html" },
      { name: "Professional Communication -1", path: "./resources/sem1/professional_communication-1/index.html" },
      { name: "Wellness and Stress Management", path: "./resources/sem1/wellness/index.html" },

      // Electronics & Systems (1)
      { name: "Microprocessor", path: "./resources/sem4/micro_tbc402/index.html" }
    ];

    this.searchInput = null;
    this.suggestionsContainer = null;
  }

  init() {
    this.searchInput = document.getElementById('search');
    this.suggestionsContainer = document.getElementById('suggestions');

    if (this.searchInput && this.suggestionsContainer) {
      this.setupSearchListener();
    }
  }

  setupSearchListener() {
    this.searchInput.addEventListener('input', () => {
      const query = this.searchInput.value.trim().toLowerCase();

      if (query === "") {
        this.suggestionsContainer.style.display = 'none';
      } else {
        const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(`\\b${escapedQuery}`, 'i');

        const suggestions = this.subjects
          .filter(subject => regex.test(subject.name))
          .sort((a, b) => {
            const aStartsWith = a.name.toLowerCase().startsWith(query);
            const bStartsWith = b.name.toLowerCase().startsWith(query);

            if (aStartsWith && !bStartsWith) {
              return -1;
            } else if (!aStartsWith && bStartsWith) {
              return 1;
            } else {
              return a.name.localeCompare(b.name);
            }
          });

        this.displaySuggestions(suggestions);
      }
    });
  }


  displaySuggestions(suggestions) {
    this.suggestionsContainer.innerHTML = ''; // Clear previous suggestions

    if (suggestions.length === 0 && this.searchInput.value.trim() !== "") {
      this.suggestionsContainer.innerText = "Not available"; // Show 'Not available' if no match
      this.suggestionsContainer.style.display = 'block'; // Make it visible
    } else if (suggestions.length > 0) {
      suggestions.forEach(subject => {
        const anchor = document.createElement('a');
        anchor.innerText = subject.name;
        anchor.href = subject.path; // Entire anchor is now clickable
        this.suggestionsContainer.appendChild(anchor);
      });
      this.suggestionsContainer.style.display = 'block'; // Show suggestions dropdown
    } else {
      this.suggestionsContainer.style.display = 'none'; // Hide the dropdown if no input or no match
    }
  }
}
