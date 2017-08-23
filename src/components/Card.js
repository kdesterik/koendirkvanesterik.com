import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { VIEW_PROJECT } from '../snippets';


export default class Card extends React.Component {

  render() {

    const { project, toggle } = this.props;
    const sizes = [ 'large', 'medium', 'small', 'medium', 'medium', 'small' ];
    let classes = sizes[ Number( project.index ) % sizes.length ];
        classes += project.active ? ' active' : '';

    return (
      <article className={ 'card ' + classes } onClick={() => toggle( project )} style={{  backgroundImage: 'url(' + this.processImage( project ) + ')' }}>
        <header className='card-header'>
          <h3>
            <Link to={ '/project/' + project.slug + '/' }>
              <span dangerouslySetInnerHTML={{ __html: project.title.rendered }} />
            </Link>
          </h3>
          <Link to={ '/project/' + project.slug + '/' } dangerouslySetInnerHTML={{ __html: project.excerpt.rendered }}></Link>
        </header>
        <footer className='card-footer'>
          <Link to={ '/project/' + project.slug + '/' }>{ VIEW_PROJECT }</Link>
        </footer>
      </article>
    );
  }

  processImage( project ){

    return project._embedded[ 'wp:featuredmedia' ] ? project._embedded[ 'wp:featuredmedia' ][ 0 ][ 'source_url' ] : ''
  }
}

Card.propTypes = {

  project: PropTypes.object.isRequired,
  toggle: PropTypes.func.isRequired,
}
