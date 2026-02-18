import Link from "next/link";
import { PhotoGrid } from "@/components/PhotoGrid";
import { SectionTitle } from "@/components/SectionTitle";
import { albums, photos } from "@/data/siteContent";

export default function PhotographyPage() {
  return (
    <div className="space-y-12">
      <SectionTitle
        eyebrow="Photography"
        title="Gallery and album collection"
        intro="Swap these placeholders with your real exported images or Cloudinary links when ready."
      />

      <section className="grid gap-4 md:grid-cols-3">
        {albums.map((album) => (
          <Link key={album.slug} href={`/photography/${album.slug}`} className="glass-panel group overflow-hidden">
            <img src={album.cover} alt={album.name} className="h-44 w-full object-cover transition duration-500 group-hover:scale-105" />
            <div className="space-y-1 p-4">
              <h3 className="font-serif text-2xl text-slate-100">{album.name}</h3>
              <p className="text-sm text-slate-300">{album.description}</p>
            </div>
          </Link>
        ))}
      </section>

      <section className="space-y-4">
        <h3 className="font-serif text-3xl text-slate-100">All Photos</h3>
        <PhotoGrid photos={photos} />
      </section>
    </div>
  );
}
