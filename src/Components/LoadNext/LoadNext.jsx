import React from "react"
import { StyledLoadNextButton, StyledCount } from "./LoadNext.styles"

const LoadNext = ({ next, count, handleLoadMore }) => (
  <div>
    {next === null ? (
      <StyledCount>{`That is all of the ${count} results!`}</StyledCount>
    ) : (
      <StyledLoadNextButton
        onClick={handleLoadMore}
        data-testid="load-next-button"
      >
        Load Next
      </StyledLoadNextButton>
    )}
  </div>
)

export default LoadNext
