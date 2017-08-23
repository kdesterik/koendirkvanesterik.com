import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Section from '../components/Section';
import Image from '../components/Image';
import Paragraph from '../components/Paragraph';

import { 
  BACK_TO_OVERVIEW,
  PREVIOUS_PROJECT,
  NEXT_PROJECT
} from '../snippets';


class Project extends React.Component {

  render() {
    return (
      <div className='project'>
        { 
          this.props.project.map(( section, index ) => {
            return (
              <Section key={ index }>
                {
                  section.map(( paragraph, index ) => {
                    switch( paragraph.type ){

                      case 'image':
                        return <Image key={ index } text={ paragraph.content } />

                      default:
                        return <Paragraph key={ index } text={ paragraph.content } />
                    }
                  })
                }
              </Section>
            )
          })
        }
        <footer className='project-footer'>
          <div className='paragraph'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-offset-3
                                col-lg-6
                                col-md-offset-3
                                col-md-6
                                col-sm-offset-2
                                col-sm-8
                                col-xs-12'>
                  <Link to={ '/project/' + this.props.previous.slug + '/' } className='arrow-left'>{ PREVIOUS_PROJECT }</Link><span className='hidden-sm-up'>{ ' / ' }</span><Link to={ '/' } className='arrow-back'>{ BACK_TO_OVERVIEW }</Link><span className='hidden-sm-up'>{ ' / ' }</span><Link to={ '/project/' + this.props.next.slug + '/' } className='arrow-right'>{ NEXT_PROJECT }</Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}


function mapStateToProps( state, props ){

  let project = state.portfolio.find( project => project.slug === props.match.params.slug );
  let total = state.portfolio.length;
  let current = 0;

  for( let i = 0; i < state.portfolio.length; i++ ){
    if( state.portfolio[ i ].slug === props.match.params.slug ) current = i;  
  }

  let previous = state.portfolio[( current + total - 1 ) % total ];
  let next = state.portfolio[( current + 1 ) % total ];

  return {
    project: project ? processContent( project ) : [],
    previous: project ? previous : { slug: '/' },
    next: project ? next : { slug: '/' },
  }
}


function processContent( project ){

  let data = project.content.raw.split( /<!--more-->/g );
  let content = data.map(( section, index ) => {
    let paragraphs = section.split( /&nbsp;/mg );
    return paragraphs.map(( paragraph, index ) => {
      return {
        type: paragraph.match( /(<img .*?>)/g ) ? 'image' : 'text',
        content: paragraph
      }
    });
  });

  return content;
}


export default connect( mapStateToProps )( Project );