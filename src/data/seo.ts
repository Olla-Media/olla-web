export const SITE_NAME = 'Olla'
export const SITE_TAGLINE = 'Life is better with friends'
export const DEFAULT_TITLE = `${SITE_NAME} — ${SITE_TAGLINE}`
export const DEFAULT_DESCRIPTION =
  'Olla is the all-in-one messaging app for fast chats, HepaSnap, Moments, and anonymous conversations. Life is better with friends.'

export function getSiteUrl(): string {
  const raw = import.meta.env.VITE_SITE_URL ?? 'https://olla.media'
  return raw.replace(/\/$/, '')
}

export type PageSeo = {
  path: string
  title: string
  description: string
  index?: boolean
}

export const pageSeo: PageSeo[] = [
  {
    path: '/',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  {
    path: '/about',
    title: 'About Olla — Company and team',
    description:
      'Meet Olla Media Ltd and the team building an all-in-one messenger for chat, HepaSnap, Moments, and discovery.',
  },
  {
    path: '/faqs',
    title: 'Olla FAQs — Help with chat, media, and your account',
    description:
      'Answers to common Olla questions: read receipts, media, privacy, reinstalling, and Android support.',
  },
  {
    path: '/press',
    title: 'Olla Press — News and product updates',
    description:
      'Press releases and product announcements from Olla Media Ltd, including API, beta, and brand news.',
  },
  {
    path: '/jobs',
    title: 'Jobs at Olla — Open roles',
    description:
      'Join Olla in engineering, design, research, and marketing. See open roles on the jobs board.',
  },
  {
    path: '/contact',
    title: 'Contact Olla — San Francisco and Nairobi',
    description:
      'Email support@olla.media or write to the San Francisco HQ and Nairobi office. We read every message.',
  },
  {
    path: '/download',
    title: 'Download Olla for Android',
    description:
      'Get Olla on Google Play. Fast chats, HepaSnap, Moments, Trending, and anonymous conversations in one app.',
  },
  {
    path: '/help',
    title: 'Olla Help — Contact support',
    description:
      'Need help with Olla? Browse FAQs or send a message to the support team.',
  },
  {
    path: '/blog',
    title: 'Olla Blog — Stories and product notes',
    description:
      'Product notes, Moments from the road, and what’s trending — stories from the Olla team.',
  },
  {
    path: '/privacy',
    title: 'Olla Privacy Policy',
    description:
      'How Olla Media Ltd collects, uses, and protects account details, messages, and device information.',
  },
  {
    path: '/terms',
    title: 'Olla Terms of Service',
    description:
      'Terms of use for the Olla messaging app and this website, provided by Olla Media Ltd.',
  },
]

const fallbackSeo: PageSeo = {
  path: '/',
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  index: false,
}

export function getPageSeo(pathname: string): PageSeo {
  const normalized = pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname
  return pageSeo.find((page) => page.path === normalized) ?? fallbackSeo
}

export const sitemapPaths = pageSeo.map((page) => page.path)
