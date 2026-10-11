---
layout: post
title: AI Twitter 热点 · 2026-10-12
categories: AI
description: 过去一天 X 上 AI coding / 模型 / 产品的高信号讨论摘要
keywords: AI, Twitter, Codex, GPT-6.1 Sol, Grok Bot, poteto, Yobiru, Claude Mods, Cursor Projects, Open Agent Connect, Sofatap
lang: zh
translation_key: ai-twitter-hots-2026-10-12
issue: 31
item_count: 10
headline: "Codex 默认上下文涨到 500k，Grok Bot 买到 iPhone，agent 之间开始互相叫醒"
highlights:
  - label: "Codex Day 7：上下文加长且不加价"
    text: "Tibo 宣布 GPT-6.1 Sol 在 Codex 与 Work 里默认上下文从 272k 提到 500k（约 +80%），订阅用量不收 long context 附加费，长任务更少被迫 compaction。"
  - label: "Grok Bot 从「能下单」变成「真帮忙」"
    text: "有人让 Bot 用虚拟卡买到全球缺货的 iPhone 18 Pro Max；Elon 转发称把它当 24/7 超级员工；poteto 一篇「不知道用 Bot 干嘛」的帖几乎攒到三千收藏。"
  - label: "agent 互联与「好代码」定义一起翻盘"
    text: "Yobiru 开源让跨机 agent 经 Tailscale 互发消息并叫醒对方；Open Agent Connect 接入 Grok Bot；poteto 掀起「agent 时代还要不要 clean code」大讨论，DHH 与 Addy Osmani 跟进。"
products: [Codex, Grok Bot, Claude Code, Cursor, Yobiru]
stats:
  - value: "500k"
    caption: "GPT-6.1 Sol 在 Codex / Work 的新默认上下文长度（原 272k）"
  - value: "80%"
    caption: "相对旧默认上下文的提升幅度"
  - value: "870"
    caption: "poteto 问「这周用 Grok Bot 干了啥」收到的回复数"
stat:
  value: "500k"
  caption: "GPT-6.1 Sol 在 Codex / Work 的新默认上下文长度（原 272k）"
---

# AI Twitter/X 热点 Digest · 2026-10-12（周一）


## 今日要点

1. **Codex「28 天」Day 7 是真·加长上下文**：@thsottiaux 宣布 **GPT-6.1 Sol** 在 Codex 与 ChatGPT Work 里默认上下文从 **272k → 500k**（约 **+80%**），并明确订阅用量 **不收 long context 附加费**——长任务少 compaction，是这周最硬的产品改动。  
2. **Grok Bot 继续证明「能办事」**：@liam_fallen 让 Bot 用虚拟卡邮件问店、下单，买到全球缺货的 **iPhone 18 Pro Max**；@elonmusk 转发说「认真的，这真的行」，把它比作 24/7 超级员工；@poteto 一篇「不知道用 Bot 干嘛」几乎攒满 **三千收藏**。  
3. **agent 之间开始互叫，写作风格也在重估**：@turingou 开源 **Yobiru**（Tailscale 上跨机发消息 / 叫醒）；@newfish 的 Open Agent Connect 接入 Grok Bot；@poteto 抛出「2026 年 Good Code 还该不该优先可读性」，@dhh 与 @addyosmani 都下场。

---

## 1. Codex Day 7：GPT-6.1 Sol 默认上下文 500k

**要点**：Tibo「28 天」连载第 7 天没有再玩额度 Reset，而是直接上产品：**通过 Codex 与 Work 使用 GPT-6.1 Sol 时，默认上下文从 272k 提到 500k**（约 80% 提升），并表示以后还会再加。他自回补充：这次改动后，**从订阅扣用量时不再收取 long context 费用**。社区解读是——长会话少被迫 compaction，大仓库 / 多文件任务更扛得住。

**为何值得看**：昨天是「放水日」，今天是「加长窗口且不加价」。对正在刷 Codex 长任务的人，这比再发一个小功能更能立刻摸到。

- Tibo Day 7 / 500k：https://x.com/thsottiaux/status/2109430343346581527  
- 订阅不收 long context 费：https://x.com/thsottiaux/status/2109430894604026039

![Codex Day 7 500k context](/images/twitter-hots/2026-10-12/01-codex-day7.jpg)

---

## 2. Grok Bot：缺货 iPhone 也能买到，Elon：「当超级员工用」

**要点**：@liam_fallen 说全网买不到 **iPhone 18 Pro Max**（连 Apple 都要等到十月底），于是给 Grok Bot 一张虚拟卡：Bot **发邮件问店 → 找到有货 → 核验下单 → 送到家**；他用这台新手机写的帖子。@elonmusk 引用后说「**Seriously, this actually works!**」，并建议把 Grok @Bot 当成 **24/7、极其机灵的超级员工**，几分钟就能在手机上用起来。

