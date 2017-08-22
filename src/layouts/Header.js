import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {

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
              <h1 className="title"><Link to="/">{ 'Koen Dirk van Esterik' }</Link></h1>
            </div>
          </div>
        </div>
      </header>
    );
  }
}