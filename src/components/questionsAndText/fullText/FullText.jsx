import React, { useState } from 'react';
import './FullText.scss';

const FullText = () => {
  const [text, setText] = useState("");

  return (
    <div className="fulltext-container">
      <h5>Full Text</h5>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter the full passage or content here..."
      />
    </div>
  );
};

export default FullText;
