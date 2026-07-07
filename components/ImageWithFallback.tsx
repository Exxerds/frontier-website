'use client';

import Image from 'next/image';
import { useState } from 'react';
import clsx from 'clsx';

type ImageWithFallbackProps = {
  src?: string;
  alt: string;
  sizes?: string;
  className?: string;
  priority?: boolean;
  placeholderText?: string;
};

export default function ImageWithFallback({
  src,
  alt,
  sizes,
  className,
  priority,
  placeholderText = 'Photo Coming Soon',
}: ImageWithFallbackProps) {
  const [failed, setFailed] = useState(!src);

  if (!src || failed) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-[#2a2a2a] px-4 text-center font-inter text-sm text-steel">
        {placeholderText}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      unoptimized
      className={clsx('object-cover', className)}
      onError={() => setFailed(true)}
    />
  );
}
