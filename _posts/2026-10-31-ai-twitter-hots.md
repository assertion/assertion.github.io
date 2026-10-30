---
layout: post
title: AI Twitter 热点 · 2026-10-31
categories: AI
description: 过去一天 X 上 AI coding / 模型 / 产品的高信号讨论摘要
keywords: AI, Twitter, Claude, Ultra, Cursor, Claude Code, OpenCode, DeepSeek, Suncatcher, Anthropic, Messages API, Rust, pi-durable, Grok Bot, Rex, Gemini, Antigravity, Skydive
lang: zh
translation_key: ai-twitter-hots-2026-10-31
issue: 50
item_count: 10
headline: "Claude Max 改名 Ultra 并取消已验证账号 5 小时限额，Cursor 市集恶意 Claude Code 扩展，OpenCode 接回 Claude 订阅与 Cheepseek 百美元 DeepSeek"
highlights:
  - label: "Claude Ultra"
    text: "Max 5x→Max、Max 20x→Ultra；价格不变。已验证 Ultra 取消 5 小时窗口限额，周限额不变。"
  - label: "Cursor 市集安全"
    text: "恶意篡改的 Claude Code VS Code 扩展经 Cursor 市集传播，影响至多约 5,000 用户；Anthropic 澄清非自家系统被入侵。"
  - label: "OpenCode 三连"
    text: "Claude 订阅可在 OpenCode 使用；Cheepseek Phase 4 送 100 美元 DeepSeek V4.1 Flash；2.2.3 上线图像生成工具。"
products: [Claude, Ultra, Max, Cursor, Claude Code, OpenCode, DeepSeek, Project Suncatcher, Anthropic, Messages API, pi-durable, Grok Bot, Rex, Gemini, Antigravity, Skydive]
stats:
  - value: "23100"
    caption: "Claude「Max→Ultra + 取消 5 小时限额」官宣帖点赞（收藏约 2756）"
  - value: "16750"
    caption: "Sundar「Project Suncatcher hello world」帖点赞（收藏约 1616）"
  - value: "6454"
    caption: "OpenCode Cheepseek Phase 4「$100 DeepSeek」帖点赞（收藏约 692）"
stat:
  value: "23100"
  caption: "Claude「Max→Ultra + 取消 5 小时限额」官宣帖点赞（收藏约 2756）"
---

# AI Twitter/X 热点 Digest · 2026-10-31（周六）


## 今日要点

1. **订阅与额度再洗牌**：Claude 把 Max 5x / 20x 改名为 Max / Ultra，已验证 Ultra 取消 5 小时窗口；OpenCode 同日接回 Claude 订阅，并加码 Cheepseek 百美元 DeepSeek 与图像生成工具。  
2. **安全与基础设施**：Cursor 市集出现恶意 Claude Code 扩展（至多约 5,000 用户），Anthropic 员工澄清非 Anthropic 系统被入侵；Messages API 用 Claude 写出的 Rust 重写，CPU 降约 40–50%。  
3. **空间算力与桌面 agent**：Sundar 晒出轨道 TPU 第一首 haiku；Gemini Mac 可切进 Antigravity；Grok Bot 能看手机屏；Rex 浮动窗格与 Skydive 3D 办公室把「agent 工作区」视觉化。

---

## 1. Claude：Max 改名 Ultra，已验证账号取消 5 小时限额

**要点**：@claudeai 宣布套餐改名：**Max 5x → Max**（仍 100 美元/月）、**Max 20x → Ultra**（仍 200 美元/月），现有订阅自动切换。更关键的是：**已验证 Ultra 账号取消 5 小时窗口限额**，当天先对大部分现有订阅者生效；较新账号在验证前保留临时限额以防欺诈。**周限额不变**。@dotey 中文长解：去掉 5 小时后可连着跑 Claude Code，总量仍受周额度约束；@thsottiaux 回帖调侃「不如直接宣布 28 天重置」。

**为何值得看**：这是对「重度 coding 用户被 5 小时窗口卡住、周额度还剩」痛点的直接产品回应——名字里的「20x」随之失去窗口语义，叙事从倍数标签转向「可验证的持续吞吐」。

