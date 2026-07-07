import type { Metadata } from 'next';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Frontier Heavy Equipment for pricing, availability, financing, and general inquiries.',
};

export default function ContactPage() {
  return (
    <div className="bg-background py-12">
      <div className="container-shell">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} />

        <div className="mb-10">
          <h1 className="font-oswald text-4xl uppercase tracking-wider text-text-primary md:text-5xl">
            Contact Us
          </h1>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-6">
            {[
              {
                icon: Phone,
                label: 'Phone',
                value: <a href="tel:14052938154">(405) 293-8154</a>,
              },
              {
                icon: Mail,
                label: 'Email',
                value: (
                  <a href="mailto:info@frontierheavyequipment.com">
                    info@frontierheavyequipment.com
                  </a>
                ),
              },
              {
                icon: MapPin,
                label: 'Address',
                value: <span>6151 E 0250 Rd, Ponca City, OK 74604</span>,
              },
              {
                icon: Clock,
                label: 'Hours',
                value: <span>Mon–Fri 8am–6pm | Sat 9am–3pm | Sun Closed</span>,
              },
            ].map((item) => (
              <div key={item.label} className="border border-[#333] bg-surface p-6">
                <div className="flex items-start gap-4">
                  <item.icon className="mt-1 text-accent" size={22} />
                  <div>
                    <div className="font-inter text-xs uppercase tracking-[0.2em] text-steel">
                      {item.label}
                    </div>
                    <div className="mt-2 font-oswald text-xl text-white">{item.value}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className="bg-accent px-6 py-4">
              <h2 className="font-oswald text-xl uppercase tracking-wider text-white">
                Send a Message
              </h2>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
