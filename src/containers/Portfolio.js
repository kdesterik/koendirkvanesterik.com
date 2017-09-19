import React from 'react';
import Card from '../components/Card';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-component';


class Portfolio extends React.Component {

  render(){

    let options = {
      gutter: 28,
      columnWidth: '.small',
      itemSelector: '.card',
      transitionDuration: 0
    }

    return (
      <div className='portfolio'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12
                            col-md-12
                            col-sm-12
                            col-xs-12'>
              <Masonry className={ 'grid' } options={ options }>
                { 
                  this.props.portfolio.map(( project, index ) => {
                    project = Object.assign({}, project, { index: index });
                    return( <Card key={ index } project={ project } /> );
                  })
                }
              </Masonry>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps( state ){
  return {
    portfolio: state.portfolio
  }
}

export default connect( mapStateToProps )( Portfolio );