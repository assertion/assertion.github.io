---
layout: post
title: AI Twitter 热点 · 2026-10-13
categories: AI
description: 过去一天 X 上 AI coding / 模型 / 产品的高信号讨论摘要
keywords: AI, Twitter, Muse Wonder, X Subscription, OpenCode, Grok Bot, poteto, Cursor, Claude Code, Yobiru, T3 Code
lang: zh
translation_key: ai-twitter-hots-2026-10-13
issue: 32
item_count: 10
headline: "Meta 发布 Muse Wonder，X 订阅打通 Cursor，OpenCode 升到 2.0"
highlights:
  - label: "Muse Wonder：Meta 正面冲进 agent 模型榜"
    text: "Zuckerberg 与 Alexandr Wang 发布 Muse Wonder / Wonder Full；theo 把 Wonder Full 与 Opus 5.5 并列 S 档，并提醒 API 版与订阅 Full 版差距很大。"
  - label: "The X Subscription：Grok + Cursor + X Premium 一本账"
    text: "SpaceXSI / Cursor / poteto 同日宣布统一订阅，付费档共用额度池，Premium 以上含 Grok Bot，Grok 模型 coding 用量是对等 Cursor 套餐的两倍。"
  - label: "OpenCode 2.0 + Bot 当编排器成主流用法"
    text: "官方大改版上线后台 Service、Code Mode、后台子 agent；中文圈传开「用原生 API 调云端 Grok Bot」省视频/X 接口费；poteto 把验证环定为「正确代码」入口。"
products: [Muse Wonder, Cursor, OpenCode, Grok Bot, Claude Code]
stats:
  - value: "S"
    caption: "theo 模型榜：Opus 5.5 与 Muse Wonder Full 同列 S 档"
  - value: "$8"
    caption: "The X Subscription 入门价（含 Grok / Cursor / X Premium）"
  - value: "2.0"
    caption: "OpenCode 大版本号——后台 Service + Code Mode + 后台任务"
stat:
  value: "$8"
  caption: "The X Subscription 入门价（含 Grok / Cursor / X Premium）"
---

# AI Twitter/X 热点 Digest · 2026-10-13（周二）


## 今日要点

1. **Meta 正面交卷 Muse Wonder**：@finkd 与 @alexandr_wang 发布面向个人 / 专业 agent 的前沿模型族；@theo 把 **Muse Wonder Full** 与 Opus 5.5 同列 **S**，并强调 API 版 Wonder 与订阅 Full「差很多」。  
2. **The X Subscription 把 Cursor 并进 Grok / X Premium**：@SpaceXSI、@cursor_ai、@poteto 同日宣布——付费档共用额度池，**Premium 以上含 Grok Bot**，Grok 模型 coding 用量是对等 Cursor 套餐的 **2 倍**，入门约 **$8/月**。  
3. **OpenCode 2.0 与「Bot 当脑、coding agent 当手」一起升温**：官方重写后台 Service / API / Code Mode；@Gorden_Sun 分享用原生 API 调云端 Grok Bot 省视频与 X 接口费；@poteto 把 **verification** 定为「让 agent 写出更正确代码」的入口。

---

## 1. Muse Wonder：Meta 把 agent 模型推上 S 档

**要点**：@finkd 宣布 **Muse Wonder**——面向个人与专业 agentic 工作的新前沿模型族；@alexandr_wang 跟帖称在 agent / coding 评测上对标最强对手，并放出对比图。社区侧最响的声音来自 @theo：模型榜 **S = Opus 5.5 + Muse Wonder**，中间空一档才到 GPT-6.1 Sol；随后他又澄清——他打的是 **Wonder Full（订阅）**，API 上的标准 Wonder「差很多」，命名与 Full 仅限订阅都让他不爽。他同时说上周猛推 Muse 进 T3 Code，就是因为常让 Opus 请 Wonder 做 code review / 架构审。

**为何值得看**：这不是又一篇「某厂也有模型」的新闻稿——Zuckerberg 亲自发、Alexandr 跟评测、theo 当场改榜，Meta 在 coding / personal agent 叙事上第一次被一线用户放进 S。

- Zuckerberg：Introducing Muse Wonder：https://x.com/finkd/status/2109689305073614918  
- Alexandr：评测与定位：https://x.com/alexandr_wang/status/2109691967676563613  
- theo：S 档榜单：https://x.com/theo/status/2109724741234028639  
- theo：Full ≠ API Wonder：https://x.com/theo/status/2109784568672985520

![Muse Wonder launch](/images/twitter-hots/2026-10-13/01-muse-wonder.jpg)

---

## 2. The X Subscription：Grok、Cursor、X Premium 一本账

**要点**：@SpaceXSI 宣布 **The X Subscription**——把 Grok、Cursor、X Premium 合成一套订阅。@cursor_ai 跟帖写清细则：现有 Cursor 订户可保留原计划或迁到新订阅；付费档 **共用一个用量池**（Cursor + Grok Build + 其他 Grok 产品），Grok 模型上的 coding 用量是对等 Cursor 套餐的 **两倍**；**Premium / Super / Ultra 含 Grok Bot**；为给 Grok 腾额度，新计划里 Cursor 的第三方模型改走 API 计价。@grok 称入门约 **$8/月、五档**；@poteto 转发「终于来了」。

