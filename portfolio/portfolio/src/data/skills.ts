import type { Skill } from './types';

export const skills: Skill[] = [
  // Languages
  { name: 'JavaScript', category: 'languages', level: 4 },
  { name: 'Python', category: 'languages', level: 4 },
  { name: 'Java', category: 'languages', level: 3 },

  // Frontend
  { name: 'React.js', category: 'frontend', level: 4 },
  { name: 'HTML5', category: 'frontend', level: 4 },
  { name: 'CSS3', category: 'frontend', level: 4 },
  { name: 'Responsive Design', category: 'frontend', level: 4 },

  // Backend
  { name: 'Node.js', category: 'backend', level: 4 },
  { name: 'Express.js', category: 'backend', level: 4 },
  { name: 'Flask', category: 'backend', level: 3 },
  { name: 'FastAPI', category: 'backend', level: 4 },
  { name: 'REST APIs', category: 'backend', level: 4 },
  { name: 'JWT Authentication', category: 'backend', level: 4 },

  // Databases
  { name: 'MongoDB', category: 'database', level: 4 },
  { name: 'MySQL', category: 'database', level: 3 },
  { name: 'PostgreSQL', category: 'database', level: 3 },
  { name: 'PostGIS', category: 'database', level: 3 },

  // AI / ML
  { name: 'PyTorch', category: 'ai-ml', level: 3 },
  { name: 'Scikit-learn', category: 'ai-ml', level: 3 },
  { name: 'Computer Vision', category: 'ai-ml', level: 3 },
  { name: 'Image Processing', category: 'ai-ml', level: 3 },

  // Tools
  { name: 'Git', category: 'tools', level: 4 },
  { name: 'GitHub', category: 'tools', level: 4 },
  { name: 'Docker', category: 'tools', level: 3 },
  { name: 'Postman', category: 'tools', level: 4 },
  { name: 'VS Code', category: 'tools', level: 4 },
  { name: 'AWS (Basics)', category: 'tools', level: 2 },
];
