import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    const newValue = this.props.opacity;
    return (
      <div className="color-box" style={{opacity: newValue}}>
        { this.props.opacity >= 0.2 ? 
        (<div>
          <ColorBox opacity={newValue - 0.1}/>
        </div>)
        :
        null
        }
      </div>
    )
  }

}

