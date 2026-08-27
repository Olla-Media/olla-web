import { describe, expect, it } from 'vitest'
import { renderPage } from '@/test/test-utils'
import { AboutPage } from '@/pages/AboutPage'
import { HomePage } from '@/pages/HomePage'

describe('Seo head tags', () => {
  it('sets the home title, canonical, and index robots', () => {
    renderPage(<HomePage />, { route: '/' })

    expect(document.title).toBe('Olla — Life is better with friends')
    expect(document.querySelector('link[rel="canonical"]')?.getAttribute('href')).toBe(
      'https://olla.media/',
    )
    expect(document.querySelector('meta[name="robots"]')?.getAttribute('content')).toBe(
      'index, follow',
    )
    expect(document.getElementById('olla-jsonld')?.textContent).toContain('SoftwareApplication')
  })

  it('updates title and canonical on inner pages', () => {
    renderPage(<AboutPage />, { route: '/about' })

    expect(document.title).toMatch(/About Olla/)
    expect(document.querySelector('link[rel="canonical"]')?.getAttribute('href')).toBe(
      'https://olla.media/about',
    )
    expect(document.querySelector('meta[property="og:title"]')?.getAttribute('content')).toMatch(
      /About Olla/,
    )
  })
})
