export type ContactPayload = {
  firstName: string
  lastName: string
  email: string
  subject: string
  message: string
}

const apiBase = import.meta.env.VITE_API_BASE_URL as string | undefined

export async function submitContact(payload: ContactPayload): Promise<void> {
  if (apiBase) {
    const response = await fetch(`${apiBase}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    if (!response.ok) {
      throw new Error('Unable to send your message right now.')
    }
    return
  }

  await Promise.resolve()
}

export async function subscribeNewsletter(email: string): Promise<void> {
  if (apiBase) {
    const response = await fetch(`${apiBase}/newsletter`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })
    if (!response.ok) {
      throw new Error('Unable to subscribe right now.')
    }
    return
  }

  await Promise.resolve()
}
