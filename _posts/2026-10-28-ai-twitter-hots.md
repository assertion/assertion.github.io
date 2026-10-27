---
layout: post
title: AI Twitter 热点 · 2026-10-28
categories: AI
description: 过去一天 X 上 AI coding / 模型 / 产品的高信号讨论摘要
keywords: AI, Twitter, Cursor, Annotate, FrontierCode, Anthropic, Grok Bot, tibot, Claude Code, DeltaDB, Liquid AI, LFM3, LangChain, OpenAI, DeepSeek
lang: zh
translation_key: ai-twitter-hots-2026-10-28
issue: 47
item_count: 10
headline: "Cursor 设计模式上线 Annotate，Cognition 发 FrontierCode 2.0，Anthropic 工程师称编码面试已死"
highlights:
  - label: "Cursor Annotate"
    text: "Design Mode 新增 Annotate：给 agent 画圈改元素、跨尺寸审设计，把视觉提示直接喂进 coding agent。"
  - label: "FrontierCode 2.0"
    text: "Cognition 发布新基准：不只「写不写得出」，还问「你会不会 merge 这个 PR」；Opus 5.5 / GPT-6 Astra 领跑。"
  - label: "编码面试已死"
    text: "Anthropic 工程师 @felixrieseberg 称本队已拿掉 coding interview；收藏量与点赞几乎持平，讨论招聘信号。"
products: [Cursor, Annotate, FrontierCode, Cognition, Anthropic, Claude, Grok Bot, tibot, Claude Code, DeltaDB, Zed, Liquid AI, LFM3, LangChain, DeepSeek, OpenRouter]
stats:
  - value: "4784"
    caption: "Anthropic 药物研发合作帖点赞（收藏约 1423）"
  - value: "2317"
    caption: "Cursor Design Mode Annotate 帖点赞（收藏约 592）"
  - value: "2021"
    caption: "「编码面试已死」帖收藏（点赞约 2027）"
stat:
  value: "4784"
  caption: "Anthropic 药物研发合作帖点赞（收藏约 1423）"
---

# AI Twitter/X 热点 Digest · 2026-10-28（周三）


## 今日要点

1. **Cursor 把设计稿变成 agent 输入**：Design Mode 新增 Annotate，可圈选元素、手绘标注、按屏幕尺寸审稿，让视觉提示直接进入 coding agent 回路。  
2. **评测从「写对规格」升级到「敢不敢 merge」**：Cognition 发布 FrontierCode 2.0；同日 Zed 让 Claude Code 通过 `/delta share` 进入多人同线程。  
3. **人与 agent 的分工继续重写**：Anthropic 工程师拿掉 coding interview；Grok Bot 侧既晒「为 agent 友好写代码」的吞吐，也放出帮看 mentions 的 tibot。

---

## 1. Cursor Design Mode：Annotate 把视觉提示交给 agent

**要点**：@cursor_ai 宣布 Design Mode 新能力 **Annotate**——给 agent 视觉提示：编辑页面元素、在页面上直接涂画，并按不同屏幕尺寸审设计。配套快捷键 Cmd+Shift+D 可从浏览器进入。社区跟帖称「design mode glowup」值得被研究。

**为何值得看**：coding agent 的输入不再只是自然语言与 diff——设计稿上的圈画成为一等公民提示，IDE 竞争扩到「设计和实现是否同一次会话」。

- cursor_ai：Annotate 发布：https://x.com/cursor_ai/status/2115159585548021814  
- cursor_ai：Cmd+Shift+D 入口：https://x.com/cursor_ai/status/2115159597489225937
- johnbai：design mode glowup：https://x.com/johnbai/status/2115185447601312013

![Cursor Design Mode Annotate](/images/twitter-hots/2026-10-28/01-cursor-annotate.jpg)

---

## 2. Cognition FrontierCode 2.0：敢不敢 merge 这个 PR

