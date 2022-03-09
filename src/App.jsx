import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { useQuery } from "@apollo/client"
import GET_ALL_CHARACTERS from "./GetAllCharacters.gql"
import UserInputForm from "./Components/UserInputForm/UserInputForm"
import LoadNext from "./Components/LoadNext/LoadNext"
import { StyledTitle, StyledUserQuery, StyledCount } from "./App.styles"
import PastSearches from "./Components/PastSearches/PastSearches"
import Spinner from "./Components/Spinner/Spinner"
import CardList from "./Components/CardList/CardList"

function App() {
  const [pageNum, setPageNum] = useState(1)
  const [characterName, setCharacterName] = useState("")
  const [status, setStatus] = useState("")
  const [gender, setGender] = useState("")
  const [species, setSpecies] = useState("")
  const [displayedCharacters, setDisplayedCharacters] = useState([])
  const [userQuery, setUserQuery] = useState(false)
  const [pastSearches, setPastSearches] = useState([])

  const { loading, error, data } = useQuery(GET_ALL_CHARACTERS, {
    variables: {
      page: pageNum,
      filter: {
        name: characterName,
        gender,
        status,
        species,
      },
    },
    // The API returns just the first 20 characters from the search.
    // The next line concatenates the next responses to enable rendering
    // a list greater than 20 characters.
    onCompleted: ({ characters }) => {
      setDisplayedCharacters(displayedCharacters.concat(characters.results))
    },
  })

  const { register, handleSubmit, reset } = useForm()

  const onSubmit = (userChoice) => {
    // eslint-disable-next-line no-shadow
    const { characterName, gender, status, species } = userChoice
    if (!characterName && !status && !gender && !species) {
      reset()
    } else {
      setPastSearches([
        ...pastSearches,
        `${characterName} ${status} ${gender} ${species}`,
      ])
      setDisplayedCharacters([])
      setCharacterName(characterName)
      setStatus(status)
      setGender(gender)
      setSpecies(species)
      setPageNum(1)
      setUserQuery(true)
      reset()
    }
  }

  const clearSearch = () => {
    if (characterName === "" && status === "" && gender === "" && species === "") {
      reset()
    } else {
      setDisplayedCharacters([])
      setPageNum(1)
      setCharacterName("")
      setStatus("")
      setGender("")
      setSpecies("")
    }
  }

  const handleLoadMore = () => setPageNum((prev) => prev + 1)

  const firePastSearch = (
    pastSearchCharacterName,
    pastSearchStatus,
    pastSearchGender,
    pastSearchSpecies
  ) => {
    setDisplayedCharacters([])
    setPageNum(1)
    setCharacterName(pastSearchCharacterName)
    setStatus(pastSearchStatus)
    setGender(pastSearchGender)
    setSpecies(pastSearchSpecies)
  }
  return (
    <>
      <StyledTitle>Rick and Morty Charactopedia!</StyledTitle>
      <UserInputForm
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        register={register}
        clearSearch={clearSearch}
      />
      <PastSearches
        pastSearches={pastSearches}
        firePastSearch={firePastSearch}
      />
      {data?.characters.info.count > 0 && (
        <StyledCount>{`${data?.characters.info.count} Results:`}</StyledCount>
      )}
      {loading && <Spinner />}
      {error && (
        <StyledUserQuery>
          No results for the options you have selected. Please reselect to match
          characters!
        </StyledUserQuery>
      )}
      {userQuery && (
        <StyledUserQuery>{`You searched for ${characterName} ${status} ${gender} ${species}`}</StyledUserQuery>
      )}
      <CardList characters={displayedCharacters} />
      {!error && (
        <LoadNext
          next={data?.characters?.info?.next}
          count={data?.characters?.info?.count}
          loading={loading}
          handleLoadMore={handleLoadMore}
        />
      )}
    </>
  )
}

export default App
