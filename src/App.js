import AuthMobile from "./Components/AuthMobile";
import Home from "./Components/Home";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './style.css';

function App() {
  return (
    <BrowserRouter>
      {
        window.localStorage.getItem('state') === "true" ?
          (
            <>
              {console.log("enter")}
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </>
          )
          :

          (<Routes>
            <Route path="home" element={<Home />} />
            <Route path="/" element={<AuthMobile />} />
          </Routes>
          )
      }
    </BrowserRouter>
  );
}

export default App;
