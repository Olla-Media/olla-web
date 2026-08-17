import { PageTitle } from '@/components/layout/Layout'

export function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-14 md:px-8 md:py-20">
      <PageTitle>Privacy Policy</PageTitle>
      <div className="flex flex-col gap-5 text-[15px] leading-7">
        <p>
          Olla Media Ltd (“Olla”) collects the account details you provide, messages you send, and
          device information needed to deliver chats, HepaSnaps, Moments, and Trending.
        </p>
        <p>
          We do not sell personal data. Media marked as HepaSnap is stored only for the lifetime of
          the snap. You can export or delete your account from Settings at any time.
        </p>
        <p>
          Questions: privacy@olla.media. This page is a product stub and will be replaced with
          counsel-reviewed terms before public launch.
        </p>
      </div>
    </div>
  )
}
