import React from "react"

const PastSearchesRow = ({ search, firePastSearch }) => {
  const prevSearchArray = search.split(" ")
  const prevSearchCharacterName = prevSearchArray[0]
  const prevSearchStatus = prevSearchArray[1]
  const prevSearchGender = prevSearchArray[2]
  const prevSearchSpecies = prevSearchArray[3]

  return (
    <tr>
      <td>{search}</td>
      <td>
        <button
          type="button"
          data-testid="past-search-button"
          onClick={() =>
            firePastSearch(
              prevSearchCharacterName,
              prevSearchStatus,
              prevSearchGender,
              prevSearchSpecies
            )
          }
        >
          Search Again!
        </button>
      </td>
    </tr>
  )
}

export default PastSearchesRow
