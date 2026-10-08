import { X, Search } from 'lucide-react';
import { navItems } from '@/data/content';
import { ThemeToggle } from './ThemeToggle';

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
  onSearchClick: () => void;
}

export function MobileNav({ open, onClose, onSearchClick }: MobileNavProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[200] md:hidden">
      <div
        className="absolute inset-0 animate-fade-in"
        style={{ background: 'color-mix(in srgb, var(--color-text) 50%, transparent)' }}
        onClick={onClose}
      />
      <div
        className="absolute right-0 top-0 h-full w-[300px] max-w-[85vw] flex flex-col animate-fade-up"
        style={{ background: 'var(--color-surface)', boxShadow: 'var(--shadow-lg)' }}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b" style={{ borderColor: 'var(--color-border)' }}>
          <span className="font-extrabold text-lg tracking-tight" style={{ color: 'var(--color-text)' }}>
            AI<span style={{ color: 'var(--color-primary)' }}>Yashabh</span>
          </span>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:bg-surface-alt"
            style={{ color: 'var(--color-text)' }}
          >
            <X size={22} />
          </button>
        </div>

        <nav className="flex flex-col px-3 py-4 gap-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={onClose}
              className="rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-surface-alt"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mt-auto px-5 py-5 border-t space-y-4" style={{ borderColor: 'var(--color-border)' }}>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium" style={{ color: 'var(--color-muted)' }}>Theme</span>
            <ThemeToggle />
          </div>
          <button
            onClick={() => { onSearchClick(); onClose(); }}
            className="flex w-full items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-medium border"
            style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-secondary)' }}
          >
            <Search size={16} /> Search
          </button>
          <a href="#newsletter" onClick={onClose} className="btn btn-primary w-full">Join 10K+ Readers</a>
        </div>
      </div>
    </div>
  );
}
