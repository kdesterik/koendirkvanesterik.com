import React, { Component } from 'react';
import './Overview.css';

class Overview extends Component {
  render() {
    return (
      <div className="overview">
        <div className="grid grid--container">
          <div className="row">
            { this.props.data.map( item => (
              <div className="col col--lg-1 col--md-2 col--sm-4">
                <div className="card"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Overview;