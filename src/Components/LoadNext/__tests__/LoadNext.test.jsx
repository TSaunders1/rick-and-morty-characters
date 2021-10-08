import React from "react"
import userEvent from "@testing-library/user-event"
import { render } from "@testing-library/react"
import LoadNext from "../LoadNext"

describe("LoadNext", () => {
  let handleLoadMoreMock
  beforeEach(() => {
    handleLoadMoreMock = jest.fn()
  })

  it("Given there is no more data and it has finished loading Then I see the count text", () => {
    const { getByText } = render(
      <LoadNext
        next={null}
        count={66}
        loading={false}
        handleLoadMore={handleLoadMoreMock}
      />
    )

    expect(getByText("That is all of the 66 results!")).toBeInTheDocument()
  })

  it("Given there is more data and it has finished loading Then I see the button", () => {
    const { getByTestId } = render(
      <LoadNext
        next={2}
        count={66}
        loading={false}
        handleLoadMore={handleLoadMoreMock}
      />
    )

    expect(getByTestId("load-next-button")).toBeInTheDocument()
  })

  it("Given there is no more data and it is loading Then I do not see the button", () => {
    const { getByText } = render(
      <LoadNext
        next={null}
        count={66}
        loading
        handleLoadMore={handleLoadMoreMock}
      />
    )

    expect(getByText("That is all of the 66 results!")).toBeInTheDocument()
  })

  it("Given there is more data and it has finished loading Then I see the button", () => {
    const { getByTestId } = render(
      <LoadNext
        next={2}
        count={66}
        loading={false}
        handleLoadMore={handleLoadMoreMock}
      />
    )
    userEvent.click(getByTestId("load-next-button"))

    expect(getByTestId("load-next-button")).toBeInTheDocument()
    expect(handleLoadMoreMock).toHaveBeenCalled()
  })
})
