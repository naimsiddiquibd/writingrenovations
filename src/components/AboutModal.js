function AboutModal(props) {
  return (
    <>
      <div className={`modal ${!props.active ? "modal--hidden" : ""}`}>
        <h2 className="titles">Hi again! I'm Laura</h2>
        <p className="modal__text">
          a writer whose least favorite section to write is the About Me blurb,
          but here we are! <br />
          As a creative entrepreneur, I’ve developed, grown and launched
          lifestyle brands with unique and compelling copy for over 15 years. My
          experience as a ghostwriter began in college, writing and editing my
          friends' papers so they could stress less and have more fun. That's
          exactly what I want to do for YOU; give you more time to focus on what
          brings you fulfillment, success and peace of mind. Whether you’re a
          creative entrepreneur or someone suffering from writer’s block blues,
          I got you!
        </p>

        <p className="modal__text">
          My writing spans more genres than there are numbers on a roulette
          wheel (but I promise, everyone wins). Nothing makes me happier than
          getting positive feedback from my clients! I truly find pleasure in
          helping others find their voice through the written word. Everyone has
          a story (or two😉). Let’s tell yours!
        </p>
        <p className="modal__text">
          When I'm not leisurely looking up word origins, I'm a ride-or-die NYC
          girl, a beginner surfer, a former matchmaker and everyone’s pro-bono
          therapist. If you think we’re a good fit, let’s work together! I’m
          excited to hear from you!
        </p>

        <a
          href="mailto:laura@writingrenovations.com"
          className="main-btn"
          target="blank"
        >
          CONTACT
        </a>
        <button className="modal__close" onClick={props.toggle}>
          Close
        </button>
      </div>
      <div
        className={`overlay ${!props.active ? "overlay--hidden" : ""}`}
        onClick={props.toggle}
      ></div>
    </>
  );
}

export default AboutModal;
