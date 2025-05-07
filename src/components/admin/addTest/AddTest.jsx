
// // // import { useState } from "react";

// // // import AdminNavbar from '../../../ui/adminNavbar/AdminNavbar'
// // // import AdminHeader from "../../../ui/adminHeader/AdminHeader";

// // // // QuestionTypes
// // // import FullText from "../../questionsAndText/fullText/FullText";
// // // import MultipleChoiseOne from '../../questionsAndText/multipleChoiseOne/MultipleChoiseOne'
// // // import MultipleChoiseTwo from "../../questionsAndText/multipleChoiseTwo/MultipleChoiseTwo";
// // // import NoteCompletion from "../../questionsAndText/noteCompletion/NoteCompletion";
// // // import SummaryCompletion from "../../questionsAndText/summeryCompletionText/SummeryCompletionText";
// // // import SummaryCompletionList from "../../questionsAndText/summeryCompletionLIst/SummeryCompletionList";
// // // import SentenceCompletion from "../../questionsAndText/sentenceCompletion/SentenceCompletion";
// // // import FlowChart from "../../questionsAndText/flowChart/FlowChart";

// // // import MatchingSentenceEndings from "../../questionsAndText/matchingSentenceEndings/MatchingSentenceEndigs";


// // // import './AddTest.scss'

// // // const AddTest = () => {
// // //   const [activeTab, setActiveTab] = useState("Reading");
// // //   const [activePassage, setActivePassage] = useState("Passage 1");
// // //   const [questionType, setQuestionType] = useState("");
// // //   const [questionTitle, setQuestionTitle] = useState("");
// // //   const [questionContent, setQuestionContent] = useState("");

// // //   const tabs = ["Reading", "Listening", "Writing"];
// // //   const passages = ["Passage 1", "Passage 2", "Passage 3", "Passage 4"];
// // //   const questionTypes = [
// // //     "Full Text",
// // //     "Multiple choice (1)",
// // //     "Multiple choice (2)",
// // //     "Note completion",
// // //     "Summary completion (text)",
// // //     "Summary completion (list)",
// // //     "Sentence completion",
// // //     "Flow-chart completion",
// // //     "Table completion",
// // //     "Matching sentence endings",
// // //     "Matching features",
// // //   ];

// // //   const buttonStyle = {
// // //     padding: "10px 16px",
// // //     margin: "4px",
// // //     border: "1px solid #ccc",
// // //     backgroundColor: "#f9f9f9",
// // //     cursor: "pointer",
// // //     borderRadius: "4px",
// // //   };

// // //   const activeButtonStyle = {
// // //     ...buttonStyle,
// // //     backgroundColor: "#007bff",
// // //     color: "white",
// // //     border: "1px solid #007bff",
// // //   };

// // //   return (
// // //     <div className="add-test">

// // //         <AdminNavbar />

// // //         <main className="main_content">
            
// // //           <AdminHeader />

// // //           <div className="questions">
// // //             <div className="passages">
// // //               <div>
// // //                 {tabs.map((tab) => (
// // //                   <button
// // //                     key={tab}
// // //                     style={tab === activeTab ? activeButtonStyle : buttonStyle}
// // //                     onClick={() => setActiveTab(tab)}
// // //                   >
// // //                     {tab}
// // //                   </button>
// // //                 ))}
// // //               </div>
// // //               <div className="passage_items">
// // //                 {passages.map((p) => (
// // //                   <button
// // //                     key={p}
// // //                     style={p === activePassage ? activeButtonStyle : buttonStyle}
// // //                     onClick={() => setActivePassage(p)}
// // //                   >
// // //                     {p}
// // //                   </button>
// // //                 ))}
// // //               </div>
// // //             </div>

// // //             <div className="enter_question">
// // //               <div className="question_type">
// // //                 <label>Question Type:</label>
// // //                 <select
// // //                   value={questionType}
// // //                   onChange={(e) => setQuestionType(e.target.value)}
// // //                 >
// // //                   <option value="">Select a type</option>
// // //                   {questionTypes.map((type) => (
// // //                     <option key={type} value={type}>
// // //                       {type}
// // //                     </option>
// // //                   ))}
// // //                 </select>
// // //               </div>

