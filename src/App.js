import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import AppRouters from './components/UI/AppRouters';
import store from './store/index';
function App() {

  return (
    <BrowserRouter>
    <AppRouters/>
    </BrowserRouter>
  );
}

export default App;
