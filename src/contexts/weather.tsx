import React, { createContext, ReactNode, useState } from 'react'

type weatherContextType = {
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  searchCity: (city: string) => Promise<void>;
}

type weatherProviderProps = {
  children: ReactNode;
}

export const weatherContext = createContext({} as weatherContextType)

export function WeatherProvider (props: weatherProviderProps) {
  const [city, setCity] = useState('')

  async function searchCity (city: string) {
    console.log(city)
  }

  return (
    <weatherContext.Provider value={{ city, setCity, searchCity }}>
      {props.children}
    </weatherContext.Provider>
  )
}
