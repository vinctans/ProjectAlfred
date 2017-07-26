import React, {Component} from 'react';
import { Segment, Checkbox } from 'semantic-ui-react';

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
      <Segment raised>
      <Checkbox label={this.props.content} />
      </Segment>
      </div>
    );
  }

}

export default WorkItemOverview;