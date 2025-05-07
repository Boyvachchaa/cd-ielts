import { useState } from "react";
import "./WritingTaskOne.scss";

const WritingTaskOne = ({ onSave }) => {
  const [task, setTask] = useState({
    imageFile: null,
    imagePreview: ""
  });
  const [error, setError] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      setTask({ ...task, imageFile: file, imagePreview: preview });
    }
  };

  const validate = () => {
    if (!task.imageFile) {
      setError("Rasm fayli yuklanishi kerak.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSave = () => {
    if (!validate()) return;
    onSave?.(task); // You get: { prompt, imageFile, imagePreview }
  };

  return (
    <div className="cq-container">
      <h5>Writing Task 1</h5>
      {error && <div className="error">{error}</div>}

      <div className="form-group">
        <label>Upload Image:</label>
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </div>

      {task.imagePreview && (
        <div className="image-preview">
          <img src={task.imagePreview} alt="Preview" />
        </div>
      )}

      <button className="submit" onClick={handleSave}>
        ✅ Save Task
      </button>
    </div>
  );
};

export default WritingTaskOne;
