import React from "react"
import Card from "../Card/Card"
import CardListStyles from "./CardList.styles"

const CardList = ({ characters }) => (
  <CardListStyles>
    {characters.map((character, idx) => (
      <Card key={character.id} id={idx + 1} character={character} />
    ))}
  </CardListStyles>
)

export default CardList
