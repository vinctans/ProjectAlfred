import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';

class SprintSelector extends Component {
  render() {
    const iterationPath = this.props.iterationPaths.map((iterationPath)=>
      <h6>{iterationPath}</h6>
    );
    return (
      <Dropdown placeholder='Select Sprint' fluid selection options={iterationPath} onClick={() => alert('hi')}/>
    );
  }

}

export default SprintSelector;
