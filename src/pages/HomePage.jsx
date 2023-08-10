import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { setTrainerG } from "../store/slices/trainer.slice";
import { useNavigate } from "react-router-dom";
import "./styles/HomePage.css";

const HomePage = () => {
  const inputTrainer = useRef();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    //e.target.inputTrainer.value
    dispatch(setTrainerG(inputTrainer.current.value));
    navigate("/pokedex");
  };

  return (
    <div className="homepage-container">
      <div className="homepage">
        <img className="homepage_img" src="/img/pokedex.info.png" alt="" />
        <h2 className="homepage_title2">Hi trainer</h2>
        <p className="homepage_info">
          To get started with the application, give me your trainer name 😉.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            className="homepage_button_info"
            id="inputTrainer"
            ref={inputTrainer}
            type="text"
          />
          <button className="homepage_button">Gotta catch'em all!</button>
        </form>
        <footer className="home_footer">
          <div className="home_footer_line">
            <div className="home_footer_circle">
              <div className="home_footer_circle_center"></div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
