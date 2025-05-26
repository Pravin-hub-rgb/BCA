// // modules/ui/SemesterManager.js
// export class SemesterManager {
//     constructor() {
//       this.semesterElement = null;
//     }
  
//     init() {
//       // Load and apply the saved semester
//       this.loadSemester();
  
//       // Get semester element
//       this.semesterElement = document.getElementById("semester");
  
//       // Add event listener for semester change
//       if (this.semesterElement) {
//         this.semesterElement.addEventListener('change', () => this.saveSemester());
//       }
//     }
  
//     // Function to save the selected semester to localStorage
//     saveSemester() {
//       if (this.semesterElement) {
//         const semester = this.semesterElement.value;
//         localStorage.setItem("selectedSemester", semester);
//         this.showSemester(semester);
//       }
//     }
  
//     // Function to load the saved semester from localStorage
//     loadSemester() {
//       const savedSemester = localStorage.getItem("selectedSemester");
//       this.semesterElement = document.getElementById("semester");
//       if (this.semesterElement) {
//         const semesterToLoad = savedSemester || "1"; // Default to "1" if no saved semester
//         this.semesterElement.value = semesterToLoad;
//         this.showSemester(semesterToLoad);
//       }
//     }
  
//     // Function to display the selected semester's content
//     showSemester(semester) {
//       const semDivs = document.querySelectorAll(".sem");
//       semDivs.forEach(div => {
//         if (div.getAttribute("data-semester") === semester) {
//           div.classList.add("activesem");
//         } else {
//           div.classList.remove("activesem");
//         }
//       });
//     }
//   }

// modules/ui/SemesterManager.js
export class SemesterManager {
  constructor() {
      this.semesterElement = null;
  }

  init() {
      // Get semester element first
      this.semesterElement = document.getElementById("semester");
      
      // Only proceed if the semester element exists on this page
      if (this.semesterElement) {
          // Load and apply the saved semester
          this.loadSemester();
          // Add event listener for semester change
          this.semesterElement.addEventListener('change', () => this.saveSemester());
      }
  }

  // Function to save the selected semester to localStorage
  saveSemester() {
      if (this.semesterElement) {
          const semester = this.semesterElement.value;
          localStorage.setItem("selectedSemester", semester);
          this.showSemester(semester);
      }
  }

  // Function to load the saved semester from localStorage
  loadSemester() {
      // Only proceed if semester element exists
      if (!this.semesterElement) {
          return;
      }

      const savedSemester = localStorage.getItem("selectedSemester");
      const semesterToLoad = savedSemester || "1"; // Default to "1" if no saved semester
      
      this.semesterElement.value = semesterToLoad;
      this.showSemester(semesterToLoad);
  }

  // Function to display the selected semester's content
  showSemester(semester) {
      const semDivs = document.querySelectorAll(".sem");
      semDivs.forEach(div => {
          if (div.getAttribute("data-semester") === semester) {
              div.classList.add("activesem");
          } else {
              div.classList.remove("activesem");
          }
      });
  }
}