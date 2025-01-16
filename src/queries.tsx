import { gql } from '@apollo/client/core'

const ABOUT_QUERY = gql`
  query GetAllInterests {
    allInterests {
      name
      icon
      heading
      description
      popover
    }
  }
`

const BLOGPOSTS_QUERY = gql`
  query GetAllBlogPosts {
    allBlogs {
      createdAt
      title
      image
      slug
    }
  }
`

const BLOGPOST_QUERY = gql`
  query GetBlogPost($slug: String) {
    blogBySlug(slug: $slug) {
      createdAt
      content
      title
      subtitle
      image
      slug
    }
  }
`

export { ABOUT_QUERY, BLOGPOSTS_QUERY, BLOGPOST_QUERY }
