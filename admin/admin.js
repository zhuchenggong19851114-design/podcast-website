let episodes = [];
let scriptContent = '';
let isLoggedIn = false;

function login() {
  const pw = document.getElementById('password').value;
  if (!pw) return;
  const btn = document.querySelector('.login-btn');
  btn.textContent = '登录中...';
  fetch('/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ password: pw })
  }).then(r => r.json()).then(data => {
    btn.textContent = '登录';
    if (data.ok) {
      isLoggedIn = true;
      document.getElementById('login-screen').style.display = 'none';
      document.getElementById('main-screen').style.display = 'block';
      loadData();
    } else {
      document.getElementById('login-error').textContent = data.error || '密码错误';
    }
  }).catch(() => {
    btn.textContent = '登录';
    document.getElementById('login-error').textContent = '连接失败，请先启动服务';
  });
}

function loadData() {
  fetch('/api', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action: 'load', password: 'xiachuang2026' })
  }).then(r => r.json()).then(data => {
    episodes = data.episodes.episodes || [];
    scriptContent = data.script;
    renderEpisodes();
  }).catch(e => {
    console.error(e);
    alert('加载数据失败: ' + e.message);
  });
}

function renderEpisodes() {
  const list = document.getElementById('episode-list');
  list.innerHTML = episodes.map((ep, i) => `
    <div class="ep-card">
      <div class="ep-header">
        <h3>${ep.id} - ${ep.title}</h3>
        <div class="ep-actions">
          <button onclick="editEpisode(${i})">编辑</button>
          <button onclick="deleteEpisode(${i})">删除</button>
        </div>
      </div>
      <p class="ep-meta">📅 ${ep.date} | ⏱ ${ep.duration || 'N/A'} | 💾 ${(ep.size/1024/1024).toFixed(1)}MB</p>
      ${ep.cover ? `<img src="${ep.cover}" class="ep-cover-thumb" referrerPolicy="no-referrer" onerror="this.style.display='none'" />` : ''}
      <p class="ep-desc">${(ep.description || '').slice(0, 100)}...</p>
    </div>
  `).join('');
}

function editEpisode(i) {
  const ep = episodes[i];
  document.getElementById('edit-id').value = ep.id;
  document.getElementById('edit-title').value = ep.title;
  document.getElementById('edit-desc').value = ep.description || '';
  document.getElementById('edit-cover').value = ep.cover || '';
  document.getElementById('edit-date').value = ep.date;
  document.getElementById('edit-audio').value = ep.audioUrl || '';
  document.getElementById('edit-size').value = ep.size || '';
  document.getElementById('edit-index').value = i;
  document.getElementById('edit-modal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('edit-modal').style.display = 'none';
}

function saveEpisode() {
  const i = parseInt(document.getElementById('edit-index').value);
  episodes[i] = {
    ...episodes[i],
    id: document.getElementById('edit-id').value,
    title: document.getElementById('edit-title').value,
    description: document.getElementById('edit-desc').value,
    cover: document.getElementById('edit-cover').value,
    date: document.getElementById('edit-date').value,
    audioUrl: document.getElementById('edit-audio').value,
    size: parseInt(document.getElementById('edit-size').value) || 0
  };
  renderEpisodes();
  closeModal();
  saveAll();
}

function deleteEpisode(i) {
  if (!confirm(`确认删除 ${episodes[i].id}？`)) return;
  episodes.splice(i, 1);
  renderEpisodes();
  saveAll();
}

function saveAll() {
  const payload = {
    action: 'save',
    password: 'xiachuang2026',
    data: { episodes: { episodes }, script: scriptContent }
  };
  fetch('/api', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  }).then(r => r.json()).then(d => {
    if (d.ok) showToast('已保存到本地文件');
    else showToast('保存失败: ' + (d.error || ''));
  }).catch(e => showToast('保存失败: ' + e.message));
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.style.opacity = '1';
  setTimeout(() => { t.style.opacity = '0'; }, 3000);
}

document.addEventListener('DOMContentLoaded', () => {
  // Try auto login
  fetch('/api', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action: 'load', password: 'xiachuang2026' })
  }).then(r => r.json()).then(data => {
    if (data.episodes) {
      isLoggedIn = true;
      document.getElementById('login-screen').style.display = 'none';
      document.getElementById('main-screen').style.display = 'block';
      episodes = data.episodes.episodes || [];
      scriptContent = data.script;
      renderEpisodes();
    }
  }).catch(() => {});
});
