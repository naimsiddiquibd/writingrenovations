function ModalMenu(props) {
  return (
    <div
      className={`modal-menu sec-p ${
        !props.active ? "modal-menu--hidden" : ""
      }`}
    >
      <div className="modal-menu__top">
        <figure className="modal-menu__logo">
          <img
            src="/img/testlogo4.svg"
            alt="WR logo"
            className="modal-menu__img"
          />
        </figure>
        <button className="modal-menu__close" onClick={props.toggle}>
          <span className="modal-menu__lines"></span>
        </button>
      </div>

      <div className="modal-menu__links">
        {!props.portfolio ? (
          <>
            <a
              href="#about"
              className="modal-menu__link"
              onClick={props.toggle}
            >
              About Me
            </a>
            <a href="#do" className="modal-menu__link" onClick={props.toggle}>
              What I Do
            </a>
            <span
              className="modal-menu__link"
              onClick={() => {
                props.toggle();
                props.tPort("activate");
              }}
            >
              Portfolio
            </span>
            <a
              href="#offer"
              className="modal-menu__link"
              onClick={props.toggle}
            >
              Free Audit
            </a>
            <a
              href="mailto:laura@wtitingrenovations.com"
              className="modal-menu__link"
              onClick={props.toggle}
            >
              Contact
            </a>
          </>
        ) : (
          <span
            className="modal-menu__link"
            onClick={() => {
              props.toggle();
              props.tPort();
            }}
          >
            Home Page
          </span>
        )}

        <a
          href="https://calendly.com/writingrenovationscalendar"
          target="blank"
          className="modal-menu__link"
        >
          Book A Call
        </a>
      </div>
    </div>
  );
}

export default ModalMenu;