- claudeai：改名与限额官宣：https://x.com/claudeai/status/2116220869479428500  
- dotey：中文解读（含自查验证方法）：https://x.com/dotey/status/2116233564823974005  
- thsottiaux：调侃回复：https://x.com/thsottiaux/status/2116256600436641887

![Claude Ultra rename](/images/twitter-hots/2026-10-31/01-claude-ultra.jpg)

---

## 2. Cursor 市集：恶意 Claude Code 扩展，影响至多约 5,000 用户

**要点**：@cursor_ai 披露安全事件：经 Cursor IDE 扩展市集分发的**被篡改 Claude Code VS Code 扩展**影响至多约 **5,000** 用户；强调**并非 Anthropic 开发**。响应包括当天下架市集、协同清理恶意软件、确认无额外风险后恢复市集，并要求用户升级到 **Claude Code for VS Code 2.1.314**。Anthropic 的 @felixrieseberg 跟帖澄清：不是 Anthropic 系统或员工设备被入侵，而是有人利用 Cursor 市集权限发布篡改副本；官方渠道版本不受影响。

**为何值得看**：这把「第三方市集信任边界」推到了 coding agent 生态的前台——模型厂商与 IDE 市集的责任切分，比又一次功能发布更能改写安装习惯。

- cursor_ai：安全通告：https://x.com/cursor_ai/status/2116074289053175808  
- felixrieseberg：Anthropic 侧澄清：https://x.com/felixrieseberg/status/2116170451466543578

![Cursor marketplace security](/images/twitter-hots/2026-10-31/02-cursor-security.jpg)

---

## 3. OpenCode 三连：Claude 订阅回归、Cheepseek 百美元 DeepSeek、图像生成工具

**要点**：@opencode 同日连发：（1）**Claude 订阅可在 OpenCode 使用**（引用演示视频，社区称「又回来了」）；（2）**Operation Cheepseek Phase 4**：送 **100 美元** DeepSeek V4.1 Flash 用量；（3）**2.2.3** 上线图像生成工具，支持 OpenAI / Gemini / Grok 等，面向概念 UI 与游戏参考图。三条帖合计点赞破万，收藏亦高。

**为何值得看**：OpenCode 继续用「订阅互通 + 廉价推理额度 + 多模态工具」打差异化——不是又一个 CLI 皮肤，而是把模型采购与 agent 工作流绑在同一入口。

- opencode：Claude 订阅可用：https://x.com/opencode/status/2116198602523513081  
- opencode：Cheepseek Phase 4：https://x.com/opencode/status/2116209960673800474  
- opencode：图像生成工具：https://x.com/opencode/status/2116203934033354866  
- DanielSmolsky：订阅回归演示：https://x.com/DanielSmolsky/status/2116193957675769917

![OpenCode image gen and Cheepseek](/images/twitter-hots/2026-10-31/03-opencode-imagegen.jpg)

---

## 4. Project Suncatcher：轨道 TPU 跑出第一首 haiku

**要点**：@sundarpichai 宣布 Project Suncatcher 的 **hello world**：原型卫星升空数周后，地面成功上行指令、启动轨道 TPU、跑完提示并收回完整回复——一首 haiku。帖配演示视频，点赞破 1.6 万。

**为何值得看**：把「太空算力」从概念片推进到可验证的闭环（发令→推理→回传）。对 AI coding 圈的意义不在写代码，而在提示：模型与 agent 的算力供给叙事已开始长出地外一章。

- sundarpichai：hello world 官宣：https://x.com/sundarpichai/status/2116214866444943853

![Project Suncatcher haiku](/images/twitter-hots/2026-10-31/04-suncatcher.jpg)

---

## 5. Anthropic Messages API：零 Rust 开发者，用 Claude 重写，CPU 降约 40–50%

**要点**：@somi_ai 引用 Latent Space 访谈要点：Anthropic **用 Rust 重写 Messages API**，团队里**没有 Rust 开发者**——Claude 写代码，人写计划并对照真实流量校验新旧一致，**CPU 下降约 40–50%**。结论句很冲：「never do the big rewrite」大概过时了。

**为何值得看**：这是「模型写生产基础设施」的公开案例，而且落在所有 Claude API 用户脚下的那一层——比又一个 vibe-coding demo 更接近「agent 改写运维默认假设」。

- somi_ai：摘要与播客引用：https://x.com/somi_ai/status/2116050219989373170

