# 杨憬晗 — 个人学术主页

一个面向导师、实验室和研究合作者的英文个人主页，使用 Astro、TypeScript 和 Markdown 构建，可直接部署到 GitHub Pages。

## 本地运行

需要 Node.js 22.12 或更高版本。

```bash
npm install
npm run dev
```

打开终端输出的网址即可预览。提交前运行：

```bash
npm run build
```

该命令会先执行类型与内容校验，再生成静态站点到 `dist/`。

## 首次替换清单

网站已根据 `message.md` 写入真实资料，并发布至 `https://altocumuli.github.io`。后续完善时按以下顺序处理：

1. 审核 `src/data/site.ts` 中的姓名、研究简介、邮箱、GitHub、研究兴趣、教育和快手实习内容。
2. 将头像放入 `public/`，例如 `public/profile.jpg`，并把 `profileImage` 设置为 `/profile.jpg`。
3. 将英文简历放入 `public/cv.pdf`，并把 `cv` 设置为 `/cv.pdf`。
4. 审核 `src/content/work/` 中 AEPO、WebSwarm 和 AgentX 的状态、作者、个人贡献与团队结果表述。
5. 确认论文代表图的公开许可后，可将图片放入 `public/work/` 并填写对应 `cover` 字段。
6. 确认 GitHub Pages 仓库与最终网址，必要时调整 `.env.example`、`astro.config.mjs` 和 `public/robots.txt`。
7. 若需要暂时阻止搜索引擎收录，可将 `src/data/site.ts` 中的 `isDraft` 改回 `true`。

## 新增论文、报告或项目

在 `src/content/work/` 中新建 Markdown 文件，例如 `my-paper.md`：

```md
---
title: "Paper title"
summary: "Two concise sentences about the problem, method, and result."
date: 2026-07-01
type: "Publication"
status: "Accepted"
featured: true
draft: false
sample: false
authors:
  - "Jinghan Yang"
  - "Co-author Name"
venue: "Conference or journal"
tags:
  - "Topic"
  - "Method"
contribution: "A precise statement of your individual contribution."
cover: "/work/my-paper-cover.jpg"
accent: "violet"
links:
  - label: "PDF"
    href: "https://example.com/paper.pdf"
  - label: "Code"
    href: "https://github.com/example/repository"
---

## The question

Write the project story here using normal Markdown.
```

字段约束：

- `type`：`Publication`、`Preprint`、`Technical Report` 或 `Project`
- `accent`：`violet`、`cyan`、`coral` 或 `lime`
- `links[].label`：`Paper`、`PDF`、`Code`、`Demo`、`Slides`、`Report` 或 `Project`
- `featured: true`：显示在首页 Selected Work；首页最多显示四项
- `draft: true`：不生成页面，也不会出现在任何列表中
- `cover` 可省略；省略时网站自动显示抽象封面

每项成果会自动生成 `/work/<文件名>/` 详情页，并加入首页成果归档与站点地图。

## GitHub Pages 部署

1. 在 GitHub 创建名为 `<username>.github.io` 的公开仓库。
2. 将本目录初始化为 Git 仓库，提交并推送到 `main` 分支。
3. 打开仓库的 **Settings → Pages**，将 **Source** 设置为 **Deploy from a branch**，选择 `gh-pages` 和 `/ (root)`。
4. 本站使用 `gh-pages` 分支托管构建产物；修改源码并提交后，运行 `npm run deploy` 更新线上页面。

首次部署后，在仓库 **Settings → Pages** 中选择 **Deploy from a branch**，分支设为 `gh-pages`、目录设为 `/ (root)`。若使用普通项目仓库而不是 `<username>.github.io`，还需要在 `astro.config.mjs` 中设置 `base: '/仓库名'`，并统一处理站内链接。当前项目按用户主页仓库设计，不需要 `base`。

## 发布前内容检查

- 页面中的姓名、经历、成果状态和个人贡献表述均已本人确认
- 邮箱、GitHub、CV、论文、代码和演示链接均可访问
- 快手实习只包含批准公开的信息，没有内部指标、系统名称或未披露业务信息
- 论文封面和 PDF 具备公开权限，作者顺序、状态与 venue 准确
- 头像图片已压缩，建议 WebP/JPEG 小于 500 KB；成果封面建议使用 16:10 比例
- `isDraft` 已设为 `false`，站点 URL 与 `robots.txt` 已更新
- 手机与桌面端均完成检查，`npm run build` 正常通过

## 项目结构

```text
src/
  components/       可复用页面组件
  content/work/     Markdown 成果内容
  data/site.ts      个人信息、研究兴趣和经历
  layouts/          SEO 与全站布局
  pages/            首页、详情页与 404
  styles/           全局视觉变量与基础样式
public/             头像、简历、封面和站点图标
gh-pages 分支       GitHub Pages 构建产物（由 npm run deploy 更新）
```
