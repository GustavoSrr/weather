import { useContext } from 'react'
import { weatherContext } from '../contexts/weather'

export function useWeather () {
  const res = useContext(weatherContext)
  return res
}
