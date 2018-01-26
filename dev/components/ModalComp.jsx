import React from 'react';
import ReactDOM from 'react-dom';

export default class Modal extends React.Component {
    constructor(props) {
        super(props);
    }    
    
    render() {
        let classes = "modal " + this.props.classes;
        return (
            <div className={classes} role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h2 className="modal-title">Alert</h2>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={()=>this.props.close()}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                        <div className="modal-body">
                        <p>{this.props.text}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

