import React, { useState } from "react";
import "./MatchingSentenceEndings.scss";

const MatchingSentenceEndings = () => {
  const [about, setAbout] = useState("");
  const [questions, setQuestions] = useState([""]);
  const [endings, setEndings] = useState([""]);
  const [matches, setMatches] = useState({});

  const addQuestion = () => setQuestions([...questions, ""]);
  const addEnding = () => setEndings([...endings, ""]);

  const updateQuestion = (i, value) => {
    const updated = [...questions];
    updated[i] = value;
    setQuestions(updated);
  };

  const updateEnding = (i, value) => {
    const updated = [...endings];
    updated[i] = value;
    setEndings(updated);
  };

  const handleMatchChange = (qIndex, value) => {
    setMatches({ ...matches, [qIndex]: value });
  };

  const handleSubmit = () => {
    console.log("Matches:", matches);
    alert("Submitted!");
  };

  return (
    <div className="cq-container">
      <h5>Matching Sentence Endings</h5>

      <div className="input-section">
        <label>About the Test:</label>
        <textarea
          value={about}
          onChange={(e) => setAbout(e.target.value)}
          placeholder="Describe the test..."
        />
      </div>


      <div className="input-section">
        <h4>Sentence Beginnings</h4>
        {questions.map((q, i) => (
          <div key={i} className="question-row">
            <input
              type="text"
              value={q}
              onChange={(e) => updateQuestion(i, e.target.value)}
              placeholder={`Sentence beginning ${i + 1}`}
            />
            <select
              value={matches[i] || ""}
              onChange={(e) => handleMatchChange(i, e.target.value)}
            >
              <option value="">Select ending</option>
              {endings.map((end, j) => (
                <option key={j} value={j}>
                  {end}
                </option>
              ))}
            </select>
          </div>
        ))}
        <button onClick={addQuestion}>+ Add Sentence Beginning</button>
      </div>

      <div className="input-section">
        <h4>Sentence Endings</h4>
        {endings.map((end, i) => (
          <input
            key={i}
            type="text"
            value={end}
            onChange={(e) => updateEnding(i, e.target.value)}
            placeholder={`Sentence ending ${i + 1}`}
          />
        ))}
        <button onClick={addEnding}>+ Add Sentence Ending</button>
      </div>

      <button className="submit-btn" onClick={handleSubmit}>
        ✅ Submit Matches
      </button>
    </div>
  );
};

export default MatchingSentenceEndings;
