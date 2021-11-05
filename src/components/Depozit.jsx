const Depozit = ({title}) => {
  return (
    <div className="depozit-card">
      <div className="depozit-card-title">
        Пакет
        <h3 className="purple">{title}</h3>
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
  );
};
export default Depozit;
