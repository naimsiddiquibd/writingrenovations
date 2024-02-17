function DoCards(props) {
  return (
    <div className="cards">
      <img className="cards__img" src={`/img/${props.img}`} alt={props.title} />
      <h3 className="cards__title small-h">{props.title}</h3>
      <p className="cards__text">{props.text}</p>
    </div>
  );
}

export default DoCards;
