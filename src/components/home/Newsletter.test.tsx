import { describe, expect, it, vi } from 'vitest'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from '@/components/home/Newsletter'
import { renderWithRouter } from '@/test/test-utils'

vi.mock('@/lib/api', () => ({
  subscribeNewsletter: vi.fn().mockResolvedValue(undefined),
}))

describe('Newsletter', () => {
  it('shows a success message after subscribe', async () => {
    const user = userEvent.setup()
    renderWithRouter(<Newsletter />)

    await user.type(
      screen.getByPlaceholderText('Type your email address'),
      'friend@example.com',
    )
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    await waitFor(() => {
      expect(screen.getByText('Thanks — we’ll be in touch.')).toBeInTheDocument()
    })
  })
})
