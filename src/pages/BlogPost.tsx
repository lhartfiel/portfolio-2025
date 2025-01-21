// import { BlogContext } from './Blog'
import { useParams } from 'react-router'
import { useQuery } from '@apollo/client/index.js'
import { BLOGPOST_QUERY } from '../queries'
import parse from 'html-react-parser'

const BlogPost = () => {
  const { slug } = useParams()
  const { loading, error, data } = useQuery(BLOGPOST_QUERY, {
    variables: { slug },
    fetchPolicy: 'cache-and-network', // Use cache first but fetch new data in the background
  })

  const blogPost = data?.blogBySlug

  if (loading) return 'Loading...'
  if (error) return <pre>{error.message}</pre>
  return (
    <>
      {data && (
        <>
          {blogPost?.title && <h1>{blogPost.title}</h1>}
          {blogPost?.createdAt && <h1>{blogPost.createdAt}</h1>}
          {blogPost?.content && parse(blogPost.content)}
        </>
      )}
    </>
  )
}

export default BlogPost
