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