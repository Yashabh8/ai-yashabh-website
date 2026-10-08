# AI Yashabh — Practical AI. Simply Explained.

A premium AI technology blog built with React, Vite, TypeScript, and Tailwind CSS. Designed for AIYashabh.com covering AI tools, automation, business AI, productivity, guides, and comparisons.

## Tech Stack

- **React 18** + **TypeScript** + **Vite**
- **Tailwind CSS** with CSS variable design system
- **Lucide React** icons
- **Supabase** for database (articles, authors, categories, AI tools, newsletter)
- **WordPress theme** included for CMS migration

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Type check
npm run typecheck
```

## Environment Setup

Copy `.env.example` to `.env` and fill in your Supabase credentials:

```bash
cp .env.example .env
```

```
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

## Database Setup

The `supabase/schema.sql` file contains the complete database schema with:

- `authors` table
- `categories` table
- `articles` table (with JSONB content blocks)
- `ai_tools` table (with affiliate URL, pricing, rating)
- `newsletter_subscribers` table
- Row Level Security policies (public read, public newsletter signup)
- Seed data for categories, authors, and AI tools

**To set up the database:**

1. Go to your Supabase dashboard
2. Open the SQL Editor
3. Paste and run the contents of `supabase/schema.sql`

## Project Structure

```
ai-yashabh/
├── src/
│   ├── components/           # Header, Footer, cards, overlays
│   │   ├── home/             # Homepage sections (Hero, Trending, etc.)
│   │   └── article/          # Article page sections (TOC, sidebar, etc.)
│   ├── data/content.ts       # Mock content (replace with Supabase)
│   ├── hooks/useTheme.ts     # Theme hook (light/dark/system)
│   ├── lib/utils.ts          # Helper functions
│   ├── types/index.ts        # TypeScript types
│   ├── App.tsx               # Main app with hash routing
│   ├── main.tsx              # Entry point
│   └── index.css             # Design system + Tailwind
├── supabase/schema.sql       # Database schema + seed data
├── wordpress-theme/          # WordPress theme files
├── .github/workflows/        # CI/CD
├── .env.example
├── LICENSE
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── eslint.config.js
```

## Design System

- **Colors**: Off-white backgrounds, electric blue/indigo accent (#4338ca)
- **Typography**: Inter font family
- **Dark mode**: Full dark theme via `[data-theme="dark"]`
- **Animations**: fadeIn, fadeUp, float — all respect `prefers-reduced-motion`
- **Responsive**: Mobile-first, 320px to 1440px+

## WordPress Theme

A WordPress theme is included in `wordpress-theme/ai-yashabh/` with:

- Custom Post Type for AI Tools (affiliate URL, pricing, rating meta fields)
- Schema markup (Article, Organization, WebSite)
- Block editor support via `theme.json`
- Customizer options (accent color, newsletter text, social links)
- Reading progress bar, auto-generated TOC, scroll-spy
- Light/Dark/System theme toggle with no-flash preload

## Deployment

### Netlify / Vercel / Cloudflare Pages

1. Connect your GitHub repository
2. Build command: `npm run build`
3. Output directory: `dist`
4. Add environment variables: `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`

### GitHub Actions

CI workflow runs type checking and build on push to `main`. Add repository secrets:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

## License

MIT — see [LICENSE](LICENSE)
