import { useState } from "react";
import TesItem from "./TestItem";

function Testimonials() {
  const [slide, setSlide] = useState(1);

  const changeSlide = (dir) => {
    if (dir === "next") {
      if (slide === 5) setSlide(1);
      if (slide !== 5) setSlide((state) => state + 1);
    }

    if (dir === "prev") {
      if (slide === 1) setSlide(5);
      if (slide !== 1) setSlide((state) => state - 1);
    }
  };

  return (
    <section className="tes sec-p">
      <div className="tes__text">
        <h2 className="titles">A LITTLE APPLAUSE</h2>
        <div className="tes__controllers mt-mid">
          <figure
            className="tes__arrow"
            onClick={(e) => {
              changeSlide("prev");
            }}
          >
            <img src="/img/arrow.svg" alt="Left" className="tes__icon" />
          </figure>
          <figure
            className="tes__arrow tes__arrow--right"
            onClick={(e) => {
              changeSlide("next");
            }}
          >
            <img src="/img/arrow.svg" alt="Right" className="tes__icon" />
          </figure>
        </div>
      </div>
      <div className="tes__cards-cont">
        <div className={`tes__cards ${"tes__cards--" + slide}`}>
          <TesItem
            textItems={[
              { text: "We brought Laura on as a" },
              { text: " branding consultant", bold: true },
              {
                text: " for our fitness apparel startup. She did extensive research on our target demographic and created a",
              },
              { text: " superb deck", bold: true },
              { text: " with our graphic designer. Her" },
              { text: " attention to detail and creativity", bold: true },
              { text: " hit every mark." },
              { text: " We felt prepared and confident", bold: true },
              { text: " to pitch buyers and potential investors." },
            ]}
            name="Andrew T."
          />
          <TesItem
            textItems={[
              { text: "Before working with Laura," },
              {
                text: " I struggled to pick a name and tagline for my new business.",
                bold: true,
              },
              {
                text: " What I came with was already used or so cliche. Laura came up with at least 7 options for both the business name and taglines and made sure that neither was being used by another similar business.",
              },
              { text: " I’m relieved and excited", bold: true },
              { text: " that she" },
              { text: " helped", bold: true },
              { text: " make my" },
              { text: " business fresh and unique!", bold: true },
            ]}
            name="Ella B."
          />
          <TesItem
            textItems={[
              { text: "Working with Laura was" },
              { text: " a game-changer for my wellness business.", bold: true },
              {
                text: " Her writing and creative perspective",
              },
              { text: " gave me the confidence to launch", bold: true },
              { text: " sooner than I anticipated." },
              { text: " I recommend her copywriting", bold: true },
              { text: " services to any" },
              { text: " entrepreneur", bold: true },
              { text: " looking to take their business to the next level." },
            ]}
            name="Chris K."
          />
          <TesItem
            textItems={[
              { text: "As a relationship coach, I’m often asked to" },
              { text: " write op-eds and blogs", bold: true },
              {
                text: " about dating in today’s crazy world. My job is stressful enough and don’t have the time or finesse to convey my words in writing. When a colleague recommended Laura, I was thrilled to have a",
              },
              { text: " go-to ghostwriter who gets me", bold: true },
              { text: " and can" },
              { text: " put my voice and message on paper.", bold: true },
              { text: " I can focus on my clients and am" },
              { text: " so much less stressed", bold: true },
              { text: " having her on my team." },
            ]}
            name="Jennifer A."
          />
          <TesItem
            textItems={[
              {
                text: "As an artist, my medium is paint, not words. I needed a",
              },
              { text: " bio for submissions", bold: true },
              {
                text: " and was struggling to write it. Laura",
              },
              { text: " crafted my artist bio", bold: true },
              {
                text: " so perfectly and truly helped make sense of what I was trying to convey in a few short paragraphs.",
              },
            ]}
            name="Carole D."
          />
        </div>
      </div>
      <div className="tes__controllers tes__controllers--sm ">
        <figure
          className="tes__arrow"
          onClick={(e) => {
            changeSlide("prev");
          }}
        >
          <img src="/img/arrow.svg" alt="Left" className="tes__icon" />
        </figure>
        <figure
          className="tes__arrow tes__arrow--right"
          onClick={(e) => {
            changeSlide("next");
          }}
        >
          <img src="/img/arrow.svg" alt="Right" className="tes__icon" />
        </figure>
      </div>
    </section>
  );
}

export default Testimonials;
