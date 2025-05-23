let commitDataCache = null;
let lastFetchTime = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

document.addEventListener("DOMContentLoaded", function () {
  // Update commit info
  // updateCommitInfo();
  setTimeout(updateCommitInfo, 1000);
  setInterval(updateCommitInfo, 3600000); // Update every hour

  // Load and apply the saved theme
  loadTheme();

  // Load and apply the saved semester
  loadSemester();

  // Add event listeners for theme selection
  const themeSelectMobile = document.getElementById('themeSelectMobile');
  const themeSelectDesktop = document.getElementById('themeSelectDesktop');

  if (themeSelectMobile) {
    themeSelectMobile.addEventListener('change', (event) => {
      setTheme(event.target.value);
    });
  }

  if (themeSelectDesktop) {
    themeSelectDesktop.addEventListener('change', (event) => {
      setTheme(event.target.value);
    });
  }

  // Add event listener for semester change
  const semesterElement = document.getElementById("semester");
  if (semesterElement) {
    semesterElement.addEventListener('change', saveSemester);
  }

  // COPY BUTTON 
  // Function to create and insert copy buttons
  function addCopyButtons() {
    // Select all relevant pre/code elements
    const codeBlocks = document.querySelectorAll('.panel pre code, .code > pre code, .npanel pre code');

    codeBlocks.forEach(codeBlock => {
      // Create the copy button
      const copyButton = document.createElement('button');
      copyButton.className = 'copy-btn'; // Add class for styling
      copyButton.textContent = 'Copy Code'; // Set button text
      copyButton.onclick = function () {
        copyCode(copyButton, codeBlock); // Pass button and code block
      };

      // Get the parent <pre> element
      const preElement = codeBlock.parentElement; // This is the <pre> tag

      // Set the button position
      preElement.style.position = 'relative'; // Ensure positioning context

      // Insert the button into the parent <pre> element
      preElement.appendChild(copyButton);
    });
  }

  function copyCode(button, codeBlock) {
    // Create a temporary textarea element to hold the code for copying
    const textarea = document.createElement('textarea');
    textarea.value = codeBlock.innerText; // Get the text inside <code>
    document.body.appendChild(textarea);
    textarea.select(); // Select the text
    document.execCommand('copy'); // Copy the text to clipboard
    document.body.removeChild(textarea); // Remove the textarea

    // Change the button text to "Copied"
    button.textContent = 'Copied';

    // Change the button text back to "Copy Code" after 2 seconds
    setTimeout(() => {
      button.textContent = 'Copy Code';
    }, 2000);
  }

  // Add buttons after DOM content is loaded
  addCopyButtons();

  // Hinglish wala code
  // Select all mixed-notes sections
  const mixedNotesSections = document.querySelectorAll(".mixed-notes");

  mixedNotesSections.forEach(function (section) {
    // Create the toggle button
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Switch to Hinglish";
    toggleButton.classList.add("toggle-notes");

    // Append the button to the section
    section.appendChild(toggleButton);

    // Add event listener for toggling notes
    toggleButton.addEventListener("click", function () {
      const englishNotes = section.querySelector(".english");
      const hinglishNotes = section.querySelector(".hinglish");

      // Toggle visibility
      if (englishNotes.style.display === "none") {
        englishNotes.style.display = "block";
        hinglishNotes.style.display = "none";
        toggleButton.textContent = "Switch to Hinglish";
      } else {
        englishNotes.style.display = "none";
        hinglishNotes.style.display = "block";
        toggleButton.textContent = "Switch to English";
      }
    });
  });


  // Get all links that have hash/anchor tags in the sidebar
  const navLinks = document.querySelectorAll('.sidepanel .link[href^="#"]');

  // Add click event listener to each link
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default anchor behavior

      // Close the sidebar after clicking (assuming this is mobile view)
      if (window.innerWidth <= 768) { // Adjust breakpoint as needed
        closeNav(); // Use your existing sidebar close function
      }

      // Get the target element
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        // Get navbar height
        const navbarHeight = document.getElementById('navbar').offsetHeight;

        // Calculate the final scroll position
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = targetPosition - navbarHeight - 20; // 20px extra space

        // Smooth scroll to that position
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});

