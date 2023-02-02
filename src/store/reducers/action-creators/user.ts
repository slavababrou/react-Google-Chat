import { UserAction, UserActionTypes } from "../../../types/users";

export const setUserAction = () => {
  return {
    type: UserActionTypes.SET_USERS,
  };
};

export const setUserActionSuccess = (payload: UserAction) => {
    return {
      type: UserActionTypes.SET_USERS_SUCCESS,
      payload,
    };
  };

  export const setUserActionFailed = (payload: UserAction) => {
    return {
      type: UserActionTypes.SET_USERS_FAILED,
      payload,
    };
  };
  

export const asyncSetUserAction = () => {
  return {
    type: UserActionTypes.SET_USERS_ASYNC,
  };
};
