
import {
  Link, 
  useMatch,
  useResolvedPath
  } from "react-router-dom";

export const NavBar = ()=>{

  
    return(

        <nav className="nav">
                
            <ul>
              <CustomLink to="/">
              Home Page
              </CustomLink>
              <CustomLink to="/about">
              About Page
              </CustomLink>
              <CustomLink to="/contact">
              Contact US
              </CustomLink>
              <CustomLink to="/experience">
               Our experience
              </CustomLink>
              <CustomLink to="/portfolio">
              Portfolio
              </CustomLink>
              <CustomLink to="/testimonial">
              Testimonial
              </CustomLink>

              
              </ul>

        </nav>
    );
}

function CustomLink({to, children, ...props}){
  const resolvedPath = useResolvedPath(to);
  const isActive=useMatch({path: resolvedPath.pathname, end: true})
  return(
    <li className={isActive ? "active": ""}>
      <Link to={to}{...props}>{children}
      </Link>
    </li>
  )

}


export default NavBar;

