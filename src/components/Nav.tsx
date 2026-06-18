import Link from 'next/link';
import { SITE } from '@/src/data/about';
import { GITHUB_URL, LINKEDIN_URL } from '@/src/data/links';
import { GitHubIcon, LinkedInIcon } from '@/src/components/Icons';

export function Nav() {
  const wordmark = SITE.name.split(' ')[0];
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/" className="nav-mark">
          {wordmark}
          <span className="dot">.</span>
        </Link>
        <div className="nav-social">
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GitHubIcon />
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </nav>
  );
}
