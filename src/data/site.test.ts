import { describe, expect, it } from 'vitest'
import { features } from '@/data/features'
import { faqs } from '@/data/faqs'
import { jobCategories } from '@/data/jobs'
import { aboutLinks, navLinks, offices } from '@/data/site'
import { team } from '@/data/team'

describe('site data', () => {
  it('has primary and about navigation links', () => {
    expect(navLinks.length).toBeGreaterThanOrEqual(6)
    expect(aboutLinks.map((link) => link.to)).toEqual(
      expect.arrayContaining(['/about', '/faqs', '/press', '/jobs']),
    )
  })

  it('exposes feature slides with images', () => {
    expect(features).toHaveLength(5)
    for (const feature of features) {
      expect(feature.title).toBeTruthy()
      expect(feature.image).toBeTruthy()
    }
  })

  it('has FAQ content for search', () => {
    expect(faqs.length).toBeGreaterThan(5)
    expect(faqs.every((item) => item.question && item.answer)).toBe(true)
  })

  it('lists offices and team members', () => {
    expect(offices).toHaveLength(2)
    expect(team.length).toBeGreaterThanOrEqual(2)
  })

  it('groups open roles by category', () => {
    expect(jobCategories.length).toBeGreaterThanOrEqual(3)
    expect(jobCategories.flatMap((category) => category.roles).length).toBeGreaterThan(0)
  })
})
