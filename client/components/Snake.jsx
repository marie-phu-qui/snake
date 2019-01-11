import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text } from 'react-konva';

class Snake extends React.Component {
  state = {
    color: 'green',
    x : '',
    y : ''
  };
  handleClick = () => {
    this.setState({
      
    });
  };
  render() {
    return (
      <Rect
          x={this.state.x}
          y={this.state.y}
          width={10}
          height={10}
          fill={this.state.color}
      />
    )
}
}


export default Snake