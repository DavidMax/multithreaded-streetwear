import React from 'react';

const TopicDetail = (props) => {
    return (
      <div>
        <h1>Topic Detail for item {props.match.params.topicId}</h1>
      </div>
    );
  };

  export default TopicDetail;