import { Star, ArrowRight, type LucideIcon } from 'lucide-react';
import * as Icons from 'lucide-react';
import type { AITool } from '@/types';

interface ToolCardProps {
  tool: AITool;
}

export function ToolCard({ tool }: ToolCardProps) {
  const IconComponent = (Icons as unknown as Record<string, LucideIcon>)[tool.icon] || Icons.Sparkles;

  return (
    <div
      className="card p-5 flex flex-col h-full"
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-primary)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--color-border)'; }}
    >
      <div className="flex items-start gap-3 mb-3">
        <div className="icon-box" style={{ width: 44, height: 44 }}>
          <IconComponent size={22} />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-bold text-base leading-tight">{tool.name}</h3>
          <span className="text-xs font-medium" style={{ color: 'var(--color-muted)' }}>{tool.category}</span>
        </div>
      </div>

      <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: 'var(--color-text-secondary)' }}>{tool.description}</p>

      <div className="flex items-center justify-between gap-2 mb-3 pb-3 border-b" style={{ borderColor: 'var(--color-border)' }}>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={14}
              style={{
                color: star <= Math.round(tool.rating) ? 'var(--color-warning)' : 'var(--color-border-strong)',
                fill: star <= Math.round(tool.rating) ? 'var(--color-warning)' : 'transparent',
              }}
            />
          ))}
          <span className="text-xs font-semibold ml-1" style={{ color: 'var(--color-text-secondary)' }}>{tool.rating}</span>
        </div>
        <span
          className="text-xs font-bold px-2.5 py-1 rounded"
          style={{
            background: tool.pricing === 'Free' ? 'color-mix(in srgb, var(--color-success) 12%, transparent)' : 'var(--color-surface-alt)',
            color: tool.pricing === 'Free' ? 'var(--color-success)' : 'var(--color-text-secondary)',
          }}
        >
          {tool.pricing}
        </span>
      </div>

      <a
        href={tool.url}
        target="_blank"
        rel="noopener sponsored"
        className="inline-flex items-center gap-1.5 text-sm font-bold transition-colors hover:gap-2.5"
        style={{ color: 'var(--color-primary)', transition: 'all 200ms ease' }}
      >
        View Tool <ArrowRight size={15} />
      </a>
    </div>
  );
}

interface RecommendedToolBoxProps {
  tool: AITool;
}

export function RecommendedToolBox({ tool }: RecommendedToolBoxProps) {
  const IconComponent = (Icons as unknown as Record<string, LucideIcon>)[tool.icon] || Icons.Sparkles;

  return (
    <div
      className="rounded-xl p-6 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, var(--color-surface) 0%, var(--color-surface-alt) 100%)',
        border: '1px solid var(--color-border)',
      }}
    >
      <div className="absolute top-0 right-0 w-32 h-32 ai-glow pointer-events-none" />
      <div className="flex items-center gap-2 mb-4">
        <span className="badge" style={{ background: 'var(--color-primary)', color: '#fff', borderColor: 'var(--color-primary)' }}>
          Our Pick
        </span>
      </div>

      <div className="flex items-center gap-3 mb-4">
        <div className="icon-box" style={{ width: 52, height: 52 }}>
          <IconComponent size={26} />
        </div>
        <div>
          <h3 className="font-extrabold text-lg">{tool.name}</h3>
          {tool.bestFor && <p className="text-xs font-medium" style={{ color: 'var(--color-muted)' }}>Best for: {tool.bestFor}</p>}
        </div>
      </div>

      <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-secondary)' }}>{tool.description}</p>

      <div className="flex items-center justify-between gap-3 mb-4 pb-4 border-b" style={{ borderColor: 'var(--color-border)' }}>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={16}
              style={{
                color: star <= Math.round(tool.rating) ? 'var(--color-warning)' : 'var(--color-border-strong)',
                fill: star <= Math.round(tool.rating) ? 'var(--color-warning)' : 'transparent',
              }}
            />
          ))}
        </div>
        <span className="text-sm font-bold" style={{ color: 'var(--color-text-secondary)' }}>{tool.pricing}</span>
      </div>

      <a
        href={tool.url}
        target="_blank"
        rel="noopener sponsored"
        className="btn btn-primary w-full"
      >
        Try Tool <ArrowRight size={16} />
      </a>
    </div>
  );
}
