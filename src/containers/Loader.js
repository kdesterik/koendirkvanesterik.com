import React from 'react';
import { connect } from 'react-redux';
import {
  loadIntro,
  loadPortfolio,
  loadProfile,
} from '../actions';


class Loader extends React.Component {

  componentDidMount() {
    
    this.props.dispatch( loadIntro() );
    this.props.dispatch( loadPortfolio() );
    this.props.dispatch( loadProfile() );
  }

  render() {
    return (
      !this.props.loaded ? (
        <div className='loader'><div className='background'><span/></div></div>
      ) : (
        null
      )
    );
  }
}

function mapStateToProps( state ){
  return {
    loaded: state.intro.length > 0 && state.portfolio.length > 0 && state.profile.length > 0
  }
}

export default connect( mapStateToProps )( Loader );