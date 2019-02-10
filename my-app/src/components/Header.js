import React from 'react'

const Header =(props) =>  (
    <header>
        <h1>Scoreboard</h1>
        <span className="stats">Players: {props.lungime}</span>
    </header>)

export default Header