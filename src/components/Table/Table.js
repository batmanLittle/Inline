import "./Table.css";

function Table({ items, title, windowWidth }) {
  return (
    <div className="table">
      <h2 className="table__title">{title}</h2>

      <ul className="table__list">
        {items.map((item, index) => (
          <li className="table__item" key={index}>
            <p>{item.text}</p>
            <p>
              {windowWidth <= 500 && item.shortMeaning
                ? item.shortMeaning
                : item.meaning}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Table;
