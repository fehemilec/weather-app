import { useState } from "react"
import WeatherCard from "./components/WeatherCard"
import { fetchWeather } from "./api/api"

export default function App() {
  const [city, setCity] = useState("")
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)

  async function searchWeather() {
    setLoading(true)
    try {
      const data = await fetchWeather(city)
      setWeather(data.data)
    } catch (err) {
      alert("Error fetching weather")
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-6 text-gray-900 drop-shadow">Weather Dashboard</h1>

      <div className="flex gap-2 w-full max-w-md">
        <input
          className="flex-grow p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          onClick={searchWeather}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow"
        >
          {loading ? "Loading..." : "Search"}
        </button>
      </div>

      {weather && <WeatherCard weather={weather} />}
    </div>
  )
}