// // //               <div className="question_zone">
// // //                 {questionType === "Full Text" && <FullText />}
// // //                 {questionType === "Multiple choice (1)" && <MultipleChoiseOne />}
// // //                 {questionType === "Multiple choice (2)" && <MultipleChoiseTwo />}
// // //                 {questionType === "Note completion" && <NoteCompletion />}
// // //                 {questionType === "Summary completion (text)" && <SummaryCompletion />}
// // //                 {questionType === "Summary completion (list)" && <SummaryCompletionList />}
// // //                 {questionType === "Sentence completion" && <SentenceCompletion />}
// // //                 {questionType === "Flow-chart completion" && <FlowChart />}
// // //                 {questionType === "Matching sentence endings" && <MatchingSentenceEndings />}

// // //                 {/* {questionType === "Full Text" && <FullText />}
// // //                 {questionType === "Full Text" && <FullText />} */}
                
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </main>

// // //     </div>
// // //   );
// // // };

// // // export default AddTest;


// // // import { useState } from "react";

// // // import AdminNavbar from '../../../ui/adminNavbar/AdminNavbar';
// // // import AdminHeader from "../../../ui/adminHeader/AdminHeader";

// // // // Question types
// // // import FullText from "../../questionsAndText/fullText/FullText";
// // // import MultipleChoiseOne from '../../questionsAndText/multipleChoiseOne/MultipleChoiseOne';
// // // import NoteCompletion from "../../questionsAndText/noteCompletion/NoteCompletion";
// // // import FlowChart from "../../questionsAndText/flowChart/FlowChart";
// // // import SentenceCompletion from "../../questionsAndText/sentenceCompletion/SentenceCompletion";
// // // import SummaryCompletion from "../../questionsAndText/summeryCompletionText/SummeryCompletionText";
// // // import SummaryCompletionList from "../../questionsAndText/summeryCompletionLIst/SummeryCompletionList";
// // // import MatchingSentenceEndings from "../../questionsAndText/matchingSentenceEndings/MatchingSentenceEndigs";

// // // import './AddTest.scss';

// // // const AddTest = () => {
// // //   const [activeTab, setActiveTab] = useState("Reading");
// // //   const [activePassage, setActivePassage] = useState("Passage 1");
// // //   const [questionType, setQuestionType] = useState("");
// // //   const [currentQuestionData, setCurrentQuestionData] = useState(null);
// // //   const [testData, setTestData] = useState({
// // //     Reading: {},
// // //     Listening: {},
// // //     Writing: {},
// // //   });

// // //   const tabs = ["Reading", "Listening", "Writing"];
// // //   const passages = ["Passage 1", "Passage 2", "Passage 3", "Passage 4"];

// // //   // Savol turlarini asosiy turga qarab ajratamiz
// // //   const questionTypesMap = {
// // //     Reading: [
// // //       "Full Text",
// // //       "Multiple choice (1)",
// // //       "Note completion",
// // //       "Summary completion (text)",
// // //       "Summary completion (list)",
// // //       "Sentence completion",
// // //       "Matching sentence endings",
// // //     ],
// // //     Listening: [
// // //       "Flow-chart completion",
// // //       "Note completion",
// // //       "Multiple choice (1)",
// // //       "Sentence completion",
// // //     ],
// // //     Writing: [
// // //       "Full Text",
// // //       "Note completion",
// // //     ],
// // //   };

// // //   const buttonStyle = {
// // //     padding: "10px 16px",
// // //     margin: "4px",
// // //     border: "1px solid #ccc",
// // //     backgroundColor: "#f9f9f9",
// // //     cursor: "pointer",
// // //     borderRadius: "4px",
// // //   };

// // //   const activeButtonStyle = {
// // //     ...buttonStyle,
// // //     backgroundColor: "#007bff",
// // //     color: "white",
// // //     border: "1px solid #007bff",
// // //   };

