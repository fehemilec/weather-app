import { WiHumidity, WiStrongWind, WiDaySunny } from "react-icons/wi"
import { FaSun } from "react-icons/fa"

export default function WeatherCard({ weather }) {
  const current = weather.current
  const location = weather.location

  return (
    <div className="max-w-sm mx-auto bg-white/30 backdrop-blur-md rounded-2xl shadow-lg p-6 mt-6 border border-white/20">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">{location.name}, {location.country}</h2>
          <p className="text-gray-700 mt-1">{current.weather_descriptions[0]}</p>
        </div>
        <img src={current.weather_icons[0]} alt="weather icon" className="w-20 h-20"/>
      </div>

      <h3 className="text-5xl font-bold mt-4">{current.temperature}°C</h3>

      <div className="grid grid-cols-2 gap-4 mt-6 text-gray-700">
        <p className="flex items-center gap-2"><WiHumidity className="text-blue-500"/> {current.humidity}%</p>
        <p className="flex items-center gap-2"><WiStrongWind className="text-green-500"/> {current.wind_speed} km/h</p>
        <p className="flex items-center gap-2"><FaSun className="text-yellow-400"/> UV: {current.uv_index}</p>
        <p className="flex items-center gap-2"><WiDaySunny className="text-orange-400"/> Visibility: {current.visibility} km</p>
      </div>
    </div>
  )
}