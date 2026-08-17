import { useState, type FormEvent } from 'react'
import { Button } from '@/components/ui/button'
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { submitContact, type ContactPayload } from '@/lib/api'

const subjectItems = [
  { label: 'Message Subject', value: null },
  { label: 'Support', value: 'Support' },
  { label: 'Press', value: 'Press' },
  { label: 'Partnerships', value: 'Partnerships' },
  { label: 'Jobs', value: 'Jobs' },
  { label: 'Other', value: 'Other' },
]

const emptyForm: ContactPayload = {
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: '',
}

export function ContactForm() {
  const [form, setForm] = useState<ContactPayload>(emptyForm)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  function update(field: keyof ContactPayload, value: string) {
    setForm((current) => ({ ...current, [field]: value }))
    setStatus('idle')
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!form.subject) {
      setStatus('error')
      return
    }
    try {
      await submitContact(form)
      setStatus('success')
      setForm(emptyForm)
    } catch {
      setStatus('error')
    }
  }

  const subjectInvalid = status === 'error' && !form.subject

  return (
    <form onSubmit={onSubmit}>
      <p className="mb-7 text-[15px] leading-7 text-muted-foreground italic">
        Hi. Just shoot us an email at{' '}
        <a href="mailto:support@olla.media" className="text-primary not-italic hover:underline">
          support@olla.media
        </a>{' '}
        or fill in your details and your message below and we’ll get right on it.
      </p>

      <FieldGroup>
        <Field>
          <FieldLabel className="text-[15px] font-bold text-foreground">
            What’s your name?
          </FieldLabel>
          <div className="grid gap-3 sm:grid-cols-2">
            <Input
              required
              aria-label="First name"
              placeholder="First name"
              value={form.firstName}
              onChange={(event) => update('firstName', event.target.value)}
              className="h-10"
            />
            <Input
              required
              aria-label="Last name"
              placeholder="Last name"
              value={form.lastName}
              onChange={(event) => update('lastName', event.target.value)}
              className="h-10"
            />
          </div>
        </Field>

        <Field>
          <FieldLabel htmlFor="contact-email" className="text-[15px] font-bold text-foreground">
            What’s your email address?
          </FieldLabel>
          <Input
            id="contact-email"
            type="email"
            required
            placeholder="name@domain.com"
            value={form.email}
            onChange={(event) => update('email', event.target.value)}
            className="h-10"
          />
        </Field>

        <Field data-invalid={subjectInvalid || undefined}>
          <FieldLabel htmlFor="contact-subject" className="text-[15px] font-bold text-foreground">
            What’s your message?
          </FieldLabel>
          <Select
            items={subjectItems}
            value={form.subject || null}
            onValueChange={(value) => update('subject', (value as string) ?? '')}
          >
            <SelectTrigger
              id="contact-subject"
              className="h-10 w-full"
              aria-invalid={subjectInvalid || undefined}
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {subjectItems.map((item) => (
                  <SelectItem key={item.label} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Textarea
            required
            rows={7}
            aria-label="Message"
            value={form.message}
            onChange={(event) => update('message', event.target.value)}
          />
          <FieldError>
            {subjectInvalid ? 'Please choose a message subject.' : null}
          </FieldError>
        </Field>

        <Field orientation="horizontal">
          <Button type="submit" className="px-8">
            Send
          </Button>
          {status === 'success' ? (
            <p className="text-sm text-secondary-foreground">
              Thanks — your message is queued. We’ll wire delivery when the API lands.
            </p>
          ) : null}
        </Field>
      </FieldGroup>
    </form>
  )
}