**为何值得看**：昨天还在讨论「Bot 当员工」，今天直接把 IDE 订阅并进同一张账单——额度怎么分、第三方模型怎么计价，会立刻影响日常选模型的人。

- SpaceXSI：统一订阅：https://x.com/SpaceXSI/status/2109783335296008414  
- Cursor：细则：https://x.com/cursor_ai/status/2109783879490191502  
- poteto：终于来了：https://x.com/poteto/status/2109784281916878885  
- Grok：$8 起：https://x.com/grok/status/2109783860636500318

![The X Subscription](/images/twitter-hots/2026-10-13/02-x-subscription.jpg)

---

## 3. OpenCode 2.0：后台 Service、Code Mode、后台子 agent

**要点**：@opencode 发布 **OpenCode 2.0** 长文：默认把 client/server 里的 **Service** 拉成机器上常驻的一个后台进程，TUI / Web / Desktop / `@opencode/client` 都连同一进程；API 重写；**Code Mode** 把 MCP / OpenAPI 变成可脚本调用的函数，一轮写完「list → map → 再调」；支持 **后台子 agent** 与异步 shell；插件体系逼自己用内部插件实现几乎全部 2.0 功能（80+），并支持会话中热重载自写插件。升级：`opencode upgrade --major`（先保证 1.x 最新）。同日还有 **Operation Cheepseek Phase 3**：**$80** DeepSeek V4.1 Flash 用量。仓库 anomalyco/opencode 创建于 2025-04，今日是大版本发布带动传播。

**为何值得看**：开源 coding agent 从「能聊能改文件」走进「常驻服务 + 可编程工具面」——和 Claude Mods / T3 的编排方向同构，但走的是可自托管协议。

- OpenCode 2.0：https://x.com/opencode/status/2109649032931119362  
- Cheepseek Phase 3：$80：https://x.com/opencode/status/2109573342584058065

![OpenCode 2.0](/images/twitter-hots/2026-10-13/03-opencode-2.jpg)

---

## 4. poteto：先谈「正确」，再谈「好」——验证环是入口

**要点**：昨天还在吵 Good Code / clean code，今天 @poteto 把话题拧到更落地的地方：**怎么让 agent 写出更正确的代码**（不一定 Good，但至少能 work）。她的答案是 agentic loop 的入口——**verification**：给 agent 自己验证工作的能力，最常见是像真实用户一样跑一遍 CLI / API / UI；也可以上 TLA+ 查状态机。目标是产出比整份 PR 更好审的证据（视频、截图），证明「对、符合意图、可审」。Skill pack 都是加分项；**没有验证环，谈不上更自主**。该帖收藏过三千。

**为何值得看**：这是昨天「要不要给人读的优雅」辩论的下一章——先把「跑得通且可证」焊进工作流，再讨论风格税。

- poteto：verification 入口：https://x.com/poteto/status/2109436202554372476

![poteto verification loop](/images/twitter-hots/2026-10-13/04-poteto-verify.jpg)

---

## 5. Grok Bot 原生 API：让 Codex / Claude Code 直接喊云端 Bot

**要点**：@Gorden_Sun 分享「顶级用法」：Grok Bot **有原生 API**，其他 agent 可直接调云端 Bot 做 **生成视频 / 搜 X**，省掉单独接视频 API 与 X API；API **在 Cursor 后台创建**（他强调 Grok Bot 实际是 Cursor Bot）；与云端 Bot 传文件可走 Cloudflare R2 或 GitHub 私仓。对比：Gemini Spark、Muse、Dots 没有官方 API/MCP，只能逆向 CLI，有封号风险。帖下中英文转述很多，收藏两百多。

**为何值得看**：把「Bot 当同事」从聊天习惯推进到可编程依赖——主力仍在 Codex / Claude Code 的人，等于多了一条官方通道的云端手脚。

- Gorden_Sun：原生 API 用法：https://x.com/Gorden_Sun/status/2109508218288513335

![Grok Bot native API](/images/twitter-hots/2026-10-13/05-grok-bot-api.jpg)

---

## 6. Bot 当编排器：搜索、自动化、Cursor Cloud 全交给它

**要点**：@emigal 写「用了几周 Grok Bot 当 daily driver」：**100%** 替代他在 ChatGPT/Claude 上的搜索类问题、**100%** 替代 Hermes 自动化、**100%** 跑 Cursor cloud agents（审 PR、合并）；VM 挂 Tailscale、可 SSH 全机、能在终端拉起 Claude Code / Codex、还能现场再开 Bot 并让主 Bot 管它们。@melvindvivas 观察社区把 Bot 当 Claude Code / Codex / Hermes 的编排器，好省 Bot 自己的 coding 额度；@heyrobinai 给出「让 Bot 在自己电脑上装 Claude Code」的抄作业帖。

