import React from 'react';

const NotFound = ({ err }) => {
  return (
    <div>
      <h1>Not Found {err}</h1>
      <p>Oops! Something went south!</p> 
    </div>
  );
};

export default NotFound;
