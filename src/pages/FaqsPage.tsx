import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { SearchIcon } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Empty, EmptyDescription, EmptyHeader, EmptyTitle } from '@/components/ui/empty'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/ui/input-group'
import { AboutShell, PageTitle } from '@/components/layout/Layout'
import { faqs } from '@/data/faqs'

export function FaqsPage() {
  const [query, setQuery] = useState('')

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase()
    if (!needle) return faqs
    return faqs.filter((item) => item.question.toLowerCase().includes(needle))
  }, [query])

  return (
    <AboutShell>
      <PageTitle>Olla FAQs</PageTitle>

      <InputGroup className="mb-6 h-11 max-w-xl rounded-full">
        <InputGroupAddon align="inline-start" className="pl-4">
          <SearchIcon />
        </InputGroupAddon>
        <InputGroupInput
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search Olla FAQ"
          aria-label="Search Olla FAQ"
          className="text-[15px]"
        />
      </InputGroup>

      {visible.length === 0 ? (
        <Empty>
          <EmptyHeader>
            <EmptyTitle>No matching questions</EmptyTitle>
            <EmptyDescription>
              Try a different search term, or head to the help page.
            </EmptyDescription>
          </EmptyHeader>
        </Empty>
      ) : (
        <Accordion>
          {visible.map((item) => (
            <AccordionItem key={item.id} value={item.id} className="not-last:border-b-0">
              <AccordionTrigger className="py-2.5 text-[15px] font-normal text-brand-link">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="max-w-2xl text-[14px] leading-6 text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}

      <p className="mt-10 text-[15px] text-muted-foreground italic">
        Can’t see your question here? See our{' '}
        <Link to="/help" className="text-brand-link not-italic hover:underline">
          help page
        </Link>{' '}
        to send us your question.
      </p>
    </AboutShell>
  )
}
