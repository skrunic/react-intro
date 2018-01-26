import React from 'react';
import ReactDOM from 'react-dom';
import * as Helpers from '../utils/HelperMethods.jsx';

export default class Section extends React.Component {
    constructor(props) {
        super(props);
        this.listPlayers = Helpers.listPlayers.bind(this);
        this.listPairings = Helpers.listPairings.bind(this);
    }
    
    // RENDER COMPONENT    
    render() {
        return (
            <section id={this.props.id}>
                <h2>{this.props.title}</h2>
                <h4>{this.props.description}</h4>
                <ul>
                    {
                        this.props.players?
                            this.listPlayers(this.props.players, this.props.selected)
                        : this.props.pairs?
                            this.listPairings(this.props.pairs)
                        : null
                    }                  
                </ul>            
            </section>
        );
    }
}

