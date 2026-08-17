import { GooglePlayBadge } from '@/components/ui/google-play-badge'
import { PageTitle } from '@/components/layout/Layout'

export function DownloadPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-14 md:px-8 md:py-20">
      <PageTitle>Download Olla</PageTitle>
      <p className="max-w-xl text-[16px] leading-7">
        Olla is on Android today. Get fast chats, HepaSnap, Moments, Trending, and anonymous
        conversations — your social home in one app.
      </p>
      <div className="mt-9 flex flex-col items-start gap-3">
        <p className="text-[13px] font-bold tracking-[0.18em] text-foreground">GET THE APP</p>
        <GooglePlayBadge />
      </div>
    </div>
  )
}