// // //   const handleQuestionSave = () => {
// // //     if (!questionType || !activePassage || !activeTab || !currentQuestionData) {
// // //       alert("Iltimos, barcha maydonlarni to‘ldiring.");
// // //       return;
// // //     }

// // //     const newEntry = {
// // //       questionType,
// // //       content: currentQuestionData,
// // //     };

// // //     setTestData((prev) => {
// // //       const updated = { ...prev };
// // //       if (!updated[activeTab][activePassage]) {
// // //         updated[activeTab][activePassage] = [];
// // //       }
// // //       updated[activeTab][activePassage].push(newEntry);
// // //       return updated;
// // //     });

// // //     setCurrentQuestionData(null);
// // //     alert("Savol saqlandi!");
// // //   };

// // //   const exportToJson = () => {
// // //     const blob = new Blob([JSON.stringify(testData, null, 2)], { type: "application/json" });
// // //     const url = URL.createObjectURL(blob);
// // //     const link = document.createElement("a");
// // //     link.href = url;
// // //     link.download = "test.json";
// // //     link.click();
// // //   };

// // //   const renderQuestionComponent = () => {
// // //     const props = { onSave: setCurrentQuestionData };

// // //     switch (questionType) {
// // //       case "Full Text": return <FullText {...props} />;
// // //       case "Multiple choice (1)": return <MultipleChoiseOne {...props} />;
// // //       case "Note completion": return <NoteCompletion {...props} />;
// // //       case "Summary completion (text)": return <SummaryCompletion {...props} />;
// // //       case "Summary completion (list)": return <SummaryCompletionList {...props} />;
// // //       case "Sentence completion": return <SentenceCompletion {...props} />;
// // //       case "Flow-chart completion": return <FlowChart {...props} />;
// // //       case "Matching sentence endings": return <MatchingSentenceEndings {...props} />;
// // //       default: return null;
// // //     }
// // //   };

// // //   return (
// // //     <div className="add-test">
// // //       <AdminNavbar />
// // //       <main className="main_content">
// // //         <AdminHeader />

// // //         <div className="questions">
// // //           <div className="passages">
// // //             <div>
// // //               {tabs.map((tab) => (
// // //                 <button
// // //                   key={tab}
// // //                   style={tab === activeTab ? activeButtonStyle : buttonStyle}
// // //                   onClick={() => {
// // //                     setActiveTab(tab);
// // //                     setQuestionType("");
// // //                     setCurrentQuestionData(null);
// // //                   }}
// // //                 >
// // //                   {tab}
// // //                 </button>
// // //               ))}
// // //             </div>
// // //             <div className="passage_items">
// // //               {passages.map((p) => (
// // //                 <button
// // //                   key={p}
// // //                   style={p === activePassage ? activeButtonStyle : buttonStyle}
// // //                   onClick={() => setActivePassage(p)}
// // //                 >
// // //                   {p}
// // //                 </button>
// // //               ))}
// // //             </div>
// // //           </div>

// // //           <div className="enter_question">
// // //             <div className="question_type">
// // //               <label>Question Type:</label>
// // //               <select
// // //                 value={questionType}
// // //                 onChange={(e) => setQuestionType(e.target.value)}
// // //               >
// // //                 <option value="">Select a type</option>
// // //                 {questionTypesMap[activeTab].map((type) => (
// // //                   <option key={type} value={type}>
// // //                     {type}
// // //                   </option>
// // //                 ))}
// // //               </select>
// // //             </div>

// // //             <div className="question_zone">
// // //               {renderQuestionComponent()}
// // //             </div>

// // //             <div className="buttons mt-3">
// // //               <button onClick={handleQuestionSave} className="btn btn-success me-2">
// // //                 Save Question
// // //               </button>
// // //               <button onClick={exportToJson} className="btn btn-secondary">
// // //                 Export Test
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </main>
// // //     </div>
// // //   );
// // // };

// // // export default AddTest;


