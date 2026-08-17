import { ContactForm } from '@/components/contact/ContactForm'
import { PageTitle } from '@/components/layout/Layout'
import { Separator } from '@/components/ui/separator'
import { offices } from '@/data/site'
import banner from '@/assets/banners/contact.png'

export function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-10 md:px-8 md:py-14">
      <PageTitle>Contact us</PageTitle>

      <img
        src={banner}
        alt="Historic brick architecture near the Olla office"
        className="mb-10 h-40 w-full object-cover object-center md:h-56"
      />

      <div className="flex flex-col gap-10 md:flex-row md:gap-12">
        <div className="min-w-0 flex-1">
          <ContactForm />
        </div>

        <Separator orientation="vertical" className="hidden self-stretch md:block" />

        <aside className="flex w-full flex-col gap-8 md:w-64">
          {offices.map((office) => (
            <div key={office.city} className="flex flex-col gap-1">
              <h2 className="font-heading text-lg font-semibold text-secondary-foreground">
                {office.city}
              </h2>
              <p className="text-[15px]">{office.tel}</p>
              <p className="text-[15px]">{office.address}</p>
            </div>
          ))}
        </aside>
      </div>
    </div>
  )
}
