import type { Project } from './types';

export const projects: Project[] = [
  {
    id: 'urbaneye',
    title: 'UrbanEye – AI Urban Encroachment Monitor',
    tagline: 'Geospatial AI system detecting urban encroachment from satellite imagery.',
    description:
      'A geospatial AI system that uses Sentinel-2 satellite imagery to detect urban change and encroachment over time. Combines remote-sensing vegetation/built-up indices with a FastAPI backend to generate risk levels and spatial analysis for a given area.',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'PostGIS', 'React.js'],
    role: 'Full-stack + AI developer',
    highlights: [
      'Processed Sentinel-2 satellite imagery for urban change detection',
      'Implemented NDVI and NDBI indices for land classification accuracy',
      'Built a FastAPI backend generating risk levels and spatial analysis',
      'Used PostgreSQL + PostGIS for efficient geospatial data handling',
    ],
    githubUrl: 'https://github.com/rahsharma6969',
    liveUrl: 'https://urbaneye-monitoring.vercel.app/',
    featured: true,
  },
  {
    id: 'realtime-messaging',
    title: 'Real-Time Messaging Platform',
    tagline: 'Slack-inspired messaging app with live multi-channel chat.',
    description:
      'A scalable, Slack-inspired messaging platform supporting real-time communication across multiple channels. Built with JWT-based authentication and optimized MongoDB queries to handle concurrent users smoothly.',
    stack: ['React.js', 'Node.js', 'Express.js', 'Socket.io', 'MongoDB', 'JWT'],
    role: 'Full-stack developer',
    highlights: [
      'Built a scalable messaging system with real-time communication via Socket.io',
      'Implemented JWT authentication and a multi-channel chat system',
      'Designed REST APIs and optimized MongoDB queries for performance',
    ],
    githubUrl: 'https://github.com/rahsharma6969',
    liveUrl: 'https://messaging-slack-frontend.vercel.app/',
    featured: true,
  },
  {
    id: 'image-forgery-detection',
    title: 'Image Forgery Detection – MantraNet',
    tagline: 'Deep learning system that detects and localizes image tampering.',
    description:
      'A deep learning-based system for detecting image tampering and forgery, generating heatmaps and confidence scores over manipulated regions. Served via a Flask inference API and integrated with a React frontend, supporting multiple image formats.',
    stack: ['Python', 'PyTorch', 'Flask', 'React.js'],
    role: 'AI + full-stack developer',
    highlights: [
      'Developed a deep learning model (MantraNet) for image tampering detection',
      'Generated heatmaps and confidence scores for manipulated regions',
      'Built a Flask API for inference, integrated with a React frontend',
      'Supported multiple formats: JPEG, PNG, TIFF, PDF',
    ],
    githubUrl: 'https://github.com/rahsharma6969',
    liveUrl: 'https://image-tampered-frontend.onrender.com',
    featured: true,
  },
];
