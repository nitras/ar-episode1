import gsap from "gsap";

let tl = gsap.timeline();

export const logoReveal = () => {
  tl.staggerFrom(
    ".st0",
    0.86,
    {
      opacity: 0,
      y: -77,
      fill: "#ffffff",
      delay: 1.8,
      //ease: "easeOutBack",
      ease: "expo.Out",
    },
    0.12
  );

  //   .staggerTo(".st0", 0.99, {
  //   opacity: 1,
  //   fill: "#141313",
  //   ease: "easeOutBack",

  //   //ease: "expo.inOut"
  // });
  //.to(".diagonaal", 0.3, { fill: "#db3d32" })
  //.to(".diagonaal", 0.3, { fill: "#141313", delay: 0.2 });
};
