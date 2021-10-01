import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🥭": "mango",
  "🍒": "cherries",
  "🍓": "strawberry",
  "🍍": "pineapple",
  "🍉": "watermelon",
  "❤️": "Red Heart",
  "🔥": "Fire",
  "👍": "Thumbs Up",
  "😊": "Smiling Face with Smiling Eyes",
  "✔️": "Check Mark"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don`t have this in our database.";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Emoji Interpreter!</h1>

      <input onChange={emojiInputHandler} />

      <h2> {meaning} </h2>

      <h3> emojis we know </h3>

      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontsize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {" "}
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
