from pymongo import MongoClient

# Connect to MongoDB
client = MongoClient("mongodb://localhost:27017/")
db = client['KerrInspi_database']  # Use your database name
collection = db['AssessmentReports']  # Use your collection name

# Create a dummy entry
dummy_entry = {
    "name": "John Doe",
    "academicQualification": "Bachelor of Science in Computer Science",
    "studyTime": "40 hours per week",
    "subjectBreakup": {
        "Mathematics": "10 hours",
        "Computer Science": "15 hours",
        "Physics": "10 hours",
        "English": "5 hours"
    },
    "assessmentReports": {
        "totalMarks": 100,
        "aptitude": 85,
        "emotionalIntelligence": 78,
        "reasoning": 90,
        "technicalSkills": 88
    },
    "globalCareerInsights": "With a degree in Computer Science, John has opportunities in software development, data science, and IT management globally."
}

# Insert the dummy entry into the collection
collection.insert_one(dummy_entry)
