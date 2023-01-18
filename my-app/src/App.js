import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/index';
import Home from './pages/Home/index';
import Footer from './components/Footer/index';
import Add from "./pages/Add/index"
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='add' element={<Add/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;