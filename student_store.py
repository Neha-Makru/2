from flask import Flask, request, jsonify
from pymongo import MongoClient

app = Flask(__name__)

# MongoDB connection
client = MongoClient("mongodb://localhost:27017/")
db = client['KerrInspi_database']  # Replace with your database name
collection = db['Student']  # Replace with your collection name

@app.route('/api/signup', methods=['POST'])
def signup():
    data = request.get_json()
    
    # You might want to add validation here

    collection.insert_one(data)
    return jsonify({"message": "User registered successfully!"}), 201

if __name__ == '__main__':
    app.run(debug=True)
