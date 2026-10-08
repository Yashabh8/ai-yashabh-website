export type Category =
  | 'AI Tools'
  | 'Automation'
  | 'Business AI'
  | 'Productivity'
  | 'Guides'
  | 'Comparisons';

export interface Author {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  role: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: Category;
  image: string;
  author: Author;
  publishedDate: string;
  updatedDate?: string;
  readingTime: number;
  featured?: boolean;
  trending?: boolean;
  editorsPick?: boolean;
  content: ArticleContentBlock[];
}

export type ArticleContentBlock =
  | { type: 'h2'; text: string; id?: string }
  | { type: 'h3'; text: string; id?: string }
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'quote'; text: string }
  | { type: 'code'; language?: string; code: string }
  | { type: 'image'; src: string; alt: string }
  | { type: 'table'; headers: string[]; rows: string[][] };

export interface AITool {
  id: string;
  name: string;
  description: string;
  category: string;
  pricing: 'Free' | 'Freemium' | 'Paid' | 'Free Trial';
  rating: number;
  url: string;
  bestFor?: string;
  icon: string;
}

export interface CategoryInfo {
  name: Category;
  slug: string;
  description: string;
  articleCount: number;
  iconName: string;
}

export interface TocItem {
  id: string;
  text: string;
  level: number;
}
