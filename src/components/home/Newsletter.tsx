import { useState, type FormEvent } from 'react'
import { ArrowRightIcon } from 'lucide-react'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from '@/components/ui/input-group'
import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import { subscribeNewsletter } from '@/lib/api'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!email.trim()) return
    try {
      await subscribeNewsletter(email.trim())
      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="newsletter-pattern py-16 md:py-20">
      <form onSubmit={onSubmit} className="mx-auto max-w-2xl px-5">
        <Field data-invalid={status === 'error' || undefined}>
          <FieldLabel
            htmlFor="newsletter-email"
            className="mx-auto text-center text-[19px] font-normal text-primary md:text-[22px]"
          >
            Leave us your email, we’ll keep you updated
          </FieldLabel>
          <InputGroup className="mt-3 h-12 rounded-full bg-background">
            <InputGroupInput
              id="newsletter-email"
              type="email"
              required
              value={email}
              placeholder="Type your email address"
              aria-invalid={status === 'error' || undefined}
              onChange={(event) => {
                setEmail(event.target.value)
                setStatus('idle')
              }}
              className="pl-5 text-[15px]"
            />
            <InputGroupAddon align="inline-end">
              <InputGroupButton
                type="submit"
                variant="default"
                size="icon-sm"
                className="rounded-full"
                aria-label="Subscribe"
              >
                <ArrowRightIcon />
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
          {status === 'success' ? (
            <p className="text-center text-sm text-secondary-foreground">
              Thanks — we’ll be in touch.
            </p>
          ) : null}
          <FieldError className="text-center">
            {status === 'error' ? 'Something went wrong. Please try again.' : null}
          </FieldError>
        </Field>
      </form>
    </section>
  )
}