// Select all compact and extended notes sections
const compactExtendedSections = document.querySelectorAll(".compact-extended");

compactExtendedSections.forEach(function (section) {
  // Create the toggle button
  const toggleButton = document.createElement("button");
  toggleButton.textContent = "Compact"; // Initial text for Compact mode
  toggleButton.classList.add("toggle-len-notes");

  // Append the button to the section
  section.appendChild(toggleButton);

  // Add event listener for toggling notes
  toggleButton.addEventListener("click", function () {
    const compactNotes = section.querySelector(".compact");
    const extendedNotes = section.querySelector(".extended");

    // Toggle visibility
    if (compactNotes.style.display === "none") {
      compactNotes.style.display = "block";
      extendedNotes.style.display = "none";
      toggleButton.textContent = "Compact"; // Change button text to Compact
    } else {
      compactNotes.style.display = "none";
      extendedNotes.style.display = "block";
      toggleButton.textContent = "Extended"; // Change button text to Extended
    }
  });
});



// Function to save the selected semester to localStorage
function saveSemester() {
  const semesterElement = document.getElementById("semester");
  if (semesterElement) {
    const semester = semesterElement.value;
    localStorage.setItem("selectedSemester", semester);
    showSemester(semester);
  }
}

// Function to load the saved semester from localStorage
function loadSemester() {
  const savedSemester = localStorage.getItem("selectedSemester");
  const semesterElement = document.getElementById("semester");
  if (semesterElement) {
    const semesterToLoad = savedSemester || "1"; // Default to "1" if no saved semester
    semesterElement.value = semesterToLoad;
    showSemester(semesterToLoad);
  }
}

// Function to display the selected semester's content
function showSemester(semester) {
  const semDivs = document.querySelectorAll(".sem");
  semDivs.forEach(div => {
    if (div.getAttribute("data-semester") === semester) {
      div.classList.add("activesem");
    } else {
      div.classList.remove("activesem");
    }
  });
}

// Function to set the theme
function setTheme(theme) {
  // Update the theme in localStorage
  localStorage.setItem('theme', theme);

  // Apply or remove the dark-mode class based on the selected theme
  if (theme === 'dark') {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }

  // Update Highlight.js stylesheet based on the current theme
  const linkElement = document.getElementById('highlightStylesheet');
  if (linkElement) {
    linkElement.href = theme === 'dark'
      ? '//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/tomorrow-night-blue.min.css'
      : '//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/arduino-light.min.css';
  }

  // Update the theme select values
  const themeSelectMobile = document.getElementById('themeSelectMobile');
  const themeSelectDesktop = document.getElementById('themeSelectDesktop');

  if (themeSelectMobile) {
    themeSelectMobile.value = theme;
  }
  if (themeSelectDesktop) {
    themeSelectDesktop.value = theme;
  }
}

// Function to load the saved theme from localStorage
function loadTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light'; // Default to 'light' if no saved theme
  setTheme(savedTheme); // Apply the saved or default theme
}

// Debug version with detailed logging
function updateCommitInfo() {
  console.log('🔍 Starting commit info update...');
  console.log('Current URL:', window.location.href);
  console.log('Current origin:', window.location.origin);
  console.log('Current pathname:', window.location.pathname);
  
  // Determine the correct base path
  let basePath = '';
  if (window.location.pathname.includes('/BCA/')) {
    basePath = '/BCA';
  }
  
  const dataPath = `${basePath}/git-data`;
  console.log('Using data path:', dataPath);
  
  // Add timestamp to prevent caching
  const timestamp = new Date().getTime();
  
  // Test URLs
  const urls = {
    commits: `${dataPath}/recent-commits.json?t=${timestamp}`,
    count: `${dataPath}/total-commits.txt?t=${timestamp}`,
    timestamp: `${dataPath}/last-updated.txt?t=${timestamp}`
  };
  
  console.log('URLs to fetch:', urls);
  
  // Set loading states
  setLoadingStates();
  
  // Test each URL individually with detailed logging
  testAndFetchCommits(urls.commits);
  testAndFetchCount(urls.count);
  testAndFetchTimestamp(urls.timestamp);
}

