import React from 'react';
import Header from '../components/Header';


export default class App extends React.Component {

  render() {
    return (
      <div className="app">
        <Header/>
        { this.props.children }
      </div>
    );
  }
}