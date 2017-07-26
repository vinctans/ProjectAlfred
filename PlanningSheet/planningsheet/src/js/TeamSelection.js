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
<<<<<<< HEAD
                    paddingBottom: '20px',
                    height: '70px'
                }}/>
                <form className="ui large form">
                    <div
                        class="ui stacked segment"
                        style={{
                        textAlign: 'center',
                        width: '500px',
                        maxWidth: '80vw'
                    }}> 
                    
                    <h3>Planning made easy.</h3>

                    <Dropdown placeholder='Select Team' fluid selection options={this.props.teamList}
                    />

                    </div> </form>

                    <Button animated inverted color='blue' onClick={this.props.onSelectTeam}>
=======
                        paddingBottom: '20px',
                        height: '70px'
                    }} />
                <form class="ui large form">
                    <Segment raised>
                        <h3>Planning made easy.</h3>
                        <Dropdown placeholder='Select Team' fluid search selection options={this.props.teamList} />
                        <br/>
                        <Button animated inverted color='blue'>
>>>>>>> 160ec5c4db3ae54cdefd54751efd899853993540
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