from flask import Flask, jsonify
import logging
from flask_cors import CORS  # Import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

@app.route('/speak', methods=['GET'])
def speak():
    logger.info("Received a request to /speak endpoint")
    
    # This is where you'll integrate the text-to-speech model in the future
    # For now, we'll just return a message indicating the API works
    
    response_message = "API works! Text-to-speech functionality will be added here."
    
    logger.info(f"Responding with: {response_message}")
    
    return jsonify({
        "status": "success",
        "message": response_message
    })

if __name__ == '__main__':
    logger.info("Starting the Flask application")
    # Comment out the next line if you're deploying to a production environment
    app.run(debug=True, host='0.0.0.0', port=5001)
    # For production, you might use:
    # app.run(host='0.0.0.0', port=5001)