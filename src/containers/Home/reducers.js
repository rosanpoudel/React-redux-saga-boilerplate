import HOME_ACTIONS from "./constants";

export const initialState = {
  productsList: [],
};
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case HOME_ACTIONS.SET_PRODUCTS:
      return { ...state, productsList: payload };
    default:
      return state;
  }
};
