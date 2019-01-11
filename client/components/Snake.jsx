import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text } from 'react-konva';

class Snake extends React.Component {
    // 
    constructor(props) {
        super(props);
        this.state = {
            color: 'red',
            x : 100,
            y : 100
        };
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange(e) {
        this.setState({
          ...this.state,
          [e.target.name]: e.target.value
        });
      }
  render() {
    return (
        <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
            <Text text="one square sized snake - moves on keyboard input" />
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