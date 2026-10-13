# 详情页 HTML 详情区结构化模块规范 · v3.0 新增

> 这是 v3.0 新增能力。覆盖范围：详情页主图区 6 图**之外**的下半部 HTML 长图详情区。
>
> **官方依据**：[alibaba-official-pdp-spec.md §2](alibaba-official-pdp-spec.md)。
> 阿里学习中心明文推荐的 10 个 HTML 模块，按官方顺序展示，B2B 转化最优。
>
> **服务边界**：本文档只负责"模块图片生成"。HTML 排版、上架、模板装修属 `alibaba-create-website` / `alibaba-product-publish` 技能。

---

## 官方推荐 10 模块（按顺序）

| # | 模块 | 必备/加分 | 转化贡献 |
|---|------|---------|---------|
| 1 | 产品概述 Product Overview | 加分 | 二次确认买家"是这个品" |
| 2 | **产品参数 Product Parameters** | **必备** | SEO 抓取 + B 端采购必看 |
| 3 | 功能特性 Features & Highlights | 加分 | 图文展开卖点 |
| 4 | 应用场景 Application Scenarios | 加分 | 触发二次销售想象 |
| 5 | **产品细节 Product Details** | **必备** | 工艺信任收口 |
| 6 | 公司/工厂展示 Company Profile | 加分 | 信任建立（实力优品加分） |
| 7 | **认证与测试报告 Certifications** | **必备** | B 端合规必查 |
| 8 | **包装与运输 Packaging & Shipping** | **必备** | 物流敏感市场转化关键 |
| 9 | 客户案例/评价 Customer Stories | 加分 | 社会证明 |
| 10 | 常见问题 FAQ | 加分 | 降低售前沟通成本 |

⚠️ **必备 4 模块（参数表 / 细节 / 认证 / 包装）任一缺失 → PIS 扣分 → 难以达到实力优品 4 星门槛**。

---

## 通用 HTML 模块图规范

| 项目 | 规范 |
|------|------|
| 宽度 | **750 px 固定**（阿里详情区强制） |
| 单图高度 | ≤ 800 px（移动端友好） |
| 文字密度 | 每屏 ≤ 3 行（图多字少原则） |
| 文件大小 | 单图 ≤ 500 KB |
| 格式 | JPG（动图除外） |
| 命名 | `<产品简称>_HTML模块{N}_<模块名>_<语言>.jpg`（如 `Solar30W_HTML模块02_参数表_EN.jpg`） |
| 多语言 | 默认 EN，主推市场必出对应语种 |
| 适配 | 必须用新版智能编辑器，确保 PC ↔ 移动自适应 |

---

## 模块 1：产品概述（Product Overview）

**作用**：以"二次封面"姿态总结核心卖点，引导买家继续下滑。

| 项目 | 规范 |
|------|------|
| 尺寸 | 750 × 600 px |
| 元素 | 大尺寸产品图 + 3-5 个核心卖点徽章 + 1 句主标 |
| 文案 | 主标 ≤ 8 词；徽章每个 ≤ 4 词 |
| 视觉风格 | 继承 BENCHMARK_LOCK §1 视觉 |

### Prompt 模板

```
[G1 + G2 + G3 四段拼装]

[图位 BRIEF — HTML 模块 1 Overview]
Generate a 750×600 product overview banner.
Layout: large product image left (60%), text/badges right (40%).
Main headline top-right: "{8-word slogan from BENCHMARK_LOCK §2}".
3-5 USP badges in vertical stack: each = small icon + 4-word text.
USP source: CONFIRMED_FACTS §4 TOP3 卖点 + §2 核心参数.
Background: white with brand color accent (continuity with BENCHMARK_LOCK §1).
```

---

## 模块 2：产品参数表（Product Parameters）⭐ 必备

**作用**：B 端采购的"必读项"，且阿里 SEO 主要抓取此结构化数据。

| 项目 | 规范 |
|------|------|
| 尺寸 | 750 × 高度自适应（建议 600-1000 px）|
| 元素 | 二列参数表 / 三列对比表 |
| 内容 | 必含：型号 / 规格 / 材质 / 颜色 / 重量 / 包装 / 认证 / 产地 / 保修 |
| 数据真实性 | **全部来自 CONFIRMED_FACTS §1 + §2 + §3**，严禁编造 |

