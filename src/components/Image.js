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
                            col-xs-12" dangerouslySetInnerHTML={{ __html: this.props.text }}/>
          </div>
        </div>
      </div>
    );
  }
}