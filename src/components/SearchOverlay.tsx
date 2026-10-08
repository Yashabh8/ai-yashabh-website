import { useEffect, useRef, useState } from 'react';
import { Search, X, TrendingUp, Clock } from 'lucide-react';
import { popularSearches, articles } from '@/data/content';

interface SearchOverlayProps {
  open: boolean;
  onClose: () => void;
}

export function SearchOverlay({ open, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [open]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, onClose]);

  if (!open) return null;

  const results = query
    ? articles.filter(
        (a) =>
          a.title.toLowerCase().includes(query.toLowerCase()) ||
          a.excerpt.toLowerCase().includes(query.toLowerCase()) ||
          a.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div
      className="fixed inset-0 z-[200] flex flex-col items-center animate-fade-in"
      style={{ background: 'color-mix(in srgb, var(--color-text) 50%, transparent)' }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl mt-20 mx-4 rounded-2xl shadow-2xl animate-fade-up"
        style={{ background: 'var(--color-surface)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-5 py-4 border-b" style={{ borderColor: 'var(--color-border)' }}>
          <Search size={22} style={{ color: 'var(--color-muted)' }} />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="What are you looking for?"
            className="flex-1 bg-transparent text-lg outline-none"
            style={{ color: 'var(--color-text)' }}
          />
          <button
            onClick={onClose}
            aria-label="Close search"
            className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors hover:opacity-70"
            style={{ background: 'var(--color-surface-alt)', color: 'var(--color-muted)' }}
          >
            <X size={18} />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-5">
          {!query && (
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-3" style={{ color: 'var(--color-muted)' }}>
                  <TrendingUp size={14} /> Popular Topics
                </div>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((term) => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="rounded-lg px-3 py-1.5 text-sm font-medium transition-colors hover:text-white"
                      style={{ background: 'var(--color-surface-alt)', color: 'var(--color-text-secondary)' }}
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-3" style={{ color: 'var(--color-muted)' }}>
                  <Clock size={14} /> Recent
                </div>
                <div className="space-y-1">
                  {articles.slice(0, 4).map((a) => (
                    <button
                      key={a.id}
                      onClick={() => setQuery(a.title.split(' ').slice(0, 3).join(' '))}
                      className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors hover:bg-surface-alt"
                    >
                      <span style={{ color: 'var(--color-text-secondary)' }}>{a.title}</span>
                      <span className="badge text-[10px]">{a.category}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {query && results.length === 0 && (
            <p className="text-center py-8" style={{ color: 'var(--color-muted)' }}>
              No results found for "{query}"
            </p>
          )}

          {query && results.length > 0 && (
            <div className="space-y-1">
              <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: 'var(--color-muted)' }}>
                {results.length} Result{results.length > 1 ? 's' : ''}
              </div>
              {results.map((a) => (
                <a
                  key={a.id}
                  href={`#article/${a.slug}`}
                  onClick={onClose}
                  className="flex w-full items-start gap-3 rounded-lg px-3 py-3 transition-colors hover:bg-surface-alt"
                >
                  <img src={a.image} alt={a.title} className="h-14 w-20 rounded object-cover flex-shrink-0" loading="lazy" />
                  <div className="min-w-0">
                    <div className="text-[11px] font-bold uppercase tracking-wide" style={{ color: 'var(--color-primary)' }}>{a.category}</div>
                    <div className="font-semibold text-sm leading-snug mt-0.5" style={{ color: 'var(--color-text)' }}>{a.title}</div>
                    <div className="text-xs mt-1" style={{ color: 'var(--color-muted)' }}>{a.readingTime} min read</div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
