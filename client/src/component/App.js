import './logo.svg';
import '../style/App.css';
import register from "./register";
import Login from "./Login";
import Home from './Home';
import CreateEditPost from '../pages/CreateEditPost';
import Explore from '../pages/Explore';
import Profile from '../pages/Profile';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
      <Router>
        <div className = "titan-talks">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={register} />
            <Route path="/explore" component={Explore} />
            <Route path="/post-new" component={CreateEditPost} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;