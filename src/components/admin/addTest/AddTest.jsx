import React, { useEffect, useState } from "react";
import QuestionForm from "./questionForm/QuestionForm";
import './AddTest.scss'
import AdminNavbar from '../../../ui/adminNavbar/AdminNavbar'
import AdminHeader from '../../../ui/adminHeader/AdminHeader'

const subOptions = {
  Listening: ["Section 1", "Section 2", "Section 3", "Section 4"],
  Reading: ["Passage 1", "Passage 2", "Passage 3", "Passage 4"],
  Writing: ["Task 1", "Task 2"]
};

const AddTestPage = () => {
  const [selectedSection, setSelectedSection] = useState("Listening");
  const [selectedSubItem, setSelectedSubItem] = useState(subOptions["Listening"][0]);
  const [testData, setTestData] = useState({
    Listening: { audio: "" },
    Reading: {},
    Writing: {}
  });

  useEffect(() => {
    setSelectedSubItem(subOptions[selectedSection][0]);
  }, [selectedSection]);

  const addQuestion = (section, subItem, question) => {
    setTestData((prev) => {
      const updated = { ...prev };
      if (!updated[section][subItem]) {
        updated[section][subItem] = [];
      }
      updated[section][subItem].push(question);
      return updated;
    });
  };

  const handleAudioUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const audioURL = URL.createObjectURL(file);
      setTestData((prev) => ({
        ...prev,
        Listening: { ...prev.Listening, audio: audioURL }
      }));
    }
  };

  const handleSaveTest = () => {
    const blob = new Blob([JSON.stringify(testData, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "full_test.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  const questions = testData[selectedSection]?.[selectedSubItem] || [];

  return (
    <div className="add-test">
      <AdminNavbar />
      <div className="main_content">
        <AdminHeader />

        {/* Section Buttons */}
        <div className="passages mt-4 mb-5">
          <div>
            {Object.keys(subOptions).map((sec) => (
              <button
                key={sec}
                className={`btn ${selectedSection === sec ? "btn-primary" : "btn-outline-secondary"}`}
                onClick={() => setSelectedSection(sec)}
              >
                {sec}
              </button>
            ))}
          </div>
          <div>
            {subOptions[selectedSection].map((item) => (
              <button
                key={item}
                className={`btn ${selectedSubItem === item ? "btn-primary" : "btn-outline-secondary"}`}
                onClick={() => setSelectedSubItem(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Audio Upload Section */}
        {selectedSection === "Listening" && (
          <div className="mb-6">
            <label className="block font-semibold mb-4 mx-2 font-weight-bold">Upload Audio:</label>
            <input type="file" accept="audio/*" onChange={handleAudioUpload} />
            {testData.Listening.audio && (
              <audio controls className="mt-2">
                <source src={testData.Listening.audio} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            )}
          </div>
        )}

        {/* Question Entry */}
        <div className="questions enter_question">
          <div className="question_type">
            <label>Current Section:</label>
            <span className="font-medium">{selectedSection} → {selectedSubItem}</span>
          </div>

          <div className="question_zone">
            <QuestionForm
              section={selectedSection}
              subItem={selectedSubItem}
              handleSaveTest={handleSaveTest}
              onAddQuestion={addQuestion}
            />
          
          </div>

          {/* Saved Questions */}
          <div className="saved_questions">
            <h5>Saved Questions</h5>
            {questions.length > 0 ? (
              <ul>
                {questions.map((q, idx) => (
                  <li key={idx} className="mb-3">
                    <p><strong>Type:</strong> {q.questionType}</p>
                    <p><strong>Text:</strong> {q.questionText}</p>
                    {/* {q.questionImage && (
                      <img src={q.questionImage} alt={`Question ${idx + 1}`} className="max-w-xs rounded border mt-2" />
                    )} */}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No questions added yet.</p>
            )}
          </div>          
        </div>
      </div>
    </div>
  );
};

export default AddTestPage;
