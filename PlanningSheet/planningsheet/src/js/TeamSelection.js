import React, { Component } from 'react';
import { Button, Dropdown, Item, Icon, Segment } from 'semantic-ui-react';

class TeamSelection extends Component {
    render() {
        return (
            <div>
                <img
                    src="ExactLogo.png"
                    style={{
                        paddingBottom: '20px',
                        maxHeight: '70px'
                    }} />
                <img
                    src="PlanningToolLogo.png"
                    style={{
                        paddingBottom: '20px',
                        height: '70px'
                    }} />
                <form class="ui large form">
                    <Segment raised style={{ width: '500px', maxWidth: '80vw' }}>
                        <h3>Planning made easy.</h3>
                        <Dropdown placeholder='Select Team' fluid search selection options={this.props.teamList} />
                        <br />
                        <Button animated inverted color='blue' onClick={this.props.onSelectTeam}>
                            <Button.Content visible>Plan Now</Button.Content>
                            <Button.Content hidden>
                                <Icon name='right arrow' />
                            </Button.Content>
                        </Button>
                    </Segment>
                </form>
            </div>
        );
    }
}

export default TeamSelection;