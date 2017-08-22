import React from 'react';

export default class Paragraph extends React.Component {

  render() {
    return (
      <div className='paragraph'>
        <div className="container">
          <div className="row">
            <div className="col-lg-offset-3
                            col-lg-6
                            col-md-offset-3
                            col-md-6
                            col-sm-offset-2
                            col-sm-8
                            col-xs-12" dangerouslySetInnerHTML={{ __html: this.props.text }}/>
          </div>
        </div>
      </div>
    );
  }
}