import React, { FormEvent } from 'react'

import { Button } from '../Button'
import { FaSearch } from 'react-icons/fa'

import { Container } from './styles'
import { useWeather } from '../../hooks/useWeather'

export const SearchInput: React.FC = () => {
  const { city, setCity, searchCity } = useWeather()

  function handleOnSubmitForm (event: FormEvent) {
    event.preventDefault()

    if (!city) return

    searchCity(city)
  }

  return (
    <Container>
      <form onSubmit={handleOnSubmitForm}>
        <input
          type="search"
          required
          placeholder="Cidade"
          onChange={event => setCity(event.target.value)}
        />
        <Button type="submit">
          <FaSearch size={15}/>
        </Button>
      </form>
    </Container>
  )
}
