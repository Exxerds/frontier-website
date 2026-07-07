'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import clsx from 'clsx';

type SiteLogoProps = {
  className?: string;
  textClassName?: string;
};

export default function SiteLogo({ className, textClassName }: SiteLogoProps) {
  const [failed, setFailed] = useState(false);

  return (
    <Link href="/" className={clsx('inline-flex items-center', className)}>
      {failed ? (
        <span
          className={clsx(
            'font-oswald text-xl uppercase tracking-wider text-white',
            textClassName,
          )}
        >
          FRONTIER <span className="text-accent">HEAVY EQUIPMENT</span>
        </span>
      ) : (
        <Image
          src="/logo.png"
          width={280}
          height={84}
          alt="Frontier Heavy Equipment"
          priority
          className="h-20 w-auto object-contain"
          onError={() => setFailed(true)}
        />
      )}
    </Link>
  );
}