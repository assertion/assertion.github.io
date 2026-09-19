---
layout: post
title: AI Twitter 热点 · 2026-09-16
categories: AI
description: 过去一天 X 上 AI coding / 模型 / 产品的高信号讨论摘要（约 10 条）
keywords: AI, Twitter, Devin, Claude Mods, Inspo, BrowserSkill, Harness Terminal, Memoh, Pi, Codex, OpenCode, Cline
---

# AI Twitter/X 热点 Digest · 2026-09-16（周三）


## 今日要点

1. **Devin 上 Mac**：自带 Mac VM + iOS simulator，还能丢 Slack 录屏 / TestFlight。  
2. **Claude Mods**：可钩平台继续发酵，社区已有 Tetris-in-Claude demo。  
3. **Inspo MCP** 再强推：给 Claude Code / Codex / OpenCode 搜真实站点设计灵感（仓自约 2026-04）。  
4. **BrowserSkill**：让 agent 借用你已登录的浏览器标签，而不是空白无会话。  
5. 生态侧：**Harness Terminal** 一窗多 harness、**Memoh** 云多 agent 正式版、**Pi** WebGPU 浏览器 agent + 中文学习蓝皮书、**Codex** CarPlay/社区活跃度/运维轶事、**Zcode×OpenCode** 适配、**Cline×Codex** 双端工作流。

---

## 1. Devin：给 coding agent 一台真正的 Mac

**要点**：@cognition 宣布 Devin 现可跑在自有 **Mac VM** 上：在 iOS simulator 里构建与测试，再把屏幕录制发到 Slack，或直接给出 **TestFlight** 链接让人上手。配套博文解释实现路径。叙事不是又一个桌面补丁，而是「移动端交付闭环」进了 agent 默认能力面。

**为何值得看**：iOS 应用验证长期卡在「人手点模拟器」；把 VM + 录屏 + TestFlight 串进同一条 agent 流水线，讨论热度会明显高于普通桌面版本号。

- 作者：@cognition  
- 链接：https://x.com/cognition/status/2099887193804112190  
- 跟帖：https://x.com/cognition/status/2099887195670683694

![Devin Mac](/images/twitter-hots/2026-09-16/01-devin-mac.jpg)

---

## 2. Claude Mods：Tetris 证明「钩子」已经可玩

**要点**：@bcherny 称 Claude Mods 正在落地，并指向社区 issue：已有人做出 **Tetris-in-Claude** 一类扩展，技术细节与更多 demo 仍在同一条讨论里更新。工程原语仍是可类型化的 function hooks；本窗互动高的是「社区已经能做出离谱 UI 改造」这一叙事，而不是立项公告本身。

**为何值得看**：护栏、审计、自定义 UI 要规模化，得先证明 hooks 真能被第三方玩起来——Tetris 只是最显眼的烟雾弹。

- 作者：@bcherny  
- 链接：https://x.com/bcherny/status/2099551291601248485  
- Issue：https://github.com/anthropics/claude-code/issues/91870

![Claude Mods](/images/twitter-hots/2026-09-16/02-claude-mods.jpg)

---

## 3. Inspo MCP：给 coding agent 的设计灵感搜索（再发酵）

**要点**：@nutlope 本窗强推 **Inspo**——面向 Claude Code / Codex / OpenCode 的 design MCP：在 800+ 真实站点里检索相关设计灵感，安装口令是 `npx inspo-mcp install`。GitHub 仓 `Nutlope/inspo` 约 **2026-04-29** 已创建，不是今天新开源；本窗是产品叙事再扩散 / 安装路径再被推到时间线。

**为何值得看**：agent 写前端时最常翻车的是「长得像 AI 默认模板」；把可检索的真实站点设计变成 MCP 工具，比再喂一坨截图 prompt 更可复用。

- 作者：@nutlope  
- 链接：https://x.com/nutlope/status/2099547343112564921  
- 仓库：https://github.com/Nutlope/inspo

![Inspo MCP](/images/twitter-hots/2026-09-16/03-inspo-mcp.jpg)

---

## 4. BrowserSkill：让 agent 借你的已登录标签页

**要点**：@TencentAI_News 介绍开源 **BrowserSkill**：多数工具给 agent 空白浏览器；它让 agent **借用你当前标签**，用完再还回来——登录态天然在、验证码/确认框回到人手、以 CLI 而非 MCP 暴露所以凡能跑 shell 的 agent 都能用，且每次调用可见。借用前会询问，开关在浏览器设置里，难以被 prompt 绕过。兼容 Cursor / Claude Code / Codex / Hermes / OpenClaw 等，本地运行，MIT。仓 `Tencent/BrowserSkill` 早于本窗（约 2026-06 起公开），本窗是中文圈高信号扩散节点。

**为何值得看**：「空白无浏览器」过不了真实 SaaS 登录墙；把已登录会话借给 agent，同时把确认权留在人侧，是桌面 agent 下一轮刚需摩擦。

- 作者：@TencentAI_News  
- 链接：https://x.com/TencentAI_News/status/2100143086429217278  
- 仓库：https://github.com/Tencent/BrowserSkill

![BrowserSkill](/images/twitter-hots/2026-09-16/04-browserskill.jpg)

---

## 5. Harness Terminal：多机器、多 harness，收进同一扇窗

