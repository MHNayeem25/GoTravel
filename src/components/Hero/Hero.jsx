import React, { useState } from "react";
import "./Hero.css";

// import video from "/vids/Home.mp4";

const images = [
  {
    id: 1,
    src: "/images/Hero0.jpg",
    alt: "Image 1",
  },
  {
    id: 2,
    src: "/images/Hero1.jpg",
    alt: "Image 2 ",
  },
  {
    id: 3,
    src: "/images/Hero2.jpg",
    alt: "Image 3",
  },
  {
    id: 4,
    src: "/images/Hero3.jpg",
    alt: "Image 3",
  },
  {
    id: 5,
    src: "/images/Hero4.jpg",
    alt: "Image 3",
  },
];

function Hero() {
  const [hoverBtn, setHoverBtn] = useState(false);
  const [picNum, setPicNum] = useState(0);
  const increment = () => {
    if (picNum < 4) setPicNum(picNum + 1);
  };
  const decrement = () => {
    if (picNum > 0) setPicNum(picNum - 1);
  };
  const iconStyle = hoverBtn
    ? "fa-solid fa-arrow-right fa-shake"
    : "fa-solid fa-arrow-right";

  return (
    <>
      <div
        className="hero"
        style={{ backgroundImage: `url(${images[picNum].src})` }}
      >
        {/* <video src={video} autoPlay loop muted /> */}
        <div className="hero-content">
          <h1>
            Explore the world with <br />
            exciting people
          </h1>
          <p>We help people to find ideal company for the join trips</p>
          <div
            className="home-btn"
            onMouseEnter={() => setHoverBtn(true)}
            onMouseLeave={() => setHoverBtn(false)}
          >
            <button className="btns">
              Start your trips <i className={iconStyle}></i>
            </button>
          </div>
        </div>
        <div className="next-btns">
          <button className="next-btn" onClick={decrement}>
            <i className="fa-solid fa-arrow-left" style={{ padding: 0 }}></i>
          </button>
          <span>{picNum}/4</span>
          <button
            className="next-btn"
            onClick={increment}
            style={{ padding: 0 }}
          >
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>

        <div className="hero-options">
          <div className="hrule" />
        </div>
        <div className="pic-info">
          <article>
            <h2>01</h2>
            <h5>Choose place, activity and time</h5>
            <p>
              Every one can choose a root and actiivity according to his taste
              and possibilites
            </p>
          </article>
          <article>
            <h2>02</h2>
            <h5>Find people who have the same....</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          </article>
          <article>
            <h2>03</h2>
            <h5>Start chat and offer to go on....</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          </article>
        </div>
      </div>
    </>
  );
}

export default Hero;
