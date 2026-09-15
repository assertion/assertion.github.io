---
layout: post
title: AI Twitter 热点 · 2026-09-15
categories: AI
description: 过去一天 X 上 AI coding / 模型 / 产品的高信号讨论摘要（约 10 条）
keywords: AI, Twitter, Cursor, Claude Code, Codex, OpenCode, Inspo, Rish, Juggler, MCP
---

# AI Twitter/X 热点 Digest · 2026-09-15（周二）


## 今日要点

1. **Inspo**：给 Claude Code / Codex / OpenCode 的设计灵感 MCP（搜 800+ 真实站点）。  
2. **Rish App v0.1.0**：手机本地 Agent 工作区首发公开源码（Claude Code / Codex / DSH）。  
3. **Juggler**：把长 Session 摊成可点开的工具/上下文树（刚上 Product Hunt）。  
4. **Skills 安全注册表再发酵**：扫描后再上架，覆盖十余种 coding agent。  
5. 生态侧：**OpenResearch 工作树隔离**、**对话导出成训练语料**、**codegraph 预索引**、**DevSpace 接 ChatGPT**、**ADHD 输出 skill 冲榜**、**Browser Harness 直连 Chrome**。

---

## 1. Inspo：让 coding agent 先「看」好设计再写前端

**要点**：@nutlope（Hassan）推出 [Inspo](https://github.com/Nutlope/inspo)——面向 Claude Code、Codex、OpenCode 的设计 MCP：在 800+ 精选真实站点里检索相关 UI 灵感，再喂给写码 agent。安装路径是 `npx inspo-mcp install`。仓库自 **2026-04** 起就在开发，本窗是产品向强推与安装流曝光，不是「今天突然新建仓库」。

**为何值得看**：前端 agent 最常翻车在审美与信息架构；把「可检索的真实站点」做成 MCP，比再贴一堆截图提示更可复用。

- 作者：@nutlope  
- 链接：https://x.com/nutlope/status/2099547343112564921  
- 仓库：https://github.com/Nutlope/inspo  

![Inspo MCP](/images/twitter-hots/2026-09-15/01-inspo.jpg)

---

## 2. Rish App v0.1.0：口袋里的本地 Agent（首发公开源码）

**要点**：@FiniYang 宣布 [ZSeven-W/rish-app](https://github.com/ZSeven-W/rish-app) 开源。核对后：**v0.1.0 首个公开 release 落在 2026-09-14**（仓库目录 8/25 已建，但这次才放出可构建源码预览）。定位是手机/平板上的本地优先 Agent：会话、工作区、工具调用留在设备；内置 DSH、Claude Code、Codex、ZCode；演示路径是读文件 → 起本地服务 → 打开页面交互。官方写明：目前是 **source preview，没有现成安装包**，需自行按 README 构建。

**为何值得看**：把「remote control 一台常开电脑」换成「手机本机工作区」，是 harness 形态的又一次下沉。

- 作者：@FiniYang  
- 链接：https://x.com/FiniYang/status/2099344770795733091  
- 仓库：https://github.com/ZSeven-W/rish-app  

![Rish App](/images/twitter-hots/2026-09-15/02-rish.jpg)

---

## 3. Juggler：长 Session 终于能「翻树」而不是翻聊天记录

**要点**：@hisevenih 介绍 [juggler-ai/juggler](https://github.com/juggler-ai/juggler)（本窗称刚上 Product Hunt）。痛点很具体：coding agent 跑几十轮后，线性聊天基本不可用。Juggler 把工具调用、当时上下文、停机原因、跑偏分支做成可点开的树；支持 Claude Code、Codex、Gemini、Copilot、Ollama、OpenRouter 等；Session 本地可分支/折叠。仓库 **2026-06** 起已存在，本窗有 v0.6.x 持续发版。注意：`--public` 局域网模式官方写明无密码；主程序 AGPL-3.0。

**为何值得看**：可观测性正在从「看最终 diff」走到「看 agent 当时看见了什么」。

- 作者：@hisevenih  
- 链接：https://x.com/hisevenih/status/2099438758659785075  
- 仓库：https://github.com/juggler-ai/juggler  

![Juggler](/images/twitter-hots/2026-09-15/03-juggler.jpg)

---

## 4. Skills 正在变成软件生态——以及带安全扫描的注册表

**要点**：@tonysimons_ 指向 [tech-leads-club/agent-skills](https://github.com/tech-leads-club/agent-skills)：宣称约 92 个 skill、覆盖 Codex / Claude Code / Cursor / Antigravity / OpenCode 等十余种 agent，上架前做安全扫描。仓库 **2026-01** 已建，本窗是生态叙事再发酵，不是新开源。

**为何值得看**：skill 文件一旦可一键安装，供应链风险就跟 npm 一样真实；「先扫再装」会变成默认期待。

- 作者：@tonysimons_  
- 链接：https://x.com/tonysimons_/status/2099592051750838693  
- 仓库：https://github.com/tech-leads-club/agent-skills  

---

## 5. OpenResearch：每个研究方向一棵 git 工作树

**要点**：@Jolyne_AI 介绍 [alphaXiv/OpenResearch](https://github.com/alphaXiv/OpenResearch)：把 Claude Code / Codex / OpenCode / Cursor 升成研究型 Agent；每个方向独占会话 + 独立 worktree；实验按 git 快照归档，便于对照与回滚。仓库 **2026-06** 已公开，本窗仍在发版（如 9/14 的 v0.2.2），属于持续更新下的讨论，不是首发新闻。

**为何值得看**：和多 agent 写码同一条线——先把隔离做干净，并行探索才不会互相踩。

- 作者：@Jolyne_AI  
- 链接：https://x.com/Jolyne_AI/status/2099346405987057968  
- 仓库：https://github.com/alphaXiv/OpenResearch  

![OpenResearch](/images/twitter-hots/2026-09-15/05-openresearch.jpg)

---

## 6. 你删掉的 Cursor / Claude Code 对话，可能是一份语料

**要点**：@mybitstar 拆解 [kruzovic7/ai-data-extractor](https://github.com/kruzovic7/ai-data-extractor)：只读导出 Claude Code、Codex、Cursor、Windsurf、Trae、Continue、Gemini CLI、OpenCode、Cline/Roo、Aider 等本机会话，统一成 JSONL（含代码上下文与工具调用）。仓库 **2026-09-11** 创建，偏新。帖文强调先跑密钥扫描、别把导出目录推进公开仓——这点比「能卖数据」的营销更值得听。

**为何值得看**：本地 agent 轨迹正在变成可训练资产；合规与脱敏会先于「微调故事」成为硬问题。

- 作者：@mybitstar  
- 链接：https://x.com/mybitstar/status/2099372319580078284  
- 仓库：https://github.com/kruzovic7/ai-data-extractor  

---

## 7. codegraph 再发酵：预索引知识图谱喂给多 agent

**要点**：@sunmer575399 推荐 [colbymchenry/codegraph](https://github.com/colbymchenry/codegraph)：给仓库建预索引代码图，变更自动同步，对接 Claude Code / Codex / Gemini / Cursor / OpenCode 等，强调 100% 本地。仓库 **2026-01** 已存在（不是本周新开源）；星标量级与帖文所说同阶，属旧项目再讨论。

**为何值得看**：把「每次靠 grep 喂上下文」换成结构化图谱，是省 token 的基础设施叙事。

- 作者：@sunmer575399  
- 链接：https://x.com/sunmer575399/status/2099464688614703586  
- 仓库：https://github.com/colbymchenry/codegraph  

![codegraph](/images/twitter-hots/2026-09-15/07-codegraph.jpg)

---

## 8. DevSpace：ChatGPT 网页端指挥本机 coding agent

**要点**：@yibie 介绍 [Waishnav/devspace](https://github.com/Waishnav/devspace)：自托管 MCP，把本机读写、搜索、shell、worktree 并行会话暴露给 ChatGPT；也可把活派给 Codex / Claude Code / Pi 等本地 agent。仓库 **2026-06** 起，近期仍有 beta 发版。安全模型要自己认清：批准连接后客户端在工作区权限很大（含 shell）。

**为何值得看**：浏览器里的 ChatGPT 与本机 harness 被 MCP 焊在一起——「模型在云、执行在本地」的折中越来越常见。

- 作者：@yibie  
- 链接：https://x.com/yibie/status/2099422481152884872  
- 仓库：https://github.com/Waishnav/devspace  

![DevSpace](/images/twitter-hots/2026-09-15/08-devspace.jpg)

---

## 9. i-have-adhd：逼 coding agent 先给答案的输出 skill（冲榜再发酵）

**要点**：@sakatayasha 等传播 [ayghri/i-have-adhd](https://github.com/ayghri/i-have-adhd)：用十来条规则强迫 agent 先给行动项、少铺垫、少客套；宣称兼容 Claude Code、Codex、Cursor、OpenCode、Gemini、Qwen、Kimi 等。仓库 **2026-05** 已公开，本窗是 Trending/星标跳升带动的再发酵，不是新项目首发。

**为何值得看**：skill 市场验证了一件事——「改输出形状」可以和「加新工具」一样病毒传播。

- 作者：@sakatayasha  
- 链接：https://x.com/sakatayasha/status/2099432721948999942  
- 仓库：https://github.com/ayghri/i-have-adhd  

---

## 10. Browser Harness：让 LLM 经 CDP 直接开本机 Chrome

**要点**：@bkdgiffug 介绍 [browser-use/browser-harness](https://github.com/browser-use/browser-harness)：经 WebSocket 接 Chrome DevTools Protocol，让 agent 操作真实浏览器；缺工具时可自写 helper；可接 Claude Code / Codex，也可切 Browser Use Cloud。仓库 **2026-04** 已开源，本窗是能力向再讨论。

**为何值得看**：写码 agent 与「真浏览器」的接缝仍厚；直连 CDP 比再套一层无头浏览器故事更短。

- 作者：@bkdgiffug  
- 链接：https://x.com/bkdgiffug/status/2099409565880107331  
- 仓库：https://github.com/browser-use/browser-harness  

![Browser Harness](/images/twitter-hots/2026-09-15/10-browser-harness.png)

---

## 附：仍在发酵的旁支

- **GitHub CLI 可贴图**：@pradumna_saraf 提到 `gh` 现可直接给 issue/PR/评论附图片，减少 Claude Code / Copilot 等 agentic 流程里的拦路虎。https://x.com/pradumna_saraf/status/2099362524726714472  
- **learn-claude-code 教学仓再传播**：@snwiki238337 推 [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code)（**2025-06** 起，口号 Bash is all you need）——旧课新读，不是本周新开源。https://x.com/snwiki238337/status/2099336836510519626  
- **Vicoa 多 agent IDE**：@vintcessun 指向开源自托管 [vicoa-ai/vicoa](https://github.com/vicoa-ai/vicoa)（worktree 隔离 + 跨设备接续，AGPL）。https://x.com/vintcessun/status/2099507476395851818  
- **Dr. Claw 科研工作台**：@aigclink 介绍可换 Claude Code/Gemini/Codex 基座的科研流水线（仓库更早，属赛道讨论）。https://x.com/aigclink/status/2099301420566790315  

