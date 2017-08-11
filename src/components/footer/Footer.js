import React, { Component } from 'react';
import Channels from '../channels/Channels';
import Paragraph from '../paragraph/Paragraph';

class Footer extends Component {

  constructor() {
    super();
    this.state = {
      data: {
        colophon: '',
        channels: []
      }
    }
  }
 
  componentDidMount(){
    fetch( '/data/wp-json/wp/v2/footer', { method: 'get' })
      .then( result => result.json() )
      .then( data => { 
        this.setState({ data: data })
      })
  }

  render() {
    return (
      <footer>
        <Paragraph text={ this.state.data.colophon } />
        <Channels list={ this.state.data.channels } />
      </footer>
    );
  }
}

export default Footer;