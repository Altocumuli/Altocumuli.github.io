---
title: "WebSwarm: Recursive Multi-Agent Orchestration for Deep-and-Wide Web Search"
summary: "WebSwarm lets task decomposition, recursive delegation, and collaboration modes evolve with newly discovered web evidence instead of fixing a complete search plan upfront."
date: 2026-07-01
type: "Preprint"
status: "arXiv · Work in progress"
featured: true
sample: false
authors:
  - "Xiaoshuai Song"
  - "Liancheng Zhang"
  - "Kangzhi Zhao"
  - "Yutao Zhu"
  - "Zhongyuan Wang"
  - "Guanting Dong"
  - "Jinghan Yang"
  - "Han Li"
  - "Kun Gai"
  - "Ji-Rong Wen"
  - "Zhicheng Dou"
venue: "arXiv preprint"
tags:
  - "Multi-Agent Systems"
  - "Web Search"
  - "Recursive Delegation"
contribution: "Co-author, listed seventh of eleven authors. Specific ownership of algorithms, code, experiments, figures, or writing is intentionally not inferred beyond the public author record."
accent: "cyan"
links:
  - label: "Paper"
    href: "https://arxiv.org/abs/2607.08662"
  - label: "PDF"
    href: "https://arxiv.org/pdf/2607.08662"
  - label: "Code"
    href: "https://github.com/songxiaoshuai/WebSwarm"
---

## Why it matters

Real web tasks frequently combine multi-hop reasoning, open-ended enumeration, and large-scale attribute collection. A single ReAct agent must make planning, retrieval, verification, coverage, and aggregation compete within one long trajectory, while one-shot parallel decomposition cannot adapt to structures revealed only after searching begins.

## Approach

The team developed **WebSwarm**, which constructs a recursive delegation tree at inference time. Each local objective is paired with one of four search modes—`atom`, `deep`, `wide`, or `entity_collect`—and a child agent may continue delegating as new evidence changes the problem. Web-structure probing and within-instance sibling experience inform later expansion, revision, aggregation, and stopping decisions.

## Reported results

The paper reports improvements over its single-agent and multi-agent baselines on BrowseComp-Plus, WideSearch, DeepWideSearch, and GISA. In a GLM-4.5 same-backbone comparison, BrowseComp-Plus accuracy rises from **50.50 to 68.00**, while WideSearch Row/Item F1 rises from **33.23 / 64.61 to 44.14 / 74.37**. These figures are team results reported by the paper.

Ablations indicate that recursive delegation and local mode matching improve task quality. Web-Probing primarily reduces web calls rather than directly improving accuracy, while sibling experience improves Item F1.

## My role

I participated in the deep-and-wide web search and recursive multi-agent research as a co-author. The public author list places me seventh of eleven authors and notes that related work was completed during an internship; the mark is not a co-first-author designation. Until responsibilities are confirmed with the team, this page does not assign individual ownership of the method, implementation, experiments, or writing.

## Limitations and next steps

WebSwarm is an inference-time orchestration method rather than a data-construction or multi-agent policy-optimization method. It costs more calls than a single ReAct trajectory and currently focuses on textual web tools. Future work could learn delegation, mode-selection, and stopping policies; enforce explicit node and cost budgets; track structured evidence provenance; and extend the system to multimodal and GUI-based web environments.
