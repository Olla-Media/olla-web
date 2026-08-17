import anonymous from '@/assets/features/anonymous.png'
import chats from '@/assets/features/chats.png'
import hepasnap from '@/assets/features/hepasnap.png'
import moments from '@/assets/features/moments.png'
import trending from '@/assets/features/trending.png'

export type FeatureSlide = {
  id: string
  title: string
  kicker: string
  body: string
  image: string
}

export const features: FeatureSlide[] = [
  {
    id: 'anonymous',
    title: 'Anonymous Chat',
    kicker: 'Honesty, without the name tag.',
    body: 'Send and receive anonymous messages and have anonymous conversations. Whether it’s to apologize, pay a compliment, or give feedback to your boss, sometimes honesty requires anonymity.',
    image: anonymous,
  },
  {
    id: 'chat',
    title: 'Chat',
    kicker: 'Halla your friends with Olla Chat.',
    body: 'Send messages instantly — one-on-one or in groups. Olla delivers on speed and security so conversations feel as close as sitting together.',
    image: chats,
  },
  {
    id: 'hepasnap',
    title: 'HepaSnap',
    kicker: 'Poof. Then it’s gone.',
    body: 'Wrong picture, unintended message, or a moment that should stay a moment. With HepaSnap, files self-destruct in 6 to 12 seconds and screenshot capture is disabled while they play.',
    image: hepasnap,
  },
  {
    id: 'moments',
    title: 'Moments',
    kicker: 'Memories to life.',
    body: 'Life is about stories. They are what we live for — memories collected, saved, and shared. Add life to your moments and pass them to friends.',
    image: moments,
  },
  {
    id: 'trending',
    title: 'Trending',
    kicker: 'If it’s trending, it’s on Olla.',
    body: 'See what’s happening around you — stories, news, events, videos, memes, and new joints nearby. Olla keeps you up to date.',
    image: trending,
  },
]
