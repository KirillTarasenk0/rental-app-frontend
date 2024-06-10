import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Router} from "./components/router/Router";

export const App = () => {
  return (
    <>
      <BrowserRouter>
          <Router/>
      </BrowserRouter>
      <h1>Hello world</h1>
    </>
  );
}
