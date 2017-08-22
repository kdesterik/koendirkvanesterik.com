import React from 'react';
import Colophon from '../containers/Colophon';
import Channels from '../containers/Channels';



export default class Footer extends React.Component {

  render() {
    return (
      <footer className="footer">
        <Colophon />
        <Channels />
      </footer>
    );
  }
}