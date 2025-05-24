// modules/ui/GitManager.js

export class GitManager {
  constructor(dataPath) {
    const isLocal = location.hostname === "localhost" || location.hostname === "127.0.0.1";
    let basePath = window.location.pathname;
    basePath = basePath.substring(0, basePath.lastIndexOf('/'));

    if (!dataPath) {
      const repoPath = isLocal ? '' : `/${basePath.split('/').filter(Boolean)[0]}`;
      dataPath = `${repoPath}/public/git-data`;
    }

    this.dataPath = dataPath.replace(/\/{2,}/g, '/');
  }

  init() {
    this.updateCommitInfo();
    setTimeout(() => this.updateCommitInfo(), 1000);
    setInterval(() => this.updateCommitInfo(), 10 * 60 * 1000);
    window.updateCommitInfo = this.updateCommitInfo.bind(this);
  }

  updateCommitInfo() {
    const timestamp = new Date().getTime();
    const urls = {
      commits: `${this.dataPath}/recent-commits.json?t=${timestamp}`,
      count: `${this.dataPath}/total-commits.txt?t=${timestamp}`,
      timestamp: `${this.dataPath}/last-updated.txt?t=${timestamp}`
    };

    this.setLoadingStates();
    this.testAndFetchCommits(urls.commits);
    this.testAndFetchCount(urls.count);
    this.testAndFetchTimestamp(urls.timestamp);
  }

  async testAndFetchCommits(url) {
    try {
      const response = await fetch(url, { headers: { 'Cache-Control': 'no-cache', 'Pragma': 'no-cache' } });
      if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      const data = JSON.parse(await response.text());
      this.updateCommitMessages(data);
    } catch {
      this.handleCommitMessagesError();
    }
  }

  async testAndFetchCount(url) {
    try {
      const response = await fetch(url, { headers: { 'Cache-Control': 'no-cache', 'Pragma': 'no-cache' } });
      if (!response.ok) throw new Error();
      const count = parseInt((await response.text()).trim());
      if (!isNaN(count) && count > 0) {
        document.getElementById("terminal-commit-count").textContent = count.toLocaleString();
      } else {
        throw new Error();
      }
    } catch {
      document.getElementById("terminal-commit-count").textContent = "Error";
    }
  }

  async testAndFetchTimestamp(url) {
    try {
      const response = await fetch(url, { headers: { 'Cache-Control': 'no-cache', 'Pragma': 'no-cache' } });
      if (!response.ok) throw new Error();
      const date = new Date((await response.text()).trim());
      if (!isNaN(date.getTime())) {
        const timeAgo = this.formatTimeAgo(new Date() - date);
        document.getElementById("terminal-time-ago").textContent = timeAgo;
      } else {
        throw new Error();
      }
    } catch {
      document.getElementById("terminal-time-ago").textContent = "Error";
    }
  }

  setLoadingStates() {
    document.getElementById("terminal-commit-count").textContent = "Loading...";
    document.getElementById("terminal-time-ago").textContent = "Calculating...";
    document.getElementById("commit-messages").textContent = "Loading recent commits...";
  }

  handleCommitMessagesError() {
    const commitMessagesElement = document.getElementById("commit-messages");
    if (commitMessagesElement) {
      commitMessagesElement.textContent = "⚠ Unable to load recent commits.";
    }
  }

  isAutomatedCommit(commit) {
    const message = commit.commit?.message || '';
    const author = commit.author?.login || '';
    const committer = commit.committer?.login || '';

    const automatedPatterns = [
      '🤖 Update commit data', '[skip ci]', 'Update commit data', 'Automated commit',
      'Auto-update', 'GitHub Actions', 'CI:', 'chore: update data', 'docs: update stats', 'Update git data'
    ];

    const isAutomatedMessage = automatedPatterns.some(pattern =>
      message.toLowerCase().includes(pattern.toLowerCase())
    );

    const isAutomatedActor = ['github-actions[bot]', 'dependabot[bot]', 'renovate[bot]', 'actions-user']
      .includes(author) || ['github-actions[bot]', 'dependabot[bot]', 'renovate[bot]', 'actions-user']
      .includes(committer);

    return isAutomatedMessage || isAutomatedActor;
  }

  updateCommitMessages(commits) {
    const commitMessagesElement = document.getElementById("commit-messages");
    if (!commitMessagesElement) return;

    if (!Array.isArray(commits) || commits.length === 0) {
      commitMessagesElement.innerHTML = '<div style="color: #888; font-style: italic;">No recent commits found</div>';
      return;
    }

    const developmentCommits = commits.filter(commit => !this.isAutomatedCommit(commit));
    let commitsToShow = [];
    let displayNote = '';

    if (developmentCommits.length >= 3) {
      commitsToShow = developmentCommits.slice(0, 5);
    } else if (developmentCommits.length > 0) {
      const automatedCommits = commits.filter(commit => this.isAutomatedCommit(commit));
      commitsToShow = [...developmentCommits, ...automatedCommits.slice(0, 5 - developmentCommits.length)];
      displayNote = `<div style="color: #666; font-size: 0.9em; margin-bottom: 8px; font-style: italic;">
        ${developmentCommits.length} development commit${developmentCommits.length !== 1 ? 's' : ''} + automated updates
      </div>`;
    } else {
      commitsToShow = commits.slice(0, 5);
      displayNote = `<div style="color: #888; font-size: 0.9em; margin-bottom: 8px; font-style: italic;">
        No recent development commits found. Showing latest activity:
      </div>`;
    }

    commitMessagesElement.innerHTML = displayNote;

    commitsToShow.forEach((commit, index) => {
      try {
        const commitDiv = document.createElement("div");
        commitDiv.className = "commit-entry";

        const isAutomated = this.isAutomatedCommit(commit);
        if (isAutomated) commitDiv.classList.add('automated-commit');

        const hash = (commit.sha || '').substring(0, 7);
        const message = commit.commit?.message || 'No message';
        const authorDate = commit.commit?.author?.date || commit.commit?.committer?.date;
        const date = new Date(authorDate);
        const formattedDate = !isNaN(date.getTime()) ?
          date.toLocaleDateString() + " " + date.toLocaleTimeString() : 'Unknown date';

        let displayMessage = message.split('\n')[0];
        if (isAutomated) {
          displayMessage = displayMessage.replace(/^🤖\s*/, '').replace(/\s*\[skip ci\].*$/, '');
          if (displayMessage.startsWith('Update commit data')) displayMessage = '📊 Data update';
        }

        const automatedIndicator = isAutomated ? '<span class="automated-indicator">🤖</span>' : '';

        commitDiv.innerHTML = `
          <span class="commit-hash">${hash}</span>
          <span class="commit-date">${formattedDate}</span>
          ${automatedIndicator}
          <span class="commit-message" style="white-space: nowrap;">${displayMessage}</span>
        `;

        commitMessagesElement.appendChild(commitDiv);
      } catch (error) {
        console.error(`Error processing commit ${index}:`, error);
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
