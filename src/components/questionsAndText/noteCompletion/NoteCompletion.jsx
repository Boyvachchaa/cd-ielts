import React, { useState } from "react";
import "./NoteCompletion.scss";

const NoteCompletion = () => {
  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState([{ id: 1, content: "" }]);
  const [answers, setAnswers] = useState({});

  const handleQuestionChange = (index, value) => {
    const updated = [...questions];
    updated[index].content = value;
    setQuestions(updated);
  };

  const addQuestion = () => {
    setQuestions([...questions, { id: Date.now(), content: "" }]);
  };

  const removeQuestion = (id) => {
    const filtered = questions.filter((q) => q.id !== id);
    setQuestions(filtered);
  };

  const handleAnswerChange = (key, value) => {
    setAnswers({ ...answers, [key]: value });
  };

  const renderWithInputs = (text, qIndex) => {
    const parts = text.split("{{blank}}");
    return parts.map((part, i) => (
      <React.Fragment key={i}>
        <span>{part}</span>
        {i < parts.length - 1 && (
          <input
            type="text"
            className="note-input"
            onChange={(e) =>
              handleAnswerChange(`${qIndex}-${i}`, e.target.value)
            }
            placeholder="Answer"
          />
        )}
      </React.Fragment>
    ));
  };

  const handleSubmit = () => {
    console.log("Answers:", answers);
    alert("Submitted!");
  };

  return (
    <div className="cq-container">
      <h5>Note Completion</h5>

      <div className="title-input">
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter question title"
        />
      </div>

      <div className="questions-input">
        <h4>
          Questions (Use <code>{'{'}{'{'}blank{'}'}{'}'}</code> to insert blanks)
        </h4>

        {questions.map((q, index) => (
          <div key={q.id} className="question-row">
            <textarea
              value={q.content}
              onChange={(e) => handleQuestionChange(index, e.target.value)}
              placeholder="Type your question. Use {{blank}} for inputs."
            />
            {questions.length > 1 && (
              <button
                className="remove-question"
                onClick={() => removeQuestion(q.id)}
              >
                ✕
              </button>
            )}
          </div>
        ))}

        <button onClick={addQuestion}>+ Add Question</button>
      </div>

      <hr />

      <div className="preview">
        <h4>Preview</h4>
        {questions.map((q, index) => (
          <div key={q.id} className="note-line">
            {renderWithInputs(q.content, index)}
          </div>
        ))}
      </div>

      <button className="submit-btn" onClick={handleSubmit}>
        ✅ Submit Answers
      </button>
    </div>
  );
};

export default NoteCompletion;
