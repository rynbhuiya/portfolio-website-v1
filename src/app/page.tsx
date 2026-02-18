import Link from "next/link";
import { SectionTitle } from "@/components/SectionTitle";
import { albums, projects } from "@/data/siteContent";

export default function Home() {
  return (
    <div className="space-y-14">
      <section className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-end">
        <div className="glass-panel space-y-5 p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">Hybrid Portfolio</p>
          <h1 className="font-serif text-4xl text-slate-50 sm:text-6xl">
            I design resilient software and frame human stories through photography.
          </h1>
          <p className="max-w-2xl text-lg text-slate-300">
            This site combines engineering case studies with curated photo series so collaborators can quickly understand both my technical depth and visual style.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/engineering" className="btn-primary">
              Explore Engineering
            </Link>
            <Link href="/photography" className="btn-secondary">
              Explore Photography
            </Link>
          </div>
        </div>

        <aside className="glass-panel space-y-5 p-6">
          <p className="text-sm uppercase tracking-[0.18em] text-amber-300">Quick Snapshot</p>
          <ul className="space-y-3 text-slate-200">
            <li>7+ years building production web products.</li>
            <li>Focused on product performance and reliability.</li>
            <li>Street, travel, and portrait photography.</li>
          </ul>
          <Link href="/contact" className="inline-block text-sm text-amber-200 underline-offset-4 hover:underline">
            Open to collaborations
          </Link>
        </aside>
      </section>

      <section className="space-y-6">
        <SectionTitle
          eyebrow="Featured Engineering"
          title="Recent work with measurable impact"
          intro="Use these cards as a starting point for your strongest technical stories."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <article key={project.name} className="glass-panel space-y-3 p-5">
              <h3 className="font-serif text-2xl text-slate-100">{project.name}</h3>
              <p className="text-slate-300">{project.description}</p>
              <p className="text-sm text-amber-200">{project.impact}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionTitle
          eyebrow="Featured Albums"
          title="Photography collections"
          intro="Curate the set that best matches your style and client goals."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {albums.map((album) => (
            <Link key={album.slug} href={`/photography/${album.slug}`} className="glass-panel group overflow-hidden">
              <img
                src={album.cover}
                alt={`${album.name} album cover`}
                className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="space-y-2 p-4">
                <h3 className="font-serif text-2xl text-slate-100">{album.name}</h3>
                <p className="text-sm text-slate-300">{album.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
