import React, { useEffect, useState } from "react";
import IntroOverlay from "../components/introOverlay";
import Banner from "../components/banner";
import Cases from "../components/cases";
import Services from "../components/services";
import { logoReveal } from "../animations/logoReveal";
import gsap from "gsap";

let tl = gsap.timeline();

const homeAnimation = (completeAnimation) => {
  tl.from(".line span", 0.8, {
    y: 100,
    ease: "power4.out",
    delay: 0.8,
    skewY: 7,
    stagger: {
      amount: 0.66,
    },
    onStart: logoReveal,
  })
    .to(".overlay-top", 1.24, {
      height: 0,
      ease: "expo.inOut",
      stagger: {
        amount: 0.12,
      },
    })
    .to(".overlay-bottom", 1.24, {
      width: 0,
      ease: "expo.inOut",
      delay: -0.8,
      stagger: {
        amount: 0.4,
      },
    })
    .to(".intro-overlay", 0, {
      css: { display: "none" },
    })
    .from(".case-image img", 1.6, {
      scale: 1.4,
      ease: "expo.inOut",
      delay: -2,
      stagger: {
        amount: 0.4,
      },
      onComplete: completeAnimation,
    });
};

const Home = ({ dimensions }) => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const completeAnimation = () => {
    setAnimationComplete(true);
  };

  useEffect(() => {
    homeAnimation(completeAnimation);
  }, []);

  useEffect(() => {
    // const vh = () => {
    //   return dimensions.height * 0.01;
    // };
    let vh = dimensions.height * 0.01;

    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, [dimensions.width]);

  return (
    <>
      {animationComplete === false ? <IntroOverlay /> : ""}
      <Banner />
      {/* <Cases />
      <Services /> */}
    </>
  );
};

export default Home;
