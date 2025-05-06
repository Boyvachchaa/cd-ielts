import React, { useState } from "react";
import "./SummeryCompletionList.scss";

const ReadingSummary = () => {
  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");
  const [questionText, setQuestionText] = useState("");
  const [options, setOptions] = useState(["option one", "option two", "option three"]);
  const [answers, setAnswers] = useState({});

  const handleSelectChange = (index, value) => {
    setAnswers({ ...answers, [index]: value });
  };

  const renderQuestionWithBlanks = () => {
    const parts = questionText.split("{{blank}}");
    return parts.map((part, i) => (
      <React.Fragment key={i}>
        <span>{part}</span>
        {i < parts.length - 1 && (
          <select
            value={answers[i] || ""}
            onChange={(e) => handleSelectChange(i, e.target.value)}
          >
            <option value="">Select...</option>
            {options.map((opt, idx) => (
              <option key={idx} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        )}
      </React.Fragment>
    ));
  };

  const handleSubmit = () => {
    console.log("User Answers:", answers);
    alert("Answers submitted!");
  };

  return (
    <div className="mcq-container">
      <h5>Reading Summary (Select from list)</h5>

      <div className="form-group">
        <label>Title:</label>
        <input
          type="text"
          placeholder="Enter test title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>About Text:</label>
        <textarea
          placeholder="Short paragraph about the test"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>
          Question Text (use <code>{'{{blank}}'}</code> for blanks):
        </label>
        <textarea
          placeholder="Type your summary text here..."
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Answer Options (comma separated):</label>
        <input
          type="text"
          placeholder="option one, option two, ..."
          value={options.join(", ")}
          onChange={(e) =>
            setOptions(e.target.value.split(",").map((opt) => opt.trim()))
          }
        />
      </div>

      <hr />

      <div className="preview">
        <h4>Preview</h4>
        <p><strong>{title}</strong></p>
        <p>{about}</p>
        <div className="question-text">{renderQuestionWithBlanks()}</div>
      </div>

      <button onClick={handleSubmit}>✅ Submit</button>
    </div>
  );
};

export default ReadingSummary;