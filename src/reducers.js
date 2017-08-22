import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { 
  LOAD_INTRO,
  LOAD_PORTFOLIO,
  LOAD_PROFILE,
  LOAD_COLOPHON,
  LOAD_CHANNELS,
  TOGGLE_PROJECT_EXCERPT,
} from './actions';



/*
 * Intro reducer
 */

export const introReducer = ( state = [], action ) => {

  switch( action.type ){

    case LOAD_INTRO:
      return action.intro;

    default:
      return state;
  }
}


/*
 * Portfolio reducer
 */

export const portfolioReducer = ( state = [], action ) => {

  switch( action.type ){

    case LOAD_PORTFOLIO:
      return action.portfolio;

    case TOGGLE_PROJECT_EXCERPT:
      return state.map( project => {
        return Object.assign({}, project, {
          active: ( Number( project.id ) === Number( action.id )) ? !project.active : false
        });
      });

    default:
      return state;
  }
}


/*
 * Profile reducer
 */

export const profileReducer = ( state = [], action ) => {

  switch( action.type ){

    case LOAD_PROFILE:
      return action.profile;

    default:
      return state;
  }
}


/*
 * Colophon reducer
 */

export const colophonReducer = ( state = [], action ) => {

  switch( action.type ){

    case LOAD_COLOPHON:
      return action.colophon;

    default:
      return state;
  }
}


/*
 * Channels reducer
 */

export const channelsReducer = ( state = [], action ) => {

  switch( action.type ){

    case LOAD_CHANNELS:
      return action.channels;

    default:
      return state;
  }
}


/*
 * Root reducer
 */

export const rootReducer = combineReducers({

  routing: routerReducer,
  intro: introReducer,
  portfolio: portfolioReducer,
  profile: profileReducer,
  colophon: colophonReducer,
  channels: channelsReducer,
});


export default rootReducer;