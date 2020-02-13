import { put, takeLatest, delay } from "redux-saga/effects";
import { INCREMENT_ACTION_TYPE, DECREMENT_ACTION_TYPE } from "../slice/store";
import { incrementNumber, decrementNumber } from "../slice/store";

function* incrementNumberHandler() {
  yield delay(1000);
  yield put(incrementNumber(1));
}

function* decrementNumberHandler() {
  yield delay(1000);
  yield put(decrementNumber(1));
}

export function* all() {
  yield takeLatest(INCREMENT_ACTION_TYPE, incrementNumberHandler);
  yield takeLatest(DECREMENT_ACTION_TYPE, decrementNumberHandler);
}
