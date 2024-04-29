import React from 'react';

function SearchResults({ cases }) {
  return (
    <div className="search-results">
      <h1>Top Matches Based on Your Input</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Race</th>
            <th>BMI Category</th>
            <th>Smoking</th>
            <th>Prenatal Visits</th>
            <th>Similarity Score</th>
          </tr>
        </thead>
        <tbody>
          {cases.map((caseItem, index) => (
            <tr key={index}>
              <td>{caseItem.race}</td>
              <td>{caseItem.bmi_category}</td>
              <td>{caseItem.smoking}</td>
              <td>{caseItem.prenatal_visits}</td>
              <td>{caseItem.similarity_score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SearchResults;
