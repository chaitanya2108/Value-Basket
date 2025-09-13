from flask import Flask, render_template, request, jsonify
import os
import requests
from dotenv import load_dotenv

# Load environment variables from .env
load_dotenv()

# Now define the API key
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")
if not GOOGLE_API_KEY:
    raise ValueError("GOOGLE_API_KEY not set. Please add it to your .env file.")

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/api/status')
def api_status():
    return jsonify({
        'status': 'success',
        'message': 'Flask app is running!',
        'version': '1.0.0'
    })

@app.route("/grocery_stores", methods=["GET"])
def grocery_stores():
    lat = request.args.get("lat")
    lng = request.args.get("lng")
    radius = request.args.get("radius", 2000)  # default 2 km

    if not lat or not lng:
        return jsonify({"error": "Please provide lat and lng"}), 400

    url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json"
    params = {
        "location": f"{lat},{lng}",
        "radius": radius,
        "type": "grocery_or_supermarket",
        "key": GOOGLE_API_KEY
    }

    response = requests.get(url, params=params)
    data = response.json()

    results = []
    for place in data.get("results", []):
        place_id = place.get("place_id")

        # Get place details to fetch website
        details_url = "https://maps.googleapis.com/maps/api/place/details/json"
        details_params = {
            "place_id": place_id,
            "fields": "website",
            "key": GOOGLE_API_KEY
        }
        details_response = requests.get(details_url, params=details_params)
        details_data = details_response.json()
        website = details_data.get("result", {}).get("website")

        results.append({
            "name": place.get("name"),
            "address": place.get("vicinity"),
            "lat": place["geometry"]["location"]["lat"],
            "lng": place["geometry"]["location"]["lng"],
            "website": website,
            "rating": place.get("rating")
        })

    return jsonify(results)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8000)
