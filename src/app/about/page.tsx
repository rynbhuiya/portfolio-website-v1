import { SectionTitle } from "@/components/SectionTitle";

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <SectionTitle
        eyebrow="About"
        title="Engineer mindset, photographer eye"
        intro="Tell your story here: what you build, what you notice, and how both disciplines shape your work."
      />

      <section className="grid gap-4 lg:grid-cols-2">
        <article className="glass-panel space-y-3 p-6">
          <h2 className="font-serif text-3xl text-slate-50">Technical Focus</h2>
          <p className="text-slate-300">
            I focus on high-performance web applications, platform quality, and product systems that are easy for teams to evolve.
          </p>
          <p className="text-slate-300">
            Typical work includes architecture planning, frontend performance, reliability tooling, and mentoring through code reviews.
          </p>
        </article>

        <article className="glass-panel space-y-3 p-6">
          <h2 className="font-serif text-3xl text-slate-50">Photography Focus</h2>
          <p className="text-slate-300">
            My photography is centered on composition, natural light, and storytelling moments in both city and travel environments.
          </p>
          <p className="text-slate-300">
            I shoot digital and edit in a balanced documentary style with emphasis on texture and color continuity.
          </p>
        </article>
      </section>
    </div>
  );
}
