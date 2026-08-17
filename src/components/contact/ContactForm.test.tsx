import { describe, expect, it, vi } from 'vitest'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ContactForm } from '@/components/contact/ContactForm'
import { renderWithRouter } from '@/test/test-utils'

vi.mock('@/lib/api', () => ({
  submitContact: vi.fn().mockResolvedValue(undefined),
}))

describe('ContactForm', () => {
  it('renders contact fields and support email', () => {
    renderWithRouter(<ContactForm />)

    expect(screen.getByRole('link', { name: 'support@olla.media' })).toHaveAttribute(
      'href',
      'mailto:support@olla.media',
    )
    expect(screen.getByLabelText('First name')).toBeInTheDocument()
    expect(screen.getByLabelText('Last name')).toBeInTheDocument()
    expect(screen.getByLabelText('What’s your email address?')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send' })).toBeInTheDocument()
  })

  it('requires a subject before submitting', async () => {
    const user = userEvent.setup()
    renderWithRouter(<ContactForm />)

    await user.type(screen.getByLabelText('First name'), 'Ada')
    await user.type(screen.getByLabelText('Last name'), 'Lovelace')
    await user.type(screen.getByLabelText('What’s your email address?'), 'ada@example.com')
    await user.type(screen.getByLabelText('Message'), 'Please help')
    await user.click(screen.getByRole('button', { name: 'Send' }))

    expect(
      await screen.findByText('Please choose a message subject.'),
    ).toBeInTheDocument()
  })
})
