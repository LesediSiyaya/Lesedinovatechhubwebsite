import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  path?: string;
}

const BASE_URL = 'https://lesnovatechhub.vercel.app';

export function useSEO({ title, description, path = '/' }: SEOProps) {
  useEffect(() => {
    const fullTitle = `${title} | Lesedi NovaTech Hub`;
    const url = `${BASE_URL}${path}`;

    document.title = fullTitle;

    const setMeta = (selector: string, value: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(el.hasAttribute('content') ? 'content' : 'href', value);
    };

    setMeta('meta[name="description"]', description);
    setMeta('link[rel="canonical"]', url);
    setMeta('meta[property="og:title"]', fullTitle);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:url"]', url);
    setMeta('meta[name="twitter:title"]', fullTitle);
    setMeta('meta[name="twitter:description"]', description);
  }, [title, description, path]);
}