async function testAndFetchCommits(url) {
  console.log('🔍 Testing commits URL:', url);
  try {
    const response = await fetch(url, {
      headers: {
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
      }
    });
    
    console.log('Commits response status:', response.status);
    console.log('Commits response headers:', [...response.headers.entries()]);
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const text = await response.text();
    console.log('Commits raw response (first 200 chars):', text.substring(0, 200));
    
    // Try to parse as JSON
    const data = JSON.parse(text);
    console.log('Commits parsed successfully:', data.length, 'commits');
    
    updateCommitMessages(data);
    
  } catch (error) {
    console.error('❌ Commits fetch error:', error);
    handleCommitMessagesError();
  }
}

async function testAndFetchCount(url) {
  console.log('🔍 Testing count URL:', url);
  try {
    const response = await fetch(url, {
      headers: {
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
      }
    });
    
    console.log('Count response status:', response.status);
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const text = await response.text();
    console.log('Count raw response:', `"${text}"`);
    
    const count = parseInt(text.trim());
    console.log('Count parsed:', count);
    
    if (!isNaN(count) && count > 0) {
      document.getElementById("terminal-commit-count").textContent = count.toLocaleString();
      console.log('✅ Count updated successfully');
    } else {
      throw new Error(`Invalid count: "${text}"`);
    }
    
  } catch (error) {
    console.error('❌ Count fetch error:', error);
    document.getElementById("terminal-commit-count").textContent = "Error";
  }
}

async function testAndFetchTimestamp(url) {
  console.log('🔍 Testing timestamp URL:', url);
  try {
    const response = await fetch(url, {
      headers: {
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
      }
    });
    
    console.log('Timestamp response status:', response.status);
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const text = await response.text();
    console.log('Timestamp raw response:', `"${text}"`);
    
    const date = new Date(text.trim());
    console.log('Timestamp parsed:', date);
    
    if (!isNaN(date.getTime())) {
      const timeAgo = formatTimeAgo(new Date() - date);
      document.getElementById("terminal-time-ago").textContent = timeAgo;
      console.log('✅ Timestamp updated successfully:', timeAgo);
    } else {
      throw new Error(`Invalid timestamp: "${text}"`);
    }
    
  } catch (error) {
    console.error('❌ Timestamp fetch error:', error);
    document.getElementById("terminal-time-ago").textContent = "Error";
  }
}

// Set loading states
function setLoadingStates() {
  const commitCount = document.getElementById("terminal-commit-count");
  const timeAgo = document.getElementById("terminal-time-ago");
  const commitMessages = document.getElementById("commit-messages");
  
  if (commitCount) commitCount.textContent = "Loading...";
  if (timeAgo) timeAgo.textContent = "Calculating...";
  if (commitMessages) commitMessages.textContent = "Loading recent commits...";
}

// Handle commit messages error
function handleCommitMessagesError() {
  const commitMessagesElement = document.getElementById("commit-messages");
  if (commitMessagesElement) {
    commitMessagesElement.innerHTML = `
      <div style="color: #ff6b6b; font-style: italic;">
        ⚠ Unable to load recent commits. 
        <button onclick="updateCommitInfo()" style="background: none; border: 1px solid #ff6b6b; color: #ff6b6b; padding: 2px 8px; margin-left: 8px; cursor: pointer; border-radius: 3px;">
          Retry
        </button>
      </div>
    `;
  }
}

