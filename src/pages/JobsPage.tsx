import { Link } from 'react-router-dom'
import { ChevronRightIcon } from 'lucide-react'
import { AboutShell, PageTitle } from '@/components/layout/Layout'
import { jobCategories, jobsIntro } from '@/data/jobs'

export function JobsPage() {
  return (
    <AboutShell>
      <PageTitle>Jobs Board</PageTitle>

      <h2 className="font-heading text-xl font-bold text-secondary-foreground">Join Olla</h2>
      <p className="mt-3 mb-10 max-w-2xl text-[15px] leading-7">{jobsIntro}</p>

      <div className="flex flex-col gap-9">
        {jobCategories.map((category) => (
          <section key={category.title}>
            <h3 className="font-heading mb-3 font-bold text-secondary-foreground">
              {category.title}
            </h3>
            <ul className="flex flex-col gap-2">
              {category.roles.map((role) => (
                <li key={role}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-[15px] no-underline transition-colors hover:text-primary"
                  >
                    <ChevronRightIcon className="size-4 shrink-0 text-primary" />
                    {role}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </AboutShell>
  )
}
