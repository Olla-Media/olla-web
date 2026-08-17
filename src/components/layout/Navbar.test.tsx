import { describe, expect, it } from 'vitest'
import { screen } from '@testing-library/react'
import { Navbar } from '@/components/layout/Navbar'
import { navLinks } from '@/data/site'
import { renderWithRouter } from '@/test/test-utils'

describe('Navbar', () => {
  it('renders brand and primary links', () => {
    renderWithRouter(<Navbar />)

    expect(screen.getByRole('link', { name: 'olla' })).toHaveAttribute('href', '/')
    expect(screen.getByRole('navigation', { name: 'Primary' })).toBeInTheDocument()

    for (const link of navLinks) {
      expect(screen.getByRole('link', { name: link.label })).toHaveAttribute(
        'href',
        link.to,
      )
    }
  })

  it('exposes a mobile menu trigger', () => {
    renderWithRouter(<Navbar />)
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })
})