**为何值得看**：昨天还是「拍卡下单」的概念演示，今天已经是「全球缺货也能扫货」的用户故事 + 官方背书——消费级 agent 叙事继续升温。

- Liam：Bot 买到 iPhone 18 Pro Max：https://x.com/liam_fallen/status/2109332219126784098  
- Elon：当真能用，当员工雇：https://x.com/elonmusk/status/2109387553010851887

![Grok Bot bought an iPhone](/images/twitter-hots/2026-10-12/02-grok-iphone.jpg)

---

## 3. poteto：agent 时代还要不要 clean code？

**要点**：@poteto 先发长帖：**代码库里一直有 slop**，过去因为软件大多不需要形式化完美，大家用测试与可观测性换速度；agent 会让平均质量在规模上更好，真正的新手艺是「把 agent 用出显著生产力差」。跟帖里大量人守「可维护性 / clean code」，她再抛：**这些原则诞生于人类维护代码的时代，在 agent 写几乎全部代码时要更新先验**——「给人读」的间接层往往换来性能代价。@dhh 同意：代码从贵且慢变成便宜且快之后，架构与设计需要 **grounds-up rethink**；@addyosmani 则补刀：规模上的「更好」来自 **verification 变便宜**，人审的是证据与闭环，而不只是 diff。

**为何值得看**：这不是又一场 vibe coding 嘴仗，而是一线重度 agent 用户在重写「Good Code」定义——直接决定你明天还要不要为「人读起来优雅」付性能税。

- poteto：codebases always had slop：https://x.com/poteto/status/2109110547824378140  
- poteto：更新 Good Code 先验：https://x.com/poteto/status/2109356992032817621  
- DHH：架构要从头重想：https://x.com/dhh/status/2109414545181831476  
- Addy：质量来自 agent 可自跑的验证环：https://x.com/addyosmani/status/2109384286763958742

![poteto Good Code debate](/images/twitter-hots/2026-10-12/03-poteto-good-code.jpg)

---

## 4. Yobiru：让跨机 agent 互发消息、互相叫醒

