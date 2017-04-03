import React from 'react';
import './Button.css';

function Button(props) {
  return (
    <a
      onClick={props.onClick}
      className={
        `btn btn-${props.type}${props.className ? ' ' + props.className : ''}`
      }
    >
      {props.children}
    </a>
  );
}

export default Button;
