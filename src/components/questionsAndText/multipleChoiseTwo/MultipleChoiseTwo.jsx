import { useState } from "react";
import './MultipleChoiseTwo.scss';

const MultipleChoiseTwo = () => {
  const [questions, setQuestions] = useState([
    { number: 1, text: "", options: [""], correctAnswer: [] },
  ]);
  const [error, setError] = useState("");

  const handleQuestionChange = (index, field, value) => {
    const updated = [...questions];
    updated[index][field] = value;
    setQuestions(updated);
  };

  const handleOptionChange = (qIndex, optIndex, value) => {
    const updated = [...questions];
    updated[qIndex].options[optIndex] = value;
    setQuestions(updated);
  };

  const handleCorrectAnswerChange = (qIndex, optIndex) => {
    const updated = [...questions];
    const currentAnswers = updated[qIndex].correctAnswer;

    if (currentAnswers.includes(optIndex)) {
      updated[qIndex].correctAnswer = currentAnswers.filter(i => i !== optIndex);
    } else {
      updated[qIndex].correctAnswer = [...currentAnswers, optIndex];
    }

    setQuestions(updated);
  };

  const addQuestion = () => {
    setQuestions([
      ...questions,
      { number: questions.length + 1, text: "", options: [""], correctAnswer: [] },
    ]);
  };

  const removeQuestion = (index) => {
    const updated = questions
      .filter((_, i) => i !== index)
      .map((q, i) => ({ ...q, number: i + 1 }));
    setQuestions(updated);
  };

  const addOption = (qIndex) => {
    const updated = [...questions];
    updated[qIndex].options.push("");
    setQuestions(updated);
  };

  const removeOption = (qIndex, optIndex) => {
    const updated = [...questions];
    if (updated[qIndex].options.length > 1) {
      updated[qIndex].options.splice(optIndex, 1);
      updated[qIndex].correctAnswer = updated[qIndex].correctAnswer
        .filter((i) => i !== optIndex)
        .map((i) => (i > optIndex ? i - 1 : i));
      setQuestions(updated);
    }
  };

  const validate = () => {
    for (const q of questions) {
      if (!q.text.trim()) {
        setError("Every question must have text.");
        return false;
      }
      for (const opt of q.options) {
        if (!opt.trim()) {
          setError("Every option must have text.");
          return false;
        }
      }
      if (!Array.isArray(q.correctAnswer) || q.correctAnswer.length < 2) {
        setError("Each question must have at least two correct answers.");
        return false;
      }
    }
    setError("");
    return true;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    try {
      const response = await fetch("https://your-backend-api.com/questions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(questions),
      });
      if (!response.ok) throw new Error("Submission failed");
      alert("Submitted successfully!");
    } catch (error) {
      alert("Submission failed");
    }
  };

  return (
    <div className="cq-container">
      <h5>Multiple Choice (2)</h5>
      {error && <div className="error">{error}</div>}

      {questions.map((q, qIndex) => (
        <div key={qIndex} className="question-block">
          <div className="question-header">
            <span>{q.number}.</span>
            <input
              type="text"
              placeholder="Enter question text..."
              value={q.text}
              onChange={(e) => handleQuestionChange(qIndex, "text", e.target.value)}
            />
            {questions.length > 1 && (
              <button className="remove" onClick={() => removeQuestion(qIndex)}>✕</button>
            )}
          </div>

          <div className="options">
            {q.options.map((opt, optIndex) => (
              <div key={optIndex} className="option-row">
                <input
                  type="checkbox"
                  checked={q.correctAnswer.includes(optIndex)}
                  onChange={() => handleCorrectAnswerChange(qIndex, optIndex)}
                />
                <input
                  type="text"
                  placeholder={`Option ${optIndex + 1}`}
                  value={opt}
                  onChange={(e) => handleOptionChange(qIndex, optIndex, e.target.value)}
                />
                {q.options.length > 1 && (
                  <button className="remove" onClick={() => removeOption(qIndex, optIndex)}>✕</button>
                )}
              </div>
            ))}
            <button className="add-option" onClick={() => addOption(qIndex)}>+ Add Option</button>
          </div>
        </div>
      ))}

      <div className="actions">
        <button onClick={addQuestion}>+ Add Question</button>
        <button className="submit" onClick={handleSubmit}>✅ Submit All</button>
      </div>
    </div>
  );
};

export default MultipleChoiseTwo;
