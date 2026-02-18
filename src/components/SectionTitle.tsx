type SectionTitleProps = {
  eyebrow: string;
  title: string;
  intro: string;
};

export function SectionTitle({ eyebrow, title, intro }: SectionTitleProps) {
  return (
    <div className="max-w-2xl space-y-3">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">{eyebrow}</p>
      <h2 className="font-serif text-3xl text-slate-50 sm:text-4xl">{title}</h2>
      <p className="text-slate-300">{intro}</p>
    </div>
  );
}
