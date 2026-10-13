---
name: alibaba-knowledge-base-builder
description: >
  阿里巴巴国际站供应商AI私域知识库自动化构建技能。
  适用场景：当用户提供国际站供应商链接（alibaba.com/en.alibaba.com），
  需要为该供应商生成标准化、模块化的AI生意助手知识库QA文档时触发。
  核心流程：链接解析 → 全网多维调研 → 行业通识匹配 → 100条QA生成 → 补全建议输出。
  关键词：知识库、QA、国际站、AI生意助手、供应商、私域知识库、问答库、alibaba。
  参考文件：SOP.md（标准操作流程）、QA_TEMPLATE.md（通用QA模板）。
user-invocable: true
always_apply: false
---

# 阿里巴巴国际站供应商 AI 私域知识库构建技能

## 使用场景

当用户提供一个国际站供应商链接，需要为其生成可直接上传至**AI生意助手后台**的标准化知识库时，启用本技能。

---

## 执行流程（严格按顺序）

### Step 1：解析链接，锁定企业身份

1. 使用 `web_fetch` 抓取供应商主页（`https://xxx.en.alibaba.com/`）及其 `company_profile.html`。
2. 提取关键字段：
   - 公司中英文名称
   - 主营产品类目
   - 店铺年限、星级、勋章
   - 已展示的认证标志
3. 若 Alibaba 页面触发反爬，立即转向 `web_search`，关键词格式：`"[公司英文名]" alibaba profile products certifications`

### Step 2：全网多维调研（五个维度并行搜索）

同时执行以下五个搜索，使用 `web_search` 工具：

| 维度 | 搜索关键词模板 |
|------|--------------|
| 官网 | `"[公司名]" official website products` |
| 资质 | `"[公司名]" ISO BSCI certifications factory audit` |
| 社媒 | `"[公司名]" LinkedIn Facebook Instagram` |
| 展会 | `"[公司名]" Canton Fair exhibition trade show` |
| 竞对 | `[主营产品] manufacturer [所在城市] top supplier` |

### Step 3：行业通识匹配

根据 Step 1 识别的主营类目，自动匹配以下行业包，调取对应的技术标准、认证要求、买家痛点：

| 行业 | 关键通识包 |
|------|-----------|
| 小家电/电子 | CE/FCC/RoHS/UN38.3/HEPA/无刷电机 |
| 服装/纺织 | OEKO-TEX/BSCI/GSM/MOQ/打样周期 |
| 家居/家具 | CARB/FSC/REACH/E0级/跌落测试 |
| 机械/五金 | ISO9001/精度等级/材质标号/防锈处理 |
| 食品/农产品 | FDA/HACCP/有机认证/保质期/冷链 |
| 化工/材料 | REACH/SDS/危险品运输/纯度等级 |
| 玩具/母婴 | EN71/ASTM/CPSC/年龄适用范围 |
| 汽配/车品 | IATF16949/ROHS/耐温/配套OEM |

若行业不在列表中，执行 `web_search`：`[行业名] international trade buyer requirements certifications FAQ`

### Step 4：生成100条标准QA

严格按照以下**11个模块**输出，每个模块条数如下：

| 模块 | 名称 | 条数 |
|------|------|------|
| 模块一 | 公司基本信息 Company Profile | 10条 |
| 模块二 | 资质与认证 Certifications | 10条 |
| 模块三 | 产品与技术参数 Product & Technical Specs | 15条 |
| 模块四 | OEM/ODM定制 Customization | 10条 |
| 模块五 | 交期与生产 Lead Time & Production | 8条 |
| 模块六 | 价格与付款 Pricing & Payment | 8条 |
| 模块七 | 售后与质保 After-sales & Warranty | 8条 |
| 模块八 | 物流与配送 Shipping & Logistics | 8条 |
| 模块九 | 竞争优势与差异化 Competitive Advantage | 8条 |
| 模块十 | 场景化解决方案 Scenario-based Solutions | 8条 |
| 模块十一 | 行业通识 Industry Knowledge | 8条 |
| **合计** | | **101条** |

**QA写作规范：**
- 每条格式：`**Q[编号]: [问题]**` + 换行 + `A: [回答]`
- 回答语气：专业、有温度、带销售力（不能只陈述事实，要有说服力）
- 数据来源：优先使用调研获取的真实数据；无法确认的数据用`[待供应商确认]`标注
- 严禁：捏造认证、夸大产能、承诺无法兑现的条款

### Step 5：输出补全建议清单（Gap Analysis）

列出调研中无法获取、但对谈单至关重要的信息项，格式如下：

```
## 【待供应商补充的关键信息】

| 模块 | 缺失项 | 重要程度 | 建议获取方式 |
|------|--------|---------|------------|
| 模块六 | 最新FOB报价区间 | ⭐⭐⭐ | 向业务员确认 |
| 模块二 | CE证书有效期 | ⭐⭐⭐ | 查看证书原件 |
...
```

### Step 6：文件输出

将完整QA库输出为 Markdown 文件，命名规则：
`[公司简称]_knowledge_base_QA100_[YYYYMMDD].md`

保存至项目工作目录，并告知用户文件路径。

---

## 质量红线（必须遵守）

1. **严禁脑补**：所有具体数据（产能、认证、价格）必须来源于调研，无法确认的一律标注`[待确认]`。
2. **严禁空洞回答**：A的内容不能只有"可以"、"支持"，必须包含具体细节。
3. **必须覆盖拒止清单**：每份QA必须包含至少3条"红线"类QA（明确告知AI不能承诺什么）。
4. **行业通识必须植入**：模块十一不能为空，至少8条行业专业知识。

---

## 参考文件

- `SOP.md`：完整标准操作流程（含行业扩展指南）
- `QA_TEMPLATE.md`：通用空白QA模板（适配任意行业）

---

## 示例案例

- **余姚全绿汽车配件**（吸尘器行业）：见项目目录 `quanlv_knowledge_base_QA100.md`
