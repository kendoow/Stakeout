import BackGround from "../Backgound";

const Depozit = () => {
  return (
    <>
      <div className="stakeout-wrapper">
        
        <div className="stakeout-depozit-wrapper">
        <BackGround />
          <div className="stakeout-title">Открыть депозит</div>
          <div className="stakeout-depozit-wrapper-cards">
            <div className="depozit-card">
              <div className="depozit-card-title depozit-card-title-white">
                Пакет
                <h3 className="purple">Стандартный</h3>
              </div>
              <div className="depozit-card-items">
                <li>1.Вы получите...</li>
                <li>2.Вы получите...</li>
                <li>3.Вы получите...</li>
                <li>4.Вы получите...</li>
                <li>5.Вы получите...</li>
                <li>6.Вы получите...</li>
              </div>
              <div className="depozit-card-descr">
                Данный пакет - это прямая инвестиция на нужды проекта ....
              </div>
              <div className="depozit-card-btn">
                <button>Приобрести пакет</button>
              </div>
            </div>

            <div className="depozit-card">
              <div className="depozit-card-title depozit-card-title-purple">
                Пакет
                <h3>Стандарт+</h3>
              </div>
              <div className="depozit-card-items">
                <li>1.Вы получите...</li>
                <li>2.Вы получите...</li>
                <li>3.Вы получите...</li>
                <li>4.Вы получите...</li>
                <li>5.Вы получите...</li>
                <li>6.Вы получите...</li>
              </div>
              <div className="depozit-card-descr">
                Данный пакет - это прямая инвестиция на нужды проекта ....
              </div>
              <div className="depozit-card-btn">
                <button>Приобрести пакет</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Depozit;
