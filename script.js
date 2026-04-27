// 播客数据
const episodes = [
  {
    id: "ep005",
    title: "EP005 - 算力战争新格局：CPU崛起与DeepSeek融资背后的AI变局",
    date: "2026-04-27",
    description: "英特尔CPU暴涨23.6%、DeepSeek百亿美元融资，两件看似不相关的事背后是同一个信号：算力正在被重新定价。AI计算正从云端GPU一家独大走向云边端协同的混合架构，端侧AI是下一个大机会。",
    audioUrl: "/episodes/EP005.mp3",
    duration: "05:41"
  },
  {
    id: "ep004",
    title: "EP004 - OpenClaw的记忆机制：AI是如何记住一切的",
    date: "2026-04-26",
    description: "AI记忆经历了三个阶段：关键词搜索、QMD存储、向量语义搜索。OpenClaw引入本地向量模型，实现语义理解，不仅支撑单Agent连续对话，还支撑多Agent协作与信息共享。",
    audioUrl: "/episodes/EP004.mp3",
    duration: "05:13"
  },
  {
    id: "ep003",
    title: "EP003 - DeepSeek-V4与人形机器人闪电：AI爆发的两记重拳",
    date: "2026-04-26",
    description: "DeepSeek V4 发布：100万 Token 超长上下文、架构颠覆性改进、推理效率大幅提升。人形机器人闪电打破人类半程马拉松世界纪录。两件事合在一起，构成 AI 从「回答问题」全面转向「替我完成任务」的明确信号。",
    audioUrl: "/episodes/EP003.mp3",
    duration: "04:55"
  },
  {
    id: "ep002",
    title: "EP002 - DeepSeek-V4与人形机器人背后的AI变局",
    date: "2026-04-25",
    description: "DeepSeek V4 百万 Token 超长上下文开源，人形机器人具身智能达专业水准，Anthropic Managed Agents 务实路线。三件事合在一起，透露AI从工具变劳动力的信号。",
    audioUrl: "/episodes/ep002.mp3",
    duration: "05:58"
  },
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