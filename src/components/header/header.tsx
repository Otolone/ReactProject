import React from 'react';

import './header.css';


import {Link} from "react-router-dom";

export const Header = ()=>{
    return(
      <header>
      <div className='container header_container'>
          <h2>My header</h2>
      </div>
  </header>

    
    
    
    );
}

export default Header;

/**
 * <Link to="/"></Link>
              <Link to="contact">Contacts</Link>
              <Link to="services">Services</Link>
              <Link to="about">About</Link>
              <Link to='experience'>Experience</Link>
              <Link to='testimonial'>Testimonial</Link> 
 */