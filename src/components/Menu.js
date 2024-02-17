import { useState } from "react";
import ModalMenu from "./ModalMenu";

function Menu(props) {
  const [modalActive, setModalActive] = useState(false);

  const logos = [
    "testLogo.svg",
    "testLogo.svg",
    "testLogo.svg",
    "testLogo.svg",
  ];

  const [curLogo, setCurLogo] = useState(1);

  const toggleLogo = () => {
    setCurLogo((state) => {
      if (curLogo === 3) return 0;
      return state + 1;
    });
  };

  const toggleMenuHandler = () => {
    setModalActive((state) => !state);
  };

  return (
    <>
      <nav className="nav sec-p" id="top">
        <figure className="nav__logo" onClick={toggleLogo}>
          <img
            src={`/img/${logos[curLogo]}`}
            alt="WR Logo"
            className="nav__img"
          />
          <img
            src={`/img/${logos[curLogo]}`}
            alt="WR Logo"
            className="nav__img nav__img--sm"
          />
        </figure>

        <button className="nav__toggle" onClick={toggleMenuHandler}>
          <span className="nav__lines"></span>
        </button>

        <ul className="nav__links">
          {!props.portfolio ? (
            <>
              <li className="nav__item">
                <a href="#about" className="nav__link">
                  About
                </a>
              </li>
              <li
                className="nav__item"
                onClick={() => props.onToggle("activate")}
              >
                <span className="nav__link">Portfolio</span>
              </li>
              <li className="nav__item">
                <a href="#offer" className="nav__link">
                  Free Audit
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="mailto:laura@writingrenovations.com"
                  className="nav__link"
                  target="blank"
                >
                  Contact
                </a>
              </li>
            </>
          ) : (
            <li className="nav__item" onClick={() => props.onToggle()}>
              <span className="nav__link">Home Page</span>
            </li>
          )}

          {/* <a
            href="https://calendly.com/writingrenovationscalendar"
            target="blank"
            className="main-btn"
          >
            BOOK A CALL
          </a> */}
        </ul>
      </nav>
      <ModalMenu
        active={modalActive}
        toggle={toggleMenuHandler}
        tPort={props.onToggle}
        portfolio={props.portfolio}
      />
    </>
  );
}

export default Menu;
