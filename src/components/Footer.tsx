import { Linkedin, Twitter, Facebook, Youtube } from 'lucide-react';

export function Footer() {
  const exploreLinks = [
    { label: 'AI Tools', href: '#ai-tools' },
    { label: 'Automation', href: '#automation' },
    { label: 'Business AI', href: '#business' },
    { label: 'Guides', href: '#guides' },
    { label: 'Comparisons', href: '#comparisons' },
  ];

  const companyLinks = [
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
    { label: 'Advertise', href: '#advertise' },
    { label: 'Affiliate Disclosure', href: '#affiliate-disclosure' },
  ];

  const legalLinks = [
    { label: 'Privacy', href: '#privacy' },
    { label: 'Terms', href: '#terms' },
    { label: 'Cookies', href: '#cookies' },
  ];

  const socials = [
    { Icon: Linkedin, label: 'LinkedIn', href: '#linkedin' },
    { Icon: Twitter, label: 'X', href: '#x' },
    { Icon: Facebook, label: 'Facebook', href: '#facebook' },
    { Icon: Youtube, label: 'YouTube', href: '#youtube' },
  ];

  return (
    <footer className="mt-20 border-t" style={{ borderColor: 'var(--color-border)', background: 'var(--color-surface)' }}>
      <div className="container-wide py-14">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-1">
            <div className="font-extrabold text-xl tracking-tight mb-3" style={{ color: 'var(--color-text)' }}>
              AI<span style={{ color: 'var(--color-primary)' }}>Yashabh</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: 'var(--color-muted)' }}>
              Practical AI. Simply Explained.
            </p>
            <div className="flex gap-3 mt-5">
              {socials.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border transition-all hover:text-white"
                  style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-secondary)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--color-primary)';
                    e.currentTarget.style.borderColor = 'var(--color-primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.borderColor = 'var(--color-border)';
                  }}
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-4" style={{ color: 'var(--color-text)' }}>Explore</h3>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm transition-colors hover:text-primary" style={{ color: 'var(--color-muted)' }}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-4" style={{ color: 'var(--color-text)' }}>Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm transition-colors hover:text-primary" style={{ color: 'var(--color-muted)' }}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-4" style={{ color: 'var(--color-text)' }}>Follow</h3>
            <ul className="space-y-3">
              <li><a href="#linkedin" className="text-sm transition-colors hover:text-primary" style={{ color: 'var(--color-muted)' }}>LinkedIn</a></li>
              <li><a href="#x" className="text-sm transition-colors hover:text-primary" style={{ color: 'var(--color-muted)' }}>X</a></li>
              <li><a href="#facebook" className="text-sm transition-colors hover:text-primary" style={{ color: 'var(--color-muted)' }}>Facebook</a></li>
              <li><a href="#youtube" className="text-sm transition-colors hover:text-primary" style={{ color: 'var(--color-muted)' }}>YouTube</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-4" style={{ color: 'var(--color-text)' }}>Stay Ahead</h3>
            <p className="text-sm mb-3" style={{ color: 'var(--color-muted)' }}>One useful AI idea in your inbox.</p>
            <a href="#newsletter" className="btn btn-primary w-full" style={{ fontSize: '13px', padding: '9px 16px' }}>Subscribe</a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-12 pt-6 border-t" style={{ borderColor: 'var(--color-border)' }}>
          <p className="text-sm" style={{ color: 'var(--color-muted)' }}>
            &copy; {new Date().getFullYear()} AI Yashabh. All rights reserved.
          </p>
          <div className="flex gap-5">
            {legalLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-sm transition-colors hover:text-primary" style={{ color: 'var(--color-muted)' }}>{link.label}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
