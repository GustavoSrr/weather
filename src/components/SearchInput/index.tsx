import React, { FormEvent, useState } from 'react'

import { Button } from '../Button'
import { FaSearch } from 'react-icons/fa'

import { Container } from './styles'

export const SearchInput: React.FC = () => {
  const [city, setCity] = useState('')

  function handleOnSubmitForm (event: FormEvent) {
    event.preventDefault()

    console.log(city)
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
