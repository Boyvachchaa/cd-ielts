import { useState } from "react";
import "./WritingTaskTwo.scss";

const WritingTaskTwo = ({ onSave, onErrorChange }) => {
  const [task, setTask] = useState({
    theme_question: "",
    imageFile: null,
    imagePreview: null,
  });
  const [error, setError] = useState("");

  const handleTextChange = (e) => {
    const value = e.target.value;
    setTask((prev) => ({ ...prev, theme_question: value }));
    if (error) {
      setError("");
      onErrorChange?.("");
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      setTask((prev) => ({
        ...prev,
        imageFile: file,
        imagePreview: preview,
      }));
      setError("");
      onErrorChange?.("");
    }
  };

  const validate = () => {
    if (!task.theme_question.trim()) {
      const msg = "Task 2 uchun mavzu yozing";
      setError(msg);
      onErrorChange?.(msg);
      return false;
    }

    if (!task.imageFile) {
      const msg = "Rasm fayli yuklanishi kerak.";
      setError(msg);
      onErrorChange?.(msg);
      return false;
    }

    setError("");
    onErrorChange?.("");
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

      <div className="form-group mb-3">
        <textarea
          placeholder="Enter writing theme..."
          value={task.theme_question}
          onChange={handleTextChange}
        />
      </div>

      <div className="form-group mb-3">
        <label>Upload image (optional):</label>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        {task.imagePreview && (
          <div className="preview mt-2">
            <img
              src={task.imagePreview}
              alt="Preview"
              style={{ maxWidth: "100%", maxHeight: "200px" }}
            />
          </div>
        )}
      </div>

      <button className="submit" onClick={handleSave}>
        Check Validation
      </button>
    </div>
  );
};

export default WritingTaskTwo;
