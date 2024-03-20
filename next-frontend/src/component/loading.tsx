import React from 'react';

function Loading() {
  return (
    <div className="loading-overlay">
      <div className="loading-content">
        <img
          src="/assets/img/maintainitlogo.png"
          className="Image-fluid loading-logo"
          alt="Logo"
        />
      </div>
    </div>
  );
}

export default Loading;
