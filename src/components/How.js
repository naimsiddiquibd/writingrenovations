function How() {
  return (
    <section className="how sec-p">
      <h2 className="titles mb-mid">HOW IT WORKS</h2>
      <div className="how__cards">
        <div className="how__card">
          <figure className="how__fig">
            <img src="/img/chat.svg" alt="Chat" className="how__img" />
          </figure>
          <p className="how__text">
            Let’s schedule a call so we can have a chat about what you need and
            how we can work together to make your project come to life.
          </p>
        </div>
        <div className="how__card">
          <figure className="how__fig">
            <img src="/img/write.svg" alt="Chat" className="how__img" />
          </figure>
          <p className="how__text">
            I'll send you a proposal with my initial ideas, an estimated budget
            and a time frame for completion. If we’re on the same page, I get to
            work doing what I do best!
          </p>
        </div>
        <div className="how__card">
          <figure className="how__fig">
            <img src="/img/explore.svg" alt="Draft" className="how__img" />
          </figure>
          <p className="how__text">
            I like to present clients with an initial draft so they can request
            revisions or give me their seal of approval.
          </p>
        </div>
      </div>
    </section>
  );
}

export default How;
