// Single source of truth for identity + bio. Edit here, not in the components.

export const SITE = {
  name: 'Edward De Jesus',
  role: 'Software Engineer',
  url: 'https://edwarddjss.me',
  description:
    'Software engineer building web apps, browser extensions, and AI-powered tools.',
} as const;

// About section. Each string is a paragraph.
export const BIO: readonly string[] = [
  'I build and ship practical software: web apps, browser extensions, automation, and AI-powered tools.',
  'Most of my work starts with a small annoying problem and ends as a product people can actually use.',
];
