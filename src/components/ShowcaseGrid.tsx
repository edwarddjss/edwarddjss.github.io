'use client';

import type { MouseEventHandler } from 'react';
import type { Project } from '@/src/data/projects';
import { GitHubIcon } from '@/src/components/Icons';

// Spotlight glow (ported from ReactBits SpotlightCard): track the cursor inside
// each tile via CSS vars so a soft accent highlight follows it.
const handleSpotlight: MouseEventHandler<HTMLElement> = (e) => {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
  el.style.setProperty('--my', `${e.clientY - rect.top}px`);
};

export function ShowcaseGrid({ projects }: { projects: readonly Project[] }) {
  return (
    <div className="showcase">
      {projects.map((p) => (
        <article key={p.name} className="tile" onMouseMove={handleSpotlight}>
          <span className="tile-spot" aria-hidden="true" />
          <a className="tile-link" href={p.href} target="_blank" rel="noreferrer" aria-label={`${p.name}, ${p.tag}`} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="tile-media" src={p.thumb} alt={`${p.name} preview`} data-fit={p.fit ?? 'cover'} loading="lazy" />
          <div className="tile-veil" />

          {p.repo ? (
            <a className="tile-repo" href={p.repo} target="_blank" rel="noreferrer" aria-label={`${p.name} source on GitHub`}>
              <GitHubIcon />
            </a>
          ) : null}
          {p.stars ? <span className="tile-star">★ {p.stars}</span> : null}

          <div className="tile-content">
            <div className="tile-cat">{p.tag}</div>
            <h3 className="tile-name">{p.name}</h3>
            <p className="tile-desc">{p.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
