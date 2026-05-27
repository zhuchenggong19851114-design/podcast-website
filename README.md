# 我的播客网站

基于 Vercel 部署的播客网站。

## 文件结构

```
├── index.html          # 主页面
├── styles.css          # 样式文件
├── script.js           # 前端脚本
├── rss.xml             # RSS 订阅源
├── episodes.json       # 节目数据
├── episodes/           # 音频文件目录
│   └── ep001.mp3
└── README.md
```

## 部署到 Vercel

1. 把整个项目上传到 Vercel
2. 访问 https://your-project.vercel.app 查看网站
3. RSS 订阅地址：https://your-project.vercel.app/rss.xml

## 添加新节目

1. 在 `episodes.json` 中添加新的节目数据
2. 在 `rss.xml` 中添加对应的 `<item>`
3. 把音频文件放到 `episodes/` 目录
4. 重新部署

## 订阅到播客平台

- 喜马拉雅：在创作者中心提交 RSS 链接
- 小宇宙：我的 → 订阅 → 添加节目 → 输入 RSS 地址
- Apple Podcasts：搜索节目或使用 RSS 地址订阅