function updateCommitMessages(commits) {
  const commitMessagesElement = document.getElementById("commit-messages");
  if (!commitMessagesElement) {
    console.error('❌ commit-messages element not found');
    return;
  }
  
  if (!Array.isArray(commits) || commits.length === 0) {
    commitMessagesElement.innerHTML = '<div style="color: #888; font-style: italic;">No recent commits found</div>';
    return;
  }
  
  commitMessagesElement.innerHTML = '';
  
  commits.forEach((commit, index) => {
    try {
      const commitDiv = document.createElement("div");
      commitDiv.className = "commit-entry";
      
      const hash = (commit.sha || '').substring(0, 7) || 'unknown';
      const message = commit.commit?.message || 'No message';
      const authorDate = commit.commit?.author?.date || commit.commit?.committer?.date;
      
      let dateString = 'Unknown date';
      if (authorDate) {
        try {
          const date = new Date(authorDate);
          if (!isNaN(date.getTime())) {
            dateString = date.toLocaleString();
          }
        } catch (e) {
          console.warn('Invalid date format:', authorDate);
        }
      }
      
      const truncatedMessage = message.length > 80 ? 
        message.substring(0, 77) + '...' : message;
      
      commitDiv.innerHTML = `
        <span class="commit-hash" title="${hash}">${hash}</span>
        <span class="commit-date" title="${dateString}">${dateString}</span>
        <span class="commit-message" title="${message}">${truncatedMessage}</span>
      `;
      
      commitMessagesElement.appendChild(commitDiv);
    } catch (error) {
      console.error(`Error processing commit ${index}:`, error);
    }
  });
}

function formatTimeAgo(timeDiffMs) {
  try {
    if (isNaN(timeDiffMs) || timeDiffMs < 0) {
      return "unknown";
    }
    
    const timeDiffSeconds = Math.floor(timeDiffMs / 1000);
    
    if (timeDiffSeconds < 60) {
      return "just now";
    }
    
    const timeDiffMinutes = Math.floor(timeDiffSeconds / 60);
    const timeDiffHours = Math.floor(timeDiffMinutes / 60);
    const timeDiffDays = Math.floor(timeDiffHours / 24);

    const years = Math.floor(timeDiffDays / 365);
    const remainingDaysAfterYears = timeDiffDays % 365;
    const months = Math.floor(remainingDaysAfterYears / 30);
    const remainingDaysAfterMonths = remainingDaysAfterYears % 30;
    const weeks = Math.floor(remainingDaysAfterMonths / 7);
    const remainingDays = remainingDaysAfterMonths % 7;
    const remainingHours = timeDiffHours % 24;
    const remainingMinutes = timeDiffMinutes % 60;

    let parts = [];

    if (years > 0) parts.push(`${years} ${years === 1 ? "year" : "years"}`);
    if (months > 0) parts.push(`${months} ${months === 1 ? "month" : "months"}`);
    if (weeks > 0) parts.push(`${weeks} ${weeks === 1 ? "week" : "weeks"}`);
    if (remainingDays > 0) parts.push(`${remainingDays} ${remainingDays === 1 ? "day" : "days"}`);
    if (remainingHours > 0 && years === 0 && months === 0 && weeks === 0) 
      parts.push(`${remainingHours} ${remainingHours === 1 ? "hour" : "hours"}`);
    if (remainingMinutes > 0 && years === 0 && months === 0 && weeks === 0 && remainingDays === 0 && remainingHours === 0) 
      parts.push(`${remainingMinutes} ${remainingMinutes === 1 ? "minute" : "minutes"}`);

    return parts.length > 0 ? parts.join(", ") + " ago" : "just now";
  } catch (error) {
    console.error('Error in formatTimeAgo:', error);
    return "unknown";
  }
}

// Auto-refresh every 10 minutes
setInterval(() => {
  console.log('Auto-refreshing commit data...');
  updateCommitInfo();
}, 10 * 60 * 1000);


// Function to open the side panel
function openNav() {
  const sidePanel = document.getElementById("mySidepanel");
  if (sidePanel) {
    sidePanel.style.width = "250px";
    const allLi = document.querySelectorAll('.link');
    allLi.forEach(li => {
      li.style.display = "block";
    });
  }
}

