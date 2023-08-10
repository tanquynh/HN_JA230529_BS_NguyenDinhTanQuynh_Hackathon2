import React from "react";

function WordComponent({ text }) {
  const countWords = (text) => {
    const trimmedText = text.trim();
    if (trimmedText === "") {
      return 0;
    }
    const words = trimmedText.split(/\s+/);
    return words.length;
  };

  const countCharacters = (text) => {
    return text.replace(/\s/g, "").length;
  };

  const countParagraphs = (text) => {
    const paragraphs = text.split(/\n/);
    return paragraphs.length;
  };
  return (
    <div className="item-box">
      <div className="item-element">
        <h5>Word</h5>
        <p>Word count: {countWords(text)}</p>
      </div>
      <div className="item-element">
        <h5>Letter</h5>
        <p>letter count: {countCharacters(text)}</p>
      </div>
      <div className="item-element">
        <h5>Paragraph</h5>
        <p>Paragraph count: {countParagraphs(text)}</p>
      </div>
    </div>
  );
}

export default WordComponent;
