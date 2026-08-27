import { describe, expect, it } from 'vitest'
import { DEFAULT_TITLE, getPageSeo, pageSeo, sitemapPaths } from '@/data/seo'

describe('seo data', () => {
  it('covers every marketed route', () => {
    expect(sitemapPaths).toEqual(
      expect.arrayContaining([
        '/',
        '/about',
        '/faqs',
        '/press',
        '/jobs',
        '/contact',
        '/download',
        '/help',
        '/blog',
        '/privacy',
        '/terms',
      ]),
    )
    expect(pageSeo.every((page) => page.title && page.description)).toBe(true)
  })

  it('returns home metadata for /', () => {
    expect(getPageSeo('/').title).toBe(DEFAULT_TITLE)
    expect(getPageSeo('/').index).not.toBe(false)
  })

  it('returns about metadata and strips a trailing slash', () => {
    expect(getPageSeo('/about').title).toMatch(/About Olla/)
    expect(getPageSeo('/about/').path).toBe('/about')
  })

  it('marks unknown paths as noindex', () => {
    expect(getPageSeo('/not-a-page').index).toBe(false)
    expect(getPageSeo('/not-a-page').title).toBe(DEFAULT_TITLE)
  })
})
