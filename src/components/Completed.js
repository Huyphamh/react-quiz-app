import React from "react";
import completed from "../img/completed.png";
import { Link } from "react-router-dom";
const Completed = (props) => {
  const a = props.score;
  const b = props.data.length;
  return (
    <div className="body">
      <div className="abc ">
        <img className=" object-cover w-40 " src={completed} alt=""></img>
        <h1 className=" font-bold text-2xl">Completed!!!</h1>
        <p>Better luck next time!</p>
        <h2>
          {a} / {b} correct answers in {props.time} seconds.
        </h2>
        <Link to="/">
          <button className="w-[150px] h-[40px] bg-red-600 rounded-2xl mt-4 text-white font-bold">
            Play Again
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Completed;
