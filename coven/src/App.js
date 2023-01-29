
import './App.css';
import NavBar from './components/NavBar'
import Home from './components/Home'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>




    {/* <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes> */}
    <Footer/>
    </div>
  );
}

export default App;
