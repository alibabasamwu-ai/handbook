# 原素材获取流程

商家二选一：A 后台分析 / B 直接上传。本技能在 Step 2 必须主动询问，不要替商家做决定。

---

# 方案 A：后台一键分析

## A.1 调用商品查询 MCP

**前提**：商家已授权并安装"生意助手"插件，国际站后台数据可读。

**调用接口**：复用 `alibaba-product-information-optimization` 技能的 MCP 工具：

### 接口 1：`list_products_by_id`（按 ID 查询）

```
入参：{"productId": "<商品ID>"}
返回字段：
  data.title.defaultText        — 商品标题
  data.structuredDescDTO.productSummary.defaultText — 商品卖点
  data.categoryQueryResultDTO.leafId — 叶子类目 id
  data.icbu_trade_information.content.priceRange — 商品价格
```

### 接口 2：`list_products_by_name`（按标题模糊查询）

```
入参：{"productName": "<商品标题/关键词>"}
返回：同上
```

### 调用注意
- 直接传入参数，**无需加 --json**
- 调用前先做参数非空校验
- 失败自动重试 1 次，仍失败则**主动建议商家切换到 B 方案**

## A.2 拉取产品图（含 Browser 降级抓取策略）

**第一性现状说明**：`list_products_by_id` 接口实际不返回 `imageList` 字段，获取图片必须 fallback 到 `browser` 抓取详情页（PDP）。

### PDP URL 标准构建规则
为了确保准确访问，必须构造含 slug 的完整 URL：
- **标准格式**：`https://www.alibaba.com/product-detail/<title-slug>_<productId>.html`
- **title-slug 生成规则**：
  1. 取 `title.defaultText`。
  2. 转为纯小写。
  3. 将空格替换为连字符 `-`。
  4. 去掉所有特殊符号（仅保留字母、数字、连字符）。
  5. 截取前 60 个字符。
- **实例**：
  - Title: "30-120W All in One Solar Street Light"
  - ID: 1600911862199
  - URL: `https://www.alibaba.com/product-detail/30-120w-all-in-one-solar-street_1600911862199.html`

⚠️ **警告**：单纯使用 `_<id>.html` 而无 slug 会导致 302 重定向到错误页或推荐位，必须包含 slug。

## A.3 系列归类（两者结合，优先后台分组）

商家后台可能有几十到几百个商品，必须先归类成"系列"才好出图。

### 归类策略

```
Step 1: 优先读取后台原生分组（"产品分组" / "类目"字段）
        ↓ 如果商家有原生分组 → 直接用
        ↓ 如果商家没分组（所有商品都在默认分组）→ 走 Step 2

Step 2: AI 智能聚类
        - 输入：所有商品标题 + 类目 + 卖点
        - 算法：按"产品类型核心词 + 规格变体"聚类
          例如：
            "30W Solar Street Light"、"60W Solar Street Light"、"100W Solar Street Light"
            → 归为系列「Solar Street Light（按瓦数）」
        - 输出：3–8 个系列（不要超过 8 个，否则商家选起来累）
```

### 系列清单输出格式

向商家展示一张表，等待**逐系列确认或调整**：

```markdown
| # | 系列名 | 商品数 | 代表商品 | 主图 |
|---|--------|--------|---------|------|
| 1 | Solar Street Light（按瓦数） | 12 | 30W Solar Street Light Outdoor IP65 | ![](url) |
| 2 | Solar Garden Light | 8  | 5W Garden Lawn Solar Light | ![](url) |
| 3 | Solar Flood Light | 5  | 100W Solar Flood Light | ![](url) |
```

询问商家（必须用 `ask_user`）：

```
✅ 我从您后台共识别出 {N} 个产品系列、{M} 个商品。
请您确认：
  1. 系列划分是否正确？需要合并/拆分哪些？
  2. 本次生成图片要覆盖哪几个系列？（可多选）
  3. 每个系列要选哪个代表商品来出图？（默认选询盘量最高的，如有数据）
```

⚠️ **商家未确认前，不要进入 Step 3**。

### A.3.5 Browser 抓图标准任务模板

**触发条件**：A.2 接口未返图、或返回的图片 URL 跳转失效时，启动 `sessions_spawn(browser)`。

**子代理执行规范**：
- 必须使用主代理提供的完整 PDP URL（含 slug）。
- **核验**：先执行 `browser_screenshot` 截图，对比页面标题，核验落地页是否为目标商品。
- **定位**：只从主图轮播容器（CSS class 包含 `"main-image"` / `"gallery"` / `"detail-gallery"` / `"image-viewer"`）提取 URL。
- **禁止**：严禁抓取 "You may also like" / "Related Products" / "Recommended for you" 等推荐区域。
- **自校验**：抓到每张图后，必须用 `see_image` 进行视觉确认，并给出一段话视觉描述（如 "White solar street light on a metal pole, blue sky background"）。
- **返回格式**：JSON 数组，每项包含 `{url, visual_description}`。

