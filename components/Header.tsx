'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { Menu, Phone, X } from 'lucide-react';
import SiteLogo from '@/components/SiteLogo';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Inventory', href: '/inventory' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }

    return pathname.startsWith(href);
  };

  return (
    <header className="relative z-50 border-b border-[#2a2a2a] bg-[#1a1a1a]">
      <div className="container-shell">
        <div className="flex items-center justify-between py-3">
          <SiteLogo />

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  'font-inter text-sm uppercase tracking-wider transition-colors hover:text-accent',
                  isActive(item.href) ? 'text-accent' : 'text-text-primary',
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <Phone size={16} className="text-accent" />
            <a
              href="tel:14052938154"
              className="font-oswald text-accent transition-colors hover:text-amber-500"
            >
              (405) 293-8154
            </a>
          </div>

          <button
            type="button"
            className="text-white md:hidden"
            aria-label="Toggle menu"
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="border-b border-[#333] bg-[#1a1a1a] md:hidden">
          <div className="container-shell flex flex-col py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={clsx(
                  'border-b border-[#2a2a2a] py-3 font-inter text-sm uppercase tracking-wider transition-colors last:border-b-0 hover:text-accent',
                  isActive(item.href) ? 'text-accent' : 'text-text-primary',
                )}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:14052938154"
              className="mt-4 inline-flex items-center gap-2 font-oswald text-accent"
            >
              <Phone size={16} />
              (405) 293-8154
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
