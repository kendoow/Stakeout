import { Link } from "react-router-dom";
import Logo from "../../assets/stk-logo.png";
const Passed = () => {
  return (
    <div className="passed">
      <Link to="/">
        <div className="windows-logo">
          <img height={40} width={40} src={Logo} alt="Logo" />
          <p>Stakeout</p>
        </div>
      </Link>
      <div className="passed-wrapper">
        <div className="passed-text">
          <h3>Благодарим за регистрацию!</h3>
          <h4>
            Подтвердите аккаунт, что бы полноценно пользоваться им. Вся
            необходимая информация выслана Вам на почту.
          </h4>
          <p>Если письма не видно - посмотрите папку Спам</p>
        </div>
        <Link to="/login" exact>
          <div className="passed-button">
            <button className="passed-btn">Войти в аккаунт</button>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Passed;