**要点**：@cognition 发布 **FrontierCode 2.0**——多数 coding eval 只测「是否满足规格」，FrontierCode 追问「你真的会 merge 这个 PR 吗」。任务由对应开源仓维护者打造（每题 40+ 小时），约 80% 审计后参考解优于上游 PR。性价比图上：Opus 5.5 与 GPT-6 Astra 领跑智力档；GPT-6.1 Sol 以约 \$1.03/task 打出成本效率；榜单排序与 DeepSWE / 前代明显不同。

**为何值得看**：当模型都能「写出能跑的补丁」时，下一道门槛是可维护性与审查品味——基准开始模拟真实 merge 决策，而不只是单元测试绿灯。

- cognition：FrontierCode 2.0 官宣：https://x.com/cognition/status/2115132488775524793  
- cognition：性价比分档：https://x.com/cognition/status/2115132491107651933  
- cognition：与 1.1 / DeepSWE 排序差异：https://x.com/cognition/status/2115132493259321443

![Cognition FrontierCode 2.0](/images/twitter-hots/2026-10-28/02-frontiercode-2.jpg)

---

## 3. Anthropic 工程师：本队编码面试已死

**要点**：@felixrieseberg（Anthropic）写道：至少在他的团队，**coding interview 已经死了**——不再提供有效信号，本月已从面试流程移除；同时给出偏乐观的看法：初级工程师反而可能迎来新机会（链博文）。该帖收藏数与点赞几乎持平，偏「可收藏的招聘方法论」传播。

**为何值得看**：当一线模型公司公开拿掉现场写题，说明「人写算法题」与「人驾驭 agent 交付系统」之间的信号错位已经被写进招聘流程。

- felixrieseberg：coding interview is dead：https://x.com/felixrieseberg/status/2115200995546566910

![Coding interview dead at Anthropic](/images/twitter-hots/2026-10-28/03-coding-interview.jpg)

---

## 4. Grok Bot：tibot 看 mentions，代码库为 agent 友好而改

**要点**：@poteto 公开 **tibot**——用 Grok Bot 管理 X 账号：抓取关于你或关键词的帖（不论是否 @）、日更/小时摘要、滤垃圾、翻译非英语、可自动拉黑，但**从不代发**。另帖称 Grok Bot 团队把「容易做的事做成对的事」，让工程师/设计/PM 每天合入数百 PR；强调 token 消耗大量落在维护质量，而不只是新功能。两条合在一起：产品侧做个人情报 agent，工程侧把仓库改成 agent 友好。

**为何值得看**：个人 agent 叙事从「帮你写代码」扩到「帮你读社交噪声」；同时「为 agent 改代码库」成为可公开炫耀的工程文化，而不只是内部工具链八卦。

- poteto：分享 tibot：https://x.com/poteto/status/2115205951649423585  
- poteto：为 agent 友好写代码：https://x.com/poteto/status/2115133011352240581

![Grok Bot tibot / agent-friendly shipping](/images/twitter-hots/2026-10-28/04-tibot-grokbot.jpg)

---

## 5. Claude Code 多人模式：`/delta share` 共享线程与未提交改动

**要点**：@zeddotdev 宣布 **Claude Code is now multiplayer**：在 Claude Code 里运行 `/delta share`，队友以自己的会话加入，共享完整上下文与未提交工作，双方在同一线程上协作，底层由 **DeltaDB** 支撑。同线程另发 Delta CLI，方便给其他工具加 DeltaDB；下一步计划接入 Zed 与 Pi。

**为何值得看**：coding agent 从「单人终端会话」走向「可共享的工作线程」——协作单元变成上下文+工作树，而不只是 Git 分支名。

- zeddotdev：Claude Code multiplayer：https://x.com/zeddotdev/status/2115135016233509239  
- zeddotdev：Delta CLI：https://x.com/zeddotdev/status/2115135017512755710

![Claude Code multiplayer /delta share](/images/twitter-hots/2026-10-28/05-claude-multiplayer.jpg)

---

## 6. Anthropic：Claude 进入药物研发与生命科学

**要点**：@AnthropicAI 称过去数月科学家与六家新药研发组织深度合作，并启动自有药物发现工作；博文分享早期结果，以及 Claude 如何支撑药物开发多阶段。该帖是当日互动最高的官方帖之一。

