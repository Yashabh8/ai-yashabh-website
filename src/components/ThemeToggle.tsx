import { Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="inline-flex items-center gap-1 rounded-lg border p-0.5" style={{ borderColor: 'var(--color-border)' }}>
      <button
        onClick={() => setTheme('light')}
        aria-label="Light mode"
        aria-pressed={theme === 'light'}
        className="flex h-7 w-7 items-center justify-center rounded transition-colors"
        style={{
          background: theme === 'light' ? 'var(--color-primary)' : 'transparent',
          color: theme === 'light' ? '#fff' : 'var(--color-muted)',
        }}
      >
        <Sun size={15} />
      </button>
      <button
        onClick={() => setTheme('dark')}
        aria-label="Dark mode"
        aria-pressed={theme === 'dark'}
        className="flex h-7 w-7 items-center justify-center rounded transition-colors"
        style={{
          background: theme === 'dark' ? 'var(--color-primary)' : 'transparent',
          color: theme === 'dark' ? '#fff' : 'var(--color-muted)',
        }}
      >
        <Moon size={15} />
      </button>
      <button
        onClick={() => setTheme('system')}
        aria-label="System mode"
        aria-pressed={theme === 'system'}
        className="flex h-7 w-7 items-center justify-center rounded transition-colors"
        style={{
          background: theme === 'system' ? 'var(--color-primary)' : 'transparent',
          color: theme === 'system' ? '#fff' : 'var(--color-muted)',
        }}
      >
        <Monitor size={15} />
      </button>
    </div>
  );
}
