import React from 'react';
import Intro from '../containers/Intro';
import Portfolio from '../containers/Portfolio';
import Profile from '../containers/Profile';


export default class Overview extends React.Component {

  render(){
    return (
      <div className='overview'>
        <Intro/>
        <Portfolio/>
        <Profile/>
      </div>
    );
  }
}
