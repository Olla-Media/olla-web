import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import type { TeamMember as TeamMemberType } from '@/data/team'
import { cn } from '@/lib/utils'

type TeamMemberProps = {
  member: TeamMemberType
  featured?: boolean
}

export function TeamMember({ member, featured = false }: TeamMemberProps) {
  const avatar = (
    <Avatar className={cn('rounded-2xl', featured ? 'size-36 md:size-40' : 'size-16')}>
      <AvatarImage src={member.image} alt={member.name} className="object-cover" />
      <AvatarFallback
        className={cn(
          'rounded-2xl bg-linear-to-br from-brand-teal to-brand-purple font-semibold text-white',
          featured ? 'text-2xl' : 'text-sm'
        )}
      >
        {member.initials}
      </AvatarFallback>
    </Avatar>
  )

  if (featured) {
    return (
      <article className="flex flex-col gap-6 sm:flex-row sm:items-start">
        {avatar}
        <div>
          <h3 className="font-heading text-xl font-semibold text-secondary-foreground">
            {member.name}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">{member.role}</p>
          <p className="mt-4 max-w-xl text-[15px] leading-7">{member.bio}</p>
        </div>
      </article>
    )
  }

  return (
    <article className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        {avatar}
        <div>
          <h3 className="font-heading font-semibold text-secondary-foreground">{member.name}</h3>
          <p className="text-sm text-muted-foreground">{member.role}</p>
        </div>
      </div>
      <p className="text-[14px] leading-6">{member.bio}</p>
    </article>
  )
}