// import { useState } from "react";

// import AdminNavbar from '../../../ui/adminNavbar/AdminNavbar';
// import AdminHeader from "../../../ui/adminHeader/AdminHeader";

// // Question types
// import FullText from "../../questionsAndText/fullText/FullText";
// import MultipleChoiseOne from '../../questionsAndText/multipleChoiseOne/MultipleChoiseOne';
// import NoteCompletion from "../../questionsAndText/noteCompletion/NoteCompletion";
// import FlowChart from "../../questionsAndText/flowChart/FlowChart";
// import SentenceCompletion from "../../questionsAndText/sentenceCompletion/SentenceCompletion";
// import SummaryCompletion from "../../questionsAndText/summeryCompletionText/SummeryCompletionText";
// import SummaryCompletionList from "../../questionsAndText/summeryCompletionLIst/SummeryCompletionList";
// import MatchingSentenceEndings from "../../questionsAndText/matchingSentenceEndings/MatchingSentenceEndigs";

// import './AddTest.scss';

// const AddTest = () => {
//   const [activeTab, setActiveTab] = useState("Reading");
//   const [activePassage, setActivePassage] = useState("Passage 1");
//   const [questionType, setQuestionType] = useState("");
//   const [currentQuestionData, setCurrentQuestionData] = useState(null);
//   const [testData, setTestData] = useState({
//     Reading: {},
//     Listening: {},
//     Writing: {},
//   });

//   const tabs = ["Reading", "Listening", "Writing"];
//   const passages = ["Passage 1", "Passage 2", "Passage 3", "Passage 4"];

//   const questionTypesMap = {
//     Reading: [
//       "Full Text",
//       "Multiple choice (1)",
//       "Note completion",
//       "Summary completion (text)",
//       "Summary completion (list)",
//       "Sentence completion",
//       "Matching sentence endings",
//     ],
//     Listening: [
//       "Flow-chart completion",
//       "Note completion",
//       "Multiple choice (1)",
//       "Sentence completion",
//     ],
//     Writing: [
//       "Full Text",
//       "Note completion",
//     ],
//   };

//   const buttonStyle = {
//     padding: "10px 16px",
//     margin: "4px",
//     border: "1px solid #ccc",
//     backgroundColor: "#f9f9f9",
//     cursor: "pointer",
//     borderRadius: "4px",
//   };

//   const activeButtonStyle = {
//     ...buttonStyle,
//     backgroundColor: "#007bff",
//     color: "white",
//     border: "1px solid #007bff",
//   };

//   const handleQuestionSave = () => {
//     if (!questionType || !activePassage || !activeTab || !currentQuestionData) {
//       alert("Iltimos, barcha maydonlarni to‘ldiring.");
//       return;
//     }

//     const newEntry = {
//       questionType,
//       content: currentQuestionData,
//     };

//     setTestData((prev) => {
//       const updated = { ...prev };
//       if (!updated[activeTab][activePassage]) {
//         updated[activeTab][activePassage] = [];
//       }
//       updated[activeTab][activePassage].push(newEntry);
//       return updated;
//     });

//     setCurrentQuestionData(null);
//     alert("Savol saqlandi!");
//   };

//   const exportToJson = () => {
//     const blob = new Blob([JSON.stringify(testData, null, 2)], {
//       type: "application/json",
//     });
//     const url = URL.createObjectURL(blob);
//     const link = document.createElement("a");
//     link.href = url;
//     link.download = "test.json";
//     link.click();
//   };

//   const renderQuestionComponent = () => {
//     const props = { onSave: setCurrentQuestionData };

//     switch (questionType) {
//       case "Full Text": return <FullText {...props} />;
//       case "Multiple choice (1)": return <MultipleChoiseOne {...props} />;
//       case "Note completion": return <NoteCompletion {...props} />;
//       case "Summary completion (text)": return <SummaryCompletion {...props} />;
//       case "Summary completion (list)": return <SummaryCompletionList {...props} />;
//       case "Sentence completion": return <SentenceCompletion {...props} />;
//       case "Flow-chart completion": return <FlowChart {...props} />;
//       case "Matching sentence endings": return <MatchingSentenceEndings {...props} />;
//       default: return null;
//     }
//   };

