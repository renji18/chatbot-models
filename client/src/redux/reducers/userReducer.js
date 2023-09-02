import * as actionType from "../actions/actionTypes";

export const userData = (state = {}, action) => {
  switch (action.type) {
    case actionType.RECIEVE_MESAGE:
      return {
        ...state,
        message: action.data,
      };
    default:
      return state;
  }
};