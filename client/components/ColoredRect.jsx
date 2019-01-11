import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';

// Get to know Konva exemple
class ColoredRect extends React.Component {
  state = {
    color: 'green'
  };
  handleClick = () => {
    this.setState({
      color: Konva.Util.getRandomColor()
    });
  };
  render() {
    return (
        <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Text text="Click on the square to change color" />
          <Rect
            x={20}
            y={20}
            width={500}
            height={500}
            fill={this.state.color}
            shadowBlur={5}
            onClick={this.handleClick}
            />
        </Layer>
      </Stage>
    );
  }
}

export default ColoredRect