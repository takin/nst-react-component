import React,{Component} from 'react';


export default class Input extends Component {
    render() {
        return(
            <div style={this.props.style}>
                <input
                    onChange={this.props.onChange} 
                    text={this.props.text} 
                    type={this.props.type} 
                    placeholder={this.props.placeholder} />
            </div>
        );
    }
}