
from flask import Flask, render_template, request, jsonify
import pandas as pd

app = Flask(__name__)

# Assuming your dataset is properly formatted and located in the same directory as this script
df = pd.read_csv('Melanin_Rx_Final_Dataset.csv')

# Function to calculate race score
def calculate_race_score(record_race, user_race):
    return 1 if record_race == user_race else 0.7

def calculate_bmi_similarity(user_bmi, record_bmi):
    # Define the order of BMI categories
    bmi_categories = [
        "Underweight <18.5",
        "Normal 18.5-24.9",
        "Overweight 25.0-29.9",
        "Obesity I 30.0-34.9",
        "Obesity II 35.0-39.9",
        "Extreme Obesity III > 39.9",
        "Unknown or Not Stated"
    ]
    
    # Handle cases where user or record BMI is unknown or not in list
    if user_bmi not in bmi_categories or record_bmi not in bmi_categories:
        return 0.1  # Return a default low score if either BMI is unknown or not in the list
    
    # Get indexes of user and record BMI in the categories list
    user_index = bmi_categories.index(user_bmi)
    record_index = bmi_categories.index(record_bmi)

    # Calculate the difference in indexes
    index_diff = abs(user_index - record_index)

    # Calculate similarity score based on the difference
    if index_diff == 0:
        return 1  # exact match
    elif index_diff == 1:
        return 0.8  # one category away
    else:
        # Further away, decrease score by 0.1 for each additional category
        return max(0.1, 0.8 - (index_diff - 1) * 0.1)

def calculate_smoking_similarity(user_input, record_value):
    # Define your numeric ranges
    smoking_ranges = [(0, 0), (1, 5), (6, 10), (11, 15), (16, 45)]
    
    # Handle non-numeric special cases upfront
    if user_input == "Unknown or Not Stated" or record_value == "Unknown or Not Stated" or record_value is None:
        return 0.1

    # Attempt to convert record_value to an integer for comparison
    try:
        record_value_int = int(record_value)
    except ValueError:
        # If conversion fails, return a default low similarity score
        return 0.1

    # Now safely use record_value_int in your comparison
    # Find the range index for the record value
    record_range_index = next(
        (index for index, (start, end) in enumerate(smoking_ranges) if start <= record_value_int <= end),
        -1
    )

    # Convert user input to a range index
    user_range_index = {
        "0": 0,
        "1-5": 1,
        "6-10": 2,
        "11-15": 3,
        "16-45":4,
    }.get(user_input, -1)  # Default to -1 if not found

    # Proceed with the rest of your logic as before
    if user_range_index == -1 or record_range_index == -1:
        # If we couldn't find a proper range, return a default low score
        return 0.1

    if user_range_index == record_range_index:
        return 1  # Exact match in range

    # Calculate the difference in indices to adjust the similarity score
    index_diff = abs(user_range_index - record_range_index)
    # Adjust the similarity score based on the difference in indices
    return max(0.1, 1 - index_diff * 0.25)



def calculate_prenatal_similarity(user_input, record_value):
    prenatal_ranges = [
        (0, 0), (1, 5), (6, 10), (11, 15), (16, 20),
        (21, 25), (26, 30), (31, 35), (36, 40),
        (41, 45), (46, 50)
    ]

    if user_input == "Unknown or Not Stated" or record_value == "Unknown or Not Stated" or record_value is None:
        return 0.1

    try:
        record_value_int = int(record_value)
    except (ValueError, TypeError):
        return 0.1

    user_range_index = {
        "0": 0, "1-5": 1, "6-10": 2, "11-15": 3, "16-20": 4,
        "21-25": 5, "26-30": 6, "31-35": 7, "36-40": 8,
        "41-45": 9, "46-50": 10
    }.get(user_input, -1)

    record_range_index = next(
        (index for index, (start, end) in enumerate(prenatal_ranges) if start <= record_value_int <= end),
        -1
    )

    if user_range_index == -1 or record_range_index == -1:
        return 0.1

    if user_range_index == record_range_index:
        return 1

    index_diff = abs(user_range_index - record_range_index)
    return max(0.1, 1 - index_diff * 0.09)



# Main function to get top 5 scores
def get_top_matches(df, user_input):
    scores = []

    for index, row in df.iterrows():
        race_score = calculate_race_score(row["Mother's Single/Multi Race 31"], user_input["race"])
        bmi_score = calculate_bmi_similarity(row["Mother's Pre-pregnancy BMI"], user_input["bmi"])
        smoking_score = calculate_smoking_similarity(row["Number of Cigarettes Before Pregnancy"], user_input["smoking"])
        prenatal_score = calculate_prenatal_similarity(row["Number of Prenatal Visits"], user_input["prenatal"])

        # Aggregate the scores (simple average used here, adjust as needed)
        total_score = (race_score + bmi_score + smoking_score + prenatal_score) / 4
        scores.append((index, total_score))

    # Sort by score in descending order and get the top 5 matches
    top_matches = sorted(scores, key=lambda x: x[1], reverse=True)[:20]
    
    # Retrieve the rows for the top matches based on the indices
    indices = [index for index, score in top_matches]
    top_matches_df = df.loc[indices]

    # Append the similarity score to the DataFrame
    for i, (index, score) in enumerate(top_matches):
        top_matches_df.loc[index, 'total_score'] = score

    # Return the DataFrame with the similarity scores included
    return top_matches_df


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/search', methods=['POST'])
def search():
    # Extract form data
    user_input = {
        "race": request.form.get("Mother's Single/Multi Race 31"),
        "bmi": request.form.get("Mother's Pre-pregnancy BMI"),
        "smoking": request.form.get("Number of Cigarettes Before Pregnancy"),
        "prenatal": request.form.get("Number of Prenatal Visits")
    }

    # Debugging line to print user input to the console
    print(f"User Input: {user_input}")

    # Get top matches
    top_matches = get_top_matches(df, user_input)

    # Debugging line to print top matches to the console
    print(f"Top Matches: {top_matches}")

    # Check if there are any top matches found
    if not top_matches.empty:
        # Convert DataFrame to list of dictionaries
        similar_cases = top_matches.to_dict('records')

        # Debugging line to print similar cases to the console
        print(f"Similar Cases: {similar_cases}")

        # Render results with the similar cases
        return render_template('results.html', cases=similar_cases)
    else:
        # If no matches are found, pass an empty list
        print("No matches found.")
        return render_template('results.html', cases=[])



if __name__ == '__main__':
    app.run(debug=True)
