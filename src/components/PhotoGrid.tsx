"use client";

import { useMemo, useState } from "react";
import type { PhotoItem } from "@/data/siteContent";

type PhotoGridProps = {
  photos: PhotoItem[];
};

export function PhotoGrid({ photos }: PhotoGridProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedPhoto = useMemo(
    () => photos.find((photo) => photo.id === selectedId) ?? null,
    [photos, selectedId]
  );

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((photo) => (
          <button
            key={photo.id}
            type="button"
            onClick={() => setSelectedId(photo.id)}
            className="glass-panel group overflow-hidden text-left"
          >
            <img
              src={photo.src}
              alt={photo.title}
              className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="space-y-1 px-4 py-3">
              <p className="font-medium text-slate-100">{photo.title}</p>
              <p className="text-sm text-slate-400">{photo.location}</p>
            </div>
          </button>
        ))}
      </div>

      {selectedPhoto ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <button
            type="button"
            className="absolute right-4 top-4 rounded-full border border-slate-600 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-200"
            onClick={() => setSelectedId(null)}
          >
            Close
          </button>
          <figure className="max-h-[92vh] max-w-4xl overflow-hidden rounded-2xl border border-slate-700 bg-slate-900">
            <img src={selectedPhoto.src} alt={selectedPhoto.title} className="max-h-[80vh] w-full object-cover" />
            <figcaption className="px-5 py-4 text-sm text-slate-200">
              {selectedPhoto.title} · {selectedPhoto.location}
            </figcaption>
          </figure>
        </div>
      ) : null}
    </>
  );
}
