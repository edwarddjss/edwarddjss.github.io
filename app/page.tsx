import { Avatar } from '@/src/components/Avatar';
import { ShowcaseGrid } from '@/src/components/ShowcaseGrid';
import { PROJECTS } from '@/src/data/projects';
import { SITE, BIO } from '@/src/data/about';

export default function Home() {
  const monogram = SITE.name.slice(0, 1).toUpperCase();

  return (
    <main className="shell">
      <section className="hero">
        <h1 className="hero-name reveal reveal-1">{SITE.name}</h1>
        <div className="hero-row">
          <div className="hero-bio prose reveal reveal-1">
            {BIO.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <div className="hero-portrait reveal reveal-2">
            <Avatar monogram={monogram} />
          </div>
        </div>
      </section>

      <section className="section" id="work">
        <div className="sec-head">
          <h2>Projects</h2>
          <span className="sec-count">{PROJECTS.length} shipped</span>
        </div>
        <ShowcaseGrid projects={PROJECTS} />
      </section>
    </main>
  );
}
