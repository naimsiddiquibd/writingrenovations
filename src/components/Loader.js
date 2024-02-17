function Loader() {
  return (
    <div className="loader">
      <figure className="loader__icon">
        <span className="loader__line loader__line--left"></span>
        <span className="loader__line loader__line--center"></span>
        <span className="loader__line loader__line--right"></span>
      </figure>
      {/* <p className="loader__text">Loading</p> */}
    </div>
  );
}

export default Loader;
