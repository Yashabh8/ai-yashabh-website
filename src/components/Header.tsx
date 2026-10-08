import { useEffect, useState } from 'react';
import { Search, Menu } from 'lucide-react';
import { navItems } from '@/data/content';
import { SearchOverlay } from './SearchOverlay';
import { MobileNav } from './MobileNav';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  onNavigate: (page: string) => void;
}

export function Header({ onNavigate }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleNav = (href: string) => {
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300"
        style={{
          background: scrolled ? 'color-mix(in srgb, var(--color-surface) 85%, transparent)' : 'var(--color-surface)',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
        }}
      >
        <div
          className="container-wide flex items-center justify-between transition-all duration-300"
          style={{ height: scrolled ? 'var(--header-height-compact)' : 'var(--header-height)' }}
        >
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNav('#home'); }}
            className="flex items-center gap-2 font-extrabold text-xl tracking-tight flex-shrink-0"
            style={{ color: 'var(--color-text)' }}
            aria-label="AI Yashabh home"
          >
            <span style={{ color: 'var(--color-text)' }}>AI</span>
            <span style={{ color: 'var(--color-primary)' }}>Yashabh</span>
          </a>

          <nav className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNav(item.href); }}
                className="nav-link"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:bg-surface-alt"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              <Search size={19} />
            </button>
            <a
              href="#newsletter"
              onClick={(e) => { e.preventDefault(); handleNav('#newsletter'); }}
              className="btn btn-primary hidden sm:inline-flex"
              style={{ fontSize: '13px', padding: '9px 18px' }}
            >
              Join 10K+ Readers
            </a>
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:bg-surface-alt md:hidden"
              style={{ color: 'var(--color-text)' }}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} onSearchClick={() => setSearchOpen(true)} />
    </>
  );
}
