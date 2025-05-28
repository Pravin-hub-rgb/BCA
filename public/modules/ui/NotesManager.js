// modules/ui/NotesManager.js
export class NotesManager {
    constructor() {}
  
    init() {
      this.setupCopyButtons();
      this.setupHinglishToggle();
      this.setupCompactExtendedToggle();
    }
  
    // COPY BUTTON functionality
    setupCopyButtons() {
      // Function to create and insert copy buttons
      const addCopyButtons = () => {
        // Select all relevant pre/code elements
        const codeBlocks = document.querySelectorAll('.panel pre code, .code > pre code, .npanel pre code');
  
        codeBlocks.forEach(codeBlock => {
          // Create the copy button
          const copyButton = document.createElement('button');
          copyButton.className = 'copy-btn'; // Add class for styling
          copyButton.textContent = 'Copy Code'; // Set button text
          copyButton.onclick = () => {
            this.copyCode(copyButton, codeBlock); // Pass button and code block
          };
  
          // Get the parent <pre> element
          const preElement = codeBlock.parentElement; // This is the <pre> tag
  
          // Set the button position
          preElement.style.position = 'relative'; // Ensure positioning context
  
          // Insert the button into the parent <pre> element
          preElement.appendChild(copyButton);
        });
      };
  
      // Add buttons after DOM content is loaded
      addCopyButtons();
    }
  
    copyCode(button, codeBlock) {
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
  
    // Hinglish notes toggle functionality
    setupHinglishToggle() {
      // Select all mixed-notes sections
      const mixedNotesSections = document.querySelectorAll(".mixed-notes");
  
      mixedNotesSections.forEach((section) => {
        // Create the toggle button
        const toggleButton = document.createElement("button");
        toggleButton.textContent = "Switch to Hinglish";
        toggleButton.classList.add("toggle-notes");
  
        // Append the button to the section
        section.appendChild(toggleButton);
  
        // Add event listener for toggling notes
        toggleButton.addEventListener("click", () => {
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
    }
  
    // Compact/Extended notes toggle functionality
    setupCompactExtendedToggle() {
      // Select all compact and extended notes sections
      const compactExtendedSections = document.querySelectorAll(".compact-extended");
  
      compactExtendedSections.forEach((section) => {
        // Create the toggle button
        const toggleButton = document.createElement("button");
        toggleButton.textContent = "Compact"; // Initial text for Compact mode
        toggleButton.classList.add("toggle-len-notes");
  
        // Append the button to the section
        section.appendChild(toggleButton);
  
        // Add event listener for toggling notes
        toggleButton.addEventListener("click", () => {
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
    }    
  }