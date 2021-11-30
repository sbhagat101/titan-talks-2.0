
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
     <Link to="/explore">Explore</Link>
     <Link to="/post-new">Create a Post</Link>
     </nav>
  );
}

export default Nav;