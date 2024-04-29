from nltk.tokenize import word_tokenize, sent_tokenize
import re
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer
from sklearn.feature_extraction.text import TfidfVectorizer
import pandas as pd
from wordcloud import WordCloud
import matplotlib.pyplot as plt
import json

# Initialize an empty string to hold the combined text
texts = []

# Loop through the range of file numbers
for i in range(1, 16):  # 16 because range() is exclusive of the stop value
    # Construct each file name based on the current number in the loop
    file_name = f'extracted_text_{i}.txt'
    
    # Use a try-except block to gracefully handle any errors (e.g., if a file doesn't exist)
    try:
        # Open and read each file
        with open(file_name, 'r', encoding='utf-8') as file:
            texts.append(file.read())
    except FileNotFoundError:
        print(f"File not found: {file_name}")
        continue  # Skip to the next file

# Preprocess each document
preprocessed_texts = []
for text in texts:
    # Tokenize, clean, and preprocess text here
    words = word_tokenize(text.lower())  # Normalize to lowercase
    filtered_words = [word for word in words if word not in stopwords.words('english') and word.isalpha()]  # Remove stopwords and non-alpha characters
    lemmatizer = WordNetLemmatizer()
    lemmatized_text = [lemmatizer.lemmatize(word) for word in filtered_words]
    filtered_words = [w for w in lemmatized_text if w not in ["woman", "black", "health", "study"]]
    preprocessed_texts.append(' '.join(filtered_words))

# Now use TfidfVectorizer on the preprocessed_texts list
vectorizer = TfidfVectorizer()
X = vectorizer.fit_transform(preprocessed_texts)  # This is now correct

# Proceed with your analysis...
# For example, printing top keywords from the first document
feature_names = vectorizer.get_feature_names_out()
dense = X.todense()
denselist = dense.tolist()
df = pd.DataFrame(denselist, columns=feature_names)
sortlist = df.iloc[0].sort_values(ascending=False).head(10) 

# Combine all rows (documents) in the DataFrame to get aggregate TF-IDF scores for each word
word_scores = df.sum(axis=0).to_dict()

with open('word_scores.json', 'w') as f:
    json.dump(word_scores, f)