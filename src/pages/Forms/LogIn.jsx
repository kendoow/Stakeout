import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../../assets/stk-logo.png";
import { useInput, useValidation } from "../../hooks/useForm";

const LogIn = () => {
  const [CheckBoxColor, SetCheckBoxColor] = useState("#ffffff");
  const handleChnageTextColor = (e) => {
    SetCheckBoxColor(CheckBoxColor === "#ffffff" ? "#28B446" : "#ffffff");
  };

  const email = useInput("", { isEmpty: true, minLength: 3 });
  const password = useInput("", { isEmpty: true, minLength: 5 });

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
          {(email.isDirty && email.isEmpty) && <div className="error">Поле не может быть пустым</div>}
          {(email.isDirty && email.minLengthError) && <div className="error">Некоректная длина</div>}
          <input
          
            onChange={e => email.onChange(e)}
            onBlur={e => email.onBlur(e)}
            value={email.value}
            name="login"
            className="login-form"
            type="text"
            placeholder="Логин и почта"
          />
          {(password.isDirty && password.isEmpty) && <div className="error">Поле не может быть пустым</div>}
          {(password.isDirty && password.minLengthError) && <div className="error">Некоректная длина</div>}
          <input
            onChange={e => password.onChange(e)}
            onBlur={e => password.onBlur(e)}
            value={password.value}

            className="login-form"
            name="password"
            type="password"
            placeholder="Пароль"
          />
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
            <button type="subimt" className="login-btn">
              Войти
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default LogIn;
