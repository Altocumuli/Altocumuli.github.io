---
title: "AgentX: Towards Agent-Driven Self-Iteration of Industrial Recommender Systems"
summary: "AgentX restructures the idea-to-launch workflow for recommender systems into a parallel, verifiable, recoverable multi-agent loop that learns from both successful and failed experiments."
date: 2026-06-01
type: "Technical Report"
status: "Public technical report · arXiv v2"
featured: true
sample: false
authors:
  - "Changxin Lao"
  - "Fei Pan"
  - "Guozhuang Ma"
  - "Han Li"
  - "Huihuang Lin"
  - "Jijun Shi"
  - "Kangzhi Zhao"
  - "Kun Gai"
  - "Mo Zhou"
  - "Qinqin Zhou"
  - "Quan Chen"
  - "Ruochen Yang"
  - "Shifu Bie"
  - "Shijie Yi"
  - "Shuang Yang"
  - "Shuo Yang"
  - "Wenhao Li"
  - "Wentao Xie"
  - "Xiao Lv"
  - "Xuming Wang"
  - "Yijun Wang"
  - "Yiming Chen"
  - "Yusheng Huang"
  - "Zhongyuan Wang"
  - "Zibo Zhao"
  - "Zijie Zhuang"
  - "Baoning Xia"
  - "Chao Liu"
  - "Chaoyi Ma"
  - "Chubo He"
  - "Dawei Cong"
  - "Feng Jiang"
  - "Gang Wang"
  - "Guilin Xia"
  - "Hanwen Xu"
  - "Jiahong Xie"
  - "Jiahui Qiao"
  - "Jian Liang"
  - "Jiangfan Yue"
  - "Jing Wang"
  - "Jinghan Yang"
  - "Jinghui Jia"
  - "Kan Qin"
  - "Lei Wang"
  - "Ming Li"
  - "Peilin Song"
  - "Pengbo Xu"
  - "Qiang Luo"
  - "Ruiming Tang"
  - "Shiyang Liu"
  - "Shuxian Jin"
  - "Tao Wang"
  - "Tao Zhang"
  - "Xiang Gao"
  - "Xianghan Li"
  - "Yingsong Luo"
  - "Yiwen Ning"
  - "Yongcheng Liu"
  - "Yueyang Liu"
  - "Yuan Guo"
  - "Zhaojie Liu"
  - "Zhenkai Cui"
venue: "arXiv technical report"
tags:
  - "Industrial Recommenders"
  - "Agent Harness"
  - "Auto-Experimentation"
contribution: "Contributed to end-to-end recommendation experiments, harness and tool-boundary improvements, validation and recovery rules, and a local proposal-to-code prototype. Internal identifiers, parameters, code, and non-public metrics are excluded."
accent: "coral"
links:
  - label: "Paper"
    href: "https://arxiv.org/abs/2606.26859"
  - label: "PDF"
    href: "https://arxiv.org/pdf/2606.26859"
---

## Why it matters

Industrial recommendation iteration still relies heavily on engineers carrying a hypothesis through production code, online experimentation, and result attribution in sequence. As a result, innovation throughput tends to grow linearly with human effort, and knowledge from failed experiments is easily lost.

## System design

The team developed **AgentX** as a closed loop spanning Brainstorm, Developing, Evaluation, and Harness Evolution. Stable artifact contracts and state routing connect idea generation, implementation, safety-gated online evaluation, and the conversion of positive and negative execution traces into reusable knowledge and updated harness rules.

The workflow combines specialized agents, stateful file artifacts, guardrail-vetoed A/B evaluation, and Semantic Gradient Policy Optimization. Its goal is not merely to automate isolated steps, but to make the full experimental process parallel, verifiable, recoverable, and capable of improving from feedback.

## My contribution

I helped move real recommendation experiments from idea selection and proposal validation through development coordination, launch checks, and A/B result tracking. Based on execution failures, I strengthened hard parameter validation, independent review, explicit semantics for uncertain states, failure recovery, and cross-session state continuity.

I also built a local proposal-to-code prototype to investigate the boundaries between code generation, static pre-checks, and semantic validation. This description intentionally excludes internal experiment identifiers, repository and file paths, business parameters, implementation details, and non-public metrics.

## Reported system results

The technical report describes a three-week production deployment that generated **374 ideas** and launched **100 experiments**. Relative to the manual workflow, the system reports **13.8× launchable results per worker per week** and **3.7× app-time gain per worker per week**. These are AgentX team and system results, not individual results.

## Limitations and next steps

The evidence comes from a particular industrial recommendation environment and should not be generalized to every recommender system. Future directions include stronger cross-stage credit assignment, a reward ledger, reproducible offline replay, semantic safety validation, and low-risk post-training grounded in real execution feedback.
