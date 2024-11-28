import Style from './card.module.css';
import Btn from '../btn/card-btn.jsx';
// import { posts } from "../../data/posts.js";

function Card() {
  return (
    <div className="col-4">
      <div className={Style.card}>
        <img className={Style.card__img} src="https://placehold.co/600x400" alt="" />
        <div className={Style.card__body}>
          <h3 className={Style.card__title}>
            Titolo Card
          </h3>
          <p className={Style.card__text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, porro. Nesciunt corporis doloremque nihil voluptate id incidunt praesentium illo quibusdam!
          </p>
          <Btn />
        </div>
      </div>
    </div>

  );
}

export default Card;