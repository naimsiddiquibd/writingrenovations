function TesItem(props) {
  const text = props.textItems.map((t, i) => (
    <span key={i} className={`${t.bold ? "bold" : ""}`}>
      {t.text}
    </span>
  ));

  return (
    <div className="tes__item">
      <p className="tes__text">''{text}''</p>
      <p className="tes__name titles titles-sm">{props.name}</p>
    </div>
  );
}

export default TesItem;
