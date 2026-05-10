// 播客数据
const episodes = [
  {
    id: "ep022",
    size: 4889508,
    title: "EP022 - AI大政府时代：监管、资本、地缘三重变局同时到来",
    date: "2026-05-10",
    description: "国内AI影视三道监管重磅落地、DeepSeek首次大规模宕机、Anthropic年化营收300亿美金估值1.2万亿——这三件事同时发生，指向同一个方向：AI行业的底层逻辑正在被改写。",
    audioUrl: "/episodes/ep022.mp3",
    cover: "https://daikexing.work/episodes/covers/ai_22.jpg",
    shownotes: `🎙️ 本期主题：AI大政府时代——监管、资本、地缘三重变局同时到来

三个新闻同时发生，指向同一个方向：AI行业正在被政府深度接管。

📰 核心要点：
- 国内AI影视赛道三道监管重磅落地，2026年7月15日起全面生效，野蛮生长时代结束
- DeepSeek 5月8日首次大规模宕机，暴露国产AI应用生态的「单点依赖」脆弱性
- Anthropic年化营收突破300亿美金、估值1.2万亿，但被美国内部监管派系斗争困扰
- 马斯克xAI并入SpaceX，2500亿美元估值的独角兽说没就没，算力整合时代开启

━━━━━━━

💡 核心观点
监管在收紧，宕机在提醒，整合在加速。AI行业进入新阶段：不再是技术说了算，不再是资本说了算，而是规则说了算。

❌ 常见误区
• 以为监管离自己很远 → 实际上已经在身边
• 以为模型厂商的免费/低价是理所当然 → 泡沫正在显现

✅ 总结
美国的不确定性，反而给了国内玩家一个难得的时间窗口。这个窗口能持续多久，取决于国内玩家能不能快速补上合规和韧性这两课。`
  },
  {
    id: "ep018",
    size: 5255808,
    title: "EP018 - AI 三国杀：Agent 崛起、Cost 崩塌、监管元年",
    date: "2026-05-08",
    description: "GPT-5.5、SWE-Bench Pro 58.6%、Gemini 3.1 Ultra 200万Token上下文、Agent 365全面上市——三件事同一周，OpenAI、Google、Microsoft同时宣布AI Agent时代来临。DeepSeek估值450亿，Gemini Flash-Lite降到2毛5每百万Token，推理成本指数级崩塌。中国实施全球首个AI裁员限制法规。三件事合在一起：AI游戏规则正在被重写。",
    audioUrl: "/episodes/ep018.mp3",
    cover: "https://daikexing.work/episodes/covers/ai_18.jpg",
    shownotes: `🎙️ 本期主题：AI三国杀——Agent崛起、Cost崩塌、监管元年

三件事，同一周。

第一，OpenAI发了GPT-5.5，Google发了Gemini 3.1 Ultra，Microsoft把Agent 365全面上市——三个巨头干了同一件事：把AI Agent从概念推进了实用。

第二，DeepSeek融资估值干到450亿，Gemini Flash-Lite降到2毛5一百万token——推理成本在崩塌，而且崩得比预期的还快。

第三，中国开始限制AI裁员了。全球第一个用法规管AI就业冲击的国家。

━━━━━━━

📰 核心要点

🔹 Agent时代真的来了
→ GPT-5.5 SWE-Bench Pro 58.6%：AI能独立完成完整bug修复流程
→ Gemini 3.1 Ultra：200万token上下文，原生多模态
→ Agent 365：AI直接集成进Office全家桶，从助手到员工

🔹 成本在指数级崩塌
→ DeepSeek V4：百万token上下文极具竞争力
→ Gemini Flash-Lite：2毛5一百万token
→ 当AI成本低于雇佣兼职实习生，整个商业逻辑要重写

🔹 监管正式下场
→ 中国：全球首个限制AI裁员法规
→ Google、Microsoft、xAI同意让美国政府审查新模型
→ DeepMind创始人拿11亿美元，目标是不依赖人类数据的AI

━━━━━━━

💡 核心观点

当所有人都能用到顶级AI的时候，差异化在哪里？

答案：在对行业的理解，在对场景的深耕，在能不能用AI解决一个真实的、具体的问题。

✅ 总结

AI不再是一个"会不会替代人类"的远期话题，而是一个"已经在重写商业规则、社会规则"的当下事实。`,
    cover: "https://daikexing.work/episodes/covers/ai_18.jpg",
    duration: "08:27"
  },

  {
    id: "ep015",
    size: 6207597,
    title: "EP015 - 多Agent协作的四种模式，听这一篇就够了",
    date: "2026-05-05",
    description: "AI工具越来越多，但多AI协作总是乱成一锅粥。Hermes框架总结出四种协作模式：看板协作、群聊话题、并行调度、Cron串联。听完你就知道什么时候让AI串行、并行、自动化还是实时讨论。",
    audioUrl: "/episodes/ep015.mp3",
    shownotes: `🎙️ 本期主题：多Agent协作的四种模式

你有没有这种感觉——AI工具越来越多，但每次让多个AI一起干活，总是乱成一锅粥？同一个任务A做一遍B再做一遍，最后谁也不知道哪个是最终版。

这不是AI的问题，是协作模式的问题。

🤖 Hermes框架把多AI协作总结成四种模式：

━━━━━━━

🔹 模式一：看板协作
→ 任务像卡片在几个阶段之间流转：调研 → 分析 → 写报告 → 审核
→ 核心：有上下游依赖、结构清晰的任务
→ 适合：竞品分析报告、正式项目分析

🔹 模式二：群聊话题
→ 多个Bot在同一个群里，每个Bot只管自己话题下的事
→ 核心：边界模糊、需要多角色并存、实时讨论
→ 适合：产品策略头脑风暴、新项目方向讨论

🔹 模式三：并行调度
→ 主Agent一次性调起多个子Agent，同时开工，最后汇总
→ 核心：有明确终点的一次性任务
→ 适合：竞品分析、市场调研、批量内容生产

🔹 模式四：Cron串联
→ 定时触发，Job之间通过文件传递输出
→ 核心：每日例行报告、自动化流水线
→ 适合：日报推送、定期市场监测

━━━━━━━

💡 核心认知
多AI协作的核心不是"让AI们聊天"，而是设计一套让AI们有序工作的规则。

❌ 常见误区
• 让AI们自己商量 → 会乱
• 没有明确终点还用并行 → 白跑
• 任务边界不清晰用看板 → 会卡住

✅ 记住这个选择框架
什么时候串行？→ 有上下游依赖
什么时候并行？→ 有明确终点
什么时候自动化？→ 每日例行
什么时候实时讨论？→ 边界模糊、探索性工作`,
    cover: "https://daikexing.work/episodes/covers/ai_15.jpg",
    cover: "https://daikexing.work/episodes/covers/ai_15.jpg",
    duration: "06:27",
    shownotes: `🎙️ 本期重点

四个协作模式适用场景：
• 看板协作 → 有上下游依赖的正式项目（调研→分析→写作→审核）
• 群聊话题 → 边界模糊的探索性工作（产品策略头脑风暴）
• 并行调度 → 有明确终点的一次性任务（竞品分析、市场调研）
• Cron串联 → 每日例行报告、自动化流水线（日报推送）

💡 核心认知
多AI协作的核心不是"让AI们聊天"，而是设计一套让AI们有序工作的规则。

❌ 常见误区
• 让AI们自己商量 → 会乱
• 没有明确终点还用并行 → 白跑
• 任务边界不清晰用看板 → 会卡住

📌 记住这个选择框架
串行？并行？自动化？实时讨论？
——答案取决于任务有没有终点、边界清不清晰、要不要即时响应。`
  },
  {
    id: "ep014",
    title: "EP014 - AI在狂奔，但安全正在被甩在身后",
    date: "2026-05-04",
    description: "五角大楼与7家AI公司合作部署AI到机密网络，同一天人形机器人登上上海大剧院舞台。Hinton警告：全球只有1%的AI研究在做安全。为什么安全总是被甩在身后？",
    audioUrl: "/episodes/ep014.mp3",
    size: 2868432,
    size: 2868432,
    shownotes: `🎙️ 本期主题：AI狂奔，安全被甩在身后

📰 三件大事同一天发生：

🔹 五角大楼 + 7家AI公司
→ AI进入美国机密网络，这是AI在军事领域的历史性一步

🔹 人形机器人登上上海大剧院舞台
→ 具身智能进入公众视野

🔹 Hinton发出警告
→ 全球只有1%的AI研究在做安全
→ 4.8万亿美元的市场在狂奔，没人愿意踩刹车

━━━━━━━

⚠️ 为什么安全总被甩在身后？
• 安全研究周期长、成果难量化
• 安全不直接产生商业价值
• 监管永远赶不上技术迭代

🤖 具身智能为什么特别危险？
物理世界和数字世界不同——AI一旦有了身体，错误决策的代价是物理性的。机器人撞到人、无人车出事，这不是算法错误，这是真实伤害。

💡 核心观点
技术狂飙时，安全是唯一的刹车片。如果没人踩，它就形同虚设。`,
    cover: "https://daikexing.work/episodes/covers/ai_14.jpg",
    cover: "https://daikexing.work/episodes/covers/ai_14.jpg",
    duration: "04:36",
    shownotes: `🎙️ 本期重点

本期围绕三个核心事件：
1. 五角大楼 + 7家AI公司 → AI进入机密网络
2. 人形机器人登台上海大剧院 → 具身智能加速
3. Hinton警告 → 1%的AI研究在做安全

⚠️ 为什么安全总被甩在身后？
• 安全研究周期长、成果难量化
• 安全不直接产生商业价值
• 4.8万亿美元的市场在狂奔，没人愿意踩刹车

🤖 具身智能为什么特别危险？
物理世界和数字世界不同——AI一旦有了身体，错误决策的代价是物理性的。

💡 核心观点
技术狂飙时，安全是唯一的刹车片。如果没人踩，它就形同虚设。`
  },
  {
    id: "ep013",
    title: "EP013 - 我被自己的AI助手升级了三次，差点回不了家",
    date: "2026-05-03",
    description: "OpenClaw升级踩坑全记录：npm install代替openclaw update、飞书插件独立包、版本跳跃被Hermes代升级、备份的重要性。三条实战经验帮你少走弯路。",
    audioUrl: "/episodes/ep013.mp3",
    size: 3137352,
    size: 3137352,
    shownotes: `🎙️ 本期主题：OpenClaw升级踩坑全记录

😤 完整翻车过程：
以为很熟 → 以为点一下就完事 → 
网关起不来 → 配置报错 → 插件循环加载 → 完全停不下来 → 回滚

━━━━━━━

❌ 坑1：命令写错
以为 openclaw update 是官方推荐方式，结果根本不是

❌ 坑2：飞书插件独立包
每次升级主程序，插件需要单独处理，容易遗漏

❌ 坑3：版本跳跃
中间跳过了几个版本，被Hermes自动代升级，完全失控

━━━━━━━

✅ 三条实战经验

经验1：升级前先看官方文档，别凭记忆操作
经验2：重要升级前一定要备份（配置文件+插件）
经验3：遇到问题先看日志，日志会告诉你哪里报错

💡 最重要的一条
备份备份备份。重要的事情说三遍。`,
    cover: "https://daikexing.work/episodes/covers/ai_13.jpg",
    cover: "https://daikexing.work/episodes/covers/ai_13.jpg",
    duration: "05:05",
    shownotes: `🎙️ 踩坑全记录

❌ 坑1：命令写错
以为点一下就完事，结果 openclaw update 根本不是官方推荐方式

❌ 坑2：飞书插件独立包
每次升级都要单独处理飞书插件，容易遗漏

❌ 坑3：版本跳跃
中间跳过了几个版本，被 Hermes 自动代升级，完全失控

✅ 三条实战经验

经验1：升级前先看官方文档，别凭记忆操作
经验2：重要升级前一定要备份（至少备份配置文件）
经验3：遇到升级问题，先看日志，日志会告诉你哪里报错

💡 最重要的一条
备份备份备份。重要的事情说三遍。`
  },
  {
    id: "ep012",
    title: "EP012 - AI短剧爆火背后：有人3亿播放一夜归零，有人月入3万闷声发财",
    date: "2026-05-02",
    description: "AI短剧市场爆发：3000块、48小时、3个人，能出80集，播放量5个亿。但有一部48小时破3亿播放后一夜下架，8亿播放量归零。深入剖析赚钱路径和监管红线。",
    audioUrl: "/episodes/ep012.mp3",
    size: 5315784,
    size: 5315784,
    shownotes: `🎙️ 本期主题：AI短剧，有人3亿播放一夜归零

📊 AI短剧现状
• 制作成本：3000块、48小时、3个人、80集
• 播放量：最高5个亿
• 但：有人48小时破3亿播放后一夜下架，8亿播放量归零

━━━━━━━

💰 赚钱路径
1. 平台分成（按播放量）
2. 付费解锁（单集/全套）
3. 广告植入
4. IP衍生（周边、授权）

⚠️ 监管红线（踩过的坑）
• 内容审核：擦边内容容易被下架
• 版权问题：AI生成内容的版权归属仍模糊
• 一夜归零：违规内容所有播放量清零

✅ 闷声发财的人做对了什么？
合规前提下专注内容质量，不碰擦边，长期积累用户。

💡 核心观察
AI短剧是内容创业的低门槛赛道，但监管红线比想象中近。`,
    cover: "https://daikexing.work/episodes/covers/ai_12.jpg",
    cover: "https://daikexing.work/episodes/covers/ai_12.jpg",
    duration: "09:26",
    shownotes: `🎙️ 本期重点

📊 AI短剧现状
• 制作成本：3000块、48小时、3个人、80集
• 播放量：最高5个亿
• 但：有人一夜归零（违规下架）

💰 赚钱路径
1. 平台分成（按播放量）
2. 付费解锁（单集/全套）
3. 广告植入
4. IP衍生（周边、授权）

⚠️ 监管红线（踩过的坑）
• 内容审核：擦边内容容易被下架
• 版权问题：AI生成内容的版权归属仍模糊
• 一夜归零：违规内容所有播放量清零，之前赚的也可能被追回

💡 闷声发财的人做对了什么？
合规前提下专注内容质量，不碰擦边，长期积累用户。`
  },
  {
    id: "ep011",
    title: "EP011 - 花了一天配好的MiniMax Key，这个坑你千万别踩",
    date: "2026-05-01",
    description: "花了一整天搞定一个问题：怎么让Hermes正确调用MiniMax月度计划Key。api_type和base_url必须同时改对，缺一个就401。踩坑实录。",
    audioUrl: "/episodes/ep011.mp3",
    size: 2098269,
    size: 2098269,
    shownotes: `🎙️ 本期主题：MiniMax Key配置踩坑实录

😤 折腾了一整天，就为了搞定一个问题：
怎么让Hermes正确调用MiniMax月度计划Key

━━━━━━━

❌ 错误做法
只改 api_type 或只改 base_url，缺一个 → 401报错

✅ 正确做法（两个必须同时改）
• api_type = 'minimax'（月度计划类型）
• base_url = 'https://api.minimax.chat'（注意不是通用API地址）

💡 经验总结
调用月度计划Key和普通API Key的endpoint不同。api_type和base_url必须同时匹配，很多人踩在这个坑上。一整天就交学费了。`,
    cover: "https://daikexing.work/episodes/covers/ai_11.jpg",
    cover: "https://daikexing.work/episodes/covers/ai_11.jpg",
    duration: "05:42",
    shownotes: `🎙️ 踩坑实录

❌ 错误做法
只改 api_type 或只改 base_url，缺一个 → 401报错

✅ 正确做法
两个必须同时改对：
• api_type = 'minimax'（或对应的月度计划类型）
• base_url = 'https://api.minimax.chat'（注意不是通用API地址）

💡 经验总结
调用月度计划Key和普通API Key的endpoint不同，很多人踩在这个坑上。一整天就交学费了。`
  },
  {
    id: "ep009",
    title: "EP009 - 英伟达9倍效率AI智能体来了，但OpenAI还在为收入发愁",
    date: "2026-04-29",
    description: "英伟达Nemotron 3 Nano Omni：全模态开源模型让企业级AI Agent效率提升9倍。同一天OpenAI销售额未达预期，概念股全线大跌。两件事合在一起，就是AI行业现在的真实状态：技术狂飙，商业磨合。",
    audioUrl: "/episodes/ep009.mp3",
    size: 2832936,
    size: 2832936,
    shownotes: `🎙️ 本期主题：英伟达9倍效率AI Agent vs OpenAI收入困境

📈 英伟达：技术狂飙
• Nemotron 3 Nano Omni
• 全模态开源模型
• 企业级AI Agent效率提升9倍

📉 OpenAI：商业磨合
• 销售额未达预期
• 概念股全线大跌

━━━━━━━

💡 两件事合在一起看
AI行业现在的真实状态：技术跑得比商业快。

• 效率提升得比收入稳
• 开源模型在追赶闭源模型
• 算力红利在重新分配

这就好比：修路的人还没收到钱，路上已经跑车了。`,
    cover: "https://daikexing.work/episodes/covers/ai_09.jpg",
    cover: "https://daikexing.work/episodes/covers/ai_09.jpg",
    duration: "04:31",
    shownotes: `🎙️ 本期重点

📈 英伟达：技术狂飙
• Nemotron 3 Nano Omni
• 全模态开源模型
• 企业级AI Agent效率提升9倍

📉 OpenAI：商业磨合
• 销售额未达预期
• 概念股全线大跌

💡 两件事合在一起看
AI行业现在的真实状态：技术跑得比商业快，效率提升得比收入稳。`
  },
  {
    id: "ep008",
    title: "EP008 - GPT Image 2挑战扩散模型：AI生图战国时代谁主沉浮",
    date: "2026-04-28",
    description: "GPT Image 2发布，Image Arena 1512分甩开第二名242分。这期不聊浮夸的「机器替代人类」，聊GPT官方一体化方案和OpenClaw+Stable Diffusion分体式架构，到底谁更强。",
    audioUrl: "/episodes/EP008.mp3",
    size: 3693912,
    shownotes: `🎙️ 本期主题：GPT Image 2挑战扩散模型

🏆 GPT Image 2战绩
• Image Arena 1512分
• 甩开第二名242分
• 官方一体化方案

⚖️ 两个路线的对比

GPT官方一体化方案
→ 优点：接入简单、调教容易
→ 缺点：定制化有限、依赖云端

OpenClaw + Stable Diffusion
→ 优点：高度定制、专业控制
→ 缺点：配置复杂、门槛高

━━━━━━━

💡 谁会赢？
短期：GPT官方赢在体验
长期：开源分体式赢在灵活性

——就像iPhone和Android的关系：iPhone赢体验，Android赢开放性。`,
    cover: "https://daikexing.work/episodes/covers/ai_08.jpg",
    cover: "https://daikexing.work/episodes/covers/ai_08.jpg",
    duration: "06:00",
    shownotes: `🎙️ 本期重点

🏆 GPT Image 2战绩
• Image Arena 1512分
• 甩开第二名242分

⚖️ 一体化 vs 分体式

GPT官方一体化方案：
优点：接入简单、调教容易
缺点：定制化有限

OpenClaw + Stable Diffusion：
优点：高度定制、专业控制
缺点：配置复杂、门槛高

💡 谁会赢？
短期：GPT官方赢在体验
长期：开源分体式赢在灵活性
——就像iPhone和Android的关系。`
  },
  {
    id: "ep007",
    title: "EP007 - AI重磅事件扎堆：北京车展、DeepSeek降价、情感机器人发布",
    date: "2026-04-28",
    description: "过去24小时三件大事：北京车展1451台展车创新高、DeepSeek V4 API降价90%、情感陪护机器人Moya发布。三件看似不相关的事，说的是同一个趋势——AI正在从「能回答问题」全面转向「能进入生活」。",
    audioUrl: "/episodes/EP007.mp3",
    size: 2634576,
    shownotes: `🎙️ 本期主题：AI三件事，同一个信号

🚗 北京车展：1451台展车创新高
→ 车里有多少AI？从辅助驾驶到智能座舱，AI正在重塑汽车

💰 DeepSeek V4 API降价90%
→ AI调用成本进入白菜价时代
→ 调用量突破中美，意味着应用层开始爆发

🤖 情感陪护机器人Moya发布
→ AI开始进入物理世界 + 情感交互
→ 继工业机器人、服务机器人之后，情感机器人登场

━━━━━━━

💡 共同信号
AI正在从「能回答问题」全面转向「能进入生活」：
• 你的手机、车、家
• 你的工作流
• 你的物理世界

三个不同赛道，同一个底层逻辑：AI从数字世界渗透到物理世界。`,
    cover: "https://daikexing.work/episodes/covers/ai_07.jpg",
    cover: "https://daikexing.work/episodes/covers/ai_07.jpg",
    duration: "04:12",
    shownotes: `🎙️ 三件大事

🚗 北京车展：1451台展车创新高
→ 车里有多少AI？

💰 DeepSeek V4 API降价90%
→ AI调用成本进入白菜价时代

🤖 情感陪护机器人Moya发布
→ AI开始进入物理世界+情感交互

💡 共同信号
AI正在从「能回答问题」全面转向「能进入生活」：
• 你的手机、车、家
• 你的工作流
• 你的物理世界`
  },
  {
    id: "ep006",
    title: "EP006 - OpenClaw升级踩坑复盘：从以为稳了到差点系统挂掉",
    date: "2026-04-27",
    description: "以为稳了，结果差点挂。自认为很熟悉OpenClaw的人，升级了一个版本，以为就是点一下的事。结果——网关起不来，配置报错，插件循环加载，完全停不下来。最后只能回滚。",
    audioUrl: "/episodes/ep006.mp3",
    size: 4783848,
    shownotes: `🎙️ 本期主题：OpenClaw升级踩坑复盘

😰 完整翻车过程
以为自己很熟 → 以为点一下就完事 →
网关起不来 → 配置报错 → 插件循环加载 → 完全停不下来 → 回滚到4月23号

━━━━━━━

❌ 发生了什么
• openclaw update 不是官方推荐升级方式
• 插件是独立包，升级主程序不等于升级插件
• 版本跳跃太大，配置格式不兼容
• Hermes自动代升级，完全失去控制

✅ 核心教训
1. 升级前一定要看官方文档，不是凭记忆操作
2. 重要升级前一定要备份（配置+插件）
3. 遇到问题先看日志，别瞎猜
4. 不要跨太多版本升级

💡 为什么回滚？
因为没有备份，只能从最稳定的版本重新来。`,
    cover: "https://daikexing.work/episodes/covers/ai_06.jpg",
    cover: "https://daikexing.work/episodes/covers/ai_06.jpg",
    duration: "06:38",
    shownotes: `🎙️ 踩坑复盘

😰 完整翻车过程
以为自己很熟 → 以为点一下就完事 →
网关起不来 → 配置报错 → 插件循环加载 → 完全停不下来 → 回滚

💡 核心教训
• 升级前一定要看官方文档，不是凭记忆操作
• 重要升级前一定要备份（配置+插件）
• 遇到问题先看日志，别瞎猜

⚠️ OpenClaw特殊注意
• 插件是独立包，升级主程序不等于升级插件
• 版本跳跃容易出问题，不要跨太多版本升级`
  },
  {
    id: "ep005",
    title: "EP005 - 算力战争新格局：CPU崛起与DeepSeek融资背后的AI变局",
    date: "2026-04-27",
    description: "英特尔CPU暴涨23.6%、DeepSeek百亿美元融资，两件看似不相关的事背后是同一个信号：算力正在被重新定价。AI计算正从云端GPU一家独大走向云边端协同的混合架构，端侧AI是下一个大机会。",
    audioUrl: "/episodes/EP005.mp3",
    size: 3471720,
    shownotes: `🎙️ 本期主题：算力战争新格局

📈 英特尔CPU暴涨23.6%
→ 端侧算力在崛起
→ 本地大模型运行成为可能

💰 DeepSeek百亿美元融资
→ 算力正在被重新定价
→ 算力格局从"GPU垄断"走向多元化

━━━━━━━

💡 核心信号
算力格局正在重塑：
• 云端GPU一家独大 → 云边端混合架构
• 端侧AI是下一个大机会

🤔 意味着什么？
AI不再只在云上跑。未来你的手机、车、甚至耳机，都可能是AI的载体。

就像云计算改变企业IT一样，端侧AI将改变消费电子。`,
    cover: "https://daikexing.work/episodes/covers/ai_05.jpg",
    cover: "https://daikexing.work/episodes/covers/ai_05.jpg",
    duration: "05:41",
    shownotes: `🎙️ 两件大事

📈 英特尔CPU暴涨23.6%
→ 端侧算力在崛起

💰 DeepSeek百亿美元融资
→ 算力正在被重新定价

💡 核心信号
算力格局正在重塑：
• 云端GPU一家独大 → 云边端混合架构
• 端侧AI是下一个大机会

🤔 意味着什么？
AI不再只在云上跑，未来你的手机、车、甚至耳机，都可能是AI的载体。`
  },
  {
    id: "ep004",
    title: "EP004 - OpenClaw的记忆机制：AI是如何记住一切的",
    date: "2026-04-26",
    description: "OpenClaw的记忆系统经历三个阶段：关键词搜索、QMD存储、向量语义搜索。每一次升级，AI的记忆力都在发生质变——从记流水账到真正理解。本地向量模型实现了语义理解，支撑单Agent连续对话和多Agent协作。",
    audioUrl: "/episodes/EP004.mp3",
    size: 3252300,
    shownotes: `🎙️ 本期主题：OpenClaw的记忆机制

🧠 记忆系统三阶段

① 关键词搜索
→ 只能匹配字面，无法理解语义
→ 比如你问"上次那个升级的问题"，AI可能匹配不到

② QMD存储
→ 结构化存储，但仍然依赖精确匹配
→ 有上下文但缺乏语义理解

③ 向量语义搜索
→ 本地向量模型，语义理解
→ 真正理解你说什么，而不是匹配你打了什么字

━━━━━━━

💡 为什么重要？
语义理解让AI可以：
• 跨对话记忆关键上下文
• 多Agent之间共享信息
• 真正成为"认识你"的助手

这不是技术升级，是AI从"工具"到"助手"的关键一步。`,
    cover: "https://daikexing.work/episodes/covers/ai_04.jpg",
    cover: "https://daikexing.work/episodes/covers/ai_04.jpg",
    duration: "05:13",
    shownotes: `🎙️ 记忆系统三阶段

1️⃣ 关键词搜索
只能匹配字面，无法理解语义

2️⃣ QMD存储
结构化存储，但仍然依赖精确匹配

3️⃣ 向量语义搜索
本地向量模型，语义理解，真正理解你说什么

💡 为什么重要？
语义理解让AI可以：
• 跨对话记忆关键上下文
• 多Agent之间共享信息
• 真正成为"认识你"的助手

这不是技术升级，是AI从"工具"到"助手"的关键一步。`
  },
  {
    id: "ep003",
    title: "EP003 - DeepSeek V4与人形机器人闪电：AI爆发的两记重拳",
    date: "2026-04-26",
    description: "DeepSeek V4发布：100万Token超长上下文、架构颠覆性改进、推理效率大幅提升。人形机器人闪电打破人类半程马拉松世界纪录。两件事合在一起，构成AI从「回答问题」全面转向「替我完成任务」的明确信号。",
    audioUrl: "/episodes/EP003.mp3",
    size: 3104304,
    shownotes: `🎙️ 本期主题：DeepSeek V4与人形机器人闪电

🥊 DeepSeek V4
• 100万Token超长上下文
• 架构颠覆性改进
• 推理效率大幅提升

🏃 人形机器人闪电
• 打破人类半程马拉松世界纪录
• 具身智能进入专业水准

━━━━━━━

💡 合在一起看
AI正在从「能回答问题」全面转向「替我完成任务」：
• 认知能力（DeepSeek V4）→ 能处理超长上下文，完成复杂任务
• 物理能力（人形机器人）→ 能进入物理世界，执行实际操作

两件事同一天发生，不是巧合，是AI发展的两个方向同时在突破。`,
    cover: "https://daikexing.work/episodes/covers/ai_03.jpg",
    cover: "https://daikexing.work/episodes/covers/ai_03.jpg",
    duration: "04:55",
    shownotes: `🎙️ 两记重拳

🥊 DeepSeek V4
• 100万Token超长上下文
• 架构颠覆性改进
• 推理效率大幅提升

🏃 人形机器人闪电
• 打破人类半程马拉松世界纪录
• 具身智能进入专业水准

💡 合在一起看
AI正在从「能回答问题」全面转向「替我完成任务」：
• 认知能力（DeepSeek V4）
• 物理能力（人形机器人）
两者都在快速突破。`
  },
  {
    id: "ep002",
    title: "EP002 - DeepSeek V4与人形机器人背后的AI变局",
    date: "2026-04-25",
    description: "DeepSeek V4百万Token超长上下文开源，人形机器人具身智能达专业水准，Anthropic Managed Agents务实路线。三件事合在一起，透露AI从工具变劳动力的信号。",
    audioUrl: "/episodes/ep002.mp3",
    size: 3793560,
    size: 3793560,
    shownotes: `🎙️ 本期主题：DeepSeek V4与人形机器人背后的AI变局

① DeepSeek V4
• 百万Token超长上下文，开源
• 架构创新，推理效率大幅提升

② 人形机器人
• 具身智能达专业水准
• 不只是能走能跑，而是能在真实世界执行任务

③ Anthropic Managed Agents
• 务实路线，不吹概念
• 专注让AI实际完成工作，而不是展示技术

━━━━━━━

💡 共同信号
AI从工具变劳动力：
• 能处理超长上下文 → 能完成复杂任务
• 具身智能达标 → 能进入物理世界
• 务实路线 → 行业在成熟

技术到产品，概念到落地，2026年是AI应用元年。`,
    cover: "https://daikexing.work/episodes/covers/ai_02.jpg",
    cover: "https://daikexing.work/episodes/covers/ai_02.jpg",
    duration: "05:58",
    shownotes: `🎙️ 三件事

1️⃣ DeepSeek V4
百万Token超长上下文，开源

2️⃣ 人形机器人
具身智能达专业水准

3️⃣ Anthropic Managed Agents
务实路线，不吹概念

💡 共同信号
AI从工具变劳动力：
• 能处理超长上下文 → 能完成复杂任务
• 具身智能达标 → 能进入物理世界
• 务实路线 → 行业在成熟`
  },
  {
    id: "ep001",
    title: "EP001 - OpenAI GPT-5.5与中国AI崛起",
    date: "2026-04-25",
    description: "AI竞争主战场转移：OpenAI发布GPT-5.5效率革命、中国大模型调用量超越美国、腾讯网易Agent应用大爆发。",
    audioUrl: "/episodes/ep001.mp3",
    size: 4499700,
    size: 4499700,
    shownotes: `🎙️ 本期主题：OpenAI GPT-5.5与中国AI崛起

🤖 GPT-5.5发布
• 效率革命，更便宜、更快
• OpenAI在模型能力上持续领先

🇨🇳 中国大模型调用量超越美国
• 量变的积累正在引发质变
• 应用层开始爆发

🏢 腾讯网易Agent应用大爆发
• 中国科技公司在AI应用落地上开始加速
• 不是追平，是在某些领域开始超越

━━━━━━━

💡 核心观察
AI竞争的主战场正在转移：
• 从模型能力 → 应用落地
• 从美国主导 → 中美并跑

2026年是AI应用元年，也是中国AI的转折点。`,
    cover: "https://daikexing.work/episodes/covers/ai_01.jpg",
    cover: "https://daikexing.work/episodes/covers/ai_01.jpg",
    duration: "07:04",
    shownotes: `🎙️ 三件大事

🤖 GPT-5.5发布
效率革命，更便宜、更快

🇨🇳 中国大模型调用量超越美国
量变的积累正在引发质变

🏢 腾讯网易Agent应用大爆发
中国科技公司在AI应用落地上开始加速

💡 核心观察
AI竞争的主战场正在转移——从模型能力到应用落地，从美国主导到中美并跑。`
  }
];

// 格式化日期（使用北京时间）
function formatDate(dateStr) {
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
      ${ep.cover ? `<img src="${ep.cover}" class="episode-cover" alt="${ep.title}" />` : ''}
      <h3 class="episode-title">${ep.title}</h3>
      <p class="episode-date">📅 ${formatDate(ep.date)} | ⏱ ${ep.duration}</p>
      <p class="episode-desc">${ep.description}</p>
      ${ep.shownotes ? `<details class="shownotes"><summary>📝 Show Notes</summary><div class="shownotes-content">${ep.shownotes.replace(/\n/g, '<br>')}</div></details>` : ''}
      <audio controls class="audio-player">
        <source src="${ep.audioUrl}" type="audio/mpeg">
        您的浏览器不支持音频播放
      </audio>
    </div>
  `).join('');
}

// 页面加载完成后渲染
document.addEventListener('DOMContentLoaded', renderEpisodes);
