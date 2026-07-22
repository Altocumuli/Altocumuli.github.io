export type SocialIcon = 'email' | 'github' | 'scholar' | 'linkedin';

export interface SocialLink {
  label: string;
  href: string;
  icon: SocialIcon;
}

export interface ResearchInterest {
  index: string;
  title: string;
  description: string;
}

export interface Experience {
  organization: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  tags: string[];
}

export const siteConfig = {
  /**
   * Set this to true when making private content revisions. Draft mode adds a
   * noindex directive and shows a preview notice across the homepage.
   */
  isDraft: false,
  name: '杨憬晗',
  englishName: 'Altocumuli',
  publicationName: 'Jinghan Yang',
  initials: '杨',
  title: '杨憬晗 (Altocumuli) — Undergraduate Researcher at Tsinghua University',
  description:
    'Software Engineering undergraduate at Tsinghua University researching LLM agents, agentic reinforcement learning, and reliable agent systems.',
  institution: 'Tsinghua University',
  location: 'Beijing, China',
  eyebrow: 'Altocumuli · Software Engineering · Tsinghua University',
  headline: 'Building reliable agents for the real world.',
  introduction:
    'I am a third-year Software Engineering undergraduate at Tsinghua University. I study LLM agents, with a current focus on agentic reinforcement learning and harness design for long-horizon systems that operate reliably in the real world.',
  availability: 'Seeking research and industry internship opportunities.',
  email: 'yangjh22@mails.tsinghua.edu.cn',
  cv: '',
  profileImage: '',
  socials: [
    {
      label: 'Email',
      href: 'mailto:yangjh22@mails.tsinghua.edu.cn',
      icon: 'email',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/Altocumuli',
      icon: 'github',
    },
    {
      label: 'Google Scholar',
      href: 'https://scholar.google.com/citations?hl=en&user=epV1WhcAAAAJ',
      icon: 'scholar',
    },
  ] satisfies SocialLink[],
  interests: [
    {
      index: '01',
      title: 'LLM Agents',
      description:
        'Designing agents that can reason, use tools, preserve evidence, and complete long-horizon tasks beyond a single model response.',
    },
    {
      index: '02',
      title: 'Post-training & Agentic RL',
      description:
        'Studying data, exploration, policy optimization, and evaluation methods that turn tool-use trajectories into reliable learning signals.',
    },
    {
      index: '03',
      title: 'Diffusion Models',
      description:
        'Exploring diffusion-based generative modeling and the broader principles behind controllable, high-quality generation.',
    },
  ] satisfies ResearchInterest[],
  experience: [
    {
      organization: 'Kuaishou Technology',
      role: 'Large Language Model Algorithm Intern',
      period: 'Jun 2025 — Jul 2026',
      location: 'Beijing, China',
      summary:
        'Worked on algorithms and infrastructure for moving long-horizon agents from research prototypes into real systems, spanning deep research, agentic RL environments, multi-agent web search, and an agent harness for industrial recommendation experiments.',
      highlights: [
        'Designed and implemented an adaptive ContextManager for long-running research agents, and contributed to search, report delivery, tool-trajectory construction, and offline evaluation.',
        'Built parts of the data and training loop for wide web search, including structured data construction, trajectory filtering, long-context SFT, and error analysis; later contributed as a co-author of WebSwarm.',
        'Advanced real recommendation experiments through proposal, validation, development, launch checks, and A/B tracking while strengthening hard validation, independent review, failure recovery, and cross-session state handling.',
      ],
      tags: ['LLM Agents', 'Agentic RL', 'Multi-Agent Systems', 'Context Engineering', 'PyTorch', 'Agent Harness'],
    },
  ] satisfies Experience[],
  education: {
    school: 'Tsinghua University',
    degree: 'B.Eng. in Software Engineering',
    period: 'Aug 2022 — Jul 2027',
    details:
      'School of Software · Beijing, China',
  },
} as const;
