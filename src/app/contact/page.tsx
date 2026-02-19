export default function ContactPage() {
  return (
    <div className="space-y-8">
      <section className="glass-panel space-y-4 p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">Contact</p>
        <h1 className="font-serif text-4xl text-slate-50 sm:text-5xl">Let&apos;s build or shoot together</h1>
        <p className="max-w-xl text-slate-300">
          Feel free to reach out to me and we can collaborate!
        </p>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <article className="glass-panel space-y-2 p-6 text-slate-200">
          <p className="text-sm uppercase tracking-[0.16em] text-amber-300">Direct</p>
          <a href="mailto:rynbhuiya@gmail.com" className="text-lg underline-offset-4 hover:underline">
            rynbhuiya@gmail.com
          </a>
          <p>LinkedIn: linkedin.com/in/rynbhuiya</p>
          <p>GitHub: github.com/rynbhuiya</p>
          <p>Instagram: instagram.com/rairairays</p>
        </article>

        <form className="glass-panel grid gap-3 p-6">
          <label className="grid gap-1 text-sm text-slate-200">
            Name
            <input className="input" type="text" placeholder="Your name" />
          </label>
          <label className="grid gap-1 text-sm text-slate-200">
            Email
            <input className="input" type="email" placeholder="you@company.com" />
          </label>
          <label className="grid gap-1 text-sm text-slate-200">
            Message
            <textarea className="input min-h-28" placeholder="Tell me about your project." />
          </label>
          <button type="button" className="btn-primary w-fit">
            Connect
          </button>
        </form>
      </section>
    </div>
  );
}
