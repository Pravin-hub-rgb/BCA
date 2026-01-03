// SubjectManager.js - Manages subject display, categories, and pinning functionality

export class SubjectManager {
  constructor() {
    this.subjects = this.getAllSubjects();
    this.pinnedSubjects = this.loadPinnedSubjects();
    this.searchTerm = '';
  }

  init() {
    this.renderSubjects();
    this.setupEventListeners();
  }

  getAllSubjects() {
    return [
      // Programming Languages (7)
      { name: "Advance Concepts of 'C' Programming", url: "./resources/sem2/advance_C/index.html", category: "Programming Languages" },
      { name: "Android Programming", url: "./resources/sem5/ap/index.html", category: "Programming Languages" },
      { name: "Data Analytics Using Python", url: "./resources/sem4/python_tbc401/index.html", category: "Programming Languages" },
      { name: "Java Programming", url: "./resources/sem3/javatbc303/index.html", category: "Programming Languages" },
      { name: "Object Oriented Programming Using C++", url: "./resources/sem2/OOPS_using_C++/index.html", category: "Programming Languages" },
      { name: "Programming Concepts Using C Language", url: "./resources/sem1/programming concepts using C language/index.html", category: "Programming Languages" },
      { name: "Programming with .Net", url: "./resources/sem5/net/index.html", category: "Programming Languages" },

      // Labs (12)
      { name: "Android Programming Lab", url: "./resources/sem5/aplab/index.html", category: "Labs" },
      { name: "C# .Net Lab", url: "./resources/sem5/netlab/index.html", category: "Labs" },
      { name: "CBNST lab", url: "./resources/sem4/cbnstlab/index.html", category: "Labs" },
      { name: "Computer Graphics Lab", url: "./resources/sem6/cglab/index.html", category: "Labs" },
      { name: "Data Structures Lab", url: "./resources/sem2/datastructure_lab/index.html", category: "Labs" },
      { name: "DBMS Lab", url: "./resources/sem3/dbmslab/index.html", category: "Labs" },
      { name: "Java Lab", url: "./resources/sem3/javalab/index.html", category: "Labs" },
      { name: "Machine Learning Lab", url: "./resources/sem6/mllab/index.html", category: "Labs" },
      { name: "PC Packages Lab", url: "./resources/sem1/PC packages lab/index.html", category: "Labs" },
      { name: "Programming Concept Using 'C' lab", url: "./resources/sem1/Programming in 'C' lab/index.html", category: "Labs" },
      { name: "Python lab", url: "./resources/sem4/pythonlab/index.html", category: "Labs" },
      { name: "Web Technologies lab", url: "./resources/sem4/weblab/index.html", category: "Labs" },

      // Core Computer Science (6)
      { name: "Computer Fundamentals and Information Technology", url: "./resources/sem1/Computer Fundamentals and Information Technology/index.html", category: "Core Computer Science" },
      { name: "Computer Graphics", url: "./resources/sem6/cg/index.html", category: "Core Computer Science" },
      { name: "Computer Organization and Architecture", url: "./resources/sem3/coatbc304/index.html", category: "Core Computer Science" },
      { name: "Data Structures and File Organization", url: "./resources/sem2/datastructure_and_FO/index.html", category: "Core Computer Science" },
      { name: "Digital Electronics", url: "./resources/sem2/digital_electronics/index.html", category: "Electronics & Systems" },
      { name: "Operating System", url: "./resources/sem2/operating_sys/index.html", category: "Core Computer Science" },

      // Data & Databases (2)
      { name: "Data Warehouse and Data Mining", url: "./resources/sem6/dw_dm/index.html", category: "Data & Databases" },
      { name: "Database Management System", url: "./resources/sem3/dbmstbc302/index.html", category: "Data & Databases" },

      // Web & Networking (3)
      { name: "Data Communication and Computer Networks", url: "./resources/sem3/datatbc301/index.html", category: "Web & Networking" },
      { name: "Network Security and Cyber Law", url: "./resources/sem6/ns_cl/index.html", category: "Web & Networking" },
      { name: "Web Technologies", url: "./resources/sem4/web_tbc404/index.html", category: "Web & Networking" },

      // Mathematics (4)
      { name: "Computer Based Numerical & Statistical Techniques", url: "./resources/sem4/comp_num_tbc405/index.html", category: "Mathematics" },
      { name: "Discrete mathematical Structures and Graph Theory", url: "./resources/sem2/maths/index.html", category: "Mathematics" },
      { name: "Mathematical Foundation of Computer Science", url: "./resources/sem1/Mathematical Foundation of Compuer Science/index.html", category: "Mathematics" },
      { name: "Optimization Techniques", url: "./resources/sem5/ot/index.html", category: "Mathematics" },

      // Software Engineering & AI (5)
      { name: "Cryptography", url: "./resources/sem5/crypto/index.html", category: "Software Engineering & AI" },
      { name: "Fundamentals of Machine Learning", url: "./resources/sem6/fml/index.html", category: "Software Engineering & AI" },
      { name: "Soft Computing", url: "./resources/sem5/sc/index.html", category: "Software Engineering & AI" },
      { name: "Software Engineering", url: "./resources/sem3/softetbc305/index.html", category: "Software Engineering & AI" },
      { name: "Software Project Management and Information Systems", url: "./resources/sem4/soft_pro_tbc403/index.html", category: "Software Engineering & AI" },

      // Career & Soft Skills (7)
      { name: "Career Skills", url: "./resources/sem4/cs/index.html", category: "Career & Soft Skills" },
      { name: "Career Skills - III", url: "./resources/sem5/cs/index.html", category: "Career & Soft Skills" },
      { name: "Career Skills-I", url: "./resources/sem3/careerxbc301/index.html", category: "Career & Soft Skills" },
      { name: "Health Education", url: "./resources/sem1/health_edu/health.html", category: "Career & Soft Skills" },
      { name: "Principle of Management", url: "./resources/sem1/principle_of_management/index.html", category: "Career & Soft Skills" },
      { name: "Professional Communication -1", url: "./resources/sem1/professional_communication-1/index.html", category: "Career & Soft Skills" },
      { name: "Wellness and Stress Management", url: "./resources/sem2/wellness/index.html", category: "Career & Soft Skills" },

      // Electronics & Systems (1)
      { name: "Microprocessor", url: "./resources/sem4/micro_tbc402/index.html", category: "Electronics & Systems" }
    ];
  }

