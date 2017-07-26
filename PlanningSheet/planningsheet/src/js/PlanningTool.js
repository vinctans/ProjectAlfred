import React, { Component } from 'react';
import GridContainer from './GridContainer.js';
import Dropdown from './Dropdown.js';

class PlanningTool extends Component {
  constructor(){
    super();
    this.state ={
      iterationPath: '3031',
      pbiList: [1,2,3]
    }
  }

  render() {
    return (
      <div className="App">
        <Dropdown iterationPath={this.state.iterationPath}/>
        <GridContainer pbiList={this.state.pbiList}/>
      </div>
    );
  }
}

export default PlanningTool;
