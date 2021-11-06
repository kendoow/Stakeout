import { Link } from "react-router-dom";
import { useState } from "react";
const SignUp = () => {
  const [CheckBoxColor, SetCheckBoxColor] = useState("#ffffff");
  const handleChnageTextColor = (e) => {
    SetCheckBoxColor(CheckBoxColor === "#ffffff" ? "#28B446" : "#ffffff");
  };
  return (
    <div className="signup">
      <div className="signup-wrapper">
        <div className="signup-text">
          <h3>Регистрация</h3>
          <div className="signup-login">
            <p>Есть аккаунт?</p>
            <Link className="signup-links" to="/login">
              Войти
            </Link>
          </div>
        </div>
        <div className="signup-forms">
          <input className="signup-form" type="text" placeholder="Ваше имя" />
          <input className="signup-form" type="text" placeholder="Логин" />
          <input className="signup-form" type="text" placeholder="Почта" />
          <input className="signup-form" type="text" placeholder="Пароль" />
          <input
            className="signup-form"
            type="text"
            placeholder="Повторите пароль"
          />
        </div>
        <div className="signup-checkbox">
          <input
            style={{ background: CheckBoxColor }}
            onClick={handleChnageTextColor}
            type="checkbox"
          />
          <div className="signup-checkbox-text">
            <p>Я принимаю</p>
            <Link className="signup-links" to="/usloviyasoglasheniya">
              условия соглашения пользователя
            </Link>
          </div>
        </div>
        <div className="signup-button">
          <Link to="./passed" exact>
            <button className="signup-btn">Создать аккаунт</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
