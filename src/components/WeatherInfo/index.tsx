import React, { useEffect, useState } from 'react'
import { useWeather } from '../../hooks/useWeather'

import type { apiResponseType } from '../../contexts/weather'

import {
  FaSun,
  FaCloudShowersHeavy,
  FaSmog,
  FaSnowflake,
  FaCompass,
  FaBolt,
  FaCloud,
  FaCloudSun,
  FaCloudMoon,
  FaMoon,
  FaCloudSunRain,
  FaCloudMoonRain
} from 'react-icons/fa'

import { Container, CityInformation, CityName, CityWeather } from './styles'

export const WeatherInfo: React.FC = () => {
  const { city, searchCity } = useWeather()
  const [cityInfo, setCityInfo] = useState({} as apiResponseType)

  useEffect(() => {
    async function effect () {
      const { data } = await searchCity()

      setCityInfo(data)
    }
    effect()
  }, [0, city])

  let WeatherSvg = FaSun
  if (cityInfo.weather && cityInfo.weather[0].icon === '50d') WeatherSvg = FaSmog
  if (cityInfo.weather && cityInfo.weather[0].icon === '50n') WeatherSvg = FaSmog

  if (cityInfo.weather && cityInfo.weather[0].icon === '13d') WeatherSvg = FaSnowflake
  if (cityInfo.weather && cityInfo.weather[0].icon === '13n') WeatherSvg = FaSnowflake

  if (cityInfo.weather && cityInfo.weather[0].icon === '11d') WeatherSvg = FaBolt
  if (cityInfo.weather && cityInfo.weather[0].icon === '11n') WeatherSvg = FaBolt

  if (cityInfo.weather && cityInfo.weather[0].icon === '10d') WeatherSvg = FaCloudSunRain
  if (cityInfo.weather && cityInfo.weather[0].icon === '10n') WeatherSvg = FaCloudMoonRain

  if (cityInfo.weather && cityInfo.weather[0].icon === '09d') WeatherSvg = FaCloudShowersHeavy
  if (cityInfo.weather && cityInfo.weather[0].icon === '09n') WeatherSvg = FaCloudShowersHeavy

  if (cityInfo.weather && cityInfo.weather[0].icon === '04d') WeatherSvg = FaCloud
  if (cityInfo.weather && cityInfo.weather[0].icon === '04n') WeatherSvg = FaCloud

  if (cityInfo.weather && cityInfo.weather[0].icon === '03d') WeatherSvg = FaCloud
  if (cityInfo.weather && cityInfo.weather[0].icon === '03n') WeatherSvg = FaCloud

  if (cityInfo.weather && cityInfo.weather[0].icon === '02d') WeatherSvg = FaCloudSun
  if (cityInfo.weather && cityInfo.weather[0].icon === '02n') WeatherSvg = FaCloudMoon

  if (cityInfo.weather && cityInfo.weather[0].icon === '01d') WeatherSvg = FaSun
  if (cityInfo.weather && cityInfo.weather[0].icon === '01n') WeatherSvg = FaMoon

  return (
    <Container>
      {
        cityInfo.main
          ? (
          <CityInformation>
            <CityName>
              <div><FaCompass /></div> {cityInfo.name}
            </CityName>
            <CityWeather>
              <div>
                <h2>{Math.round(cityInfo.main.temp)}°</h2>
                <p>{cityInfo.weather[0].description}</p>
              </div>
              <div id="WeatherIconDiv">
                <div>
                  <WeatherSvg />
                </div>
              </div>
            </CityWeather>
          </CityInformation>
            )
          : ''
      }
    </Container>
  )
}
