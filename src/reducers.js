import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { 
  LOAD_INTRO,
  LOAD_PORTFOLIO,
  LOAD_PROFILE,
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
 * Root reducer
 */

export const rootReducer = combineReducers({

  routing: routerReducer,
  intro: introReducer,
  portfolio: portfolioReducer,
  profile: profileReducer,
});


export default rootReducer;