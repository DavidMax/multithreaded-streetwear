import React from 'react';
import { Link } from 'react-router-dom';

const TopicsList = (props) => {  
    return (
      <div>
        <h1>Topics List</h1>
        <Link to={`${props.match.url}5`}>Item 5</Link>
      </div>
    );
  };

  export default TopicsList;