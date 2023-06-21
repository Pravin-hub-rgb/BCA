// ************************** Luck line *****************

const funnyLuckLines = {
  line1: "May the force of knowledge be with you! 😂😂",
  line2: "Break a pencil! Just not literally... exams can be stressful, you know. 😆😆",
  line3: "Remember, you're so smart that Einstein would ask you for help! 🧠🤣🤣",
  line4: "Aced it in your dreams last night, right? Now go make it a reality! 💪😂😂",
  line5: "Knock those exam questions out of the park like a boss! 🎯😂😂",
  line6: "You've got this! Show that exam who's the real boss around here! 😎😂😂",
  line7: "May the examiners be blinded by the brilliance of your answers! ✨🤣🤣",
  line8: "Go rock that exam like it's a sold-out concert! 🎸😂😂",
  line9: "Sending you a truckload of good vibes and a crate of brainpower! 🚚🧠😂😂",
  line10: "Remember, exams are just a tiny hurdle on the road to world domination! 🌍😂😂",
  line11: "May the exam questions be as easy as operating a microwave! 🍿😂😂",
  line12: "If anyone can turn an exam into a piece of cake, it's definitely you! 🍰😂😂",
  line13: "Remember, exams are like mosquitoes: annoying, but you have the power to swat them away! 🦟💪😂😂",
  line14: "You're about to show that exam who's the real smarty-pants around here! 🤓😂😂",
  line15: "Time to channel your inner genius and leave that exam trembling in fear! 🧠💥😂😂",
  line16: "You've studied so hard that even the exam paper is afraid to challenge you! 💪😂😂",
  line17: "May your exam answers be as sharp and on point as a perfectly timed punchline! 🎯😂😂",
  line18: "Remember, exams are like puzzles, and you're the master puzzle solver! 🧩😂😂",
  line19: "Wishing you an exam experience smoother than a buttered slide! 🧈😂😂",
  line20: "Just imagine the exam paper wearing a 'Kick Me' sign. You've got this! 😂😂",
  line21: "A single piece of paper can't decide your future, but your answersheet can! 📝📝😂😂"
};
const luckLineElement = document.getElementById('quote');

let currentIndex = 1; // Start from line1

function updateLuckLine() {
  luckLineElement.textContent = funnyLuckLines[`line${currentIndex}`];
  currentIndex = (currentIndex % 21) + 1; // Update to the next line
}

updateLuckLine(); // Initial update

setInterval(updateLuckLine, 10000); // Update every 10 seconds

// _____________--------_________---------_________---------_________----

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
      .then(response => response.json())
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
        console.log("Error:", error);
      });
  }

  fetch(`https://api.github.com/repos/${username}/${repo}/commits`)
    .then(response => response.json())
    .then(data => {
      var latestCommitTime = new Date(data[0].commit.author.date);
      var currentTime = new Date();

      // Calculate the time difference in hours
      var timeDiffHours = Math.floor((currentTime - latestCommitTime) / (1000 * 60 * 60));

      // Update the HTML content
      document.getElementById("time-ago").textContent = timeDiffHours === 1 ? "1 hour ago" : `${timeDiffHours} hours ago`;
    })
    .catch(error => {
      console.log("Error:", error);
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

