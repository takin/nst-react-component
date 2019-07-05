import React from 'react';


const Input = props => (
            <div style={props.style}>
                <input
                    onChange={props.onChange} 
                    text={props.text} 
                    type={props.type} 
                    placeholder={props.placeholder} />
            </div>
        );
export default Input;