![Anthropic Messages API Rust rewrite](/images/twitter-hots/2026-10-31/05-anthropic-rust.jpg)

---

## 6. pi-durable：性能优化，一步一提交的可恢复 agent 运行时

**要点**：@badlogicgames（Mario）分享 **pi-durable** 一轮性能优化：agent 每一步先写入数据库再继续，**1 save = 1 commit**，崩溃可从上次提交恢复；典型一次运行约 12 次提交。配图展示优化前后对比。

**为何值得看**：在「长跑 agent 中途挂掉」仍是常态时，把耐久性做成默认原语，比堆更多工具调用更能决定你敢不敢让 agent 过夜跑。

- badlogicgames：pi-durable 优化说明：https://x.com/badlogicgames/status/2116078693827428383

![pi-durable performance](/images/twitter-hots/2026-10-31/06-pi-durable.jpg)

---

## 7. Grok Bot：能看手机屏幕；Elon 称「当同事」

**要点**：@everestchris6 演示：长按 Action 按钮，**Grok Bot 可读当前手机屏幕**——问正在看的视频、把 Reel 想法做成业务原型、拆解正在读的文章；并称以免费 iPhone Shortcut 开源。@elonmusk 另帖把 Grok Bot 定位为 **work colleague**（引用「更像同事、少废话」的体感）。

**为何值得看**：视觉上下文从「你粘贴截图」变成「按住就能问屏幕」——手机端 agent 的入口成本再降一档；同事隐喻则在定调产品人格。

- everestchris6：屏幕视觉演示：https://x.com/everestchris6/status/2116183923747422477  
- elonmusk：Think of Grok Bot as a work colleague：https://x.com/elonmusk/status/2116305829381263528

![Grok Bot phone screen](/images/twitter-hots/2026-10-31/07-grok-phone.jpg)

---

## 8. Rex：浮动窗格演示（可脚本 / API 驱动）

**要点**：@mitchellh 放出 Rex **floating panes** 演示：日常工作流里的浮动窗格观感与用法，并强调**全部可脚本化、API 驱动**。视频较长，社区把它放在 Ghostty / 终端工作区后继工具线里讨论。

**为何值得看**：终端与本地 agent 工作区的 UX 竞赛还在加码——「好看 + 可脚本」同时成立，才有机会成为默认承载层。

- mitchellh：浮动窗格演示：https://x.com/mitchellh/status/2116296333506359646

![Rex floating panes](/images/twitter-hots/2026-10-31/08-rex-panes.jpg)

---

## 9. Gemini Drops：Argon、Skills，Mac 版可切进 Antigravity

**要点**：@GeminiApp 发布 **Gemini Drops** 线程：复杂项目用 **Gemini 4 Argon**；自定义 **Skills** 复用提示；**Mac 版 Gemini 可在聊天与 Google Antigravity 编码环境之间切换**（本地构建、调试、原型）；Windows 桌面版快捷键唤起。社区跟帖把「聊天想法 → agent 构建」无缝切换当成最大卖点。

**为何值得看**：继 Jules 并入 Antigravity 的叙事之后，Google 把 coding agent **嵌进日常 Gemini 客户端**——分发入口从独立 IDE 扩到「已经打开的聊天窗」。

- GeminiApp：Drops 总述：https://x.com/GeminiApp/status/2116304609383710988  
- GeminiApp：Mac 切 Antigravity：https://x.com/GeminiApp/status/2116305158602936827

![Gemini Drops Antigravity](/images/twitter-hots/2026-10-31/09-gemini-drops.jpg)

---

## 10. Skydive：给 AI 同事一间 3D 办公室

**要点**：@getskydive 宣布对所有人开放：组建 agent 团队，在 **3D 办公室**里看着他们干活，任务可从 Slack / 邮件 / iMessage / Web 下达；认领公司域名可把办公室放到地图上，本周免费。视频演示视觉冲击强，收藏接近点赞。

**为何值得看**：把多 agent 协作从列表与日志，拉成可参观的空间隐喻——无论产品是否持久，它都在测试「人是否愿意盯着 agent 上班」这一交互假设。

- getskydive：开放与演示：https://x.com/getskydive/status/2116222751895855452

![Skydive AI office](/images/twitter-hots/2026-10-31/10-skydive.jpg)

---