**要点**：@autonomous_labs 推广免费应用 **Harness Terminal**：Claude Code 在 MacBook、Codex 在公司、Pi 在家、Hermes 在云——全部收进一个窗口。卖点不是又一个 chat UI，而是跨机器 agent 会话的汇聚层。

**为何值得看**：人已经同时养多套 harness；缺的是「一眼看到它们都在干什么」的控制面，而不是再装一个终端模拟器。

- 作者：@autonomous_labs  
- 链接：https://x.com/autonomous_labs/status/2099864563739144637

![Harness Terminal](/images/twitter-hots/2026-09-16/05-harness-terminal.jpg)

---

## 6. Memoh 正式版：云电脑上的多 agent 桌面

**要点**：@AcboxLiu 宣布 **Memoh** 正式版上线：cloud-first 多 agent 平台，每个 agent 配云电脑与独立云桌面；既可跑 Memoh agent，也可把自有 **Codex / Claude Code** 托管上去，在同一 UI 使用。自称自建 sandbox 集群压成本（文中举例 8c16g 配额约 \$5/月），桌面端可在 memoh.ai 下载。

**为何值得看**：本地 GPU/笔记本不够养并行 agent 时，「云桌面 + 自带 harness 托管」是一条很清楚的产品切口。

- 作者：@AcboxLiu  
- 链接：https://x.com/AcboxLiu/status/2100154095512502473

![Memoh](/images/twitter-hots/2026-09-16/06-memoh.jpg)

---

## 7. Pi：浏览器里的 WebGPU coding agent，外加中文学习蓝皮书

**要点**：两条相关讨论并在一起。@victormustar 展示完全在浏览器内跑的 coding agent **Pi**：MiniCPM5-2B + Transformers.js + WebGPU + 4-bit ONNX，称以往同类尝试不好用，这套组合开始「能干活」，已上 Hugging Face。同窗 @GitHub_Daily 推《**Pi 学习蓝皮书**》（`xiaomoBoy/pi-bluebook`）：5 模块 14 课 + 案例，强调「Agent 说完成了不算，得自己验收」；并收录经 Pi 官方授权的中文译文。

**为何值得看**：一边是「零安装、纯浏览器」把 harness 门槛打到最低，一边是中文学习材料补上文档墙——对想摸 Pi / harness 机制的人同窗信号很齐。

- 作者：@victormustar / @GitHub_Daily  
- WebGPU demo：https://x.com/victormustar/status/2099794150879121471  
- 蓝皮书：https://x.com/GitHub_Daily/status/2100011801073287645  
- 仓库：https://github.com/xiaomoBoy/pi-bluebook

![Pi WebGPU](/images/twitter-hots/2026-09-16/07-pi-webgpu.jpg)

---

## 8. Codex：CarPlay 语音、Reddit 活跃度，以及一次「断电」翻车

**要点**：本窗 Codex 讨论偏「用法与体感」，不是版本列车。@jonathanroomer 把 **Codex（语音）接到 CarPlay**，经自研 Nightblood iOS 给 ChatGPT Voice 接上 Codex / Mac / 原生工具，称路上也能开建。@tickerplus 用 Reddit 数据称截至 9/13 当周，r/Codex 相对 r/ClaudeCode 在帖量、评论与净票上大约 **2.2–2.4×**。@Xudong07452910 则贡献运维段子：美滋滋连实验室服务器跑 Claude Code 与 Codex，排查半天 ZeroTier——同学到场一看，**断电了**。

**为何值得看**：产品热度不只看 release notes——车载语音、社区活跃对比、以及真实部署翻车，往往更能说明「谁在天天用」。

- CarPlay：https://x.com/jonathanroomer/status/2099979041394573535  
- Reddit 对比：https://x.com/tickerplus/status/2099871005296484736  
- 运维轶事：https://x.com/Xudong07452910/status/2099817201117343782

![Codex](/images/twitter-hots/2026-09-16/08-codex.jpg)

---

## 9. Zcode × OpenCode：大模型厂 harness 也认真接三方

**要点**：@realchendahuang 夸智谱 **Zcode** harness：作为模型厂产品，仍重点适配三方服务商；新版本跟了 **OpenCode Go** 的模板与站点映射。论点是「就算不用 GLM，也可以试试这个 harness」——开放包容被当成体验卖点，而不只是模型绑定。

**为何值得看**：harness 竞争正在从「绑死自家模型」转向「谁更肯把别人的路由/模板接顺」；这是选型时很少写进参数表、但用起来很痛的一层。

- 作者：@realchendahuang  
- 链接：https://x.com/realchendahuang/status/2100091007283183883

![Zcode × OpenCode](/images/twitter-hots/2026-09-16/09-zcode-opencode.jpg)

---

## 10. Cline × Codex：闭源写、开源权重审的双端循环

**要点**：@phuctm97 描述一套清晰工作流：在 **Codex**（GPT-6 Astra）里构建，再到 **Cline** 桌面端用 Kimi / GLM / Qwen / DeepSeek 等开源权重做 review，然后循环。叙事把 Cline Desktop 定位成「对标 Codex/ChatGPT 桌面、但为开源权重而生」的一端，而不是又一个 CLI 参数清单。

**为何值得看**：写与审拆到不同模型/产品，正在变成有经验用户的默认姿势；本窗把「哪边写、哪边审」说成可复制的双端循环。

- 作者：@phuctm97  
- 链接：https://x.com/phuctm97/status/2099545236708245724

![Cline × Codex](/images/twitter-hots/2026-09-16/10-cline-codex.jpg)
