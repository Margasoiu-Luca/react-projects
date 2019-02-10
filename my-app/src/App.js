import React, { Component } from "react";
import Header from "./components/Header";
import Player from "./components/Player";

class App extends Component {
  state={
    players: [
      {id:0, name:'Luca'},
      {id:1, name:'Alex'},
      {id:2, name:'Razvan'},
      {id:3, name:'Stefan'},
      {id:4, name:'Rares'}
    ]
  }
  render() {
    return (
      <div className="scoreboard">

        <Header lungime={this.state.players.length} />
        {this.state.players.map(item =>
        <Player name= {item.name} id={item.id}/>)} 
      </div>
    );
  }
}

export default App;
