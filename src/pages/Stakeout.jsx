import { Link, Route, Routes } from "react-router-dom";
import Articles from "../components/Stakeout/Articles";
import Navigation from "../components/Navigation";
import Depozit from "../components/Stakeout/Depozit";
import Investments from "../components/Stakeout/Investments";
import BackGround from "../components/Backgound";
import Structure from "../components/Stakeout/Structure";
const Stakeout = () => {
  return (
    <>
      <div className="stakeout">
        <Navigation />
        <Routes>
          <Route path="/investments" element={<Investments />} exact />
          <Route path="/articles" element={<Articles />} exact />
          <Route path="/depozit" element={<Depozit />} exact />
          <Route path = '/structure' element = {<Structure/>}/>
        </Routes>
      </div>
    </>
  );
};

export default Stakeout;
