import React from 'react';
import { connect } from 'react-redux';
import 'socicon/css/socicon.css';


class Channels extends React.Component {

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
                { this.props.channels.map(( item ) => {
                  return <li key={ item.id }><a href={ item.url } target="_blank" className={ 'socicon socicon-' + item.name }></a></li>
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


function mapStateToProps( state ){
  return {
    channels: state.channels
  }
}


export default connect( mapStateToProps )( Channels );