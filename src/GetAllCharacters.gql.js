import { gql } from "@apollo/client"

const GET_ALL_CHARACTERS = gql`
  query GetAllCharacters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        count
        pages
        next
        prev
      }
      results {
        name
        id
        image
        species
        status
        gender
        origin {
          name
        }
        episode {
          name
          episode
        }
      }
    }
  }
`

export default GET_ALL_CHARACTERS
