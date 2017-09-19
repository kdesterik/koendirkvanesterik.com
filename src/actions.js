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


/*
 * Profile actions
 */

export const LOAD_PROFILE = 'actions.LOAD_PROFILE';

export function loadProfile(){

  return loadData( 'profile', '/api/wp-json/wp/v2/pages?slug=profile', LOAD_PROFILE );
};


/*
 * Load function
 */

function loadData( name, route, action ){
  return ( dispatch ) => {
    return fetch( route )
      .then( response => response.json() )
      .then( ( data ) => {
        dispatch({
          type: action,
          [ name ]: data ? data : [],
        });
      }
    );
  };
};