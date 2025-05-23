// modules/ui/GitManager.js

export class GitManager {
  constructor(dataPath) {
    // Normalize base path and avoid double slashes in URLs
    const basePath = window.location.pathname.replace(/\/+$/, ''); // removes trailing slash if present
    // Fix: Include 'public' in the path since files are in public/git-data/
    const cleanPath = (dataPath || `${basePath}/public/git-data`).replace(/\/{2,}/g, '/'); // remove accidental double slashes
    this.dataPath = cleanPath;
  }

  init() {
    this.updateCommitInfo(); // Initial fetch
    setTimeout(() => this.updateCommitInfo(), 1000); // Small delay
    setInterval(() => this.updateCommitInfo(), 10 * 60 * 1000); // Every 10 min
    window.updateCommitInfo = this.updateCommitInfo.bind(this); // Optional manual retry
  }

  updateCommitInfo() {
    console.log('🔍 Starting commit info update...');
    const timestamp = new Date().getTime();
    const urls = {
      commits: `${this.dataPath}/recent-commits.json?t=${timestamp}`,
      count: `${this.dataPath}/total-commits.txt?t=${timestamp}`,
      timestamp: `${this.dataPath}/last-updated.txt?t=${timestamp}`
    };

    console.log('Fetching from:', urls);
    this.setLoadingStates();
    this.testAndFetchCommits(urls.commits);
    this.testAndFetchCount(urls.count);
    this.testAndFetchTimestamp(urls.timestamp);
  }

  async testAndFetchCommits(url) {
    console.log('🔍 Testing commits URL:', url);
    try {
      const response = await fetch(url, { headers: { 'Cache-Control': 'no-cache', 'Pragma': 'no-cache' } });
      if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      const data = JSON.parse(await response.text());
      console.log('✅ Commits parsed:', data.length);
      this.updateCommitMessages(data);
    } catch (error) {
      console.error('❌ Commits fetch error:', error);
      this.handleCommitMessagesError();
    }
  }

  async testAndFetchCount(url) {
    console.log('🔍 Testing count URL:', url);
    try {
      const response = await fetch(url, { headers: { 'Cache-Control': 'no-cache', 'Pragma': 'no-cache' } });
      if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      const count = parseInt((await response.text()).trim());
      if (!isNaN(count) && count > 0) {
        document.getElementById("terminal-commit-count").textContent = count.toLocaleString();
        console.log('✅ Count updated:', count);
      } else {
        throw new Error(`Invalid count`);
      }
    } catch (error) {
      console.error('❌ Count fetch error:', error);
      document.getElementById("terminal-commit-count").textContent = "Error";
    }
  }

  async testAndFetchTimestamp(url) {
    console.log('🔍 Testing timestamp URL:', url);
    try {
      const response = await fetch(url, { headers: { 'Cache-Control': 'no-cache', 'Pragma': 'no-cache' } });
      if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      const date = new Date((await response.text()).trim());
      if (!isNaN(date.getTime())) {
        const timeAgo = this.formatTimeAgo(new Date() - date);
        document.getElementById("terminal-time-ago").textContent = timeAgo;
        console.log('✅ Timestamp updated:', timeAgo);
      } else {
        throw new Error(`Invalid timestamp`);
      }
    } catch (error) {
      console.error('❌ Timestamp fetch error:', error);
      document.getElementById("terminal-time-ago").textContent = "Error";
    }
  }

  setLoadingStates() {
    const commitCount = document.getElementById("terminal-commit-count");
    const timeAgo = document.getElementById("terminal-time-ago");
    const commitMessages = document.getElementById("commit-messages");

    if (commitCount) commitCount.textContent = "Loading...";
    if (timeAgo) timeAgo.textContent = "Calculating...";
    if (commitMessages) commitMessages.textContent = "Loading recent commits...";
  }

  handleCommitMessagesError() {
    const commitMessagesElement = document.getElementById("commit-messages");
    if (commitMessagesElement) {
      commitMessagesElement.textContent = "⚠ Unable to load recent commits.";
    }
  }

  // Enhanced function to detect automated commits
  isAutomatedCommit(commit) {
    const message = commit.commit?.message || '';
    const author = commit.author?.login || '';
    const committer = commit.committer?.login || '';
    
    // Patterns for automated commits
    const automatedPatterns = [
      '🤖 Update commit data',
      '[skip ci]',
      'Update commit data',
      'Automated commit',
      'Auto-update',
      'GitHub Actions',
      'CI:',
      'chore: update data',
      'docs: update stats',
      'Update git data'
    ];
    
    const isAutomatedMessage = automatedPatterns.some(pattern => 
      message.toLowerCase().includes(pattern.toLowerCase())
    );
    
    const isAutomatedActor = [
      'github-actions[bot]',
      'dependabot[bot]',
      'renovate[bot]',
      'actions-user'
    ].includes(author) || [
      'github-actions[bot]',
      'dependabot[bot]',
      'renovate[bot]',
      'actions-user'
    ].includes(committer);
    
    return isAutomatedMessage || isAutomatedActor;
  }

