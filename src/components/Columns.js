import React from 'react';

export default class Columns extends React.Component {

  render() {


    let columns = '';

    switch( this.props.width ){

      case 'full':

        columns = (
          <div className="col-lg-12
            col-md-12
            col-sm-12
            col-xs-12" dangerouslySetInnerHTML={{ __html: this.props.text }} />
        );

        break;

      case 'half':
      default:

        columns = (
          <div className="col-lg-offset-3
            col-lg-6
            col-md-offset-3
            col-md-6
            col-sm-offset-2
            col-sm-8
            col-xs-12" dangerouslySetInnerHTML={{ __html: this.props.text }}/>
        );

        break;
    }




    return (
      <div className='columns'>
        <div className="container">
          <div className="row">
            { columns }
          </div>
        </div>
      </div>
    );
  }
}