import React, {Component} from 'react';
import GridContainer from './GridContainer.js';
import SprintSelector from './SprintSelector.js';

class WorkItemOverview extends Component {
  render() {
      const workItemList = this.props.workItemList.map((workItem)=>
            <WorkItem content={workItem}/>
        );

    return (
      <div>
        {workItemList}
      </div>
    );
  }
}

class WorkItem extends Component {
  render() {
    return (
      <div>
        {this.props.content}
      </div>
    );
  }

}

export default WorkItemOverview;