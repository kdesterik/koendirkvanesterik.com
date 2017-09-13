/*
 * Intro actions
 */

export const LOAD_INTRO = 'actions.LOAD_INTRO';

export function loadIntro(){

  return loadData( 'intro', '/api/wp-json/wp/v2/pages?slug=intro', LOAD_INTRO );
};


/*
 * Portfolio actions
 */

export const LOAD_PORTFOLIO = 'actions.LOAD_PORTFOLIO';

export function loadPortfolio(){

  return loadData( 'portfolio', '/api/wp-json/wp/v2/posts?_embed', LOAD_PORTFOLIO );
};


export const TOGGLE_PROJECT_EXCERPT = 'actions.TOGGLE_PROJECT_EXCERPT';

export function toggleProjectData( project ){
  return {
    type: TOGGLE_PROJECT_EXCERPT,
    id: project.id,
  };
};


/*
 * Profile actions
 */

export const LOAD_PROFILE = 'actions.LOAD_PROFILE';

export function loadProfile(){

  return loadData( 'profile', '/api/wp-json/wp/v2/pages?slug=profile', LOAD_PROFILE );
};


/*
 * Colophon actions
 */

export const LOAD_COLOPHON = 'actions.LOAD_COLOPHON';

export function loadColophon(){

  return loadData( 'colophon', '/api/wp-json/wp/v2/colophon', LOAD_COLOPHON );
};


/*
 * Channels actions
 */

export const LOAD_CHANNELS = 'actions.LOAD_CHANNELS';

export function loadChannels(){

  return loadData( 'channels', '/api/wp-json/wp/v2/channels', LOAD_CHANNELS );
};


/*
 * Load function
 */

function loadData( name, route, action ){
  return ( dispatch ) => {
    return fetch( route )
      .then( response => response.json() )
      .then( ( api ) => {
        dispatch({
          type: action,
          [ name ]: api ? api : [],
        });
      }
    );
  };
};