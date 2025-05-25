// modules/ui/ThemeManager.js
export class ThemeManager {
  constructor() {
      this.themeSelectMobile = null;
      this.themeSelectDesktop = null;
  }

  init() {
      // Get theme selectors FIRST
      this.themeSelectMobile = document.getElementById('themeSelectMobile');
      this.themeSelectDesktop = document.getElementById('themeSelectDesktop');
      
      // THEN load and apply the saved theme
      this.loadTheme();
      
      // Add event listeners for theme selection
      this.addEventListeners();
  }

  addEventListeners() {
      if (this.themeSelectMobile) {
          this.themeSelectMobile.addEventListener('change', (event) => {
              this.setTheme(event.target.value);
          });
      }

      if (this.themeSelectDesktop) {
          this.themeSelectDesktop.addEventListener('change', (event) => {
              this.setTheme(event.target.value);
          });
      }
  }

  // Function to set the theme
  setTheme(theme) {
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
      if (this.themeSelectMobile) {
          this.themeSelectMobile.value = theme;
      }
      if (this.themeSelectDesktop) {
          this.themeSelectDesktop.value = theme;
      }
  }

  // Function to load the saved theme from localStorage
  loadTheme() {
      const savedTheme = localStorage.getItem('theme') || 'light'; // Default to 'light' if no saved theme
      this.setTheme(savedTheme); // Apply the saved or default theme
  }
}