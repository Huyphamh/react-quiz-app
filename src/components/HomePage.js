import { Link } from "react-router-dom";
import "../css/quiz.css"
const HomePage = (props) => {
  return (
    <div className="body">
      <div className=" content">
        <p className=" font-bold text-xl">Welcome to ReactJS App</p>
        <i className="bx bxl-react text-5xl text-blue-400"></i>
      </div>

      <i className="moving icon bx bx-ghost"></i>
      <Link to="/start">
        <button onClick={props.startTimer} className="button">
          Start Quiz!
        </button>
      </Link>
      <div className="huy">
        <p>This application was developed by Huy Pham </p>
        <a href="https://www.facebook.com/huy.phamcong.988/">
          <i className="bx bxl-facebook-square text-blue-400"></i>
        </a>
      </div>
    </div>
  );
};

export default HomePage;
