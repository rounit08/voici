import React, { useState, useEffect } from "react";
import "./Body.css";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();

mic.continuous = true;
mic.interimResults = true;
mic.lang = "en-US";

function Body() {
  const [isListening, setIsListening] = useState(false);
  const [note, setNote] = useState(null);
  const [savedNotes, setSavedNotes] = useState([]);

  useEffect(() => {
    handleListen();
  }, [isListening]);

  const handleListen = () => {
    if (isListening) {
      mic.start();
      mic.onend = () => {
        console.log("continue..");
        mic.start();
      };
    } else {
      mic.stop();
      mic.onend = () => {
        console.log("Stopped Mic on Click");
      };
    }
    mic.onstart = () => {
      console.log("Mics on");
    };

    mic.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
      console.log(transcript);
      setNote(transcript);
      mic.onerror = (event) => {
        console.log(event.error);
      };
    };
  };

  const handleSaveNote = () => {
    setSavedNotes([...savedNotes, note]);
    setNote("");
  };

  return (
    <>
      <h1>Voice To Text</h1>
      <div className="container">
        <div className="box">
          <h5 className="note">
            *NOTE:
            <br /> 🎙️: Mic is on
            <br /> 🛑🎙️:Mic is off
          </h5>

          {isListening ? <span>🎙️</span> : <span>🛑🎙️</span>}
          <button
            className="start"
            onClick={() => setIsListening((prevState) => !prevState)}
          >
            Start/Stop
          </button>
          <button className="save" onClick={handleSaveNote} disabled={!note}>
            Save Note
          </button>
          <p>{note}</p>
        </div>
        <div className="box">
          <h2>Text</h2>
          {savedNotes.map((n) => (
            <p key={n}>{n}</p>
          ))}
        </div>
      </div>
    </>
  );
}

export default Body;
