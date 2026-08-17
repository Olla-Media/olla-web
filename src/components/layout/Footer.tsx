import { Link } from 'react-router-dom'

const columns = [
  {
    title: 'Olla',
    links: [
      { to: '/about', label: 'About' },
      { to: '/press', label: 'Press' },
      { to: '/jobs', label: 'Jobs' },
    ],
  },
  {
    title: 'Support',
    links: [
      { to: '/faqs', label: 'FAQs' },
      { to: '/help', label: 'Help' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { to: '/privacy', label: 'Privacy Policy' },
      { to: '/terms', label: 'Terms of Service' },
    ],
  },
  {
    title: 'Download',
    links: [{ to: '/download', label: 'Olla for Android' }],
  },
  {
    title: 'Contact Us',
    links: [
      { to: '/contact', label: 'San Francisco' },
      { to: '/contact', label: 'Nairobi' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-brand-teal-deep text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 py-12 sm:grid-cols-3 md:grid-cols-5 md:px-8">
        {columns.map((column) => (
          <div key={column.title} className="flex flex-col gap-2.5">
            <h2 className="font-heading text-[15px] font-bold">{column.title}</h2>
            {column.links.map((link) => (
              <Link
                key={`${column.title}-${link.label}`}
                to={link.to}
                className="text-[14px] text-white/80 no-underline transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <p className="bg-brand-teal-dark py-3 text-center text-[11px] tracking-[0.16em] text-white/50">
        {new Date().getFullYear()} OLLA MEDIA LTD ALL RIGHTS RESERVED
      </p>
    </footer>
  )
}
