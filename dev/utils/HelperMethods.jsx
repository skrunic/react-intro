import React from 'react';

/**
 * Track input field value while typing.
 * @param {string} newName - Input field value
 */
export function enterPlayerName(newName){
    console.log("Entered " + newName);
    return this.setState({playerName: newName});
}

/**
 * Add player object into state with received name.
 * @param {string} playerName - Player name
 * @param {array} playerField - Array of player objects
 */
export function addPlayer(playerName, playerField){
    console.log("Add player " + playerName);
    if(playerName && playerField){
        return this.setState({
            players: playerField.concat({name: playerName, selected: false}),
            playerName: "" 
        });
    }
}

/**
 * Get random integer in range min to max.
 * @param {*} min - Range from
 * @param {*} max - Range to
 */
function getRandomInt(min, max) {
    console.log("Get random number!");
    return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * Returns array of selected players' objects.
 * @param {array} players - Array of player objects
 */
function getSelectedPlayers(players){
    console.log("Get ALL selected players!");
    return players.filter(function(e){
        if(e.selected){
        return e;
        }
    });
}

/**
 * Returns number of selected players.
 * @param {array} players - Array of player objects
 */
export function getNumSelectedPlayers(players){
    console.log("Get number of selected players!");
    return getSelectedPlayers(players).length
}

/**
 * Make pairings from selected players.
 * @param {array} players - Array of player objects
 * @param {number} maxPlayers - Max number of players
 */
export function matchPlayers(players, maxPlayers){
    console.log("Match players!");
    let buffer = getSelectedPlayers(players);
    buffer.sort( ()=>{return ( parseInt( Math.random() * 100 ) % 2 )} );
    let res = [];
    let storage = "";
    if(buffer.length % maxPlayers == 0){
        for(let i = 0; i < buffer.length; i+=2){
        res.push(buffer[i].name + " & " + buffer[i+1].name);           
        }
    }
    console.log(res);
    return this.setState({ pairings: res });
}


/**
 * Reset selected players and player pairings.
 * @param {array} players - Array of player objects
 */
export function resetPlayers(players){
    console.log("Reset ALL players!");
    let res = players.map(function(e){
        e.selected = false;
        return e;
    });
    return this.setState({
        players: res,
        pairings: [],
        warning: {
        display: false,
        message: ""
        }
    });
}

/**
 * Get random integers in set range.
 * @param {number} amount - How many integers to generate
 * @param {number} max - What is max integer in range (0 - max)
 */
function getRandomIndices(amount, max){
    console.log("Get random player indices!");
    let indices = [];
    for(let i = 0; i < amount; i++){
        let num = getRandomInt(0, max);
        if(indices.indexOf(num) == -1){
            indices.push(num)
        } else {
            i--;
        }
    }
    console.log(indices);
    return indices;
}

/**
 * Select random players from all available players.
 * @param {number} maxPlayers - Max number of players to select
 * @param {array} allPlayers - Array of player objects
 */
export function randomPlayers(maxPlayers, allPlayers){
    console.log("Randomize players!");
    let selection = getRandomIndices(maxPlayers, allPlayers.length);
    let players = allPlayers.map(function(e, index){
        if(selection.indexOf(index) != -1){
            e.selected = true;
            return e;
        } else {
            return e;
        }
    });
    return this.setState({players: players});
}


/**
 * Toggle selection of clicked player
 * @param {string} playerName - selected player's name
 */
export function selectedPlayer(playerName){
    console.log("Selected " + playerName + "!");
    let 
    numSelected = getNumSelectedPlayers(this.state.players),
    maxPlayers = this.maxPlayers,
    alert = false,
    updatePlayers = [];
    
    if( numSelected < maxPlayers ){      
        updatePlayers = this.state.players.map(function(e){
            if( e.name == playerName ){
                e.selected = !e.selected;
                if(e.selected){
                    alert = false;
                } else {
                    alert = true;
                }
                return e;
            }
            return e;        
        });        
    } else if( numSelected == maxPlayers ){
        console.log("Already selected max number of players!")  
        updatePlayers = this.state.players.map(function(e){
            if( e.name == playerName ){                
                if(!e.selected){
                    alert = true;
                } else {
                    alert = false;
                }
                e.selected = false;
                return e;
            }
            return e;            
        });
    }
    return this.setState({
        players: updatePlayers,
        warning: {
            display: alert,
            message: alert? "Already selected max number of players!" : ""
        }
    });
}


/**
 * Print players as list items.
 * @param {array} players - Array of player objects
 * @param {function} clickAction - Click action to execute upon <li> click
 */
export function listPlayers(players, clickAction){
    if(players.length > 0){
        return players.map(function(player, index){
            return <li key={index} className={player.selected? "active-player" : ""} onClick={()=>clickAction(player.name)}>{player.name}</li>
        })
    }
}

/**
 * Print pairings as list items.
 * @param {array} pairings - Array of pairings
 */
export function listPairings(pairings){
    if(pairings.length > 0){
        return pairings.map(function(pair, index){
            return <li key={index}>{pair}</li>
        });
    }
}


/**
 * Close modal.
 */
export function closeModal(){
    return this.setState({
        warning: {
            display: false
        }
    });
}