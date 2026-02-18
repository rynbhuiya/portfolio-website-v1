import Link from "next/link";
import { SectionTitle } from "@/components/SectionTitle";
import { experiences, projects } from "@/data/siteContent";

export default function EngineeringPage() {
  return (
    <div className="space-y-12">
      <SectionTitle
        eyebrow="Engineering"
        title="Experience, systems thinking, and product impact"
        intro="Replace this content with your real roles, outcomes, and links to repositories or case studies."
      />

      <section className="space-y-4">
        <h3 className="font-serif text-3xl text-slate-100">Work Experience</h3>
        <div className="space-y-4">
          {experiences.map((item) => (
            <article key={`${item.company}-${item.role}`} className="glass-panel space-y-3 p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="text-xl font-semibold text-slate-50">{item.role} · {item.company}</h4>
                <p className="text-sm uppercase tracking-[0.16em] text-amber-300">{item.period}</p>
              </div>
              <p className="text-slate-300">{item.summary}</p>
              <ul className="flex flex-wrap gap-2 text-xs text-slate-200">
                {item.stack.map((tech) => (
                  <li key={tech} className="pill">{tech}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-serif text-3xl text-slate-100">Selected Projects</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.name} className="glass-panel space-y-3 p-5">
              <h4 className="text-2xl font-semibold text-slate-50">{project.name}</h4>
              <p className="text-slate-300">{project.description}</p>
              <p className="text-sm text-amber-200">{project.impact}</p>
              <div className="flex flex-wrap gap-2 text-xs text-slate-200">
                {project.tech.map((tech) => (
                  <span key={tech} className="pill">{tech}</span>
                ))}
              </div>
              <Link href={project.link} className="inline-block text-sm text-amber-200 underline-offset-4 hover:underline">
                Add live link or repository
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
