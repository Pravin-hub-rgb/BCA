// main.js - Core functionality with Git repository features
import { UIManager } from './modules/ui/UIManager.js';
import { ThemeManager } from './modules/ui/ThemeManager.js';
import { NotesManager } from './modules/ui/NotesManager.js';
import { NavigationManager } from './modules/ui/NavigationManager.js';
import { SearchManager } from './modules/ui/SearchManager.js';
import { SemesterManager } from './modules/ui/SemesterManager.js';
import { GitManager } from './modules/ui/GitManager.js'; // 🔥 NEW

document.addEventListener("DOMContentLoaded", function () {
  // Initialize all managers
  const themeManager = new ThemeManager();
  const semesterManager = new SemesterManager();
  const notesManager = new NotesManager();
  const navigationManager = new NavigationManager();
  const searchManager = new SearchManager();
  const gitManager = new GitManager(); // 🔥 NEW
  const uiManager = new UIManager();

  themeManager.init();
  semesterManager.init();
  notesManager.init();
  navigationManager.init();
  searchManager.init();
  gitManager.init(); // 🔥 NEW
  uiManager.init();

  // Optional: expose to window if retry button uses it
  window.gitManager = gitManager;
});