### 参数表必含字段（B2B 标配）

| 字段 | 示例 |
|------|------|
| Model No. | SLL-100W-CW |
| Material | Die-cast Aluminum + PC Lens |
| Power | 100 W |
| Voltage | DC 12-24 V |
| Lumens | 12,000 LM |
| Color Temp | 6000K (Cool White) |
| Working Temp | -30°C ~ +60°C |
| IP Rating | IP67 |
| Weight | 6.5 kg |
| Dimension | 720×280×60 mm |
| Warranty | 3 Years |
| Certification | CE / RoHS / SAA |
| Origin | China |

### Prompt 模板

```
Generate a 750×800 product parameter table image.
Layout: 2-column table with header row "Specifications".
Use sans-serif font (Inter / Roboto), 24px label / 22px value.
Alternating row background: white / #F8F8F8 for readability.
Table fields from CONFIRMED_FACTS §1+§2+§3, NEVER invent.
Header brand color accent bar at top.
NO image overlay in the table area (pure typographic).
```

---

## 模块 3：功能特性（Features & Highlights）

**作用**：把第 3 图（详情页主图 USP）的 3-5 个卖点**展开讲透**，每个卖点配 1 个图 + 1 段说明。

| 项目 | 规范 |
|------|------|
| 尺寸 | 750 × 高度自适应（每个卖点约 400-500 px，总高 1500-2500 px）|
| 元素 | 每个卖点 = 标题 + 图 + 60 词内说明 |
| 数量 | 3-5 个（不要超过 7 个，否则买家疲劳）|

### 排版结构

```
[功能 1 标题]
[功能 1 图（750×400）]
[功能 1 简介 30-60 词]
--- 分隔线 ---
[功能 2 标题]
...
```

### Prompt 模板（每个功能图）

```
Generate a 750×400 feature highlight image for "{feature_name}".
Visual: real product close-up + iconic visual representing the feature.
Text overlay: "{feature_name}" 60px bold at top-left.
Sub-text: "{feature_one_line_benefit}" 28px regular at bottom-left.
Background: contextual scene matching the feature (e.g. waterproof = water splash, durable = drop test).
```

---

## 模块 4：应用场景（Application Scenarios）

**作用**：与第 4 图（详情页主图 Scene）互补，展示**多个**不同行业/市场的应用。

| 项目 | 规范 |
|------|------|
| 尺寸 | 750 × 高度自适应 |
| 元素 | 3-6 个场景图（750×450 each） + 行业/市场标签 |
| 内容 | TOP3 出口国 × TOP2 终端行业（共 3-6 个场景）|

### Prompt 模板（每个场景）

```
Place the product (provided reference image) into a realistic {scene_description}
serving {industry} in {country/region}.
Photo-realistic, NOT AI-stylized.
Add a small label bottom-right: "{industry}, {country}" in 24px white text with shadow.
```

---

## 模块 5：产品细节（Product Details）⭐ 必备

**作用**：放 6-10 张高精微距摄影图，对冲"中国货 = 低质"刻板印象。

| 项目 | 规范 |
|------|------|
| 尺寸 | 750 × 高度自适应 |
| 元素 | 6-10 张细节微距图（750×500 each），每张配 1 行数据 |
| 内容 | 焊点 / 接口 / 材质纹理 / 关键部件 / 工艺特写 |
| 数据 | 每张配 1 个数据徽章（同详情页第 3 图风格，继承 BENCHMARK_LOCK） |

### Prompt 模板（每张细节图）

```
Macro detail close-up of {part}, 750×500, shallow DoF.
Lighting: directional studio to reveal texture.
Add data badge bottom-right: rounded rectangle black bg, white text "{spec}" 28px.
Spec source: CONFIRMED_FACTS §2.
```

---

## 模块 6：公司/工厂展示（Company Profile）

**作用**：让买家"看到工厂", 建立"是真工厂不是中间商"的信任。

| 项目 | 规范 |
|------|------|
| 尺寸 | 750 × 高度自适应 |
| 元素 | 工厂外景 + 流水线 + 仓库 + 团队照 + 关键数据徽章 |
| 数据 | 成立年份 / 厂房面积 / 员工数 / 月产能 / 出口国数（全部 CONFIRMED_FACTS §3） |
| 数据真实性 | ⚠️ **严禁编造数字**。商家未提供 = 不放 |

