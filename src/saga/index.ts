import { userWatcher } from "./userSaga";
import { all } from "redux-saga/effects";

export default function* rootWatcher() {
  yield all([userWatcher()]);
}
