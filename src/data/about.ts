// Single source of truth for identity + bio. Edit here, not in the components.

export const SITE = {
  name: 'Edward De Jesus',
  role: 'Software Engineer',
  url: 'https://edwarddjss.me',
  description:
    'Software engineer building useful apps, developer tools, and AI-native products.',
} as const;

// About section. Each string is a paragraph.
export const BIO: readonly string[] = [
  'Software engineer building useful products across web apps, browser extensions, AI tooling, and developer utilities.',
  'I focus on shipping simple tools that solve real problems and feel good to use.',
];
