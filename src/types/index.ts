import { IconType } from 'react-icons';

export interface Project {
  id: string;
  title: string;
  titleVi?: string;
  category: string;
  role: string;
  roleVi?: string;
  timeline: string;
  timelineVi?: string;
  summary: string;
  summaryVi?: string;
  highlights: string[];
  highlightsVi?: string[];
  techStack: string[];
  liveUrl?: string;
  urlLabel?: string;
  secondaryUrl?: {
    url: string;
    label: string;
  };
  architectureDetails?: {
    problem: string;
    problemVi?: string;
    solution: string;
    solutionVi?: string;
    engineeringWin: string;
    engineeringWinVi?: string;
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
