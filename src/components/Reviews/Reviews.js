import Button from "../Button/Button";
import "./Reviews.css";

function Reviews() {
  return (
    <div className="reviews">
      <div className="reviews__container">
        <p className="reviews__title">
          Помогите нам стать ещё лучше. Оставляя отзывы, вы таким образом
          указываете нам на зоны роста. Мы правда, читаем все отзывы.
        </p>
        <Button text={"Оставить отзыв"} classButton={"reviews__button"} />
      </div>
    </div>
  );
}

export default Reviews;
