function GalleryItems(props) {
  const action = props.action || props.img;
  return (
    <div
      className="gallery__item"
      onClick={() => props.onToggle({ action, type: props.type })}
    >
      <img
        src={`/img/${props.img}`}
        alt={props.name}
        className="gallery__img"
      />
    </div>
  );
}

export default GalleryItems;
