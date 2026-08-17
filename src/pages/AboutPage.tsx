import { TeamMember } from '@/components/about/TeamMember'
import { AboutShell, PageTitle } from '@/components/layout/Layout'
import { Separator } from '@/components/ui/separator'
import { companyCopy, team } from '@/data/team'

export function AboutPage() {
  const [featured, ...rest] = team

  return (
    <AboutShell>
      <PageTitle>About Olla</PageTitle>

      <section className="mb-10">
        <h2 className="font-heading text-xl font-bold text-foreground">The Company</h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-7">{companyCopy}</p>
      </section>

      <section>
        <h2 className="font-heading text-xl font-bold text-foreground">The Team</h2>
        <p className="mt-3 mb-8 max-w-2xl text-[15px] leading-7">{companyCopy}</p>

        <TeamMember member={featured} featured />
        <Separator className="my-8" />
        <div className="grid gap-10 md:grid-cols-2">
          {rest.map((member) => (
            <TeamMember key={member.name} member={member} />
          ))}
        </div>
      </section>
    </AboutShell>
  )
}
