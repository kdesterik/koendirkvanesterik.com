// Header
import React, { Component } from 'react';
import Snippets from '../../core/scripts/Snippets';
import './Header.css';


class Header extends Component {
  render() {
    return (
      <header className='header'>
        <div className="container">
          <div className="row">
            <div className="col-lg-offset-3
                            col-lg-6
                            col-md-offset-3
                            col-md-6
                            col-sm-offset-2
                            col-sm-8
                            col-xs-12">
              <h1 className="site-title">{ Snippets.name }</h1>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;