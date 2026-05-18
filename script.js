const STORAGE_KEYS = {
  tasks: 'taskTrackerTasks',
  settings: 'taskTrackerSettings'
};

const DEFAULT_SETTINGS = {
  token: '',
  repo: '',
  path: 'schedule-progress.json',
  branch: 'main'
};

const DEFAULT_TASKS = [
  { id: 1, date: 'May 20 (Wed)', time: '6:30 AM - 7:00 AM', name: 'Cytriboost Syrup', dose: '3 ml (Give after or with a meal)', notes: '', completed: false },
  { id: 2, date: 'May 20 (Wed)', time: '9:00 AM', name: 'Prednisone Derpson Tablet', dose: '1 tablet (Give with snack/small treats)', notes: '', completed: false },
  { id: 3, date: 'May 20 (Wed)', time: '12:30 PM - 1:00 PM', name: 'Papi Bion Syrup', dose: '2 ml (Once daily supplement)', notes: '', completed: false },
  { id: 4, date: 'May 20 (Wed)', time: '1:30 PM - 2:00 PM', name: 'ImmunoCare Syrup', dose: '3 ml (Once daily supplement)', notes: '', completed: false },
  { id: 5, date: 'May 20 (Wed)', time: '6:30 PM - 7:30 PM', name: 'Prednisone Derpson Tablet', dose: '1 tablet (2nd dose; Give with snack/treats)', notes: '', completed: false },
  { id: 6, date: 'May 20 (Wed)', time: '9:00 PM', name: 'Cytriboost Syrup', dose: '3 ml (2nd dose; Give after or with a meal)', notes: '', completed: false },
  { id: 7, date: 'May 21 (Thu)', time: '6:30 AM - 7:00 AM', name: 'Cytriboost Syrup', dose: '3 ml (Give after or with a meal)', notes: '', completed: false },
  { id: 8, date: 'May 21 (Thu)', time: '9:00 AM', name: 'Prednisone Derpson Tablet', dose: '1 tablet (Give with snack/small treats)', notes: '', completed: false },
  { id: 9, date: 'May 21 (Thu)', time: '12:30 PM - 1:00 PM', name: 'Papi Bion Syrup', dose: '2 ml (Once daily supplement)', notes: '', completed: false },
  { id: 10, date: 'May 21 (Thu)', time: '1:30 PM - 2:00 PM', name: 'ImmunoCare Syrup', dose: '3 ml (Once daily supplement)', notes: '', completed: false },
  { id: 11, date: 'May 21 (Thu)', time: '6:30 PM - 7:30 PM', name: 'Prednisone Derpson Tablet', dose: '1 tablet (2nd dose; Give with snack/treats)', notes: '', completed: false },
  { id: 12, date: 'May 21 (Thu)', time: '9:00 PM', name: 'Cytriboost Syrup', dose: '3 ml (2nd dose; Give after or with a meal)', notes: '', completed: false },
  { id: 13, date: 'May 22 (Fri)', time: '6:30 AM - 7:00 AM', name: 'Cytriboost Syrup', dose: '3 ml (Give after or with a meal)', notes: '', completed: false },
  { id: 14, date: 'May 22 (Fri)', time: '9:00 AM', name: 'Prednisone Derpson Tablet', dose: '1 tablet (Give with snack/small treats)', notes: '', completed: false },
  { id: 15, date: 'May 22 (Fri)', time: '12:30 PM - 1:00 PM', name: 'Papi Bion Syrup', dose: '2 ml (Once daily supplement)', notes: '', completed: false },
  { id: 16, date: 'May 22 (Fri)', time: '1:30 PM - 2:00 PM', name: 'ImmunoCare Syrup', dose: '3 ml (Once daily supplement)', notes: '', completed: false },
  { id: 17, date: 'May 22 (Fri)', time: '6:30 PM - 7:30 PM', name: 'Prednisone Derpson Tablet', dose: '1 tablet (2nd dose; Give with snack/treats)', notes: '', completed: false },
  { id: 18, date: 'May 22 (Fri)', time: '9:00 PM', name: 'Cytriboost Syrup', dose: '3 ml (2nd dose; Give after or with a meal)', notes: '', completed: false },
  { id: 19, date: 'May 23 (Sat)', time: '6:30 AM - 7:00 AM', name: 'Cytriboost Syrup', dose: '3 ml (Give after or with a meal)', notes: '', completed: false },
  { id: 20, date: 'May 23 (Sat)', time: '9:00 AM', name: 'Prednisone Derpson Tablet', dose: '1 tablet (Give with snack/small treats)', notes: '', completed: false },
  { id: 21, date: 'May 23 (Sat)', time: '12:30 PM - 1:00 PM', name: 'Papi Bion Syrup', dose: '2 ml (Once daily supplement)', notes: '', completed: false },
  { id: 22, date: 'May 23 (Sat)', time: '1:30 PM - 2:00 PM', name: 'ImmunoCare Syrup', dose: '3 ml (Once daily supplement)', notes: '', completed: false },
  { id: 23, date: 'May 23 (Sat)', time: '6:30 PM - 7:30 PM', name: 'Prednisone Derpson Tablet', dose: '1 tablet (2nd dose; Give with snack/treats)', notes: '', completed: false },
  { id: 24, date: 'May 23 (Sat)', time: '9:00 PM', name: 'Cytriboost Syrup', dose: '3 ml (2nd dose; Give after or with a meal)', notes: '', completed: false },
  { id: 25, date: 'May 24 (Sun)', time: '6:30 AM - 7:00 AM', name: 'Cytriboost Syrup', dose: '3 ml (Give after or with a meal)', notes: '', completed: false },
  { id: 26, date: 'May 24 (Sun)', time: '9:00 AM', name: 'Prednisone Derpson Tablet', dose: 'PHASE CHANGE: 1 tablet ONCE a day today (With snack)', notes: '', completed: false },
  { id: 27, date: 'May 24 (Sun)', time: '12:30 PM - 1:00 PM', name: 'Papi Bion Syrup', dose: '2 ml (Once daily supplement)', notes: '', completed: false },
  { id: 28, date: 'May 24 (Sun)', time: '1:30 PM - 2:00 PM', name: 'ImmunoCare Syrup', dose: '3 ml (Once daily supplement)', notes: '', completed: false },
  { id: 29, date: 'May 24 (Sun)', time: '6:30 PM - 7:30 PM', name: 'Prednisone Derpson Tablet', dose: 'SKIP - Evening dose discontinued (Once daily phase)', notes: 'N/A', completed: false },
  { id: 30, date: 'May 24 (Sun)', time: '9:00 PM', name: 'Cytriboost Syrup', dose: '3 ml (2nd dose; Give after or with a meal)', notes: '', completed: false },
  { id: 31, date: 'May 25 (Mon)', time: '6:30 AM - 7:00 AM', name: 'Cytriboost Syrup', dose: '3 ml (Give after or with a meal)', notes: '', completed: false },
  { id: 32, date: 'May 25 (Mon)', time: '9:00 AM', name: 'Prednisone Derpson Tablet', dose: '1 tablet (Once daily phase; Give with snack)', notes: '', completed: false },
  { id: 33, date: 'May 25 (Mon)', time: '12:30 PM - 1:00 PM', name: 'Papi Bion Syrup', dose: '2 ml (Once daily supplement)', notes: '', completed: false },
  { id: 34, date: 'May 25 (Mon)', time: '1:30 PM - 2:00 PM', name: 'ImmunoCare Syrup', dose: '3 ml (Once daily supplement)', notes: '', completed: false },
  { id: 35, date: 'May 25 (Mon)', time: '9:00 PM', name: 'Cytriboost Syrup', dose: '3 ml (2nd dose; Give after or with a meal)', notes: '', completed: false },
  { id: 36, date: 'May 26 (Tue)', time: '6:30 AM - 7:00 AM', name: 'Cytriboost Syrup', dose: '3 ml (Give after or with a meal)', notes: '', completed: false },
  { id: 37, date: 'May 26 (Tue)', time: '9:00 AM', name: 'Prednisone Derpson Tablet', dose: '1 tablet (Once daily phase; Give with snack)', notes: '', completed: false },
  { id: 38, date: 'May 26 (Tue)', time: '12:30 PM - 1:00 PM', name: 'Papi Bion Syrup', dose: '2 ml (Once daily supplement)', notes: '', completed: false },
  { id: 39, date: 'May 26 (Tue)', time: '1:30 PM - 2:00 PM', name: 'ImmunoCare Syrup', dose: '3 ml (Once daily supplement)', notes: '', completed: false },
  { id: 40, date: 'May 26 (Tue)', time: '9:00 PM', name: 'Cytriboost Syrup', dose: '3 ml (2nd dose; Give after or with a meal)', notes: '', completed: false },
  { id: 41, date: 'May 27 (Wed)', time: '6:30 AM - 7:00 AM', name: 'Cytriboost Syrup', dose: '3 ml (Give after or with a meal)', notes: '', completed: false },
  { id: 42, date: 'May 27 (Wed)', time: '9:00 AM', name: 'Prednisone Derpson Tablet', dose: '1 tablet (Once daily phase; Give with snack)', notes: '', completed: false },
  { id: 43, date: 'May 27 (Wed)', time: '12:30 PM - 1:00 PM', name: 'Papi Bion Syrup', dose: '2 ml (Once daily supplement)', notes: '', completed: false },
  { id: 44, date: 'May 27 (Wed)', time: '1:30 PM - 2:00 PM', name: 'ImmunoCare Syrup', dose: '3 ml (Once daily supplement)', notes: '', completed: false },
  { id: 45, date: 'May 27 (Wed)', time: '9:00 PM', name: 'Cytriboost Syrup', dose: '3 ml (2nd dose; Give after or with a meal)', notes: '', completed: false },
  { id: 46, date: 'May 28 (Thu)', time: '6:30 AM - 7:00 AM', name: 'Cytriboost Syrup', dose: '3 ml (Give after or with a meal)', notes: '', completed: false },
  { id: 47, date: 'May 28 (Thu)', time: '9:00 AM', name: 'Prednisone Derpson Tablet', dose: '1 tablet (Once daily phase; Give with snack)', notes: '', completed: false },
  { id: 48, date: 'May 28 (Thu)', time: '12:30 PM - 1:00 PM', name: 'Papi Bion Syrup', dose: '2 ml (Once daily supplement)', notes: '', completed: false },
  { id: 49, date: 'May 28 (Thu)', time: '1:30 PM - 2:00 PM', name: 'ImmunoCare Syrup', dose: '3 ml (Once daily supplement)', notes: '', completed: false },
  { id: 50, date: 'May 28 (Thu)', time: '9:00 PM', name: 'Cytriboost Syrup', dose: '3 ml (2nd dose; Give after or with a meal)', notes: '', completed: false },
  { id: 51, date: 'May 29 (Fri)', time: '6:30 AM - 7:00 AM', name: 'Cytriboost Syrup', dose: 'FINAL MORNING DOSE: 3 ml (Give after/with a meal)', notes: '', completed: false },
  { id: 52, date: 'May 29 (Fri)', time: '9:00 AM', name: 'Prednisone Derpson Tablet', dose: '1 tablet (Once daily phase; Give with snack)', notes: '', completed: false },
  { id: 53, date: 'May 29 (Fri)', time: '12:30 PM - 1:00 PM', name: 'Papi Bion Syrup', dose: '2 ml (Once daily supplement)', notes: '', completed: false },
  { id: 54, date: 'May 29 (Fri)', time: '1:30 PM - 2:00 PM', name: 'ImmunoCare Syrup', dose: '3 ml (Once daily supplement)', notes: '', completed: false },
  { id: 55, date: 'May 29 (Fri)', time: '9:00 PM', name: 'Cytriboost Syrup', dose: 'FINAL EVENING DOSE: 3 ml (Regimen Completed)', notes: '', completed: false },
  { id: 56, date: 'May 30 (Sat)', time: '9:00 AM', name: 'Prednisone Derpson Tablet', dose: '1 tablet (Once daily phase; Give with snack)', notes: '', completed: false },
  { id: 57, date: 'May 30 (Sat)', time: '12:30 PM - 1:00 PM', name: 'Papi Bion Syrup', dose: '2 ml (Once daily supplement)', notes: '', completed: false },
  { id: 58, date: 'May 30 (Sat)', time: '1:30 PM - 2:00 PM', name: 'ImmunoCare Syrup', dose: '3 ml (Once daily supplement)', notes: '', completed: false }
];

