# 视觉风格预设库（5 档）· v1.0

> 本文件是 SKILL v3.1.0 新增的核心约束。**风格不是 AI 默认，必须由商家在 Step 2.7 明确选择**，写入 `VISUAL_STYLE_LOCK.md` 后才能进入阶段 B 出图。
>
> **解决的核心问题**：v3.0 的 G1/G3 三件套默认偏"工业冷峻写实"，对消费品/快消/家居/美妆/服装等情绪驱动品类反而压低询盘转化。本库按品类拆 5 档，G1/G3 段分别参数化。
>
> G2 PRODUCT FACTS LOCK 段 5 档共用（事实层无关风格），继承自 [anti-ai-look-blueprint.md](anti-ai-look-blueprint.md#g2--product-facts-lock-模板)。

---

## 一、5 档风格总览

| 档位 | 名称 | 核心情绪 | 适配品类 | 主代理判定关键词 |
|------|------|---------|---------|----------------|
| **A** | 工业冷峻写实 | 精密、专业、可信 | 机械设备 / 五金工具 / 电子元件 / 工业耗材 / 建材 / 汽配 / 仪器仪表 | "机械、设备、工业、加工、零部件、CNC、模具、焊接、精度、参数" |
| **B** | 商业精致写实 | 科技、克制、品质 | 3C 数码 / 智能硬件 / 家电 / 办公用品 / 安防 / 厨电 | "智能、电子、数码、家电、设备、便携、无线、蓝牙" |
| **C** | 生活场景暖调 | 温馨、生活感、放松 | 家居 / 家纺 / 厨具 / 园艺 / 宠物用品 / 母婴 / 玩具 / 文具 | "家居、家用、宠物、母婴、儿童、园艺、烹饪、收纳" |
| **D** | 时尚高饱和 | 潮流、张力、社媒 | 服装 / 鞋包 / 配饰 / 美妆 / 个护 / 时尚电子 / 礼品 | "服装、鞋帽、包包、首饰、化妆品、护肤、香水、潮流、设计师" |
| **E** | 食品鲜活 | 食欲、新鲜、健康 | 食品 / 饮料 / 调味料 / 保健品 / 茶咖 / 速食 / 农产品 | "食品、饮料、零食、保健、茶、咖啡、调味、营养" |

---

## 二、Step 2.7 商家选择话术（标准模板）

主代理读取 CONFIRMED_FACTS.md §1 的 `industry_category` 字段，按上表"主代理判定关键词"匹配出**推荐档**，然后向商家发送：

```
🎨 进入视觉风格预选（Step 2.7）

根据您的产品「{产品简称}」属于「{industry_category}」品类，
我推荐使用 ⭐ {推荐档名称} 风格：

  {推荐档一句话描述（见 §3 对应档位"风格定位"）}

也可以选其他档位（每档差异见预览描述）：

a) ⭐ {推荐档} — {一句话描述}                           ← 推荐
b) A 工业冷峻写实 — 精密、专业、可信（适合机械/工业品）
c) B 商业精致写实 — 科技、克制、品质（适合 3C/家电）
d) C 生活场景暖调 — 温馨、生活化（适合家居/母婴）
e) D 时尚高饱和 — 潮流、张力（适合服装/美妆）
f) E 食品鲜活 — 食欲、新鲜（适合食品/饮料）
g) 我先看示意图再选

⚠️ 此选择会锁定整套素材的视觉基调，定稿后中途换档需清空标杆历史。
请明确点击一项以确认。
```

**关键规则**（对应 Step 2.7 用户决策）：
1. 必须**商家明确点选**才能继续，3 秒无回不允许默认通过
2. 商家选 g) 看示意图 → 主代理用 image_generate 出 5 张同款产品的 5 档示意图（小成本试错），再让商家选
3. 商家选完 → 写 VISUAL_STYLE_LOCK.md（结构见 §5）

---

## 三、5 档完整模板（G1 + G3 + 抽检差异）

