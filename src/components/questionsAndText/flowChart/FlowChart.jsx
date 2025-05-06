import React, { useState } from "react";
import "./FlowChart.scss";

const FlowChart = () => {
  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");
  const [steps, setSteps] = useState([{ id: 1, content: "" }]);
  const [answers, setAnswers] = useState({});

  const handleStepChange = (index, value) => {
    const updated = [...steps];
    updated[index].content = value;
    setSteps(updated);
  };

  const addStep = () => {
    setSteps([...steps, { id: Date.now(), content: "" }]);
  };

  const removeStep = (index) => {
    const updated = steps.filter((_, i) => i !== index);
    setSteps(updated);
  };

  const handleAnswerChange = (stepIndex, blankIndex, value) => {
    setAnswers({ ...answers, [`${stepIndex}-${blankIndex}`]: value });
  };

  const extractAnswers = () => {
    return Object.values(answers).filter((val) => val.trim() !== "");
  };

  const renderWithInputs = (text, stepIndex) => {
    const parts = text.split("{{blank}}");
    return parts.map((part, i) => (
      <React.Fragment key={i}>
        <span>{part}</span>
        {i < parts.length - 1 && (
          <input
            type="text"
            className="flow-input"
            placeholder="Answer"
            onChange={(e) =>
              handleAnswerChange(stepIndex, i, e.target.value)
            }
          />
        )}
      </React.Fragment>
    ));
  };

  const handleSubmit = () => {
    console.log("Answers submitted:", answers);
    alert("Flow Chart submitted!");
  };

  return (
    <div className="cq-container">
      <h5>Flow Chart Completion</h5>

      <div className="form-group">
        <label>Title:</label>
        <input
          type="text"
          placeholder="Enter chart title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>About Test:</label>
        <textarea
          placeholder="Describe the test context or instructions..."
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        />
      </div>

      <div className="steps-section">
        <h4>Flow Chart Steps (Use <code>{'{{blank}}'}</code> for blanks)</h4>
        {steps.map((step, index) => (
          <div key={step.id} className="step-item">
            <textarea
              value={step.content}
              onChange={(e) => handleStepChange(index, e.target.value)}
              placeholder="Describe a step with blanks..."
            />
            {steps.length > 1 && (
              <button onClick={() => removeStep(index)} className="remove-step">
                ✕ Remove
              </button>
            )}
          </div>
        ))}
        <button onClick={addStep} className="add-step">
          + Add Step
        </button>
      </div>

      <hr />

      <div className="preview-section">
        <h4>Preview</h4>
        <p><strong>Title:</strong> {title}</p>
        <p><strong>About:</strong> {about}</p>
        {steps.map((step, index) => (
          <div key={step.id} className="flow-line">
            {renderWithInputs(step.content, index)}
          </div>
        ))}
      </div>

      <div className="answers-section">
        <h4>Repopulated Answer List</h4>
        <ul>
          {extractAnswers().map((ans, i) => (
            <li key={i}>{ans}</li>
          ))}
        </ul>
      </div>

      <button className="submit-btn" onClick={handleSubmit}>
        ✅ Submit
      </button>
    </div>
  );
};

export default FlowChart;
