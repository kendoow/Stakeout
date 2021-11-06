import { Link } from "react-router-dom";
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";
import Logo from "../assets/stk-logo.png";
const Header = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="header-wrapper">
          <div className="header-logo">
            <img width="40" height="40" src={Logo} alt="logo" />
            Stake<span className="purple">out</span>
          </div>
          <nav className="nav">
            <LinkScroll
              className="nav-item"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              О проекте
            </LinkScroll>

            <LinkScroll
              className="nav-item"
              to="goals"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Цели
            </LinkScroll>
            <LinkScroll
              className="nav-item"
              to="benefits"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Инвесторам
            </LinkScroll>
            <LinkScroll
              className="nav-item"
              to="algorithm"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Алгоритм
            </LinkScroll>

            <LinkScroll
              className="nav-item"
              to="filosofy"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Философия
            </LinkScroll>
          </nav>
          <div className="header-links">
            <Link to="/regestration">
              <li className="header-item">Регистрация</li>
            </Link>
            <Link to="/login">
              <button className="header-btn">Войти</button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
