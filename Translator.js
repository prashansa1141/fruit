import React, { useState } from "react";

function Translator() {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const handleTranslate = () => {
    // Simulated translation (for demo purposes)
    setTranslatedText(`Translated: ${text}`);
  };

  return (
    <div>
      <h1>Translator</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to translate"
      />
      <button onClick={handleTranslate}>Translate</button>
      {translatedText && <p>{translatedText}</p>}
    </div>
  );
}

export default Translator;