  updateCommitMessages(commits) {
    const commitMessagesElement = document.getElementById("commit-messages");
    if (!commitMessagesElement) {
      console.error('❌ commit-messages element not found');
      return;
    }

    if (!Array.isArray(commits) || commits.length === 0) {
      commitMessagesElement.innerHTML = '<div style="color: #888; font-style: italic;">No recent commits found</div>';
      return;
    }

    // Debug: Log all commit messages first
    console.log('🔍 All commits received:', commits.map(c => ({
      message: c.commit?.message?.substring(0, 50) + '...',
      author: c.author?.login,
      automated: this.isAutomatedCommit(c)
    })));
    
    // Filter out automated commits to get development commits
    const developmentCommits = commits.filter(commit => !this.isAutomatedCommit(commit));
    
    console.log('🔍 Development commits found:', developmentCommits.length);
    console.log('🔍 Development commit messages:', developmentCommits.map(c => c.commit?.message?.substring(0, 50) + '...'));
    
    // Decide what to display based on what we have
    let commitsToShow = [];
    let displayNote = '';
    
    if (developmentCommits.length >= 3) {
      // We have enough development commits - show only development ones
      commitsToShow = developmentCommits.slice(0, 5);
      displayNote = '';
      console.log('✅ Showing development commits only');
    } else if (developmentCommits.length > 0) {
      // We have some development commits - show them + some automated ones
      const automatedCommits = commits.filter(commit => this.isAutomatedCommit(commit));
      commitsToShow = [
        ...developmentCommits,
        ...automatedCommits.slice(0, 5 - developmentCommits.length)
      ];
      displayNote = `<div style="color: #666; font-size: 0.9em; margin-bottom: 8px; font-style: italic;">
        ${developmentCommits.length} development commit${developmentCommits.length !== 1 ? 's' : ''} + automated updates
      </div>`;
      console.log('✅ Showing mixed commits (development + automated)');
    } else {
      // No development commits found - show recent commits with explanation
      commitsToShow = commits.slice(0, 5);
      displayNote = `<div style="color: #888; font-size: 0.9em; margin-bottom: 8px; font-style: italic;">
        No recent development commits found. Showing latest activity:
      </div>`;
      console.log('⚠ Showing automated commits only');
    }

    // Clear and populate the element
    commitMessagesElement.innerHTML = displayNote;
    
    commitsToShow.forEach((commit, index) => {
      try {
        const commitDiv = document.createElement("div");
        commitDiv.className = "commit-entry";
        
        // Add visual indicator for automated commits
        const isAutomated = this.isAutomatedCommit(commit);
        if (isAutomated) {
          commitDiv.classList.add('automated-commit');
        }
        
        const hash = (commit.sha || '').substring(0, 7);
        const message = commit.commit?.message || 'No message';
        const authorDate = commit.commit?.author?.date || commit.commit?.committer?.date;

        // Format date
        const date = new Date(authorDate);
        const formattedDate = !isNaN(date.getTime()) ? 
          date.toLocaleDateString() + " " + date.toLocaleTimeString() : 
          'Unknown date';

        // Clean up the message for display
        let displayMessage = message.split('\n')[0]; // Take first line only
        
        if (isAutomated) {
          // Clean up automated commit messages
          displayMessage = displayMessage.replace(/^🤖\s*/, '').replace(/\s*\[skip ci\].*$/, '');
          if (displayMessage.startsWith('Update commit data')) {
            displayMessage = '📊 Data update';
          }
        }

        // Truncate very long messages
        if (displayMessage.length > 80) {
          displayMessage = displayMessage.substring(0, 77) + '...';
        }

        const automatedIndicator = isAutomated ? '<span class="automated-indicator">🤖</span>' : '';
        
        commitDiv.innerHTML = `
          <span class="commit-hash">${hash}</span>
          <span class="commit-date">${formattedDate}</span>
          ${automatedIndicator}
          <span class="commit-message">${displayMessage}</span>
        `;

        commitMessagesElement.appendChild(commitDiv);
      } catch (error) {
        console.error(`❌ Error processing commit ${index}:`, error);
      }
    });
    
    // Add styling for automated commits if not already present
    if (!document.querySelector('#automated-commit-styles')) {
      const style = document.createElement('style');
      style.id = 'automated-commit-styles';
      style.textContent = `
        .commit-entry.automated-commit {
          opacity: 0.7;
        }
        .automated-indicator {
          font-size: 0.8em;
          margin-right: 4px;
          color: #666;
        }
        .commit-entry {
          margin-bottom: 4px;
          padding: 2px 0;
        }
        .commit-hash {
          font-family: monospace;
          color: #0366d6;
          margin-right: 8px;
        }
        .commit-date {
          color: #666;
          font-size: 0.9em;
          margin-right: 8px;
        }
        .commit-message {
          color: #333;
        }
      `;
      document.head.appendChild(style);
    }
  }

  formatTimeAgo(timeDiffMs) {
    if (isNaN(timeDiffMs) || timeDiffMs < 0) return "unknown";
    const sec = Math.floor(timeDiffMs / 1000);
    if (sec < 60) return "just now";
    const min = Math.floor(sec / 60);
    const hr = Math.floor(min / 60);
    const days = Math.floor(hr / 24);
    const years = Math.floor(days / 365);
    const months = Math.floor((days % 365) / 30);
    const weeks = Math.floor(((days % 365) % 30) / 7);
    const d = ((days % 365) % 30) % 7;
    const h = hr % 24;
    const m = min % 60;

    let parts = [];
    if (years) parts.push(`${years} year${years !== 1 ? 's' : ''}`);
    if (months) parts.push(`${months} month${months !== 1 ? 's' : ''}`);
    if (weeks) parts.push(`${weeks} week${weeks !== 1 ? 's' : ''}`);
    if (d) parts.push(`${d} day${d !== 1 ? 's' : ''}`);
    if (h && !years && !months && !weeks) parts.push(`${h} hour${h !== 1 ? 's' : ''}`);
    if (m && !years && !months && !weeks && !d && !h) parts.push(`${m} minute${m !== 1 ? 's' : ''}`);
    return parts.length ? parts.join(', ') + ' ago' : 'just now';
  }
}