// modules/ui/GitManager.js

export class GitManager {
  constructor(dataPath) {
    if (!dataPath) {
      const base = window.location.pathname.replace(/\/[^\/]+$/, "");
      this.dataPath = `${base}/git-data`;
    } else {
      this.dataPath = dataPath;
    }
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

    commitMessagesElement.innerHTML = '';
    commits.forEach((commit, index) => {
      try {
        const commitDiv = document.createElement("div");
        commitDiv.className = "commit-entry";
        const hash = (commit.sha || '').substring(0, 7);
        const message = commit.commit?.message || 'No message';
        const authorDate = commit.commit?.author?.date || commit.commit?.committer?.date;
        let dateString = 'Unknown date';

        if (authorDate) {
          const date = new Date(authorDate);
          if (!isNaN(date.getTime())) dateString = date.toLocaleString();
        }

        const truncatedMessage = message.length > 80 ? message.substring(0, 77) + '...' : message;

        commitDiv.innerHTML = `
          <span class="commit-hash" title="${hash}">${hash}</span>
          <span class="commit-date" title="${dateString}">${dateString}</span>
          <span class="commit-message" title="${message}">${truncatedMessage}</span>
        `;

        commitMessagesElement.appendChild(commitDiv);
      } catch (error) {
        console.error(`❌ Error processing commit ${index}:`, error);
      }
    });
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
