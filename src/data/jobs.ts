export type JobCategory = {
  title: string
  roles: string[]
}

export const jobsIntro =
  'Olla is hiring people who care about friendship at internet speed — Android, product, research, and the stories we tell about Moments and HepaSnap. If that sounds like you, write to us.'

export const jobCategories: JobCategory[] = [
  {
    title: 'Software Engineering',
    roles: ['Software Engineering, Infrastructure', 'Software Engineering, Mobile'],
  },
  {
    title: 'Design & User Experience',
    roles: ['Product Researcher, Olla', 'Research Manager, Olla Moments'],
  },
  {
    title: 'Marketing, Sales & Marketing',
    roles: [
      'Olla Marketing Manager',
      'Product Marketing Manager, Monetization',
      'Marketing Content Associate',
    ],
  },
]
