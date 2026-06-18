import { GitHubIcon, LinkedInIcon } from '@/src/components/Icons';
import { GITHUB_URL, LINKEDIN_URL, EMAIL } from '@/src/data/links';
import { SITE } from '@/src/data/about';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <a className="footer-icon" href={GITHUB_URL} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GitHubIcon size={18} />
          </a>
          <a className="footer-icon" href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedInIcon size={18} />
          </a>
          <a className="footer-email" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </div>
        <p className="footer-note">
          © {new Date().getFullYear()} {SITE.name}
        </p>
      </div>
    </footer>
  );
}
