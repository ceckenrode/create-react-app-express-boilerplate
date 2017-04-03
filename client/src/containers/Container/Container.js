import React from 'react';
import './Container.css';

// This component is really just here to provide a bootstrap container to center the content
function Container(props) {
  return (
    <div className="m-top-75 container">
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default Container;
