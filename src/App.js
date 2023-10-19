import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import AppRouters from './components/UI/AppRouters';

function App() {

  return (
    <BrowserRouter>
    <AppRouters/>
    </BrowserRouter>
  );
}

export default App;
