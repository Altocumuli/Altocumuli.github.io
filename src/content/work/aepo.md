---
title: "Agentic Entropy-Balanced Policy Optimization"
summary: "AEPO balances exploration around high-entropy decisions during both rollout and policy updates, helping long-horizon tool-use agents learn from uncertainty more stably."
date: 2026-01-01
type: "Publication"
status: "Accepted · WWW 2026 Oral"
featured: true
sample: false
authors:
  - "Guanting Dong"
  - "Licheng Bao"
  - "Zhongyuan Wang"
  - "Kangzhi Zhao"
  - "Xiaoxi Li"
  - "Jiajie Jin"
  - "Jinghan Yang"
  - "Hangyu Mao"
  - "Fuzheng Zhang"
  - "Kun Gai"
  - "Guorui Zhou"
  - "Yutao Zhu"
  - "Ji-Rong Wen"
  - "Zhicheng Dou"
venue: "The ACM Web Conference 2026 · Oral"
tags:
  - "Agentic RL"
  - "Policy Optimization"
  - "Tool-Use Agents"
contribution: "Co-author; the paper records that related work was completed during my internship. Specific module ownership is intentionally not claimed here pending confirmation with the project team."
accent: "violet"
links:
  - label: "Paper"
    href: "https://arxiv.org/abs/2510.14545"
  - label: "PDF"
    href: "https://arxiv.org/pdf/2510.14545"
  - label: "Code"
    href: "https://github.com/RUC-NLPIR/ARPO"
---

## Why it matters

The most consequential decisions in a long-horizon agent often occur immediately after uncertain tool feedback. If a small number of high-entropy trajectories dominate both exploration budgets and gradients, agentic reinforcement learning can become inefficient or unstable.

## Approach

The team introduced **Agentic Entropy-Balanced Policy Optimization (AEPO)** to balance these decisions at two stages. During rollout, dynamic entropy balancing allocates global and branch-level sampling budgets. During policy updates, stop-gradient entropy clipping and entropy-aware advantage estimation preserve useful learning signals from high-entropy tokens without allowing them to dominate training.

## Reported results

The paper compares AEPO with seven reinforcement-learning baselines across fourteen complex reasoning and search datasets. With 1K reinforcement-learning samples, the reported Qwen3-14B results reach **47.6% / 11.2% / 43.0% Pass@1** and **65.0% / 26.0% / 70.0% Pass@5** on GAIA, HLE, and WebWalker respectively. These are paper-level team results, not individual results.

The experiments also report more diverse rollouts and more stable policy entropy, supporting the central claim that high-entropy decisions should be explored and learned from in a balanced way.

## My role

I contributed to this work as a co-author during my internship. Public materials establish my authorship, while the precise division of algorithm, training, experiment, figure, and writing responsibilities remains to be confirmed with the project team. Accordingly, the method and benchmark results above are attributed to the paper and its authors collectively.

## Scope and next steps

The conclusions are limited to the models, datasets, tool environments, and training settings evaluated in the paper. Natural next steps include testing transfer across models and tool environments, and jointly optimizing search cost, branch depth, and training benefit.
