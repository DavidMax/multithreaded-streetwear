import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Home from './components/pages/home/home.component';
import ShopPage from './components/pages/shop-page/shop-page.component';
import TopicsList from './components/topics-list/topics-list.component';
import TopicDetail from './components/topic-detail/topic-detail.component'
import SignInAndSignUpPage from './components/pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

function App() {
  return (
    <div>
      <Router>
          <Route exact path='/' component={Home} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/topics' component={TopicsList} />
          <Route path='/topics/:topicId' component={TopicDetail} />
          <Route path='/sign-in' component={SignInAndSignUpPage} />
      </Router>
    </div>
  );
}

export default App;