### 拼图布局（750×1200 推荐）

```
[Top 30%]  工厂外景大图 + 主标 "Our Factory Since {year}"
[Mid 25%]  4 数据徽章横排：{factory_size} m² | {staff} Staff | {monthly_capacity}/m | {export_countries} Countries
[Mid 25%]  流水线照（左）+ 仓库照（右），各占 50%
[Bottom 20%] 团队照 + "Welcome to Visit Our Factory" CTA
```

⚠️ 如商家无真实工厂图 → 主代理必须 ask_user 确认："您没有真实工厂照，我可以①跳过本模块 ②用商家提供的展会照/办公室照 ③用通用工业插画但标注'Illustration'"。**严禁 AI 编造工厂图**当真。

---

## 模块 7：认证与测试报告（Certifications）⭐ 必备

**作用**：B 端合规必查（欧盟 CE / 美国 FCC / 沙特 SASO 等）。

| 项目 | 规范 |
|------|------|
| 尺寸 | 750 × 高度自适应 |
| 元素 | 认证 logo 墙 + 证书原件缩略图（可点击大图） |
| 真实性 | **只放 CONFIRMED_FACTS §3 真实持有的认证**，**严禁** AI 编造 |
| 证书原件 | 必须有商家上传的真实证书扫描件；无 → 不放认证图，只展示 logo 文字 |

### 排版（推荐 750×1200）

```
[Top]   主标 "International Certifications"
[Mid]   认证 logo 横排 6-10 个（CE / RoHS / FCC / SAA / SASO / ISO9001...）
[Bottom] 证书原件缩略图 3-6 张（750×400 each），每张配证书名 + 编号
```

### Prompt（认证 logo 墙）

```
Generate a 750×400 certification wall layout.
Horizontal row of CONFIRMED CERTIFICATION LOGOS: {cert_list from CONFIRMED_FACTS §3}.
NO certification NOT in §3 (NEVER add FDA / NMPA / GMP unless explicitly confirmed).
Each logo: 100×100px, light gray bg circle, evenly spaced.
Top text: "International Certifications" 40px bold.
```

⚠️ **认证编造是平台违规重灾区 + 海外客户投诉重灾区**。R5 抽检必须 grep 所有 logo 文字 vs CONFIRMED_FACTS §3。

---

## 模块 8：包装与运输（Packaging & Shipping）⭐ 必备

**作用**：与详情页第 6 图（同模块迷你版）互补，详尽展示包装+集装箱+发货流程。

| 项目 | 规范 |
|------|------|
| 尺寸 | 750 × 高度自适应（推荐 1200-1500 px）|
| 元素 | 单件包装 + 外箱 + 防撞设计 + 装柜量 + 物流流程 |
| 数据 | 全部 CONFIRMED_FACTS §4 |

### 拼图结构（推荐 750×1500）

```
[Top 20%]    主标 "Packaging & Shipping" + 海运图标
[20-50%]     2×2 网格：单件包装 / 外箱 / 防撞泡沫 / 装柜实拍
[50-70%]     物流参数表：
              Inner Box: ___ / Master Carton: ___ / Carton Weight: ___
              20'GP: ___ pcs / 40'HQ: ___ pcs
              Lead Time: ___ days / Port: ___
[70-90%]     发货流程图：Order → Production → QC → Packing → Shipping → Delivery
[90-100%]    "OEM Packaging Available" CTA
```

⚠️ 此模块对南美/东南亚/中东/非洲市场转化贡献尤其高（阿里官方案例：将本模块前置到认证之前显著提升转化率）。

---

## 模块 9：客户案例 / 评价（Customer Stories）

**作用**：社会证明，降低决策风险。

| 项目 | 规范 |
|------|------|
| 尺寸 | 750 × 高度自适应 |
| 元素 | 3-5 个客户案例：客户 logo（如授权）+ 国家 + 订单量 + 简评 |
| 真实性 | **严禁编造客户 logo**；如商家无授权 → 改为"已合作 X 国"地图 + 文字描述 |

### 安全的"无 logo 版本"模板

```
"Trusted by 200+ buyers across 35 countries"
[世界地图，TOP5 出口国打点（CONFIRMED_FACTS §4）]
[3 段匿名买家评价：
 "Quality exceeds expectation, second order placed." — Buyer from {country1}
 "On-time delivery and great packaging." — Buyer from {country2}
 "Best supplier for {product category}." — Buyer from {country3}]
```

