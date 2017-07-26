import React, {Component} from 'react';
import GridContainer from './GridContainer.js';
import SprintSelector from './SprintSelector.js';
import WorkItemOverview from './WorkItemOverview.js';
import TeamSelection from './TeamSelection.js';

class PlanningTool extends Component {
  constructor() {
    super();
    this.state = {
      // iterationPaths: [
      //   'sprint 3031', 'sprint 3032', 'sprint 3033'
      // ],
      // pbiList: [1, 2, 3],
      teamList: ['Localization-NL', 'Localization-DE', 'Localization-ES'],
      workItemList: ["PBI 123: do something","PBI 345: do another thing"]
    }
  }

  render() {
    return (
      <div className="App">
        <TeamSelection teamList={this.state.teamList}/>
        <WorkItemOverview workItemList={this.state.workItemList}/>
      </div>
    );
  }
// <SprintSelector
//           iterationPaths={this.state.iterationPaths}
//          />
//         <GridContainer pbiList={this.state.pbiList}/>
  // renderGrid() {
  //   this.setState({
  //     pbiList: [8,9,10]
  //   });
  // }

}

export default PlanningTool;
