import { notFound } from "next/navigation";
import { PhotoGrid } from "@/components/PhotoGrid";
import { albums, photos } from "@/data/siteContent";

type AlbumPageProps = {
  params: {
    album: string;
  };
};

export function generateStaticParams() {
  return albums.map((album) => ({ album: album.slug }));
}

export default function AlbumPage({ params }: AlbumPageProps) {
  const album = albums.find((entry) => entry.slug === params.album);

  if (!album) {
    notFound();
  }

  const albumPhotos = photos.filter((photo) => photo.album === album.slug);

  return (
    <div className="space-y-8">
      <div className="glass-panel space-y-3 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">Album</p>
        <h1 className="font-serif text-4xl text-slate-50">{album.name}</h1>
        <p className="text-slate-300">{album.description}</p>
      </div>
      <PhotoGrid photos={albumPhotos} />
    </div>
  );
}
