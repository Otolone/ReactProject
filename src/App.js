import './App.css';

import {React} from 'react';

import {
        Route, 
        Routes
        } from 'react-router-dom';
 
       
import NavBar from './Navbar';

import HomePage from './components/home/HomePage';
import AboutPage from './components/AboutPage';




function App() {
  
  return (
    <>
    <NavBar/>
    <div className='container'>
    <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/'element={<HomePage/>}/>
    <Route path='/about'element={<AboutPage/>}/>
    
    </Routes>
    </div>       
    </>
       

  );

}

export default App;


/**
 //<Route path='/contact'element={<ContactPage/>}/>
    let component;
  switch(window.location.pathname){
    case "/":component=<HomePage/>;
      break;
    case "/about":component=<AboutPage/>;
    break;
  }
    
 */