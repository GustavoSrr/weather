import React, { FormEvent, useState } from 'react'

import { Button } from '../Button'
import { FaSearch } from 'react-icons/fa'

import { Container } from './styles'
import { useWeather } from '../../hooks/useWeather'

export const SearchInput: React.FC = () => {
  const { setCity } = useWeather()
  const [inputValue, setInputValue] = useState('')

  async function handleOnSubmitForm (event: FormEvent) {
    event.preventDefault()

    setCity(inputValue)
  }

  return (
    <Container>
      <form onSubmit={handleOnSubmitForm}>
        <input
          type="search"
          required
          placeholder="Cidade"
          onChange={event => setInputValue(event.target.value)}
        />
        <Button type="submit">
          <FaSearch size={15}/>
        </Button>
      </form>
    </Container>
  )
}
