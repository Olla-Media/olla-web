import { describe, expect, it } from 'vitest'
import { screen } from '@testing-library/react'
import { MemoryRouter, Navigate, Route, Routes } from 'react-router-dom'
import { render } from '@testing-library/react'
import { Layout } from '@/components/layout/Layout'
import { AboutPage } from '@/pages/AboutPage'
import { ContactPage } from '@/pages/ContactPage'
import { HomePage } from '@/pages/HomePage'
import { JobsPage } from '@/pages/JobsPage'
import { PressPage } from '@/pages/PressPage'
import { renderPage } from '@/test/test-utils'

describe('key pages', () => {
  it('renders the home hero', () => {
    renderPage(<HomePage />, { route: '/' })

    expect(
      screen.getByRole('heading', { name: /Life is better/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /Get it on Google Play/i }),
    ).toBeInTheDocument()
  })

  it('renders the about page', () => {
    renderPage(<AboutPage />, { route: '/about' })
    expect(screen.getByRole('heading', { name: 'About Olla' })).toBeInTheDocument()
  })

  it('renders the jobs board', () => {
    renderPage(<JobsPage />, { route: '/jobs' })
    expect(screen.getByRole('heading', { name: 'Jobs Board' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Join Olla' })).toBeInTheDocument()
  })

  it('renders press archives', () => {
    renderPage(<PressPage />, { route: '/press' })
    expect(screen.getByRole('heading', { name: 'Press' })).toBeInTheDocument()
    expect(screen.getByText('Archives')).toBeInTheDocument()
  })

  it('renders the contact page offices', () => {
    renderPage(<ContactPage />, { route: '/contact' })
    expect(screen.getByRole('heading', { name: 'Contact us' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'San Francisco - HQ' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Nairobi Office' })).toBeInTheDocument()
  })
})

describe('unknown route redirect', () => {
  it('sends unknown paths to home', () => {
    render(
      <MemoryRouter initialEntries={['/missing']}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </MemoryRouter>,
    )

    expect(
      screen.getByRole('heading', { name: /Life is better/i }),
    ).toBeInTheDocument()
  })
})
