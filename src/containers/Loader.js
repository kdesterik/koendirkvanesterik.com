import React from 'react';
import { connect } from 'react-redux';
import {
  loadIntro,
  loadPortfolio,
  loadProfile,
  loadColophon,
  loadChannels,
} from '../actions';


class Loader extends React.Component {

  componentDidMount() {
    
    this.props.dispatch( loadIntro() );
    this.props.dispatch( loadPortfolio() );
    this.props.dispatch( loadProfile() );
    this.props.dispatch( loadColophon() );
    this.props.dispatch( loadChannels() );
  }

  render() {
    return null;
  }
}

export default connect()( Loader );