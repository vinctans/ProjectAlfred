import React, { Component } from 'react';
import { Grid, Image, Loader } from 'semantic-ui-react';


class GridContainer extends Component {
  render() {
    const pbi = this.props.pbiList.map((pbi)=>
      <h1>{pbi}</h1>
    );


    return (
      <div> 
      <Grid>
    <Grid.Row columns={9} width='sixteen'>
      <Grid.Column style={{
        border: '2px solid grey',
        }}>
        day 1
      </Grid.Column>
      <Grid.Column style={{
        border: '2px solid grey',
       }}>
        day 2
      </Grid.Column>
      <Grid.Column style={{
        border: '2px solid grey',
       }}>
        day 3
      </Grid.Column>
    </Grid.Row>
     </Grid>
     <Loader active />
  
      {pbi} </div>
    );
  }
}

export default GridContainer;
