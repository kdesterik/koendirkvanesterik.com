// Vendors
import 'normalize-css/normalize.css';
import 'flexboxgrid/dist/flexboxgrid.css';
import 'socicon/css/socicon.css';

// App
import React, { Component } from 'react';
import './App.css';

// Components
import Wrapper from '../wrapper/Wrapper';
import Preloader from '../preloader/Preloader';
import Header from '../header/Header';
import Intro from '../intro/Intro';
import Footer from '../footer/Footer';
// import Overview from '../overview/Overview';




class App extends Component {

  constructor() {
    super();
    this.state = {
      data: null
    };
  }
 
  componentDidMount(){
    fetch( '/data/wp-json/5383/01/index', { method: 'get' })
      .then( result => result.json() )
      .then( data => { this.setState({ data }) })
  }

  render() {
    return (
      <div className="app">

      { this.state.data ? (

        <Wrapper>
          <Header />
          <Intro data={ this.state.data.intro } />
          <Footer data={ this.state.data.footer } />
        </Wrapper>

      ) : (

        <Wrapper>
          <Preloader />
        </Wrapper>

      )}

      </div>
    );
  }
}

export default App;