import React from 'react';
import ReactDOM from 'react-dom';

import Button from './ButtonComp.jsx';
import Input from './InputComp.jsx';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            label: "Enter player name",
            count: 0
        };
        this.counter = counter.bind(this);

        function counter(){
            this.setState({count: this.state.count + 1})
        }
    }    

    render() {
        return (
            <header>
                <div id="controls" className="form-group">
                    <label>{this.state.label}</label>
                    <Input onChange={this.props.change} value={this.props.inputValue} />
                    <Button classes="add" text="Add" onClick={()=>{this.props.add(); this.counter()}} />
                    <Button classes="start" text="Pairings" onClick={this.props.match} disabled={this.props.selectedPlayers < 4? true : false} />
                    <Button classes="random" text="Randomize" onClick={this.props.random} disabled={this.props.totalPlayers < 4 || this.props.selectedPlayers == 4? true : false} />
                    <Button classes="reset" text="Reset" onClick={this.props.reset} />
                </div>            
            </header>
        );
    }
}

