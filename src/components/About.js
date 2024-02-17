import { useState } from "react";
import AboutModal from "./AboutModal";

function About() {
  const [modalActive, setModalActive] = useState(false);

  const handlerModal = () => {
    setModalActive((state) => !state);
  };

  return (
    <>
      <section className="about sec-p my-general" id="about">
        <figure className="about__pic">
          <img
            src="/img/laura.webp"
            alt="Laura Copy Writter"
            className="about__img"
          />
        </figure>
        <div className="about__content">
          <h2 className="titles">Hi again! I'm Laura,</h2>
          <p className="about__text mt-mid mb-mid">
            a writer whose least favorite section to write is the About Me
            blurb, but here we are! As a creative entrepreneur, I’ve developed,
            grown and launched lifestyle brands with unique and compelling copy
            for over 15 years. My experience as a ghostwriter began in college,
            writing and editing my friends' papers so they could stress less and
            have more fun. That's exactly what I want to do for YOU; give you
            more time to focus on what brings you fulfillment, success and peace
            of mind. Whether you’re a creative entrepreneur or someone suffering
            from writer’s block blues, I got you!
          </p>
          <button className="main-btn" onClick={handlerModal}>
            Read More
          </button>
        </div>
      </section>

      <AboutModal active={modalActive} toggle={handlerModal} />
    </>
  );
}

export default About;
