import os
import httpx


API_KEY = os.getenv("API_KEY")


async def fetch_weather(city: str):

    url = "http://api.weatherstack.com/current"

    params = {
        "access_key": API_KEY,
        "query": city
    }

    async with httpx.AsyncClient() as client:
        res = await client.get(url, params=params)
        return res.json()