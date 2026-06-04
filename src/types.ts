/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  categories: string[];
  year: string;
  features: string[];
  tags: string[];
  metrics?: { label: string; value: string }[];
  linkGithub?: string;
  linkLive?: string;
  isPremium?: boolean;
}

export interface TimelineItem {
  id: string;
  period: string;
  title: string;
  subtitle: string;
  description: string;
  type: 'academic' | 'professional';
  details: string[];
  tags: string[];
}

export interface SkillItem {
  name: string;
  level: number; // 0 to 100
}

export interface SkillGroup {
  category: string;
  iconName: string;
  skills: SkillItem[];
}

export interface CounterStat {
  id: string;
  targetNumber: number;
  suffix: string;
  label: string;
  subtitle: string;
}
