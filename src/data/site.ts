export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/download', label: 'Download' },
  { to: '/press', label: 'Press' },
  { to: '/help', label: 'Help' },
  { to: '/blog', label: 'Blog' },
] as const

export const aboutLinks = [
  { to: '/about', label: 'About' },
  { to: '/faqs', label: 'Faqs' },
  { to: '/press', label: 'Press' },
  { to: '/jobs', label: 'Jobs' },
] as const

export const offices = [
  {
    city: 'San Francisco - HQ',
    tel: 'Tel: 077 8685 5841',
    address: '53 Shore Street, STOKE ROW, RG9 1TX',
  },
  {
    city: 'Nairobi Office',
    tel: 'Tel: +254 700 000 000',
    address: 'Westlands, Nairobi, Kenya',
  },
] as const
