import HOME_ACTIONS from './constants'

export const getProducts = () => {
  return {
    type: HOME_ACTIONS.GET_PRODUCTS,
  }
}
export const setProducts = (productsList) => {
  return {
    type: HOME_ACTIONS.SET_PRODUCTS,
    payload: productsList,
  }
}
