
import './logo.svg';

import { Link } from 'react-router-dom';
function Nav() {
  return (
    <nav>
      <img src="/images/titans.jpg" alt="" class="image" />
      <Link to="/login">Login</Link>
      <Link to="/">Home</Link>
      <Link to="/explore">Explore</Link>
      <Link to="/profile">My Profile</Link>
      <Link to="/post-new">Create a Post</Link>
    </nav>
  );
}

export default Nav;