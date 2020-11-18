import React from 'react';
import Posts from './Posts';
import Post from './Post';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './app.css';

interface AppProps {}

function App({}: AppProps) {
  return (
    <Router>
      <div className='container mx-auto m-4'>
        <Link to='/'>
          <h1 className='text-3xl font-bold hover:text-blue-700'>My blog</h1>
        </Link>
      </div>
      <Switch>
        <Route path='/posts/:postId'>
          <Post />
        </Route>
        <Route path='/'>
          <Posts />
        </Route>
      </Switch>
    </Router>
  )
}


export default App;
