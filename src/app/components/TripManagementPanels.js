/*Component in which there are the information about acceleration and pre-emptive driving*/
import {TripPanel} from './TripPanel'

import React from 'react';

export class TripManagementPanels extends React.Component {

  constructor(props)
  {
    super(props)
    this.setState({listTrips: []})
  }
   
  //obtains the list of trips given the current employee
  componentDidMount()
  {
      let url = 'http://localhost:3000/user/' + this.props.employee + '/trips'
      fetch(url)
          .then(res => res.json())
          .then(listTrips => this.setState({listTrips}))
  }
    
  render() 
  { 
    //creates the list of trips
    let tripPanels
    try{
      tripPanels = this.state.listTrips.map((trip) =>
                            <TripPanel 
                                    key={trip.id}
                                    date={trip.create_date}
                                    changePanel={this.props.changePanel}
                                    changeTrip={this.props.changeTrip}/>)
    }
    catch(e){}
    return (
      <div>
        {tripPanels}
      </div>
    );
  }
}