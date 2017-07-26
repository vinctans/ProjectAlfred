import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';

class SprintSelector extends Component {
  render() {
    const iterationPath = this.props.iterationPaths.map((iterationPath)=>
      <h6>{iterationPath}</h6>
    );
    //  test=['sprint 1','sprint 2','sprint 3'];
    return (
      // <Dropdown placeholder='Select Sprint' fluid selection options={iterationPath}/>
      <Button animated>
      <Button.Content visible>Sprint 3031</Button.Content>
      <Button.Content hidden>
        <Icon name='right arrow'/>
      </Button.Content>
    </Button>
    );
  }

}

export default SprintSelector;
