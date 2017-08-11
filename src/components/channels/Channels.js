import React, { Component } from 'react';
import './Channels.css';

class SocialMedia extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-offset-3
                          col-lg-6
                          col-md-offset-3
                          col-md-6
                          col-sm-offset-2
                          col-sm-8
                          col-xs-12">
            <div className="channels">
              <ul>
                { this.props.list.map( this.createMenuItem ) }
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  createMenuItem( item ){
    return (
      <li key={ item.id }><a href={ item.url } target="_blank" className={ 'socicon socicon-' + item.name }></a></li>
    );
  }
}

export default SocialMedia;