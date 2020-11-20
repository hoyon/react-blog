import React from 'react';
import Posts from './Posts';
import Post from './Post';
import Faq from './Faq';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './app.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className='container mx-auto m-4'>
        <Link to='/'>
          <h1 className='text-3xl font-bold hover:text-blue-700'>My blog</h1>
        </Link>
        <Link to='/faq'>
          <h1 className='text-3xl font-bold hover:text-blue-700'>FAQ</h1>
        </Link>
      </div>
      <Switch>
        <Route path='/posts/:postId'>
          <Post />
        </Route>
        <Route path='/faq'>
          <Faq />
        </Route>
        <Route path='/'>
          <Posts />
        </Route>
      </Switch>
    </Router>
  )
}


export default App;
