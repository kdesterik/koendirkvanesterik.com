import React from 'react';
import { connect } from 'react-redux';
import Paragraph from '../components/Paragraph';


class Colophon extends React.Component {

  render() {
    return (
      <div className='colophon'>
      {
        this.props.colophon.map(( content, index ) => {
          return( <Paragraph key={ index } text={ content} /> );
        })
      }
      </div>
    );
  }
}


function mapStateToProps( state ){
  return {
    colophon: state.colophon
  }
}


export default connect( mapStateToProps )( Colophon );