⚠️ 严禁伪造客户评价。如商家无真实评价 → 不放，改为"已供货 X 国"。

---

## 模块 10：常见问题（FAQ）

**作用**：降低售前沟通成本，减少业务员重复回答。

| 项目 | 规范 |
|------|------|
| 尺寸 | 750 × 高度自适应 |
| 元素 | 5-10 个 Q&A，每个 Q ≤ 15 词 / A ≤ 60 词 |
| 内容 | 来自 CONFIRMED_FACTS §4 TOP3 痛点 + 行业洞察简报 §B 痛点清单 |

### 标准 FAQ 池（按品类预置）

通用类：
- What's your MOQ? → CONFIRMED_FACTS §4
- What's the lead time? → CONFIRMED_FACTS §4
- Do you accept OEM/ODM? → 商家确认
- What's the payment term? → 商家确认
- Do you provide samples? → 商家确认
- What certifications do you have? → CONFIRMED_FACTS §3
- How do you handle shipping damage? → 商家确认
- What's the warranty? → CONFIRMED_FACTS §4

品类专属（部分）：
- 电子：兼容性？充电时长？拆解？
- 服装：尺码表？面料缩水率？洗护？
- 机械：海外售后？培训？远程诊断？
- 化妆品：保质期？皮肤测试？包装定制？

### Prompt 模板

```
Generate a 750×1200 FAQ section image.
Layout: Q&A list, each Q on dark background (gray #2A2A2A) with white "Q" icon,
 each A on white background.
Q text: 24px bold sans-serif.
A text: 22px regular, line-height 1.5.
5-10 Q&A pairs from {confirmed_faq_list}.
NO fake answers; if business detail missing, use placeholder "Contact us for details".
```

---

## 移动端适配（必读）

阿里详情页 PC 宽 750px 自动适配移动端。为确保移动端体验：

| 项目 | 规范 |
|------|------|
| 关键信息 | 必须放图片**上半部 50%**（移动端缩略时仍可见） |
| 文字字号 | 移动端实际显示 = PC 的 0.5 倍 → PC 端字号 ≥ 28px |
| 联系按钮 | 不要在图片内嵌（移动端无法点击）→ 用阿里平台原生 CTA |
| 长图分段 | 单图高度 ≤ 800px，超长拆多张 |

---

## 与详情页 6 图的协同关系

| 详情页主图 | 详情区 HTML 模块 | 关系 |
|----------|--------------|------|
| 第 1 图 Hero | 模块 1 Overview | 共享视觉风格（继承 BENCHMARK_LOCK §1） |
| 第 2 图 SKU | 模块 2 参数表 | 互补：SKU 视觉化 + 参数文字化 |
| 第 3 图 细节 | 模块 5 详细细节 | 主图 = 1 张精选；模块 = 6-10 张全面 |
| 第 4 图 Scene | 模块 4 多场景 | 主图 = 1 个 TOP 场景；模块 = 3-6 个场景 |
| 第 5 图 Trust | 模块 6 工厂 + 模块 7 认证 | 主图 = 浓缩；模块 = 展开 |
| 第 6 图 Packaging | 模块 8 包装运输 | 主图 = 2×2 缩略；模块 = 完整流程图 |
| - | 模块 3 功能 / 模块 9 案例 / 模块 10 FAQ | 详情区独有 |

---

## R5 抽检（HTML 模块版）

- 必备模块 4 个（2/5/7/8）任一缺失 → 强制要求补齐
- 所有数字 / 认证 / 客户名 → grep vs CONFIRMED_FACTS（严禁编造）
- 视觉一致性 → 与详情页 6 图共享 BENCHMARK_LOCK 主色 / 字体 / 强调色
- 移动端字号检查 → PC 端字号 ≥ 28px

---

## 落地命名

```
详情页HTML区/
├── 01_Overview/
├── 02_Parameters/ ⭐
├── 03_Features/
├── 04_Scenarios/
├── 05_Details/ ⭐
├── 06_Company/
├── 07_Certifications/ ⭐
├── 08_Packaging/ ⭐
├── 09_Stories/
└── 10_FAQ/
```

⭐ = 必备模块（≥ 实力优品 4 星门槛）
