import { useState } from "react";
import "./WritingTaskTwo.scss";

const WritingTaskTwo = ({ onSave }) => {
  const [task, setTask] = useState({
    theme_question: "",
  });
  const [error, setError] = useState("");

  const handlePromptChange = (e) => {
    setTask({ ...task, theme_question: e.target.value });
  };

  const validate = () => {
    if (!task.theme_question.trim()) {
      setError("Task 2 uchun mavzu yozing");
      return false;
    }

    setError("");
    return true;
  };

  const handleSave = () => {
    if (!validate()) return;
    onSave?.(task);
  };

  return (
    <div className="cq-container">
      <h5>Writing Task 2</h5>
      {error && <div className="error">{error}</div>}

      <div className="form-group">
        <textarea
          placeholder="Enter writing theme..."
          value={task.theme_question}
          onChange={handlePromptChange}
        />
      </div>

      <button className="submit" onClick={handleSave}>
        ✅ Save Task
      </button>
    </div>
  );
};

export default WritingTaskTwo;
