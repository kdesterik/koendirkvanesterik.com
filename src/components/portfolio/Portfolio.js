import React, { Component } from 'react';
import Paragraph from '../paragraph/Paragraph';

class Portfolio extends Component {

  constructor() {
    super();
    this.state = {
      data: {
        intro: '',
        profile: ''
      }
    }
  }
 
  componentDidMount(){
    fetch( '/data/wp-json/wp/v2/portfolio', { method: 'get' })
      .then( result => result.json() )
      .then( data => { 
        this.setState({ data: data })
      })
  }

  render() {
    return (
      <div className="portfolio">
        <Paragraph text={ this.state.data.intro } />
        <Paragraph text={ this.state.data.profile } />
      </div>
    );
  }
}

export default Portfolio;