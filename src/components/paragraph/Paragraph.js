import React, { Component } from 'react';
import './Paragraph.css';

class Paragraph extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-offset-3
                          col-lg-6
                          col-md-offset-3
                          col-md-6
                          col-sm-offset-2
                          col-sm-8
                          col-xs-12">
            <div className="paragraph" dangerouslySetInnerHTML={{ __html: this.props.text }}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Paragraph;