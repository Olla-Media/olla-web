import { Link } from 'react-router-dom'
import { ContactForm } from '@/components/contact/ContactForm'
import { PageTitle } from '@/components/layout/Layout'

export function HelpPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-14 md:px-8 md:py-20">
      <PageTitle>Help</PageTitle>
      <p className="mb-9 text-[16px] leading-7">
        Most answers live on the{' '}
        <Link to="/faqs" className="text-primary hover:underline">
          FAQs
        </Link>
        . If you still need us, send a note below.
      </p>
      <ContactForm />
    </div>
  )
}
