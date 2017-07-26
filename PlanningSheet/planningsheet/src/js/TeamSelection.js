import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';

class TeamSelection extends Component {
  render() {
    const team = this.props.teams.map((team)=>
      <h6>{team}</h6>
    );
    return (
        <div>
            <img src="ExactLogo.png" style="padding-bottom: 20px; max-height: 70px;" />
            <img src="PlanningToolLogo.png" style="padding-bottom: 20px; height: 70px;" />
            <form class="ui large form">
                <div class="ui stacked segment" style="text-align:center; width:500px; max-width:80vw;">
                    <h3>Planning made easy.</h3>
                    <Dropdown placeholder='Select Team' fluid selection options={team} onClick={() => alert('hi')}/>
                    <button class="field ui large inverted blue button">Plan Now</button>
                </div>
            </form>
        </div>
    );
  }
}

export default TeamSelection;