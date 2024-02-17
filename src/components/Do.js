import DoCards from "./DoCards";

function Do() {
  return (
    <section className="do my-general sec-p" id="do">
      <h2 className="titles titles--c">WHAT I DO</h2>
      <div className="cards__container my-general">
        <DoCards
          title="Branding"
          text="Your business name and tagline should represent what sets you apart and makes a memorable impression."
          img="branding.svg"
        />
        <DoCards
          title="Email Marketing"
          text="Build your audience and ignite your community with a brand voice that sells and tells your story."
          img="emails.svg"
        />
        <DoCards
          title="Pitch Decks"
          text="If you’re looking to attract and impress potential clients, buyers or investors, a killer deck is essential."
          img="pitch.svg"
        />
        <DoCards
          title="Product Descriptions"
          text="Your products or services should be clear, compelling and irresistible."
          img="product.svg"
        />
        <DoCards
          title="Speeches"
          text="Whether your purpose is to inform, persuade or entertain, choosing the right words can make all the difference."
          img="speech.svg"
        />
        <DoCards
          title="Op-eds"
          text="Crafting op-eds with passion, purpose and perspective is one of my ghostwriting specialties."
          img="write.svg"
        />
        <DoCards
          title="Admission Essays"
          text="25% of your university application is contingent on your essay. Telling your unique story is essential."
          img="essay.svg"
        />
        <DoCards
          title="ESL Editing"
          text="If English is not your first language, I will ensure that your copy is polished, clear and effective."
          img="esl_edit.svg"
        />
      </div>
    </section>
  );
}

export default Do;
