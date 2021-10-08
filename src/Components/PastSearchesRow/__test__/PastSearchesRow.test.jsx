import React from "react"
import userEvent from "@testing-library/user-event"
import { render } from "@testing-library/react"
import PastSearchesRow from "../PastSearchesRow"

describe("PastSearchesRow", () => {
  let firePastSearchMock
  let mockSearch
  beforeEach(() => {
    mockSearch = "rick dead male human"
    firePastSearchMock = jest.fn()
  })

  it("Given search props Then it renders the row", () => {
    const { getByText } = render(
      <PastSearchesRow
        search={mockSearch}
        firePastSearch={firePastSearchMock}
      />
    )

    expect(getByText(mockSearch)).toBeInTheDocument()
  })

  it("Given I click the button Then it calls firePastSearch", () => {
    const { getByText, getByTestId } = render(
      <PastSearchesRow
        search={mockSearch}
        firePastSearch={firePastSearchMock}
      />
    )

    userEvent.click(getByTestId("past-search-button"))

    expect(getByText(mockSearch)).toBeInTheDocument()
    expect(firePastSearchMock).toBeCalledWith("rick", "dead", "male", "human")
  })
})
