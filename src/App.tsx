import React from 'react'

import { Header } from './components/Header'
import { SearchInput } from './components/SearchInput'
import { WeatherInfo } from './components/WeatherInfo'

import { useWeather } from './hooks/useWeather'

import { Globals } from './styles/globals'

export const App: React.FC = () => {
  const { city } = useWeather()

  return (
    <div className="App">
      <Globals />
      <Header />
      <SearchInput />
      {
        city ? <WeatherInfo /> : ''
      }
    </div>
  )
}
