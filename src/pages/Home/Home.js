import React from "react";
import {
  HeroCarousel,
  Transition,
  Collage,
  Events,
  HeroShop,
} from "../../components";
import "./home.css";

const Home = () => {
  return (
    <main className="home">
      {/* <div className={isLoad ? "preloader hidden" : "preloader"}></div> */}
      <section className="hero">
        <HeroCarousel />
      </section>
      <Collage />
      <section className="home-transition transition-1"></section>
      <Events />
      <Transition
        quote={
          "Creating art is like unlocking a door to enter into a world of my own making - where I can explore my imagination, express my emotions, and bring my ideas to life!"
        }
      />
      <section className="home-transition transition-2"></section>
      <HeroShop />
    </main>
  );
};

export default Home;
