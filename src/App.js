import React, { useState } from "react";
import "./styles.css";

var animalDictionary = {
  "🐋": "whale",
  "🐬": "dolphin",
  "🐢": "turtle",
  "🐊": "crocodile",
  "🐼": "panda",
  "🐨": "koala",
  "🦏": "rhinoceros",
  "🦛": "hippopotamus",
  "🐘": "elephant",
  "🦩": "flamingo"
};

var animalsWeKnow = Object.keys(animalDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function animalInputHandler(event) {
    var userInput = event.target.value;
    var meaning = animalDictionary[userInput];
    if (meaning === undefined) {
      meaning = "Oops! we don't have this in our database";
    }
    setMeaning(meaning);
  }
  function animalClickHandler(animal) {
    var meaning = animalDictionary[animal];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>animal interpreter</h1>
      <input onChange={animalInputHandler} placeholder="enter the animal" />
      <h2> {meaning} </h2>
      {animalsWeKnow.map(function (animal) {
        return (
          <span
            onClick={() => animalClickHandler(animal)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={animal}
          >
            {animal}
          </span>
        );
      })}
      ;
    </div>
  );
}
