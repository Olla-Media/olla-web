import atong from '@/assets/team/james.jpeg'
import joel from '@/assets/team/joel.jpeg'

export type TeamMember = {
  name: string
  role: string
  bio: string
  image?: string
  initials: string
}

export const companyCopy =
  'Olla is a small messaging startup introducing an all-in-one application that meaningfully holds chat, video, and picture sharing in a simple, natural, and fun way — a social home for anybody who wants a life on social media.'

export const team: TeamMember[] = [
  {
    name: 'Joel Mwale',
    role: 'CEO and Co-founder',
    bio: 'Joel leads Olla’s product vision and partnerships. He is building the fastest-growing all-in-one messenger so friendship, media, and discovery live in one place.',
    image: joel,
    initials: 'JM',
  },
  {
    name: 'Atong’ James',
    role: 'CTO and Co-founder',
    bio: 'Atong’ architects Olla’s Android experience — from instant delivery to HepaSnap’s timed media — so chats stay fast, private, and reliable.',
    image: atong,
    initials: 'AJ',
  },
  {
    name: 'Sylvia Zaweria',
    role: 'Administrator',
    bio: 'Sylvia keeps Olla’s Nairobi and San Francisco operations moving: people, press, and the day-to-day that lets the product stay in users’ hands.',
    initials: 'SZ',
  },
]
