import requests

url = "https://api.weatherstack.com/current"

querystring = {"access_key":"914b77b8531f5b033f36fe96b26d86fa", "query":"New York"}

headers = {"Accept": "application/json"}

response = requests.get(url, headers=headers, params=querystring)

print(response.json())