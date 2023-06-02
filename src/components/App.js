import "../css/App.css"
import HomePage from "./HomePage";
import { Routes, Route } from "react-router-dom";
import Quizz from "./Quizz";
import { useRef, useState } from "react";

function App() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  function startTimer() {
    setTime(0);
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  }

  function stopTimer() {
    clearInterval(intervalRef.current);
  }
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<HomePage startTimer={startTimer}></HomePage>}
        ></Route>
        <Route
          path="/start"
          element={<Quizz stopTimer={stopTimer} time={time}></Quizz>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
