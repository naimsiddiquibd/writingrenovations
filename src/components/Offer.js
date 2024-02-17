// import { useRef, useState } from "react";

function Offer() {
  // const [fileName, setFileName] = useState("Attach File");
  // const fileRef = useRef();

  // const changeFile = (e) => {
  //   setFileName(fileRef.current.files[0].name);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const form = e.target;

  //   const name = form.querySelector('input[name="name"]');
  //   const email = form.querySelector('input[name="email"]');
  //   const file = form.querySelector('input[name="file"]');
  // };

  return (
    <section className="offer sec-p" id="offer">
      {/* <form
        action="https://formspree.io/f/moqgjwvb"
        method="POST"
        className="offer__form sec-p"
        encType="multipart/form-data"
        // onSubmit={handleSubmit}
      >
        <input name="name" type="text" className="offer__input" placeholder="First Name" required />
        <input name="email" type="email" className="offer__input" placeholder="E-mail" required />
        <label htmlFor="file" className="offer__input" onChange={changeFile}>
          {fileName}
        </label>
        <input
          name="file"
          type="file"
          id="file"
          className="offer__input"
          hidden
          ref={fileRef}
          onChange={changeFile}
        />
        <button className="main-btn">Submit</button>
      </form> */}

      {/* <div className="offer__form sec-p">
        <p className="offer__title titles">Redeem offeer here</p>
        <a
          href="https://forms.gle/bPhuWqj2L7Q8FvYx5"
          target="blank"
          className="main-btn"
        >
          Offer Form
        </a>
      </div> */}

      <div className="offer__caption sec-p">
        <p className="offer__title">
          <span className="titles">Exclusive Offer:</span> FREE Writing Review
          and Touch-Up
        </p>
        <p className="offer__text">
          Unlock a complimentary writing review and touch-up. Simply fill in the
          required information, and attach your file to take advantage of this
          exclusive offer. <br /> (Please don't worry about typos or grammar;
          that's my job, not yours)!
        </p>

        <a
          href="https://forms.gle/bPhuWqj2L7Q8FvYx5"
          target="blank"
          className="main-btn"
        >
          Submit Document
        </a>
      </div>
    </section>
  );
}

export default Offer;
