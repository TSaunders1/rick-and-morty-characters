import React from "react"
import PastSearchesRow from "../PastSearchesRow/PastSearchesRow"
import StyledTableDiv from "./PastSearches.styles"

const PastSearches = ({ pastSearches, firePastSearch }) => {
  if (!pastSearches?.length) return null

  return (
    <StyledTableDiv>
      <table>
        <thead>
          <tr>
            <th>Past Searches</th>
            <th>
              <button
                type="button"
                onClick={() => {
                  window.location.reload()
                }}
              >
                Clear Searches
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {pastSearches.map((search) => (
            <PastSearchesRow search={search} firePastSearch={firePastSearch} />
          ))}
        </tbody>
      </table>
    </StyledTableDiv>
  )
}

export default PastSearches
