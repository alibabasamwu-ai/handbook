# Alibaba RFQ Quotation Conversion Assistant
**技能 ID：** `alibaba-rfq-quotation-assistant`
**版本：** 1.0.0

阿里巴巴国际站 RFQ 报价成交助手。把 RFQ 从"看到商机后临时报价"升级为「可筛选、可报价、可跟进、可复盘、可提升服务分、可促进成交」的标准化主动获客流程。兼顾老板 / 业务员 / 运营 / 客户经理四类视角。

---

## 能力概览
- **8 维商机诊断**（100 分制）→ 建议报价 / 谨慎报价 / 暂不报价
- **买家三画像**：加工定制型 / 解决方案型 / 明确需求型
- **英文报价邮件双版本**：1 小时内可发送安全版 + 深度优化成交版
- **三段跟进话术**：24h / 3 天 / 7 天 + 压价/要样品/要最低价等场景话术
- **中英双语关键字段表 + 服务分运营建议 + 团队执行清单 + 客户经理视角 + 风险提醒**

## 触发方式
对话中出现以下表达即自动加载：
> RFQ、RFQ报价、采购直达、报价邮件、要不要报这个RFQ、RFQ跟进、RFQ复盘、quotation、买家询价报价、报价成交、RFQ服务分

---

## 安装方法

### 方式 A：手动安装（适用于 Accio Work 文件级技能目录）
1. 解压本技能包，得到目录 `alibaba-rfq-quotation-assistant/`（内含 `SKILL.md`）。
2. 将该目录整体复制到你的 agent 技能目录下：
   ```
   <agent-core>/skills/alibaba-rfq-quotation-assistant/
   ```
3. 在同目录的 `skills.jsonc` 的 `"skills"` 数组中追加一条注册项（把 `installPath` 改成你机器上的真实绝对路径）：
   ```jsonc
   {
     "id": "alibaba-rfq-quotation-assistant",
     "name": "alibaba-rfq-quotation-assistant",
     "version": "1.0.0",
     "enabled": true,
     "kind": "directory",
     "entryName": "alibaba-rfq-quotation-assistant",
     "description": "阿里巴巴国际站 RFQ 报价成交助手……（见 skill.json）",
     "installPath": "<你的绝对路径>/skills/alibaba-rfq-quotation-assistant"
   }
   ```
4. 重启会话使技能列表刷新即可生效。

### 方式 B：通过 UI 导入
若你的客户端支持「导入技能包 / Import skill」，直接选择本 `.zip` 文件导入即可，无需手动改 `skills.jsonc`。

---

## 文件清单
| 文件 | 说明 |
|---|---|
| `SKILL.md` | 技能主体（身份、8 维诊断、固定输出结构 9.1–9.10、英文模板、跟进节奏） |
| `skill.json` | 技能元数据（id / 版本 / 描述 / 触发词） |
| `README.md` | 本说明文件 |

## 合规提醒
本技能不虚构平台政策、服务分公式与权益门槛；所有涉及服务分、报价席位、权益、交易额计入的内容均以**商家后台、官方规则中心和客户经理最新通知为准**。