//   return (
//     <div className="add-test">
//       <AdminNavbar />
//       <main className="main_content">
//         <AdminHeader />

//         <div className="questions">
//           <div className="passages">
//             <div>
//               {tabs.map((tab) => (
//                 <button
//                   key={tab}
//                   style={tab === activeTab ? activeButtonStyle : buttonStyle}
//                   onClick={() => {
//                     setActiveTab(tab);
//                     setQuestionType("");
//                     setCurrentQuestionData(null);
//                   }}
//                 >
//                   {tab}
//                 </button>
//               ))}
//             </div>
//             <div className="passage_items">
//               {passages.map((p) => (
//                 <button
//                   key={p}
//                   style={p === activePassage ? activeButtonStyle : buttonStyle}
//                   onClick={() => setActivePassage(p)}
//                 >
//                   {p}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="enter_question">
//             <div className="question_type">
//               <label>Question Type:</label>
//               <select
//                 value={questionType}
//                 onChange={(e) => setQuestionType(e.target.value)}
//               >
//                 <option value="">Select a type</option>
//                 {questionTypesMap[activeTab].map((type) => (
//                   <option key={type} value={type}>
//                     {type}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div className="question_zone">
//               {renderQuestionComponent()}
//             </div>

//             <div className="buttons mt-3">
//               <button onClick={handleQuestionSave} className="btn btn-success me-2">
//                 Save Question
//               </button>
//               <button onClick={exportToJson} className="btn btn-secondary">
//                 Export Test
//               </button>
//             </div>

//             <div className="saved_questions mt-4">
//               <h5>Saved Questions for {activePassage} ({activeTab})</h5>
//               {testData[activeTab][activePassage]?.length > 0 ? (
//                 <ul>
//                   {testData[activeTab][activePassage].map((q, idx) => (
//                     <li key={idx} style={{ marginBottom: "10px" }}>
//                       <strong>{q.questionType}</strong>
//                       <pre>{JSON.stringify(q.content, null, 2)}</pre>
//                     </li>
//                   ))}
//                 </ul>
//               ) : (
//                 <p>No questions saved for this passage yet.</p>
//               )}
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default AddTest;


import { useState } from "react";
import "./AddTest.scss";

import AdminNavbar from '../../../ui/adminNavbar/AdminNavbar'
import AdminHeader from "../../../ui/adminHeader/AdminHeader";

import MultipleChoiseOne from '../../questionsAndText/multipleChoiseOne/MultipleChoiseOne'
import NoteCompletion from '../../questionsAndText/noteCompletion/NoteCompletion'

// Writing
import WritingTaskOne from "../../questionsAndText/writing/writingTaskOne/WritingTaskOne";
import WritingTaskTwo from "../../questionsAndText/writing/writingTaskTwo/WritingTaskTwo";


const questionComponents = {
  "Multiple choice": MultipleChoiseOne,
  "Note completion": NoteCompletion,

  // Writing
  "Task 1": WritingTaskOne,
  "Task 2": WritingTaskTwo,
};

const questionTypesMap = {
  Reading: [
    "Multiple choice", 
    "Identifying information",
    "Matching information",
    "Matching headings",
    "Matching features",
    "Matching sentence endings",
    "Sentence completion",
    "Table completion",
    "Flow-chart completion",
    "Diagram label completion",
    "Short-answer question"
  ],
  Listening: [
    "Multiple choice", 
    "Matching",
    "Plan map labelling",
    "Diagram labelling",
    "Sentence completion",
    "Table completion",
    "Flow-chart completion",
    "Form completion",
    "Short-answer question",

  ],
  Writing: [
    "Task 1", 
    "Task 2"
  ],
};

