import {BrowserRouter} from "react-router-dom";
import {Router} from "./components/router/Router";
import {Home} from "./pages/home/Home";

export const App = () => {
  return (
    <>
      <BrowserRouter>
          <Router/>
      </BrowserRouter>
    </>
  );
}
