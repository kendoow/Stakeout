import { Link, Navigate } from "react-router-dom";
import { useState } from "react";

import Logo from "../assets/stk-logo.png";
import Investments from "../assets/nav-icons/nav-investisments.svg";
import Safe from "../assets/nav-icons/nav-safe.svg";
import Cards from "../assets/nav-icons/nav-cards.svg";
import Repeat from "../assets/nav-icons/nav-repeat.svg";
import Token from "../assets/nav-icons/nav-token.png";
import Partners from "../assets/nav-icons/nav-partners.svg";
import Structure from "../assets/nav-icons/nav-structure.svg";
import Articles from "../assets/nav-icons/nav-articles.svg";
import Advertisment from "../assets/nav-icons/nav-advertisment.svg";
import Faq from "../assets/nav-icons/nav-faq.svg";
import Settings from "../assets/nav-icons/nav-settings.svg";
import LogOut from "../assets/nav-icons/nav-logout.svg";

const items = [
  { name: "Учет инвестиций", img: Investments, url: "/investments" },
  { name: "Открыть депозит", img: Safe },
  { name: "Вывод средств", img: Cards },
  { name: "История операций", img: Repeat },
  { name: "Токен STK", img: Token },
  { name: "Партнерская программа", img: Partners },
  { name: "Структура", img: Structure },
  { name: "Статьи", img: Articles },
  { name: "Реклама и баннеры", img: Advertisment },
  { name: "FAQ", img: Faq },
  { name: "Настройки аккаунта", img: Settings },
  { name: "Выход из аккаунта", img: LogOut },
];
const Navigation = () => {
  const [activeEl, setActiveEl] = useState(false);

  const SelectedNav = () => {
    return setActiveEl(true) ? "active" : "navigation-item"
  };
  
  return (
    <div className="navigation">
      <Link to="/login/stakeout/investments">
        <div className="navigation-logo">
          <img width={40} height={40} src={Logo} alt="Logo" />
          <h3>Stakeout</h3>
        </div>
      </Link>
      <Link onClick = {SelectedNav} to="/login/stakeout/investments">
        <div className="navigation-item">
          <img src={Investments} alt="investments" />
          <p>Учет инвестиций</p>
        </div>
      </Link>
      <Link to="/login/stakeout/depozit">
        <div className="navigation-item">
          <img src={Safe} alt="investments" />
          <p>Открыть депозит</p>
        </div>
      </Link>
      <Link to="/login/stakeout/investments">
        <div className="navigation-item">
          <img src={Cards} alt="investments" />
          <p>Вывод средств</p>
        </div>
      </Link>
      <Link to="/login/stakeout/investments">
        <div className="navigation-item">
          <img src={Repeat} alt="investments" />
          <p>История операций</p>
        </div>
      </Link>
      <Link to="/login/stakeout/investments">
        <div className="navigation-item">
          <img src={Token} alt="investments" />
          <p>Токен STK</p>
        </div>
      </Link>
      <Link to="/login/stakeout/investments">
        <div className="navigation-item">
          <img src={ Partners} alt="investments" />
          <p>Партнерская программа</p>
        </div>
      </Link>
      <Link to="/login/stakeout/investments">
        <div className="navigation-item">
          <img src={Structure} alt="investments" />
          <p>Структура</p>
        </div>
      </Link>
      <Link to="/login/stakeout/articles">
        <div className="navigation-item">
          <img src={ Articles} alt="investments" />
          <p>Статьи</p>
        </div>
      </Link>
      <Link to="/login/stakeout/investments">
        <div className="navigation-item">
          <img src={Advertisment} alt="investments" />
          <p>Реклама и баннеры</p>
        </div>
      </Link>
      <Link to="/login/stakeout/investments">
        <div className="navigation-item">
          <img src={Faq} alt="investments"/>
          <p>FAQ</p>
        </div>
      </Link>
      <Link to="/login/stakeout/investments">
        <div className="navigation-item">
          <img src={Settings} alt="settings" />
          <p>Настройки аккаунта</p>
        </div>
      </Link>
      <Link to="/login/stakeout/investments">
        <div className="navigation-item">
          <img src={LogOut} alt="investments" />
          <p>Выход из аккаунта</p>
        </div>
      </Link>
    </div>
  );
};
export default Navigation;

// key={index}
//             onClick={() => SelectedNav(index)}
//             className={
//               activeIndex === index
//                 ? "navigation-item active"
//                 : "navigation-item"
