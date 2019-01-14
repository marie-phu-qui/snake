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
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleKey = this.handleKey.bind(this);
      }
    handleClick(e) {
        console.log('pouet')
        e.focus()
    };
    handleChange(e) {
        this.setState({
          ...this.state,
          [e.target.name]: e.target.value
        })
    };
    handleKey(e){
        console.log('keyboard')
        // Stage.addEventListener('keydown', function (e) {
        // if (e)vent.key === 37) {
        //     Rect.x(Rect.x() - 4);
        // } else if (event.key === 38) {
        //     Rect.y(Rect.y() - 4);
        // } else if (event.key === 39) {
        //     Rect.x(Rect.x() + 4);
        // } else if (event.key === 40) {
        //     Rect.y(Rect.y() + 4);
        // } else {
        //     return;
        // }
        // e.preventDefault();
        // });
      }
  render() {
    return (
        <Stage width={window.innerWidth} height={window.innerHeight} onClick={this.handleClick} >
        <Layer>
            <Text text="one square sized snake - moves on keyboard input" />
            <Rect
                x={this.state.x}
                y={this.state.y}
                width={10}
                height={10}
                fill={this.state.color}
                handleKey={() => this.handleKey()}
            />
        </Layer>
        </Stage>
    )
}
}


export default Snake