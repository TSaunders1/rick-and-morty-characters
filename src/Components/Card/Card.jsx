import React from "react"
import {
  CardStyles,
  ImageWrapperStyles,
  CardBodyStyles,
  CardImageStyles,
} from "./Card.styles"

const Card = ({ id, character }) => {
  const { image, name, status, species, gender, origin, episode } = character
  return (
    <CardStyles>
      <ImageWrapperStyles>
        <CardImageStyles data-testid="card-image" src={image} alt={name} />
      </ImageWrapperStyles>
      <CardBodyStyles>
        <h2>
          <span>{`${id}: ${name}`}</span>
        </h2>
        <p>{`Status: ${status}`}</p>
        <p>{`Species: ${species}`}</p>
        <p>{`Gender: ${gender}`}</p>
        <p>{`Origin: ${origin.name}`}</p>
        <p>{`First Seen in: ${character?.episode[0].name} ${episode[0].episode}`}</p>
        <p>{`Last Seen in: ${episode[episode.length - 1].name} ${
          episode[episode.length - 1].episode
        }`}</p>
      </CardBodyStyles>
    </CardStyles>
  )
}

export default Card
