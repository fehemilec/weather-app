import { useState } from "react"
import WeatherCard from "./components/WeatherCard"
import { fetchWeather } from "./api/api"

export default function App() {

  const [city, setCity] = useState("")
  const [weather, setWeather] = useState(null)

  async function searchWeather() {

    try {

      const data = await fetchWeather(city)

      setWeather(data.data)

    } catch (error) {

      console.error(error)

      alert("Error fetching weather")

    }

  }

  return (

    <div style={{ padding: "40px" }}>

      <h1>Weather App</h1>

      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />

      <button onClick={searchWeather}>
        Search
      </button>

      {weather && <WeatherCard weather={weather}/>}

    </div>

  )
}