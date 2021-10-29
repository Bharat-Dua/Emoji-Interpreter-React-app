import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😞": "Sad",
  "🧡": "Love",
  "😣": "Disappointment",
  "😄": "Smile",
  "🤔": "Thinking face"
};
var emojiWeKnow = Object.keys(emojiDictionary);
export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Place Emoji Interpreter</h1>
      <input onChange={emojiInputHandler}></input>
      <h2> {meaning} </h2>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{
              padding: "0.5rem 1rem",
              fontSize: "larger",
              cursor: "pointer"
            }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
