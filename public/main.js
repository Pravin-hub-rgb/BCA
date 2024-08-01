// Function to update commit info
document.addEventListener("DOMContentLoaded", function () {
  updateCommitInfo();
  setInterval(updateCommitInfo, 3600000); // Update every hour

  // Load the saved theme and semester
  const savedTheme = localStorage.getItem('theme') || 'dark';
  const themeSelect = document.getElementById('themeSelect');
  if (themeSelect) {
    themeSelect.value = savedTheme;
  }
  setTheme(savedTheme); // Apply the saved theme

  loadSemester();


  const linkElement = document.getElementById('highlightStylesheet');
  if (savedTheme == 'dark') {
    console.log("dark themee");
    if (linkElement) {
      linkElement.href = '//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/tomorrow-night-blue.min.css';
    }
  } else {
    console.log("light themee");
    if (linkElement) {
      linkElement.href = '//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/arduino-light.min.css';
    }
  }
});

// Function to update commit info
function updateCommitInfo() {
  var username = "Pravin-hub-rgb";
  var repo = "BCA";
  var perPage = 100; // Number of commits to fetch per page
  var currentPage = 1; // Current page number
  var commitCount = 0; // Initialize the commit count

  // Fetch all commits using pagination
  fetchCommits();

  function fetchCommits() {
    fetch(`https://api.github.com/repos/${username}/${repo}/commits?per_page=${perPage}&page=${currentPage}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        // Add the number of commits in the current page to the commit count
        commitCount += data.length;

        // If there are more pages, fetch the next page
        if (data.length === perPage) {
          currentPage++;
          fetchCommits();
        } else {
          // All commits have been fetched, update the HTML content
          const commitCountElement = document.getElementById("commit-count");
          if (commitCountElement) {
            commitCountElement.textContent = commitCount;
          }
        }
      })
      .catch(error => {
        console.error("Error fetching commits:", error);
      });
  }

  fetch(`https://api.github.com/repos/${username}/${repo}/commits`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      const latestCommitTime = new Date(data[0].commit.author.date);
      const currentTime = new Date();

      // Calculate the time difference in milliseconds
      const timeDiffMilliseconds = currentTime - latestCommitTime;

      // Calculate the time difference in hours and days
      const timeDiffHours = Math.floor(timeDiffMilliseconds / (1000 * 60 * 60));
      const timeDiffDays = Math.floor(timeDiffHours / 24);

      // Format the time difference based on hours and days
      let timeAgoText;
      if (timeDiffHours === 0) {
        timeAgoText = "just now";
      } else {
        const daysText = timeDiffDays === 1 ? "day" : "days";
        const hoursText = timeDiffHours % 24 === 1 ? "hour" : "hours";
        timeAgoText = timeDiffHours < 24
          ? `${timeDiffHours} ${hoursText} ago`
          : `${timeDiffDays} ${daysText} and ${timeDiffHours % 24} ${hoursText} ago`;
      }

      // Update the HTML content
      const timeAgoElement = document.getElementById("time-ago");
      if (timeAgoElement) {
        timeAgoElement.textContent = timeAgoText;
      }
    })
    .catch(error => {
      console.error("Error fetching latest commit:", error);
    });
}

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
    if (savedSemester) {
      semesterElement.value = savedSemester;
      showSemester(savedSemester);
    } else {
      // Set to default semester if no value is saved
      semesterElement.value = "1";
      showSemester("1");
    }
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
  const linkElement = document.getElementById('highlightStylesheet');

  // Update the theme in localStorage
  localStorage.setItem('theme', theme);

  if (theme === 'dark') {
    document.body.classList.add('dark-mode');
    if (linkElement) {
      console.log("hiiii");
      linkElement.href = '//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/tomorrow-night-blue.min.css';
    }
  } else {
    document.body.classList.remove('dark-mode');
    if (linkElement) {
      linkElement.href = '//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/arduino-light.min.css';
    }
  }
}

// Event listener for semester change
const semesterElement = document.getElementById("semester");
if (semesterElement) {
  semesterElement.addEventListener('change', saveSemester);
}

// Event listener for theme change
const themeSelect = document.getElementById('themeSelect');
if (themeSelect) {
  themeSelect.addEventListener('change', (event) => {
    setTheme(event.target.value);
  });
}
