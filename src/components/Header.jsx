import { Link } from "react-router-dom";
import Logo from '../assets/stk-logo.png'
const Header = () => {
  return (
    <div className="header">
      <div className="wrapper">
          <div className="header-logo">
              <img width = '40' height = '40' src={Logo} alt="logo" />
              Stake<span className = 'purple'>out</span>
          </div>
          <nav className = 'nav'>
            <a href = '#' className = 'nav-item'>О проекте</a>
            <a href = '#' className = 'nav-item'>Цели</a>
            <a href = '#' className = 'nav-item'>Алгоритм</a>
            <a href = '#' className = 'nav-item'>Инвесторам</a>
            <a href = '#' className = 'nav-item'>Философия</a>
          </nav>
          <div className="header-links">
              <Link to = '/regestration'>
                  <li className = 'header-item'>Регистрация</li>
              </Link>
              <Link to = '/login'>
                  <button className = 'header-btn'>Войти</button>
              </Link>
          </div>
      </div>
    </div>
  );
};

export default Header;
