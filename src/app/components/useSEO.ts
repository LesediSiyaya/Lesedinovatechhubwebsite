import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  path?: string;
}

export function useSEO({ title, description, path = '/' }: SEOProps) {
  useEffect(() => {
    const fullTitle = `${title} | Zarq`;
    document.title = fullTitle;

    const setMeta = (selector: string, value: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(el.hasAttribute('content') ? 'content' : 'href', value);
    };

    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', fullTitle);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[name="twitter:title"]', fullTitle);
    setMeta('meta[name="twitter:description"]', description);
  }, [title, description, path]);
}
