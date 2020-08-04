
import actionTypes from '../ActionTypes';
const {API_CALL_REQUEST, API_CALL_SUCCESS, API_CALL_FAILURE, DEMO } = actionTypes;

// reducer with initial state
const initialState = {
  fetching: false,
  dog: null,
  error: null,
  dogs: []
};


export function reducer(state = initialState, action) {
  switch (action.type) {

    case API_CALL_REQUEST:
      return {
        ...state,
        fetching: true,
        error: null
      };

    case API_CALL_SUCCESS:
      console.log("Payload: ", action);
      return {
        ...state,
        fetching: false,
        dog: action.payload,
        dogs: [...state.dogs, action.payload]
      };

    case API_CALL_FAILURE:
      return {
        ...state,
        fetching: false, dog: null,
        error: action.payload.message
      };

    case DEMO:
      return {
        ...state,
        message: 'Hello',
        data: action.payload
      };

    default:
      return state;
  }
}
