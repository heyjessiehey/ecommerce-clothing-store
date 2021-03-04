import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
};
// defualt parameter
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.currentUser:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
