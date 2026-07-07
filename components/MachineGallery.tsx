'use client';

import { useMemo, useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import ImageWithFallback from '@/components/ImageWithFallback';

type MachineGalleryProps = {
  images: string[];
  title: string;
};

export default function MachineGallery({ images, title }: MachineGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const slides = useMemo(() => images.map((src) => ({ src })), [images]);
  const hasImages = images.length > 0;
  const currentImage = images[currentIndex];

  return (
    <div>
      <div
        className="group relative aspect-video bg-[#2a2a2a]"
        onClick={() => hasImages && setLightboxOpen(true)}
      >
        {hasImages ? (
          <>
            <ImageWithFallback
              src={currentImage}
              alt={title}
              sizes="(max-width: 1024px) 100vw, 66vw"
              priority
            />
            <span className="absolute right-3 top-3 bg-black/60 px-2 py-1 text-xs text-white">
              {currentIndex + 1} / {images.length}
            </span>
            <span className="absolute bottom-3 right-3 bg-black/60 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
              Click to expand
            </span>
          </>
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[#2a2a2a] px-4 text-center font-inter text-sm text-steel">
            Photo Coming Soon
          </div>
        )}
      </div>

      {hasImages ? (
        <div className="mt-2 flex gap-2 overflow-x-auto pb-2">
          {images.map((src, index) => (
            <button
              key={`${src}-${index}`}
              type="button"
              onClick={() => setCurrentIndex(index)}
              className={`relative h-16 w-20 flex-shrink-0 overflow-hidden transition-all ${
                index === currentIndex
                  ? 'ring-2 ring-accent'
                  : 'opacity-60 hover:opacity-100'
              }`}
            >
              <ImageWithFallback
                src={src}
                alt={`${title} photo ${index + 1}`}
                sizes="80px"
              />
            </button>
          ))}
        </div>
      ) : null}

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slides}
        index={currentIndex}
        on={{ view: ({ index }) => setCurrentIndex(index) }}
      />
    </div>
  );
}
