import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text } from 'react-konva';

class Snake extends React.Component {
  state = {
    color: 'green',
    x : 100,
    y : 100
  };
  handleClick = () => {
    this.setState({
      
    });
  };
  render() {
    return (
        <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
            <Text text="Konva Rect" />
            <Rect
                x={this.state.x}
                y={this.state.y}
                width={10}
                height={10}
                fill={this.state.color}
            />
        </Layer>
        </Stage>
    )
}
}


export default Snake