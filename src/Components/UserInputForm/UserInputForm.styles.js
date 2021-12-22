import styled from "styled-components"

export const StyledSubmitButton = styled.button`
  font-size: 1rem;
  text-decoration: none;
  background-color: green;
  color: white;
  padding: 0.5rem;
  border: black solid 1px;
  border-radius: 0.5rem;
  margin: 0.75rem;
  margin-left: 2.75rem;
  &:hover {
    cursor: pointer;
  }
`

export const StyledClearButton = styled.button`
  font-size: 1rem;
  text-decoration: none;
  background-color: red;
  color: white;
  padding: 0.5rem;
  border: black solid 1px;
  border-radius: 0.5rem;
  margin: 0.75rem;
  &:hover {
    cursor: pointer;
  }
`

export const StyledFormLabel = styled.label`
  display: inline-block;
`

export const LabelContainer = styled.div`
  float: left;
  width: 25%;
  margin-top: 6px;
`

export const StyledFormDiv = styled.div`
  margin: 1rem;
  display: flexbox;
  justify-content: center;
  form {
    padding: 0.5rem;
    margin: 0.75rem;
    border: black solid 1px;
    border-radius: 0.5rem;
  }
`

export const StyledSelect = styled.select`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
`

export const StyledInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
`

export const StyledRow = styled.div`
  after {
    content: "";
    display: table;
    clear: both;
  }
`

export const InputContainer = styled.div`
  float: left;
  width: 70%;
  margin-top: 6px;
`
