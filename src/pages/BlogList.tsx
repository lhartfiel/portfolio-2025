import { useQuery } from '@apollo/client/index.js'
import { BLOGPOSTS_QUERY } from '../queries'
import { ReactNode } from 'react'
import { NavLink } from 'react-router'

type BlogPost = {
  content: ReactNode
  createdAt: string
  image: string
  slug: string
  subtitle: string
  title: string
}

const BlogList = () => {
  const { loading, error, data } = useQuery(BLOGPOSTS_QUERY)
  const blogItems = data?.allBlogs

  if (loading) return 'Loading...'
  if (error) return <pre>{error.message}</pre>
  return (
    <div className='block'>
      <h1>Blog</h1>
      {blogItems.map((blog: BlogPost) => {
        return (
          <NavLink to={`/blog/${blog.slug}`} key={blog.slug} className='ml mb-4 block text-left'>
            <h2>{blog.title}</h2>
            <p>{blog.createdAt}</p>
          </NavLink>
        )
      })}
    </div>
  )
}

export default BlogList
