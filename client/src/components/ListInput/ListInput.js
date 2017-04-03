import React from 'react';

function ListInput(props) {
  return (
    <div style={props.formStyle} className="form-group">
      <input
        style={props.style}
        type={props.type}
        className="form-control"
        onChange={props.onChange}
        value={props.value || ''}
      />
    </div>
  );
}

export default ListInput;
