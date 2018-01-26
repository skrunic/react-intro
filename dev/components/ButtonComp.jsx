import React from 'react';
import ReactDOM from 'react-dom';

export default class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let classes="btn " + this.props.classes;
        return (
            <button className={classes} type="button" onClick={()=>this.props.onClick()} disabled={this.props.disabled} >
                {this.props.text}
            </button>
        );
    }
}