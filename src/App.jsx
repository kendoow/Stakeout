import { Route, Routes } from "react-router";
import SignUp from "./pages/SignUp";
import MainPage from "./pages/MainPage";
import Passed from "./pages/Passed";
import LogIn from "./pages/LogIn";
import PasswordReset from "./pages/PasswordReset";
const App = () => {
  return (
    <>
      <Routes>
        <div className="">
          <Route path="/" element={<MainPage />} exact />
        </div>
        <Route path="/signup" exact element={<SignUp />}></Route>
        <Route path="/signup/passed" exact element={<Passed />}></Route>
        <Route path = "/login" exact element = {<LogIn />}></Route>
        <Route path = "/password-reset" exact element = {<PasswordReset />}></Route>
      </Routes>
    </>
  );
};
export default App;
