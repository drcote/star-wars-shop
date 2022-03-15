import { Link } from "react-router-dom";
import "./Card.scss";

export default function Card({ id, image, name, price, shortDescription }) {
  return (
    <article className="card">
      <div className="card__wrapper">
        <img
          src={require(`../../resources/img${image}`)}
          alt=""
          className="card__img"
        />
        <h3 className="card__h3">{name}</h3>
        <p className="card__desc">{shortDescription}</p>
        <Link to={`/product/${id}`}>
          <button className="card__button">Buy ${price}</button>
        </Link>
      </div>
    </article>
  );
}
