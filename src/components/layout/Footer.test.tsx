import { describe, expect, it } from 'vitest'
import { screen } from '@testing-library/react'
import { Footer } from '@/components/layout/Footer'
import { renderWithRouter } from '@/test/test-utils'

describe('Footer', () => {
  it('renders navigation columns', () => {
    renderWithRouter(<Footer />)

    expect(screen.getByRole('heading', { name: 'Olla' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Support' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'FAQs' })).toHaveAttribute('href', '/faqs')
    expect(screen.getByRole('link', { name: 'Privacy Policy' })).toHaveAttribute(
      'href',
      '/privacy',
    )
  })

  it('shows the current year in the copyright line', () => {
    renderWithRouter(<Footer />)

    const year = new Date().getFullYear()
    expect(
      screen.getByText(`${year} OLLA MEDIA LTD ALL RIGHTS RESERVED`),
    ).toBeInTheDocument()
  })
})
