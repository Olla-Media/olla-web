import { afterEach, describe, expect, it, vi } from 'vitest'

describe('api stubs', () => {
  afterEach(() => {
    vi.unstubAllEnvs()
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
    vi.resetModules()
  })

  it('resolves contact submission without an API base URL', async () => {
    const { submitContact } = await import('@/lib/api')

    await expect(
      submitContact({
        firstName: 'Ada',
        lastName: 'Lovelace',
        email: 'ada@example.com',
        subject: 'Support',
        message: 'Hello',
      }),
    ).resolves.toBeUndefined()
  })

  it('resolves newsletter subscription without an API base URL', async () => {
    const { subscribeNewsletter } = await import('@/lib/api')
    await expect(subscribeNewsletter('friend@example.com')).resolves.toBeUndefined()
  })

  it('posts contact payload when VITE_API_BASE_URL is set', async () => {
    vi.stubEnv('VITE_API_BASE_URL', 'https://api.olla.test')
    const fetchMock = vi.fn().mockResolvedValue({ ok: true })
    vi.stubGlobal('fetch', fetchMock)

    const { submitContact } = await import('@/lib/api')

    await submitContact({
      firstName: 'Ada',
      lastName: 'Lovelace',
      email: 'ada@example.com',
      subject: 'Press',
      message: 'Hello',
    })

    expect(fetchMock).toHaveBeenCalledWith(
      'https://api.olla.test/contact',
      expect.objectContaining({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: 'Ada',
          lastName: 'Lovelace',
          email: 'ada@example.com',
          subject: 'Press',
          message: 'Hello',
        }),
      }),
    )
  })

  it('posts newsletter email when VITE_API_BASE_URL is set', async () => {
    vi.stubEnv('VITE_API_BASE_URL', 'https://api.olla.test')
    const fetchMock = vi.fn().mockResolvedValue({ ok: true })
    vi.stubGlobal('fetch', fetchMock)

    const { subscribeNewsletter } = await import('@/lib/api')
    await subscribeNewsletter('friend@example.com')

    expect(fetchMock).toHaveBeenCalledWith(
      'https://api.olla.test/newsletter',
      expect.objectContaining({
        method: 'POST',
        body: JSON.stringify({ email: 'friend@example.com' }),
      }),
    )
  })

  it('throws when the contact API responds with an error', async () => {
    vi.stubEnv('VITE_API_BASE_URL', 'https://api.olla.test')
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: false }))

    const { submitContact } = await import('@/lib/api')

    await expect(
      submitContact({
        firstName: 'Ada',
        lastName: 'Lovelace',
        email: 'ada@example.com',
        subject: 'Support',
        message: 'Hello',
      }),
    ).rejects.toThrow('Unable to send your message right now.')
  })
})