const elements = {
  tableBody: document.querySelector('#task-table tbody'),
  saveButton: document.querySelector('#save-progress'),
  saveStatus: document.querySelector('#save-status'),
  taskCount: document.querySelector('#task-count'),
  completedCount: document.querySelector('#completed-count'),
  resetButton: document.querySelector('#reset-progress'),
  settingsToggle: document.querySelector('#settings-toggle'),
  settingsPanel: document.querySelector('#settings-panel'),
  settingsClose: document.querySelector('#settings-close'),
  inputToken: document.querySelector('#github-token'),
  inputRepo: document.querySelector('#github-repo'),
  inputPath: document.querySelector('#github-path'),
  inputBranch: document.querySelector('#github-branch')
};

let tasks = [];
let settings = {};

function loadFromLocalStorage() {
  const savedTasks = localStorage.getItem(STORAGE_KEYS.tasks);
  const savedSettings = localStorage.getItem(STORAGE_KEYS.settings);

  tasks = savedTasks ? JSON.parse(savedTasks) : [...DEFAULT_TASKS];
  settings = savedSettings ? JSON.parse(savedSettings) : { ...DEFAULT_SETTINGS };
}

function persistTasks() {
  localStorage.setItem(STORAGE_KEYS.tasks, JSON.stringify(tasks));
}

