import { Clock, ArrowRight } from 'lucide-react';
import type { Article } from '@/types';
import { formatDate } from '@/lib/utils';

interface ArticleCardProps {
  article: Article;
  onClick?: (slug: string) => void;
  compact?: boolean;
}

export function ArticleCard({ article, onClick, compact }: ArticleCardProps) {
  return (
    <article
      className="article-card cursor-pointer"
      onClick={() => onClick?.(article.slug)}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter') onClick?.(article.slug); }}
    >
      <div className="card-img">
        <img src={article.image} alt={article.title} loading="lazy" />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-3 mb-3">
          <span className="badge text-[10px]">{article.category}</span>
        </div>
        <h3 className="card-title mb-2 line-clamp-2">{article.title}</h3>
        {!compact && <p className="text-sm leading-relaxed line-clamp-2 mb-4" style={{ color: 'var(--color-muted)' }}>{article.excerpt}</p>}
        <div className="flex items-center justify-between gap-2 mt-3">
          <div className="flex items-center gap-2 min-w-0">
            <img src={article.author.avatar} alt={article.author.name} className="h-7 w-7 rounded-full object-cover flex-shrink-0" loading="lazy" />
            <span className="text-xs font-medium truncate" style={{ color: 'var(--color-text-secondary)' }}>{article.author.name}</span>
          </div>
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <Clock size={13} style={{ color: 'var(--color-muted)' }} />
            <span className="text-xs" style={{ color: 'var(--color-muted)' }}>{article.readingTime} min</span>
          </div>
        </div>
        {!compact && (
          <div className="text-xs mt-2" style={{ color: 'var(--color-muted)' }}>{formatDate(article.publishedDate)}</div>
        )}
      </div>
    </article>
  );
}

export function ArticleCardHorizontal({ article, onClick }: { article: Article; onClick?: (slug: string) => void }) {
  return (
    <article
      className="article-card flex gap-4 cursor-pointer p-3"
      onClick={() => onClick?.(article.slug)}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter') onClick?.(article.slug); }}
    >
      <div className="w-24 h-16 rounded-lg overflow-hidden flex-shrink-0">
        <img src={article.image} alt={article.title} className="w-full h-full object-cover" loading="lazy" />
      </div>
      <div className="min-w-0 flex-1">
        <span className="badge text-[9px] mb-1.5">{article.category}</span>
        <h4 className="font-semibold text-sm leading-snug line-clamp-2 card-title">{article.title}</h4>
        <div className="flex items-center gap-1.5 mt-1.5">
          <Clock size={12} style={{ color: 'var(--color-muted)' }} />
          <span className="text-xs" style={{ color: 'var(--color-muted)' }}>{article.readingTime} min read</span>
        </div>
      </div>
    </article>
  );
}

export function ArticleCardLarge({ article, onClick }: { article: Article; onClick?: (slug: string) => void }) {
  return (
    <article
      className="article-card cursor-pointer flex flex-col md:flex-row"
      onClick={() => onClick?.(article.slug)}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter') onClick?.(article.slug); }}
    >
      <div className="md:w-1/2 card-img" style={{ aspectRatio: '16 / 9' }}>
        <img src={article.image} alt={article.title} loading="lazy" />
      </div>
      <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
        <span className="badge mb-4 self-start">{article.category}</span>
        <h2 className="text-2xl md:text-3xl font-extrabold leading-tight mb-3 card-title">{article.title}</h2>
        <p className="text-base leading-relaxed mb-5 line-clamp-3" style={{ color: 'var(--color-text-secondary)' }}>{article.excerpt}</p>
        <div className="flex items-center gap-3">
          <img src={article.author.avatar} alt={article.author.name} className="h-9 w-9 rounded-full object-cover" loading="lazy" />
          <div>
            <div className="text-sm font-semibold" style={{ color: 'var(--color-text)' }}>{article.author.name}</div>
            <div className="text-xs" style={{ color: 'var(--color-muted)' }}>
              {formatDate(article.publishedDate)} &middot; {article.readingTime} min read
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export function FeaturedArticleEditor({ article, onClick }: { article: Article; onClick?: (slug: string) => void }) {
  return (
    <article
      className="relative overflow-hidden rounded-2xl cursor-pointer"
      style={{
        background: 'linear-gradient(135deg, var(--color-surface) 0%, var(--color-surface-alt) 100%)',
        border: '1px solid var(--color-border)',
      }}
      onClick={() => onClick?.(article.slug)}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter') onClick?.(article.slug); }}
    >
      <div className="grid md:grid-cols-2 gap-0">
        <div className="overflow-hidden" style={{ aspectRatio: '4 / 3' }}>
          <img src={article.image} alt={article.title} className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="p-8 md:p-10 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge" style={{ background: 'var(--color-primary)', color: '#fff', borderColor: 'var(--color-primary)' }}>
              Editor's Pick
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold leading-tight mb-4">{article.title}</h2>
          <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: 'var(--color-text-secondary)' }}>{article.excerpt}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={article.author.avatar} alt={article.author.name} className="h-9 w-9 rounded-full object-cover" loading="lazy" />
              <div>
                <div className="text-sm font-semibold">{article.author.name}</div>
                <div className="text-xs" style={{ color: 'var(--color-muted)' }}>{formatDate(article.publishedDate)}</div>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 text-sm font-bold transition-colors" style={{ color: 'var(--color-primary)' }}>
              Read Article <ArrowRight size={16} />
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
