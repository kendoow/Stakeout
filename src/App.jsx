import { Route, Routes } from "react-router";
import MainPage from './components/MainPage'
const App = () => {
  return (
    <>
    <Routes>
      <div className="">
        <Route path="/" element = {<MainPage/>} exact/>
      </div>
      </Routes>
    </>
  );
};
export default App;
