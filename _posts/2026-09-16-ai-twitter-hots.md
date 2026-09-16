---
layout: post
title: AI Twitter 热点 · 2026-09-16
categories: AI
description: 过去一天 AI coding / 模型 / 产品的高信号动态摘要（按产品合并）
keywords: AI, Twitter, Claude Code, Cline, Copilot, Codex, Antigravity, OpenClaw
---

# AI Twitter/X 热点 Digest · 2026-09-16（周三）


## 今日要点

1. **Claude Code**：2.1.273 网关观测头、Remote Control fork，以及一长串生产修复。  
2. **Cline**：Desktop 0.0.28 + CLI 3.0.62 / SDK，桌面体验与 Plugins Hub、流式 / checkpoint 提速同线推进（Desktop 产品叙事自 9/14）。  
3. **GitHub Copilot**：自定义属性建议值、CLI 上下文管理工具开关、auto 选模三档（9/14 再发酵）一并跟踪。  
4. **Antigravity CLI 1.2.3**：`/copy btw`、tool-choice 保真与 hooks / MCP 修复。  
5. **Codex** rust 0.155 alpha 列车继续推；**OpenClaw** 主仓持续合入（非新开源）。

---

## 1. Claude Code：2.1.273 网关遥测与 Remote Control fork

**要点**：npm `@anthropic-ai/claude-code` **2.1.273**（约 **2026-09-15 18:06 UTC**）带来可选的 `x-claude-code-*` 请求头（`CLAUDE_CODE_GATEWAY_HINT_HEADERS=1`），方便 LLM 网关看到 request class、agent type、compaction 等信号；支持从 Claude app fork 以 `--remote-control` / `/remote-control` 起的会话，fork 在本机后台跑。同包还修了 MCP 断连提示、Bedrock/Vertex/Foundry 401/403 误导成 `/login`、sub-agent 结果丢失、context meter 双计等一长串生产问题。前一版 **2.1.272**（9/14 末）偏稳定性；**2.1.271** 的 Remote fast mode / `allowed_domains` 仍是本周主线。

**为何值得看**：企业网关与 Remote Control 要的是「可观测 + 可恢复」，而不只是又一个模型开关。

- CHANGELOG：https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md  
- npm：https://www.npmjs.com/package/@anthropic-ai/claude-code  

---

## 2. Cline：Desktop 0.0.28 与 CLI 3.0.62 同线发版

**要点**：同一条 harness 线本窗同时推进桌面与 CLI。

**Desktop 0.0.28**（约 **2026-09-15 07:55 UTC**）：后端启动慢时不再卡在 “Desktop backend unavailable”；中日文 IME 确认不再误发半成品消息；模型列表每次打开刷新；Cline 登录卡说明免费模型 / ClinePass；Cline Pass 默认落到订阅档模型而非最新 free 条目；临时 provider 错误最多重试三次。官方博文 **2026-09-14** 已介绍 Desktop（并行会话、Schedule、从 Claude Code/Codex 导入等）——本窗是发版迭代，不是「今日刚开源」。

**CLI 3.0.62 / SDK v0.0.83**（约 **2026-09-15 06:04 UTC**）：启动时指向 Desktop 的一次性提示；Agent Plugins 经 Hub 发现/校验，skills 以 `plugin-name:skill-name` 暴露；流式输出不再被 Hub 全量 session round-trip 卡住；大未跟踪目录下 checkpoint 用持久索引避免每条消息全量哈希；修了后台子进程挂死、`@` 提及 OOM、`apply_patch` Add File 覆盖等。

**为何值得看**：开源权重路线要追上闭源 harness，桌面层体验与 CLI 插件治理 / 长会话性能是同一块拼图。

- Desktop：https://github.com/cline/cline/releases/tag/desktop-v0.0.28  
- CLI：https://github.com/cline/cline/releases/tag/cli-v3.0.62  
- 博文（9/14）：https://cline.bot/blog/cline-desktop-an-open-source-app-for-open-weight-models  
- 下载：https://cline.bot/desktop  

---

## 3. GitHub Copilot：治理元数据、CLI 上下文工具与 auto 三档

**要点**：本窗 Copilot 相关动态合并跟踪。

**自定义属性建议值**（Changelog **2026-09-15**）：企业/组织创建 repository custom property 时，Copilot 可根据属性名建议 allowed values；面向 Copilot Business / Enterprise 公测，可用策略开关控制。

**CLI 1.0.84-9**（约 **2026-09-15 20:05 UTC**）：`/settings` 可选择为 agents / subagents 启用 context management tools；缩短大型本地 session 历史的 metadata 扫描；另有折行、`--share=~/...`、MCP 在 IDE bridge 下加载失败等修复（prerelease 线）。

**auto 选模三档**（Changelog **2026-09-14**，窗内再发酵）：efficiency / balance / intelligence，各档共用模型池，仍按单次 prompt 选模；在 VS Code、Copilot CLI 与 Copilot app 滚动放出。

**为何值得看**：coding agent 一边碰仓库治理元数据，一边把上下文工具与选模偏好做成可声明的产品面。

- 自定义属性：https://github.blog/changelog/2026-09-15-github-copilot-suggests-custom-properties-definitions/  
- CLI：https://github.com/github/copilot-cli/releases/tag/v1.0.84-9  
- auto 三档：https://github.blog/changelog/2026-09-14-configure-cost-and-quality-in-copilot-auto-model-selection/  

---

## 4. Antigravity CLI 1.2.3：旁路问答与 tool-choice 保真

**要点**：`google-antigravity/antigravity-cli` **1.2.3**（约 **2026-09-15 02:03 UTC**）：`/copy btw` 可复制折叠的 `/btw` 旁路问答全文；把 per-request tool-choice（any/required/named）翻译成后端原生 function-calling 配置；修了 `/hooks` 漏列插件内 hooks、带 `enable_mcp_tools` 的自定义 subagent 拿不到父级 MCP 列表、前几轮误触发反馈提示等问题。

**为何值得看**：旁路问答与 tool-choice 保真，是「CLI 当主工作面」时的细节分水岭。

- 发布：https://github.com/google-antigravity/antigravity-cli/releases/tag/1.2.3  

---

## 5. Codex：rust 0.155 alpha 列车继续推

**要点**：`openai/codex` 在 **2026-09-15** 连续打出 rust **0.155.0-alpha.5 → alpha.8**（alpha.8 约 **22:26 UTC**），npm `@openai/codex` 同步到 **0.155.0-alpha.8** 多平台包。GitHub release body 基本为空——当作预发布列车信号即可，稳定 / Python SDK 仍停在 **0.154.0** 叙事附近。不要写成「正式大版本今日发布」。

**为何值得看**：跟踪 Codex harness 演进时，alpha 节奏本身就是信号；落地仍以有 notes 的稳定版为准。

- 发布：https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.8  

---

## 6. OpenClaw：主仓持续合入（非新开源）

**要点**：`openclaw/openclaw` 最新正式 tag 仍是 **v2026.9.4**（**2026-09-11**）。本窗可见主仓在 **2026-09-16 00:xx UTC** 附近持续合入测试 / 重构与 `fix(codex): …` 一类改动——说明 Codex runtime 相关路径仍在热修。suggested task / Control UI 等能力是既有产品线再发酵，不是今天新立仓。

**为何值得看**：多 session 委派正在变成各家 harness 的默认动作，这条仓还在热着。

- 仓库：https://github.com/openclaw/openclaw  

