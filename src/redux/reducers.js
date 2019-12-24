import { combineReducers } from 'redux'
import {
  DATA_LOADED,
  DATA_LOADING,
} from './actions';


const defLoadState = {
  data: {},
  status: "empty",
};



function loadReducer(state = defLoadState, action) {
  switch (action.type) {
    case DATA_LOADING:
      return {...state, status: "loading"};
    case DATA_LOADED:
      return {...state, data: action.data, status: "loaded"};
    default:
      return state;
  }
}


const helloWorldAppReducer = combineReducers({
  loadReducer,
});

export default helloWorldAppReducer