
import { useState } from "react";

import AdminNavbar from '../../../ui/adminNavbar/AdminNavbar'
import AdminHeader from "../../../ui/adminHeader/AdminHeader";

// QuestionTypes
import FullText from "../../questionsAndText/fullText/FullText";
import MultipleChoiseOne from '../../questionsAndText/multipleChoiseOne/MultipleChoiseOne'
import MultipleChoiseTwo from "../../questionsAndText/multipleChoiseTwo/MultipleChoiseTwo";
import NoteCompletion from "../../questionsAndText/noteCompletion/NoteCompletion";
import SummaryCompletion from "../../questionsAndText/summeryCompletionText/SummeryCompletionText";
import SummaryCompletionList from "../../questionsAndText/summeryCompletionLIst/SummeryCompletionList";
import SentenceCompletion from "../../questionsAndText/sentenceCompletion/SentenceCompletion";
import FlowChart from "../../questionsAndText/flowChart/FlowChart";

import MatchingSentenceEndings from "../../questionsAndText/matchingSentenceEndings/MatchingSentenceEndigs";


import './AddTest.scss'

const AddTest = () => {
  const [activeTab, setActiveTab] = useState("Reading");
  const [activePassage, setActivePassage] = useState("Passage 1");
  const [questionType, setQuestionType] = useState("");
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionContent, setQuestionContent] = useState("");

  const tabs = ["Reading", "Listening", "Writing"];
  const passages = ["Passage 1", "Passage 2", "Passage 3", "Passage 4"];
  const questionTypes = [
    "Full Text",
    "Multiple choice (1)",
    "Multiple choice (2)",
    "Note completion",
    "Summary completion (text)",
    "Summary completion (list)",
    "Sentence completion",
    "Flow-chart completion",
    "Table completion",
    "Matching sentence endings",
    "Matching features",
  ];

  const buttonStyle = {
    padding: "10px 16px",
    margin: "4px",
    border: "1px solid #ccc",
    backgroundColor: "#f9f9f9",
    cursor: "pointer",
    borderRadius: "4px",
  };

  const activeButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#007bff",
    color: "white",
    border: "1px solid #007bff",
  };

  return (
    <div className="add-test">

        <AdminNavbar />

        <main className="main_content">
            
          <AdminHeader />

          <div className="questions">
            <div className="passages">
              <div>
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    style={tab === activeTab ? activeButtonStyle : buttonStyle}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className="passage_items">
                {passages.map((p) => (
                  <button
                    key={p}
                    style={p === activePassage ? activeButtonStyle : buttonStyle}
                    onClick={() => setActivePassage(p)}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            <div className="enter_question">
              <div className="question_type">
                <label>Question Type:</label>
                <select
                  value={questionType}
                  onChange={(e) => setQuestionType(e.target.value)}
                >
                  <option value="">Select a type</option>
                  {questionTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="question_zone">
                {questionType === "Full Text" && <FullText />}
                {questionType === "Multiple choice (1)" && <MultipleChoiseOne />}
                {questionType === "Multiple choice (2)" && <MultipleChoiseTwo />}
                {questionType === "Note completion" && <NoteCompletion />}
                {questionType === "Summary completion (text)" && <SummaryCompletion />}
                {questionType === "Summary completion (list)" && <SummaryCompletionList />}
                {questionType === "Sentence completion" && <SentenceCompletion />}
                {questionType === "Flow-chart completion" && <FlowChart />}
                {questionType === "Matching sentence endings" && <MatchingSentenceEndings />}

                {/* {questionType === "Full Text" && <FullText />}
                {questionType === "Full Text" && <FullText />} */}
                
              </div>
            </div>
          </div>
        </main>

    </div>
  );
};

export default AddTest;