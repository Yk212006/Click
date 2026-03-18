import { USER_LOGIN, USER_REGISTER } from "./actionTypes";

let user = null;
if (typeof window !== "undefined" && window.localStorage) {
  try {
    user = localStorage.getItem("hiUser") || null;
  } catch (error) {
    console.warn("Failed to access localStorage:", error);
  }
}

const initialState = {
  user,
  payload: "",
};

export const UserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_REGISTER: {
      return {
        ...state,
        payload,
      };
    }
    case USER_LOGIN: {
      return {
        ...state,
        payload,
        user: payload.email,
      };
    }
    default:
      return state;
  }
};
