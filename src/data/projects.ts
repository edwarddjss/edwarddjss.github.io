export type Project = {
  name: string;
  description: string;
  href: string; // primary destination (live app / store / demo)
  tag: string; // product category / kind
  thumb: string; // path under /public
  fit?: 'cover' | 'contain' | 'logo' | 'banner'; // how the thumbnail sits in its frame; default cover
  repo?: string; // optional source repo, shown as a small GitHub icon
  stars?: number; // optional, shown as a subtle badge when >= 1
};

// Shipped work, in display order.
export const PROJECTS: readonly Project[] = [
  {
    name: 'Ketra',
    description:
      'Desktop drops miner for Twitch and Kick. Queue the drops you want, and Ketra watches eligible streams, tracks progress, and claims them the second they unlock.',
    href: 'https://ketra.app',
    tag: 'Desktop App',
    thumb: '/thumb/ketra.png',
  },
  {
    name: 'Tryouts',
    description:
      'Video-first creator casting for UGC teams, agencies, and founder-led brands. Post a brief, collect auditions, and review AI-ranked shortlists.',
    href: 'https://tryouts.com',
    tag: 'SaaS',
    thumb: '/thumb/tryouts.png',
  },
  {
    name: 'iowe',
    description:
      'Split any receipt. Snap a photo, tap your items, share a link, and everyone sees what they owe. No math required.',
    href: 'https://iowe.app',
    tag: 'Web App',
    thumb: '/thumb/iowe.png',
  },
  {
    name: 'OwlWatch',
    description:
      'FAU course-seat tracker with magic-link auth, instant email and push alerts, and a smart worker that watches seats around the clock.',
    href: 'https://owlwatch.app',
    tag: 'Next.js',
    thumb: '/thumb/owlwatch.png',
  },
  {
    name: 'Build-A-Bear Uploader',
    description:
      'Browser extension that unlocks custom audio uploads for Build-A-Bear’s online workshop.',
    href: 'https://chromewebstore.google.com/detail/build-a-bear-audio-upload/pbaglmieokjkagddhbbkpnoajncllagp',
    tag: 'Chrome Extension',
    thumb: '/thumb/buildabear.png',
    repo: 'https://github.com/edwarddjss/Build-A-Bear-Audio-Uploader-Extension',
  },
  {
    name: 'ExpoSnap',
    description:
      'MCP server that lets AI assistants view and analyze screenshots from React Native / Expo apps.',
    href: 'https://github.com/edwarddjss/ExpoSnap',
    tag: 'MCP Server',
    thumb: '/thumb/exposnap.png',
    fit: 'logo',
    stars: 15,
  },
];
