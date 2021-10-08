import styled from "styled-components"

export const CardStyles = styled.div`
  width: 600px;
  min-height: 220px;
  display: flex;
  overflow: hidden;
  text-align: left;
  border: black solid 2px;
  border-radius: 0.5rem;
  margin: 0.75rem;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    width: 100%;
    img {
      align-content: center;
    }
  }
`

export const ImageWrapperStyles = styled.div`
  flex: 2 1 0%;
  width: 100%;
`

export const CardImageStyles = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  margin: 0px;
  opacity: 1;
  object-position: center center;
  object-fit: cover;
  @media screen and (max-width: 600px) {
    height: 150px;
    width: auto;
  }
`

export const CardBodyStyles = styled.div`
  flex: 3 1 0%;
  position: relative;
  padding-left: 0.75rem;
  padding-top: 0.5rem;
  padding-bottom: 0.75rem;
  display: flex;
  flex-direction: column;
  h2,
  p {
    margin: 0.25rem;
  }
`
