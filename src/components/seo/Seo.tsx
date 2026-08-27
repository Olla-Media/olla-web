import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  SITE_NAME,
  getPageSeo,
  getSiteUrl,
} from '@/data/seo'

function upsertMeta(selector: string, attributes: Record<string, string>, content: string) {
  let element = document.head.querySelector(selector)
  if (!element) {
    element = document.createElement('meta')
    for (const [key, value] of Object.entries(attributes)) {
      element.setAttribute(key, value)
    }
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

function upsertLink(rel: string, href: string) {
  let element = document.head.querySelector(`link[rel="${rel}"]`)
  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    document.head.appendChild(element)
  }
  element.setAttribute('href', href)
}

function upsertJsonLd(id: string, data: Record<string, unknown>) {
  let element = document.getElementById(id) as HTMLScriptElement | null
  if (!element) {
    element = document.createElement('script')
    element.id = id
    element.type = 'application/ld+json'
    document.head.appendChild(element)
  }
  element.textContent = JSON.stringify(data)
}

export function Seo() {
  const { pathname } = useLocation()

  useEffect(() => {
    const siteUrl = getSiteUrl()
    const page = getPageSeo(pathname)
    const canonical = `${siteUrl}${page.path === '/' ? '/' : page.path}`
    const image = `${siteUrl}/og.png`
    const indexable = page.index !== false
    const robots = indexable ? 'index, follow' : 'noindex, follow'

    document.title = page.title

    upsertMeta('meta[name="description"]', { name: 'description' }, page.description)
    upsertMeta('meta[name="robots"]', { name: 'robots' }, robots)
    upsertMeta('meta[name="googlebot"]', { name: 'googlebot' }, robots)
    upsertMeta('meta[name="theme-color"]', { name: 'theme-color' }, '#19b19d')
    upsertMeta('meta[name="author"]', { name: 'author' }, 'Olla Media Ltd')

    upsertMeta('meta[property="og:type"]', { property: 'og:type' }, 'website')
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name' }, SITE_NAME)
    upsertMeta('meta[property="og:locale"]', { property: 'og:locale' }, 'en_US')
    upsertMeta('meta[property="og:title"]', { property: 'og:title' }, page.title)
    upsertMeta(
      'meta[property="og:description"]',
      { property: 'og:description' },
      page.description,
    )
    upsertMeta('meta[property="og:url"]', { property: 'og:url' }, canonical)
    upsertMeta('meta[property="og:image"]', { property: 'og:image' }, image)
    upsertMeta('meta[property="og:image:width"]', { property: 'og:image:width' }, '1200')
    upsertMeta('meta[property="og:image:height"]', { property: 'og:image:height' }, '630')
    upsertMeta('meta[property="og:image:alt"]', { property: 'og:image:alt' }, DEFAULT_TITLE)

    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card' }, 'summary_large_image')
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title' }, page.title)
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description' }, page.description)
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image' }, image)

    const verification = import.meta.env.VITE_GOOGLE_SITE_VERIFICATION
    if (verification) {
      upsertMeta(
        'meta[name="google-site-verification"]',
        { name: 'google-site-verification' },
        verification,
      )
    }

    upsertLink('canonical', canonical)

    upsertJsonLd('olla-jsonld', {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': `${siteUrl}/#organization`,
          name: 'Olla Media Ltd',
          url: siteUrl,
          logo: `${siteUrl}/favicon.png`,
          email: 'support@olla.media',
        },
        {
          '@type': 'WebSite',
          '@id': `${siteUrl}/#website`,
          name: SITE_NAME,
          url: siteUrl,
          description: DEFAULT_DESCRIPTION,
          publisher: { '@id': `${siteUrl}/#organization` },
          inLanguage: 'en',
        },
        {
          '@type': 'WebPage',
          '@id': `${canonical}#webpage`,
          url: canonical,
          name: page.title,
          description: page.description,
          isPartOf: { '@id': `${siteUrl}/#website` },
        },
        {
          '@type': 'SoftwareApplication',
          name: SITE_NAME,
          applicationCategory: 'CommunicationApplication',
          operatingSystem: 'Android',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
          },
          description: DEFAULT_DESCRIPTION,
        },
      ],
    })
  }, [pathname])

  return null
}