// Function to close the side panel
function closeNav() {
  const sidePanel = document.getElementById("mySidepanel");
  if (sidePanel) {
    sidePanel.style.width = "0";
    const allLi = document.querySelectorAll('.link');
    allLi.forEach(li => {
      li.style.display = "none";
    });
  }
}

// Accordion functionality
const acc = document.getElementsByClassName("ac");
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// Adding dots to elements with class 'dotc'
const codes = document.querySelectorAll('.dotc');
codes.forEach(box => {
  box.innerHTML += '<div class="dots"><div class="f"></div><div class="s"></div><div class="t"></div></div>';
});

// Highlight.js for syntax highlighting
if (typeof hljs !== 'undefined') {
  hljs.highlightAll();
}

// Removing space in pre tags
const allPre = document.querySelectorAll('pre');
allPre.forEach((tag) => {
  if (tag.firstChild) tag.firstChild.textContent = "";
  if (tag.lastChild) tag.lastChild.textContent = "";
});


// ****************** Searching Functionality ******************
const subjects = [
  { name: "C Programming", path: "./resources/sem1/programming concepts using C language/index.html" },
  { name: "Programming Concepts Using C Language", path: "./resources/sem1/programming concepts using C language/index.html" },
  { name: "C Programming Lab", path: "./resources/sem1/Programming in 'C' lab/index.html" },
  { name: "Programming Concept Using 'C' lab", path: "./resources/sem1/Programming in 'C' lab/index.html" },
  { name: "PC Packages Lab", path: "./resources/sem1/PC packages lab/index.html" },
  { name: "Computer Fundamentals and Information Technology", path: "./resources/sem1/Computer Fundamentals and Information Technology/index.html" },
  { name: "Mathematical Foundation of Computer Science", path: "./resources/sem1/Mathematical Foundation of Computer Science/index.html" },
  { name: "Professional Communication -1", path: "./resources/sem1/professional_communication-1/index.html" },
  { name: "Health Education", path: "./resources/sem1/health_edu/health.html" },
  { name: "Principle of Management", path: "./resources/sem1/principle_of_management/index.html" },
  { name: "Data Structures and File Organization", path: "./resources/sem2/datastructure_and_FO/index.html" },
  { name: "Data Structures lab", path: "./resources/sem2/datastructure_lab/index.html" },
  { name: "Advance Concepts of 'C' Programming", path: "./resources/sem2/advance_C/index.html" },
  { name: "C++", path: "./resources/sem2/OOPS_using_C++/index.html" },
  // { name: "Object Oriented Programming Using C++", path: "./resources/sem2/OOPS_using_C++/index.html" },
  { name: "Operating System", path: "./resources/sem2/operating_sys/index.html" },
  { name: "Digital Electronics", path: "./resources/sem2/digital_electronics/index.html" },
  { name: "Discrete Mathematical Structures and Graph Theory", path: "./resources/sem2/maths/index.html" },
  { name: "Wellness and Stress Management", path: "./resources/sem2/wellness/index.html" },
  { name: "Data Communication and Computer Networks", path: "./resources/sem3/datatbc301/index.html" },
  { name: "Database Management System", path: "./resources/sem3/dbmstbc302/index.html" },
  { name: "DBMS Lab", path: "./resources/sem3/dbmslab/index.html" },
  { name: "Java Programming", path: "./resources/sem3/javatbc303/index.html" },
  { name: "Java lab", path: "./resources/sem3/javalab/index.html" },
  { name: "Computer Organization and Architecture", path: "./resources/sem3/coatbc304/index.html" },
  { name: "Software Engineering", path: "./resources/sem3/softetbc305/index.html" },
  { name: "Career Skills-I", path: "./resources/sem3/careerxbc301/index.html" },
  { name: "Data Analytics Using Python", path: "./resources/sem4/python_tbc401/index.html" },
  { name: "Microprocessor", path: "./resources/sem4/micro_tbc402/index.html" },
  { name: "Software Project Management and Information Systems", path: "./resources/sem4/soft_pro_tbc403/index.html" },
  { name: "Web Technologies", path: "./resources/sem4/web_tbc404/index.html" },
  { name: "Computer Based Numerical & Statistical Techniques", path: "./resources/sem4/comp_num_tbc405/index.html" },
  { name: "Career Skills", path: "./resources/sem4/cs/index.html" },
  { name: "CBNST Lab", path: "./resources/sem4/cbnstlab/index.html" },
  { name: "Python lab", path: "./resources/sem4/pythonlab/index.html" },
  { name: "Web Technologies lab", path: "./resources/sem4/weblab/index.html" },
  { name: "Android Programming", path: "./resources/sem5/ap/index.html" },
  { name: "Android Programming Lab", path: "./resources/sem5/aplab/index.html" },
  { name: "Cryptography", path: "./resources/sem5/crypto/index.html" },
  { name: "Optimization Techniques", path: "./resources/sem5/ot/index.html" },
  { name: "Programming with .Net", path: "./resources/sem5/net/index.html" },
  { name: "C# .Net Lab", path: "./resources/sem5/netlab/index.html" },
  { name: "Soft Computing", path: "./resources/sem5/sc/index.html" },
  { name: "Career Skills - III", path: "./resources/sem5/cs/index.html" }
];

