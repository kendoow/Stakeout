import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../../assets/stk-logo.png";
const LogIn = () => {
  const [CheckBoxColor, SetCheckBoxColor] = useState("#ffffff");
  const handleChnageTextColor = (e) => {
    SetCheckBoxColor(CheckBoxColor === "#ffffff" ? "#28B446" : "#ffffff");
  };
  return (
    <div className="login">
      <Link to="/">
        <div className="windows-logo">
          <img height={40} width={40} src={Logo} alt="Logo" />
          <p>Stakeout</p>
        </div>
      </Link>
      <div className="login-wrapper">
        <div className="login-text">
          <h3>Вход</h3>
          <div className="login-forgotten">
            <p>Забыли пароль?</p>
            <Link className="login-links" to="/password-reset">
              Восстановить
            </Link>
          </div>
        </div>
        <div className="login-forms">
          <input
            className="login-form"
            type="text"
            placeholder="Логин и почта"
          />
          <input className="login-form" type="password" placeholder="Пароль" />
        </div>
        <div className="login-checkbox">
          <input
            style={{ background: CheckBoxColor }}
            onClick={handleChnageTextColor}
            type="checkbox"
          />
          <div className="login-checkbox-text">
            <p>Запомнить меня</p>
          </div>
        </div>
        <div className="login-button">
          <Link to="./stakeout/investments" exact>
            <button className="login-btn">Войти</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default LogIn;
