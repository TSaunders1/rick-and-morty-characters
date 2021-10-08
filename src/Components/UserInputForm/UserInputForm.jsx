import React from "react"
import {
  StyledSubmitButton,
  StyledFormLabel,
  StyledFormDiv,
  StyledSelect,
  StyledRow,
  LabelContainer,
  StyledInput,
  InputContainer,
} from "./UserInputForm.styles"

const UserInputForm = ({ handleSubmit, onSubmit, register }) => (
  <>
    <StyledFormDiv>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledRow>
          <LabelContainer>
            <StyledFormLabel>Name</StyledFormLabel>
          </LabelContainer>
          <InputContainer>
            <StyledInput
              type="search"
              placeholder="Character Name"
              name="characterName"
              {...register("characterName")}
            />
          </InputContainer>
        </StyledRow>
        <StyledRow>
          <LabelContainer>
            <StyledFormLabel>Status</StyledFormLabel>
          </LabelContainer>
          <InputContainer>
            <StyledSelect
              placeholder="Select status"
              name="status"
              {...register("status")}
            >
              <option value="">None</option>
              <option value="dead">Dead</option>
              <option value="alive">Alive</option>
              <option value="unknown">Unknown</option>
            </StyledSelect>
          </InputContainer>
        </StyledRow>
        <StyledRow>
          <LabelContainer>
            <StyledFormLabel>Gender</StyledFormLabel>
          </LabelContainer>
          <InputContainer>
            <StyledSelect
              placeholder="Select gender"
              name="gender"
              {...register("gender")}
            >
              <option value="">None</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="genderless">Genderless</option>
              <option value="unknown">Unknown</option>
            </StyledSelect>
          </InputContainer>
        </StyledRow>
        <StyledRow>
          <LabelContainer>
            <StyledFormLabel>Species</StyledFormLabel>
          </LabelContainer>
          <InputContainer>
            <StyledSelect
              placeholder="Select species"
              name="species"
              {...register("species")}
            >
              <option value="">None</option>
              <option value="human">Human</option>
              <option value="alien">Alien</option>
              <option value="humanoid">Humanoid</option>
              <option value="animal">Animal</option>
              <option value="mythological creature">
                Mythological Creature
              </option>
              <option value="robot">Robot</option>
              <option value="cronenberg">Cronenberg</option>
              <option value="poopybutthole">Poopybutthole</option>
              <option value="disease">Disease</option>
              <option value="planet">Planet</option>
            </StyledSelect>
          </InputContainer>
        </StyledRow>
        <StyledSubmitButton type="submit" value="Submit">
          Search
        </StyledSubmitButton>
      </form>
    </StyledFormDiv>
  </>
)

export default UserInputForm
