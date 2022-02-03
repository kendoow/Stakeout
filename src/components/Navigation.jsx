import { NavLink, Link } from "react-router-dom";
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

// const items = [
//   { name: "Учет инвестиций", img: Investments, url: "/investments" },
//   { name: "Открыть депозит", img: Safe },
//   { name: "Вывод средств", img: Cards },
//   { name: "История операций", img: Repeat },
//   { name: "Токен STK", img: Token },
//   { name: "Партнерская программа", img: Partners },
//   { name: "Структура", img: Structure },
//   { name: "Статьи", img: Articles },
//   { name: "Реклама и баннеры", img: Advertisment },
//   { name: "FAQ", img: Faq },
//   { name: "Настройки аккаунта", img: Settings },
//   { name: "Выход из аккаунта", img: LogOut },
// ];
const Navigation = () => {
  return (
    <div className="navigation">
      <Link to="/login/stakeout/investments">
        <div className="navigation-logo">
          <img width={40} height={40} src={Logo} alt="Logo" />
          <h3>Stakeout</h3>
        </div>
      </Link>
      <NavLink className="navigation-item" to="/login/stakeout/investments">
        <img src={Investments} alt="investments" />
        <p>Учет инвестиций</p>
      </NavLink>
      <NavLink className="navigation-item" to="/login/stakeout/depozit">
        <img src={Safe} alt="investments" />
        <p>Открыть депозит</p>
      </NavLink>
      <NavLink className="navigation-item" to="/login/stakeout/investments">
        <img src={Cards} alt="investments" />
        <p>Вывод средств</p>
      </NavLink>
      <NavLink className="navigation-item" to="/login/stakeout/investments">
        <img src={Repeat} alt="investments" />
        <p>История операций</p>
      </NavLink>
      <NavLink className="navigation-item" to="/login/stakeout/investments">
        <img src={Token} alt="investments" />
        <p>Токен STK</p>
      </NavLink>
      <NavLink className="navigation-item" to="/login/stakeout/investments">
        <img src={Partners} alt="investments" />
        <p>Партнерская программа</p>
      </NavLink>
      <NavLink className="navigation-item" to="/login/stakeout/structure">
        <img src={Structure} alt="investments" />
        <p>Структура</p>
      </NavLink>
      <NavLink className="navigation-item" to="/login/stakeout/articles">
        <img src={Articles} alt="investments" />
        <p>Статьи</p>
      </NavLink>
      <NavLink className="navigation-item" to="/login/stakeout/investments">
        <img src={Advertisment} alt="investments" />
        <p>Реклама и баннеры</p>
      </NavLink>
      <NavLink className="navigation-item" to="/login/stakeout/investments">
        <img src={Faq} alt="investments" />
        <p>FAQ</p>
      </NavLink>
      <NavLink className="navigation-item" to="/login/stakeout/investments">
        <img src={Settings} alt="settings" />
        <p>Настройки аккаунта</p>
      </NavLink>
      <NavLink className="navigation-item" to="/login/stakeout/investments">
        <img src={LogOut} alt="investments" />
        <p>Выход из аккаунта</p>
      </NavLink>
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
