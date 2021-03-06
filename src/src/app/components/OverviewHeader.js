/*Header of the overview page in which there is Data-time, the company name and the menu with application*/

import React from 'react';
import Time from 'react-time'

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'w3-css/w3.css';
import '../css/overviewHeader.css';


export class OverviewHeader extends React.Component {

  //initialize the initial state of date
  getInitialState() {
    return {
      now: new Date(),
    };
    this.interval = null;
  }

  //constructor created because this component has a state necessary to manage time and data
  constructor(props) {
      super(props);
      this.state = {interval: null};
  }

  //update regurarly the value of Data-time
  componentDidMount() {
    const self = this;
    self.interval = setInterval(function() {
      self.setState({
        now: new Date(),
      });
    }, 1000);
  }

  //clear the value of Data-time when the component is unmounted
  componentWillUnmount() {
    clearInterval(this.interval);
  }


  render() {

    return (

    <div>

      <div className="overviewHeader">

        <div className="col-sm-5">
          <p className="date"> <Time value={this.state.now} format="DD/MM/YYYY" /> - <Time value={this.state.now} format="HH:mm" /> </p>
        </div>

        <div className="col-sm-2">
          <p>FleetMe <span className="badge badge-default">Management</span></p>
        </div>


        <div className="col-sm-5">
          <p className="user_name">
          <span className="glyphicon glyphicon-user fleetManager-user"></span>
             Logged in as Steven Blind
          <span className="caret"></span>
          </p>
        </div>
      </div>

    </div>
    );
  }
}
