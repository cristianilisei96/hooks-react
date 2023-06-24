import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./HomePage";
import Counter from "./Components/Counter";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/use-state" element={<Counter />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
