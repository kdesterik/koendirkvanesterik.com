import React, { Component } from 'react';

import Wrapper from '../wrapper/Wrapper';
import Header from '../header/Header';
import Portfolio from '../portfolio/Portfolio';
import Footer from '../footer/Footer';




class App extends Component {
  render() {
    return (
      <div className="app">
        <Wrapper>
          <Header/>
            <Portfolio/>
          <Footer/>
        </Wrapper>
      </div>
    );
  }
}

export default App;