**可复用 Task 描述模板**：
```markdown
请访问此阿里巴巴详情页：[URL]。
1. 截图确认页面是否为 [产品名]；
2. 仅从详情页左侧/顶部的主图轮播区域（定位 class 如 'detail-gallery' 或 'main-image'）提取 3-5 张高清原图 URL；
3. 严禁抓取页面下方的“猜你喜欢”或推荐商品图；
4. 对抓到的每张图执行 see_image，生成一段简短的视觉描述；
5. 以 JSON 格式返回：[{"url": "...", "visual_description": "..."}]。
```

## A.4 产品图质量预检

接收到产品图后，立即检查：
- 图片可访问性（用 `bash` 工具 `curl -I` 检查 200 状态码）
- 图片清晰度（如能拿到尺寸，<800px 提示商家"原图清晰度不足，建议补图或用清晰度增强")
- 是否带原始水印/网址（需要时调用 `水印移除 (remove-watermark)` 预处理）

预检结果同步给商家：

```
🔍 已拉取代表图片 {N} 张：
  ✅ 可用：{N1} 张
  ⚠️ 清晰度偏低：{N2} 张（建议先做高清增强）
  ❌ 链接失效：{N3} 张（请补图）
   💧 含水印：{N4} 张（已自动清理）
```

### A.4.5 原图视觉对齐强制环节

**执行逻辑**：主代理收到 Browser 返回的 URL + 视觉描述后，必须亲自调用 `see_image` 抽样 1-2 张进行最终校验。

**校验标准**：图片内容必须与商品 Title 的核心品类词语义匹配。

**示例**：
- ✅ **匹配**：Title 为 "Solar Street Light 100W"，图片描述为 "outdoor LED street light with solar panel" → 允许进入 Step 3。
- ❌ **不匹配**：Title 为 "Solar Street Light"，图片描述为 "ceramic hot pot with golden handle" → 判定为**图源污染**。

**异常处理**：若判定为 `❌ 图源污染`，立即中止流程，进入 **A.5 降级策略**，严禁继续生成。

---

# 方案 B：商家直接上传

## B.1 上传规范告知

向商家说明：

```
📤 请按以下方式提供素材：
  1. 上传产品图（每个产品 1–3 张主图，分辨率建议 ≥ 1200×1200）
  2. 同时告诉我：
     - 产品名称（英文最佳，中文也可）
     - 产品类目（如 Solar Street Light / Folding Chair）
     - 主要规格参数（如功率、尺寸、材质，用于 USP 图与细节图）
     - 主推市场（如 US / Russia / Middle East，用于场景图与多语言）
     - 主要差异化卖点（3–5 个，用于 USP 图）
```

## B.2 上传内容确认

商家上传后，回放确认：

```markdown
📦 已收到您提供的素材：

| 产品名 | 类目 | 规格 | 主推市场 | 卖点 | 上传图片 |
|--------|------|------|---------|------|---------|
| {name} | {cat} | {specs} | {market} | {usp} | {N} 张 |

请确认信息无误，我将基于此扩展素材。
```

⚠️ **商家未确认前，不要进入 Step 3**。

---

# 通用：原素材保留

无论 A 还是 B 方案，**所有原图都备份一份到** `00_原素材/` 目录：

```
{商家昵称}_{YYYYMMDD}/
├── 00_原素材/
│   ├── A_后台拉取/        ← 走 A 方案时
│   │   ├── Solar_Light_30W_main.jpg
│   │   └── ...
│   └── B_商家上传/         ← 走 B 方案时
│       ├── original_001.jpg
│       └── ...
├── 详情页6图/
└── 营销图/
```

便于商家追溯、对比、二次修改。

---

# A.5 三层降级策略

当自动拉取或视觉对齐失败时，按顺序启动降级：

1. **L1: 精准重抓**
   - 触发：视觉对齐判定为"抓错区域"（如抓到了推荐位）。
   - 动作：重启 `browser` 子代理，并在任务描述中明确要求："上一次抓取位置有误，请精确定位主图轮播容器，通常 ARIA-label 包含 'Product main image' 或 class 为 'image-viewer' 的区域"。

2. **L2: 引导上传**
   - 触发：L1 重抓仍失败，或无法生成有效 URL。
   - 动作：使用 `ask_user` form 卡片主动询问商家。
   - 选项：
     - "我来上传 1-3 张主图"（切回方案 B）
     - "我手头也没有图，请直接帮我用 AI 绘图（L3 模式）"

3. **L3: 无图指令绘图（Placeholder 模式）**
   - 触发：商家确认无图，同意 AI 盲绘。
   - 动作：直接调用 `image-generation` 的 `command_drawing` 能力。
   - 输入：基于商家提供的产品名 + 规格 + 目标市场。
   - 规范：必须在输出图的同时明确告知商家："**此图片为 AI 根据产品描述生成的示意图，非实拍，仅用于设计版式占位，请后续替换为实拍图。**"

---

# 异常处理

| 场景 | 处理 |
|------|------|
| MCP 接口超时 | 重试 1 次；仍失败 → 建议切换到 B 方案 |
| 商家无授权 / 后台未对接 | 直接走 B 方案，不要让商家卡在登录上 |
| 商家上传图全是渲染图/低质 | 提示商家："建议补充实拍图，AI 扩展后会更真实"；同时仍可基于现有图继续 |
| 商家提供的产品名是中文 | 自动翻译成英文存入产品名字段；与商家 confirm |
