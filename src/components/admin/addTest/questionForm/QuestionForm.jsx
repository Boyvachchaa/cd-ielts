import React, { useState } from "react";
import { questionTypes } from "../questionTypes/questionTypes";

const QuestionForm = ({ section, subItem, onAddQuestion, handleSaveTest }) => {
  const [form, setForm] = useState({
    questionType: "",
    questionText: ""
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
  
    if (!file.type.startsWith("image/")) {
      alert("Only image files are allowed.");
      return;
    }
  
    if (file.size > 5 * 1024 * 1024) {
      alert("Image size should be under 5MB.");
      return;
    }
  
    const imageURL = URL.createObjectURL(file);
    setImagePreview(imageURL);
    setImageFile(file);
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.questionType || !form.questionText) {
      alert("Please fill all fields");
      return;
    }

    onAddQuestion(section, subItem, {
      questionType: form.questionType,
      questionText: form.questionText,
      questionImage: imagePreview,
      imageFile,
    });

    setForm({ questionType: "", questionText: "" });
    setImagePreview(null);
    setImageFile(null);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label>Question Type:</label>
        <select
          name="questionType"
          value={form.questionType}
          onChange={handleChange}
          className="border p-2 w-full"
        >
          <option value="">-- Select --</option>
          {questionTypes[section].map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      <div>
        <label>Question Text:</label>
        <textarea
          name="questionText"
          value={form.questionText}
          onChange={handleChange}
          className="border p-2 w-full"
          rows={3}
        />
      </div>

      {section !== "Reading" && (
        <div className="w-50 h-50" >
            <label>Question Image:</label>
            <input type="file" accept="image/*" onChange={handleImageUpload} className="block mt-2" />
            {/* {imagePreview && (
            <img src={imagePreview} alt="Preview" className="mt-2 max-w-xs rounded border" />
            )} */}
        </div>
      )}

      <button
        type="submit"
        disabled={!form.questionType || !form.questionText}
        className={`px-4 py-2 rounded text-white ${
          form.questionType && form.questionText ? "bg-blue-500" : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        Add Question
      </button>

      {section === "Writing" && (
        <div className="mt-6">
          <button
            type="button"
            className="btn bg-purple-600 text-white"
            onClick={handleSaveTest}
          >
            Save Complete Test
          </button>
        </div>
      )}
    </form>
  );
};

export default QuestionForm;
