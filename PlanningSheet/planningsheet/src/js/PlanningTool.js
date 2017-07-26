import React, {Component} from 'react';
import WorkItemOverview from './WorkItemOverview.js';
import TeamSelection from './TeamSelection.js';
import {Dropdown} from 'semantic-ui-react';

class PlanningTool extends Component {
  constructor() {
    super();
    this.state = {
      hasSelectedTeam: true,
      teamList:[{text: 'LocNL', value: '1'},
                {text: 'LocDE', value: '2'},
                {text: 'LocBE', value: '3'}],
      workItemList: ["PBI NL-123: eat ice cream",
                    "PBI DE-123: eat chocolate",
                    "PBI NL-123: eat macaroons",
                    "PBI NL-123: eat ramen"]
    }
    this.onSelectTeam = this.onSelectTeam.bind(this);
  }

  onSelectTeam(){
    this.setState({
      hasSelectedTeam: false,
    });
  }

  render() {

    if(this.state.hasSelectedTeam){
       var currentPage = <TeamSelection teamList={this.state.teamList} onSelectTeam={this.onSelectTeam}/>;
    } else {
      currentPage = <WorkItemOverview workItemList={this.state.workItemList}/>;
    }

    return (
      <div>
        {currentPage}
      </div>
    );
  }
  
}

export default PlanningTool;