function persistSettings() {
  localStorage.setItem(STORAGE_KEYS.settings, JSON.stringify(settings));
}

function updateSummary() {
  const total = tasks.length;
  const completed = tasks.filter(task => task.completed).length;
  elements.taskCount.textContent = `${total} items`;
  elements.completedCount.textContent = `${completed} completed`;
}

function renderTasks() {
  elements.tableBody.innerHTML = '';

  let currentDate = null;
  tasks.forEach(task => {
    if (task.date !== currentDate) {
      currentDate = task.date;
      const dateRow = document.createElement('tr');
      dateRow.className = 'date-group-row';
      dateRow.innerHTML = `<td colspan="5">${task.date}</td>`;
      elements.tableBody.appendChild(dateRow);
    }

    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${task.time}</td>
      <td>${task.name}</td>
      <td>${task.dose}</td>
      <td>${task.notes || '—'}</td>
      <td class="checkbox-cell"><input type="checkbox" data-id="${task.id}" ${task.completed ? 'checked' : ''}></td>
    `;
    elements.tableBody.appendChild(row);
  });

  elements.tableBody.querySelectorAll('input[type="checkbox"]').forEach(input => {
    input.addEventListener('change', event => {
      const id = Number(event.target.dataset.id);
      const item = tasks.find(task => task.id === id);
      if (!item) return;
      item.completed = event.target.checked;
      persistTasks();
      updateSummary();
      showStatus('Progress saved locally. Tap Save Progress to publish to GitHub.');
    });
  });
}

function showStatus(message, isError = false) {
  elements.saveStatus.textContent = message;
  elements.saveStatus.style.color = isError ? '#b91c1c' : '#0f172a';
}

function applySettingsToInputs() {
  elements.inputToken.value = settings.token || '';
  elements.inputRepo.value = settings.repo || '';
  elements.inputPath.value = settings.path || DEFAULT_SETTINGS.path;
  elements.inputBranch.value = settings.branch || DEFAULT_SETTINGS.branch;
}

function readSettingsFromInputs() {
  settings.token = elements.inputToken.value.trim();
  settings.repo = elements.inputRepo.value.trim();
  settings.path = elements.inputPath.value.trim() || DEFAULT_SETTINGS.path;
  settings.branch = elements.inputBranch.value.trim() || DEFAULT_SETTINGS.branch;
  persistSettings();
}

function toggleSettingsPanel() {
  elements.settingsPanel.classList.toggle('hidden');
}

function encodeBase64(str) {
  return btoa(unescape(encodeURIComponent(str)));
}

async function getExistingFileSha() {
  const repo = settings.repo;
  const branch = settings.branch || DEFAULT_SETTINGS.branch;
  if (!repo) {
    throw new Error('Repository name is required.');
  }

  const url = `https://api.github.com/repos/${repo}/contents/${encodeURIComponent(settings.path)}?ref=${encodeURIComponent(branch)}`;
  const response = await fetch(url, {
    headers: {
      Authorization: `token ${settings.token}`,
      Accept: 'application/vnd.github+json'
    }
  });

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Could not check existing file: ${response.status} ${errorText}`);
  }

  const data = await response.json();
  return data.sha;
}

async function saveToGitHub() {
  if (!settings.token) {
    throw new Error('GitHub token is required.');
  }
  if (!settings.repo) {
    throw new Error('GitHub repository is required.');
  }

  const content = {
    savedAt: new Date().toISOString(),
    tasks
  };
  const jsonText = JSON.stringify(content, null, 2);
  const encoded = encodeBase64(jsonText);
  const sha = await getExistingFileSha();

  const body = {
    message: `Save tracker progress: ${new Date().toLocaleString()}`,
    content: encoded,
    branch: settings.branch || DEFAULT_SETTINGS.branch
  };

  if (sha) {
    body.sha = sha;
  }

  const url = `https://api.github.com/repos/${settings.repo}/contents/${encodeURIComponent(settings.path)}`;
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      Authorization: `token ${settings.token}`,
      Accept: 'application/vnd.github+json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    throw new Error(errorData?.message || `GitHub save failed with status ${response.status}`);
  }
}

async function handleSaveProgress() {
  persistTasks();
  readSettingsFromInputs();
  showStatus('Saving to GitHub...', false);
  try {
    await saveToGitHub();
    showStatus('Saved to GitHub successfully.');
  } catch (error) {
    showStatus(`GitHub save failed: ${error.message}`, true);
  }
}

function handleResetProgress() {
  if (!confirm('Restore default progress and clear local saved state?')) {
    return;
  }
  tasks = [...DEFAULT_TASKS];
  persistTasks();
  renderTasks();
  updateSummary();
  showStatus('Local progress reset.');
}

function wireEvents() {
  elements.saveButton.addEventListener('click', handleSaveProgress);
  elements.resetButton.addEventListener('click', handleResetProgress);
  elements.settingsToggle.addEventListener('click', () => {
    toggleSettingsPanel();
  });
  elements.settingsClose.addEventListener('click', () => {
    toggleSettingsPanel();
  });

  [
    elements.inputToken,
    elements.inputRepo,
    elements.inputPath,
    elements.inputBranch
  ].forEach(input => {
    input.addEventListener('input', () => {
      readSettingsFromInputs();
      showStatus('Settings updated locally.');
    });
  });
}

function init() {
  loadFromLocalStorage();
  applySettingsToInputs();
  renderTasks();
  updateSummary();
  wireEvents();
}

init();
