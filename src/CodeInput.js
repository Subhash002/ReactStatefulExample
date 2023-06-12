import React, { useState } from "react";
const CodeInput = ({ onSet }) => {
  const [code, setCode] = useState();
  const onSetCode = (code) => {
    setCode(code);
    onSet(code);
  };
  return (
    <div className="code-input">
      <input type="text" value={code} onChange={(e) => onSet(e.target.value)} />
      <button
        onClick={() =>
          onSetCode(parseInt(Math.random() * new Date().getTime()))
        }
      >
        Generate
      </button>
    </div>
  );
};

export default CodeInput;
// crypto.randomBytes())
