import React from 'react';
import './Error.css'

const ErrorPage = () => {
  const handleReload = () => {
    // window.location.reload();
    window.history.back();
  };

  return (
    <div className="error-page">
      <h1>Oops! Something went wrong.</h1>
      <p>We're sorry, but there was an error processing your request.</p>
      <button onClick={handleReload}>Go back</button>
    </div>
  );
};

export default ErrorPage;

// CSS Styles