import React from 'react'

import { Header } from './components/Header'
import { SearchInput } from './components/SearchInput'
import { WeatherInfo } from './components/WeatherInfo'
import { WindInfo } from './components/WindInfo'

import { useWeather } from './hooks/useWeather'

import { Globals } from './styles/globals'
import { InfoContainer } from './styles/app'

export const App: React.FC = () => {
  const { city } = useWeather()

  return (
    <div className="App">
      <Globals />
      <Header />
      <SearchInput />
      {
        city
          ? (
            <InfoContainer>
              <WeatherInfo />
              <WindInfo />
            </InfoContainer>
            )
          : ''
      }
    </div>
  )
}