  loadPinnedSubjects() {
    const pinned = localStorage.getItem('pinnedSubjects');
    return pinned ? JSON.parse(pinned) : [];
  }

  savePinnedSubjects() {
    localStorage.setItem('pinnedSubjects', JSON.stringify(this.pinnedSubjects));
  }

  isPinned(subjectName) {
    return this.pinnedSubjects.includes(subjectName);
  }

  togglePin(subjectName) {
    if (this.isPinned(subjectName)) {
      this.pinnedSubjects = this.pinnedSubjects.filter(name => name !== subjectName);
    } else {
      this.pinnedSubjects.push(subjectName);
    }
    this.savePinnedSubjects();
    this.renderSubjects();
  }

  getFilteredSubjects() {
    let filtered = this.subjects;

    // Filter by search term
    if (this.searchTerm) {
      filtered = filtered.filter(subject =>
        subject.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    // Separate pinned and unpinned
    const pinned = filtered.filter(subject => this.isPinned(subject.name));
    const unpinned = filtered.filter(subject => !this.isPinned(subject.name));

    return { pinned, unpinned };
  }

  getCategories() {
    const categories = [...new Set(this.subjects.map(subject => subject.category))];

    // Prioritize Programming Languages first, Career & Soft Skills last
    return categories.sort((a, b) => {
      if (a === 'Programming Languages') return -1;
      if (b === 'Programming Languages') return 1;
      if (a === 'Career & Soft Skills') return 1;
      if (b === 'Career & Soft Skills') return -1;
      return a.localeCompare(b);
    });
  }

  renderSubjects() {
    const { pinned, unpinned } = this.getFilteredSubjects();
    const notesContainer = document.getElementById('notes');

    if (!notesContainer) return;

    notesContainer.innerHTML = '';

    // Render pinned section if there are pinned subjects
    if (pinned.length > 0) {
      const pinnedSection = this.createCategorySection('Pinned', pinned, false);
      notesContainer.appendChild(pinnedSection);
    }

    // Render category sections - maintain original subject order within categories
    const categories = this.getCategories();
    categories.forEach(category => {
      // Get all subjects for this category in their original order
      const allCategorySubjects = this.subjects.filter(subject =>
        subject.category === category &&
        (unpinned.some(u => u.name === subject.name) || pinned.some(p => p.name === subject.name))
      );

      if (allCategorySubjects.length > 0) {
        const categorySection = this.createCategorySection(category, allCategorySubjects, true);
        notesContainer.appendChild(categorySection);
      }
    });
  }

  createCategorySection(categoryName, subjects, isCategorySection = false) {
    const section = document.createElement('div');
    section.className = 'category-section';

    const header = document.createElement('h2');
    header.className = 'category-header';
    header.textContent = categoryName;
    section.appendChild(header);

    const grid = document.createElement('div');
    grid.className = 'subject-grid';

    subjects.forEach(subject => {
      const card = this.createSubjectCard(subject, isCategorySection);
      grid.appendChild(card);
    });

    section.appendChild(grid);
    return section;
  }

  createSubjectCard(subject, isCategorySection = false) {
    const card = document.createElement('div');
    let cardClass = 'subject-card';

    // Add highlighting class for pinned subjects in category sections
    if (isCategorySection && this.isPinned(subject.name)) {
      cardClass += ' pinned-highlight';
    }

    card.className = cardClass;

    const heartIcon = document.createElement('div');
    heartIcon.className = `heart-icon ${this.isPinned(subject.name) ? 'pinned' : ''}`;
    heartIcon.innerHTML = '♥';
    heartIcon.onclick = (e) => {
      e.stopPropagation();
      this.togglePin(subject.name);
    };

    const subjectName = document.createElement('div');
    subjectName.className = 'subject-name';
    subjectName.textContent = subject.name;

    card.appendChild(heartIcon);
    card.appendChild(subjectName);

    card.onclick = () => {
      window.location.href = subject.url;
    };

    return card;
  }

  setupEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('search');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchTerm = e.target.value;
        this.renderSubjects();
      });
    }
  }
}
