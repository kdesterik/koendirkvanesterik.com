// Preloader
import React, { Component } from 'react';
import Snippets from '../../core/scripts/Snippets';
import './Preloader.css';

class Preloader extends Component {
  render() {
    return (
      <div className="preloader">
        <div className="container">
          <div className="row">
            <div className="col-lg-offset-3
                col-lg-6
                col-md-offset-3
                col-md-6
                col-sm-offset-2
                col-sm-8
                col-xs-12">
              <p>{ Snippets.loading }</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Preloader;