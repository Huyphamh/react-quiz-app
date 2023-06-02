import React from "react";
import "../css/quiz.css"
import medal from "../img/medal.png";
import { Link } from "react-router-dom";
const Congratulations = (props) => {
  const a = props.score;
  const b = props.data.length;
  return (
    <div className="body">
      <div className="abc ">
        <img className=" object-cover w-40 " src={medal} alt=""></img>
        <h1 className=" font-bold text-2xl">Congratulations!!!</h1>
        <p className=" text-lg">You are amazing!!!</p>
        <h2 className="mb-2">
          {a} / {b} correct answers in {props.time} seconds.
        </h2>
        <Link to="/">
          <button className="w-[150px] h-[40px] bg-red-600 rounded-2xl">
            Play Again
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Congratulations;
