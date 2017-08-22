import React from 'react';

export default class Cover extends React.Component {

  render() {
    return (
      <section className='section'>
        { this.props.children }
      </section>
    );
  }
}