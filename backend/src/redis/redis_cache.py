import redis
import json
import os

redis_client = redis.Redis(
    host=os.getenv("REDIS_HOST", "redis"),
    port=6379,
    decode_responses=True
)

CACHE_TTL = 60000


def get_weather(city: str):
    data = redis_client.get(city.lower())
    if data:
        return json.loads(data)
    return None


def set_weather(city: str, data):
    redis_client.setex(city.lower(), CACHE_TTL, json.dumps(data))