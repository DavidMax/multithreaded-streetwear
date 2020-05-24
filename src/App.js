import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Home from './components/pages/home/home.component';


const HatsPage = (props) => {
  console.log(props)
  return (
    <div>
      <h1>Hats Page</h1>
  </div>
  )
};

const TopicsList = (props) => {
  console.log(props);

  return (
    <div>
      <h1>Topics List</h1>
      <Link to={`${props.match.url}/5`}>Item 5</Link>

    </div>
  );
};




const TopicDetail = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Topic Detail for item {props.match.params.topicId}</h1>
    </div>
  );
};



function App() {
  return (
    <div>
      <Router>
          <Route exact path='/' component={Home} />
          <Route exact path='/hats' component={HatsPage} />
          <Route exact path='/topics' component={TopicsList} />
          <Route path='/topics/:topicId' component={TopicDetail} />
      </Router>
    </div>
  );
}

export default App;
