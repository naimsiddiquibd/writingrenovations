import { useState } from "react";
import GalleryItems from "./GallertyItems";
import GalleryModal from "./GalleryModal";

function Gallery() {
  const [modalActive, setModalActive] = useState();
  const [modalData, setModalData] = useState({
    action: "laura_sm.webp",
    type: "img",
  });

  const toggleModal = (data) => {
    if (data.type === "link") {
      window.open(data.action, "_blank");
      return;
    }
    setModalData(data);
    setModalActive((state) => !state);
  };

  return (
    <>
      <section className="gallery mt-mid sec-p">
        <GalleryItems
          img="gallery13.webp"
          name="Downtown dirty"
          type="img"
          onToggle={toggleModal}
        />
        <GalleryItems
          img="gallery11.webp"
          name="Downtown dirty"
          type="img"
          onToggle={toggleModal}
        />
        <GalleryItems
          img="gallery12.webp"
          name="Downtown dirty"
          type="img"
          onToggle={toggleModal}
        />
        <GalleryItems
          img="gallery1.webp"
          name="Frump free fashion"
          type="img"
          onToggle={toggleModal}
        />

        <GalleryItems
          img="gallery3.webp"
          name="Weapons of seduction"
          type="img"
          onToggle={toggleModal}
        />
        <GalleryItems
          img="gallery4.webp"
          name="Weapons of seduction"
          type="img"
          onToggle={toggleModal}
        />
        <GalleryItems
          img="gallery5.webp"
          name="Downtown Dirty"
          type="img"
          onToggle={toggleModal}
        />
        <GalleryItems
          img="gallery6.webp"
          name="Bang Bang"
          type="img"
          onToggle={toggleModal}
        />
        <GalleryItems
          img="gallery7.webp"
          name="Weapons of seduction"
          type="img"
          onToggle={toggleModal}
        />
        <GalleryItems
          img="gallery8.webp"
          name="Weapons of seduction"
          type="img"
          onToggle={toggleModal}
        />
        <GalleryItems
          img="gallery9.webp"
          name="Filtleisure"
          type="img"
          onToggle={toggleModal}
        />
        <GalleryItems
          img="gallery10.webp"
          name="Slimming"
          type="img"
          onToggle={toggleModal}
        />
        <GalleryItems
          img="gallery2.webp"
          name="Experiential Fearless Fashion"
          type="img"
          onToggle={toggleModal}
        />
        <GalleryItems
          img="gallery15.webp"
          name="Filtleisure"
          type="img"
          onToggle={toggleModal}
        />
        <GalleryItems
          img="gallery16.webp"
          name="Filtleisure"
          type="img"
          onToggle={toggleModal}
        />
        <GalleryItems
          img="gallery14.webp"
          name="Bang Bang"
          type="img"
          onToggle={toggleModal}
        />
        <GalleryItems
          img="gallery17.webp"
          name="Ghostwritten"
          action="https://writing-host-test.web.app/img/ref/BabyBirthdayBlues.pdf"
          type="link"
          onToggle={toggleModal}
        />
        <GalleryItems
          img="gallery19.webp"
          name="NY Daily News"
          type="link"
          action="https://www.nydailynews.com/2015/09/20/readers-sound-off-on-secret-gardens-ghost-writers-and-the-balls/"
          onToggle={toggleModal}
        />
        <GalleryItems
          img="gallery21.webp"
          name="Ghostwritten"
          action="https://www.huffpost.com/entry/confessions-of-a-nyc-matc_b_6142720"
          type="link"
          onToggle={toggleModal}
        />
        <GalleryItems
          img="gallery20.webp"
          name="Wings"
          type="video"
          action="galleryVideo.mp4"
          onToggle={toggleModal}
        />
      </section>

      <GalleryModal
        active={modalActive}
        data={modalData}
        onToggle={toggleModal}
      />
    </>
  );
}

export default Gallery;
