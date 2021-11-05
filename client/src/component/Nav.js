
import './logo.svg';

import { Link } from 'react-router-dom';
function Nav() {
  return (
     <nav>
      <img src= "/images/titans.jpg" alt="" class= "image" />
     <ul className = "nav-links">
        <Link to= "/login"> 
            <li>Login</li>
        </Link>
        <Link to= "/"> 
            <li>Home</li> 
        </Link>
     </ul>
     </nav>
  );
}

export default Nav;