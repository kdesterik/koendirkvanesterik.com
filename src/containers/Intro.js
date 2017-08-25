import React from 'react';
import { connect } from 'react-redux';
import Section from '../components/Section';
import Columns from '../components/Columns';
import Instruction from '../components/Instruction';


class Intro extends React.Component {

  render() {
    return (
      <div className='intro'>
        <Section>
          <div className='spacer'></div>
          {
            this.props.intro.map(( data, index ) => {
              return( <Columns key={ index } width={ 'half' } text={ data.content.rendered } /> );
            })
          }
          <Instruction/>
        </Section>
      </div>
    );
  }
}


function mapStateToProps( state ){
  return {
    intro: state.intro
  }
}


export default connect( mapStateToProps )( Intro );