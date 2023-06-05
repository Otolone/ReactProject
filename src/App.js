import './App.css';

import {React} from 'react';

import {
        Route, 
        Routes
        } from 'react-router-dom';
 
       
import NavBar from './Navbar';

import HomePage from './components/home/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/contact/ContactPage';
import ExperiencePage from './components/experience/ExperiencePage';
import PortfolioPage from './components/portfolio/PortfolioPage';
import TestimonialPage from './components/testimonial/TestimonialPage';




function App() {
  
  return (
    <>
    <NavBar/>
    <div className='container'>
    <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/'element={<HomePage/>}/>
    <Route path='/about'element={<AboutPage/>}/>
    <Route path='/contact'element={<ContactPage/>}/>
    <Route path='/experience'element={<ExperiencePage/>}/>
    <Route path='/portfolio'element={<PortfolioPage/>}/>
    <Route path='/testimonial'element={<TestimonialPage/>}/>    
    </Routes>
    </div>       
    </>
       

  );

}

export default App;
