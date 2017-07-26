import React, {Component} from 'react';
import GridContainer from './GridContainer.js';
import SprintSelector from './SprintSelector.js';
import 'semantic-ui-react';

class PlanningTool extends Component {
  constructor() {
    super();
    this.state = {
      iterationPaths: [
        'sprint 3031', 'sprint 3032', 'sprint 3033'
      ],
      pbiList: [1, 2, 3]
    }
    this.renderGrid.bind(this);
  }

  render() {
    return (
      <div className="App">
        <SprintSelector
          iterationPaths={this.state.iterationPaths}
          onClick={()=> alert('clicking')}/>
        <GridContainer pbiList={this.state.pbiList}/>
      </div>
    );
  }

  renderGrid() {
    this.setState({
      pbiList: [8,9,10]
    });
  }

}

export default PlanningTool;
