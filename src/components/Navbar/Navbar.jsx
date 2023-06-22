import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [mobileWin, setmobileWin] = useState(true);

  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => {
    setClick(false);
  };

  const showMenu = () => {
    if (window.innerWidth <= 950) {
      setmobileWin(false);
    } else {
      setmobileWin(true);
      setClick(false);
    }
  };
  window.addEventListener("resize", showMenu);

  useEffect(() => {
    showMenu();
  }, []);
  return (
    <>
      {/* <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            GO-TRAVEL <i class="fa-solid fa-earth-americas"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          {/* if clicked on ul mobile device menu will dissapear */}
      {/* <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Demos
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>nav-links-mobileh
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Pages
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
          </ul>
          {button && (
            <Button buttonStyle="btn--outline">START YOUR TRIPS</Button>
          )}
        </div>
      </nav> */}
      <nav>
        <Link className="home" to="/">
          <i class="fa-solid fa-location-pin"></i> GoTravel
        </Link>

        <div className={click ? "menu active" : "menu"}>
          <Link to="/" className="nav-links" onClick={closeMobileMenu}>
            Demos
          </Link>
          <Link to="/" className="nav-links" onClick={closeMobileMenu}>
            About
          </Link>
          <Link to="/" className="nav-links" onClick={closeMobileMenu}>
            Blog
          </Link>
          <Link to="/" className="nav-links" onClick={closeMobileMenu}>
            Pages
          </Link>
          <Link to="/" className="nav-links" onClick={closeMobileMenu}>
            Contact
          </Link>
        </div>

        {!mobileWin && (
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
