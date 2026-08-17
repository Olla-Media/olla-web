export type PressPost = {
  id: string
  day: string
  month: string
  year: string
  title: string
  excerpt: string
  body?: string[]
  quote?: string
}

export const featuredPress: PressPost = {
  id: 'api-rollout',
  day: '17',
  month: 'JUN',
  year: "'16",
  title: 'API Rollout v2.0.1',
  excerpt: '',
  body: [
    'Olla is opening a public API so partners can send messages, HepaSnaps, and Moments into the conversations people already live in. Version 2.0.1 focuses on delivery receipts, media TTLs, and anonymous threads.',
    'Developers in Nairobi and San Francisco can request keys from press@olla.media. Rate limits start conservative; we will raise them as we learn how the graph is used.',
  ],
  quote:
    'Friendship should move at the speed of the last message. The API is how Olla meets the rest of the internet without leaving the chat.',
}

export const pressArchives: PressPost[] = [
  {
    id: 'beta-204',
    day: '29',
    month: 'MAR',
    year: "'16",
    title: 'Beta 2.04 Release',
    excerpt:
      'Group chats, Moments reactions, and a faster composer land in the Android beta. Testers in East Africa get first access this week.',
  },
  {
    id: 'press-statement',
    day: '29',
    month: 'MAR',
    year: "'16",
    title: 'Press Statement',
    excerpt:
      'Olla Media Ltd announces the public brand and Play Store listing. Life is better with friends — and now there is an app for that.',
  },
]

export const pressYears = ['2015', '2016'] as const
