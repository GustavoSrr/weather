import React from 'react'
import ReactDOM from 'react-dom'
import { WeatherProvider } from './contexts/weather'

import { App } from './App'

ReactDOM.render(
  <React.StrictMode>
    <WeatherProvider>
      <App />
    </WeatherProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
