import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/shared/Breadcrumbs';

export const metadata: Metadata = generatePageMetadata({
  title: 'Privacy Policy',
  description: 'Privacy policy for The GTA Vault newsletter and website.',
  path: '/newsletter/privacy',
});

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
      <Breadcrumbs items={[{ label: 'Newsletter', href: '/newsletter' }, { label: 'Privacy Policy' }]} />

      <h1 className="font-pricedown text-3xl sm:text-4xl text-ghost-white tracking-wide mb-8">
        Privacy <span className="text-electric-cyan">Policy</span>
      </h1>

      <div className="space-y-6 text-ghost-white/80 leading-relaxed text-sm">
        <div className="glass rounded-xl p-6">
          <h2 className="font-semibold text-ghost-white text-base mb-2">Information We Collect</h2>
          <p>
            When you subscribe to our newsletter, we collect your email address. We do not collect
            any other personal information unless you voluntarily provide it through our contact form.
          </p>
        </div>

        <div className="glass rounded-xl p-6">
          <h2 className="font-semibold text-ghost-white text-base mb-2">How We Use Your Information</h2>
          <p>
            Your email address is used solely to send you GTA 6-related news, updates, and content
            from The GTA Vault. We will never sell, rent, or share your email address with third parties.
          </p>
        </div>

        <div className="glass rounded-xl p-6">
          <h2 className="font-semibold text-ghost-white text-base mb-2">Cookies & Analytics</h2>
          <p>
            We may use analytics tools to understand how visitors interact with our site. These tools
            may use cookies to collect anonymous usage data. No personally identifiable information is
            collected through analytics.
          </p>
        </div>

        <div className="glass rounded-xl p-6">
          <h2 className="font-semibold text-ghost-white text-base mb-2">Your Rights</h2>
          <p>
            You can unsubscribe from our newsletter at any time using the link in any email we send.
            You may also request deletion of your data by contacting us at contact@thegtavault.com.
          </p>
        </div>

        <div className="glass rounded-xl p-6">
          <h2 className="font-semibold text-ghost-white text-base mb-2">Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. Any changes will be posted on this page
            with an updated revision date.
          </p>
          <p className="text-muted mt-2">Last updated: May 2026</p>
        </div>
      </div>
    </div>
  );
}
