import React from 'react';
import Card from '../components/Card';
import { connect } from 'react-redux';
import { toggleProjectData } from '../actions';


class Portfolio extends React.Component {

  constructor( props ){
    super( props );
    this.handleClick = this.handleClick.bind( this );
  }

  render(){
    return (
      <div className='portfolio'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12
                            col-md-12
                            col-sm-12
                            col-xs-12'>
              <div className='grid'>
                { 
                  this.props.portfolio.map(( project, index ) => {
                    project = Object.assign({}, project, { index: index });
                    return( <Card key={ index } project={ project } toggle={ this.handleClick } /> );
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  handleClick( project ){

    this.props.dispatch( toggleProjectData( project ));
  }
}

function mapStateToProps( state ){
  return {
    portfolio: state.portfolio
  }
}

export default connect( mapStateToProps )( Portfolio );