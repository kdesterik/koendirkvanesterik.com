import React from 'react';
import { connect } from 'react-redux';
import Columns from '../components/Columns';


class Profile extends React.Component {

  render() {
    return (
      <div className='profile'>
      {
        this.props.profile.map(( data, index ) => {
          return( <Columns key={ index } width={ 'half' } text={ data.content.rendered } /> );
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