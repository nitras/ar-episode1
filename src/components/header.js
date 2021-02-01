import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { ReactComponent as UpArrow } from "../assets/up-arrow-circle.svg";
import { ReactComponent as Logo } from "../assets/uw-grafisch-ontwerper-nitras-logo.svg";
import { openMenu, closeMenu } from "../animations/menuAnimations";

// Define reducer

const Header = ({ history, dimensions }) => {
  const [menuState, setMenuState] = useState({ menuOpened: false });

  useEffect(() => {
    //Listening for page changes.
    history.listen(() => {
      setMenuState({ menuOpened: false });
    });
    if (menuState.menuOpened === true) {
      openMenu(dimensions.width);
    } else if (menuState.menuOpened === false) {
      closeMenu();
    }

    //logo = document.querySelector("#uw-grafisch-ontwerper");
    /*
    const hoverEffect = gsap.timeline({
    paused: !0
}).to(".diagonaal", {
    duration: .23,
    fill: "#f48372",
    ease: "easeOutBack"
});
  */
  });

  return (
    <div className="header">
      <div className="container">
        <div className="row v-center space-between">
          <div className="logo">
            <NavLink to="/" exact>
              <Logo />
              <h1 className="logoName">uw grafisch ontwerper — nitras</h1>
            </NavLink>
          </div>
          <div className="nav-toggle">
            <div
              onClick={() => setMenuState({ menuOpened: true })}
              className="hamburger-menu"
            >
              <span></span>
              <span></span>
            </div>
            <div
              className="hamburger-menu-close"
              onClick={() => setMenuState({ menuOpened: false })}
            >
              <UpArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withRouter(Header);
