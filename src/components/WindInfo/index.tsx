import React, { useEffect, useState } from 'react'
import { useWeather } from '../../hooks/useWeather'
import type { apiResponseType } from '../../contexts/weather'

import { FaInfo } from 'react-icons/fa'

import { Container, WindInformation, Title, Content } from './styles'

export const WindInfo: React.FC = () => {
  const { city, searchCity } = useWeather()
  const [cityInfo, setCityInfo] = useState({} as apiResponseType)

  useEffect(() => {
    async function effect () {
      const { data } = await searchCity()

      setCityInfo(data)
    }
    effect()
  }, [0, city])

  const convertSpeed = (speed: number) => {
    return Math.round(speed * 0.001 * 3600)
  }

  return (
    <Container>
      {
        cityInfo.main
          ? (
          <WindInformation>
            <Title>
              <div><FaInfo /></div> {cityInfo.name} hoje:
            </Title>
            <Content>
              <div>
                Sensação térmica: <span>{Math.round(cityInfo.main.feels_like)}°</span>
              </div>
              <hr />
              <div>
                Temperatura mín./max.: <span>{Math.round(cityInfo.main.temp_min)}°/{Math.round(cityInfo.main.temp_max)}°</span>
              </div>
              <hr />
              <div>
                Umidade: <span>{cityInfo.main.humidity}%</span>
              </div>
              <hr />
              <div>
                Pressão: <span>{cityInfo.main.pressure}mb</span>
              </div>
              <hr />
              <div>
                Vento: <span>{convertSpeed(cityInfo.wind.speed)}km/h</span>
              </div>
            </Content>
          </WindInformation>
            )
          : ''
      }
    </Container>
  )
}
