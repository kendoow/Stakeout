import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/Forms/SignUp";
import MainPage from "./pages/MainPage";
import Passed from "./pages/Forms/Passed";
import LogIn from "./pages/Forms/LogIn";
import PasswordReset from "./pages/Forms/PasswordReset";
import Stakeout from "./pages/Stakeout";
const App = () => {
  return (
    <>
      <Routes>
        {/* <div className=""> */}
          <Route path="/" element={<MainPage />} exact />
        {/* </div> */}
        <Route path="/signup" exact element={<SignUp />}></Route>
        <Route path="/signup/passed" exact element={<Passed />}></Route>
        <Route path = "/login" exact element = {<LogIn />}></Route>
        <Route path = "/password-reset" exact element = {<PasswordReset />}></Route>
        <Route path = "/login/stakeout/*" exact element = {<Stakeout/>}></Route>
      </Routes>
    </>
  );
};
export default App;
