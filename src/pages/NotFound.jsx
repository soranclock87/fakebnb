import React from 'react';

const ErrorPage = ({ err }) => {
  return (
    <div className="pt-5 pb-5 not-found flex content-page">
      <h1>Not Found {err}</h1>
      <p>Oops! Something went south!</p> 
    </div>
  );
};

export default ErrorPage;
