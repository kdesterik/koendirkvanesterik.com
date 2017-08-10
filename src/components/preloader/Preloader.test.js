import React from 'react';
import ReactDOM from 'react-dom';
import Preloader from './Preloader';

it( 'renders without crashing', () => {
  const div = document.createElement( 'div' );
  ReactDOM.render( <Preloader />, div );
});
