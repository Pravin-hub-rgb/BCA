document.addEventListener("DOMContentLoaded", function () {
  updateCommitInfo();
  setInterval(updateCommitInfo, 3600000); // Update every hour
});
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
                  document.getElementById("commit-count").textContent = commitCount;
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
          var latestCommitTime = new Date(data[0].commit.author.date);
          var currentTime = new Date();

          // Calculate the time difference in milliseconds
          var timeDiffMilliseconds = currentTime - latestCommitTime;

          // Calculate the time difference in hours and days
          var timeDiffHours = Math.floor(timeDiffMilliseconds / (1000 * 60 * 60));
          var timeDiffDays = Math.floor(timeDiffHours / 24);

          // Format the time difference based on hours and days
          var timeAgoText;
          if (timeDiffHours === 0) {
              timeAgoText = "just now";
          } else {
              var daysText = timeDiffDays === 1 ? "day" : "days";
              var hoursText = timeDiffHours % 24 === 1 ? "hour" : "hours";
              timeAgoText = timeDiffHours < 24 
                  ? `${timeDiffHours} ${hoursText} ago` 
                  : `${timeDiffDays} ${daysText} and ${timeDiffHours % 24} ${hoursText} ago`;
          }

          // Update the HTML content
          document.getElementById("time-ago").textContent = timeAgoText;
      })
      .catch(error => {
          console.error("Error fetching latest commit:", error);
      });
}

// ________________________________________________________________________________________
function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
  allLi = document.querySelectorAll('.link')
  allLi.forEach(li => {
    li.style.display = "block";
  })
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
  allLi = document.querySelectorAll('.link')
  allLi.forEach(li => {
    li.style.display = "none";
  })
}

//  ***************************** Accordion *********************

var acc = document.getElementsByClassName("ac");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// ********* adding dots *********
let codes = document.querySelectorAll('.dotc');
codes.forEach(box => {
  box.innerHTML += '<div class="dots"><div class="f"></div><div class="s"></div><div class="t"></div></div>'
});

// ********** HIGHLIGHT JS ***********
hljs.highlightAll();

// ************ Removing space in preTag *************
const allPre = document.querySelectorAll('pre');
allPre.forEach((tag) => {
  tag.firstChild.textContent = "";
  tag.lastChild.textContent = "";
})