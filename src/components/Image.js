import React from 'react';

export default class Image extends React.Component {

  render() {
    return (
      <div className='image'>
        <div className="container">
          <div className="row">
            <div className="col-lg-12
                            col-md-12
                            col-sm-12
                            col-xs-12" dangerouslySetInnerHTML={{ __html: this.props.text }} />
                { /* <div className='image-holder' style={{  maxWidth: this.processWidth( this.props.text ), paddingBottom: this.processRatio( this.props.text ) }} dangerouslySetInnerHTML={{ __html: this.props.text }}/> */ }
          </div>
        </div>
      </div>
    );
  }

  processWidth( image ){

    let width = /width="(\d*)"/g;
    return width.test( image ) ? image.split( width )[ 1 ] + 'px' : '100%';
  }

  processRatio( image ){

    return '50%';
  }
}