// 运行时从 episodes.json 加载数据，不再 embedding
let episodes = [];

function formatDate(d) {
  const [y, m, day] = d.split('-');
  return `${y}年${parseInt(m)}月${parseInt(day)}日`;
}

function renderEpisodes() {
  const container = document.getElementById('episode-list');
  if (!container) return;

  if (episodes.length === 0) {
    container.innerHTML = '<p style="text-align:center;padding:4rem;color:var(--text-muted)">暂无节目，敬请期待！</p>';
    return;
  }

  var statEl = document.getElementById('stat-episodes');
  if (statEl) statEl.textContent = episodes.length;
  var countEl = document.getElementById('ep-count');
  if (countEl) countEl.textContent = episodes.length + ' 期';

  episodes.slice().reverse().forEach(function(ep) {
    var card = document.createElement('div');
    card.className = 'episode-card';
    card.style.opacity = '0';
    card.style.transform = 'translateY(16px)';

    var coverWrap = document.createElement('div');
    coverWrap.className = 'ep-cover-wrap';
    if (ep.cover) {
      var img = document.createElement('img');
      img.className = 'ep-cover';
      img.src = ep.cover;
      img.alt = ep.title;
      img.loading = 'lazy';
      coverWrap.appendChild(img);
    }

    var body = document.createElement('div');
    body.className = 'episode-body';

    var metaRow = document.createElement('div');
    metaRow.className = 'ep-meta-row';
    var epNum = ep.id.toUpperCase().replace('EP', 'EP ');
    metaRow.innerHTML = '<span class="ep-number">' + epNum + '</span><span class="ep-date">' + formatDate(ep.date) + '</span>' + (ep.duration ? '<span class="ep-duration">' + ep.duration + '</span>' : '');

    var titleEl = document.createElement('h3');
    titleEl.className = 'ep-title';
    titleEl.textContent = ep.title;

    body.appendChild(metaRow);
    body.appendChild(titleEl);

    if (ep.description) {
      var descEl = document.createElement('p');
      descEl.className = 'ep-desc';
      descEl.textContent = ep.description;
      body.appendChild(descEl);
    }

    if (ep.shownotes) {
      var snDiv = document.createElement('div');
      snDiv.className = 'ep-footer';
      snDiv.innerHTML = '<details class="shownotes"><summary>Show Notes</summary><div class="shownotes-content">' + ep.shownotes.replace(/\n/g, '<br>') + '</div></details>';
      body.appendChild(snDiv);
    }

    if (ep.audioUrl) {
      var audioDiv = document.createElement('div');
      audioDiv.className = 'ep-audio-row';
      audioDiv.innerHTML = '<audio controls><source src="' + ep.audioUrl + '" type="audio/mpeg">您的浏览器不支持音频播放</audio>';
      body.appendChild(audioDiv);
    }

    card.appendChild(coverWrap);
    card.appendChild(body);
    container.appendChild(card);
  });

  // GSAP 动画
  if (typeof gsap !== 'undefined') {
    gsap.to('.brand-eyebrow', { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', delay: 0.1 });
    gsap.to('.brand-title', { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 0.2 });
    gsap.to('.brand-desc', { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', delay: 0.35 });
    gsap.to('.header-meta', { opacity: 1, x: 0, duration: 0.6, ease: 'power3.out', delay: 0.4 });
    gsap.to('.episode-card', { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.06, delay: 0.5 });
  } else {
    document.querySelectorAll('.brand-eyebrow, .brand-title, .brand-desc, .header-meta').forEach(function(el) {
      el.style.opacity = 1;
      el.style.transform = 'none';
    });
    document.querySelectorAll('.episode-card').forEach(function(card) {
      card.style.opacity = 1;
      card.style.transform = 'none';
    });
  }
}

async function init() {
  try {
    const res = await fetch('/episodes.json');
    if (!res.ok) throw new Error('加载失败');
    episodes = await res.json();
  } catch (e) {
    var container = document.getElementById('episode-list');
    if (container) container.innerHTML = '<p style="text-align:center;padding:4rem;color:var(--text-muted)">节目加载失败，请刷新重试</p>';
    console.error(e);
    return;
  }
  renderEpisodes();
}

document.addEventListener('DOMContentLoaded', init);
