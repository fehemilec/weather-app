# Weather App – README Description

## Overview
This Weather App provides real-time weather information for any city. Users can enter a city name and instantly get current weather conditions, including temperature, humidity, wind speed, UV index, visibility, and weather icons. The system is fully dockerized and built with a React frontend, FastAPI backend, and Redis caching layer. Redis prevents repeated external API calls by caching responses for a short period (e.g., 30 minutes).

## System Architecture
      +----------------+
      |     Frontend   |  React JS
      | (Browser / UI) |
      +--------+-------+
               |
               v
      +----------------+
      |   FastAPI API  |  Backend endpoint: /weather?city=<city>
      +--------+-------+
               |
        Check Redis Cache
               |
       +-------+--------+
       |                |
   Cache Hit         Cache Miss
       |                |
Return cached data   Call External Weather API
       |                |
       v                v
     Redis           Cache result in Redis
       |                |
       +----------------+
               |
             Response
## Components
### Frontend (React)
    - Simple user interface where users can enter a city name.
    - Displays weather data in a card format.
    - Makes API requests to the backend.
    - Dockerized and served on port 3000.

### Backend (FastAPI)
    - Provides a single endpoint: /weather?city=<city>.
    - Checks Redis cache for the city first.
    - If not cached, fetches data from the external weather API.
    - Stores the response in Redis for faster future access.
    - Handles CORS so the frontend can communicate freely.

### Redis Cache
    - Stores weather API responses for each city.
    - Avoids unnecessary API calls.
    - TTL (time-to-live) ensures data is refreshed periodically (e.g., every 30 minutes).

### External Weather API
    - Provides live weather data for cities worldwide.
    - Only called if Redis cache does not have recent data.

## Workflow
1. User types a city name in the frontend and clicks Search.
2. Frontend sends a request to the FastAPI backend.
3. Backend checks Redis:
    - If cached: returns data immediately.
    - If not cached: calls the external weather API, stores the response in Redis, and returns it to the frontend.
4. Frontend receives the response and displays the weather card.

## Features
- Real-time weather data for any city.
- Cached responses for faster performance and reduced API calls.
- Clean, responsive UI with weather icons.
- Fully dockerized for easy deployment.
- Supports multiple simultaneous users.

## Running the App
docker compose up --build  or just run bin/start
Frontend: http://localhost:3000
Backend: http://localhost:8000
Redis: localhost:6379 (internal, not usually accessed directly)