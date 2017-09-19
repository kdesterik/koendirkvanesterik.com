import React from 'react';
import { Link } from 'react-router-dom';


export default class Card extends React.Component {

  render() {

    const { project, toggle } = this.props;
    const sizes = [ 'large', 'medium', 'small', 'medium', 'small' ];
    let classes = sizes[ Number( project.index ) % sizes.length ];
        classes += project.active ? ' active' : '';

    return (
      <Link to={ '/project/' + project.slug + '/' }>
        <article className={ 'card ' + classes } onClick={() => toggle( project )} style={{  backgroundImage: 'url(' + this.processImage( project ) + ')' }}>
          <header className='card-header'>
            <h3 dangerouslySetInnerHTML={{ __html: project.title.rendered }}></h3>
          </header>
          <div className='card-body' dangerouslySetInnerHTML={{ __html: project.excerpt.rendered }}></div>
        </article>
      </Link>
    );
  }

  processImage( project ){

    return project._embedded[ 'wp:featuredmedia' ] ? project._embedded[ 'wp:featuredmedia' ][ 0 ][ 'source_url' ] : ''
  }
}
