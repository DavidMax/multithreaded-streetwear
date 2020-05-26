import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Home from './components/pages/home/home.component';
import ShopPage from './components/pages/shop-page/shop-page.component';
import TopicsList from './components/topics-list/topics-list.component';
import TopicDetail from './components/topic-detail/topic-detail.component'

function App() {
  return (
    <div>
      <Router>
          <Route exact path='/' component={Home} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/topics' component={TopicsList} />
          <Route path='/topics/:topicId' component={TopicDetail} />
      </Router>
    </div>
  );
}

export default App;
