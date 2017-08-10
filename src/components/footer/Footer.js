// Footer
import React, { Component } from 'react';
import Snippets from '../../core/scripts/Snippets';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-offset-3
                            col-lg-6
                            col-md-offset-3
                            col-md-6
                            col-sm-offset-2
                            col-sm-8
                            col-xs-12">
              <p>{ Snippets.company.name }<br/>{ Snippets.company.address }<br/>{ Snippets.company.zipcode }, { Snippets.company.city }</p>
              <p>{ Snippets.company.phone }<br/>{ Snippets.company.email }</p>
              <ul className="social-media-menu">
              { this.props.data.menu.map( item => ( 
                <li key={ item.id }><a href={ item.url } target="_blank" className={ 'socicon socicon-' + item.name }></a></li>
              ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;