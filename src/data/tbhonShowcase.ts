import type { TbhonShowcase } from '@/types/portfolio'

export const tbhonShowcase: TbhonShowcase = {
  title: 'TBhon: IoT-Enabled Multimodal TB Pre-Screening and Triage Support System',
  shortTitle: 'TBhon',
  tagline: 'Staff-Operated TB Screening Support at the Edge',
  summary:
    'Mobile TB pre-screening for community health booths in Davao City—symptom checklists, cough audio, sputum imaging, and optional IoT capture, with staff review before triage results.',
  heroImage: '/tbhon/app-showcase.png',
  figmaEmbedUrl:
    'https://embed.figma.com/design/brPxvhfu0E5MfOvL9EyzN7/TBhon-System-Wireframes?embed-host=mika-portfolio&node-id=0-1&footer=false&page-selector=false&theme=dark&hide-ui=1',
  figmaLink:
    'https://www.figma.com/design/brPxvhfu0E5MfOvL9EyzN7/TBhon-System-Wireframes?node-id=0-1',
  apkUrl: 'https://expo.dev/artifacts/eas/rvjJ9hE--WdxgZTAWrAFM0ZhAs5B90ipiuV1QBAUEt0.apk',
  sourceUrl: 'https://github.com/Beanlon/Tbhon',
  background:
    'TB is a major health burden in the Philippines, yet many community health booths and barangay stations lack fast, structured pre-screening tools. Staff need guided workflows that work at the edge—not another black-box diagnosis app.',
  goal:
    'Guide booth staff through end-to-end TB pre-screening and triage—symptoms, cough audio, and sputum imaging fused into one risk score, with human review before any result reaches the client.',
  workflow: [
    'Client Intake',
    'Symptom Checklist',
    'Cough Audio',
    'Sputum Capture',
    'ML Fusion',
    'Staff Review',
    'Triage Result',
  ],
  stack: [
    { label: 'Mobile', items: ['Expo', 'React Native'] },
    { label: 'Backend', items: ['Node.js', 'Express', 'MySQL', 'Prisma'] },
    { label: 'ML', items: ['Python', 'FastAPI', 'PyTorch'] },
    { label: 'IoT', items: ['ESP32-S3', 'INMP441', 'OV5640'] },
  ],
  designProcess: [
    'Hierarchical task analysis',
    'Stakeholder interviews',
    'Storyboarding & Figma prototyping',
    'Nielsen heuristic evaluation',
    'User acceptance testing (n = 6)',
  ],
  metrics: [
    { label: 'UAT Satisfaction', value: '4.67/5' },
    { label: 'Innovision Awards', value: '3×' },
    { label: 'Data Modalities', value: '3' },
    { label: 'Risk Levels', value: 'Low · Mod · High' },
  ],
  disclaimer:
    'TBhon is triage support—not a medical diagnosis. Staff review is required before results are shown to clients.',
}
