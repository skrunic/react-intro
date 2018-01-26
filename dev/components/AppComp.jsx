import React from 'react';
import ReactDOM from 'react-dom';

import Header from './HeaderComp.jsx';
import Section from './SectionComp.jsx';
import Modal from './ModalComp.jsx';
import * as Helpers from '../utils/HelperMethods.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.maxPlayers = 4;
    this.enterPlayerName = Helpers.enterPlayerName.bind(this);
    this.addPlayer = Helpers.addPlayer.bind(this);
    this.matchPlayers = Helpers.matchPlayers.bind(this);
    this.resetPlayers = Helpers.resetPlayers.bind(this);
    this.randomPlayers = Helpers.randomPlayers.bind(this);
    this.selectedPlayer = Helpers.selectedPlayer.bind(this);
    this.getNumSelectedPlayers = Helpers.getNumSelectedPlayers.bind(this);
    this.closeModal = Helpers.closeModal.bind(this);

    this.state = {
      playerName: "",
      players: [],
      pairings: [],
      warning: {
        display: false,
        message: ""
      },
      test: ""
    };
  }

  

  // RENDER APPLICATION COMPONENTS
  render() {
    console.log(this.state);
    return (
      <div>
        <Header 
          change={this.enterPlayerName} 
          add={()=>this.addPlayer(this.state.playerName, this.state.players)} 
          match={()=>this.matchPlayers(this.state.players, this.maxPlayers)} 
          reset={()=>this.resetPlayers(this.state.players)}
          random={()=>this.randomPlayers(this.maxPlayers, this.state.players)} 
          selectedPlayers={this.getNumSelectedPlayers(this.state.players)} 
          totalPlayers={this.state.players.length} 
          inputValue={this.state.playerName} 
        />

        <Section 
          id="player-field" 
          title={"Selected players (" + this.getNumSelectedPlayers(this.state.players) + "/4)"} 
          description="Select four players and make pairs" 
          players={this.state.players} 
          selected={this.selectedPlayer} 
        />

        {
          this.state.pairings.length != 0?
            <Section 
              id="matched-field"
              title="Matched players" 
              description="Pairings are up. Have fun!"
              pairs={this.state.pairings} />
          : null
        }
        
        { this.state.warning.display?
          <Modal 
            text={this.state.warning.message}
            classes={this.state.warning.display? "fade in modal-display" : ""}
            close={this.closeModal}
          /> : null          
        }

        {
          this.state.warning.display?
            <div className="modal-backdrop fade in"></div>
          : null
        }
      </div> 
    );
  }
}