export async function fetchWeather(city) {

    console.log("Fetching weather for:", city)
  
    const response = await fetch(
      `http://localhost:8000/weather?city=${city}`
    )
  
    console.log("Response:", response)
  
    if (!response.ok) {
      throw new Error("Request failed")
    }
  
    const data = await response.json()
  
    console.log("Data:", data)
  
    return data
  }