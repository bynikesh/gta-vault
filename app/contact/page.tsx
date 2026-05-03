import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import { getSiteConfig } from '@/lib/data';

export const metadata: Metadata = generatePageMetadata({
  title: 'Contact Us',
  description: 'Get in touch with The GTA Vault team. Send us tips, feedback, or partnership inquiries.',
  path: '/contact',
});

export default function ContactPage() {
  const config = getSiteConfig();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
      <Breadcrumbs items={[{ label: 'Contact' }]} />

      <h1 className="font-pricedown text-3xl sm:text-4xl text-ghost-white tracking-wide mb-6">
        Contact <span className="text-electric-cyan">Us</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass rounded-xl p-6">
          <h2 className="font-pricedown text-xl text-neon-pink mb-4">Send a Message</h2>
          <p className="text-sm text-muted mb-4">
            Have a tip, feedback, or want to collaborate? Reach out to us.
          </p>
          <a
            href={`mailto:${config.contactEmail}`}
            className="hud-btn hud-btn-filled inline-block"
            id="contact-email-btn"
          >
            ✉ Email Us
          </a>
          <p className="text-xs text-muted mt-3">{config.contactEmail}</p>
        </div>

        <div className="glass rounded-xl p-6">
          <h2 className="font-pricedown text-xl text-electric-cyan mb-4">Follow Us</h2>
          <p className="text-sm text-muted mb-4">
            Stay connected on social media for the latest updates.
          </p>
          <div className="space-y-2">
            {Object.entries(config.socialLinks).map(([platform, url]) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-ghost-white hover:text-neon-pink transition-colors capitalize"
              >
                → {platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
