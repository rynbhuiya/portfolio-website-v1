export function SiteFooter() {
  const linkedinUrl = "https://www.linkedin.com/in/rynbhuiya/";
  const githubUrl = "https://github.com/rynbhuiya";

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
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
              <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-1 1.82-2.05 3.74-2.05 4 0 4.75 2.63 4.75 6.06V21h-4v-5.57c0-1.33-.03-3.04-1.86-3.04-1.86 0-2.14 1.45-2.14 2.95V21h-4V9Z" />
            </svg>
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="rounded-full border border-slate-600 p-2 text-slate-200 transition hover:border-amber-300 hover:text-amber-200"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
              <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.72-4.04-1.43-4.04-1.43-.55-1.38-1.34-1.75-1.34-1.75-1.1-.74.08-.73.08-.73 1.21.09 1.85 1.25 1.85 1.25 1.08 1.84 2.82 1.31 3.5 1 .11-.79.42-1.31.76-1.62-2.67-.3-5.48-1.33-5.48-5.9 0-1.3.47-2.37 1.24-3.2-.12-.3-.54-1.52.12-3.17 0 0 1.01-.33 3.3 1.22a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.22 3.29-1.22.66 1.65.24 2.87.12 3.17.77.83 1.24 1.9 1.24 3.2 0 4.58-2.81 5.6-5.49 5.9.43.38.82 1.1.82 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
