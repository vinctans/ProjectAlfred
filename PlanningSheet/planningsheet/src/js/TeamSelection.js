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
                    }} />
                <form class="ui large form">
                    <Segment raised>
                        <h3>Planning made easy.</h3>
                        <Dropdown placeholder='Select Team' fluid selection options={team} />
                        <br/>
                        <Button animated inverted color='blue'>
=======
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

                    <Dropdown placeholder='Select Team' fluid selection options={this.props.teamList}/>

                    </div> </form>
                <Button animated inverted color='blue'>
>>>>>>> 5eef2936372347e9cb4c05a3ccbd6d8a99834dd5
                            <Button.Content visible>Plan Now</Button.Content>
                            <Button.Content hidden>
                                <Icon name='right arrow' />
                            </Button.Content>
                        </Button>
<<<<<<< HEAD
                    </Segment>
                </form>
=======
>>>>>>> 5eef2936372347e9cb4c05a3ccbd6d8a99834dd5
            </div>
        );
    }
}

export default TeamSelection;

// <img
//                     src="ExactLogo.png"
//                     style={{
//                     paddingBottom: '20px',
//                     maxHeight: '70px'
//                 }}/>
//                 <img
//                     src="PlanningToolLogo.png"
//                     style={{
//                     paddingBottom: '20px',
//                     height: '70px'
//                 }}/>
//                 <form className="ui large form">
//                     <div
//                         class="ui stacked segment"
//                         style={{
//                         textAlign: 'center',
//                         width: '500px',
//                         maxWidth: '80vw'
//                     }}>
//                         <h3>Planning made easy.</h3>
//                         <Dropdown placeholder='Select Team' fluid selection options={team}/>
                        
//                         <Button animated inverted color='blue'>
//                             <Button.Content visible>Plan Now</Button.Content>
//                             <Button.Content hidden>
//                                 <Icon name='right arrow'/>
//                             </Button.Content>
//                         </Button>
//                     </div>
//                 </form>