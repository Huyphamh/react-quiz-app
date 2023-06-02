import React, { useEffect, useState } from "react";
import Congratulations from "./Congratulations";
import Completed from "./Completed";
import axios from "axios";

function Quizz(props) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showButtonNext, setShowButtonNext] = useState(false);
  const [api, setApi] = useState([]);

  useEffect(() => {
    const callAPI = async () => {
      const response = await axios
        .get("https://opentdb.com/api.php?amount=5")
        .then();
      if (response.data.results) {
        setApi(response.data.results);
      }
    };
    callAPI();
  }, []);
  const stopTime = props.stopTimer; //Nhận props từ App.js
  const handleOptionClick = (option) => {
    setSelectedOption(option); //Active vào đáp án
    setShowButtonNext(true); //Hiển thị nút Next
  };

  const handleNextClick = () => {
    if (selectedOption === api[currentQuestion].correct_answer) {
      //chọn đúng đáp án thì +1
      setScore(score + 1);
    }
    setSelectedOption(null); //reset lại active đáp án
    setShowButtonNext(false); //reset lại button next
    setCurrentQuestion(currentQuestion + 1); //qua câu tiếp theo
  };

  if (!api.length)
    return <div className="body font-bold text-xl">Loading...</div>;

  if (currentQuestion === api.length) {
    stopTime();
    return score > 2 ? (
      <Congratulations score={score} data={api} time={props.time} />
    ) : (
      <Completed score={score} data={api} time={props.time} />
    );
  }
  return (
    <div className="body">
      <h2 className="mb-5 font-bold text-xl">
        Question {currentQuestion + 1}/{api.length}
      </h2>
      <p className=" text-center p-5">{api[currentQuestion].question}</p>
      {api[currentQuestion].incorrect_answers
        .concat(api[currentQuestion].correct_answer)
        .sort()
        .map((option, index) => (
          <button
            key={option}
            onClick={() => handleOptionClick(option)}
            className={option === selectedOption ? "selected" : "text"}
          >
            {String.fromCharCode(index + 65)}. {option}
          </button>
        ))}

      <button
        className={showButtonNext ? "active" : "next"}
        disabled={!selectedOption}
        onClick={handleNextClick}
      >
        Next
      </button>
    </div>
  );
}

export default Quizz;
