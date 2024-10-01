from flask import Flask, request, jsonify
from pymongo import MongoClient
import os

app = Flask(__name__)

# MongoDB connection
client = MongoClient("mongodb://localhost:27017/")
db = client['KerrInspi_database']
alumni_collection = db['Alumni']

UPLOAD_FOLDER = 'uploads'  # Folder to save uploaded files
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Ensure the upload folder exists
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route('/api/alumni_signup', methods=['POST'])
def alumni_signup():
    if 'proof' not in request.files:
        return jsonify({"message": "No proof of graduation uploaded."}), 400

    proof = request.files['proof']  # Get the file from the form
    filename = proof.filename
    file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
    
    proof.save(file_path)  # Save the file

    # Collect other form data
    data = {
        "name": request.form['name'],
        "email": request.form['email'],
        "institution": request.form['institution'],
        "domain": request.form['domain'],
        "graduationYear": request.form['graduationYear'],
        "proof": filename  # You can also store the file path or any identifier
    }

    alumni_collection.insert_one(data)  # Save to MongoDB
    return jsonify({"message": "Alumni registered successfully!"}), 201

if __name__ == '__main__':
    app.run(debug=True)
