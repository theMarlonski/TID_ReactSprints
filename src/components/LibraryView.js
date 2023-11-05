import React from "react";
import './LibraryView.css';

function LibraryView(props) {
  return (
    <div className="view">
      <img src={props.viewIcon1} alt="view" />
      <img src={props.viewIcon2} alt="view" />
    </div>
  );
}

export default LibraryView;