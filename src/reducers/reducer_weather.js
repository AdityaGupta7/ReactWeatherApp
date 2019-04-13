import { FETCH_WEATHER } from '../actions/index'

export default function (state = [], action){//because we are going to have our data in array form; we first
  //initialise the state as an empty array
  switch(action.type){//we switch the type of our action object
    case FETCH_WEATHER:
      /*return state.concat([action.payload.data]);*/ // 'data' here is referreing to entire resolved (by middleware) promise
      return [ action.payload.data, ...state ]; // ES6 syntax of concatinating a string
    //in this, we don't want to mutate (change) the state, we want to append the previous results with current
    //result and return a new instance (version) of the state
    //we should always return a new instance of state; never mutate it.
    //that's why we use concat, as it returns a new array (new instance of state, in this case)
  }

  return state;
}
