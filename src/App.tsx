import React from 'react';
import Posts from './Posts';
import Post from './Post';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

interface AppProps {}

function App({}: AppProps) {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">
              Posts
            </Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/posts/:postId">
          <Post />
        </Route>
        <Route path="/">
          <Posts />
        </Route>
      </Switch>
    </Router>
  )
}


export default App;
