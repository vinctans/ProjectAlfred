import React, {Component} from 'react';
import {Button, Dropdown,Item, Icon} from 'semantic-ui-react';

class TeamSelection extends Component {
    render() {
        const team = this
            .props
            .teamList
            .map((team) => <h6>{team}</h6>);
        return (
            <div>
                <img
                    src="ExactLogo.png"
                    style={{
                    paddingBottom: '20px',
                    maxHeight: '70px'
                }}/>
                <img
                    src="PlanningToolLogo.png"
                    style={{
                    paddingBottom: '20px',
                    height: '70px'
                }}/>
                <form class="ui large form">
                    <div
                        class="ui stacked segment"
                        style={{
                        textAlign: 'center',
                        width: '500px',
                        maxWidth: '80vw'
                    }}>
                        <h3>Planning made easy.</h3>
                        <Dropdown placeholder='Select Team' fluid selection options={team}/>
                        
                        <Button animated inverted color='blue'>
                            <Button.Content visible>Plan Now</Button.Content>
                            <Button.Content hidden>
                                <Icon name='right arrow'/>
                            </Button.Content>
                        </Button>
                    </div>
                </form>
            </div>
        );
    }
}

export default TeamSelection;