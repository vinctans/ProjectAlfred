import React, {Component} from 'react';
import {Icon, Button, Segment, Checkbox, Grid, Label} from 'semantic-ui-react';

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
        <Segment raised style={{ width: '800px', maxWidth: '90vw', margin: '10px' }}>
          <Grid stackable columns={3}>
            <Grid.Row>
              <Grid.Column width={1}>
                <Checkbox key={this.props.content.pbiNumber} />
              </Grid.Column>
              <Grid.Column width={2}>
                <Label key={this.props.content.pbiNumber} size='large' color='blue'>
                  {this.props.content.pbiNumber}
                </Label>
              </Grid.Column>
              <Grid.Column width={8}>
                <h3>{this.props.content.title}</h3>
                <p>{this.props.content.description}</p>
              </Grid.Column>
              <Grid.Column width={5} style={{ textAlign: 'right' }}>
                <Grid.Row>
                  <Label key={this.props.content.pbiNumber} size='large' color='green'>
                    {this.props.content.status}
                  </Label>
                </Grid.Row>
                <br />
                <Grid.Row>
                  <Label key={this.props.content.pbiNumber} size='large' color='yellow'>
                    {this.props.content.assignedTo}
                  </Label>
                </Grid.Row>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    );
  }

}

export default WorkItemOverview;