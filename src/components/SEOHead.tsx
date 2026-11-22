
import React, { useEffect } from 'react';
import { PageId } from '../types';
import { SEO_CONFIG } from '../data/seoData';

interface SEOHeadProps {
  currentPage: PageId;
  serviceMode?: 'landing' | 'construction' | 'interiors';
}

const SITE_URL = 'https://www.gowdrurealcom.com';

const INTERIOR_SEO: Partial<Record<PageId, {
  title: string;
  description: string;
  keywords: string;
}> > = {
  home: {
    title: 'Luxury Interior Designers in Bengaluru | Avani Nivas',
    description:
      'Explore bespoke residential interior design, luxury home interiors and customized living spaces by Avani Nivas in Bengaluru.',
    keywords:
      'interior designers in Bengaluru, luxury home interiors, residential interior design, custom home interiors'
  },
  services: {
    title: 'Modular Kitchens & Interior Design Services in Bengaluru | Avani Nivas',
    description:
      'Explore modular kitchens, wardrobes, living room interiors, bedroom designs and customized home interior solutions in Bengaluru.',
    keywords:
      'modular kitchen designers Bengaluru, wardrobe designers, living room interiors, bedroom interior design'
  },
  pricing: {
    title: 'Home Interior Design Packages & Pricing | Avani Nivas',
    description:
      'Explore home interior design packages, customization options, modular kitchen pricing and premium interior solutions by Avani Nivas.',
    keywords:
      'interior design packages Bengaluru, home interior cost, modular kitchen cost, interior design pricing'
  },
  projects: {
    title: 'Interior Design Projects & Portfolio | Avani Nivas',
    description:
      'Explore residential interior projects, modular kitchens, elegant bedrooms and customized home interiors by Avani Nivas.',
    keywords:
      'interior design portfolio Bengaluru, residential interior projects, luxury home interior designs'
  },
  about: {
    title: 'About Avani Nivas | Interior Design & Construction',
    description:
      'Discover Avani Nivas and Gowdru Realcom, offering residential construction and customized interior design solutions.',
    keywords:
      'Avani Nivas interiors, Gowdru Realcom, interior design company Bengaluru'
  },
  partners: {
    title: 'Our Interior Design Partners | Avani Nivas',
    description:
      'Discover the materials, brands and industry partners supporting Avani Nivas interior design solutions.',
    keywords:
      'interior material partners, interior design brands, premium interior materials Bengaluru'
  },
  contact: {
    title: 'Contact Interior Designers in Bengaluru | Avani Nivas',
    description:
      'Contact Avani Nivas for home interior design consultations, modular kitchens, wardrobes and customized interior solutions.',
    keywords:
      'contact interior designers Bengaluru, home interior consultation, Avani Nivas contact'
  }
};

export const SEOHead: React.FC<SEOHeadProps> = ({
  currentPage,
  serviceMode = 'construction'
}) => {
  const baseSEO = SEO_CONFIG[currentPage] || SEO_CONFIG.home;

  const seo = serviceMode === 'interiors'
    ? { ...baseSEO, ...INTERIOR_SEO[currentPage] }
    : baseSEO;

  let pageTitle = seo.title;

  if (serviceMode === 'landing') {
    pageTitle =
      'Avani Nivas | Construction & Interior Design in Bengaluru';
  }

  const canonicalPath =
    serviceMode === 'landing'
      ? '/'
      : serviceMode === 'interiors'
        ? `/interiors${currentPage === 'home' ? '' : `/${currentPage}`}`
        : currentPage === 'home'
          ? '/construction'
          : seo.canonicalPath;

  const canonicalUrl = `${SITE_URL}${canonicalPath}`;
  const ogImage = seo.ogImage;

  useEffect(() => {
    document.title = pageTitle;

    const setMeta = (
      attribute: 'name' | 'property',
      key: string,
      content: string
    ) => {
      let element = document.querySelector(
        `meta[${attribute}="${key}"]`
      ) as HTMLMetaElement | null;

      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }

      element.content = content;
    };

    // Standard SEO metadata
    setMeta('name', 'description', seo.description);
    setMeta('name', 'keywords', seo.keywords);
    setMeta('name', 'robots', 'index, follow');

    // Canonical URL
    let canonical = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;

    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }

    canonical.href = canonicalUrl;

    // Open Graph
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:site_name', 'Avani Nivas | Gowdru Realcom');
    setMeta('property', 'og:title', pageTitle);
    setMeta('property', 'og:description', seo.description);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:image', ogImage);

    // Twitter metadata
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', pageTitle);
    setMeta('name', 'twitter:description', seo.description);
    setMeta('name', 'twitter:image', ogImage);

    // Structured data
    let schema = document.getElementById(
      'app-structured-data'
    ) as HTMLScriptElement | null;

    if (!schema) {
      schema = document.createElement('script');
      schema.id = 'app-structured-data';
      schema.type = 'application/ld+json';
      document.head.appendChild(schema);
    }

    const pageSchema = serviceMode === 'interiors'
      ? {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: pageTitle,
          description: seo.description,
          url: canonicalUrl,
          isPartOf: {
            '@type': 'WebSite',
            name: 'Avani Nivas',
            url: SITE_URL
          },
          publisher: {
            '@type': 'Organization',
            name: 'Gowdru Realcom Private Limited',
            url: SITE_URL,
            logo: `${SITE_URL}/logo.png`
          }
        }
      : seo.schema;

    schema.textContent = JSON.stringify(pageSchema);

    // Google Analytics 4 SPA page view
    const analyticsWindow = window as Window & {
      GA_MEASUREMENT_ID?: string;
      gtag?: (
        command: string,
        action: string,
        parameters: {
          page_title: string;
          page_location: string;
          page_path: string;
        }
      ) => void;
    };
    const measurementId = analyticsWindow.GA_MEASUREMENT_ID;

    if (
      typeof window !== 'undefined' &&
      typeof analyticsWindow.gtag === 'function' &&
      measurementId
    ) {
      analyticsWindow.gtag('event', 'page_view', {
        page_title: pageTitle,
        page_location: canonicalUrl,
        page_path: canonicalPath
      });
    }

  }, [
    currentPage,
    serviceMode,
    pageTitle,
    seo,
    canonicalUrl,
    ogImage
  ]);

  return null;
};
