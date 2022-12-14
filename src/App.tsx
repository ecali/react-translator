import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Word } from "./components/Word";

function App() {
  const [text, setText] = useState("");
  const [showTranslate, setShowTranslate] = useState(false);

  const handleTranslate = () => {
    setShowTranslate(true);
  }

  return (
    <div className="App">
      <div className="container">
        <Header />
        <Word text={text} setText={setText} />
        <div className="spacer"></div>
        <button onClick={handleTranslate} className="main-button" disabled={!text}>
          Translate
        </button>
        <div className="spacer"></div>
        {showTranslate ? <Word text={text} setText={setText} disable={true} /> : ""}
      </div>
    </div>
  );
}

export default App;
