import actionTypes from '../ActionTypes';
const {API_CALL_REQUEST, API_CALL_SUCCESS, API_CALL_FAILURE, DEMO} = actionTypes;

const handleFetchDogsRequest = (data) => {
  return ({
    type: API_CALL_REQUEST,
    payload: data
  });
};

const handleFetchDogsSuccess = (data) => {
  return ({
    type: API_CALL_SUCCESS,
    payload: data
  });
};

const handleFetchDogsFailure = (error) => {
  return ({
    type: API_CALL_FAILURE,
    payload: error
  });
};

const handleDemoAction = (data) => {
  return ({
    type: DEMO,
    payload: data
  });
};

export default {
  handleFetchDogsRequest,
  handleFetchDogsSuccess,
  handleFetchDogsFailure,
  handleDemoAction
};
