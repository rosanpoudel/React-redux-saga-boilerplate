import DETAIL_ACTIONS from './constants'

export const fetchProductDetails = (id) => {
  return {
    type: DETAIL_ACTIONS.GET_PRODUCT_DETAIL,
    payload: id,
  }
}

export const setProductDetails = (details) => {
  return {
    type: DETAIL_ACTIONS.SET_PRODUCT_DETAIL,
    payload: details,
  }
}

export const cleanupProductDetails = () => {
  return {
    type: DETAIL_ACTIONS.CLEANUP_DETAIL_DATA,
  }
}
