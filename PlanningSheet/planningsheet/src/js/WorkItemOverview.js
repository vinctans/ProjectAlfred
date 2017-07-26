import React, {Component} from 'react';
import {Icon, Button, Segment, Checkbox} from 'semantic-ui-react';

class WorkItemOverview extends Component {
  render() {
    const workItemList = this
      .props
      .workItemList
      .map((workItem) => <WorkItem content={workItem}/>);
    
    const planButton = <Button animated inverted color='blue' onClick={this.props.onClickPlan}>
        <Button.Content visible>Select & Plan Your PBIs</Button.Content>
        <Button.Content hidden>
          Let's Go! <Icon name='space shuttle'/>
        </Button.Content>
      </Button>;

    const backButton = <Button inverted color='red' onClick={this.props.onBackToTeamSelect}>
        <Icon name='arrow left'/>Back
      </Button>;

    return (
      <div>
        {backButton}
        {planButton}
        <br />
        <br />
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
          <Checkbox label={this.props.content}/>
        </Segment>
      </div>
    );
  }

}

export default WorkItemOverview;