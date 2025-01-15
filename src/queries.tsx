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

export { ABOUT_QUERY }
