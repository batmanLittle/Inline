import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <NavLink
          className={({ isActive }) =>
            `header__link ${isActive ? "header__link-active" : "header__link"}`
          }
          to="/"
        >
          ОПИСАНИЕ
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `header__link ${isActive ? "header__link-active" : "header__link"}`
          }
          to="/отзывы"
        >
          ОТЗЫВЫ
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `header__link ${isActive ? "header__link-active" : "header__link"}`
          }
          to="/откуда"
        >
          ОТКУДА
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
