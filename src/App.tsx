import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HomePage } from '@/components/home/HomePage';
import { ArticlePage } from '@/components/article/ArticlePage';
import { articles } from '@/data/content';
import { getRelatedArticles } from '@/lib/utils';

function App() {
  const [currentSlug, setCurrentSlug] = useState<string | null>(null);

  useEffect(() => {
    const handler = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#article/')) {
        setCurrentSlug(hash.replace('#article/', ''));
      } else if (hash === '' || hash === '#home') {
        setCurrentSlug(null);
      }
    };
    handler();
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);

  const handleArticleClick = (slug: string) => {
    window.location.hash = `#article/${slug}`;
  };

  const handleBack = () => {
    window.location.hash = '';
    window.scrollTo(0, 0);
  };

  const currentArticle = currentSlug ? articles.find((a) => a.slug === currentSlug) : null;
  const related = currentArticle ? getRelatedArticles(currentArticle.slug) : [];

  return (
    <div className="min-h-screen" style={{ background: 'var(--color-bg)' }}>
      <Header onNavigate={() => {}} />

      <main>
        {currentArticle ? (
          <ArticlePage
            article={currentArticle}
            related={related}
            onArticleClick={handleArticleClick}
            onBack={handleBack}
          />
        ) : (
          <HomePage onArticleClick={handleArticleClick} />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
