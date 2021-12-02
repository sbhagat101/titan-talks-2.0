
import './logo.svg';

import { Link } from 'react-router-dom';
function Nav2() {
  return (
    <nav class = "nav2" >
      <img src="/images/titans.jpg" alt="" class="image" />
      <Link to="/explore">Explore</Link>
      <Link to="/profile">My Profile</Link>
      <Link to="/post-new">Create a Post</Link>
    </nav>
  );
}

export default Nav2;