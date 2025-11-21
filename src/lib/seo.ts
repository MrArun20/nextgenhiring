export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
}

export function updatePageSEO(config: SEOConfig): void {
  const titleElement = document.querySelector('title');
  if (titleElement) {
    titleElement.textContent = config.title;
  }

  updateMetaTag('name', 'description', config.description);

  if (config.keywords) {
    updateMetaTag('name', 'keywords', config.keywords);
  }

  updateMetaTag('property', 'og:title', config.title);
  updateMetaTag('property', 'og:description', config.description);
  updateMetaTag('property', 'og:type', config.ogType || 'website');

  if (config.ogImage) {
    updateMetaTag('property', 'og:image', config.ogImage);
  }

  updateMetaTag('name', 'twitter:card', 'summary_large_image');
  updateMetaTag('name', 'twitter:title', config.title);
  updateMetaTag('name', 'twitter:description', config.description);

  if (config.ogImage) {
    updateMetaTag('name', 'twitter:image', config.ogImage);
  }
}

function updateMetaTag(attribute: string, key: string, content: string): void {
  let element = document.querySelector(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}
