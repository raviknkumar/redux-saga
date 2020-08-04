import { takeLatest, call, put } from "redux-saga/effects";
import {fetchDog} from "./API";

import actions from './Actions';
import actionTypes from '../ActionTypes';

const {handleFetchDogsSuccess, handleFetchDogsFailure} = actions;
const {API_CALL_REQUEST, DEMO} = actionTypes;

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield takeLatest(API_CALL_REQUEST, workerSaga);
  yield takeLatest(DEMO, demoSaga);
}

function* demoSaga() {
  console.log("Demo is working!");
}


// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
  try {
    const response = yield call(fetchDog);
    const dog = response.data.message;

    // dispatch a success action to the store with the new dog
    yield put(handleFetchDogsSuccess(dog));

  } catch (error) {
    // dispatch a failure action to the store with the error
    console.log("Errror is", error);
    yield put(handleFetchDogsFailure(error));
  }
}
