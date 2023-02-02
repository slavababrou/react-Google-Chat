import { call, put, takeEvery } from "redux-saga/effects";
import {
  setUserActionSuccess,
  setUserActionFailed,
} from "../store/reducers/action-creators/user";
import { UserAction, UserActionTypes } from "../types/users";
import { USERS } from "./USERS";
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export interface ResponseGenerator {
  data: JSON;
  json: () => {};
}
const fetchUsersFromApi = () => {
  return USERS;
};

function* fetchUsersWorker() {
  try {
    yield put({ type: UserActionTypes.SET_USERS });
    yield delay(1000);
    // const data: ResponseGenerator = yield call(fetchUsersFromApi);
    const data: ResponseGenerator = yield call(
      () => new Promise((res) => res(fetchUsersFromApi()))
    );
    // const json: UserAction = yield call(
    //   () => new Promise((res) => res(data.json()))
    // );

    const json: [] = yield call(() => new Promise((res) => res(data)));
    yield put({ type: UserActionTypes.SET_USERS, payload: json });
  } catch (e) {
    console.log(e);

    yield put({ type: UserActionTypes.SET_USERS_FAILED, payload: "Error!" });
  }
}

export function* userWatcher() {
  yield takeEvery(UserActionTypes.SET_USERS_ASYNC, fetchUsersWorker);
}
