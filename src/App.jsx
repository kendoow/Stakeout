import { Route, Routes } from "react-router";
import Header from "./components/Header";
const App = () => {
  return (
    <div className="">
    <Routes>
      <Header />
      <div className="">
        <Route path="/" exact element = {<Header/>}>
        </Route>
      </div>
      </Routes>
    </div>
  );
};
export default App;
