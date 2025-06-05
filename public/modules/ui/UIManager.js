// modules/ui/UIManager.js
export class UIManager {
    constructor() {}
  
    init() {
      this.setupDotElements();
      this.setupHighlightJS();
      this.cleanPreTags();
    }
  
    // Adding dots to elements with class 'dotc' 
    setupDotElements() {
      const codes = document.querySelectorAll('.dotc');
      codes.forEach(box => {
        box.innerHTML += '<div class="dots"><div class="f"></div><div class="s"></div><div class="t"></div></div>';
      });
    }
  
    // Highlight.js for syntax highlighting
    setupHighlightJS() {
      if (typeof hljs !== 'undefined') {
        hljs.highlightAll();
      }
    }
  
    // Removing space in pre tags
    cleanPreTags() {
      const allPre = document.querySelectorAll('pre');
      allPre.forEach((tag) => {
        if (tag.firstChild) tag.firstChild.textContent = "";
        if (tag.lastChild) tag.lastChild.textContent = "";
      });
    }
  }









// modules/ui/UIManager.js this one works
// export class UIManager {
//   constructor() {}

//   init() {
//     this.setupDotElements();
//     this.setupHighlightJS();
    
//     // Add a small delay to ensure all other scripts have finished
//     setTimeout(() => {
//       this.cleanPreTags();
//     }, 100);
//   }

//   // Adding dots to elements with class 'dotc' 
//   setupDotElements() {
//     const codes = document.querySelectorAll('.dotc');
//     codes.forEach(box => {
//       box.innerHTML += '<div class="dots"><div class="f"></div><div class="s"></div><div class="t"></div></div>';
//     });
//   }

//   // Highlight.js for syntax highlighting
//   setupHighlightJS() {
//     if (typeof hljs !== 'undefined') {
//       hljs.highlightAll();
//     }
//   }

//   // Removing space in pre tags
//   cleanPreTags() {
//     const allPre = document.querySelectorAll('pre');
//     allPre.forEach((tag) => {
//       // Check if the first/last child is a text node with only whitespace
//       if (tag.firstChild && tag.firstChild.nodeType === Node.TEXT_NODE) {
//         const text = tag.firstChild.textContent;
//         if (text.trim() === '') {
//           tag.removeChild(tag.firstChild);
//         }
//       }
//       if (tag.lastChild && tag.lastChild.nodeType === Node.TEXT_NODE) {
//         const text = tag.lastChild.textContent;
//         if (text.trim() === '') {
//           tag.removeChild(tag.lastChild);
//         }
//       }
//     });
//   }
// }

/*
// modules/ui/UIManager.js
export class UIManager {
  constructor() {}

  init() {
    this.setupDotElements();
    this.setupHighlightJS();
    
    // Add a small delay to ensure all other scripts have finished
    setTimeout(() => {
      this.cleanPreTags();
      // Uncomment the line below to debug what's in your elements
      // this.testCleanFunction();
    }, 100);
  }

  // Adding dots to elements with class 'dotc' 
  setupDotElements() {
    const codes = document.querySelectorAll('.dotc');
    codes.forEach(box => {
      box.innerHTML += '<div class="dots"><div class="f"></div><div class="s"></div><div class="t"></div></div>';
    });
  }

  // Highlight.js for syntax highlighting
  setupHighlightJS() {
    if (typeof hljs !== 'undefined') {
      hljs.highlightAll();
    }
  }

  // Removing space in pre and code tags
  cleanPreTags() {
    const allPre = document.querySelectorAll('pre');
    // const allCode = document.querySelectorAll('code');
    
    // Clean pre tags
    allPre.forEach((tag) => {
      this.cleanWhitespaceFromElement(tag);
    });
    
    // Clean code tags
    // allCode.forEach((tag) => {
    //   this.cleanWhitespaceFromElement(tag);
    // });
  }

  // Helper function to remove leading and trailing whitespace text nodes
  cleanWhitespaceFromElement(element) {
    // Remove empty text nodes at the beginning
    while (element.firstChild && 
           element.firstChild.nodeType === Node.TEXT_NODE && 
           element.firstChild.textContent.trim() === '') {
      element.removeChild(element.firstChild);
    }
    
    // Remove empty text nodes at the end
    while (element.lastChild && 
           element.lastChild.nodeType === Node.TEXT_NODE && 
           element.lastChild.textContent.trim() === '') {
      element.removeChild(element.lastChild);
    }
    
    // Also trim leading/trailing whitespace from the first and last text nodes
    if (element.firstChild && element.firstChild.nodeType === Node.TEXT_NODE) {
      element.firstChild.textContent = element.firstChild.textContent.replace(/^\s+/, '');
    }
    
    if (element.lastChild && element.lastChild.nodeType === Node.TEXT_NODE) {
      element.lastChild.textContent = element.lastChild.textContent.replace(/\s+$/, '');
    }
  }

  // Test function to debug and see what's in the elements
  testCleanFunction() {
    console.log('=== DEBUGGING PRE AND CODE ELEMENTS ===');
    
    const allPre = document.querySelectorAll('pre');
    const allCode = document.querySelectorAll('code');
    
    console.log(`Found ${allPre.length} pre elements and ${allCode.length} code elements`);
    
    allPre.forEach((pre, index) => {
      console.log(`\n--- PRE ELEMENT ${index} ---`);
      console.log('Children count:', pre.childNodes.length);
      pre.childNodes.forEach((child, childIndex) => {
        if (child.nodeType === Node.TEXT_NODE) {
          console.log(`Child ${childIndex} (TEXT):`, JSON.stringify(child.textContent));
        } else {
          console.log(`Child ${childIndex} (${child.tagName}):`, child.outerHTML?.substring(0, 100) + '...');
        }
      });
    });
    
    allCode.forEach((code, index) => {
      console.log(`\n--- CODE ELEMENT ${index} ---`);
      console.log('Children count:', code.childNodes.length);
      code.childNodes.forEach((child, childIndex) => {
        if (child.nodeType === Node.TEXT_NODE) {
          console.log(`Child ${childIndex} (TEXT):`, JSON.stringify(child.textContent));
        } else {
          console.log(`Child ${childIndex} (${child.tagName}):`, child.outerHTML?.substring(0, 100) + '...');
        }
      });
    });
    
    console.log('=== END DEBUG ===');
  }
}
  */