**为何值得看**：产品叙事从「Bot 能办事」变成「Bot 是拓扑中心」——脑在云端，手在本地 harness，额度也拆开花。

- emigal：daily driver：https://x.com/emigal/status/2109672788264910948  
- melvin：Bot 当编排器：https://x.com/melvindvivas/status/2109485274661331013  
- heyrobinai：Bot 上装 Claude Code：https://x.com/heyrobinai/status/2109621421244821962

![Grok Bot as orchestrator](/images/twitter-hots/2026-10-13/06-bot-orchestrator.jpg)

---

## 7. Yobiru.com 上线：多机 agent 互叫有了官网

**要点**：昨天 @turingou 开源 Yobiru，今天 **yobiru.com** 上线并配长说明：Grok Bot 刷 X / 杂事、家里 Mac 上 Codex 管微信与 3D、东京服务器 Codex/Claude Code 写代码——以前靠人复制粘贴，现在经 **自己的 Tailscale** 用「机器/agent 名」互发文字、JSON、文件（SHA-256 校验），回复自动回到发起方。另有帖把闲置手机 / iPad 编进 Codex 的 **iPhone Use** 矩阵，让 Dots / Grokbot 也能操本地 Codex。仓库此前已核实为近日新建；今日是官网与用法传播。

**为何值得看**：开源宣布之后最缺的是「装完能照着跑」；官网 + 真实拓扑故事，把跨机互叫从脚本推进到可转发的产品页。

- turingou：Yobiru 官网：https://x.com/turingou/status/2109643779464720568  
- turingou：iPhone Use 矩阵：https://x.com/turingou/status/2109575273545150472

![Yobiru website](/images/twitter-hots/2026-10-13/07-yobiru-site.jpg)

---

## 8. Lee Robinson 讲座笔记：Grok Bot harness 与上下文工程

**要点**：@shao__meng 整理斯坦福 CS146S 里 Lee Robinson 讲 **Grok Bot / Muse 类 Personal Agent** 与 coding agent 的差异。Harness 侧：客户端与服务器之间几乎只有 **send to user** 一个工具原语，重活全在服务端；**动态工具发现**只把工具名放进上下文；求助阶梯从会话历史 → 插件/API → 搜索 → 浏览器 → 整桌面，失败才打扰人；主 agent 当编排者，子 agent 用 Temporal 持久化。Context 侧：强调 **prompt caching** 静态顺序、缓存温热窗口内压缩、四层记忆（核心事实 / 带日期日志 / 便签 / 文件检索）。

**为何值得看**：昨天大家在玩 Bot 用例，今天开始拆「为什么它能少烦人」——对自建 harness 的人，这比又一份功能列表更值钱。

- shao__meng：Harness 笔记：https://x.com/shao__meng/status/2109493115421954200

![Grok Bot harness notes](/images/twitter-hots/2026-10-13/08-harness-notes.jpg)

---

## 9. Claude Code：用一句话让它给自己写 mod

**要点**：@Pashoke1 演示 Claude Code 内置 **plugin-authoring** skill：用一句「描述烦点」让它把 mod 写进 `~/.claude/dev-mods/`，热重载进当前会话，再用 `claude plugin validate` 检查事件与网络调用；会话结束前把文件夹拷走，下次 `--plugin-dir` 加载。另有长文整理 **9 个值得装的 mod** + 自建 prompt。这是 Mods 放量后的下一跳——不只装别人的，而是让 harness **当场改自己**。

**为何值得看**：Hooks / Skills / Mods 之后，「一句话生成插件」把定制门槛打到聊天级；也意味着每个热加载路径都要当供应链依赖审。

- Pashoke1：一句话自建 mod：https://x.com/Pashoke1/status/2109673037440196643  
- Pashoke1：9 mods 指南：https://x.com/Pashoke1/status/2109545339451589034

![Claude Code self-authoring mods](/images/twitter-hots/2026-10-13/09-claude-self-mods.jpg)

---

## 10. T3 Code：「一键更新一切」+ 为 Muse 铺好编排

**要点**：@theo 给 T3 Code nightly 加了 **Update everything**：一键更新本地 app、所有环境里的 T3 Code、各环境的 providers（Claude Code、Codex 等），并在完成后恢复线程。结合他当天把 Muse Wonder Full 放进 S 档、并说 Orchestrator V2 里常让 Opus 请 Wonder 做 review——T3 这条线同时在「运维摩擦」和「多模型编排」两边加码。

**为何值得看**：多机多 provider 的真实痛点往往是「版本漂移」；一键对齐之后，才谈得上让 Opus / Wonder / Sol 在同一控制面里分工。

- theo：Update everything：https://x.com/theo/status/2109560164739350856  
- theo：Wonder 进 Orchestrator：https://x.com/theo/status/2109731846842196093

![T3 Code update everything](/images/twitter-hots/2026-10-13/10-t3-update.jpg)

---
