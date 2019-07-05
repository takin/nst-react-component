import React from 'react';


const Button = props => (
    <div style={props.style}>
        <button 
            type={props.buttonType} 
            onClick={props.onClick}>
            {props.text}
        </button>
    </div>
);

export default Button;