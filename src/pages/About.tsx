import { useQuery } from '@apollo/client/index.js'
import { ABOUT_QUERY } from '../queries'
import { ReactNode } from 'react'

type Interest = {
  description: ReactNode
  heading: string
  icon: string
  name: string
  popover: string
}

const About = () => {
  const { loading, error, data } = useQuery(ABOUT_QUERY)
  const interests = data?.allInterests

  if (loading) return 'Loading...'
  if (error) return <pre>{error.message}</pre>

  return (
    <div>
      <h1>About Page</h1>
      {interests.map((interest: Interest) => {
        return (
          <div key={interest.name}>
            <h1>{interest.name}</h1>
            {interest?.description}
          </div>
        )
      })}
    </div>
  )
}

export default About
