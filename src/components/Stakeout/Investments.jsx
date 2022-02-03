import { Link } from "react-router-dom";
import BackGround from "../Backgound";
import Logo from "../../assets/stk-logo.png";
const Investments = () => {
  return (
    <>
      <div className="stakeout-wrapper">
        <div className="stakeout-investments-wrapper">
          <BackGround />

          <div className="stakeout-investments-header">
            <div className="stakeout-investments-title">Учет инвестиций</div>
            <div className="stakeout-investments-exchangerate">
              <div className="stakeout-investments-exchangerate-main">
                1 STK = 13,000 USD
              </div>
              <div className="stakeout-investments-exchangerate-percent">
                <svg
                  width="10"
                  height="8"
                  viewBox="0 0 8 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.06 0.52997L4 3.5833L0.94 0.529971L-1.74846e-07 1.46997L4 5.46997L8 1.46997L7.06 0.52997Z"
                    fill="white"
                  />
                </svg>
                -4,80%
              </div>
            </div>
            <div className="stakeout-investments-stk-buy">Купить STK</div>
            <div className="stakeout-investments-stk-litebuy">
              Lite покупка STK
            </div>
            <div className="stakeout-investments-open">
              <svg
                width="8"
                height="12"
                viewBox="0 0 5 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.94 7.06L1.88667 4L4.94 0.94L4 0L0 4L4 8L4.94 7.06Z"
                  fill="#7F67CE"
                />
              </svg>
              Открыть
            </div>
          </div>
          <div className="stakeout-investments-cards">
            <div className="stakeout-investments-card">
              <div className="stakeout-investments-card-top">
                <h4>Stakeout</h4>
                <img width={34} height={34} src={Logo} alt="Logo" />
              </div>
              <p>Ваш баланс:</p>
              <h4>316.01247 STK</h4>
              <div className="stakeout-investments-card-buttons">
                <Link to="/login/stakeout/replenish">
                  <button className="stakeout-investments-card-button-replenish">
                    Пополнить
                  </button>
                </Link>
                <Link to="/login/stakeout/withdraw">
                  <button className="stakeout-investments-card-button-withdraw">
                    Вывести
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="stakeout-investments-all-purse">
            Показать все кошельки
            <svg
              width="10"
              height="5"
              viewBox="0 0 10 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0L5 5L10 0H0Z" fill="#7F67CE" />
            </svg>
          </div>
          <div className="stakeout-investments-tarifs">
            <div className="stakeout-investments-tarifs-title"></div>
            <div className="stakeout-investments-tarifs-rare"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Investments;
