import React, { Component } from 'react';

class GridContainer extends Component {
  render() {
    const pbi = this.props.pbiList.map((pbi)=>
      <h1>{pbi}</h1>
    );
    return (
      <div style={{
        border: '5px solid violet'
      }}> {pbi} </div>
    );
  }
}

export default GridContainer;
