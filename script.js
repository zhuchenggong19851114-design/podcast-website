// 播客数据
const episodes = [
  {
    id: "ep001",
    title: "EP001 - OpenAI GPT-5.5与中国AI崛起",
    date: "2026-04-25",
    description: "AI竞争主战场转移：OpenAI发布GPT-5.5效率革命、中国大模型调用量超越美国、腾讯网易Agent应用大爆发。",
    audioUrl: "/episodes/ep001.mp3",
    duration: "07:04"
  }
];

// 格式化日期
function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// 渲染节目列表
function renderEpisodes() {
  const container = document.getElementById('episode-list');
  
  if (episodes.length === 0) {
    container.innerHTML = '<p>暂无节目，敬请期待！</p>';
    return;
  }

  container.innerHTML = episodes.map(ep => `
    <div class="episode-card">
      <h3 class="episode-title">${ep.title}</h3>
      <p class="episode-date">📅 ${formatDate(ep.date)} | ⏱ ${ep.duration}</p>
      <p class="episode-desc">${ep.description}</p>
      <audio controls class="audio-player">
        <source src="${ep.audioUrl}" type="audio/mpeg">
        您的浏览器不支持音频播放
      </audio>
    </div>
  `).join('');
}

// 页面加载完成后渲染
document.addEventListener('DOMContentLoaded', renderEpisodes);