'use client';

import { useState } from 'react';
import { Mail, CheckCircle, Send } from 'lucide-react';

export default function NewsletterBlock({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // TODO: Integrate with newsletter API (Mailchimp, ConvertKit, etc.)
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className={`rounded-xl bg-[rgba(20,20,25,0.6)] backdrop-blur-[20px] border border-electric-cyan/20 ${compact ? 'p-4' : 'p-8'} text-center`}>
        <CheckCircle className="w-8 h-8 text-electric-cyan mx-auto mb-2" />
        <h3 className="font-pricedown text-lg text-electric-cyan mb-1">You&apos;re In!</h3>
        <p className="text-sm text-muted">Watch your inbox for the latest GTA 6 intel.</p>
      </div>
    );
  }

  return (
    <div className={`rounded-xl bg-[rgba(20,20,25,0.6)] backdrop-blur-[20px] border border-neon-pink/[0.08] hover:border-neon-pink/20 transition-all duration-300 ${compact ? 'p-4' : 'p-8'}`}>
      {!compact && (
        <>
          <div className="flex items-center gap-2 mb-3">
            <Mail className="w-5 h-5 text-neon-pink/60" />
            <h3 className="font-pricedown text-2xl text-ghost-white">
              Stay in the <span className="text-neon-pink">Loop</span>
            </h3>
          </div>
          <p className="text-sm text-muted mb-4 leading-relaxed">
            Get the latest GTA 6 news, map updates, and guide drops straight to your inbox.
          </p>
        </>
      )}
      <form onSubmit={handleSubmit} className={`flex ${compact ? 'gap-2' : 'flex-col sm:flex-row gap-3'}`}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="flex-1 px-4 py-2.5 rounded-lg bg-obsidian-mid/80 border border-white/[0.06] text-sm text-ghost-white placeholder-muted focus:outline-none focus:border-neon-pink/40 focus:shadow-[0_0_15px_rgba(255,0,255,0.1)] transition-all duration-200"
        />
        <button type="submit" className="hud-btn hud-btn-filled whitespace-nowrap inline-flex items-center gap-1.5">
          <Send className="w-3.5 h-3.5" />
          Subscribe
        </button>
      </form>
      {!compact && (
        <p className="text-[11px] text-muted mt-3">
          No spam, ever. Unsubscribe anytime.{' '}
          <a href="/newsletter/privacy" className="text-electric-cyan hover:underline">Privacy Policy</a>
        </p>
      )}
    </div>
  );
}
