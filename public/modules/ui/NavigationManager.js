// modules/ui/NavigationManager.js
export class NavigationManager {
    constructor() {}
  
    init() {
      this.setupSidebarNavigation();
      this.setupAccordion();
      
      // Make navigation functions globally available
      window.openNav = this.openNav.bind(this);
      window.closeNav = this.closeNav.bind(this);
    }
  
    // Setup sidebar navigation with smooth scrolling
    setupSidebarNavigation() {
      // Get all links that have hash/anchor tags in the sidebar
      const navLinks = document.querySelectorAll('.sidepanel .link[href^="#"]');
  
      // Add click event listener to each link
      navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault(); // Prevent default anchor behavior
  
          // Close the sidebar after clicking (assuming this is mobile view)
          if (window.innerWidth <= 768) { // Adjust breakpoint as needed
            this.closeNav(); // Use the sidebar close function
          }
  
          // Get the target element
          const targetId = link.getAttribute('href');
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
    }
  
    // Function to open the side panel
    openNav() {
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
    closeNav() {
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
    setupAccordion() {
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
    }
  }