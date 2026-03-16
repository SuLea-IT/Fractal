# 分形 × 植物：纠错后的一轮判断（2026-03-16）

## 已核对的真实文献
1. Prusinkiewicz P, Lindenmayer A. *The Algorithmic Beauty of Plants* (1990)
2. Azpeitia E et al. *Cauliflower fractal forms arise from perturbations of floral gene networks* (Science, 2021)
3. Azpeitia E, Parcy F, Godin C. *Cauliflowers or how the perseverance of a plant to make flowers produces an amazing fractal structure* (Comptes Rendus Biologies, 2023)

## 从当前阅读得到的核心结论
- 分形在植物里不能只当“好看的几何图案”，而要落到：
  1) meristem fate transitions（分生组织命运转换）
  2) reiterative / recursive organogenesis（重复生成）
  3) growth dynamics（生长动力学）
- 更准确的表述常常应是 “fractal-like” / “multiscale self-similarity”，而不是先武断说“严格分形”。
- 真正接近高水平论文的点，不是“这个器官像分形”，而是“哪个发育网络让重复结构在不同尺度上出现，并且影响功能/产量/适应”。

## 对 wheat / barley / rice 的判断
### Rice panicle
- 最适合做“分形-like / multiscale branching”
- 因为有 primary / secondary / sometimes tertiary branches，层级最明显
- 容易把自相似、迭代、分枝级次与 grain number 联系起来
- 若结合自然变异 / 调控元件 / GWAS-TWAS / 编辑验证，有冲 NP 甚至更高的机会

### Barley spike
- 更适合做 meristem determinacy / reiterative module，而不是最强的“分形外观”
- 优点：发育遗传学清楚，最近已有单细胞图谱和 CLV-WUS 方向成果，适合机制论文
- 更偏 NP 路线

### Wheat spike
- 农艺意义最大，但经典 spike 本身的层级重复没有 rice panicle 强
- 如果只讲“穗子像分形”，说服力不足
- 要靠 branched/supernumerary spikelet、paired spikelet、determinacy 失衡等特殊材料，把“潜在递归程序”做出来
- 更适合做“隐含的重复生成程序 + 产量性状”的故事

## 当前排序
1. **Rice**：最适合把“分形/自相似/迭代”讲清楚
2. **Barley**：最适合做清晰机制、冲 Nature Plants
3. **Wheat**：最适合做农艺转化，但“分形”概念最弱

## 更像 NP / NG 的包装方式
### NP 级别
- 3D 结构表型 + 发育阶段追踪 + 单细胞/空间表达 + 因果基因验证 + 简单生成模型
- 核心问题：哪个网络调控 reiteration depth / branch determinacy / spikelet fate？

### NG 级别
- 在 NP 级别基础上，再加：
  - 大群体自然变异
  - 因果 regulatory variant
  - domestication / adaptation / selection evidence
  - 多组学（GWAS/TWAS/eQTL/pangenome）
- 核心问题：自然群体中的哪个变异改变了 multiscale architecture rule？

## 初步建议
- 如果你想“从穗子引出分形”，**rice panicle 是最顺的入口**。
- 如果你想“更容易做出干净机制”，**barley 更稳**。
- 如果你想“作物意义最强”，**wheat 要做特殊 branching mutant 或自然变异，不然分形概念太弱**。