**为何值得看**：模型公司的「垂直落地」叙事从 coding / customer support 扩到受监管的生命科学——对 agent 可靠性与可审计性的要求会反向约束通用产品。

- AnthropicAI：药物研发合作：https://x.com/AnthropicAI/status/2115178675050307942

![Anthropic Claude drug discovery](/images/twitter-hots/2026-10-28/06-anthropic-drug.jpg)

---

## 7. trq212：需要一种「可被 agent 改、又能自动合上游」的开源分发

**要点**：@trq212 认为需要新的开源软件分发方式：人们能用 agent 修改，同时自动获得上游合并；coding agents 理论上能做，但不会自动发生。帖文收藏与讨论热烈，和同日「agent 改仓库 / multiplayer 会话」互相印证。

**为何值得看**：当改代码的边际成本下降，「分叉 vs 上游」的摩擦会成为新产品缺口——比又一个 agent IDE 更接近基础设施层问题。

- trq212：agent-modifiable OSS：https://x.com/trq212/status/2115188992861970693

![OSS distribution for agents](/images/twitter-hots/2026-10-28/07-oss-agents.jpg)

---

## 8. thdxr：DeepSeek 流量一台机架就能扛，缺的是创造需求的产品

**要点**：@thdxr 把需求说透：OpenRouter 作为最成功的模型路由，其 DeepSeek 流量几乎可被单台 GB300 机架吃下（估值约 6–7M 级）；即便暗盘需求再高一个数量级，算力盘子仍有限。另帖追问 neocloud → inference → router 链条尽头：「没有创造需求的产品，这些 OSS 产能去哪」——**someone's gotta make the apps**。

**为何值得看**：开源权重热与 GPU 扩产叙事撞上「谁来做应用」——对做 coding agent / harness 的人，这是需求侧而不是供应侧的 bell。

- thdxr：OpenRouter / DeepSeek 需求量级：https://x.com/thdxr/status/2115165365630026178  
- thdxr：someone's gotta make the apps：https://x.com/thdxr/status/2115085009220780377  
- thdxr：看不见的 DeepSeek 需求？：https://x.com/thdxr/status/2115149884890198356

![thdxr OSS inference demand](/images/twitter-hots/2026-10-28/08-thdxr-demand.jpg)

---

## 9. Liquid AI LFM3：~2B 开源权重，专训进 agent harness

**要点**：@omarsar0 转发并解读 **Liquid AI LFM3**：约 2B 开源权重家族，覆盖文本/视觉/音频/omni/决策，共享骨干；LFM3-1.7B 针对 Hermes Agent、Pi 等 harness 训练，256K 上下文；Liquid 自评 WebArena-Verified 38.4 vs Qwen3.5-9B 的 28.9，可单卡微调，指向 always-on 本地 agent。

**为何值得看**：小模型叙事从「能聊天」转向「能塞进常驻 harness」——本地 agent 的胜负手变成工具调用与长上下文，而不只是参数量广告。

- omarsar0：LFM3 解读：https://x.com/omarsar0/status/2115134865733828918

![Liquid AI LFM3](/images/twitter-hots/2026-10-28/09-lfm3.jpg)

---

## 10. LangChain：开源内部 Design Agent（Content Studio）

**要点**：@hwchase17 分享团队如何做出设计 agent（附开源），用于幻灯片、GIF、图片等，自己每周用多次；相关讨论指向 Slack 里做品牌一致视频/图形/Deck 的 **Content Studio**。收藏高于点赞，偏「可拿走就用」的工程帖。

**为何值得看**：设计 agent 与 Cursor Annotate 同一日出现——一边是 IDE 吃设计输入，一边是增长/品牌侧把设计生产 agent 化，两端同时产品化。

- hwchase17：design agent deepdive：https://x.com/hwchase17/status/2115130348187349104

![LangChain design agent](/images/twitter-hots/2026-10-28/10-langchain-design.jpg)

---