> G2 PRODUCT FACTS LOCK 5 档共用，不在此重复。事实层模板见 [anti-ai-look-blueprint.md §G2](anti-ai-look-blueprint.md#g2--product-facts-lock-模板)。

---

### 档位 A · 工业冷峻写实

**风格定位**：精密、专业、可信。一切为"参数 / 工艺 / 材质"服务。

**关键视觉**：
- 主色 HEX：#2C3E50（深蓝灰）+ #FFFFFF（纯白底）+ #E74C3C（极少量品牌红强调）
- 光感：硬冷白光，HMI 灯具，5500K
- 机位：90° 正对 / 45° 工业图 / 微距特写
- 景深：F11-F16 全景深，强调工艺细节锐利
- 字体：Helvetica Neue / Roboto / 工业等宽字体
- 数据徽章：黑底白字 / 灰底白字（无渐变）

#### G1 — A 档模板

```
[G1 REALISM CONTRACT — INDUSTRIAL PRECISION]
Photorealistic industrial product photography, professional cold studio lighting (5500K HMI),
razor-sharp focus on [品类核心元素 e.g. precision-machined aluminum / steel housing],
visible material textures showing brushed metal / anodized surface / precision tolerances,
hard shadows with crisp edges, F11-F16 deep focus, premium industrial packshot.
Composition: 90-degree front view OR 45-degree technical isometric.
Color palette: cool grays #2C3E50, pure white background, minimal red accent #E74C3C.

NEGATIVE: NO warm tones, NO soft lifestyle lighting, NO fashion model poses, NO bokeh blur,
NO neon glow, NO oversaturation, NO illustration look, NO cartoon, NO 3D render plastic,
NO fantasy environments, NO grass/wood/fabric background, NO duplicate parts,
NO extra fingers, NO human face, NO text artifacts.
```

#### G3 — A 档模板

```
[G3 CATEGORY VISUAL BRIEF — INDUSTRIAL]
Visual mood: technical, precise, trustworthy, B2B professional.
Background: pure white #FFFFFF (mandatory for image 1) OR light cool gray #F5F7FA.
Composition rules:
- Product occupies 60-70% of frame, centered or rule-of-thirds.
- Show measurement callouts / parameter labels where appropriate.
- Avoid lifestyle context, avoid people, avoid emotion-driven framing.
Typography: Helvetica Neue / Roboto Bold, all-caps for headers, monospace for specs.
Data badges: solid black #000 or solid dark gray #333 with white text, no gradients.
```

#### A 档抽检差异（覆盖 R5 第 11 项官方合规外）

| 项 | A 档专属抽检 |
|----|-------------|
| 暖光检测 | 图中不得出现暖黄光（CCT > 4000K 即扣 0.5）|
| 模特检测 | 严禁人物（出现 1 个 = 强制回炉）|
| 背景检测 | 第 1 图必须纯白 #FFFFFF，其他图允许 #F5F7FA 浅冷灰 |

---

### 档位 B · 商业精致写实

**风格定位**：科技、克制、品质。介于 A 工业风和 C 生活风之间。

**关键视觉**：
- 主色 HEX：#1A1A1A（深炭黑）+ #F8F9FA（浅冷灰）+ 品牌强调色
- 光感：中性 4000K，软光箱 + 一支硬侧光打高光
- 机位：45° 商业广告标准 / 产品悬浮特效 / 局部微距
- 景深：F5.6-F8 中景深，主体锐利、背景轻虚化
- 字体：Inter / SF Pro / Pingfang SC
- 数据徽章：磨砂黑 / 渐变深灰，圆角 4px

#### G1 — B 档模板

```
[G1 REALISM CONTRACT — COMMERCIAL PRECISION]
Photorealistic commercial product photography, soft key light + hard rim light,
neutral 4000K lighting, sharp focus on [品类核心元素 e.g. matte metal finish / glass screen],
visible premium material textures, F5.6-F8 medium depth of field with subtle background bokeh,
high-end Apple-style packshot aesthetic.
Composition: 45-degree hero shot OR floating product with subtle shadow.
Color palette: charcoal #1A1A1A, light cool gray #F8F9FA, single brand accent color.

NEGATIVE: NO heavy industrial roughness, NO oversaturation, NO warm orange tones,
NO cartoon, NO 3D render plastic, NO floating without shadow, NO fantasy elements,
NO duplicate elements, NO extra fingers, NO human face unless explicitly required,
NO text artifacts.
```

#### G3 — B 档模板

```
[G3 CATEGORY VISUAL BRIEF — COMMERCIAL TECH]
Visual mood: refined, modern, premium, tech-savvy.
Background: pure white #FFFFFF (image 1) OR subtle gradient from #F8F9FA to #E9ECEF.
Composition rules:
- Product 60-65% of frame, slight 45-degree angle for dimensionality.
- One key feature highlighted with thin line callout, max 3 callouts per image.
- Avoid cluttered lifestyle scenes, focus on product as hero.
Typography: Inter / SF Pro Display, sentence case for headers, mono for specs.
Data badges: matte black #1A1A1A or dark gradient, 4px rounded corners.
```

#### B 档抽检差异

| 项 | B 档专属抽检 |
|----|-------------|
| 反光检测 | 屏幕/金属面必须有可信的环境反射（无反射扣 0.3）|
| 渐变检测 | 背景渐变必须微妙（色差 < 15%），过强扣 0.3 |
| 字体检测 | 不得使用 Roboto/Arial 等"通用风"，必须 Inter/SF Pro |

---

### 档位 C · 生活场景暖调

**风格定位**：温馨、生活感、放松。让买家感受"放在家里好看"。

**关键视觉**：
- 主色 HEX：#F4E4C1（米白）+ #D4A574（暖驼）+ 木色 + 绿植
- 光感：自然窗光 3000K，金时段晨光感
- 机位：俯拍 flat lay / 生活场景实拍 / 45° 桌面
- 景深：F2.8-F4 浅景深，背景柔焦
- 字体：Pingfang SC / Noto Serif / 手写感衬线
- 道具：木板 / 亚麻布 / 陶瓷 / 绿植 / 咖啡杯

#### G1 — C 档模板

```
[G1 REALISM CONTRACT — LIFESTYLE WARMTH]
Photorealistic lifestyle product photography, natural window light 3000K with warm golden hour mood,
soft shadows, sharp focus on product with F2.8-F4 shallow depth of field, background gently blurred,
authentic home environment with subtle props (linen, wood, ceramic, plants).
Composition: top-down flat lay OR 45-degree table top OR cozy room corner.
Color palette: warm cream #F4E4C1, soft tan #D4A574, natural wood tones, muted greens.

NEGATIVE: NO industrial cold lighting, NO 5500K white balance, NO sterile studio look,
NO neon, NO oversaturation, NO cartoon, NO 3D render, NO fantasy elements,
NO model showroom poses (unless explicitly required), NO extra fingers, NO text artifacts.
```

#### G3 — C 档模板

```
[G3 CATEGORY VISUAL BRIEF — HOME LIFESTYLE]
Visual mood: warm, cozy, aspirational, "I want this in my home".
Background: textured natural surface (oak wood / linen fabric / ceramic) OR softly blurred home scene.
Image 1 (主形象) exception: must use pure white #FFFFFF per Alibaba official spec, but can use
warm-tinted white #FDFBF7 to retain mood while staying compliant.
Composition rules:
- Product 55-65% of frame, surrounded by complementary props.
- Show product in actual use context (kitchen, living room, garden).
- Hands holding product OR human partial silhouette acceptable.
Typography: Pingfang SC / Noto Serif, mixed case, slight letter spacing.
Data badges: soft pastel pill shapes #FDFBF7 background with warm text.
```

#### C 档抽检差异

| 项 | C 档专属抽检 |
|----|-------------|
| 暖光强度 | 色温必须 ≤ 3500K（冷光扣 0.5）|
| 道具合理 | 道具必须与品类匹配（厨具配厨房道具，宠物用品配宠物物品）|
| 生活感 | 不得纯白底（除第 1 图官方强制外）|

---

### 档位 D · 时尚高饱和

**风格定位**：潮流、张力、社媒友好。情绪冲击 > 参数说明。

**关键视觉**：
- 主色 HEX：高对比双色（如 #FF006E + #FFD60A）+ 撞色背景
- 光感：戏剧化彩色凝胶灯，硬投影
- 机位：低角度英雄镜头 / 模特半身 / 极端特写
- 景深：F2.8 极浅景深，赛博朋克感
- 字体：Bebas Neue / Druk / 粗黑体
- 风格参考：Vogue / Hypebeast / Nike 营销片

#### G1 — D 档模板

```
[G1 REALISM CONTRACT — FASHION EDITORIAL]
Photorealistic fashion editorial product photography, dramatic colored gel lighting,
high-fashion magazine style, sharp focus on product with bold composition,
F2.8 shallow depth of field, vibrant high-contrast color grading inspired by Vogue/Hypebeast.
Composition: low-angle hero shot OR model half-body with product OR extreme macro detail.
Color palette: bold high-contrast duo (e.g. magenta #FF006E + electric yellow #FFD60A),
solid color backdrop OR dramatic gradient.

NEGATIVE: NO bland neutral lighting, NO industrial sterile look, NO cartoon, NO 3D render,
NO floating without shadow, NO desaturated palette, NO low-key boring composition,
NO duplicate elements, NO extra fingers, NO AI-generated distorted face,
NO text artifacts, NO low-resolution model face.
```

#### G3 — D 档模板

```
[G3 CATEGORY VISUAL BRIEF — FASHION FORWARD]
Visual mood: bold, trendy, Instagram-worthy, "stop scrolling" energy.
Background: solid bold color (one of brand duo) OR dramatic editorial backdrop.
Image 1 (主形象) exception: official mandates pure white #FFFFFF; comply with white background
but use bold accent in product styling/lighting to retain energy.
Composition rules:
- Product or model 65-75% of frame, asymmetric tension.
- Strong negative space utilization.
- For apparel/jewelry: model partial body OK; for cosmetics: dramatic product hero.
Typography: Bebas Neue / Druk Wide, ALL CAPS, tight letter spacing, oversized.
Data badges: bold solid color pills, no gradients, sharp corners or extreme rounded.
```

#### D 档抽检差异

| 项 | D 档专属抽检 |
|----|-------------|
| 饱和度检测 | 主色饱和度必须 ≥ 70%（低饱和扣 0.5）|
| 构图张力 | 必须非对称（正中心居中扣 0.3）|
| 模特检测 | 服装/美妆类允许模特，但人脸必须 see_image 复核无变形 |

---

### 档位 E · 食品鲜活

**风格定位**：食欲、新鲜、健康。让买家"立刻想吃/喝"。

**关键视觉**：
- 主色 HEX：#FF6B35（活力橙）+ #4ECB71（鲜绿）+ 食材实色
- 光感：自然侧光 4500K，水珠/蒸汽/油花反光
- 机位：俯拍 + 45° + 极端特写食材切面
- 景深：F4-F5.6，食材纹理锐利
- 字体：Pingfang SC + 手写感强调
- 道具：木砧板 / 食材原料 / 餐具 / 水珠 / 蒸汽

#### G1 — E 档模板

```
[G1 REALISM CONTRACT — FOOD APPETIZING]
Photorealistic food product photography, natural side-key lighting 4500K,
sharp focus on food product with visible textures (steam, water droplets, oil sheen, ingredient cuts),
F4-F5.6 medium-shallow depth of field, mouth-watering commercial food photography aesthetic.
Composition: top-down spread OR 45-degree plated OR extreme macro of food cross-section.
Color palette: vibrant food-natural colors, no artificial saturation, support props in warm wood tones.

NEGATIVE: NO industrial sterile look, NO cold blue lighting, NO illustration, NO 3D render,
NO cartoon, NO unrealistic plastic-looking food, NO oversaturated unnatural colors,
NO frozen/stale appearance, NO duplicate items, NO extra fingers, NO text artifacts,
NO AI-generated distorted food shapes.
```

#### G3 — E 档模板

```
[G3 CATEGORY VISUAL BRIEF — FOOD APPETIZING]
Visual mood: fresh, appetizing, healthy, "I want to taste this".
Background: textured wood cutting board OR linen tablecloth OR softly blurred kitchen.
Image 1 (主形象) exception: per Alibaba official pure white #FFFFFF for image 1; comply but show
product packaging clearly with ingredient hints (open jar / partial pour / fresh garnish).
Composition rules:
- Product 50-60% of frame, surrounded by raw ingredients and serving props.
- Show product in serving / consumption context.
- Steam, water droplets, oil sheen highly encouraged.
Typography: Pingfang SC + handwritten accent for "新品/精选" tags.
Data badges: organic shapes (leaf, splash, badge), warm natural colors.
```

#### E 档抽检差异

| 项 | E 档专属抽检 |
|----|-------------|
| 食欲感 | 必须有 1+ 食欲触发元素（蒸汽/水珠/油光/食材切面），无扣 0.5 |
| 真实食材 | 食材形态必须真实（AI 常出现畸形水果/不存在食物），出现扣 1.0 强制回炉 |
| 包装清晰 | 第 1 图包装文字必须清晰可读 |

---

## 四、5 档兼容性矩阵（中途换档影响评估）

| 从 → 到 | 兼容度 | 中途换档代价 |
|---------|-------|------------|
| A → B | 🟢 高 | 主色微调 + 背景灰度变化，~30% 历史可复用 |
| A → C | 🔴 低 | 几乎全部重做（冷光 → 暖光、白底 → 木纹）|
| A → D | 🔴 低 | 几乎全部重做（克制 → 张力）|
| A → E | 🔴 低 | 完全重做 |
| B → C | 🟡 中 | 道具与光感全改，~20% 可复用 |
| B → D | 🟡 中 | 饱和度与构图全改，~15% 可复用 |
| C → D | 🟡 中 | 道具风格全改 |
| C → E | 🟢 高 | 都是暖调，~40% 可复用 |
| D → E | 🔴 低 | 时尚 → 食欲，构图道具全改 |

**Step 3.6 中途换档处理**：
- 主代理弹出二次确认，明确告知"将清空当前标杆历史（v1-vN），从 v1 重新开始"
- 商家确认后，归档旧 ITERATION_LOG.md 为 `ITERATION_LOG_styleA_archived.md`，新建空白循环
- VISUAL_STYLE_LOCK.md 记录变更（旧档/新档/变更时间）

---

## 五、VISUAL_STYLE_LOCK.md 输出结构

`<根目录>/VISUAL_STYLE_LOCK.md`，由 Step 2.7 主代理写入，阶段 B/C 全程引用。

```markdown
# VISUAL_STYLE_LOCK · {产品简称}

> 视觉风格锁定档案。本文件锁定后，阶段 B/C 所有 prompt 的 G1/G3 段必须严格按此档调用。
> 中途换档需主代理在 ITERATION_LOG 中明确记录并清空标杆历史。

## §1 锁定的风格档

- **档位**：D（时尚高饱和）
- **判定来源**：AI 推荐（基于 CONFIRMED_FACTS.industry_category = "服装"）
- **商家确认**：✅ 已明确点选（2026-05-26 21:42:15）
- **修改记录**：
  - 2026-05-26 21:42:15 初始锁定为 D
  - （无）

## §2 G1/G3 模板引用

- G1 模板：[visual-style-presets.md#g1--d-档模板](references/visual-style-presets.md#g1--d-档模板)
- G3 模板：[visual-style-presets.md#g3--d-档模板](references/visual-style-presets.md#g3--d-档模板)
- G1/G3 段全文已展开存档于 BENCHMARK_LOCK.md §6

## §3 抽检差异项（覆盖 R5 第 11 项之外）

继承 [visual-style-presets.md#d-档抽检差异](references/visual-style-presets.md#d-档抽检差异)：
- 饱和度检测：主色饱和度 ≥ 70%
- 构图张力：必须非对称
- 模特检测：服装/美妆允许，人脸必须 see_image 复核

## §4 兼容性提示（若中途换档）

参考 [visual-style-presets.md#四5-档兼容性矩阵](references/visual-style-presets.md#四5-档兼容性矩阵)
```

---

## 六、与现有 references 文档的对接关系

| 文档 | v3.1 联动改动 |
|------|--------------|
| `anti-ai-look-blueprint.md` | G1/G3 节标注"以下为 v2.0.3 工业默认；v3.1 起按 VISUAL_STYLE_LOCK 调用本库 5 档"；G2 不变 |
| `feature-lock-questionnaire.md` | CONFIRMED_FACTS.md 输出结构新增 §4 风格预选（记录主代理推荐档 + 商家最终档）|
| `benchmark-iteration-protocol.md` | BENCHMARK_LOCK.md §1 视觉锁继承 VISUAL_STYLE_LOCK；定稿循环新增 B7 中途换档处理 |
| `detail-6-images.md` | 6 图模板说明"G1/G3 按 VISUAL_STYLE_LOCK 调用对应档"；图位末尾补"档位专属提示" |
| `marketing-12-images.md` | 12 张营销图标注哪些档位适合哪类海报（如 D 档适合促销海报，A 档适合工厂图）|
| `detail-html-modules.md` | 10 模块的版式色彩按 VISUAL_STYLE_LOCK 主色应用 |

---

## 七、版本

- v1.0 — 与 SKILL v3.1.0 同步发布。5 档定义 + G1/G3 模板 + 5 档兼容矩阵 + VISUAL_STYLE_LOCK 标准结构
- v1.1（规划）— 增加示意图缩略集（每档 1 张占位图，让商家选 g) 时主代理直接展示而非现场出图）
- v1.2（规划）— 增加 ML 自动品类判定模型（替代当前关键词匹配）