const searchInput = document.getElementById('search');
const suggestionsContainer = document.getElementById('suggestions');

searchInput.addEventListener('input', function () {
  const query = this.value.trim().toLowerCase();

  if (query === "") {
    suggestionsContainer.style.display = 'none'; // Hide suggestions if input is empty
  } else {
    const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`\\b${escapedQuery}`, 'i');

    // Filter subjects based on the search query
    const suggestions = subjects
      .filter(subject => regex.test(subject.name))
      .sort((a, b) => {
        // Prioritize subjects that start with the query
        const aStartsWith = a.name.toLowerCase().startsWith(query);
        const bStartsWith = b.name.toLowerCase().startsWith(query);

        if (aStartsWith && !bStartsWith) {
          return -1;
        } else if (!aStartsWith && bStartsWith) {
          return 1;
        } else {
          return a.name.localeCompare(b.name); // Otherwise sort alphabetically
        }
      });

    displaySuggestions(suggestions);
  }
});

function displaySuggestions(suggestions) {
  suggestionsContainer.innerHTML = ''; // Clear previous suggestions

  if (suggestions.length === 0 && searchInput.value.trim() !== "") {
    suggestionsContainer.innerText = "Not available"; // Show 'Not available' if no match
    suggestionsContainer.style.display = 'block'; // Make it visible
  } else if (suggestions.length > 0) {
    suggestions.forEach(subject => {
      const anchor = document.createElement('a');
      anchor.innerText = subject.name;
      anchor.href = subject.path; // Entire anchor is now clickable
      suggestionsContainer.appendChild(anchor);
    });
    suggestionsContainer.style.display = 'block'; // Show suggestions dropdown
  } else {
    suggestionsContainer.style.display = 'none'; // Hide the dropdown if no input or no match
  }
}


// Hinglish to English

// document.addEventListener("DOMContentLoaded", function () {
//   // Select all mixed-notes sections
//   const mixedNotesSections = document.querySelectorAll(".mixed-notes");

//   mixedNotesSections.forEach(function (section) {
//       // Create the toggle button
//       const toggleButton = document.createElement("button");
//       toggleButton.textContent = "Switch to Hinglish";
//       toggleButton.classList.add("toggle-notes");

//       // Append the button to the section
//       section.appendChild(toggleButton);

//       // Add event listener for toggling notes
//       toggleButton.addEventListener("click", function () {
//           const englishNotes = section.querySelector(".english");
//           const hinglishNotes = section.querySelector(".hinglish");

//           // Toggle visibility
//           if (englishNotes.style.display === "none") {
//               englishNotes.style.display = "block";
//               hinglishNotes.style.display = "none";
//               toggleButton.textContent = "Switch to Hinglish";
//           } else {
//               englishNotes.style.display = "none";
//               hinglishNotes.style.display = "block";
//               toggleButton.textContent = "Switch to English";
//           }
//       });
//   });
// });
