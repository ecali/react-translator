import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Word } from "./components/Word";

function App() {
  const [text, setText] = useState('');

  return (
    <div className="App">
      <div className="container">
        <Header />
        <Word text={text} setText={setText}/>

      </div>
    </div>
  );
}

export default App;
