export async function fetchWeather(city) {
  const response = await fetch(`http://localhost:8000/weather?city=${city}`)
  if (!response.ok) throw new Error("Request failed")
  const data = await response.json()
  return data
}