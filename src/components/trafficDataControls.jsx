import React from 'react';
import './trafficDataControls.css';
import PropTypes from 'prop-types';


class TrafficDataControls extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  setTier (event) {
    this.props.changedCallback(event.target.value);
  }

  render () {
    return (
      <div className="traffic-data-options" onChange={event => this.setTier(event)}>
        <div>
          <input type="radio" value="normal" name="tier" defaultChecked></input>
          <label>Normal</label>
        </div>
        <div>
          <input type="radio" value="degraded" name="tier"></input>
          <label>Degraded</label>
        </div>
        <div>
          <input type="radio" value="outage" name="tier"></input>
          <label>Outage</label>
        </div>
        <div>
          <input type="radio" value="failover_start" name="tier"></input>
          <label>Failover Begin</label>
        </div>
        <div>
          <input type="radio" value="failover_finish" name="tier"></input>
          <label>Failover End</label>
        </div>
        <div>
          <input type="radio" value="recovery" name="tier"></input>
          <label>Recovery</label>
        </div>
      </div>
    );
  }
}

TrafficDataControls.propTypes = {
  changedCallback: PropTypes.func.isRequired
};


export default TrafficDataControls;
