import React from 'react';
import ReactDOM from 'react-dom';

export default class Input extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <input type="text" className="input-style" value={this.props.value} onChange={(e)=>this.props.onChange(e.currentTarget.value)} />
        );
    }
}