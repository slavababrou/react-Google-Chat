export interface UserState {
  users: any[];
  loading: boolean;
  error: null | string;
}

export enum UserActionTypes {
  SET_USERS = "SET_USERS",
  SET_USERS_SUCCESS = "SET_USERS_SUCCESS",
  SET_USERS_FAILED = "SET_USERS_FAILED",
  SET_USERS_ASYNC = "SET_USERS_ASYNC",
}
export interface SetUserFailedAction {
  type: UserActionTypes.SET_USERS_FAILED;
  payload: string;
}
export interface SetUserSuccessAction {
  type: UserActionTypes.SET_USERS_SUCCESS;
  payload: any[];
}
export interface SetUserAction {
  type: UserActionTypes.SET_USERS;
}
export type UserAction =
  | SetUserAction
  | SetUserSuccessAction
  | SetUserFailedAction;
