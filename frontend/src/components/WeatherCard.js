export default function WeatherCard({ weather }) {

  return (

    <div>

      <h2>
        {weather.location.name}, {weather.location.country}
      </h2>

      <img src={weather.current.weather_icons[0]} />

      <p>{weather.current.weather_descriptions[0]}</p>

      <h3>{weather.current.temperature}°C</h3>

      <p>Humidity: {weather.current.humidity}</p>
      <p>Wind: {weather.current.wind_speed}</p>

    </div>

  )
}