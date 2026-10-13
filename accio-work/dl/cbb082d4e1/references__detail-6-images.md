# 详情页主图位 6 图规范（B2B 转化型）· v3.0

> 适用范围：阿里巴巴国际站商品详情页**左侧主图位 6 张**（PC 端缩略图轮播 / 移动端首屏轮播）。
> 详情页下方 HTML 详情区另见 [detail-html-modules.md](detail-html-modules.md)。
>
> **v3.0 重大升级**：基于 [alibaba-official-pdp-spec.md](alibaba-official-pdp-spec.md) 阿里官方规范全面对齐。
> 主要变化：
> - 第 5/6 图顺序按官方推荐重排（细节 → 信任 → 包装）
> - 第 6 图从「认证服务图」改为「**包装运输图**」（官方明文必备 + 解决 B2B 物流敏感买家顾虑）
> - 认证内容前移到第 5 图（与工厂/信任合并）
> - 补齐 PIS（Product Information Score）11% 评分依据

---

## 阿里官方硬规范（必须遵守）

来源：[rule.alibaba.com/rule/detail/11000682.htm](https://rule.alibaba.com/rule/detail/11000682.htm) + 卖家学习中心

| 项目 | 官方规范 | 违规后果 |
|------|---------|---------|
| **尺寸** | 推荐 1000×1000 px，最小 600×600 px | < 600 直接降权 |
| **比例** | **1:1 强制** | 3:4/4:3 系统支持但搜索页展示偏差 |
| **格式** | JPG / JPEG / PNG | 其他不支持 |
| **大小** | ≤ 3 MB | 加载慢 → 跳出率 ↑ |
| **首图背景** | **首图必须纯白底** | 非白底首图 → PIS 扣分 |
| **主体占比** | **60-70%** | 太小 = 搜索缩略图看不清 |
| **文字面积** | < 20-30% | 大字 = 牛皮癣 → CTR 下降 |
| **认证图标** | ≤ 10 个小图，置边缘 | 中央放认证 = 遮挡主体 |
| **边框** | 单边 ≤ 10% 图片宽度 | 厚边 = 主体小 |
| **严禁内容** | 水印 / 联系方式 / 二维码 / 拼图（首图） / 真人未授权肖像 / 竞品 logo / 平台违规词（best/cheapest/No.1） | 强制下架 |
| **色彩模式** | RGB | CMYK 不支持 |

## 商品星级（PIS）影响

- **PIS 主图权重 = 11%**（全权重 100%）
- **实力优品（Premium Product）门槛 = PIS ≥ 4 分** → 6 图齐全是必要条件
- **主图视频**：CTR ↑10-15%、询盘 ↑18%（强烈建议补做 ≤45 秒视频）

---

## 设计哲学

国际站买家是 B 端采购商、贸易商、工程商。他们看主图区的决策路径：

> "是不是我要的品" → "你专不专业" → "差异点在哪" → "做工/质量行不行" → "我能不能信任你 / 你工厂行不行" → "物流稳不稳 / 包装会不会运坏"

6 张图严格按这条决策链铺开，**前 3 张决定停留，后 3 张决定询盘**。

---

## 6 图官方推荐结构（v3.0 终版）

| # | 图位 | 决策痛点 | 阿里官方对齐 | 必备文案？ |
|---|------|---------|------------|----------|
| 1 | **主形象图（Hero）** | 是不是我要的品 | 纯白底 / 60-70% 主体 / 1 句卖点 | ✅ 短 slogan |
| 2 | **SKU / 多角度矩阵** | 你有没有我的型号 | 多角度 + SKU 拼图 | ❌ 仅角标 |
| 3 | **细节 / 工艺 / 材质** | 做工行不行 | 微距 + 材质 + 数据徽章 | ✅ 数据 |
| 4 | **应用场景（Lifestyle）** | 我能在哪里用 | 真实环境 + 终端用户 | ❌ 让画面说话 |
| 5 | **信任背书（认证+工厂）** | 你工厂靠不靠谱 | 认证墙 + 工厂图 + 服务承诺 | ✅ 关键参数 |
| 6 | **包装运输（B2B 必备）** | 运到我手里会不会坏 | 单件包装 + 外箱 + 装柜 | ✅ 物流参数 |

⚠️ 对比旧版（v2.x）：旧版第 5 图细节 + 第 6 图认证；新版按官方顺序调整为细节前置（第 3 位）+ 包装收尾（第 6 位）。**官方学习中心明文：包装运输模块对南美/东南亚/中东买家转化率提升显著。**

---

## 通用规范

| 项目 | 规范 |
|------|------|
| 比例 | **1:1 强制**（默认 1200×1200 px，最低 1000×1000 px） |
| 文件大小 | ≤ 3 MB |
| 文件命名 | `{产品简称}_第N图_{图位名}_{语言}.jpg`（如 `Solar30W_第1图_主形象_EN.jpg`） |
| 文案叠加 | 仅在 **1 / 3 / 5 / 6** 图叠加英文文案；2、4 图保持视觉干净 |
| 文案长度 | 每图 ≤ 8 词；标题字号 ≥ 60 px（移动端可读） |
| 文案占比 | < 20-30% 画布面积（官方强制） |
| 留白 | 上下左右各留 60 px 安全区（避开平台水印/UI） |
| 主色 | 与产品本色协调；最多 3 主色 + 1 强调色 |
| 禁用 | GIF / 二维码 / 电话 / 竞品 logo / 真人未授权 / best/cheapest/No.1 |

---

## ⭐ v3.1 视觉档位规则（全局适用 6 图）

**核心约束**：6 图的**结构与图位定位 5 档共用**（即第 1 图永远是 Hero / 第 4 图永远是应用场景），但 **prompt 拼装的 G1/G3 段必须按 `VISUAL_STYLE_LOCK.md §1` 锁定的档位（A/B/C/D/E）调用 [visual-style-presets.md §3](visual-style-presets.md#三5-档完整模板g1--g3--抽检差异) 对应模板**，不允许跨档混用。

| 档位 | 6 图整体气质 | 重点适配的图位 |
|------|------------|--------------|
| **A 工业冷峻** | 冷峻、参数化、技术感 | 第 3 图（焊点/CNC 精度）+ 第 5 图（工厂厂房）+ 第 6 图（重型集装箱） |
| **B 商业精致** | 高级、克制、科技感 | 第 1 图（Hero 简洁）+ 第 3 图（接口微距）+ 第 5 图（认证墙） |
| **C 生活暖调** | 温暖、亲切、家用感 | 第 4 图（家居场景）+ 第 1 图（暖色背景）+ 第 6 图（精致彩盒） |
| **D 时尚高饱和** | 鲜艳、潮流、模特感 | 第 4 图（街拍/模特）+ 第 2 图（多 SKU 多色矩阵） |
| **E 食品鲜活** | 鲜活、食欲、原料感 | 第 4 图（食用场景）+ 第 1 图（食材摆盘）+ 第 3 图（原料微距） |

**抽检追加项**（R5 第 14 项 · v3.1 新增）：每张图必抽检"是否与 VISUAL_STYLE_LOCK 档位一致"，跨档（如锁 A 档却出 C 档暖色）直接判废重出。

---

## 第 1 图：主形象图（Hero Image）

**定位**：搜索结果页 + 详情页第一眼。0.3 秒确认"是这个品"。

**v3.0 关键修正**：阿里官方明文「首图必须纯白底」。旧版的"浅色渐变底"违规，本版强制改为纯白底。

| 项目 | 规范 |
|------|------|
| 风格 | **纯白底（#FFFFFF）+ 产品 65% 占比 + 1 句英文卖点** |
| 背景 | **纯白底**（官方强制）。光影留产品自然投影即可 |
| 文案位置 | 顶部或底部，避开产品；占画布 ≤ 20% |
| 文案模板 | `{Spec}-Grade {Product}` / `{N}-Year Warranty {Product}` / `{Cert} Certified {Product}` |
| 主体占比 | **60-70%**（官方强制） |
| 视频联动 | 强烈建议同步出 ≤ 45 秒主图视频（CTR ↑15%） |

### Prompt 拼装（必走 R3.2 四段契约）

```
[G1 REALISM CONTRACT]
（继承自 anti-ai-look-blueprint.md）

[G2 PRODUCT FACTS LOCK]
（继承自 CONFIRMED_FACTS.md §1 物理事实）

[G3 CATEGORY VISUAL BRIEF]
（继承自 BENCHMARK_LOCK.md §1 视觉锁）

[图位 BRIEF — 第 1 图 Hero]
Generate a B2B alibaba.com hero main image, 1:1 square 1200x1200.
Background: PURE WHITE (#FFFFFF, NOT off-white, NOT gradient — this is alibaba.com hard rule).
Place the product (provided reference image) at canvas center, occupying 60-70% of the canvas.
Add subtle natural product shadow underneath (max 10% opacity, soft edges).
Top 15% of canvas: bold English slogan "{slogan}", font sans-serif 80px black or brand color.
NO watermark, NO contact info, NO QR code, NO competitor logo, NO real human face.
NO words: best, cheapest, No.1, world-class, top-rated (platform compliance).
```

### 调用方式
1. 真实素材 → `image_edit` + reference_images（本地绝对路径，≥1 张）
2. 用 `背景消除 (remove-bg)` 先抠白底
3. 用 `指令绘图 (command_drawing)` 叠 slogan

### 档位专属提示（v3.1）

| 档位 | 第 1 图调整 |
|------|-----------|
| A 工业 | slogan 字体 **Industrial Sans / Roboto Mono**，黑色或深蓝 #1A2B4A；阴影硬朗 |
| B 商业 | slogan 字体 **SF Pro / Helvetica Neue**，深灰 #2C2C2E；阴影柔和 |
| C 生活 | slogan 字体 **Nunito / Quicksand**，可用 brand color；可加 ≤ 5% 暖色背景渐变（非纯白时需在 BENCHMARK_LOCK 明确） |
| D 时尚 | slogan 字体 **Playfair / Montserrat Bold**，高饱和强调色；可加渐变色块 |
| E 食品 | slogan 字体 **Lobster / Pacifico** 或友好衬线；背景可微微暖白 #FFFAF5 |

---

## 第 2 图：SKU / 多角度矩阵

**定位**：解决"我要的型号你有没有"，减少询盘前低质问题。

| 项目 | 规范 |
|------|------|
| 布局 | **2×3 拼图**（推荐）或 3×3 九宫格 |
| 内容 | 4-6 个角度（正/侧/背/俯视/局部）或 4-6 个 SKU（颜色/规格） |
| 标签 | 每格右下角小角标：`Front` / `Side` / `45°` / `Black` / `White` |
| 文案 | **不叠加大段文案**，仅角标 |
| 背景 | 白底拼图（与第 1 图视觉延续） |

### Prompt（图位 BRIEF 段）

```
Compose a 2x3 grid product gallery on pure white background, 1:1 square 1200x1200.
Cells from top-left to bottom-right: {angle1}, {angle2}, {angle3}, {angle4}, {angle5}, {angle6}.
Add a tiny label at bottom-right of each cell with angle/SKU name in 24px medium gray sans-serif.
3px white gutter between cells, no border, no shadow.
Reference images supplied = real SKU shots, NEVER invent SKU not in CONFIRMED_FACTS §4.
```

### 档位专属提示（v3.1）

| 档位 | 第 2 图调整 |
|------|-----------|
| A 工业 | 拼图背景纯白 + 浅灰栅格线（强工业图鉴感）；角标字体 Roboto Mono |
| B 商业 | 拼图背景白；角标字体 SF Pro 28px |
| C 生活 | 拼图背景可微暖白 #FAFAF5；角标字体 Nunito 28px |
| D 时尚 | **多 SKU 多色矩阵首选档**：每 SKU 可加 1px 品牌色细边框；角标字体 Montserrat 24px |
| E 食品 | 拼图背景米白 #FAF6EF；可加微 5% 食物纹理叠加；角标友好衬线 |

调用：`remove-bg` 抠每个 SKU → `command_drawing` 拼图

---

## 第 3 图：细节 / 工艺 / 材质特写（v3.0 提前到第 3 位）

**定位**：建立专业信任，回答"做工到底行不行"。这是 B2B 询盘转化的核心拦截点。

**官方对齐**：电子类侧重芯片/拆解，服装类侧重面料克重，机械类侧重焊接精度。详见 [alibaba-official-pdp-spec.md §3.2](alibaba-official-pdp-spec.md)。

| 项目 | 规范 |
|------|------|
| 内容 | 微距特写：焊点、接口、材质纹理、关键部件 |
| 视角 | 微距浅景深，可加 1-2 条引线说明对应位置 |
| 文案叠加 | 数据徽章（圆角矩形，黑底白字）+ 工艺说明 |
| 文案示例 | `3mm Aluminum Frame` / `IP67 Sealed Connector` / `316 Stainless Steel` / `120 g/m² Cotton` |
| 数据真实性 | **所有参数必须出自 CONFIRMED_FACTS §2，严禁编造** |

### Prompt（图位 BRIEF 段）

```
Generate a macro detail close-up of {part_description}, 1:1 square 1200x1200.
Camera: macro lens 100mm, shallow DoF, sharp focus on {detail_focus}.
Lighting: directional studio lighting to reveal texture/material grain.
Add a thin line callout from {detail_focus} to top-right, with text badge:
  rounded rectangle black bg #1A1A1A, white text "{spec}" in 36px clean sans-serif.
Background: dark gradient #2A2A2A → #1A1A1A to make detail pop.
GRADE check: spec text MUST match CONFIRMED_FACTS §2; if not found, fall back to "Premium Build".
```

### 档位专属提示（v3.1）

| 档位 | 第 3 图调整 |
|------|-----------|
| A 工业 | **本档核心图位**：聚焦焊点/CNC 精度/合金成分；背景深灰 #2A2A2A；冷光突显金属质感 |
| B 商业 | 聚焦接口/芯片/材质纹理；背景深蓝灰 #1F2A3A；侧光突显科技质感 |
| C 生活 | 聚焦布料触感/木纹/烤漆光泽；背景浅米色 #F5EFE6 + 自然光，避免冷峻 |
| D 时尚 | 聚焦面料肌理/缝线工艺/五金件特写；背景可加 5% 品牌色渐变；柔光突显高级感 |
| E 食品 | 聚焦原料/颗粒/质地；背景米白 + 食材摆位（咖啡豆/茶叶/调料粒散落）；柔暖光 |

调用：优先 `细节生成 (generate_detail)`；指定位置时改 `command_drawing`

---

## 第 4 图：应用场景（Lifestyle / Application Scene）

**定位**：让买家代入自己客户的需求，触发二次销售想象。

| 项目 | 规范 |
|------|------|
| 场景选择 | 匹配 TOP3 出口国（CONFIRMED_FACTS §4）的终端用户场景 |
| 真实感 | **优先真实摄影感**，避免 AI 痕迹（参考 G1 REALISM CONTRACT）|
| 文案 | **不叠加文案**，让画面说话 |
| 数量 | 同一产品可生成 1-3 张候选，挑最佳 |

### 不同行业场景库

| 品类 | 推荐场景 |
|------|---------|
| 户外灯具 | 沙特沙漠夜景 / 高速公路 / 居民区路边 / 公园广场（黄昏点亮） |
| 折叠/户外 | 沙滩 / 露营地 / 钓鱼现场 |
| 工业机械 | 工厂车间 / 施工现场 / 流水线 |
| 服装 | 模特街拍 / 工作场景（**禁用**真人未授权头像） |
| 家居 | 客厅 / 厨房 / 卧室真实环境 |
| 化妆品 | 梳妆台 / 浴室柜 / 时尚拍摄场景（产品居中） |
| 电子配件 | 办公桌 / 健身房 / 通勤场景 |

### Prompt（图位 BRIEF 段）

```
Place the product (provided reference image) into a realistic {scene_description}.
Lighting: {natural daylight / warm interior / industrial spotlight} matching scene.
Camera: {eye-level / 30° tilt / wide angle}, photographic feel.
Photo-realistic, NOT AI-stylized, NOT cartoon, NOT 3D render look.
NO text overlay, NO logo, NO watermark, NO real person face (use back/silhouette only).
Lock reference image product appearance (do not invent variant not in CONFIRMED_FACTS §1).
```

### 档位专属提示（v3.1 · 应用场景图档位差异最大）

| 档位 | 第 4 图调整 | 是否可加模特 |
|------|-----------|------------|
| A 工业 | B2B 工业现场（车间/施工/流水线/油田/矿区），冷色调；**禁止**真人正脸，可用工人背影/侧影 | ❌ 仅背影 |
| B 商业 | 办公桌/会议室/通勤场景，干净极简；**可有手部出镜操作**产品 | 🟡 手部/局部 |
| C 生活 | **本档核心图位**：客厅/厨房/卧室/花园温暖场景，自然光暖调；**可有家庭成员背影或剪影** | 🟡 背影/剪影 |
| D 时尚 | **本档核心图位**：街拍/T 台/咖啡店/旅行场景；**可用模特真人正面**（需肖像权授权）；高饱和滤镜 | ✅ 正面（需授权） |
| E 食品 | 餐桌/野餐/早午餐/烘焙现场；**可用手部正在使用/品尝**（不露脸）；明亮暖光 | 🟡 手部/品尝 |

⚠️ **真人授权红线**：D 档可用真人正面，但商家必须确认已有肖像权授权（CONFIRMED_FACTS §5 需登记），否则强制降级为 C 档"背影/剪影"方案。

调用：`场景展示 (product-scene-display)`

---

## 第 5 图：信任背书（认证 + 工厂 + 服务承诺）

**定位**：让买家相信"你这家工厂是真的、合规的、能稳定供货的"。

**v3.0 升级**：合并旧版第 6 图"认证服务"，并补充工厂能力（按官方推荐顺序）。

| 项目 | 规范 |
|------|------|
| 布局 | 上：工厂照（35%）；中：认证 logo 横排（35%）；下：服务承诺 2×2 网格（30%） |
| 工厂照 | 真实工厂外景 / 流水线 / 仓库（如商家无图，标"工厂插画"，**严禁** AI 编造工厂图当真） |
| 认证 logo | **只放商家真实持有的认证**（CONFIRMED_FACTS §3）|
| 认证数量 | ≤ 10 个，边缘排列（官方硬规范） |
| 服务承诺 | OEM/ODM / MOQ / Lead Time / Warranty / Payment Terms |
| 工厂数据 | "Factory Since X" + "Export to Y Countries" + "Z m²"，**必须商家确认** |

### Prompt（图位 BRIEF 段）

```
Design a B2B trust infographic, 1:1 square 1200x1200, vertical 3-section layout.

Top section (35%): factory exterior photo on left (use reference image if supplied; else use neutral industrial illustration with disclaimer "Factory Visual"),
  with text right-aligned:
  "Factory Since {year}" + "Export to {N} Countries" + "{factory_size} m²"
  (all numbers MUST come from CONFIRMED_FACTS §3, never invent).

Middle section (35%): horizontal row of REAL certification logos: {cert_list}.
  Logos must be confirmed in CONFIRMED_FACTS §3. If §3 §"严禁出现 blacklist" lists a cert (e.g. FDA), DO NOT include it.

Bottom section (30%): 4 service commitments in 2x2 grid with check icons:
  ✓ {commitment1}  ✓ {commitment2}
  ✓ {commitment3}  ✓ {commitment4}

Background: white with subtle brand color accent stripe at top.
Style: corporate, trustworthy, B2B catalog quality.
NO fake certification logos. NO competitor logos.
```

⚠️ **认证编造是平台违规重灾区**。本图必走 R5 抽检第 3-5 项强校验：所有 logo 名称必须在 CONFIRMED_FACTS §3 中能 grep 到。

### 档位专属提示（v3.1）

| 档位 | 第 5 图调整 |
|------|-----------|
| A 工业 | 工厂照优先**车间流水线**/CNC 大型设备；底色白 + 深蓝强调条；字体 Roboto Mono |
| B 商业 | 工厂照优先**洁净车间**/SMT 贴片；底色白 + 深灰强调条；字体 SF Pro |
| C 生活 | 工厂照优先**仓库/打包工位**（亲切感）；底色暖白 + 木色强调；字体 Nunito |
| D 时尚 | 工厂照优先**设计室/打版车间/T 台样图**；底色白 + 品牌色高饱和强调；字体 Montserrat |
| E 食品 | 工厂照优先**洁净食品车间**（穿白大褂员工背影）；强调 HACCP/FDA/HALAL；底色米白；字体友好衬线 |

⚠️ **认证维持档位无关**：所有档位的认证 logo 必须真实，**不允许**为了 D/E 档"好看"而虚构认证。

---

## 第 6 图：包装运输图（B2B 必备 · v3.0 新增）

**定位**：解决南美/东南亚/中东/非洲买家对"中国货 → 长途海运 → 损耗"的核心顾虑。

**官方依据**：阿里学习中心实证案例显示，**将「包装运输」模块前置到详情页主图位，对物流敏感市场转化率提升显著**（来源：[alibaba-official-pdp-spec.md §3.3](alibaba-official-pdp-spec.md)）。

| 项目 | 规范 |
|------|------|
| 布局 | 2×2 网格：①单件彩盒 ②外箱（写尺寸/含件数）③装柜（20'/40'柜含量）④物流细节（防撞泡沫/木托盘）|
| 文案叠加 | 物流参数：`Carton: 60×40×30cm / 20pcs` / `20'GP: 8000pcs` / `Lead Time: 25 days` |
| 数据真实性 | 全部数字来自 CONFIRMED_FACTS §4 包装规格 |
| 风格 | 仓库 / 流水线 / 集装箱实拍感（非渲染感）|

### Prompt（图位 BRIEF 段）

```
Design a B2B packaging & shipping image, 1:1 square 1200x1200, 2x2 grid layout.

Cell 1 (top-left): single retail box close-up.
  Box size text overlay (bottom-right corner of cell, small badge):
  "Inner Box: {inner_box_size}".

Cell 2 (top-right): outer carton with company branding (OEM-able).
  Text overlay: "Master Carton: {carton_size} / {pcs_per_carton} pcs / {carton_weight} kg".

Cell 3 (bottom-left): inside the carton — protective foam / bubble wrap / pearl cotton.
  Text overlay: "{protection_method}".

Cell 4 (bottom-right): container loading scene.
  Text overlay: "20'GP: {qty_20gp} pcs / 40'HQ: {qty_40hq} pcs".

Top header text: "Packaging & Shipping" in 60px bold sans-serif.
Bottom footer: "Lead Time: {lead_time} days | Port: {port}"

All numerical specs MUST be sourced from CONFIRMED_FACTS §4.
Background: light gray #F5F5F5 industrial feel.
NO real person face, NO competitor logo.
```

### 档位专属提示（v3.1）

| 档位 | 第 6 图调整 |
|------|-----------|
| A 工业 | **本档核心图位**：重型木托/钢带/集装箱重载场景；底色深灰 #2A2A2A；强调"出口经验" |
| B 商业 | 精致彩盒+泡棉+小巧外箱；底色浅灰 #F0F0F0；强调"防摔抗压测试" |
| C 生活 | 精美零售彩盒（适合超市上架）+ 礼盒装；底色暖白 #FAFAF5；强调"零售可上架" |
| D 时尚 | 高级感品牌购物袋/抽屉盒/无纺布袋；底色品牌色低饱和；强调"OEM 包装定制" |
| E 食品 | 食品级安全包装 + 防潮内袋 + 保质期标识；底色米白；强调"FDA 食品级 + 冷链/常温分类" |

调用：场景类（cell 3/4）用 `product-scene-display`；版式拼接用 `command_drawing`

---

## 批量执行规则（同一产品出齐 6 图）

**阶段 B 标杆定稿后**才能进入此批量阶段（详见 [benchmark-iteration-protocol.md](benchmark-iteration-protocol.md)）。

### 串行 vs 并行选择

| 出图数量 | 执行方式 |
|---------|---------|
| 1-2 张（标杆阶段） | 主代理直接 image_edit |
| 3-6 张（同产品全套） | 必须 spawn ≥ 2 个 general 执行官并行 |
| 7+ 张（多产品/多语言） | 必须 spawn A/B/C 三组 |

### 团队分组建议（同 R7）

| 执行官 | 负责图位 | 工具优先级 |
|--------|---------|----------|
| A | 第 1 图 Hero + 第 4 图 Scene | product-scene-display + image_edit |
| B | 第 2 图 SKU + 第 3 图 Detail | remove-bg + generate_detail + command_drawing |
| C | 第 5 图 Trust + 第 6 图 Packaging | command_drawing（信息图/版式类） |

**多产品并行**时（如 5 个产品 × 6 图 = 30 张）：
- 每个产品独立维护一组 BENCHMARK_LOCK
- 严格遵循 alibaba-image-generation "多张并行执行"规范
- 每完成 1 个产品的 6 图 → 立即落地对应文件夹

---

## 落地命名（v3.0 升级，对齐官方+标杆锁）

```
详情页图/
├── 01_标杆定稿/
│   ├── BENCHMARK_LOCK.md
│   ├── ITERATION_LOG.md
│   └── <产品简称>_BENCHMARK_v3_final.jpg
├── 02_批量出图/
│   ├── <产品简称>_第1图_主形象_EN.jpg
│   ├── <产品简称>_第2图_SKU矩阵_EN.jpg
│   ├── <产品简称>_第3图_细节工艺_EN.jpg
│   ├── <产品简称>_第4图_应用场景_EN.jpg
│   ├── <产品简称>_第5图_信任背书_EN.jpg
│   └── <产品简称>_第6图_包装运输_EN.jpg
└── 03_多语言版本/
    ├── _AR/  (阿拉伯语版本)
    ├── _RU/
    └── _ES/
```

---

## R5 抽检 13 项（v3.0 升级，10 项原 + 3 项一致性）

阶段 C 批量出图后，每张图必须 see_image 并按 13 项打分（每项 0-1.0）：

| # | 验收项 | 权重 | 校验来源 |
|---|------|------|---------|
| 1-5 | G2 物理事实（形态/数量/主色/内容物色/配套）| 0.5 each | CONFIRMED_FACTS §1 |
| 6 | G1 真实感 | 1.0 | anti-ai-look-blueprint G1 |
| 7 | G1 无 AI 幻觉（无飘浮/无错指/无变形）| 1.0 | - |
| 8 | 图位文案主标准确 | 1.0 | BENCHMARK_LOCK §2 |
| 9 | 图位数据徽章正确（数字/单位）| 1.0 | CONFIRMED_FACTS §2 |
| 10 | 文案副标 / CTA 准确 | 0.5 | BENCHMARK_LOCK §2 |
| **11** | **官方合规**（白底/主体占比/文字占比/无水印/无违规词）| 1.0 | alibaba-official-pdp-spec §1.2 |
| **12** | **视觉一致性**（与标杆主色色差 ≤ 5%）| 0.5 | BENCHMARK_LOCK §1 |
| **13** | **布局一致性**（栅格偏移 ≤ 3% 画布宽）| 0.5 | BENCHMARK_LOCK §3 |

**阈值（不变）**：≥ 9.5 接受 / 9.0-9.4 商家三选 / < 9.0 强制回炉。

---

## 与其他文档的关系

| 文档 | 关系 |
|------|------|
| [alibaba-official-pdp-spec.md](alibaba-official-pdp-spec.md) | **本文档的权威依据**，所有规范从此处对齐 |
| [feature-lock-questionnaire.md](feature-lock-questionnaire.md) | 提供 CONFIRMED_FACTS.md 的事实输入 |
| [benchmark-iteration-protocol.md](benchmark-iteration-protocol.md) | 标杆定稿后才进入本文档批量阶段 |
| [anti-ai-look-blueprint.md](anti-ai-look-blueprint.md) | G1/G2/G3 三件套的 prompt 模板源 |
| [detail-html-modules.md](detail-html-modules.md) | 详情页 HTML 下半区的 10 个模块规范（非主图）|
naire.md](feature-lock-questionnaire.md) | 提供 CONFIRMED_FACTS.md 的事实输入 |
| [benchmark-iteration-protocol.md](benchmark-iteration-protocol.md) | 标杆定稿后才进入本文档批量阶段 |
| [anti-ai-look-blueprint.md](anti-ai-look-blueprint.md) | G1/G2/G3 三件套的 prompt 模板源 |
| [detail-html-modules.md](detail-html-modules.md) | 详情页 HTML 下半区的 10 个模块规范（非主图）|
l.md) | 标杆定稿后才进入本文档批量阶段 |
| [anti-ai-look-blueprint.md](anti-ai-look-blueprint.md) | G1/G2/G3 三件套的 prompt 模板源 |
| [detail-html-modules.md](detail-html-modules.md) | 详情页 HTML 下半区的 10 个模块规范（非主图）|
