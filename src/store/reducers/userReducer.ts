import { UserAction, UserState, UserActionTypes } from "../../types/users";

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};
export const userReducer = (
  state = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionTypes.SET_USERS: {
      return { users: [], loading: true, error: null };
    }
    case UserActionTypes.SET_USERS_SUCCESS: {
      return { users: action.payload, loading: false, error: null };
    }
    case UserActionTypes.SET_USERS_FAILED: {
      return { users: [], loading: false, error: action.payload };
    }

    default:
      return state;
  }
};