const AddTest = () => {
  const [activeTab, setActiveTab] = useState("Reading");
  const [activePassage, setActivePassage] = useState("Passage 1");
  const [questionType, setQuestionType] = useState("");
  const [currentQuestionData, setCurrentQuestionData] = useState(null);
  const [testData, setTestData] = useState({
    Reading: {},
    Listening: {},
    Writing: {},
  });

  const tabs = ["Reading", "Listening", "Writing"];
  const unitLabelMap = {
    Reading: "Passage",
    Listening: "Section",
    Writing: "Task"
  };
  
  const unitOptionsMap = {
    Reading: ["Passage 1", "Passage 2", "Passage 3", "Passage 4"],
    Listening: ["Section 1", "Section 2", "Section 3", "Section 4"],
    Writing: ["Task 1", "Task 2"]
  };
  
  const unitLabel = unitLabelMap[activeTab];
  const unitOptions = unitOptionsMap[activeTab];
  const activeUnit = activePassage;

  const handleSave = () => {
    if (!questionType || !currentQuestionData) {
      alert("Please complete all fields.");
      return;
    }

    const newEntry = { questionType, content: currentQuestionData };

    setTestData((prev) => {
      const updated = { ...prev };
      if (!updated[activeTab][activePassage]) {
        updated[activeTab][activePassage] = [];
      }
      updated[activeTab][activePassage].push(newEntry);
      return updated;
    });

    setCurrentQuestionData(null);
    alert("Question saved!");
  };

  const handleExport = () => {
    const blob = new Blob([JSON.stringify(testData, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "test.json";
    a.click();
  };

  const renderQuestionComponent = () => {
    const Component = questionComponents[questionType];
    return Component ? <Component onSave={setCurrentQuestionData} /> : null;
  };

  const savedQuestions = testData[activeTab][activePassage] || [];

  return (
  <div className="add-test">
    <AdminNavbar />
    <div className="main_content">
      <AdminHeader />
      <div className="container mt-4 p-3 border rounded bg-white">
        <div className="d-flex justify-content-between">
          <div className="mb-3 d-flex gap-2">
          {tabs.map((tab) => (
              <button
                key={tab}
                className={`btn ${tab === activeTab ? "btn-primary" : "btn-outline-secondary"}`}
                onClick={() => {
                  setActiveTab(tab);
                  setQuestionType("");
                  setCurrentQuestionData(null);
                  setActivePassage(unitOptionsMap[tab][0]);
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="mb-3 d-flex gap-2">
          {unitOptions.map((unit) => (
            <button
              key={unit}
              className={`btn ${unit === activeUnit ? "btn-primary" : "btn-outline-secondary"}`}
              onClick={() => setActivePassage(unit)}
            >
              {unit}
            </button>
          ))}
          </div>
        </div>

        <div className="mb-3">
          <label><strong>Question Type:</strong></label>
          <select
            className="form-select"
            value={questionType}
            onChange={(e) => {
              setQuestionType(e.target.value);
              setCurrentQuestionData(null);
            }}
          >
            <option value="">Select a type</option>
            {questionTypesMap[activeTab].map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div className="mb-3 border p-2 rounded" style={{ minHeight: "80px", borderStyle: "dotted" }}>
          {renderQuestionComponent()}
        </div>

        <div className="mb-3 d-flex gap-2">
          <button className="btn btn-success" onClick={handleSave}>Save Question</button>
          <button className="btn btn-secondary" onClick={handleExport}>Export Test</button>
        </div>

        <div className="saved_questions mt-4 p-3 border rounded">
          <h5>Saved Questions for {activePassage} ({activeTab})</h5>
          {savedQuestions.length ? (
            <ul>
              {savedQuestions.map((q, idx) => (
                <li key={idx} className="mb-2">
                  <strong>{q.questionType}</strong>
                  <pre className="bg-light p-2">{JSON.stringify(q.content, null, 2)}</pre>
                </li>
              ))}
            </ul>
          ) : (
            <p>No questions saved for this passage yet.</p>
          )}
        </div>
      </div>
    </div>
    
  </div>
  );
};

export default AddTest;