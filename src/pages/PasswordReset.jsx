import { Link } from "react-router-dom";
const PasswordReset = () => {
  return (
    <div className="password">
      <div className="password-wrapper">
        <div className="password-text">
          <h3>Восстановление</h3>
          <div className="password-forgotten">
            <Link className="password-links" to="/login">
              Войти в аккаунт
            </Link>
          </div>
        </div>
        <div className="password-forms">
          <input
            className="password-form"
            type="text"
            placeholder="Логин или почта"
          />
        </div>
        <div className="password-button">
          <Link to="./????" exact>
            <button className="password-btn">Восстановить</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default PasswordReset;
