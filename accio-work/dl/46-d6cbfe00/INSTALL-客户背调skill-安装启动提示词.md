# 客户背调 Skill · 安装 + 启动提示词（对话式）

> Skill 名：`alibaba-customer-deepdive-dashboard` (v3)
> 作用：对单个阿里国际站买家做深度背调，产出 **D 档时尚高饱和交互式 HTML 看板**，全程**反幻觉 + OSINT 公网交叉验证硬卡点**。
> 分发包：`alibaba-customer-deepdive-dashboard-v3-20260601.zip`（14 个核心文件，含 SKILL.md / audit / prompts×6 / template / reference / ONBOARDING）

---

## 一、安装提示词（直接对你的 Agent 说这句）

### 方式 A：从压缩包安装（拿到 zip 的人用这个）
把 `alibaba-customer-deepdive-dashboard-v3-20260601.zip` 发给 Agent，然后说：

```
把这个 zip 解压安装成我的 skill，目录放到 agent-core/skills/ 下，
装完读一遍 ONBOARDING.md 做依赖自检，告诉我能不能用。
```

Agent 会：解压到 `agent-core/skills/alibaba-customer-deepdive-dashboard/` → 跑 `python3 audit/checklist.py --help` 自检 → 回报就绪状态。

### 方式 B：技能市场安装（如果已上架内部市场）
```
帮我安装 alibaba-customer-deepdive-dashboard 这个 skill
```
→ Agent 调 `skill(action="install", skill_id="alibaba-customer-deepdive-dashboard", scope="agent")`

账号级共享（所有 agent 可用，需你确认）：
```
把 alibaba-customer-deepdive-dashboard 安装到账号级，所有 agent 都能用
```

装坏了重装：
```
强制重装 alibaba-customer-deepdive-dashboard
```

---

## 二、启动提示词（装好后怎么用）

任意一句即可触发，越具体越好：

```
帮我对买家 [名字 / contactAliId] 做客户背调
```
```
分析这个买家：[名字]，给我完整背景看板
```
```
对接 [客户名] 我需要准备什么？做一份背调看板
```

模糊也行，Agent 会先帮你定位买家：
```
分析下我最近聊的那个美国大客户，做个背调
```

---

## 三、运行前必须满足（冷启动检查）

| # | 依赖 | 不满足怎么办 |
|---|------|-------------|
| 1 | 已连接 Alibaba.com 后台账号 | 在 Accio Work 连接 Alibaba.com |
| 2 | MCP 工具可用（`query_conversation_msg` 等） | 确认国际站生意助手 plugin 已装 |
| 3 | Python3 在环境里（跑审计脚本） | 装 Python3 |

一键自检（Agent 会自动跑，你也可手动）：
```
读 skill 的 ONBOARDING.md，按第三章依赖检查清单逐项确认，报告结果
```

---

## 四、产出长什么样

- 单买家一份 **交互式 HTML 看板**（D 档时尚高饱和：黑底 + 玫瑰金 + 霓虹紫红/紫，Chart.js 离线可用）
- 内容：聊天行为分析 / 买家画像 / 业务员接待绩效对标 / **OSINT 公网身份核验（附 source_url）** / 成单优先级诊断
- **每个数字、每句引文都可追溯到落盘 JSON**；OSINT 搜不到会如实写"无公开匹配"，绝不编造

---

## 五、最重要的一条（务必知道）

> **OSINT 必须真做。** v3 把公网交叉验证设成了审计**硬卡点**（E1-E5，任一不过不得交付）。
> 这是为了堵住"声称做了背调实际跳过"的坑——未经核验的假身份（如错的 LinkedIn）会让你给错的人写开发信，比没做更危险。
> 所以看板里的每条 OSINT 发现都带可点击的来源链接，可信度（high/medium/low）也会标注。

详细实战案例见解压后的 `reference/case-kimtex-top10.md`，完整冷启动指南见 `ONBOARDING.md`。
