import React from 'react'

import { Header } from './components/Header'
import { SearchInput } from './components/SearchInput'
import { WeatherProvider } from './contexts/weather'

import { Globals } from './styles/globals'

export const App: React.FC = () => {
  return (
    <WeatherProvider>
      <div className="App">
        <Globals />
        <Header />
        <SearchInput />
      </div>
    </WeatherProvider>
  )
}
