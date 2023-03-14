import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { HeroCarousel, Transition, Collage } from "../../components";
import "./home.css";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store/authSlice";
import { Link } from "react-router-dom";

const Home = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const amount = useSelector((state) => state.cart.amount);
  const dispatch = useDispatch();

  return (
    <main className="home">
      {/* <div className={isLoad ? "preloader hidden" : "preloader"}></div> */}
      <section className="hero">
        <HeroCarousel />
      </section>
      <Transition quote={"Health - Happiness - Adventure"} />
      <Collage />
      <Transition
        quote={
          "Creating art is like unlocking a door to enter into a world of my own making - where I can explore my imagination, express my emotions, and bring my ideas to life!"
        }
      />
    </main>
  );
};

export default Home;
