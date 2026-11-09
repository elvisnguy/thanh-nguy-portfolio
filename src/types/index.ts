import { IconType } from 'react-icons';

export interface Project {
  id: string;
  title: string;
  category: string;
  role: string;
  timeline: string;
  summary: string;
  highlights: string[];
  techStack: string[];
  liveUrl?: string;
  urlLabel?: string;
  architectureDetails?: {
    problem: string;
    solution: string;
    engineeringWin: string;
  };
}

export interface Skill {
  name: string;
  icon?: IconType;
  color?: string;
}

export interface SkillGroup {
  name: string;
  skills: Skill[];
}

export interface TechMeta {
  icon: IconType;
  color: string;
}
