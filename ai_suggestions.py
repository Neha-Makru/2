from flask import Flask, request, jsonify, render_template
import joblib

app = Flask(__name__)

# Load the trained model
model = joblib.load('career_model.pkl')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/career_test')
def career_test():
    return render_template('career_test.html')

@app.route('/submit_test', methods=['POST'])
def submit_test():
    # Retrieve form data (Handle checkbox inputs)
    skills = request.form.getlist('skills')  # Get multiple selected skills
    interests = request.form.getlist('interests')  # Get multiple selected interests
    work_environment = request.form['work_environment']  # Single select
    career_goals = request.form['career_goals']  # Open text
    strengths = request.form.getlist('strengths')  # Multiple selected strengths
    motivation = request.form['motivation']  # Single select
    values = request.form.getlist('values')  # Multiple selected values

    # Combine all the answers into a list to pass to the model
    features = [skills, interests, work_environment, career_goals, strengths, motivation, values]

    # Predict career suggestion using the AI model (this is a placeholder; adjust based on actual model logic)
    prediction = model.predict([features])

    # Render the result page with the prediction
    return render_template('career_suggestions.html', suggestion=prediction[0])

if __name__ == '__main__':
    app.run(debug=True)

