import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './components/pages/Home';
import Bonds from './components/UI/Bonds';

function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route  element={<Home/>} path='/*'>

      </Route>
  {/*    <Route element={<Bonds/>} path='/bonds'></Route> */}
     </Routes>
    </BrowserRouter>
  );
}

export default App;
