import React from 'react'

import Title from './Title';
import Game from './Game';
import ColoredRect from './ColoredRect';
import Snake from './Snake';


const App = () => {
    return (
        <React.Fragment>
            <Title />
            <Game />
            <ColoredRect />
            <Snake />
        </React.Fragment>
    )
  }

export default App