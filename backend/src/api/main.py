from fastapi import FastAPI
import logging
from src.redis.redis_cache import get_weather, set_weather
from src.service.weather_service import fetch_weather
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/weather")
async def weather(city: str):

    print("City: ", city)

    cached = get_weather(city)

    if cached:
        print("Data is cached")
        return {
            "source": "redis",
            "data": cached
        }
    
    print("Fetching data from api")

    data = await fetch_weather(city)

    set_weather(city, data)

    return {
        "source": "api",
        "data": data
    }