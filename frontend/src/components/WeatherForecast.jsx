import { useState, useEffect } from 'react'
import './WeatherForecast.css'

export default function WeatherForecast() {
  const [forecast, setForecast] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true)
        const response = await fetch('/api/weatherforecast')
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setForecast(data)
      } catch (error) {
        console.error('Error fetching weather:', error)
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchWeather()
  }, [])

  if (loading) {
    return <div className="weather-container"><p>Loading forecast...</p></div>
  }

  if (error) {
    return <div className="weather-container error"><p>Error: {error}</p></div>
  }

  return (
    <div className="weather-container">
      <h2>Weather Forecast</h2>
      {forecast.length === 0 ? (
        <p>No forecast data available</p>
      ) : (
        <div className="forecast-grid">
          {forecast.map((item, index) => (
            <div key={index} className="forecast-card">
              <p className="date">{new Date(item.date).toLocaleDateString()}</p>
              <p className="summary">{item.summary || 'N/A'}</p>
              <div className="temperatures">
                <span className="celsius">{item.temperatureC}°C</span>
                <span className="fahrenheit">{item.temperatureF}°F</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
