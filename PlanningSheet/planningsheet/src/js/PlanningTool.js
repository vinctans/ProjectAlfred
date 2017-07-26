import React, {Component} from 'react';
import WorkItemOverview from './WorkItemOverview.js';
import TeamSelection from './TeamSelection.js';
import SprintPlanningSheet from './SprintPlanningSheet.js';

class PlanningTool extends Component {
  constructor() {
    super();
    this.state = {
      hasSelectedTeam: true,
      teamList:[{text: 'Localization Netherlands', value: '1', flag: 'nl'},
                {text: 'Localization Germany', value: '2', flag: 'de'},
                {text: 'Localization Belgium', value: '3', flag: 'be'},
                {text: 'Localization Spain', value: '4', flag: 'es'},
                {text: 'Localization France', value: '5', flag: 'fr'},
                {text: 'Localization United Kingdom', value: '6', flag: 'gb'}],
      workItemList: [{pbiNumber: '721545', title:'Create calendar management', assignedTo: 'Wendy Kong Wei Zhen', status: 'In Sprint', description: 'This PBI is to create a calendar management using React'},
                    {pbiNumber: '845125', title:'Enhance REST API selection', assignedTo: 'Vincent Ansari', status: 'In Sprint', description: 'REST API filtering is to be amended'},
                    {pbiNumber: '846213', title:'Advanced planning prioritization', assignedTo: 'Chat Ming Yoon', status: 'In Sprint', description: 'PBI priority will be prioritized using advanced predictive mechanism'},
                    {pbiNumber: '989654', title:'Assign TFS PBI from PlanningTool', assignedTo: 'Mei Pheng Lau', status: 'In Sprint', description: 'User can directy assign someone to a PBI in TFS from PlanningTool'}],
      currentView: 'teamSelect'
    }
    this.onSelectTeam = this.onSelectTeam.bind(this);
    // this.getWorkItems = this.getWorkItems.bind(this);
    this.onClickPlan = this.onClickPlan.bind(this);
    this.getCurrentPage = this.getCurrentPage.bind(this);
    this.onBackToTeamSelect = this.onBackToTeamSelect.bind(this);
  }

  onClickPlan(){
    this.setState({
      currentView: 'sprintPlanningSheet'
    });
    // alert('todo: render plan (page 3)');
  }

  onBackToTeamSelect(){
    this.setState({
      currentView: 'teamSelect'
    });
  }

  // getWorkItems() {
  //   var jsonResult;
  //   const main = this;

  //   //
  //   fetch('https://tfs.eu.exactsoftware.com:8088/tfs/EUCollection/ExactOnline/_apis/wit/wiql/0a7d7097-1396-401b-82dc-bc4fcfcb153c')
  //   .then(function (response) {
  //     // var info = eval('(' + response + ')');

  //     var jsonResponse=JSON.stringify(response);
  //     // var jsonInfo=JSON.stringify(info);
      
  //     console.log('json response '+jsonResponse);
  //     // console.log('json info '+jsonInfo);
      
      
  //     // json=JSON.parse(json);
  //     // console.log(json);
      
      
  //     return response.json();
  //   })
  //     .then(function (data) {
        
  //       // console.log(JSON.stringify(data.results));
  //      // if (JSON.stringify(data.results)) {
  //        // jsonResult = data.results[0]; //only getting the first result
  //         //not handling empty results
  //         //main.setState({
  //          // movieListPath: [data.results[1].poster_path, 
  //            // data.results[2].poster_path,
  //            // data.results[3].poster_path,
  //            // data.results[4].poster_path],
  //         //});
  //      // }
  //     })
  //     .catch(function (ex) {
  //       console.log('failed', ex)
  //     });
  // }

  onSelectTeam(){
    // this.getWorkItems();
    this.setState({
      hasSelectedTeam: false,
      currentView: 'workItemOverview'
    });
  }
  
  getCurrentPage(){
    switch(this.state.currentView){
      case 'teamSelect': return <TeamSelection teamList={this.state.teamList} onSelectTeam={this.onSelectTeam}/>;
                          break;
      case 'workItemOverview': return <WorkItemOverview workItemList={this.state.workItemList}
      onClickPlan={this.onClickPlan} onBackToTeamSelect={this.onBackToTeamSelect}/>;
                          break;
      case 'sprintPlanningSheet': return <SprintPlanningSheet />;
                          break;                                  
    }
  }

  render() {

    // if(this.state.hasSelectedTeam){
    //    var currentPage = <TeamSelection teamList={this.state.teamList} onSelectTeam={this.onSelectTeam}/>;
    // } else {
    //   currentPage = <WorkItemOverview workItemList={this.state.workItemList} onClickPlan={this.onClickPlan}/>;
    // }

    return (
      <div>
      {this.getCurrentPage()}
        
      </div>
    );
  }
  
}

export default PlanningTool;
