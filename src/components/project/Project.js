// Header
import React, { Component } from 'react';
import './Header.css';


class Header extends Component {
  
  constructor() {
    super();
    this.state = {
      isActive: false
    };
  }

  buttonClickHandler(){
    this.setState({ isActive: !this.state.isActive });
    document.getElementById( 'body' ).className = !this.state.isActive ? 'active' : '';
  }

  render() {
    return (
      <header className={ this.state.isActive ? 'header active' : 'header' }>
        <div className="header--background"></div>
        <div className="header--top">
          <div className="grid grid--container">
            <div className="row">
              <div className="col col--lg-1 col--lg-offset-1 col--md-3 col--sm-3">
                <h1 className="site--title">{ this.props.data.name }</h1>
                <p className="site--description">{ this.props.data.description }</p>
              </div>
              <div className="col col--lg-1 col--md-1 col--sm-1 text--right">
                <button className="hamburger" onClick={ this.buttonClickHandler.bind( this )}>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="header--content">
          <div className="grid grid--container">
            <div className="row">
              { this.props.data.profile.map( item => ( 
              <div key={ item.id } className={ item.type === 'text' ? 'col col--lg-2 col--lg-offset-1 col--md-4 col--sm-4' : 'col col--lg-4 col--md-4 col--sm-4' }>
                <p>{ item.type === 'text' ? item.content : <img src={ item.content } alt="placeholder" /> }</p>
              </div>
              ))}
            </div>
            <div className="row">
              <div className="col col--lg-2 col--lg-offset-1 col--md-4 col--sm-4">
                <ul>
                  { this.props.data.menu.map( item => ( 
                    <li key={ item.id }><a href={ item.url } target="_blank" className={ 'socicon socicon-' + item.name }>{ item.title }</a></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;