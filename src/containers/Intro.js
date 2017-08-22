import React from 'react';
import { connect } from 'react-redux';
import Section from '../components/Section';
import Paragraph from '../components/Paragraph';
import Instruction from '../components/Instruction';


class Intro extends React.Component {

  render() {
    return (
      <div className='intro'>
        <Section>
          <div className='spacer'></div>
          {
            this.props.intro.map(( data, index ) => {
              return( <Paragraph key={ index } text={ data.content.rendered } /> );
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