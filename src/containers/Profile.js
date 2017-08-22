import React from 'react';
import { connect } from 'react-redux';
import Paragraph from '../components/Paragraph';


class Profile extends React.Component {

  render() {
    return (
      <div className='profile'>
      {
        this.props.profile.map(( data, index ) => {
          return( <Paragraph key={ index } text={ data.content.rendered } /> );
        })
      }
      </div>
    );
  }
}


function mapStateToProps( state ){
  return {
    profile: state.profile
  }
}


export default connect( mapStateToProps )( Profile );