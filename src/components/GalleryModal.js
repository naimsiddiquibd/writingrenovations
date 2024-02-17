function GalleryModal(props) {
  return (
    <>
      <section
        className={`gallery__modal ${
          !props.active ? "gallery__modal--hidden" : ""
        }`}
      >
        {props.data.type === "video" ? (
          <video
            src="/img/galleryVideo.mp4"
            className="gallery__full-img"
            controls
            muted
            autoPlay
          ></video>
        ) : (
          <img
            src={`/img/${props.data.action}`}
            alt="Portfolio reference"
            className="gallery__full-img"
          />
        )}

        <figure className="gallery__modal-close" onClick={props.onToggle}>
          <span className="gallery__modal-line"></span>
          <span className="gallery__modal-line gallery__modal-line--2"></span>
        </figure>
      </section>
      <div
        className={`overlay ${!props.active ? "overlay--hidden" : ""}`}
        onClick={props.onToggle}
      ></div>
    </>
  );
}

export default GalleryModal;