**要点**：@turingou 把前几天的「agent 互聊脚本」整理成开源项目 **Yobiru**（ヨビル，日语「叫醒」）：只要机器都在 **Tailscale** 上，Grokbot、家里 Mac 的 Codex、东京工作站的 Claude Code 就能直接互发消息、传文件；**没有中心服务器**，消息只带下载地址与 sha256，是否被叫醒、能叫醒谁由收件方决定。真实用法包括：Grokbot 让家里 Codex 控 3D 打印机、整理书签交给东京侧做产品、订餐后由家里 Codex 经微信发出（先等人确认）、查猫粮并自动补货。仓库 [chekusu/yobiru](https://github.com/chekusu/yobiru) 创建于 **2026-10-10**，今日正式介绍带动传播。

**为何值得看**：个人 agent 的短板一直是「云端电脑碰不到局域网」；Yobiru 用极简协议把多机、多供应商 agent 串成一张可叫醒的网——和昨天的「沙发办公」是同一条线的工程落地。

- turingou：开源 Yobiru：https://x.com/turingou/status/2109153922267107458

![Yobiru agent wake messaging](/images/twitter-hots/2026-10-12/04-yobiru.jpg)

---

## 5. Open Agent Connect：Grok Bot 可私信另一台机器上的 Claude Code / Codex

**要点**：@newfish 宣布 **Open Agent Connect 已支持 Grok Bot**：云端 Grok Bot 与笔记本上的 Claude Code / Codex 各自拿到网络身份，可发送加密私信。有人概括为「agent 刚有了中立层」——网络不属于任何一家供应商。这和 Yobiru「家局域网叫醒」互补：一个偏公钥身份互联，一个偏 Tailscale 私网互叫。

**为何值得看**：跨 harness、跨机器协作正在从「自己写脚本」变成有人愿意产品化的能力；Grok Bot 作为云端入口，本地 coding agent 作为干活的手，这个分工会越来越常见。

- newfish：OAC + Grok Bot：https://x.com/newfish/status/2109312460943749407  
- Lufe：agent 的中立层：https://x.com/Lufe77Liya77/status/2109319576517284104

![Open Agent Connect Grok Bot](/images/twitter-hots/2026-10-12/05-oac-grok.jpg)

---

## 6. Claude Mods：在终端里改 Claude Code 自己的 UI

**要点**：Anthropic 给 Claude Code（CLI 与桌面）加了 **Mods**——可改行为与界面的扩展。社区这两天在认真玩：@nkgoutham 做了两个 mod（仿 Grok Build 的 UI、终端内文件面板），并开源 marketplace；波兰圈有长文入门；也有人提醒 **第三方 mod 等于供应链依赖**，安装前先读代码。中文侧有人用 mods 在桌面会话里挂上 5h/7d 额度、上下文窗口、缓存命中率与子 agent 进度。

**为何值得看**：Hooks / Skills 之后，Mods 把「改 harness 本身」变成一等能力——好处是深度定制，风险是每一个插件都可能改 prompt 或挡工具调用。

- nkgoutham：folio / tint mods：https://x.com/nkgoutham/status/2109200494224924788  
- Kacper：Mods 功能介绍：https://x.com/KacperTrzepiec1/status/2109206634299883612  
- Mohak：把 hooks 当依赖审：https://x.com/MohakBajaj5/status/2109160614979596624

![Claude Mods customization](/images/twitter-hots/2026-10-12/06-claude-mods.jpg)

---

## 7. Claude Code × GitHub：七个开源仓把 harness 叠厚

**要点**：@Marlenuii 两条高收藏帖列出「Claude Code + GitHub」组合拳：以 **Claude Code** 为中心，叠 **Agent Skills**、并行 worker、评审 agent 等开源仓，做出 Sonnet 路由、Haiku 并行执行、Opus 复审一类编排。帖子本身是清单式传播，但信号清楚——**单靠官方 CLI 已经不够，人们在用公开仓把多模型流水线焊死**。

**为何值得看**：和昨日「主 agent 拆活、子 agent 早提交」同一条工程线：工具给了并行，社区在标准化「怎么焊」。

- Marlenuii：7 仓强化 Claude Code：https://x.com/Marlenuii/status/2109323814672724093  
- Marlenuii：编排更疯的 10 仓清单：https://x.com/Marlenuii/status/2109249955722338690

![Claude Code GitHub repos](/images/twitter-hots/2026-10-12/07-claude-github.jpg)

---

## 8. Cursor Projects：编排与长任务仍被点名为「顶配」

**要点**：Projects 放量后的用户侧余波还在：@kiaraplds 称 **Cursor Projects 是顶配**，适合 agent 编排与长跑任务；@naoufal_elh 更直接——「不用 Projects 建东西，大概就比用了的人慢」。也有人吐槽 Claude Projects「协调器不怎么协调」，对照之下更凸显 Cursor 这条线的体感优势。

**为何值得看**：产品放行之后，口碑战从「能不能开」变成「开了之后能不能少当保姆」——Projects 正在变成重度用户的默认工作区单位。

- kiaraplds：Projects 顶配：https://x.com/kiaraplds/status/2109257732700172345  
- naoufal_elh：不用就更慢：https://x.com/naoufal_elh/status/2109253381248463349

![Cursor Projects orchestration](/images/twitter-hots/2026-10-12/08-cursor-projects.jpg)

---

## 9. Sofatap：手机解锁 Windows，语音 / 手势喂给 Codex

**要点**：@turingou 为「客厅电视 + RTX 5090 出图时，不想再摸键鼠」做了 **Sofatap**：手机可解锁家里 Windows PC，用自然语言让机上的 **Codex** 开关应用，或用触摸手势直接驱动鼠标指针。他准备打磨后上架应用市场并开源。这和 Yobiru、Grokbot 沙发流是同一套个人 Agent OS 拼图。

**为何值得看**：云端 bot 再强，也替代不了「手边那块屏」对本地 GPU / 局域网软件的控制欲——Sofatap 把手机变成远端键鼠 + Codex 遥控器。

- turingou：Sofatap：https://x.com/turingou/status/2109295035732926572

![Sofatap phone to Windows Codex](/images/twitter-hots/2026-10-12/09-sofatap.jpg)

---

## 10. Grok Bot 用例目录：870 条回复压成 263 个可抄作业

**要点**：@poteto 问大家「这周用 Grok Bot 干了啥」，帖下涌进约 **870 条回复**；她又发帖：不知道用 Bot 干嘛就丢给 @bot 去读那条长帖要建议——该帖接近 **三千收藏**。@thisiskp_ 把回复整理成 **Bot Usecases** 站点，抽出 **263 个**真实用例（修路灯、求婚企划、像素游戏……）。Elon 的「当员工雇」和社区的「用例目录」同一天碰面。

**为何值得看**：工具爆发期最缺的不是功能列表，而是「别人已经用它办成了什么」。870 → 263 是一份可检索的答案。

- poteto：丢给 Bot 读用例帖：https://x.com/poteto/status/2109326308950032501  
- thisiskp_：263 个 Bot Usecases：https://x.com/thisiskp_/status/2109352523677233261

![Grok Bot use cases catalog](/images/twitter-hots/2026-10-12/10-grok-usecases.jpg)

---
