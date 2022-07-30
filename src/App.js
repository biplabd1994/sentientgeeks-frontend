// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AuthRouter from './router/AuthRouter';
function App() {
  return (
    <>
      <BrowserRouter>
        <AuthRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
