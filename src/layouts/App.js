import React from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';


export default class App extends React.Component {

  render() {
    return (
      <div className="app">
        <Header/>
          { this.props.children }
        <Footer/>
      </div>
    );
  }
}