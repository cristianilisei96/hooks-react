import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./HomePage";
import Counter from "./Components/Counter";
import CounterReducer from "./Components/CounterReducer";
import CallAPI from "./Components/CallAPI";

function App() {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "useState(Counter)", href: "/use-state" },
    { name: "useReducer(Counter)", href: "/use-reducer" },
    { name: "useEffect(APIRandomUser)", href: "/use-effect" },
  ];

  return (
    <>
      <Navbar navigation={navigation} />
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage navigation={navigation} />} />
          <Route path="/use-state" element={<Counter />} />
          <Route path="/use-reducer" element={<CounterReducer />} />
          <Route path="/use-effect" element={<CallAPI />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
