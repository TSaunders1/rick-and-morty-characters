import React from "react"
import { render } from "@testing-library/react"
import Card from "../Card"

describe("Card", () => {
  it("Given character props Then it renders the card", () => {
    const mockCharacter = {
      name: "Rick Sanchez",
      id: "1",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      species: "Human",
      status: "Alive",
      gender: "Male",
      origin: {
        name: "Earth (C-137)",
      },
      episode: [
        {
          name: "Pilot",
          episode: "S01E01",
        },
        {
          name: "Star Mort: Rickturn of the Jerri",
          episode: "S04E10",
        },
      ],
    }
    const { getByTestId, getByText } = render(
      <Card id={1} character={mockCharacter} />
    )

    expect(getByTestId("card-image")).toBeInTheDocument()
    expect(getByText("1: Rick Sanchez")).toBeInTheDocument()
    expect(getByText("Status: Alive")).toBeInTheDocument()
    expect(getByText("Species: Human")).toBeInTheDocument()
    expect(getByText("Gender: Male")).toBeInTheDocument()
    expect(getByText("Origin: Earth (C-137)")).toBeInTheDocument()
    expect(getByText("First Seen in: Pilot S01E01")).toBeInTheDocument()
    expect(
      getByText("Last Seen in: Star Mort: Rickturn of the Jerri S04E10")
    ).toBeInTheDocument()
  })
})
