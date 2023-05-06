import React from 'react';
import '../css/style.css'

function Popup(props) {
  return (
    <div className="popup">
      <div className="popup-content" style={{flexDirection:'column'}}>
        {props.children}
      </div>
    </div>
  );
}

export default Popup;
