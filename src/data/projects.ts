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
    name: 'iowe',
    description:
      'Split any receipt. Snap a photo, tap your items, share a link, and everyone sees what they owe. No math required.',
    href: 'https://iowe.app',
    tag: 'Web App',
    thumb: '/thumb/iowe.png',
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
    name: 'OwlWatch',
    description:
      'Tracks FAU course-seat availability and fires instant email and push alerts the moment a spot opens up.',
    href: 'https://owlwatch.app',
    tag: 'Next.js',
    thumb: '/thumb/owlwatch.png',
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
  {
    name: 'greenroom',
    description:
      'Self-hosted Windows app that streams your Spotify desktop audio straight into a Discord voice channel.',
    href: 'https://edwarddjss.github.io/greenroom/',
    tag: 'Desktop App',
    thumb: '/thumb/greenroom.png',
    fit: 'contain',
    repo: 'https://github.com/edwarddjss/greenroom',
  },
  {
    name: 'Headroom',
    description:
      'Live Claude Code and Codex usage in your VS Code / Cursor status bar, from privacy-first local bridge files.',
    href: 'https://marketplace.visualstudio.com/items?itemName=edwarddjss.headroom',
    tag: 'VS Code',
    thumb: '/thumb/headroom.png',
    fit: 'banner',
    repo: 'https://github.com/edwarddjss/claude-usage-bar',
  },
];
