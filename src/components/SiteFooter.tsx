export function SiteFooter() {
  const linkedinUrl = "https://www.linkedin.com/in/rynbhuiya/";
  const githubUrl = "https://github.com/rynbhuiya";
  const instagramUrl = "https://www.instagram.com/rairairays/";

  return (
    <footer className="site-shell pb-10 pt-4">
      <div className="glass-panel flex flex-wrap items-center justify-between gap-3 px-5 py-4 text-sm text-slate-300">
        <p>RB</p>
        <div className="flex items-center gap-3">
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="rounded-full border border-slate-600 p-2 text-slate-200 transition hover:border-amber-300 hover:text-amber-200"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="3" width="18" height="18" rx="4" />
              <line x1="8" y1="11" x2="8" y2="16" />
              <circle cx="8" cy="8" r="0.8" />
              <line x1="12" y1="11" x2="12" y2="16" />
              <path d="M12 13c0-1.1.9-2 2-2s2 .9 2 2v3" />
            </svg>
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="rounded-full border border-slate-600 p-2 text-slate-200 transition hover:border-amber-300 hover:text-amber-200"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3" />
              <path d="M16 22v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </a>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram profile"
            className="rounded-full border border-slate-600 p-2 text-slate-200 transition hover:border-amber-300 hover:text-amber-200"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
