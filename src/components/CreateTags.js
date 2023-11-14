import React from 'react';
import './CreateTags.css';

function CreateTags(props) {

    return (
        <ul className="create-tags">
            {props.tags.map((tag, index) => (
            <li className="tag" key={index}>
                {tag}
            </li>
            ))}
        </ul>
    );
  }
  
  export default CreateTags;