import {
  Routes,
  Route,
} from "react-router-dom";
import Header from "./pages/Home/Header";

import Home from "./pages/Home/Home";


function App() {
  return (
    <div>
      <Routes>

        <Route path="/" element={<Home></Home>}></Route>
      </Routes>

    </div>
  );
}

export default App;
