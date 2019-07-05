import React,{Component} from 'react';


export default class Button extends Component {
    render() {
        return(
            <div style={this.props.style}>
                <button type={this.props.buttonType} onClick={this.props.onClick}>{this.props.text}</button>
            </div>
        );
    }
}