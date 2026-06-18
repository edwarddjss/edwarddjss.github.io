// Single source of truth for identity + bio. Edit here, not in the components.

export const SITE = {
  name: 'Edward De Jesus',
  role: 'Software Engineer',
  url: 'https://edwarddjss.me',
  description:
    'Software engineer building developer tools, AI tooling, and the occasional thing for fun.',
} as const;

// About section. Each string is a paragraph.
export const BIO: readonly string[] = [
  'I think in products. At 13 I was importing goods from overseas and selling them on eBay and on storefronts I built myself, years before I could write a real line of code. The instinct stuck: find a gap, build the thing that fills it.',
  'A decade later that instinct runs on software. I pull ideas out of everyday friction, the small annoyances most people just live with, and turn them into tools people actually use. Developer utilities, AI-native apps, whatever the problem needs. I’d rather ship the thing than talk about building it.',
];
