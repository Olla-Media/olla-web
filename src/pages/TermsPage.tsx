import { PageTitle } from '@/components/layout/Layout'

export function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-14 md:px-8 md:py-20">
      <PageTitle>Terms of Service</PageTitle>
      <div className="flex flex-col gap-5 text-[15px] leading-7">
        <p>
          By using Olla you agree to use the service lawfully, respect other people’s content, and
          not attempt to reverse, overload, or impersonate the product.
        </p>
        <p>
          Olla is provided as-is. We may update features, these terms, or suspend accounts that harm
          the community. The Google Play listing is the current distribution channel.
        </p>
        <p>Governing entity: Olla Media Ltd. This page is a product stub pending legal review.</p>
      </div>
    </div>
  )
}
