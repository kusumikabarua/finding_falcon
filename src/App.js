
import './App.css';
import FindingFalcon from './Components/FindingFalcon';
import Success from "./Components/Success"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Routes>   
        <Route path="/success" element={<Success />}/>
        <Route exact path="/" element={<FindingFalcon />}/>
      </Routes>
    </div>
  );
}

export default App;
