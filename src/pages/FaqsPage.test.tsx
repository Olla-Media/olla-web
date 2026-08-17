import { describe, expect, it } from 'vitest'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FaqsPage } from '@/pages/FaqsPage'
import { faqs } from '@/data/faqs'
import { renderPage } from '@/test/test-utils'

describe('FaqsPage', () => {
  it('lists FAQ questions', () => {
    renderPage(<FaqsPage />, { route: '/faqs' })

    expect(screen.getByRole('heading', { name: 'Olla FAQs' })).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: faqs[0].question }),
    ).toBeInTheDocument()
  })

  it('filters questions by search query', async () => {
    const user = userEvent.setup()
    renderPage(<FaqsPage />, { route: '/faqs' })

    await user.type(screen.getByLabelText('Search Olla FAQ'), 'reinstall')

    expect(
      screen.getByRole('button', { name: 'How do I reinstall Olla?' }),
    ).toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: faqs[0].question }),
    ).not.toBeInTheDocument()
  })

  it('shows an empty state when nothing matches', async () => {
    const user = userEvent.setup()
    renderPage(<FaqsPage />, { route: '/faqs' })

    await user.type(screen.getByLabelText('Search Olla FAQ'), 'zzzz-no-match')

    expect(screen.getByText('No matching questions')).toBeInTheDocument()
  })
})
