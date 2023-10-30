import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import { BiArrowToTop } from 'react-icons/bi'
import { ProductsDetailes } from './pages/home/pruductsDetailes/ProductsDetailes';
import Login from './components/login/Login';
import Addcard from './pages/addcard/Addcard';
import Hook from './components/hook/Hook';
import gif from './Assets/Spinner-2.gif'
import { useSelector } from 'react-redux';

function App() {
  // const  url=useSelector((state)=>state.url)


  const { isPending, data } = Hook(`https://dummyjson.com/products/`, "GET")
if (isPending ==true) {
}
  return (
    <div className="App">
      {
        isPending && <img className='App_loading' src={gif} alt="" />
      }
      {
        !isPending && <>

          <div className="modul">
            <a href="#"><BiArrowToTop size={45} color="#000" /></a>
          </div>
          <Router>
            <div className="App__Navbar">
              <Navbar />
            </div>
            <div className="App-container">
              <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/d/:id' element={<ProductsDetailes />} />
                <Route path='/login' element={<Login />} />
                <Route path='/addcard' element={<Addcard />} />
              </Routes>
            </div>
          </Router>
        </>
      }
    </div>
  );
}

export default App;
