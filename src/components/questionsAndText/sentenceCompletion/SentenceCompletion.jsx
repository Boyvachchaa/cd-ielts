import React, { useState } from "react";
import "./SentenceCompletion.scss";

const SentenceCompletion = () => {
  const [about, setAbout] = useState("");
  const [questions, setQuestions] = useState([{ id: 1, content: "" }]);
  const [answers, setAnswers] = useState({});

  const handleQuestionChange = (index, value) => {
    const updated = [...questions];
    updated[index].content = value;
    setQuestions(updated);
  };

  const handleAddQuestion = () => {
    setQuestions([...questions, { id: Date.now(), content: "" }]);
  };

  const handleRemoveQuestion = (index) => {
    const updated = questions.filter((_, i) => i !== index);
    setQuestions(updated);
  };

  const handleAnswerChange = (qIndex, blankIndex, value) => {
    setAnswers({ ...answers, [`${qIndex}-${blankIndex}`]: value });
  };

  const renderSentenceWithInputs = (text, qIndex) => {
    const parts = text.split("{{blank}}");
    return parts.map((part, i) => (
      <React.Fragment key={i}>
        <span>{part}</span>
        {i < parts.length - 1 && (
          <input
            type="text"
            className="sentence-input"
            placeholder="Answer"
            onChange={(e) =>
              handleAnswerChange(qIndex, i, e.target.value)
            }
          />
        )}
      </React.Fragment>
    ));
  };

  const handleSubmit = () => {
    console.log("Collected Answers:", answers);
    alert("Answers submitted!");
  };

  return (
    <div className="cq-container">
      <h5>Sentence Completion</h5>

      <div className="form-group">
        <label>About Test:</label>
        <textarea
          placeholder="Enter description or context for the test..."
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        />
      </div>

      <div className="form-group">
        <h4>Questions (Use <code>{'{{blank}}'}</code> for blanks)</h4>
        {questions.map((q, index) => (
          <div key={q.id} className="question-item">
            <textarea
              placeholder="Write your sentence here..."
              value={q.content}
              onChange={(e) =>
                handleQuestionChange(index, e.target.value)
              }
            />
            {questions.length > 1 && (
              <button
                className="remove-btn"
                onClick={() => handleRemoveQuestion(index)}
              >
                ✕ Remove
              </button>
            )}
          </div>
        ))}
        <button className="add-btn" onClick={handleAddQuestion}>
          + Add Sentence
        </button>
      </div>

      <hr />

      <div className="preview">
        <h4>Preview</h4>
        <p><strong>About:</strong> {about}</p>
        {questions.map((q, index) => (
          <div key={q.id} className="sentence-line">
            {renderSentenceWithInputs(q.content, index)}
          </div>
        ))}
      </div>

      <button className="submit-btn" onClick={handleSubmit}>
        ✅ Submit Answers
      </button>
    </div>
  );
};

export default SentenceCompletion;
