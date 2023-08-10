import React, { useState } from "react";
import "./Parent.css";
import WordComponent from "./WordComponent";
import TextUpLo from "./TextUpLo";

function Parent() {
  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleUppercaseClick = () => {
    const uppercaseText = text.toUpperCase();
    setText(uppercaseText);
  };

  const handleLowercaseClick = () => {
    const lowercaseText = text.toLowerCase();
    setText(lowercaseText);
  };

  return (
    <div className="container">
      <h2>Word counter</h2>
      <WordComponent text={text} />
      <TextUpLo
        text={text}
        handleTextChange={handleTextChange}
        handleUppercaseClick={handleUppercaseClick}
        handleLowercaseClick={handleLowercaseClick}
      />{" "}
    </div>
  );
}

export default Parent;
