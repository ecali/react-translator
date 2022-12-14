import "./App.css";
import { Header } from "./components/Header";
import { Word } from "./components/Word";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Word />
      </div>
    </div>
  );
}

export default App;
