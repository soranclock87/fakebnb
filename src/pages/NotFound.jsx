import React from 'react';
import Image404 from '../assets/404.gif';

function ErrorPage() {
  return (
    <div className="pt-5 pb-5 not-found flex content-page">

      <div className="content-page-error">
        <div className="block-text">
          <h1>Oops!</h1>
          <p>We can't seem to find the page you're looking for.</p>
        </div>
        <div className="image" />
        <img src={Image404} alt="" />
      </div>

    </div>
  );
}

export default ErrorPage;
