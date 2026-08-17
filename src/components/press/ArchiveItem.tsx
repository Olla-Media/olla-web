import { Button } from '@/components/ui/button'
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from '@/components/ui/item'
import type { PressPost } from '@/data/press'
import { DateBadge } from './DateBadge'

export function ArchiveItem({ post }: { post: PressPost }) {
  return (
    <Item className="items-start gap-5 px-0 py-6">
      <ItemMedia>
        <DateBadge day={post.day} month={post.month} year={post.year} />
      </ItemMedia>
      <ItemContent>
        <ItemTitle className="font-heading text-lg font-semibold text-secondary-foreground">
          {post.title}
        </ItemTitle>
        <ItemDescription className="line-clamp-none text-[14px] leading-6">
          {post.excerpt}
        </ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button size="sm" className="rounded-sm text-xs font-bold tracking-wider uppercase">
          Read
        </Button>
      </ItemActions>
    </Item>
  )
}
