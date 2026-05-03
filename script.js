// 播客数据
const episodes = [
  {
    id: "ep013",
    title: "EP013 - 我被自己的AI助手升级了三次，差点回不了家",
    date: "2026-05-03",
    description: "OpenClaw升级踩坑全记录：npm install代替openclaw update、飞书插件独立包、版本跳跃被Hermes代升级、备份的重要性。三条实战经验帮你少走弯路。",
    audioUrl: "/episodes/ep013.mp3",
    duration: "04:36"
  },
  {
    id: "ep012",
    title: "EP012 - AI短剧爆火背后：有人3亿播放一夜归零，有人月入3万闷声发财",
    date: "2026-05-02",
    description: "AI短剧市场爆发：3000块、48小时、3个人，能出80集，播放量5个亿。但有一部AI短剧48小时破3亿播放后一夜被全网下架，8亿播放量归零。本期深入剖析AI短剧的赚钱路径和监管红线。",
    audioUrl: "/episodes/ep012.mp3",
    duration: "09:26"
  },
  {
    id: "ep011",
    title: "EP011 - 花了一天配好的MiniMax Key，这个坑你千万别踩",
    date: "2026-05-01",
    description: "花了一整天就为了搞定一个问题：怎么让 Hermes 正确调用 MiniMax 的月度计划 Key。api\_type 和 base\_url 必须同时改对，缺一个就 401。本期把踩的坑、交的学费全部告诉你。",
    audioUrl: "/episodes/ep011.mp3",
    duration: "05:42"
  },
  {
    id: "ep009",
    title: "EP009_2026-04-29_英伟达9倍效率AI智能体来了，但OpenAI还在为收入发愁",
    date: "2026-04-29",
    description: "英伟达 Nemotron 3 Nano Omni：全模态开源模型让企业级 AI Agent 效率提升 9 倍。同一天 OpenAI 销售额未达预期，概念股全线大跌。两件事合在一起，就是 AI 行业现在的真实状态：技术狂飙，商业磨合。",
    audioUrl: "/episodes/ep009.mp3",
    duration: "04:31"
  },
  {
    id: "ep008",
    title: "EP008_2026-04-28_GPTImage2挑战扩散模型：AI生图战国时代谁主沉浮",
    date: "2026-04-28",
    description: "GPT Image 2 发布，Image Arena 1512分，甩开第二名242分。这期不聊浮夸的「机器替代人类」，聊一个更实在的问题：GPT 官方的一体化生图方案，和 OpenClaw + Stable Diffusion 这类分体式专业架构，到底谁更强？现在谁更好用？未来谁会赢？",
    audioUrl: "/episodes/EP008.mp3",
    duration: "06:00"
  },
  {
    id: "ep007",
    title: "EP007_2026-04-28_AI重磅事件扎堆：北京车展、DeepSeek降价、情感机器人发布",
    date: "2026-04-28",
    description: "过去24小时，AI 领域发生了三件大事：北京车展1451台展车创新高、DeepSeek V4 API 降价90%、卓益得发布情感陪护机器人 Moya。三件看似不相关的事，说的其实是同一个趋势——AI 正在从「能回答问题」全面转向「能进入生活」。",
    audioUrl: "/episodes/EP007.mp3",
    duration: "04:12"
  },
  {
    id: "ep006",
    title: "EP006_2026-04-27_OpenClaw升级踩坑复盘：从以为稳了到差点系统挂掉",
    date: "2026-04-27",
    description: "以为稳了，结果差点挂。这就是我昨天的真实经历。一个自认为很熟悉 OpenClaw 的人，升级了一个版本，以为就是点一下的事。结果——网关起不来，配置报错，插件循环加载，完全停不下来。最后只能回滚到4月23号。这期把踩坑完整复盘一遍。",
    audioUrl: "/episodes/ep006.mp3",
    duration: "06:38"
  },
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

// 格式化日期（使用北京时间）
function formatDate(dateStr) {
  // 如果是纯日期（如 "2026-04-27"），补充时间并强制使用北京时区
  const d = new Date(dateStr.includes('T') ? dateStr : dateStr + 'T00:00:00+08:00');
  return d.toLocaleDateString('zh-CN', {
    timeZone: 'Asia/Shanghai',
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