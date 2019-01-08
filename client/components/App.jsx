import React from 'react'

import Title from './Title';
import Game from './Game';
import Board from './Board';


const App = () => {
    return (
        <React.Fragment>
            <Title />
            <Game />
            <Board />
        </React.Fragment>
    )
  }

export default App