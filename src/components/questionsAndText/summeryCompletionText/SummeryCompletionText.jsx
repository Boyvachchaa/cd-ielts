import React, { useState } from "react";
import "./SummaryCompletion.scss";

const SummaryCompletion = () => {
  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");
  const [questionText, setQuestionText] = useState("");
  const [answers, setAnswers] = useState({});

  const handleAnswerChange = (key, value) => {
    setAnswers({ ...answers, [key]: value });
  };

  const renderWithInputs = (text) => {
    const parts = text.split("{{blank}}");
    return parts.map((part, i) => (
      <React.Fragment key={i}>
        <span>{part}</span>
        {i < parts.length - 1 && (
          <input
            type="text"
            className="summary-input"
            placeholder="Answer"
            onChange={(e) => handleAnswerChange(i, e.target.value)}
          />
        )}
      </React.Fragment>
    ));
  };

  const handleSubmit = () => {
    console.log("Answers:", answers);
    alert("Submitted successfully!");
  };

  return (
    <div className="cq-container">
      <h5>Summary Completion</h5>

      <div className="input-section">
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter summary title"
        />

        <label>About the test:</label>
        <textarea
          value={about}
          onChange={(e) => setAbout(e.target.value)}
          placeholder="Enter test info"
        />

        <label>
          Question Text (use <code>{'{{blank}}'}</code> for blanks):
        </label>

        <textarea
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
          placeholder="Enter full question text with {{blank}}"
          rows={6}
        />
      </div>

      <hr />

      <div className="preview-section">
        <h4>Preview</h4>
        <p><strong>{title}</strong></p>
        <p>{about}</p>
        <div className="preview-question">
          {renderWithInputs(questionText)}
        </div>
      </div>

      <button className="submit-btn" onClick={handleSubmit}>
        ✅ Submit Answers
      </button>
    </div>
  );
};

export default SummaryCompletion;
