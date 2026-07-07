import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import SiteLogo from '@/components/SiteLogo';

export default function Footer() {
  return (
    <footer className="border-t border-[#2a2a2a] bg-[#0f0f0f]">
      <div className="container-shell grid gap-8 py-12 md:grid-cols-3">
        <div>
          <SiteLogo className="mb-4" />
          <p className="max-w-sm font-inter text-sm text-steel">
            Your trusted source for quality used agricultural machinery in the American West.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-oswald uppercase tracking-wider text-accent">
            Quick Links
          </h3>
          <div className="flex flex-col gap-3 font-inter text-sm text-steel">
            <Link href="/" className="transition-colors hover:text-accent">
              Home
            </Link>
            <Link href="/inventory" className="transition-colors hover:text-accent">
              Inventory
            </Link>
            <Link href="/about" className="transition-colors hover:text-accent">
              About
            </Link>
            <Link href="/contact" className="transition-colors hover:text-accent">
              Contact
            </Link>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-oswald uppercase tracking-wider text-accent">Contact</h3>
          <div className="space-y-3 font-inter text-sm text-steel">
            <div className="flex items-start gap-3">
              <Phone size={16} className="mt-0.5 text-accent" />
              <a href="tel:14052938154" className="transition-colors hover:text-accent">
                (405) 293-8154
              </a>
            </div>
            <div className="flex items-start gap-3">
              <Mail size={16} className="mt-0.5 text-accent" />
              <a
                href="mailto:info@frontierheavyequipment.com"
                className="transition-colors hover:text-accent"
              >
                info@frontierheavyequipment.com
              </a>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 text-accent" />
              <span>6151 E 0250 Rd, Ponca City, OK 74604</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#2a2a2a]">
        <div className="container-shell flex flex-col justify-between gap-2 py-4 text-sm text-steel md:flex-row">
          <span>© 2026 Frontier Heavy Equipment. All rights reserved.</span>
          <span>Ponca City, Oklahoma</span>
        </div>
      </div>
    </footer>
  );
}
