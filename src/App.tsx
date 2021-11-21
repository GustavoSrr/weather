import React from 'react'

import { Header } from './components/Header'
import { SearchInput } from './components/SearchInput'

import { Globals } from './styles/globals'

export const App: React.FC = () => {
  return (
    <div className="App">
      <Globals />
      <Header />
      <SearchInput />
    </div>
  )
}
