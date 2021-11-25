import React, { createContext, ReactNode, useState } from 'react'

import axios from 'axios'

export type apiResponseType = {
  coord: {
    lon: number,
    lat: number
  },
  weather: [
    {
      id: any,
      main: string,
      description: string,
      icon: any
    }
  ],
  main: {
    temp: number,
    // eslint-disable-next-line camelcase
    feels_like: number
    // eslint-disable-next-line camelcase
    temp_min: number,
    // eslint-disable-next-line camelcase
    temp_max: number,
    pressure: number,
    humidity: number
  },
  visibility: number,
  wind: {
    speed: number,
    deg: number
  },
  clouds: {
    all: number
  },
  sys: {
    country: string,
  },
  timezone: number,
  name: string,
  cod: number
}

type weatherContextType = {
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  searchCity: () => Promise<{ data: apiResponseType; }>;
}

type weatherProviderProps = {
  children: ReactNode;
}

export const weatherContext = createContext({} as weatherContextType)

export function WeatherProvider (props: weatherProviderProps) {
  const [city, setCity] = useState('')

  async function searchCity () {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=pt_BR&appid=${import.meta.env.VITE_WEATHER_API}`

    const { data } = await axios.get<apiResponseType>(url)

    return {
      data: data
    }
  }

  return (
    <weatherContext.Provider value={{ city, setCity, searchCity }}>
      {props.children}
    </weatherContext.Provider>
  )
}
